const dns = require('dns');
try { dns.setServers(['8.8.8.8', '1.1.1.1']); } catch(e) {}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'codegame_super_secret_jwt_2026';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://bngs050621_db_user:dawyItKNyXUvNuP6@codegamedatabase.zllimmj.mongodb.net/codegame?retryWrites=true&w=majority';

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.static('.'));

// --- MONGODB MODELLERİ (SCHEMAS) ---

// 1. Kullanıcı Şeması
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true, minlength: 3, maxlength: 30 },
  email: { type: String, required: true, unique: true, trim: true, lowercase: true },
  passwordHash: { type: String, required: true },
  avatar: { type: String, default: '🧑‍🌾' },
  totalXp: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

// 2. İlerleme Şeması (Dil bazlı modül & XP durumu)
const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  languages: {
    type: Map,
    of: new mongoose.Schema({
      completedTopics: { type: [String], default: [] },
      completedCount: { type: Number, default: 0 },
      xp: { type: Number, default: 0 },
      lastActiveAt: { type: Date, default: Date.now }
    }, { _id: false }),
    default: {}
  },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Progress = mongoose.model('Progress', progressSchema);

// --- AUTH MIDDLEWARE (JWT DOĞRULAYICI) ---
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ ok: false, msg: 'Yetkilendirme başarısız. Lütfen giriş yapın.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ ok: false, msg: 'Oturum süresi dolmuş veya geçersiz token.' });
  }
};

// --- AUTH ROUTE'LARI ---

// 1. Kayıt Ol (Register)
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ ok: false, msg: 'Tüm alanları doldurunuz.' });
    }

    if (username.trim().length < 3) {
      return res.status(400).json({ ok: false, msg: 'Kullanıcı adı en az 3 karakter olmalıdır.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ ok: false, msg: 'Şifre en az 6 karakter olmalıdır.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: cleanEmail });
    if (existingUser) {
      return res.status(400).json({ ok: false, msg: 'Bu e-posta adresiyle kayıtlı bir hesap zaten var.' });
    }

    // Şifre Hashleme
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username.trim(),
      email: cleanEmail,
      passwordHash,
      avatar: '🧑‍🌾',
      totalXp: 0
    });

    await newUser.save();

    // Başlangıç İlerleme Tablosu
    const newProgress = new Progress({
      userId: newUser._id,
      languages: {}
    });
    await newProgress.save();

    // JWT Token Üret
    const token = jwt.sign(
      { id: newUser._id, username: newUser.username, email: newUser.email },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.status(201).json({
      ok: true,
      msg: 'Kayıt başarıyla tamamlandı! Hoş geldiniz 🎉',
      token,
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        avatar: newUser.avatar,
        totalXp: newUser.totalXp
      }
    });
  } catch (error) {
    console.error('Kayıt Hatası:', error);
    res.status(500).json({ ok: false, msg: 'Sunucu hatası oluştu. Lütfen tekrar deneyin.' });
  }
});

// 2. Giriş Yap (Login)
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ ok: false, msg: 'E-posta ve şifre gereklidir.' });
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(400).json({ ok: false, msg: 'Geçersiz e-posta veya şifre.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ ok: false, msg: 'Geçersiz e-posta veya şifre.' });
    }

    const token = jwt.sign(
      { id: user._id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: '30d' }
    );

    res.json({
      ok: true,
      msg: 'Giriş başarılı! Hoş geldin, ' + user.username + ' 🚀',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
        totalXp: user.totalXp
      }
    });
  } catch (error) {
    console.error('Giriş Hatası:', error);
    res.status(500).json({ ok: false, msg: 'Giriş yapılırken bir hata oluştu.' });
  }
});

// 3. Mevcut Kullanıcı Bilgisi (Me)
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-passwordHash');
    if (!user) {
      return res.status(404).json({ ok: false, msg: 'Kullanıcı bulunamadı.' });
    }
    res.json({ ok: true, user });
  } catch (error) {
    res.status(500).json({ ok: false, msg: 'Profil bilgisi alınamadı.' });
  }
});

// --- İLERLEME (PROGRESS) ROUTE'LARI ---

// 4. İlerlemeyi Getir (Get Progress)
app.get('/api/progress', authMiddleware, async (req, res) => {
  try {
    let progress = await Progress.findOne({ userId: req.user.id });
    if (!progress) {
      progress = new Progress({ userId: req.user.id, languages: {} });
      await progress.save();
    }
    res.json({ ok: true, languages: progress.languages || {} });
  } catch (error) {
    console.error('İlerleme Getirme Hatası:', error);
    res.status(500).json({ ok: false, msg: 'İlerleme verisi yüklenemedi.' });
  }
});

// 5. İlerlemeyi Kaydet / Senkronize Et (Sync Progress)
app.post('/api/progress/sync', authMiddleware, async (req, res) => {
  try {
    const { langId, completedTopics, xp, completedCount } = req.body;

    if (!langId) {
      return res.status(400).json({ ok: false, msg: 'Programlama dili kimliği (langId) gereklidir.' });
    }

    let progress = await Progress.findOne({ userId: req.user.id });
    if (!progress) {
      progress = new Progress({ userId: req.user.id, languages: {} });
    }

    // Dil kaydını güncelle
    const currentLangData = progress.languages.get(langId) || {
      completedTopics: [],
      completedCount: 0,
      xp: 0
    };

    // Mevcut konular ile yenileri birleştir (tekrarsız)
    const topicSet = new Set([...currentLangData.completedTopics, ...(completedTopics || [])]);
    const mergedTopics = Array.from(topicSet);
    const finalCount = Math.max(currentLangData.completedCount, completedCount || mergedTopics.length);
    const finalXp = Math.max(currentLangData.xp, xp || 0);

    progress.languages.set(langId, {
      completedTopics: mergedTopics,
      completedCount: finalCount,
      xp: finalXp,
      lastActiveAt: new Date()
    });

    progress.updatedAt = new Date();
    await progress.save();

    // Kullanıcının toplam XP'sini güncelle
    let totalXpCalc = 0;
    for (let [, langVal] of progress.languages) {
      totalXpCalc += (langVal.xp || 0);
    }

    await User.findByIdAndUpdate(req.user.id, { totalXp: totalXpCalc });

    res.json({
      ok: true,
      msg: 'İlerleme buluta başarıyla kaydedildi! ☁️✓',
      languages: progress.languages,
      totalXp: totalXpCalc
    });
  } catch (error) {
    console.error('İlerleme Kaydetme Hatası:', error);
    res.status(500).json({ ok: false, msg: 'İlerleme senkronize edilemedi.' });
  }
});

// --- SUNUCU BAŞLATMA & MONGODB BAĞLANTISI ---
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB Atlas Veritabanına Başarıyla Bağlanıldı!');
    app.listen(PORT, () => {
      console.log(`🚀 Kodlama Oyunu Sunucusu http://localhost:${PORT} adresinde aktif!`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB Bağlantı Hatası:', err.message);
  });
