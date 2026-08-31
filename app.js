/**
 * 🌾 Kod Çiftliği (Code & Farm) - Radyal Yetenek Ağacı (Skill Tree) & Oyun Motoru
 */

// --- 1. SES SENTEZLEYİCİSİ (Web Audio API) ---
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.3, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.12);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.12);
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now + i * 0.08);
      gain.gain.linearRampToValueAtTime(0.2, now + i * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.08);
      osc.stop(now + i * 0.08 + 0.25);
    });
  }

  playError() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.2);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.linearRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    const notes = [440, 554.37, 659.25, 880, 880, 880, 1108.73];
    const times = [0, 0.15, 0.3, 0.45, 0.65, 0.85, 1.05];
    const now = this.ctx.currentTime;
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.25, now + times[i]);
      gain.gain.exponentialRampToValueAtTime(0.001, now + times[i] + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + times[i]);
      osc.stop(now + times[i] + 0.35);
    });
  }
}

const sfx = new SoundEffects();

// --- 2. DİL VE RADYAL YETENEK AĞACI MODELİ ---
const SKILL_TREE_JAVA_NODES = [
  // 0 NOKTASI: Görseldeki en alttaki parlayan altın altıgen (Başlangıç Düğümü)
  {
    id: 's0',
    x: 480,
    y: 550,
    type: 'hex',
    branch: '🌱 Başlangıç (0 Noktası)',
    title: 'Seviye 1: Değişken İsimlendirme Kuralları',
    desc: 'Java\'da değişken tanımlarken rakamla başlanamayacağını öğren, tarlanın ilk köşesindeki taşları temizle ve tohumunu ek!',
    levelNum: 1,
    xp: 50,
    parents: []
  },

  // GÜNEY DALI (Yukarıya doğru yükselen giriş yolu)
  {
    id: 's1',
    x: 515,
    y: 480,
    type: 'hex',
    branch: '🌱 Giriş & Değişkenler',
    title: 'Seviye 2: Tam Sayılar (int) & Kuyu Basıncı',
    desc: 'Tam sayı değişkenleri (int x = 5;) tanımlayarak kuyu basıncını ve tarla sayaçlarını ayarla.',
    levelNum: 2,
    xp: 50,
    parents: ['s0']
  },
  {
    id: 's2',
    x: 480,
    y: 420,
    type: 'hex',
    branch: '🌱 Giriş & Değişkenler',
    title: 'Seviye 3: Metin Veri Tipi (String)',
    desc: 'Metin verileri için String sınıfı kullanımı ve çift tırnak kuralları.',
    levelNum: 3,
    xp: 60,
    parents: ['s1']
  },

  // MERKEZ DAĞITICI HUB (JVM)
  {
    id: 'center',
    x: 480,
    y: 340,
    type: 'hex',
    branch: '⚡ Merkez Çekirdek',
    title: 'Java Çiftlik Çekirdeği (JVM Hub)',
    desc: 'Ana dağıtıcı çekirdek. Buradan Aritmetik, Mantık, Döngüler ve OOP dallarına geçiş yapabilirsin.',
    levelNum: 0,
    xp: 50,
    parents: ['s2']
  },

  // GÜNEY-DOĞU DALI (Operatörler & Matematik)
  {
    id: 'se1',
    x: 560,
    y: 375,
    type: 'hex',
    branch: 'Aritmetik',
    title: 'Aritmetik Operatörler (+, -, *)',
    desc: 'Mahsul miktarlarını toplama, çıkarma ve çarpma işlemleriyle hesapla.',
    levelNum: 4,
    xp: 50,
    parents: ['center']
  },
  {
    id: 'se2',
    x: 630,
    y: 415,
    type: 'hex',
    branch: 'Aritmetik',
    title: 'Bölme & Mod Alma (/, %)',
    desc: 'Tarlayı parsellere paylaştırma ve kalan tohum hesabı.',
    levelNum: 5,
    xp: 60,
    parents: ['se1']
  },
  {
    id: 'se3',
    x: 700,
    y: 460,
    type: 'hex',
    branch: 'Aritmetik',
    title: 'Bileşik Atamalar (+=, -=, ++)',
    desc: 'Değişkenleri hızlı artırma ve azaltma operatörleri.',
    levelNum: 6,
    xp: 70,
    parents: ['se2']
  },
  {
    id: 'se4',
    x: 775,
    y: 490,
    type: 'diamond',
    branch: 'Aritmetik',
    title: 'Büyük Hasat: Math Kütüphanesi 💎',
    desc: 'Math.max, Math.min ve Math.round ile profesyonel hasat raporlama.',
    levelNum: 7,
    xp: 100,
    parents: ['se3']
  },

  // DOĞU DALI (Mantık & Karşılaştırmalar)
  {
    id: 'e1',
    x: 580,
    y: 320,
    type: 'hex',
    branch: 'Mantıksal Kararlar',
    title: 'Karşılaştırma Operatörleri (==, !=, >, <)',
    desc: 'Sera sıcaklığı ve nem değerlerini eşik değerlerle kıyasla.',
    levelNum: 8,
    xp: 50,
    parents: ['center']
  },
  {
    id: 'e2',
    x: 660,
    y: 335,
    type: 'hex',
    branch: 'Mantıksal Kararlar',
    title: 'Mantıksal Operatörler (&& VE, || VEYA)',
    desc: 'Birden fazla hava durumu koşulunu aynı anda denetle.',
    levelNum: 9,
    xp: 60,
    parents: ['e1']
  },
  {
    id: 'e3',
    x: 740,
    y: 310,
    type: 'hex',
    branch: 'Mantıksal Kararlar',
    title: 'Koşul Yapıları: If - Else',
    desc: 'Don olayında sera kapaklarını kapatan güvenlik algoritması.',
    levelNum: 10,
    xp: 70,
    parents: ['e2']
  },
  {
    id: 'e4',
    x: 820,
    y: 345,
    type: 'diamond',
    branch: 'Mantıksal Kararlar',
    title: 'Mevsim Kontrolörü: Switch-Case 💎',
    desc: 'Dört mevsim için tarla ekim planını switch-case ile yönet.',
    levelNum: 11,
    xp: 100,
    parents: ['e3']
  },

  // KUZEY-DOĞU DALI (Döngüler & Otomasyon)
  {
    id: 'ne1',
    x: 540,
    y: 260,
    type: 'hex',
    branch: 'Döngüler',
    title: 'For Döngüsü Temelleri',
    desc: 'Traktörün tarladaki 9 parseli sırayla gezmesini sağla.',
    levelNum: 12,
    xp: 60,
    parents: ['center']
  },
  {
    id: 'ne2',
    x: 615,
    y: 195,
    type: 'hex',
    branch: 'Döngüler',
    title: 'While & Do-While Döngüleri',
    desc: 'Su tankı boşalana kadar sulama yapmaya devam et.',
    levelNum: 13,
    xp: 70,
    parents: ['ne1']
  },
  {
    id: 'ne3',
    x: 745,
    y: 135,
    type: 'diamond',
    branch: 'Döngüler',
    title: 'İç İçe Döngülerle 2D Matris Hasadı 💎',
    desc: 'Satır ve sütunları for döngüsüyle tarayarak tüm araziyi hasat et.',
    levelNum: 14,
    xp: 100,
    parents: ['ne2']
  },

  // KUZEY DALI (Diziler & Koleksiyonlar)
  {
    id: 'n1',
    x: 480,
    y: 250,
    type: 'hex',
    branch: 'Diziler & Listeler',
    title: 'Tek Boyutlu Diziler (Arrays)',
    desc: 'Tüm mahsul türlerini tek bir dizide depola.',
    levelNum: 15,
    xp: 60,
    parents: ['center']
  },
  {
    id: 'n2',
    x: 435,
    y: 165,
    type: 'hex',
    branch: 'Diziler & Listeler',
    title: 'ArrayList Dinamik Listeleri',
    desc: 'Kapasitesi dinamik olarak büyüyen ambar sepeti oluştur.',
    levelNum: 16,
    xp: 70,
    parents: ['n1']
  },
  {
    id: 'n3',
    x: 515,
    y: 125,
    type: 'hex',
    branch: 'Diziler & Listeler',
    title: 'Gelişmiş For-Each Döngüsü',
    desc: 'Dizideki tüm elemanları for-each ile ekrana listele.',
    levelNum: 17,
    xp: 80,
    parents: ['n2']
  },
  {
    id: 'n4',
    x: 450,
    y: 65,
    type: 'diamond',
    branch: 'Diziler & Listeler',
    title: 'Akıllı Ambar Veri Yapısı 💎',
    desc: 'Ambardaki ürünleri arama ve sıralama algoritmaları.',
    levelNum: 18,
    xp: 120,
    parents: ['n3']
  },

  // KUZEY-BATI DALI (Metotlar & Fonksiyonlar)
  {
    id: 'nw1',
    x: 415,
    y: 260,
    type: 'hex',
    branch: 'Metotlar',
    title: 'Statik Metot Tanımlama',
    desc: 'Tekrar eden sulama kodlarını metot içerisine topla.',
    levelNum: 19,
    xp: 60,
    parents: ['center']
  },
  {
    id: 'nw2',
    x: 340,
    y: 195,
    type: 'hex',
    branch: 'Metotlar',
    title: 'Parametreli & Geri Dönüşlü Metotlar',
    desc: 'Verim hesaplayan ve return ile sonuç döndüren fonksiyonlar.',
    levelNum: 20,
    xp: 70,
    parents: ['nw1']
  },
  {
    id: 'nw3',
    x: 275,
    y: 155,
    type: 'hex',
    branch: 'Metotlar',
    title: 'Metot Aşırı Yükleme (Overloading)',
    desc: 'Aynı isimde farklı parametre alan esnek traktör metotları.',
    levelNum: 21,
    xp: 80,
    parents: ['nw2']
  },
  {
    id: 'nw4',
    x: 170,
    y: 125,
    type: 'diamond',
    branch: 'Metotlar',
    title: 'Tam Otomatik Çiftlik Metot Kütüphanesi 💎',
    desc: 'Modüler çiftlik operasyonları motoru.',
    levelNum: 22,
    xp: 120,
    parents: ['nw3']
  },

  // BATI DALI (Nesne Yönelimli Programlama - OOP)
  {
    id: 'w1',
    x: 375,
    y: 320,
    type: 'hex',
    branch: 'OOP - Nesneler',
    title: 'Sınıf (Class) & Nesne (Object)',
    desc: 'Traktor ve Tarla sınıfları oluşturup new ile nesneler türet.',
    levelNum: 23,
    xp: 70,
    parents: ['center']
  },
  {
    id: 'w2',
    x: 295,
    y: 320,
    type: 'hex',
    branch: 'OOP - Nesneler',
    title: 'Yapıcı Metotlar (Constructors)',
    desc: 'Nesne oluşturulurken ilk tohum türünü ve gübreyi belirle.',
    levelNum: 24,
    xp: 80,
    parents: ['w1']
  },
  {
    id: 'w3a',
    x: 225,
    y: 260,
    type: 'hex',
    branch: 'OOP - Kapsülleme',
    title: 'Kapsülleme (Getter & Setter)',
    desc: 'Tarla nemini private yapıp güvenli erişim sağla.',
    levelNum: 25,
    xp: 90,
    parents: ['w2']
  },
  {
    id: 'w4a',
    x: 120,
    y: 210,
    type: 'diamond',
    branch: 'OOP - Kalıtım',
    title: 'Kalıtım (Inheritance): Traktör Çeşitleri 💎',
    desc: 'Superclass ve Subclass ile özel biçerdöverler tasarla.',
    levelNum: 26,
    xp: 150,
    parents: ['w3a']
  },
  {
    id: 'w3b',
    x: 225,
    y: 380,
    type: 'hex',
    branch: 'OOP - Çok Biçimlilik',
    title: 'Polymorphism & Arayüzler (Interfaces)',
    desc: 'Sulayabilir ve HasatEdilebilir arabirimlerini uygula.',
    levelNum: 27,
    xp: 90,
    parents: ['w2']
  },
  {
    id: 'w4b',
    x: 120,
    y: 420,
    type: 'diamond',
    branch: 'OOP - Zirve',
    title: 'Büyük Çiftlik İmparatorluğu (Master OOP) 💎',
    desc: 'Tüm nesneleri birleştiren ana çiftlik simülasyonu.',
    levelNum: 28,
    xp: 200,
    parents: ['w3b']
  },

  // GÜNEY-BATI DALI (İleri Konular)
  {
    id: 'sw1',
    x: 395,
    y: 385,
    type: 'hex',
    branch: 'İleri Seviye',
    title: 'Hata Yönetimi (Try - Catch)',
    desc: 'Sensör arızalarında çiftliğin çökmesini engelle.',
    levelNum: 29,
    xp: 80,
    parents: ['center']
  },
  {
    id: 'sw2',
    x: 325,
    y: 450,
    type: 'hex',
    branch: 'İleri Seviye',
    title: 'Dosya İşlemleri (File I/O)',
    desc: 'Günlük hasat verilerini diske kaydet ve oku.',
    levelNum: 30,
    xp: 90,
    parents: ['sw1']
  },
  {
    id: 'sw3',
    x: 250,
    y: 420,
    type: 'hex',
    branch: 'İleri Seviye',
    title: 'Lambda & Stream API',
    desc: 'Mahsul listesini tek satırda filtrele ve sırala.',
    levelNum: 31,
    xp: 100,
    parents: ['sw2']
  },
  {
    id: 'sw4',
    x: 175,
    y: 505,
    type: 'diamond',
    branch: 'İleri Seviye',
    title: 'Tam Otomasyon: Java Çiftlik Efendisi 💎',
    desc: 'Çok iş parçacıklı (Multi-threading) asenkron hasat motoru.',
    levelNum: 32,
    xp: 250,
    parents: ['sw3']
  }
];

// Diller Veritabanı (Screenshot ile birebir eşleşen dil listesi ve ders sayıları)
const LANGUAGES_DB = [
  {
    id: 'python',
    name: 'Python',
    lessonsText: '70 Alıştırma • 14 Modül',
    badgeClass: 'badge-python',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>`,
    icon: '🐍',
    category: 'backend',
    fileExt: 'main.py',
    langTag: 'Python 3.12',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'java',
    name: 'Java',
    lessonsText: '70 Alıştırma • 14 Modül',
    badgeClass: 'badge-java',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    icon: '☕',
    category: 'backend',
    fileExt: 'Main.java',
    langTag: 'Java 21',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'flutter',
    name: 'Flutter',
    lessonsText: '42 Ders',
    badgeClass: 'badge-flutter',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    icon: '💙',
    category: 'mobile',
    fileExt: 'main.dart',
    langTag: 'Flutter 3 / Dart',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'react',
    name: 'React',
    lessonsText: '50 Ders',
    badgeClass: 'badge-react',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    icon: '⚛️',
    category: 'frontend',
    fileExt: 'FarmDashboard.jsx',
    langTag: 'React 18 / JSX',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'swift',
    name: 'Swift',
    lessonsText: '28 Ders',
    badgeClass: 'badge-swift',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>`,
    icon: '🍎',
    category: 'mobile',
    fileExt: 'main.swift',
    langTag: 'Swift 5.9',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    lessonsText: '32 Ders',
    badgeClass: 'badge-kotlin',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    icon: '🟣',
    category: 'mobile',
    fileExt: 'Main.kt',
    langTag: 'Kotlin 1.9',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    lessonsText: '54 Ders',
    badgeClass: 'badge-javascript',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
    icon: '🟨',
    category: 'frontend',
    fileExt: 'index.js',
    langTag: 'ES2023',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'cpp',
    name: 'C++',
    lessonsText: '40 Ders',
    badgeClass: 'badge-cpp',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"></path></svg>`,
    icon: '⚙️',
    category: 'backend',
    fileExt: 'main.cpp',
    langTag: 'C++20',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'sql',
    name: 'SQL',
    lessonsText: '35 Ders',
    badgeClass: 'badge-sql',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    icon: '🗄️',
    category: 'database',
    fileExt: 'sorgu.sql',
    langTag: 'PostgreSQL',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'c',
    name: 'C Dili',
    lessonsText: '30 Ders',
    badgeClass: 'badge-c',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    icon: '⚡',
    category: 'backend',
    fileExt: 'ciftlik.c',
    langTag: 'C99 / GCC',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  }
];

// --- 3. GLOBAL OYUN DURUMU (GLOBAL STATE) ---
const state = {
  currentView: 'languages', // 'languages', 'roadmap', 'game'
  selectedLangId: 'java',
  selectedNodeId: 's0', // 0 Noktası (Başlangıç Düğümü)
  completedNodes: new Set(),
  activeNodeId: 's0',
  currentPlotIndex: 0,
  xp: 0,
  harvestCount: 0,
  completedPlots: new Set(),
  searchQuery: ''
};

// --- 4. DOM ELEMANLARI ---
const dom = {
  viewLanguages: document.getElementById('view-languages'),
  viewRoadmap: document.getElementById('view-roadmap'),
  viewGame: document.getElementById('view-game'),

  navBrand: document.getElementById('nav-brand'),
  navBtnHome: document.getElementById('nav-btn-home'),
  navBtnRoadmap: document.getElementById('nav-btn-roadmap'),
  navBtnGame: document.getElementById('nav-btn-game'),
  headerLangBadge: document.getElementById('header-lang-badge'),
  headerSubtitle: document.getElementById('header-subtitle'),
  statXp: document.getElementById('stat-xp'),
  statMastery: document.getElementById('stat-mastery'),
  statHarvest: document.getElementById('stat-harvest'),
  btnSoundToggle: document.getElementById('btn-sound-toggle'),

  // Dil Seçimi & Arama
  languagesGrid: document.getElementById('languages-grid'),
  languageSearchInput: document.getElementById('language-search-input'),

  // Radyal Yetenek Ağacı
  btnBackToLanguages: document.getElementById('btn-back-to-languages'),
  treeLangIcon: document.getElementById('tree-lang-icon'),
  treeLangTitle: document.getElementById('tree-lang-title'),
  treeLangDesc: document.getElementById('tree-lang-desc'),
  treeProgressText: document.getElementById('tree-progress-text'),
  skilltreeWrapper: document.getElementById('skilltree-wrapper'),
  svgPathsLayer: document.getElementById('svg-paths-layer'),
  svgNodesLayer: document.getElementById('svg-nodes-layer'),
  
  // Canlı Hover Tooltip
  treeHoverTooltip: document.getElementById('tree-hover-tooltip'),
  ttBadge: document.getElementById('tt-badge'),
  ttStatus: document.getElementById('tt-status'),
  ttTitle: document.getElementById('tt-title'),
  ttDesc: document.getElementById('tt-desc'),

  // Tıklanan Düğüm Kartı
  nodeFloatingCard: document.getElementById('node-floating-card'),
  btnCloseNodeCard: document.getElementById('btn-close-node-card'),
  cardNodeBadge: document.getElementById('card-node-badge'),
  cardNodeXp: document.getElementById('card-node-xp'),
  cardNodeTitle: document.getElementById('card-node-title'),
  cardNodeDesc: document.getElementById('card-node-desc'),
  cardBranchTag: document.getElementById('card-branch-tag'),
  btnStartNodeLevel: document.getElementById('btn-start-node-level'),

  // Tarla Oyunu
  btnBackToRoadmap: document.getElementById('btn-back-to-roadmap'),
  gameBreadcrumb: document.getElementById('game-breadcrumb'),
  farmLevelTitle: document.getElementById('farm-level-title'),
  farmLevelSubtitle: document.getElementById('farm-level-subtitle'),
  farmGrid: document.getElementById('farm-grid'),
  taskBadge: document.getElementById('task-badge'),
  taskTitle: document.getElementById('task-title'),
  taskDesc: document.getElementById('task-desc'),
  theoryList: document.getElementById('theory-list'),
  editorFilename: document.getElementById('editor-filename'),
  editorLangTag: document.getElementById('editor-lang-tag'),
  codeInput: document.getElementById('code-input'),
  terminalOutput: document.getElementById('terminal-output'),
  btnClearConsole: document.getElementById('btn-clear-console'),
  btnRun: document.getElementById('btn-run'),
  btnHint: document.getElementById('btn-hint'),
  btnSolution: document.getElementById('btn-solution'),
  lineNumbers: document.getElementById('line-numbers'),

  // Modal
  victoryModal: document.getElementById('victory-modal'),
  victoryTitle: document.getElementById('victory-title'),
  victorySubtitle: document.getElementById('victory-subtitle'),
  victoryBadgeIcon: document.getElementById('victory-badge-icon'),
  victoryBadgeText: document.getElementById('victory-badge-text'),
  finalXp: document.getElementById('final-xp'),
  finalCrops: document.getElementById('final-crops'),
  btnRestart: document.getElementById('btn-restart'),
  btnModalRoadmap: document.getElementById('btn-modal-roadmap')
};

// --- 5. EKRAN GEÇİŞLERİ ---
function switchView(viewName) {
  state.currentView = viewName;
  sfx.playPop();

  dom.viewLanguages.classList.remove('active');
  dom.viewRoadmap.classList.remove('active');
  dom.viewGame.classList.remove('active');

  if (dom.navBtnHome) dom.navBtnHome.classList.remove('active');
  if (dom.navBtnRoadmap) dom.navBtnRoadmap.classList.remove('active');
  if (dom.navBtnGame) dom.navBtnGame.classList.remove('active');

  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];

  if (viewName === 'languages') {
    dom.viewLanguages.classList.add('active');
    if (dom.navBtnHome) dom.navBtnHome.classList.add('active');
    dom.headerLangBadge.textContent = 'Dilleri Keşfet';
    dom.headerSubtitle.textContent = 'İnteraktif kodlama macerana başlamak için bir yol seç.';
    renderLanguages();
  } else if (viewName === 'roadmap') {
    dom.viewRoadmap.classList.add('active');
    if (dom.navBtnRoadmap) dom.navBtnRoadmap.classList.add('active');
    dom.headerLangBadge.textContent = curLang.name;
    dom.headerSubtitle.textContent = `${curLang.name} Konu Haritası & Gelişen Şehir`;
    renderSkillTree();
  } else if (viewName === 'game') {
    dom.viewGame.classList.add('active');
    if (dom.navBtnGame) dom.navBtnGame.classList.add('active');
    dom.headerLangBadge.textContent = `${curLang.name}`;
    dom.headerSubtitle.textContent = 'Kodunu yaz, testleri çalıştır ve çözümü onayla!';
    loadNodeFarmGame();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 6. DİL SEÇİM EKRANI (Explore Languages - 2 Sütunlu Kartlar) ---
function renderLanguages() {
  if (!dom.languagesGrid) return;
  dom.languagesGrid.innerHTML = '';

  const q = (state.searchQuery || '').trim().toLowerCase();

  const filtered = LANGUAGES_DB.filter(l => {
    if (!q) return true;
    return l.name.toLowerCase().includes(q) || (l.lessonsText && l.lessonsText.toLowerCase().includes(q));
  });

  if (filtered.length === 0) {
    dom.languagesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem 1rem; color: #64748b;">
        <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
        <strong style="color: #1e293b; font-size: 1.1rem;">Sonuç Bulunamadı</strong>
        <p style="font-size: 0.9rem; margin-top: 4px;">"${q}" aramasına uygun bir programlama dili bulunamadı.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(lang => {
    const card = document.createElement('div');
    card.className = 'explore-card';

    card.innerHTML = `
      <div class="explore-badge ${lang.badgeClass}">
        ${lang.iconSvg}
      </div>
      <div class="explore-name">${lang.name}</div>
      <div class="explore-lessons">${lang.lessonsText}</div>
    `;

    card.addEventListener('click', () => {
      state.selectedLangId = lang.id;
      switchView('roadmap');
    });

    dom.languagesGrid.appendChild(card);
  });
}

// --- 7. GELİŞEN ŞEHİR & DİKEY KONU YOL HARİTASI (Evolving City & Roadmap Engine) ---

const COURSE_TOPICS_DB = {
  java: [
    {
        "id": "java_1",
        "title": "1. Değişkenler & Temel Veri Tipleri",
        "desc": "Syntax, System.out.println, int, double, char, String ve tür dönüşümü (type casting).",
        "reward": "🏡 Giriş Çiftliği & Su Kuyusu",
        "status": "active",
        "xp": 120
    },
    {
        "id": "java_2",
        "title": "2. Operatörler & Matematiksel İşlemler",
        "desc": "Aritmetik, mod (%), artırma (++), mantıksal (&&, ||) ve Math sınıfı (Math.max, Math.sqrt).",
        "reward": "💡 Elektrik Şebekesi & Trafo",
        "status": "locked",
        "xp": 140
    },
    {
        "id": "java_3",
        "title": "3. Stringler & Metin İşlemleri",
        "desc": "String metotları (.length(), .toUpperCase(), .charAt(), .equals()) ve metin birleştirme.",
        "reward": "🚰 Su Arıtma & Fıskiye Havuzu",
        "status": "locked",
        "xp": 160
    },
    {
        "id": "java_4",
        "title": "4. Koşullu Durumlar (If / Else / Switch)",
        "desc": "if, else if, else blokları, ternary (? :) operatörü ve switch-case-break yapısı.",
        "reward": "🌳 Şehir Parkı & Botanik Bahçe",
        "status": "locked",
        "xp": 180
    },
    {
        "id": "java_5",
        "title": "5. Döngüler (While & For Loops)",
        "desc": "for döngüsü, while döngüsü, do-while, break ve continue akış kontrolü.",
        "reward": "🎡 Lunapark & Dönme Dolap",
        "status": "locked",
        "xp": 200
    },
    {
        "id": "java_6",
        "title": "6. Diziler & Çok Boyutlu Diziler (Arrays)",
        "desc": "Tek boyutlu diziler int[], dizi.length özelliği, For-Each döngüsü ve matrisler int[][].",
        "reward": "🏢 Modern Rezidanslar & İş Kuleleri",
        "status": "locked",
        "xp": 220
    },
    {
        "id": "java_7",
        "title": "7. Metotlar & Parametreler (Methods)",
        "desc": "Statik ve void metotlar, parametre aktarımı, return değeri ve Method Overloading.",
        "reward": "🎬 Sinema & Kültür Merkezi",
        "status": "locked",
        "xp": 250
    },
    {
        "id": "java_8",
        "title": "8. OOP: Sınıflar ve Nesneler",
        "desc": "class şablonları, new ile nesne üretme, nesne alanları, metotları ve this anahtar kelimesi.",
        "reward": "🏛️ Yönetim Sarayı & Belediye",
        "status": "locked",
        "xp": 280
    },
    {
        "id": "java_9",
        "title": "9. Kurucular & Erişim Belirteçleri",
        "desc": "Constructors (yapıcı metotlar), public, private, static ve kurucu aşırı yükleme.",
        "reward": "🏥 Şehir Hastanesi & Acil Servis",
        "status": "locked",
        "xp": 300
    },
    {
        "id": "java_10",
        "title": "10. Kapsülleme & Paketler (Encapsulation)",
        "desc": "private veri alanları, Getter & Setter metotları, veri doğrulama ve import paket yönetimi.",
        "reward": "🛍️ Alışveriş & Ticaret Merkezi",
        "status": "locked",
        "xp": 320
    },
    {
        "id": "java_11",
        "title": "11. Kalıtım & Çok Biçimlilik (Inheritance)",
        "desc": "extends ile miras alma, super() kurucu çağrısı, @Override metot ezme ve Polymorphism.",
        "reward": "🚄 Hızlı Tren Garı & Raylar",
        "status": "locked",
        "xp": 350
    },
    {
        "id": "java_12",
        "title": "12. Soyutlama & Arayüzler (Interfaces)",
        "desc": "abstract sınıflar, interface tanımlama, implements anahtar kelimesi ve Enum sabitleri.",
        "reward": "📡 5G Telekom & Uydu Kulesi",
        "status": "locked",
        "xp": 380
    },
    {
        "id": "java_13",
        "title": "13. Koleksiyonlar & Veri Yapıları",
        "desc": "Dinamik ArrayList, Wrapper sınıfları (Integer), HashMap (put/get) ve HashSet kümeleri.",
        "reward": "🚢 Uluslararası Liman & Konteynerler",
        "status": "locked",
        "xp": 420
    },
    {
        "id": "java_14",
        "title": "14. Hata Yönetimi & Dosya İşlemleri",
        "desc": "try-catch-finally blokları, throw ile hata fırlatma, FileWriter ile dosyaya yazma.",
        "reward": "🚀 Teknoloji Vadisi & Roket Üssü",
        "status": "locked",
        "xp": 450
    }
],
  python: [
    {
      id: 'python_1',
      title: '1. Değişkenler & Veri Tipleri',
      desc: 'print() komutu, yorum satırları, değişken isimlendirme kuralları, int, float, str, bool ve type() fonksiyonu.',
      reward: '🛣️ Asfalt Yollar & Sokak Lambaları',
      status: 'active',
      xp: 120
    },
    {
      id: 'python_2',
      title: '2. Stringler & Metin İşlemleri',
      desc: 'İndeksleme, dilimleme [start:stop], len(), .upper(), .lower(), .replace(), .split() ve modern f-string formatlama.',
      reward: '💡 Şehir Elektrik Şebekesi',
      status: 'locked',
      xp: 140
    },
    {
      id: 'python_3',
      title: '3. Operatörler & Matematik',
      desc: 'Aritmetik (+, -, *, /, //, %, **), karşılaştırma (==, !=, >, <) ve mantıksal (and, or, not) operatörler.',
      reward: '🚰 Temiz Su Arıtma & Çeşmeler',
      status: 'locked',
      xp: 160
    },
    {
      id: 'python_4',
      title: '4. Koşullu Durumlar (If / Elif / Else)',
      desc: 'if, elif, else blokları, iki nokta (:) ve girintileme (indentation) kuralları, tek satır ternary if koşulları.',
      reward: '🌳 Şehir Parkı & Fıskiye',
      status: 'locked',
      xp: 180
    },
    {
      id: 'python_5',
      title: '5. Listeler & Demetler (Lists & Tuples)',
      desc: 'Listeler [], .append(), .pop(), .sort(), .insert() metotları ve değiştirilemez (immutable) demetler ().',
      reward: '🏢 Modern İş Kuleleri & Rezidanslar',
      status: 'locked',
      xp: 200
    },
    {
      id: 'python_6',
      title: '6. Sözlükler & Kümeler (Dict & Set)',
      desc: 'Anahtar-Değer (key: value) sözlükler {}, .keys(), .values(), .get() ve benzersiz eleman kümeleri set().',
      reward: '🎬 Modern Sinema & Tiyatro Kompleksi',
      status: 'locked',
      xp: 220
    },
    {
      id: 'python_7',
      title: '7. Döngüler (For & While)',
      desc: 'for döngüsü, range(başla, bitir, artış), while döngüsü, break (kır), continue (atla), enumerate() ve zip().',
      reward: '🎡 Lunapark & Dönme Dolap',
      status: 'locked',
      xp: 250
    },
    {
      id: 'python_8',
      title: '8. Fonksiyonlar & Kapsam',
      desc: 'def ile fonksiyon tanımlama, return ile değer döndürme, varsayılan parametreler, *args, **kwargs ve global kapsam.',
      reward: '🏥 Şehir Hastanesi & Acil Servis',
      status: 'locked',
      xp: 280
    },
    {
      id: 'python_9',
      title: '9. Lambda, Map & Filter',
      desc: 'Tek satırlık anonim lambda fonksiyonları, map(), filter() ve modern List Comprehension [x for x in liste] yapıları.',
      reward: '🛍️ Alışveriş & Ticaret Merkezi',
      status: 'locked',
      xp: 300
    },
    {
      id: 'python_10',
      title: '10. Modüller & Paketler',
      desc: 'Standart kütüphane modülleri (math, random, datetime), import, from ... import, as takma ad ve pip paket yönetimi.',
      reward: '🚄 Hızlı Tren Garı & Metro Hattı',
      status: 'locked',
      xp: 320
    },
    {
      id: 'python_11',
      title: '11. Hata ve İstisna Yönetimi (Try / Except)',
      desc: 'try, except blokları ile çalışma zamanı hatalarını yakalama, finally ile temizlik ve raise ile özel hata fırlatma.',
      reward: '📡 Uydu İletişim & Radyo Kulesi',
      status: 'locked',
      xp: 350
    },
    {
      id: 'python_12',
      title: '12. Dosya İşlemleri (File I/O)',
      desc: 'open() fonksiyonu, okuma ("r"), yazma ("w"), ekleme ("a") modları ve with open(...) otomatik dosya yönetimi.',
      reward: '🚢 Uluslararası Liman & Konteyner Terminali',
      status: 'locked',
      xp: 380
    },
    {
      id: 'python_13',
      title: '13. Nesne Yönelimli Programlama (OOP)',
      desc: 'class tanımlama, __init__ kurucu metodu, self nesne referansı, sınıf metotları ve Kalıtım (Inheritance).',
      reward: '🏛️ Çiftlik & Şehir Yönetim Sarayı',
      status: 'locked',
      xp: 420
    },
    {
      id: 'python_14',
      title: '14. İleri Seviye & GUI / Proje',
      desc: 'Tkinter ile görsel arayüz pencereleri ve butonlar, JSON veri işleme ve modüler Python şehir mimarisi.',
      reward: '🚀 Teknoloji Vadisi & Gözlemevi',
      status: 'locked',
      xp: 450
    }
  ],
};

// Dil bazlı konu durumlarını saklayan nesne
const userTopicsState = {};

// Diller için konu listesi adaptörü (Her dil için Level 1'den başlar)
function getLanguageTopics(langId) {
  if (!userTopicsState[langId]) {
    const curLang = LANGUAGES_DB.find(l => l.id === langId) || LANGUAGES_DB[0];
    const baseTopics = COURSE_TOPICS_DB[langId] || COURSE_TOPICS_DB.python;
    userTopicsState[langId] = baseTopics.map((t, idx) => ({
      ...t,
      id: `${langId}_${idx + 1}`,
      title: t.title.replace('Python', curLang.name),
      desc: t.desc.replace('Python', curLang.name),
      status: idx === 0 ? 'active' : 'locked'
    }));
  }
  return userTopicsState[langId];
}

function completeCurrentTopic(langId, topicId) {
  setTimeout(() => { if (typeof authManager !== 'undefined') authManager.syncCurrentLocalProgress(langId); }, 200);
  const topics = getLanguageTopics(langId);
  const currentIdx = topics.findIndex(t => t.id === topicId);
  if (currentIdx !== -1) {
    topics[currentIdx].status = 'done';
    if (currentIdx + 1 < topics.length) {
      if (topics[currentIdx + 1].status === 'locked') {
        topics[currentIdx + 1].status = 'active';
      }
    }
  }
}

// Şehir Görselini Çizen Fonksiyon (Tamamlanan Konu Sayısına Göre Şehir Gelişir)
// 3D İzometrik Şehir Çizim Motoru (Isometric 3D City Engine)
function renderCityVisual(completedCount) {
  const svg = document.getElementById('city-dynamic-svg');
  if (!svg) return;

  const statusText = document.getElementById('city-status-text');
  const countText = document.getElementById('city-building-count');
  const levelPercent = Math.min(100, Math.round((completedCount / 14) * 100));

  if (countText) {
    countText.textContent = `${completedCount} / 14 Bina`;
  }

  if (statusText) {
    let phaseName = 'Issız Harabe Toprak';
    if (completedCount >= 14) phaseName = 'Mega Siber Metropol & Teknokent';
    else if (completedCount >= 12) phaseName = 'Uluslararası Liman & Metropol';
    else if (completedCount >= 9) phaseName = 'Modern Ticaret ve Sanayi Şehri';
    else if (completedCount >= 6) phaseName = 'Eğlence ve Kültür Merkezi';
    else if (completedCount >= 3) phaseName = 'Gelişen Kasaba & Altyapı';
    else if (completedCount >= 1) phaseName = 'İlk Yerleşim & Çiftlik';

    statusText.textContent = `Şehirleşme: %${levelPercent} • ${phaseName}`;
  }

  // 3D Isometric Building Helper
  const isoBox = (x, y, w, d, h, topCol, leftCol, rightCol, stroke = 'rgba(0,0,0,0.15)') => {
    // x, y: base center top point
    // w: half width X, d: depth Y slope
    const pTop = `${x},${y - h} ${x + w},${y - h + d} ${x},${y - h + 2*d} ${x - w},${y - h + d}`;
    const pLeft = `${x - w},${y - h + d} ${x},${y - h + 2*d} ${x},${y + 2*d} ${x - w},${y + d}`;
    const pRight = `${x},${y - h + 2*d} ${x + w},${y - h + d} ${x + w},${y + d} ${x},${y + 2*d}`;

    return `
      <polygon points="${pLeft}" fill="${leftCol}" stroke="${stroke}" stroke-width="0.75" />
      <polygon points="${pRight}" fill="${rightCol}" stroke="${stroke}" stroke-width="0.75" />
      <polygon points="${pTop}" fill="${topCol}" stroke="${stroke}" stroke-width="0.75" />
    `;
  };

  // 3D Tree Helper
  const isoTree = (x, y, scale = 1) => {
    return `
      <g transform="translate(${x}, ${y}) scale(${scale})">
        <!-- Gövde -->
        ${isoBox(0, 0, 3, 2, 8, '#78350f', '#451a03', '#92400e')}
        <!-- Yapraklar -->
        ${isoBox(0, -6, 12, 7, 10, '#22c55e', '#15803d', '#16a34a')}
        ${isoBox(0, -14, 8, 5, 8, '#4ade80', '#16a34a', '#22c55e')}
      </g>
    `;
  };

  let svgHTML = `
    <defs>
      <!-- Gökyüzü ve Ortam Gradyanları -->
      <linearGradient id="isoSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${completedCount >= 4 ? '#bae6fd' : '#cbd5e1'}" />
        <stop offset="100%" stop-color="${completedCount >= 4 ? '#f0f9ff' : '#94a3b8'}" />
      </linearGradient>
      
      <!-- 3D Güneş & Glow -->
      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#fef08a" stop-opacity="1" />
        <stop offset="100%" stop-color="#fef08a" stop-opacity="0" />
      </radialGradient>

      <!-- Cam Yansıma Gradyanı -->
      <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#38bdf8" />
        <stop offset="100%" stop-color="#0284c7" />
      </linearGradient>
    </defs>

    <!-- 1. Arka Plan Gökyüzü & Güneş -->
    <rect width="540" height="320" fill="url(#isoSky)" />
    <circle cx="460" cy="50" r="45" fill="url(#sunGlow)" />
    <circle cx="460" cy="50" r="18" fill="#fde047" />

    <!-- Yüzen Bulutlar -->
    <g opacity="0.85">
      <ellipse cx="90" cy="45" rx="28" ry="12" fill="#ffffff" />
      <ellipse cx="110" cy="40" rx="20" ry="14" fill="#ffffff" />
      <ellipse cx="370" cy="65" rx="35" ry="14" fill="#ffffff" />
      <ellipse cx="395" cy="60" rx="24" ry="16" fill="#ffffff" />
    </g>

    <!-- 2. ANA 3D İZOMETRİK TABAN ADASI (Floating 3D Island Base) -->
    <!-- Alt Toprak Katmanı (Left Side & Right Side Shadows) -->
    <polygon points="40,160 270,290 270,312 40,182" fill="#475569" stroke="#334155" stroke-width="1" />
    <polygon points="270,290 500,160 500,182 270,312" fill="#334155" stroke="#1e293b" stroke-width="1" />
    
    <!-- Üst Çimen Yüzeyi -->
    <polygon points="270,30 500,160 270,290 40,160" fill="${completedCount >= 3 ? '#86efac' : '#94a3b8'}" stroke="${completedCount >= 3 ? '#4ade80' : '#64748b'}" stroke-width="2" />

    <!-- 3D Izgara ve Çim Çizgileri -->
    <g opacity="0.25" stroke="#ffffff" stroke-width="1">
      <line x1="155" y1="95" x2="385" y2="225" />
      <line x1="270" y1="30" x2="270" y2="290" />
      <line x1="385" y1="95" x2="155" y2="225" />
    </g>
  `;

  // Seviye 0: Issız ve Harabe Ada İskeleti
  if (completedCount === 0) {
    svgHTML += `
      <!-- Issız Harabe Taşlar ve Kuru Çatlaklar -->
      ${isoBox(200, 160, 22, 12, 16, '#94a3b8', '#64748b', '#475569')}
      ${isoBox(330, 150, 26, 14, 12, '#94a3b8', '#64748b', '#475569')}
      ${isoBox(270, 190, 18, 10, 10, '#64748b', '#475569', '#334155')}
      
      <path d="M 230 180 L 250 195 L 290 185 M 310 140 L 340 155" stroke="#475569" stroke-width="2" stroke-dasharray="3,3" />
      <text x="270" y="245" font-size="12" font-weight="900" fill="#334155" text-anchor="middle" letter-spacing="1">ISSIZ HARABE ADASI</text>
    `;
  }

  // Seviye 1+: 3D Çiftlik Evi, Çitler ve Giriş Yolu (🏡)
  if (completedCount >= 1) {
    svgHTML += `
      <!-- Ana İzometrik Asfalt Cadde -->
      <polygon points="120,205 160,230 420,80 380,55" fill="#334155" stroke="#475569" stroke-width="1" />
      <line x1="140" y1="218" x2="400" y2="68" stroke="#f8fafc" stroke-width="2" stroke-dasharray="8,8" />

      <!-- Çiftlik Evi (3D Ahşap Villa) -->
      ${isoBox(110, 150, 24, 14, 28, '#fef08a', '#d97706', '#b45309')}
      <!-- Çatı -->
      <polygon points="110,105 138,122 110,138 82,122" fill="#ef4444" stroke="#b91c1c" stroke-width="1" />
      
      <!-- Su Kuyusu & Çitler -->
      ${isoBox(75, 170, 8, 5, 8, '#cbd5e1', '#64748b', '#475569')}
      ${isoTree(60, 145, 0.9)}
      ${isoTree(145, 125, 0.8)}
    `;
  }

  // Seviye 2+: Elektrik Şebekesi & 3D Sokak Lambaları (💡)
  if (completedCount >= 2) {
    svgHTML += `
      <!-- Trafo İstasyonu -->
      ${isoBox(165, 185, 16, 10, 18, '#fbbf24', '#d97706', '#92400e')}
      
      <!-- 3D Işık Saçan Sokak Lambaları -->
      <g>
        <line x1="160" y1="205" x2="160" y2="185" stroke="#1e293b" stroke-width="2.5" />
        <circle cx="160" cy="185" r="4.5" fill="#fef08a" filter="drop-shadow(0 0 4px #fef08a)" />
        
        <line x1="280" y1="135" x2="280" y2="115" stroke="#1e293b" stroke-width="2.5" />
        <circle cx="280" cy="115" r="4.5" fill="#fef08a" filter="drop-shadow(0 0 4px #fef08a)" />
        
        <line x1="370" y1="85" x2="370" y2="65" stroke="#1e293b" stroke-width="2.5" />
        <circle cx="370" cy="65" r="4.5" fill="#fef08a" filter="drop-shadow(0 0 4px #fef08a)" />
      </g>
    `;
  }

  // Seviye 3+: Su Arıtma & 3D Su Kulesi (🚰)
  if (completedCount >= 3) {
    svgHTML += `
      <!-- 3D Mavi Su Kulesi -->
      ${isoBox(215, 105, 16, 10, 36, '#38bdf8', '#0284c7', '#0369a1')}
      <ellipse cx="215" cy="65" rx="14" ry="7" fill="#0284c7" />
      ${isoTree(190, 85, 0.9)}
    `;
  }

  // Seviye 4+: Şehir Parkı, Fıskiye ve Ağaçlık (🌳)
  if (completedCount >= 4) {
    svgHTML += `
      <!-- 3D Park Alanı Tabanı -->
      <polygon points="270,170 330,205 270,240 210,205" fill="#4ade80" stroke="#16a34a" stroke-width="1.5" />
      
      <!-- Fıskiye Havuzu -->
      <ellipse cx="270" cy="205" rx="18" ry="9" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
      <circle cx="270" cy="203" r="4" fill="#ffffff" />
      
      ${isoTree(230, 195, 1)}
      ${isoTree(310, 195, 1)}
      ${isoTree(270, 230, 0.85)}
    `;
  }

  // Seviye 5+: 3D Modern İş Kuleleri & Rezidanslar (🏢)
  if (completedCount >= 5) {
    svgHTML += `
      <!-- Gökdelen 1 (Cam Kule) -->
      ${isoBox(335, 130, 28, 16, 85, '#60a5fa', '#2563eb', '#1d4ed8')}
      <!-- Çatı Helikopter Pisti -->
      <polygon points="335,40 355,51 335,62 315,51" fill="#f8fafc" stroke="#dc2626" stroke-width="2" />
      <text x="335" y="55" font-size="10" font-weight="900" fill="#dc2626" text-anchor="middle">H</text>
      
      <!-- Gökdelen 2 (Yan Blok) -->
      ${isoBox(385, 155, 22, 12, 55, '#93c5fd', '#3b82f6', '#1d4ed8')}
    `;
  }

  // Seviye 6+: 3D Sinema & Gösteri Merkezi (🎬)
  if (completedCount >= 6) {
    svgHTML += `
      <!-- Sinema Binası -->
      ${isoBox(215, 235, 26, 14, 30, '#f43f5e', '#be123c', '#881337')}
      <!-- Tabela -->
      <polygon points="215,198 238,210 215,222 192,210" fill="#fde047" />
      <text x="215" y="213" font-size="7" font-weight="900" fill="#881337" text-anchor="middle">🎬 SİNEMA</text>
    `;
  }

  // Seviye 7+: 3D Lunapark & Dönme Dolap (🎡)
  if (completedCount >= 7) {
    svgHTML += `
      <!-- 3D Dönme Dolap Grubu -->
      <g transform="translate(435, 110)">
        <circle cx="0" cy="-35" r="28" stroke="#e11d48" stroke-width="2.5" fill="none" stroke-dasharray="6,4" />
        <line x1="0" y1="-63" x2="0" y2="-7" stroke="#fbbf24" stroke-width="1.5" />
        <line x1="-28" y1="-35" x2="28" y2="-35" stroke="#fbbf24" stroke-width="1.5" />
        <line x1="0" y1="-35" x2="-14" y2="10" stroke="#475569" stroke-width="3" />
        <line x1="0" y1="-35" x2="14" y2="10" stroke="#475569" stroke-width="3" />
        
        <!-- Kabinler -->
        <circle cx="0" cy="-63" r="4" fill="#38bdf8" />
        <circle cx="0" cy="-7" r="4" fill="#38bdf8" />
        <circle cx="-28" cy="-35" r="4" fill="#38bdf8" />
        <circle cx="28" cy="-35" r="4" fill="#38bdf8" />
        <text x="0" y="20" font-size="7.5" font-weight="900" fill="#e11d48" text-anchor="middle">🎡 LUNAPARK</text>
      </g>
    `;
  }

  // Seviye 8+: 3D Şehir Hastanesi & Ambulans (🏥)
  if (completedCount >= 8) {
    svgHTML += `
      <!-- Şehir Hastanesi -->
      ${isoBox(160, 120, 30, 16, 42, '#ffffff', '#e2e8f0', '#cbd5e1')}
      <!-- Kırmızı Çapraz (+) -->
      <polygon points="160,70 178,80 160,90 142,80" fill="#ef4444" />
      <text x="160" y="83" font-size="11" font-weight="900" fill="#ffffff" text-anchor="middle">+</text>
      
      <!-- Mini Ambulans -->
      ${isoBox(190, 150, 9, 5, 6, '#ffffff', '#ef4444', '#dc2626')}
    `;
  }

  // Seviye 9+: 3D Alışveriş & Ticaret Merkezi (🛍️)
  if (completedCount >= 9) {
    svgHTML += `
      <!-- AVM Blokları -->
      ${isoBox(345, 205, 32, 18, 28, '#c084fc', '#9333ea', '#6b21a8')}
      <!-- Cam Kubbe -->
      <ellipse cx="345" cy="172" rx="14" ry="7" fill="#38bdf8" opacity="0.85" />
      <text x="345" y="195" font-size="7.5" font-weight="900" fill="#ffffff" text-anchor="middle">🛍️ AVM</text>
    `;
  }

  // Seviye 10+: 3D Hızlı Tren Garı & Raylar (🚄)
  if (completedCount >= 10) {
    svgHTML += `
      <!-- Tren Rayları -->
      <polygon points="410,240 445,260 500,225 465,205" fill="#64748b" />
      <line x1="420" y1="248" x2="480" y2="213" stroke="#f8fafc" stroke-width="2" stroke-dasharray="4,4" />
      
      <!-- Tren Garı -->
      ${isoBox(460, 200, 24, 14, 22, '#38bdf8', '#0284c7', '#0369a1')}
      <!-- Hızlı Tren Vagonu -->
      ${isoBox(445, 235, 18, 7, 9, '#ffffff', '#0284c7', '#0369a1')}
    `;
  }

  // Seviye 11+: 3D Uydu & Telekom Kulesi (📡)
  if (completedCount >= 11) {
    svgHTML += `
      <!-- Telekom Çelik Kulesi -->
      <g transform="translate(100, 75)">
        <line x1="0" y1="25" x2="0" y2="-45" stroke="#e11d48" stroke-width="3" />
        <line x1="-12" y1="25" x2="0" y2="-45" stroke="#cbd5e1" stroke-width="1.5" />
        <line x1="12" y1="25" x2="0" y2="-45" stroke="#cbd5e1" stroke-width="1.5" />
        <ellipse cx="0" cy="-20" rx="10" ry="5" fill="#f8fafc" stroke="#94a3b8" />
        <circle cx="0" cy="-45" r="4.5" fill="#ef4444" filter="drop-shadow(0 0 6px #ef4444)" />
        <text x="0" y="38" font-size="7" font-weight="900" fill="#e11d48" text-anchor="middle">📡 5G</text>
      </g>
    `;
  }

  // Seviye 12+: 3D Uluslararası Liman & Konteyner Terminali (🚢)
  if (completedCount >= 12) {
    svgHTML += `
      <!-- Liman İskelesi & Su -->
      <polygon points="50,170 10,195 70,230 110,205" fill="#0284c7" opacity="0.9" />
      
      <!-- Konteyner Blokları -->
      ${isoBox(75, 200, 10, 5, 8, '#f97316', '#c2410c', '#9a3412')}
      ${isoBox(90, 210, 10, 5, 8, '#22c55e', '#15803d', '#166534')}
      ${isoBox(75, 192, 10, 5, 8, '#3b82f6', '#1d4ed8', '#1e40af')}
      
      <!-- 3D Vinç -->
      <line x1="50" y1="185" x2="50" y2="155" stroke="#eab308" stroke-width="3" />
      <line x1="40" y1="155" x2="70" y2="155" stroke="#eab308" stroke-width="2.5" />
    `;
  }

  // Seviye 13+: 3D Yönetim Sarayı / Hükümet Konağı (🏛️)
  if (completedCount >= 13) {
    svgHTML += `
      <!-- Görkemli Saray -->
      ${isoBox(270, 75, 36, 18, 45, '#fef08a', '#eab308', '#ca8a04')}
      <!-- Kubbe -->
      <ellipse cx="270" cy="25" rx="16" ry="9" fill="#fde047" stroke="#b45309" stroke-width="1.5" />
      <text x="270" y="52" font-size="8" font-weight="900" fill="#78350f" text-anchor="middle">🏛️ SARAY</text>
    `;
  }

  // Seviye 14: 3D Teknoloji Vadisi & Roket Fırlatma Rampası (🚀)
  if (completedCount >= 14) {
    svgHTML += `
      <!-- Roket Platformu -->
      ${isoBox(450, 60, 22, 12, 16, '#0f172a', '#1e293b', '#334155')}
      
      <!-- 3D Uzay Roketi -->
      <g transform="translate(450, 45)">
        <polygon points="0,-42 7,-15 -7,-15" fill="#f8fafc" stroke="#dc2626" stroke-width="1" />
        <rect x="-6" y="-15" width="12" height="26" fill="#f8fafc" stroke="#475569" />
        <polygon points="-6,11 -12,20 -6,18" fill="#ef4444" />
        <polygon points="6,11 12,20 6,18" fill="#ef4444" />
        <!-- Alev Efekti -->
        <polygon points="-4,18 0,30 4,18" fill="#f97316" filter="drop-shadow(0 0 6px #f97316)" />
        <text x="0" y="-48" font-size="8.5" font-weight="900" fill="#dc2626" text-anchor="middle">🚀 HAZIR</text>
      </g>
    `;
  }

  svg.innerHTML = svgHTML;
}

// Konu Yol Haritasını (Timeline) Ekrana Basan Fonksiyon
function renderSkillTree() {
  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
  const topics = getLanguageTopics(curLang.id);

  // Kurs Başlık ve İlerleme Güncellemesi
  const courseLangBadge = document.getElementById('course-lang-badge');
  const courseLangIcon = document.getElementById('course-lang-icon');
  const courseLangTitle = document.getElementById('course-lang-title');
  const courseProgressFill = document.getElementById('course-progress-fill');
  const courseProgressText = document.getElementById('course-progress-text');
  const roadmapXpCount = document.getElementById('roadmap-xp-count');

  if (courseLangIcon) courseLangIcon.textContent = curLang.icon;
  if (courseLangTitle) courseLangTitle.textContent = `${curLang.name} Temelleri`;
  if (roadmapXpCount) roadmapXpCount.textContent = `${state.xp || 0} XP`;

  // Tamamlanan ve Aktif konu hesaplama
  const doneCount = topics.filter(t => t.status === 'done').length;
  const progressPercent = Math.round((doneCount / topics.length) * 100);

  if (courseProgressFill) courseProgressFill.style.width = `${progressPercent}%`;
  if (courseProgressText) courseProgressText.textContent = `${progressPercent}% Tamamlandı`;

  // Şehir Görselini Çiz
  renderCityVisual(doneCount);

  // Dikey Konu Yol Haritasını Oluştur
  const container = document.getElementById('roadmap-timeline-list');
  if (!container) return;
  container.innerHTML = '';

  topics.forEach((topic, idx) => {
    const isDone = topic.status === 'done';
    const isActive = topic.status === 'active';
    const isLocked = topic.status === 'locked';

    const row = document.createElement('div');
    row.className = 'timeline-row';

    // Düğüm İkonu
    let nodeIcon = '🔒';
    let nodeClass = 'node-locked';
    if (isDone) {
      nodeIcon = '✓';
      nodeClass = 'node-done';
    } else if (isActive) {
      nodeIcon = '▶';
      nodeClass = 'node-active';
    }

    // Çizgi
    const isLast = idx === topics.length - 1;
    const lineHTML = isLast ? '' : `<div class="timeline-line ${isDone ? 'line-done' : ''}"></div>`;

    // Durum Rozeti
    let badgeText = 'KİLİTLİ';
    let badgeClass = 'badge-locked';
    if (isDone) {
      badgeText = 'TAMAMLANDI';
      badgeClass = 'badge-done';
    } else if (isActive) {
      badgeText = 'AKTİF';
      badgeClass = 'badge-active';
    }

    row.innerHTML = `
      ${lineHTML}
      <div class="timeline-node ${nodeClass}">${nodeIcon}</div>
      <div class="timeline-card ${isActive ? 'card-active' : ''} ${isLocked ? 'card-locked' : ''}">
        <div class="timeline-card-header">
          <h3 class="timeline-topic-title">${topic.title}</h3>
          <span class="timeline-status-badge ${badgeClass}">${badgeText}</span>
        </div>
        <p class="timeline-topic-desc">${topic.desc}</p>
        <div class="timeline-reward-tag">
          <span>🎁 Ödül:</span>
          <strong>${topic.reward}</strong>
        </div>
      </div>
    `;

    // Tıklama ile Hızlı Özet Modalını Açma (Kilitli olsa bile okunabilir)
    const cardEl = row.querySelector('.timeline-card');
    cardEl.addEventListener('click', () => {
      state.selectedNodeId = topic.id;
      sfx.playPop();
      openTopicReviewModal(topic);
    });

    container.appendChild(row);
  });
}

// --- 7.1 KONU HIZLI ÖZET MODAL MOTORU (Topic Quick Review Modal Engine) ---

const TOPIC_REVIEWS_DB = {
  "python_1": {
    "title": "Değişkenler & Veri Tipleri",
    "readTime": "2 dk okuma",
    "rewardText": "🌱 Giriş Çiftliği & Kuyu Basıncı",
    "logic": "Python'da değişkenler verileri saklayan etiketlerdir. Tür belirtmeksizin doğrudan değer ataması yapılır.",
    "syntaxRules": [
      "<code>sayi = 10</code> : Tam sayı (integer) değişkeni tanımlar.",
      "<code>metin = \"Python\"</code> : Metin (string) değişkeni oluşturur.",
      "<code>ondalik = 3.14</code> : Küsurlu sayı (float) oluşturur.",
      "<code>print(degisken)</code> : Değişkenin değerini terminale basar."
    ],
    "pitfalls": [
      "⚠️ Değişken isimleri rakamla başlayamaz (Örn: <code>1sayi = 5</code> hatalıdır, <code>sayi_1 = 5</code> olmalıdır).",
      "⚠️ Python büyük/küçük harfe duyarlıdır (<code>Yas</code> ile <code>yas</code> iki farklı değişkendir).",
      "⚠️ Metin tanımlarken tırnak işaretlerini kapatmayı unutmayın."
    ],
    "exampleCode": "isim = \"Bengi\"\nyas = 22\nprint(f\"Merhaba {isim}, Yaş: {yas}\")"
  },
  "python_2": {
    "title": "Stringler & Metin İşlemleri",
    "readTime": "2 dk okuma",
    "rewardText": "💡 Şehir Elektrik Şebekesi",
    "logic": "Metinler karakter dizileridir. Sıfırdan başlayan indekslerle harflere erişilebilir ve dilimleme yapılabilir.",
    "syntaxRules": [
      "<code>metin[0]</code> : Metnin ilk karakterini seçer.",
      "<code>metin[start:stop]</code> : Belirtilen aralıktaki alt metni dilimler.",
      "<code>len(metin)</code> : Toplam karakter sayısını döner.",
      "<code>metin.upper() / .lower()</code> : Tüm harfleri büyütür veya küçültür."
    ],
    "pitfalls": [
      "⚠️ Dilimlemede bitiş indeksi dahil edilmez (<code>[0:3]</code> 0, 1 ve 2. indeksleri alır).",
      "⚠️ Stringler doğrudan indeksle değiştirilemez (<code>metin[0] = \"A\"</code> hata verir).",
      "⚠️ Olmayan bir indekse tekil erişim <code>IndexError</code> fırlatır."
    ],
    "exampleCode": "dil = \"Python\"\nilk = dil[0]      # 'P'\nparca = dil[0:2]  # 'Py'\nprint(dil.upper()) # 'PYTHON'"
  },
  "python_3": {
    "title": "Operatörler & Matematik",
    "readTime": "2 dk okuma",
    "rewardText": "🚰 Temiz Su Arıtma & Çeşmeler",
    "logic": "Sayısal hesaplamalar ve mantıksal karşılaştırmalar için aritmetik ve mantık operatörleri kullanılır.",
    "syntaxRules": [
      "<code>+ , - , * , /</code> : Temel dört işlem operatörleri.",
      "<code>//</code> (Tam Bölme) : Bölümün sadece tam sayı kısmını alır.",
      "<code>%</code> (Mod / Kalan) : Bölme işleminden kalanı bulur.",
      "<code>**</code> (Üs Alma) : Sayının kuvvetini hesaplar (örn: <code>2 ** 3 = 8</code>)."
    ],
    "pitfalls": [
      "⚠️ Standart bölme <code>/</code> daima <code>float</code> döner (örn: <code>4 / 2 = 2.0</code>).",
      "⚠️ Eşitlik kontrolünde tek eşittir <code>=</code> (atama) değil, çift eşittir <code>==</code> kullanılır.",
      "⚠️ İşlem önceliğine dikkat edin; parantez <code>()</code> her zaman önceliklidir."
    ],
    "exampleCode": "x = 10\ny = 3\ntam_bolum = x // y  # 3\nkalan = x % y       # 1\nus = 2 ** 4         # 16"
  },
  "python_4": {
    "title": "Koşullu Durumlar (If / Elif / Else)",
    "readTime": "2 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Fıskiye",
    "logic": "Programın belirli şartlara göre farklı kod bloklarını çalıştırmasını sağlar.",
    "syntaxRules": [
      "<code>if kosul:</code> : Koşul True ise içindeki bloğu çalıştırır.",
      "<code>elif baska_kosul:</code> : Önceki koşul sağlanmazsa yeni bir şart dener.",
      "<code>else:</code> : Hiçbir koşul sağlanmadığında devreye giren varsayılan blok.",
      "<code>and / or / not</code> : Birden fazla koşulu birleştiren mantıksal bağlaçlar."
    ],
    "pitfalls": [
      "⚠️ Koşul satırlarının sonundaki iki nokta <code>:</code> işaretini unutmayın.",
      "⚠️ Python girintilere (indentation - 4 boşluk) göre blokları anlar, girintileme hatası yapmayın.",
      "⚠️ <code>elif</code> yerine sürekli <code>if</code> yazmak her şartı birbirinden bağımsız test eder."
    ],
    "exampleCode": "yas = 20\nif yas < 18:\n    print(\"Giriş Yapamaz\")\nelse:\n    print(\"Giriş Yapabilir\")"
  },
  "python_5": {
    "title": "Listeler & Demetler (Lists & Tuples)",
    "readTime": "3 dk okuma",
    "rewardText": "🏢 Modern İş Kuleleri & Rezidanslar",
    "logic": "Birden fazla veriyi tek yapıda tutar. Listeler `[]` değiştirilebilir (mutable), Demetler `()` ise değiştirilemez (immutable) sabit koleksiyonlardır.",
    "syntaxRules": [
      "<code>liste.append(eleman)</code> : Listenin sonuna yeni eleman ekler (yerinde günceller).",
      "<code>liste.pop(indeks)</code> : Belirtilen indisteki elemanı çıkarır (varsayılan: son eleman).",
      "<code>liste.sort()</code> : Listeyi küçükten büyüğe / alfabetik sıralar.",
      "<code>demet = (1, 2, 3)</code> : Değiştirilemeyen güvenli demet yapısı."
    ],
    "pitfalls": [
      "⚠️ <code>liste = liste.append(x)</code> yazmayın! `.append()` `None` döner ve listeyi sıfırlar.",
      "⚠️ Demetlerin elemanlarına atama yapılamaz (<code>demet[0] = \"yeni\"</code> hata verir).",
      "⚠️ Olmayan indekse erişim <code>IndexError</code> üretir."
    ],
    "exampleCode": "urunler = [\"Elma\", \"Muz\"]\nurunler.append(\"Çilek\")\nson = urunler.pop() # 'Çilek'\nprint(urunler)      # ['Elma', 'Muz']"
  },
  "python_6": {
    "title": "Sözlükler & Kümeler (Dict & Set)",
    "readTime": "3 dk okuma",
    "rewardText": "🎬 Modern Sinema & Tiyatro Kompleksi",
    "logic": "Sözlükler anahtar-değer (key-value) eşleşmesiyle çalışır. Kümeler (set) ise sırasız ve yalnızca benzersiz elemanlar barındırır.",
    "syntaxRules": [
      "<code>sozluk[\"anahtar\"] = deger</code> : Yeni veri ekler veya mevcudu günceller.",
      "<code>sozluk.get(\"anahtar\", varsayilan)</code> : Anahtar yoksa hata vermeden varsayılanı döner.",
      "<code>kume = set(liste)</code> : Tekrar eden elemanları eleyerek benzersiz küme üretir.",
      "<code>kume.add(eleman)</code> : Kümeye yeni tekil eleman ekler."
    ],
    "pitfalls": [
      "⚠️ Sözlükte olmayan anahtara <code>sozluk[\"x\"]</code> ile erişmek <code>KeyError</code> fırlatır; güvenli erişim için <code>.get()</code> kullanın.",
      "⚠️ Kümeler indekslenemez (<code>kume[0]</code> yazamazsınız).",
      "⚠️ Sözlük anahtarları değiştirilemez (immutable) veri tiplerinden oluşmalıdır (string, int vb.)."
    ],
    "exampleCode": "kullanici = {\"ad\": \"Can\", \"rol\": \"Admin\"}\nyas = kullanici.get(\"yas\", 18)\ntekil = set([1, 2, 2, 3]) # {1, 2, 3}"
  },
  "python_7": {
    "title": "Döngüler (For & While)",
    "readTime": "3 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Belirli bir kod bloğunu bir dizi elemanı üzerinde veya bir koşul sağlandığı sürece tekrarlamak için kullanılır.",
    "syntaxRules": [
      "<code>for i in range(basla, bitir):</code> : Belirli sayı aralığında döner.",
      "<code>while kosul:</code> : Koşul True olduğu sürece dönmeye devam eder.",
      "<code>break</code> : Döngüyü anında tamamen sonlandırır.",
      "<code>enumerate(liste) / zip(l1, l2)</code> : İndeks takibi ve paralel döngü sağlar."
    ],
    "pitfalls": [
      "⚠️ <code>while</code> döngüsünde sayacı artırmayı unutursanız sonsuz döngü oluşur.",
      "⚠️ <code>range(1, 5)</code> 5'i dahil etmez (1, 2, 3, 4 üretir).",
      "⚠️ <code>continue</code> döngüyü bitirmez, sadece o anki adımı atlar."
    ],
    "exampleCode": "for i, meyve in enumerate([\"Elma\", \"Muz\"]):\n    print(i, meyve)\n# 0 Elma\n# 1 Muz"
  },
  "python_8": {
    "title": "Fonksiyonlar & Kapsam (Functions & Scope)",
    "readTime": "3 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Tekrar eden kod bloklarını yeniden kullanılabilir modüler parçalara dönüştürür.",
    "syntaxRules": [
      "<code>def fonk(a, b=10):</code> : Varsayılan parametreli fonksiyon tanımlar.",
      "<code>return deger</code> : Üretilen sonucu fonksiyon dışına aktarır.",
      "<code>*args</code> : Değişken sayıda konumsal argümanı demet olarak yakalar.",
      "<code>**kwargs</code> : İsimlendirilmiş parametreleri sözlük olarak yakalar."
    ],
    "pitfalls": [
      "⚠️ <code>return</code> yazılmayan fonksiyonlar varsayılan olarak <code>None</code> döner.",
      "⚠️ Fonksiyon içinde tanımlanan değişkenler yereldir (local), dışarıdan erişilemez.",
      "⚠️ Global bir değişkeni içeride değiştirmek için <code>global degisken</code> bildirimi gerekir."
    ],
    "exampleCode": "def topla(*sayilar):\n    return sum(sayilar)\n\nsonuc = topla(5, 10, 15) # 30"
  },
  "python_9": {
    "title": "Lambda, Map & Filter (List Comprehension)",
    "readTime": "3 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "Koleksiyonlar üzerinde tek satırda dönüştürme, filtreleme ve anonim fonksiyon işlemleri sağlar.",
    "syntaxRules": [
      "<code>lambda x: x * 2</code> : Tek satırlık isimsiz anonim fonksiyon.",
      "<code>[x**2 for x in liste]</code> : Hızlı ve temiz liste üreteci (List Comprehension).",
      "<code>[x for x in liste if x > 0]</code> : Şarta bağlı filtreleme yapan liste üreteci.",
      "<code>list(map(fonk, liste))</code> : Tüm elemanlara fonksiyon uygular."
    ],
    "pitfalls": [
      "⚠️ <code>lambda</code> içinde <code>return</code> kullanılmaz.",
      "⚠️ <code>map()</code> ve <code>filter()</code> iterator döner; sonucu görmek için <code>list()</code> ile sarılmalıdır.",
      "⚠️ Çok karmaşık iç içe comprehension yapıları kodun okunabilirliğini düşürür."
    ],
    "exampleCode": "sayilar = [1, 2, 3, 4, 5]\ncift_kareler = [x**2 for x in sayilar if x % 2 == 0]\n# [4, 16]"
  },
  "python_10": {
    "title": "Modüller & Paketler (Modules & Packages)",
    "readTime": "3 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Metro Hattı",
    "logic": "Python'ın zengin standart kütüphanelerini veya üçüncü parti paketleri projenize dahil etmenizi sağlar.",
    "syntaxRules": [
      "<code>import math</code> : Tüm modülü içe aktarır (<code>math.sqrt(16)</code>).",
      "<code>from random import randint</code> : Sadece ilgili fonksiyonu doğrudan çağrılabilir aktarır.",
      "<code>import datetime as dt</code> : Modüle kısa bir takma ad (alias) verir.",
      "<code>pip install paket_adi</code> : Terminalden harici paket yükler."
    ],
    "pitfalls": [
      "⚠️ <code>from math import pi</code> yapıldığında <code>math.pi</code> değil doğrudan <code>pi</code> yazılır.",
      "⚠️ Kendi dosya isminizi standart modül adıyla aynı yapmayın (örn: <code>random.py</code> açmayın).",
      "⚠️ <code>from modul import *</code> kullanımı isim çakışmalarına yol açabilir, önerilmez."
    ],
    "exampleCode": "import math\nfrom random import choice\n\nkok = math.sqrt(25)     # 5.0\nrenk = choice([\"Kırmızı\", \"Mavi\"])"
  },
  "python_11": {
    "title": "Hata ve İstisna Yönetimi (Try / Except)",
    "readTime": "3 dk okuma",
    "rewardText": "📡 Uydu İletişim & Radyo Kulesi",
    "logic": "Çalışma zamanında beklenmeyen aksaklıklar çıktığında programın çökmesini önler ve hatayı zarifçe yönetir.",
    "syntaxRules": [
      "<code>try: ... except Hata:</code> : Olası hatayı yakalar ve alternatif blok çalıştırır.",
      "<code>except ValueError as e:</code> : Hatanın detaylı açıklama mesajına erişir.",
      "<code>finally:</code> : Hata olsun ya da olmasın mutlaka çalışan temizlik bloğu.",
      "<code>raise ValueError(\"Mesaj\")</code> : İstenen koşulda manuel hata fırlatır."
    ],
    "pitfalls": [
      "⚠️ Çıplak <code>except:</code> kullanmayın; hatanın türünü (örn: <code>ZeroDivisionError</code>) belirtin.",
      "⚠️ Hata fırlatırken <code>throw</code> değil <code>raise</code> kullanılır.",
      "⚠️ <code>try</code> bloğu içine yalnızca riskli kodları koyun; tüm programı sarmalamayın."
    ],
    "exampleCode": "try:\n    sayi = int(\"abc\")\nexcept ValueError as e:\n    print(\"Geçersiz sayı girdisi!\")\nfinally:\n    print(\"İşlem tamamlandı.\")"
  },
  "python_12": {
    "title": "Dosya İşlemleri (File I/O)",
    "readTime": "3 dk okuma",
    "rewardText": "🚢 Uluslararası Liman & Konteyner Terminali",
    "logic": "Kalıcı veri saklamak için diske dosya yazma, dosya okuma ve veri ekleme işlemlerini gerçekleştirir.",
    "syntaxRules": [
      "<code>with open(\"dosya.txt\", \"w\") as f:</code> : Yazma modunda açar ve otomatik kapatır.",
      "<code>\"r\"</code> (Read) : Sadece okuma modu (dosya yoksa hata verir).",
      "<code>\"a\"</code> (Append) : Eski veriyi silmeden dosyanın sonuna ekler.",
      "<code>f.read() / f.readlines()</code> : Tüm metni veya satırları liste olarak okur."
    ],
    "pitfalls": [
      "⚠️ <code>\"w\"</code> modu dosyanın içini tamamen sıfırlar; üzerine eklemek için <code>\"a\"</code> kullanın.",
      "⚠️ Manuel <code>open()</code> açtıktan sonra <code>f.close()</code> unutulabilir; daima <code>with open()</code> kullanın.",
      "⚠️ Türkçe karakter sorunları yaşamamak için <code>encoding=\"utf-8\"</code> parametresini ekleyin."
    ],
    "exampleCode": "with open(\"gunluk.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Python Harika!\\n\")\n\nwith open(\"gunluk.txt\", \"r\", encoding=\"utf-8\") as f:\n    print(f.read())"
  },
  "python_13": {
    "title": "Nesne Yönelimli Programlama (OOP)",
    "readTime": "4 dk okuma",
    "rewardText": "🏛️ Çiftlik & Şehir Yönetim Sarayı",
    "logic": "Gerçek dünya varlıklarını ve davranışlarını Sınıf (Class) ve Nesne (Object) mimarisiyle modeller.",
    "syntaxRules": [
      "<code>class Araba:</code> : Yeni bir sınıf şablonu tanımlar.",
      "<code>def __init__(self, ...):</code> : Nesne oluşturulduğunda ilk çalışan kurucu metot.",
      "<code>self.ozellik = deger</code> : Nesnenin kendi alanlarına ve metotlarına erişim sağlar.",
      "<code>class Kopek(Hayvan):</code> : Kalıtım (Inheritance) ile üst sınıfın özelliklerini devralır.",
      "<code>super().__init__()</code> : Üst sınıfın kurucusunu çalıştırır."
    ],
    "pitfalls": [
      "⚠️ Sınıf metotlarının ilk parametresine <code>self</code> yazmayı unutmayın.",
      "⚠️ Kurucu metot <code>init</code> değil, çift alt tire ile <code>__init__</code> yazılır.",
      "⚠️ Nesneyi doğrudan print ederken anlamlı metin için <code>__str__(self)</code> metodunu tanımlayın."
    ],
    "exampleCode": "class Oyuncu:\n    def __init__(self, isim):\n        self.isim = isim\n    def selamla(self):\n        return f\"Ben {self.isim}\"\n\no1 = Oyuncu(\"Bengi\")\nprint(o1.selamla())"
  },
  "python_14": {
    "title": "İleri Seviye & GUI / Proje",
    "readTime": "4 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Gözlemevi",
    "logic": "Grafik arayüz (Tkinter), JSON veri haberleşmesi, dekoratörler ve üreteçler ile profesyonel projeler üretir.",
    "syntaxRules": [
      "<code>json.dumps(veri) / json.loads(metin)</code> : Python sözlüğü ile JSON stringi arasında dönüşüm yapar.",
      "<code>@dekorator</code> : Fonksiyonların davranışını değiştirmeden yetenek katar.",
      "<code>yield deger</code> : Belleği şişirmeden adım adım değer üreten Generator oluşturur.",
      "<code>pencere.mainloop()</code> : Tkinter masaüstü penceresini açık ve canlı tutar."
    ],
    "pitfalls": [
      "⚠️ <code>json.load()</code> dosya nesnesi alır, <code>json.loads()</code> metin (string) alır (s takısına dikkat).",
      "⚠️ Generator fonksiyonlarında <code>return</code> yerine <code>yield</code> kullanılır.",
      "⚠️ Tkinter'da <code>mainloop()</code> çağrılmazsa pencere açıldığı an kapanır."
    ],
    "exampleCode": "import json\n\nveri = {\"proje\": \"Kod Şehri\", \"seviye\": 14}\njson_str = json.dumps(veri)\nprint(json.loads(json_str)[\"proje\"])"
  },
  java_1: {
    "title": "Değişkenler & Temel Veri Tipleri",
    "readTime": "2 dk okuma",
    "rewardText": "🏡 Giriş Çiftliği & Su Kuyusu",
    "logic": "Java güçlü tipli (strongly-typed) bir dildir; her değişken tanımlanırken mutlaka veri tipi belirtilmeli ve her komut ; ile sonlanmalıdır.",
    "syntaxRules": [
        "<code>System.out.println(veri);</code> : Ekrana çıktı basar ve alt satıra geçer.",
        "<code>int sayi = 25;</code> : Tam sayı türünde değişken tanımlar (4 byte).",
        "<code>double ondalik = 3.14;</code> : Küsurlu / ondalıklı sayı türü.",
        "<code>char harf = 'A';</code> : Tek tırnak ile tek bir karakter saklar."
    ],
    "pitfalls": [
        "⚠️ Satır sonuna noktalı virgül <code>;</code> koymayı unutmak derleme hatası verir.",
        "⚠️ <code>char</code> için tek tırnak (<code>'A'</code>), <code>String</code> için çift tırnak (<code>\"Metin\"</code>) kullanılır.",
        "⚠️ Değişken adı tanımlarken <code>int 1sayi = 10;</code> gibi rakamla başlanamaz."
    ],
    "exampleCode": "int yas = 20;\nString isim = \"Bengi\";\nSystem.out.println(\"Kullanıcı: \" + isim + \" (\" + yas + \")\");"
},
  java_2: {
    "title": "Operatörler & Matematiksel İşlemler",
    "readTime": "2 dk okuma",
    "rewardText": "💡 Elektrik Şebekesi & Trafo",
    "logic": "Sayısal işlemler, artırma/azaltma ve Math sınıfı ile matematiksel hesaplamalar gerçekleştirilir.",
    "syntaxRules": [
        "<code>a % b</code> : Bölme işleminden kalanı (mod) bulur.",
        "<code>sayac++;</code> : Sayacın değerini 1 artırır.",
        "<code>Math.max(a, b)</code> : İki sayıdan büyük olanı döner.",
        "<code>Math.sqrt(sayi)</code> : Sayının karekökünü double olarak hesaplar."
    ],
    "pitfalls": [
        "⚠️ İki tamsayı bölündüğünde sonuç tamsayı çıkar (Örn: <code>5 / 2</code> sonucu 2 olur; <code>5.0 / 2</code> yazılmalıdır).",
        "⚠️ <code>Math.pow(2, 3)</code> geriye <code>double</code> döner.",
        "⚠️ Eşitlik kontrolünde tek <code>=</code> değil, çift <code>==</code> kullanılır."
    ],
    "exampleCode": "int a = 17, b = 5;\nint kalan = a % b; // 2\ndouble kok = Math.sqrt(64); // 8.0\nSystem.out.println(\"Kalan: \" + kalan);"
},
  java_3: {
    "title": "Stringler & Metin İşlemleri",
    "readTime": "2 dk okuma",
    "rewardText": "🚰 Su Arıtma & Fıskiye Havuzu",
    "logic": "Java'da metinler String nesneleridir. İndeksler 0'dan başlar ve metin manipülasyonu için yerleşik zengin metotlar sunulur.",
    "syntaxRules": [
        "<code>metin.length()</code> : Metindeki toplam karakter sayısını döner.",
        "<code>metin.toUpperCase()</code> : Tüm harfleri büyük harfe dönüştürür.",
        "<code>metin.charAt(0)</code> : Belirtilen indisteki karakteri (char) döner.",
        "<code>str1.equals(str2)</code> : İki metnin içerik eşitliğini kontrol eder."
    ],
    "pitfalls": [
        "⚠️ String eşitliklerinde asla <code>==</code> kullanılmaz; <code>str1.equals(str2)</code> kullanılmalıdır.",
        "⚠️ <code>length</code> dizilerde bir özelliktir (<code>dizi.length</code>), String'lerde ise metottur (<code>metin.length()</code>).",
        "⚠️ String'ler değiştirilemez (immutable); <code>.toUpperCase()</code> yeni bir String üretir."
    ],
    "exampleCode": "String ad = \"Java\";\nSystem.out.println(\"Uzunluk: \" + ad.length());\nSystem.out.println(\"Büyük: \" + ad.toUpperCase());"
},
  java_4: {
    "title": "Koşullu Durumlar (If, Else & Switch-Case)",
    "readTime": "2 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Botanik Bahçe",
    "logic": "Belirli mantıksal şartlara göre program akışını farklı bloklara yönlendirmemizi sağlar.",
    "syntaxRules": [
        "<code>if (kosul) { ... } else { ... }</code> : Temel karar bloğu.",
        "<code>kosul ? deger1 : deger2</code> : Tek satırlık kısa if-else (Ternary).",
        "<code>switch (degisken) { case 1: ... break; }</code> : Çoklu sabit değer eşleştirme.",
        "<code>default:</code> : Switch-case içinde hiçbir şart uymadığında çalışan blok."
    ],
    "pitfalls": [
        "⚠️ <code>if</code> satırının sonuna noktalı virgül <code>;</code> konulmaz.",
        "⚠️ <code>switch</code> bloklarında <code>case</code> sonuna <code>break;</code> konulmazsa alttaki durumlar da çalışır.",
        "⚠️ Koşul mutlaka normal parantez <code>(x > 5)</code> içine alınmalıdır."
    ],
    "exampleCode": "int not = 75;\nif (not >= 50) {\n    System.out.println(\"Geçti\");\n} else {\n    System.out.println(\"Kaldı\");\n}"
},
  java_5: {
    "title": "Döngüler (While & For Loops)",
    "readTime": "3 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Bir işlemi belirli sayıda veya bir koşul sağlandığı sürece tekrarlayarak otomatize etmemizi sağlar.",
    "syntaxRules": [
        "<code>for (int i = 0; i < n; i++) { ... }</code> : Sayaç kontrollü klasik for döngüsü.",
        "<code>while (kosul) { ... }</code> : Koşul true olduğu sürece çalışan döngü.",
        "<code>do { ... } while (kosul);</code> : En az 1 kez çalışan döngü.",
        "<code>break; / continue;</code> : Döngüyü kırma veya turu atlama."
    ],
    "pitfalls": [
        "⚠️ <code>while</code> döngüsünde sayaç artırımı unutulursa sonsuz döngü oluşur.",
        "⚠️ <code>for</code> döngüsündeki 3 ifade noktalı virgül <code>;</code> ile ayrılır.",
        "⚠️ <code>for (int i = 0; i < 5; i++)</code> 0, 1, 2, 3, 4 değerlerini alır (5 kez döner)."
    ],
    "exampleCode": "for (int i = 1; i <= 3; i++) {\n    System.out.println(\"Tur: \" + i);\n}"
},
  java_6: {
    "title": "Diziler & Çok Boyutlu Diziler (Arrays)",
    "readTime": "3 dk okuma",
    "rewardText": "🏢 Modern Rezidanslar & İş Kuleleri",
    "logic": "Aynı veri tipindeki birden fazla değeri sabit boyutlu sıralı bir listede tutmamızı sağlar.",
    "syntaxRules": [
        "<code>int[] sayilar = new int[5];</code> : 5 elemanlı tamsayı dizisi.",
        "<code>String[] isimler = {\"Ali\", \"Ayşe\"};</code> : Değerleri tanımlı dizi.",
        "<code>dizi.length</code> : Dizinin toplam kapasitesini döner.",
        "<code>for (String i : isimler) { ... }</code> : Gelişmiş For-Each döngüsü."
    ],
    "pitfalls": [
        "⚠️ Dizinin boyutu sabittir, sonradan değiştirilemez.",
        "⚠️ 3 elemanlı dizide <code>dizi[3]</code> erişimi <code>ArrayIndexOutOfBoundsException</code> verir.",
        "⚠️ Dizi uzunluğunda parantez olmaz (<code>dizi.length</code>)."
    ],
    "exampleCode": "int[] puanlar = {90, 85, 100};\nfor (int p : puanlar) {\n    System.out.println(\"Puan: \" + p);\n}"
},
  java_7: {
    "title": "Metotlar & Parametreler (Methods)",
    "readTime": "3 dk okuma",
    "rewardText": "🎬 Sinema & Kültür Merkezi",
    "logic": "Tekrar eden kodları tek bir fonksiyon altında toplayarak modüler ve yeniden kullanılabilir bloklar oluşturur.",
    "syntaxRules": [
        "<code>public static void yazdir() { ... }</code> : Değer döndürmeyen metot.",
        "<code>public static int topla(int a, int b) { return a + b; }</code> : Tamsayı döndüren metot.",
        "<code>return sonuc;</code> : Üretilen değeri çağıran yere aktarır.",
        "<code>Method Overloading</code> : Aynı isimde farklı parametreli metotlar."
    ],
    "pitfalls": [
        "⚠️ Dönüş tipi belirtilen metotta <code>return</code> unutulursa derleme hatası oluşur.",
        "⚠️ <code>void</code> metotlardan değer döndürülemez.",
        "⚠️ <code>main</code> içerisinden çağrılacak yardımcı metotlar <code>static</code> tanımlanmalıdır."
    ],
    "exampleCode": "public static int kareAl(int sayi) {\n    return sayi * sayi;\n}\n// Çağrı: int sonuc = kareAl(5); // 25"
},
  java_8: {
    "title": "OOP: Sınıflar ve Nesneler (Classes & Objects)",
    "readTime": "3 dk okuma",
    "rewardText": "🏛️ Yönetim Sarayı & Belediye",
    "logic": "Gerçek dünya varlıklarını şablonlar (Class) ve somut varlıklar (Object) olarak modeller.",
    "syntaxRules": [
        "<code>class Araba { String marka; }</code> : Sınıf şablonu.",
        "<code>Araba a = new Araba();</code> : new ile yeni nesne üretir.",
        "<code>a.marka = \"Toyota\";</code> : Nesne alanına nokta ile erişir.",
        "<code>this.marka</code> : Nesnenin kendi alanını işaret eder."
    ],
    "pitfalls": [
        "⚠️ Nesne oluştururken <code>new</code> kelimesi unutulursa <code>NullPointerException</code> oluşur.",
        "⚠️ Java dosya adı ile <code>public class</code> adı birebir aynı olmalıdır.",
        "⚠️ Nesne özelliklerine ok <code>-></code> ile değil, nokta <code>.</code> ile erişilir."
    ],
    "exampleCode": "class Kisi {\n    String ad;\n}\nKisi k = new Kisi();\nk.ad = \"Can\";\nSystem.out.println(\"Kişi: \" + k.ad);"
},
  java_9: {
    "title": "Kurucular & Erişim Belirteçleri",
    "readTime": "3 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Kurucu (Constructor) metotlar nesne oluşturulurken otomatik çalışıp başlangıç değerlerini atar. Erişim belirteçleri ise verilere erişimi sınırlar.",
    "syntaxRules": [
        "<code>public Araba(String m) { this.marka = m; }</code> : Kurucu metot.",
        "<code>public</code> : Her yerden erişilebilir.",
        "<code>private</code> : Yalnızca sınıf içinden erişilebilir.",
        "<code>static</code> : Sınıfa ait ortak alan/metot."
    ],
    "pitfalls": [
        "⚠️ Kurucu metotların dönüş tipi (<code>void</code> dahil) OLMAZ.",
        "⚠️ Kurucu metot adı sınıf adıyla birebir aynı olmalıdır.",
        "⚠️ <code>private</code> alanlara sınıf dışından doğrudan erişilemez."
    ],
    "exampleCode": "class Telefon {\n    String model;\n    public Telefon(String m) {\n        this.model = m;\n    }\n}\nTelefon t = new Telefon(\"iPhone 15\");"
},
  java_10: {
    "title": "Kapsülleme & Paketler (Encapsulation & Packages)",
    "readTime": "3 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "Hassas verileri private yaparak gizler ve bunlara kontrollü erişim için Getter (okuma) ve Setter (yazma) metotları sunar.",
    "syntaxRules": [
        "<code>private int bakiye;</code> : Gizli veri alanı.",
        "<code>public int getBakiye() { return bakiye; }</code> : Getter metodu.",
        "<code>public void setBakiye(int b) { this.bakiye = b; }</code> : Setter metodu.",
        "<code>import java.util.Scanner;</code> : Paket içe aktarma."
    ],
    "pitfalls": [
        "⚠️ Getter metotları parametre almaz ve veri döner; Setter metotları <code>void</code> olup parametre alır.",
        "⚠️ <code>boolean</code> alanların getter metotları <code>isAktif()</code> şeklinde başlar.",
        "⚠️ Kapsüllenmiş değişkene doğrudan <code>nesne.bakiye</code> ile erişilemez."
    ],
    "exampleCode": "class Hesap {\n    private int bakiye;\n    public int getBakiye() { return bakiye; }\n    public void setBakiye(int b) { if (b > 0) this.bakiye = b; }\n}"
},
  java_11: {
    "title": "Kalıtım & Çok Biçimlilik (Inheritance & Polymorphism)",
    "readTime": "3 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Raylar",
    "logic": "Alt sınıfın üst sınıftaki özellik ve metotları devralmasını (extends) ve bunları özelleştirmesini (@Override) sağlar.",
    "syntaxRules": [
        "<code>class Kopek extends Hayvan { ... }</code> : Kalıtım bildirimi.",
        "<code>super();</code> : Üst sınıfın kurucusunu çağırır.",
        "<code>@Override</code> : Üst sınıftan gelen metodu ezer.",
        "<code>Hayvan h = new Kopek();</code> : Çok biçimlilik (Polymorphism)."
    ],
    "pitfalls": [
        "⚠️ Java'da bir sınıf yalnızca TEK bir sınıftan miras alabilir.",
        "⚠️ <code>super()</code> çağrısı alt sınıf kurucusunun mutlaka İLK satırında yer almalıdır.",
        "⚠️ <code>final</code> olarak tanımlanmış metotlar alt sınıfta ezilemez."
    ],
    "exampleCode": "class Hayvan {\n    void ses() { System.out.println(\"Ses\"); }\n}\nclass Kedi extends Hayvan {\n    @Override\n    void ses() { System.out.println(\"Miyav\"); }\n}"
},
  java_12: {
    "title": "Soyutlama & Arayüzler (Abstraction & Interfaces)",
    "readTime": "3 dk okuma",
    "rewardText": "📡 5G Telekom & Uydu Kulesi",
    "logic": "Uygulamanın ne yapacağını belirleyen şablonlar (gövdesiz metotlar) kurarak alt sınıfları bu kuralları doldurmaya zorunlu kılar.",
    "syntaxRules": [
        "<code>abstract class Sekil { abstract void ciz(); }</code> : Soyut sınıf.",
        "<code>interface Oynatilabilir { void oynat(); }</code> : Arayüz tanımı.",
        "<code>class Muzik implements Oynatilabilir</code> : Arayüz uygulama.",
        "<code>enum Seviye { DUSUK, ORTA, YUKSEK }</code> : Sabitler kümesi."
    ],
    "pitfalls": [
        "⚠️ <code>abstract</code> sınıflardan doğrudan nesne üretilemez (<code>new Sekil()</code> hata verir).",
        "⚠️ Bir sınıf birden fazla interface uygulayabilir (<code>implements A, B</code>).",
        "⚠️ Arayüz metotları sınıfta ezilirken görünürlüğü düşürülemez; mutlaka <code>public</code> olmalıdır."
    ],
    "exampleCode": "interface Calisabilir {\n    void calis();\n}\nclass Robot implements Calisabilir {\n    public void calis() { System.out.println(\"Robot çalışıyor\"); }\n}"
},
  java_13: {
    "title": "Koleksiyonlar & Veri Yapıları (ArrayList & HashMap)",
    "readTime": "3 dk okuma",
    "rewardText": "🚢 Uluslararası Liman & Konteynerler",
    "logic": "Boyutu dinamik olarak büyüyüp küçülebilen listeler (ArrayList) ve anahtar-değer haritaları (HashMap) ile esnek veri yönetimi sağlar.",
    "syntaxRules": [
        "<code>ArrayList<String> liste = new ArrayList<>();</code> : Dinamik liste.",
        "<code>liste.add(\"X\"); / liste.get(0); / liste.remove(0);</code> : Liste metotları.",
        "<code>HashMap<String, Integer> map = new HashMap<>();</code> : Anahtar-değer haritası.",
        "<code>map.put(\"Ali\", 90); / map.get(\"Ali\");</code> : Harita metotları."
    ],
    "pitfalls": [
        "⚠️ Koleksiyonlarda ilkel tipler kullanılamaz; Wrapper sınıfları (<code>Integer</code>, <code>Double</code>) yazılmalıdır.",
        "⚠️ Listelerde eleman okumak için <code>liste[0]</code> değil, <code>liste.get(0)</code> kullanılır.",
        "⚠️ <code>HashSet</code> elemanları sırasız saklar ve tekrarları eler."
    ],
    "exampleCode": "import java.util.ArrayList;\nArrayList<String> sehirler = new ArrayList<>();\nsehirler.add(\"İzmir\");\nSystem.out.println(sehirler.get(0)); // İzmir"
},
  java_14: {
    "title": "Hata Yönetimi & Dosya İşlemleri (Try-Catch & File I/O)",
    "readTime": "3 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Roket Üssü",
    "logic": "Çalışma zamanında oluşabilecek beklenmedik çökmeleri (Exception) zarifçe yakalar ve diskte kalıcı dosya okuma/yazma işlemleri yapar.",
    "syntaxRules": [
        "<code>try { ... } catch (Exception e) { ... }</code> : Hatayı yakalayan koruma bloğu.",
        "<code>finally { ... }</code> : Her durumda çalışan temizlik bloğu.",
        "<code>throw new IllegalArgumentException(\"Hata\");</code> : Manuel hata fırlatır.",
        "<code>FileWriter writer = new FileWriter(\"not.txt\");</code> : Dosyaya metin yazma."
    ],
    "pitfalls": [
        "⚠️ Dosya işlemlerinde (FileWriter) <code>yazar.close()</code> çağrılmazsa veriler diske yazılmayabilir.",
        "⚠️ Sıfıra bölme hatası <code>ArithmeticException</code>, tip dönüşüm hatası <code>NumberFormatException</code> üretir.",
        "⚠️ Java'da hata fırlatırken <code>raise</code> değil <code>throw</code> kullanılır."
    ],
    "exampleCode": "try {\n    int sonuc = 10 / 0;\n} catch (ArithmeticException e) {\n    System.out.println(\"Sıfıra bölünemez!\");\n} finally {\n    System.out.println(\"İşlem bitti.\");\n}"
}
};

// Eski id eşleştirmeleri
TOPIC_REVIEWS_DB.p1 = TOPIC_REVIEWS_DB.python_1;
TOPIC_REVIEWS_DB.p2 = TOPIC_REVIEWS_DB.python_2;
TOPIC_REVIEWS_DB.p3 = TOPIC_REVIEWS_DB.python_3;
TOPIC_REVIEWS_DB.p4 = TOPIC_REVIEWS_DB.python_4;
TOPIC_REVIEWS_DB.p5 = TOPIC_REVIEWS_DB.python_5;
TOPIC_REVIEWS_DB.p6 = TOPIC_REVIEWS_DB.python_6;
TOPIC_REVIEWS_DB.p7 = TOPIC_REVIEWS_DB.python_7;
TOPIC_REVIEWS_DB.p8 = TOPIC_REVIEWS_DB.python_8;
TOPIC_REVIEWS_DB.p9 = TOPIC_REVIEWS_DB.python_9;
TOPIC_REVIEWS_DB.p10 = TOPIC_REVIEWS_DB.python_10;
TOPIC_REVIEWS_DB.p11 = TOPIC_REVIEWS_DB.python_11;
TOPIC_REVIEWS_DB.p12 = TOPIC_REVIEWS_DB.python_12;
TOPIC_REVIEWS_DB.p13 = TOPIC_REVIEWS_DB.python_13;
TOPIC_REVIEWS_DB.p14 = TOPIC_REVIEWS_DB.python_14;

// Java Topic Review Aliasları
TOPIC_REVIEWS_DB.j1 = TOPIC_REVIEWS_DB.java_1;
TOPIC_REVIEWS_DB.j2 = TOPIC_REVIEWS_DB.java_2;
TOPIC_REVIEWS_DB.j3 = TOPIC_REVIEWS_DB.java_3;
TOPIC_REVIEWS_DB.j4 = TOPIC_REVIEWS_DB.java_4;
TOPIC_REVIEWS_DB.j5 = TOPIC_REVIEWS_DB.java_5;
TOPIC_REVIEWS_DB.j6 = TOPIC_REVIEWS_DB.java_6;
TOPIC_REVIEWS_DB.j7 = TOPIC_REVIEWS_DB.java_7;
TOPIC_REVIEWS_DB.j8 = TOPIC_REVIEWS_DB.java_8;
TOPIC_REVIEWS_DB.j9 = TOPIC_REVIEWS_DB.java_9;
TOPIC_REVIEWS_DB.j10 = TOPIC_REVIEWS_DB.java_10;
TOPIC_REVIEWS_DB.j11 = TOPIC_REVIEWS_DB.java_11;
TOPIC_REVIEWS_DB.j12 = TOPIC_REVIEWS_DB.java_12;
TOPIC_REVIEWS_DB.j13 = TOPIC_REVIEWS_DB.java_13;
TOPIC_REVIEWS_DB.j14 = TOPIC_REVIEWS_DB.java_14;


TOPIC_REVIEWS_DB.p1 = TOPIC_REVIEWS_DB.python_1;
TOPIC_REVIEWS_DB.p2 = TOPIC_REVIEWS_DB.python_2;

function openTopicReviewModal(topic) {
  const modal = document.getElementById('topic-review-modal');
  if (!modal) {
    switchView('game');
    return;
  }

  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
  const reviewData = TOPIC_REVIEWS_DB[topic.id] || TOPIC_REVIEWS_DB.python_1 || TOPIC_REVIEWS_DB.p1;

  const titleEl = document.getElementById('review-title');
  const readTextEl = document.getElementById('review-read-text');
  const logicEl = document.getElementById('review-logic-text');
  const rulesListEl = document.getElementById('review-rules-list');
  const pitfallsListEl = document.getElementById('review-pitfalls-list');
  const exampleCodeEl = document.getElementById('review-example-code');
  const rewardTextEl = document.getElementById('review-reward-text');

  if (titleEl) titleEl.textContent = topic.title.replace(/^\d+\.\s*/, '') || reviewData.title;
  if (readTextEl) readTextEl.textContent = reviewData.readTime || '2 dk okuma';
  if (logicEl) logicEl.textContent = reviewData.logic || '';
  if (rewardTextEl) rewardTextEl.textContent = `Ödül: ${reviewData.rewardText || topic.reward || 'Gelişen Şehir Binası'}`;

  if (rulesListEl && reviewData.syntaxRules) {
    rulesListEl.innerHTML = reviewData.syntaxRules.map(rule => `
      <div class="review-rule-item">
        <span class="review-rule-bullet">›</span>
        <span>${rule}</span>
      </div>
    `).join('');
  }

  if (pitfallsListEl && reviewData.pitfalls) {
    pitfallsListEl.innerHTML = reviewData.pitfalls.map(p => `
      <div class="review-pitfall-item">
        <span class="review-pitfall-bullet">•</span>
        <span>${p}</span>
      </div>
    `).join('');
  }

  if (exampleCodeEl) {
    exampleCodeEl.textContent = reviewData.exampleCode || '# Kod örneği';
  }

  // Kilit Durumuna Göre Alıştırmaya Başla Butonu ve Kilit Uyarısı Kontrolü
  const isLocked = topic.status === 'locked';
  const btnStartPractice = document.getElementById('btn-start-practice');
  const lockedNotice = document.getElementById('review-locked-notice');

  if (btnStartPractice) {
    btnStartPractice.style.display = isLocked ? 'none' : 'flex';
  }
  if (lockedNotice) {
    lockedNotice.style.display = isLocked ? 'flex' : 'none';
  }

  modal.classList.add('open');
}

function closeTopicReviewModal() {
  const modal = document.getElementById('topic-review-modal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// --- 8. İNTERAKTİF KODLAMA VE KONTROL ALANI (Interactive Challenge & Code Engine) ---

const CHALLENGES_DATABASE = {
  python_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 1: DEĞİŞKEN ADLANDIRMA',
      title: '1. Soru: Değişken Adlandırma Hatası',
      prompt: "Aşağıdaki kodda değişken adlandırmasında bir hata var. Bu hatayı düzeltebilir misin?",
      presetCode: `1sayi = 1\n# Kodunu aşağıya doğru şekilde yaz:`,
      filename: 'degiskenler.py',
      lang: 'Python 3.11',
      quickKeys: ['sayi_1', 'sayi1', 'sayi', ' = ', '1'],
      hint: "Değişken isimleri rakamla başlayamaz. Örnek: sayi_1 = 1 veya sayi1 = 1",
      solution: "sayi_1 = 1",
      validator: (code) => {
        const clean = code.trim();
        if (/^\s*1[a-zA-Z0-9_]*\s*=/m.test(clean)) {
          return { ok: false, msg: "Hata: Değişken ismi rakamla (1...) başlayamaz! Rakamı sona veya ortaya koyun (örn: sayi_1 = 1)." };
        }
        if (/[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*\d+/.test(clean)) {
          return { ok: true, msg: "Tebrikler! Değişken adı başarıyla düzeltildi. ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen geçerli bir değişken tanımlayıp bir sayı atayın (örn: sayi_1 = 1)." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 1: AYRILMIŞ KELİMELER',
      title: '2. Soru: Değişken Adı Hatası',
      prompt: "Aşağıdaki kodda değişken adında bir hata var. Bu hatayı çözebilir misin?",
      presetCode: `int = "a"\n# Kodunu aşağıya doğru şekilde yaz:`,
      filename: 'degiskenler.py',
      lang: 'Python 3.11',
      quickKeys: ['metin', 'harf', 'karakter', ' = ', '"a"', "'a'"],
      hint: "'int' yerleşik tür adıdır. Bunun yerine 'metin', 'harf' gibi bir değişken adı kullanabilirsin (örn: metin = \"a\").",
      solution: 'metin = "a"',
      validator: (code) => {
        const clean = code.trim();
        if (/^\s*(int|str|float|for|def|class|import|return)\s*=/m.test(clean)) {
          return { ok: false, msg: "Hata: 'int' veya anahtar kelimeler değişken adı olarak kullanılmamalıdır. 'metin' veya 'harf' gibi bir isim seçin." };
        }
        if (/[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*['"]a['"]/.test(clean)) {
          return { ok: true, msg: "Harika! Değişken adı çakışması başarıyla çözüldü. ✓" };
        }
        return { ok: false, msg: 'Hata: Lütfen uygun bir değişkene "a" metnini atayın (örn: metin = "a").' };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 1: TAM SAYI TANIMLAMA',
      title: '3. Soru: Tam Sayı Değişkeni',
      prompt: "<code class=\"code-highlight\">sayi</code> adında bir tam sayı değişkeni tanımlayabilir misin?",
      presetCode: `# "sayi" adında bir tam sayı değişkeni tanımla:\n`,
      filename: 'degiskenler.py',
      lang: 'Python 3.11',
      quickKeys: ['sayi', ' = ', '5', '10', '42'],
      hint: "sayi = 5",
      solution: "sayi = 5",
      validator: (code) => {
        const clean = code.trim();
        if (/sayi\s*=\s*\d+/.test(clean)) {
          return { ok: true, msg: "Mükemmel! 'sayi' isimli tam sayı değişkeni başarıyla tanımlandı. ✓" };
        }
        if (!clean.includes('sayi')) {
          return { ok: false, msg: "Hata: Değişken adı 'sayi' olmalıdır." };
        }
        return { ok: false, msg: "Hata: 'sayi' değişkenine bir tam sayı atamalısınız (örn: sayi = 5)." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 1: METİN TANIMLAMA',
      title: '4. Soru: Metin Değişkeni',
      prompt: "<code class=\"code-highlight\">isim</code> adında bir metin (string) değişkeni tanımlayabilir misin?",
      presetCode: `# "isim" adında bir metin değişkeni tanımla:\n`,
      filename: 'degiskenler.py',
      lang: 'Python 3.11',
      quickKeys: ['isim', ' = ', '"Bengi"', "'Bengi'"],
      hint: 'isim = "Bengi"',
      solution: 'isim = "Bengi"',
      validator: (code) => {
        const clean = code.trim();
        if (/isim\s*=\s*['"][^'"]+['"]/.test(clean)) {
          return { ok: true, msg: "Tebrikler! 'isim' değişkeni doğru bir string olarak tanımlandı. ✓" };
        }
        if (!clean.includes('isim')) {
          return { ok: false, msg: "Hata: Değişken adı 'isim' olmalıdır." };
        }
        return { ok: false, msg: 'Hata: String ifadeler tırnak içine yazılmalıdır (örn: isim = "Bengi").' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 1: DEĞİŞKENLER VE EKRANA YAZDIRMA',
      title: '5. Soru: Değişken Tanımlama & Ekrana Yazdırma',
      prompt: "<code class=\"code-highlight\">isim</code>, <code class=\"code-highlight\">yas</code> ve <code class=\"code-highlight\">meslek</code> isminde 3 değişken tanımlayıp bunları <code class=\"code-highlight\">print()</code> ile ekrana yazdırabilir misin?",
      presetCode: `# 1. "isim", "yas" ve "meslek" adında 3 değişken tanımla:\n# 2. Tanımladığın değişkenleri print() ile ekrana yazdır:\n`,
      filename: 'degiskenler.py',
      lang: 'Python 3.11',
      quickKeys: ['isim = ', 'yas = ', 'meslek = ', 'print(', 'isim', 'yas', 'meslek', '"Bengi"', '25', '"Mühendis"'],
      hint: 'isim = "Bengi"\nyas = 25\nmeslek = "Mühendis"\nprint(isim, yas, meslek)',
      solution: 'isim = "Bengi"\nyas = 25\nmeslek = "Mühendis"\nprint(isim, yas, meslek)',
      validator: (code) => {
        const clean = code.trim();
        const hasIsim = /isim\s*=\s*['"][^'"]+['"]/.test(clean);
        const hasYas = /yas\s*=\s*\d+/.test(clean);
        const hasMeslek = /meslek\s*=\s*['"][^'"]+['"]/.test(clean);

        // print fonksiyonunun çağrılıp çağrılmadığını kontrol et
        const hasPrint = /print\s*\(/.test(clean);
        const printsVariables = hasPrint && (
          /print\s*\(.*(isim|yas|meslek)/.test(clean) ||
          /print\s*\(.*f['"]/.test(clean)
        );

        if (hasIsim && hasYas && hasMeslek && printsVariables) {
          return { ok: true, msg: "Mükemmel iş! 3 değişken de başarıyla tanımlandı ve print() ile ekrana yazdırıldı. Seviye tamamlandı! 🎉" };
        }

        const missing = [];
        if (!hasIsim) missing.push('isim (metin)');
        if (!hasYas) missing.push('yas (sayı)');
        if (!hasMeslek) missing.push('meslek (metin)');
        if (!printsVariables) missing.push('print() ile değişkenleri yazdırma');

        return { ok: false, msg: `Eksik veya hatalı adımlar: ${missing.join(', ')}. Lütfen 3 değişkeni tanımlayıp print() ile ekrana yazdırın.` };
      }
    }
  ],
  python_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 2: İNDEKSLERE ERİŞİM',
      title: '1. Soru: İlk Harfe Erişme',
      prompt: "<code class=\"code-highlight\">kelime = \"Python\"</code> değişkeninin ilk karakterini (<code class=\"code-highlight\">0. indeks</code>) <code class=\"code-highlight\">print()</code> ile ekrana yazdırabilir misin?",
      presetCode: `kelime = "Python"\n# İlk harfi ekrana yazdır:\n`,
      filename: 'stringler.py',
      lang: 'Python 3.11',
      quickKeys: ['print(', 'kelime[0]', 'kelime', '[0]', '0'],
      hint: 'print(kelime[0])',
      solution: 'print(kelime[0])',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*(kelime\[0\]|['"]Python['"]\[0\])\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! İlk indeks başarıyla seçildi ve ekrana yazdırıldı. ✓" };
        }
        if (!clean.includes('[0]')) {
          return { ok: false, msg: "Hata: İlk karaktere erişmek için [0] indeksini kullanmalısınız (örn: kelime[0])." };
        }
        return { ok: false, msg: "Hata: Lütfen print(kelime[0]) şeklinde sonucu ekrana yazdırın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 2: METİN UZUNLUĞU',
      title: '2. Soru: Metin Uzunluğunu Bulma',
      prompt: "<code class=\"code-highlight\">mesaj = \"Kodlama\"</code> değişkeninin karakter uzunluğunu <code class=\"code-highlight\">len()</code> fonksiyonu ile ekrana yazdırabilir misin?",
      presetCode: `mesaj = "Kodlama"\n# Karakter uzunluğunu ekrana yazdır:\n`,
      filename: 'stringler.py',
      lang: 'Python 3.11',
      quickKeys: ['print(', 'len(', 'mesaj', ')', 'len(mesaj)'],
      hint: 'print(len(mesaj))',
      solution: 'print(len(mesaj))',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*len\s*\(\s*mesaj\s*\)\s*\)/.test(clean) || /uzunluk\s*=\s*len\(mesaj\)[\s\S]*print\(uzunluk\)/.test(clean)) {
          return { ok: true, msg: "Harika! len() fonksiyonu ile metin uzunluğu doğru hesaplandı. ✓" };
        }
        if (!clean.includes('len')) {
          return { ok: false, msg: "Hata: Metin uzunluğunu ölçmek için len() fonksiyonunu kullanmalısınız (örn: len(mesaj))." };
        }
        return { ok: false, msg: "Hata: Lütfen print(len(mesaj)) şeklinde uzunluğu ekrana yazdırın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 2: BÜYÜK HARFE ÇEVİRME',
      title: '3. Soru: Büyük Harf Metodu (.upper)',
      prompt: "<code class=\"code-highlight\">sehir = \"istanbul\"</code> metnini <code class=\"code-highlight\">.upper()</code> metodu ile tamamen büyük harfe dönüştürüp ekrana yazdırabilir misin?",
      presetCode: `sehir = "istanbul"\n# Büyük harfe dönüştürüp yazdır:\n`,
      filename: 'stringler.py',
      lang: 'Python 3.11',
      quickKeys: ['print(', 'sehir.upper()', '.upper()', 'sehir'],
      hint: 'print(sehir.upper())',
      solution: 'print(sehir.upper())',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*sehir\.upper\(\)\s*\)/.test(clean) || /sehir\.upper\(\)[\s\S]*print/.test(clean)) {
          return { ok: true, msg: "Mükemmel! .upper() metodu ile metin başarıyla büyütüldü. ✓" };
        }
        if (!clean.includes('.upper()')) {
          return { ok: false, msg: "Hata: Büyük harfe dönüştürmek için .upper() metodunu kullanmalısınız (örn: sehir.upper())." };
        }
        return { ok: false, msg: "Hata: Lütfen print(sehir.upper()) şeklinde çıktıyı ekrana yazdırın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 2: METİN DİLİMLEME (SLICING)',
      title: '4. Soru: Metin Dilimleme',
      prompt: "<code class=\"code-highlight\">kurs = \"Programlama\"</code> değişkeninden ilk 7 harfi (<code class=\"code-highlight\">\"Program\"</code>) dilimleyerek ekrana yazdırabilir misin?",
      presetCode: `kurs = "Programlama"\n# İlk 7 harfi [0:7] dilimleyip yazdır:\n`,
      filename: 'stringler.py',
      lang: 'Python 3.11',
      quickKeys: ['print(', 'kurs[0:7]', 'kurs[:7]', '[0:7]', '[:7]'],
      hint: 'print(kurs[0:7]) veya print(kurs[:7])',
      solution: 'print(kurs[0:7])',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*kurs\[\s*(0\s*)?:\s*7\s*\]\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! Dilimleme işlemi (slicing) başarıyla uygulandı. ✓" };
        }
        if (!clean.includes(':7')) {
          return { ok: false, msg: "Hata: İlk 7 karakteri almak için [0:7] veya [:7] dilimleme aralığını kullanın." };
        }
        return { ok: false, msg: "Hata: Lütfen print(kurs[0:7]) şeklinde dilimlenen metni yazdırın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 2: MODERN METİN BİRLEŞTİRME (F-STRING)',
      title: '5. Soru: f-string ile Birleştirme',
      prompt: "<code class=\"code-highlight\">ad = \"Bengi\"</code> ve <code class=\"code-highlight\">puan = 100</code> değişkenlerini <code class=\"code-highlight\">f-string</code> ile birleştirip <code class=\"code-highlight\">f\"{ad} sınavdan {puan} aldı\"</code> cümlesini ekrana yazdırabilir misin?",
      presetCode: `ad = "Bengi"\npuan = 100\n# f-string kullanarak ekrana yazdır:\n`,
      filename: 'stringler.py',
      lang: 'Python 3.11',
      quickKeys: ['print(f"', '{ad}', '{puan}', 'sınavdan', 'aldı")', 'f"{ad} sınavdan {puan} aldı"'],
      hint: 'print(f"{ad} sınavdan {puan} aldı")',
      solution: 'print(f"{ad} sınavdan {puan} aldı")',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*f['"].*\{ad\}.*\{puan\}.*['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! f-string ile dinamik metin başarıyla oluşturuldu. 2. Modül Tamamlandı! 🚀" };
        }
        if (!clean.includes('f"') && !clean.includes("f'")) {
          return { ok: false, msg: "Hata: Modern formatlama için f-string kullanmalısınız (örn: f\"{ad} ... {puan}\")." };
        }
        return { ok: false, msg: 'Hata: Lütfen print(f"{ad} sınavdan {puan} aldı") şeklinde yazdırın.' };
      }
    }
  ],
  python_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 3: ARİTMETİK İŞLEMLER',
      title: '1. Soru: Çarpma ve Bölme',
      prompt: "<code class=\"code-highlight\">sayi = 18</code> değişkeninin 7 katını alıp 9'a bölerek çıkan sonucu ekrana yazdırabilir misin?",
      presetCode: `sayi = 18\n# 7 katını alıp 9'a böl ve yazdır:\n`,
      filename: 'operatorler.py',
      lang: 'Python 3.11',
      quickKeys: ['sayi', ' * 7', ' / 9', 'print(', ')'],
      hint: 'print(sayi * 7 / 9)',
      solution: 'print(sayi * 7 / 9)',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*(sayi\s*\*\s*7\s*\/\s*9|18\s*\*\s*7\s*\/\s*9|sonuc)\s*\)/.test(clean) || /sonuc\s*=\s*sayi\s*\*\s*7\s*\/\s*9/.test(clean)) {
          return { ok: true, msg: "Mükemmel! Aritmetik işlem başarıyla hesaplandı. ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen print(sayi * 7 / 9) şeklinde 7 katını alıp 9'a bölün ve yazdırın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 3: TAM BÖLME VE MOD ALMA',
      title: '2. Soru: Tam Bölme (//) ve Kalan (%)',
      prompt: "<code class=\"code-highlight\">sayi = 15</code> değişkeninin 4 katının 3'e tam bölümünü (<code class=\"code-highlight\">// 3</code>) ve 3'e bölümünden kalanını (<code class=\"code-highlight\">% 3</code>) hesaplayıp ekrana yazdırabilir misin?",
      presetCode: `sayi = 15\n# 4 katının 3'e tam bölümünü ve kalanını yazdır:\n`,
      filename: 'operatorler.py',
      lang: 'Python 3.11',
      quickKeys: ['(sayi * 4) // 3', '(sayi * 4) % 3', 'print(', '//', '%'],
      hint: 'print((sayi * 4) // 3)\nprint((sayi * 4) % 3)',
      solution: 'print((sayi * 4) // 3, (sayi * 4) % 3)',
      validator: (code) => {
        const clean = code.trim();
        const hasFloor = /\/\/\s*3/.test(clean);
        const hasMod = /%\s*3/.test(clean);
        const hasPrint = /print\s*\(/.test(clean);

        if (hasFloor && hasMod && hasPrint) {
          return { ok: true, msg: "Harika! Tam bölme (//) ve kalan (%) operatörleri başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen (sayi * 4) // 3 ve (sayi * 4) % 3 işlemlerini print() ile yazdırın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 3: ÜS ALMA OPERATÖRÜ',
      title: '3. Soru: Üs Alma (**) ve Mod (%)',
      prompt: "<code class=\"code-highlight\">12 ** 4</code> ($12^4$) ifadesini hesaplayıp bu sonucun 10 ile bölümünden kalanını (<code class=\"code-highlight\">% 10</code>) ekrana yazdırabilir misin?",
      presetCode: `# 12^4 değerinin 10 ile bölümünden kalanını yazdır:\n`,
      filename: 'operatorler.py',
      lang: 'Python 3.11',
      quickKeys: ['print(', '12 ** 4', ' % 10', '**', '%'],
      hint: 'print((12 ** 4) % 10)',
      solution: 'print((12 ** 4) % 10)',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*\(?\s*12\s*\*\*\s*4\s*\)?\s*%\s*10\s*\)/.test(clean) || /sonuc\s*=\s*\(?\s*12\s*\*\*\s*4\s*\)?\s*%\s*10/.test(clean)) {
          return { ok: true, msg: "Tebrikler! Üs alma (**) ve mod (%) operatörleri doğru kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen print((12 ** 4) % 10) şeklinde hesaplayıp ekrana yazdırın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 3: MANTIKSAL OPERATÖRLER',
      title: '4. Soru: Mantıksal Koşul (and)',
      prompt: "<code class=\"code-highlight\">yas = 20</code> değişkeninin 18'den büyük eşit VE (<code class=\"code-highlight\">and</code>) 65'ten küçük olup olmadığını kontrol edip ekrana yazdırabilir misin?",
      presetCode: `yas = 20\n# Koşul kontrolünü (and) ekrana yazdır:\n`,
      filename: 'operatorler.py',
      lang: 'Python 3.11',
      quickKeys: ['print(', 'yas >= 18', ' and ', 'yas < 65', '>=', '<'],
      hint: 'print(yas >= 18 and yas < 65)',
      solution: 'print(yas >= 18 and yas < 65)',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*(yas\s*>=\s*18\s+and\s+yas\s*<\s*65|18\s*<=\s*yas\s*<\s*65)\s*\)/.test(clean) || /(yas\s*>=\s*18\s+and\s+yas\s*<\s*65)/.test(clean)) {
          return { ok: true, msg: "Doğru! 'and' mantıksal operatörü ile çift yönlü aralık başarıyla kontrol edildi. ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen print(yas >= 18 and yas < 65) şeklinde koşulu yazdırın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 3: AĞIRLIKLI ORTALAMA HESABI',
      title: '5. Soru: Not Ortalaması Hesaplama',
      prompt: "<code class=\"code-highlight\">vize = 70</code> ve <code class=\"code-highlight\">final = 90</code> değişkenlerini tanımlayıp vizenin %40'ı ile finalin %60'ını (<code class=\"code-highlight\">vize * 0.4 + final * 0.6</code>) hesaplayarak ekrana yazdırabilir misin?",
      presetCode: `vize = 70\nfinal = 90\n# Ağırlıklı ortalamayı hesaplayıp ekrana yazdır:\n`,
      filename: 'operatorler.py',
      lang: 'Python 3.11',
      quickKeys: ['vize * 0.4', ' + ', 'final * 0.6', 'ortalama = ', 'print('],
      hint: 'ortalama = vize * 0.4 + final * 0.6\nprint(ortalama)',
      solution: 'print(vize * 0.4 + final * 0.6)',
      validator: (code) => {
        const clean = code.trim();
        const hasVize = /vize\s*=\s*70/.test(clean);
        const hasFinal = /final\s*=\s*90/.test(clean);
        const hasFormula = /(vize\s*\*\s*0?\.4\s*\+\s*final\s*\*\s*0?\.6|70\s*\*\s*0?\.4\s*\+\s*90\s*\*\s*0?\.6)/.test(clean);
        const hasPrint = /print\s*\(/.test(clean);

        if (hasFormula && hasPrint) {
          return { ok: true, msg: "Mükemmel! Ağırlıklı ortalama doğru hesaplandı ve yazdırıldı. 3. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: Lütfen vize ve final değişkenleriyle print(vize * 0.4 + final * 0.6) işlemini yazdırın." };
      }
    }
  ],
  python_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 4: IF KOŞULU',
      title: '1. Soru: Basit If Koşulu',
      prompt: "<code class=\"code-highlight\">yas = 15</code> değeri 18'den küçükse (<code class=\"code-highlight\">yas < 18</code>) ekrana <code class=\"code-highlight\">\"Giriş Yapamaz\"</code> yazdırabilir misin?",
      presetCode: `yas = 15\n# yas 18'den küçükse "Giriş Yapamaz" yazdır:\n`,
      filename: 'kosullar.py',
      lang: 'Python 3.11',
      quickKeys: ['if ', 'yas < 18:', 'print("Giriş Yapamaz")', '    '],
      hint: 'if yas < 18:\n    print("Giriş Yapamaz")',
      solution: 'if yas < 18:\n    print("Giriş Yapamaz")',
      validator: (code) => {
        const clean = code.trim();
        if (/if\s+yas\s*<\s*18\s*:\s*[\s\S]*print\s*\(\s*['"]Giriş Yapamaz['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! If koşulu başarıyla kuruldu. ✓" };
        }
        if (!clean.includes('if')) {
          return { ok: false, msg: "Hata: 'if yas < 18:' koşulunu kurmalısınız." };
        }
        return { ok: false, msg: 'Hata: Lütfen yas < 18 ise print("Giriş Yapamaz") yazdırın.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 4: IF - ELSE YAPISI',
      title: '2. Soru: If - Else Yapısı',
      prompt: "<code class=\"code-highlight\">yas = 20</code> için; 18'den küçükse <code class=\"code-highlight\">\"Giriş Yapamaz\"</code>, değilse (<code class=\"code-highlight\">else</code>) ekrana <code class=\"code-highlight\">\"Giriş Yapabilir\"</code> yazdırabilir misin?",
      presetCode: `yas = 20\nif yas < 18:\n    print("Giriş Yapamaz")\n# else durumunu ekle:\n`,
      filename: 'kosullar.py',
      lang: 'Python 3.11',
      quickKeys: ['else:', 'print("Giriş Yapabilir")', '    '],
      hint: 'if yas < 18:\n    print("Giriş Yapamaz")\nelse:\n    print("Giriş Yapabilir")',
      solution: 'if yas < 18:\n    print("Giriş Yapamaz")\nelse:\n    print("Giriş Yapabilir")',
      validator: (code) => {
        const clean = code.trim();
        const hasElse = /else\s*:/.test(clean);
        const hasPrint = /print\s*\(\s*['"]Giriş Yapabilir['"]\s*\)/.test(clean);

        if (hasElse && hasPrint) {
          return { ok: true, msg: "Harika! If-Else yapısı doğru şekilde tamamlandı. ✓" };
        }
        return { ok: false, msg: 'Hata: Lütfen else: bloğunun altına print("Giriş Yapabilir") ekleyin.' };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 4: ELIF YAPISI',
      title: '3. Soru: Çoklu Koşul (elif)',
      prompt: "<code class=\"code-highlight\">yas = 70</code> için; 18'den küçükse veya 65'ten büyükse (<code class=\"code-highlight\">elif yas > 65:</code>) <code class=\"code-highlight\">\"Giriş Yapamaz\"</code>, diğer durumlarda (<code class=\"code-highlight\">else:</code>) <code class=\"code-highlight\">\"Giriş Yapabilir\"</code> yazdırabilir misin?",
      presetCode: `yas = 70\nif yas < 18:\n    print("Giriş Yapamaz")\n# elif ve else durumlarını ekle:\n`,
      filename: 'kosullar.py',
      lang: 'Python 3.11',
      quickKeys: ['elif yas > 65:', 'elif yas >= 65:', 'else:', 'print("Giriş Yapamaz")', 'print("Giriş Yapabilir")'],
      hint: 'if yas < 18:\n    print("Giriş Yapamaz")\nelif yas > 65:\n    print("Giriş Yapamaz")\nelse:\n    print("Giriş Yapabilir")',
      solution: 'elif yas > 65:\n    print("Giriş Yapamaz")\nelse:\n    print("Giriş Yapabilir")',
      validator: (code) => {
        const clean = code.trim();
        const hasElif = /elif\s+yas\s*(>|>=)\s*65\s*:/.test(clean);
        const hasElse = /else\s*:/.test(clean);

        if (hasElif && hasElse) {
          return { ok: true, msg: "Mükemmel! elif ve else basamakları başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: 'Hata: Lütfen elif yas > 65: ve else: durumlarını ekleyin.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 4: MANTIKSAL KOŞULLAR (AND & IF-ELSE)',
      title: '4. Soru: Not Hesabı & Geçti / Kaldı',
      prompt: "<code class=\"code-highlight\">vize_notu = 60</code> ve <code class=\"code-highlight\">final_notu = 70</code> için; <code class=\"code-highlight\">ortalama = vize_notu * 0.4 + final_notu * 0.6</code> ile ortalamayı hesapla. Ardından <code class=\"code-highlight\">final_notu >= 50 and ortalama >= 50</code> ise <code class=\"code-highlight\">\"Geçti\"</code>, değilse (<code class=\"code-highlight\">else:</code>) <code class=\"code-highlight\">\"Kaldı\"</code> yazdırabilir misin?",
      presetCode: `vize_notu = 60\nfinal_notu = 70\n# 1. Ortalamayı hesapla:\n# 2. if-else ile "Geçti" veya "Kaldı" yazdır:\n`,
      filename: 'kosullar.py',
      lang: 'Python 3.11',
      quickKeys: ['ortalama = vize_notu * 0.4 + final_notu * 0.6', 'if final_notu >= 50 and ortalama >= 50:', '    print("Geçti")', 'else:', '    print("Kaldı")'],
      hint: 'ortalama = vize_notu * 0.4 + final_notu * 0.6\nif final_notu >= 50 and ortalama >= 50:\n    print("Geçti")\nelse:\n    print("Kaldı")',
      solution: 'ortalama = vize_notu * 0.4 + final_notu * 0.6\nif final_notu >= 50 and ortalama >= 50:\n    print("Geçti")\nelse:\n    print("Kaldı")',
      validator: (code) => {
        const clean = code.trim();
        const hasFormula = /(vize_notu|vize)\s*\*\s*0?\.4\s*\+\s*(final_notu|final)\s*\*\s*0?\.6/.test(clean);
        const hasIf = /if\s+.*(final_notu|final)\s*>=\s*50\s+and\s+ortalama\s*>=\s*50/.test(clean) || /if\s+.*ortalama\s*>=\s*50\s+and\s+(final_notu|final)\s*>=\s*50/.test(clean);
        const hasGecti = /print\s*\(\s*['"]Geçti['"]\s*\)/.test(clean);
        const hasElse = /else\s*:/.test(clean);
        const hasKaldi = /print\s*\(\s*['"]Kaldı['"]\s*\)/.test(clean);

        if (hasFormula && hasIf && hasGecti && hasElse && hasKaldi) {
          return { ok: true, msg: "Mükemmel iş! Ağırlıklı ortalama hesaplandı ve if-else ile Geçti/Kaldı durumu başarıyla kontrol edildi. ✓" };
        }

        const missing = [];
        if (!hasFormula) missing.push('ortalama hesabı (vize_notu * 0.4 + final_notu * 0.6)');
        if (!hasIf) missing.push('if final_notu >= 50 and ortalama >= 50: koşulu');
        if (!hasGecti) missing.push('print("Geçti")');
        if (!hasElse || !hasKaldi) missing.push('else: print("Kaldı")');

        return { ok: false, msg: `Eksik veya hatalı adımlar: ${missing.join(', ')}.` };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: 'MODÜL 4: SEÇİM YAPILARI (MATCH - CASE)',
      title: '5. Soru: Match - Case ile Gün Seçimi',
      prompt: "<code class=\"code-highlight\">gun = 1</code> değişkenini <code class=\"code-highlight\">match - case</code> ile kontrol edip <code class=\"code-highlight\">1</code> ise <code class=\"code-highlight\">\"Pazartesi\"</code>, <code class=\"code-highlight\">2</code> ise <code class=\"code-highlight\">\"Salı\"</code> yazdırabilir misin?",
      presetCode: `gun = 1\n# match-case yapısı ile günü kontrol et:\n`,
      filename: 'kosullar.py',
      lang: 'Python 3.11',
      quickKeys: ['match gun:', 'case 1:', 'case 2:', 'print("Pazartesi")', 'print("Salı")'],
      hint: 'match gun:\n    case 1:\n        print("Pazartesi")\n    case 2:\n        print("Salı")',
      solution: 'match gun:\n    case 1:\n        print("Pazartesi")\n    case 2:\n        print("Salı")',
      validator: (code) => {
        const clean = code.trim();
        const hasMatch = /match\s+gun\s*:/.test(clean) && /case\s+1\s*:/.test(clean) && /print\s*\(\s*['"]Pazartesi['"]\s*\)/.test(clean);
        const hasIfAlternative = /if\s+gun\s*==\s*1\s*:\s*[\s\S]*print\s*\(\s*['"]Pazartesi['"]\s*\)/.test(clean);

        if (hasMatch || hasIfAlternative) {
          return { ok: true, msg: "Harika iş! Koşul ve seçim yapısı başarıyla tamamlandı. 4. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: 'Hata: Lütfen match gun: case 1: print("Pazartesi") yapısını kurun.' };
      }
    }
  ],
  python_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: LİSTE METOTLARI (APPEND)",
      title: "1. Soru: Listeye Eleman Ekleme",
      prompt: "Geliştirici mevcut alışveriş listesine yeni bir ürün ekleyip güncel listeyi ekranda görmek istiyor ancak çıktıda liste yerine boş bir sonuç (<code class=\"code-highlight\">None</code>) alıyor. Bu aksaklığı gidererek kodu doğru şekilde yeniden yazar mısın?",
      presetCode: "urunler = [\"Elma\", \"Muz\"]\nurunler = urunler.append(\"Çilek\")\nprint(urunler)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["urunler.append(\"Çilek\")","print(urunler)","urunler = [\"Elma\", \"Muz\"]"],
      hint: "urunler = [\"Elma\", \"Muz\"]\nurunler.append(\"Çilek\")\nprint(urunler)",
      solution: "urunler = [\"Elma\", \"Muz\"]\nurunler.append(\"Çilek\")\nprint(urunler)",
      validator: (code) => {
        const clean = code.trim();
        const hasNoReassign = !/urunler\s*=\s*urunler\.append/.test(clean);
        const hasAppend = /urunler\.append\s*\(\s*['"]Çilek['"]\s*\)/.test(clean);
        const hasPrint = /print\s*\(\s*urunler\s*\)/.test(clean);
        if (hasNoReassign && hasAppend && hasPrint) return { ok: true, msg: "Harika! .append() listeyi yerinde günceller. ✓" };
        return { ok: false, msg: "Hata: urunler.append('Çilek') yaptıktan sonra print(urunler) yazdırın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: DEĞİŞTİRİLEMEZLİK & DEMETLER",
      title: "2. Soru: Demet ve Liste Dönüşümü",
      prompt: "Geliştirici demetteki (tuple) ilk şehir ismini güncelleyerek listeyi ekrana yazdırmak istiyor ancak program değiştirme aşamasında hata veriyor. Veri yapısını amaca uygun hale getirerek güncellenmiş şehri ekrana yazdırabilir misin?",
      presetCode: "sehirler = (\"İzmir\", \"Ankara\", \"İstanbul\")\nsehirler[0] = \"Bursa\"\nprint(sehirler)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["sehirler = [\"İzmir\", \"Ankara\", \"İstanbul\"]","sehirler[0] = \"Bursa\"","print(sehirler)"],
      hint: "sehirler = [\"İzmir\", \"Ankara\", \"İstanbul\"]\nsehirler[0] = \"Bursa\"\nprint(sehirler)",
      solution: "sehirler = [\"İzmir\", \"Ankara\", \"İstanbul\"]\nsehirler[0] = \"Bursa\"\nprint(sehirler)",
      validator: (code) => {
        const clean = code.trim();
        const isList = /sehirler\s*=\s*\[\s*['"]İzmir['"]\s*,\s*['"]Ankara['"]\s*,\s*['"]İstanbul['"]\s*\]/.test(clean);
        const hasAssign = /sehirler\s*\[\s*0\s*\]\s*=\s*['"]Bursa['"]/.test(clean);
        const hasPrint = /print\s*\(\s*sehirler\s*\)/.test(clean);
        if (isList && hasAssign && hasPrint) return { ok: true, msg: "Tebrikler! Listeler değiştirilebilir olduğundan hata çözüldü. ✓" };
        return { ok: false, msg: "Hata: sehirler'i liste [] yapıp sehirler[0] = 'Bursa' ataması yapın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: ELEMAN ÇIKARMA (POP)",
      title: "3. Soru: Son Elemanı Ayırma",
      prompt: "Geliştirici sayı listesindeki en son eklenen sayıyı listeden ayırıp ekrana yazdırmak istiyor fakat kod yanlışlıkla listenin ilk elemanını siliyor. Son elemanı çıkaracak şekilde kodu düzenleyebilir misin?",
      presetCode: "puanlar = [10, 20, 30, 40]\nson_puan = puanlar.pop(0)\nprint(son_puan)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["son_puan = puanlar.pop()","puanlar.pop()","print(son_puan)"],
      hint: "puanlar = [10, 20, 30, 40]\nson_puan = puanlar.pop()\nprint(son_puan)",
      solution: "puanlar = [10, 20, 30, 40]\nson_puan = puanlar.pop()\nprint(son_puan)",
      validator: (code) => {
        const clean = code.trim();
        const hasCorrectPop = /puanlar\.pop\s*\(\s*(\s*|-1\s*)\)/.test(clean);
        const hasPrint = /print\s*\(\s*son_puan\s*\)/.test(clean) || /print\s*\(\s*puanlar\.pop\s*\(\s*\)\s*\)/.test(clean);
        if (hasCorrectPop && hasPrint) return { ok: true, msg: "Mükemmel! .pop() argümansız çağrıldığında son elemanı alır. ✓" };
        return { ok: false, msg: "Hata: son_puan = puanlar.pop() kullanarak son elemanı çekin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: LİSTE SIRALAMA (SORT)",
      title: "4. Soru: Listeyi Sıralama",
      prompt: "Geliştirici karışık verilen sayı listesini küçükten büyüğe sıralı şekilde ekrana yazdırmak istiyor ancak kod sıralama işlemini gerçekleştirmeden hata üretiyor. Sıralama metodunu doğru uygulayarak sonucu yazdırabilir misin?",
      presetCode: "sayilar = [85, 12, 44, 3]\nsayilar.sort\nprint(sayilar)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["sayilar.sort()","print(sayilar)","sayilar = [85, 12, 44, 3]"],
      hint: "sayilar = [85, 12, 44, 3]\nsayilar.sort()\nprint(sayilar)",
      solution: "sayilar = [85, 12, 44, 3]\nsayilar.sort()\nprint(sayilar)",
      validator: (code) => {
        const clean = code.trim();
        const hasSortCall = /sayilar\.sort\s*\(\s*\)/.test(clean);
        const hasPrint = /print\s*\(\s*sayilar\s*\)/.test(clean);
        if (hasSortCall && hasPrint) return { ok: true, msg: "Harika! sort() metodunu parantez ile çağırmak listeyi sıraladı. ✓" };
        return { ok: false, msg: "Hata: sayilar.sort() fonksiyon çağrısını parantezle tamamlayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: LİSTE DİLİMLEME (SLICING)",
      title: "5. Soru: Liste Dilimleme Aralığı",
      prompt: "Geliştirici öğrenci listesinde 1. ve 2. sıradaki öğrencileri dilimleyerek alt bir grup oluşturmak istiyor ancak eksik eleman alıyor. İstenen 2 öğrenciyi de kapsayacak doğru dilimleme aralığını yazar mısın?",
      presetCode: "ogrenciler = [\"Ali\", \"Ayşe\", \"Mehmet\", \"Zeynep\"]\ngrup = ogrenciler[1:2]\nprint(grup)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["grup = ogrenciler[1:3]","print(grup)","ogrenciler[1:3]"],
      hint: "ogrenciler = [\"Ali\", \"Ayşe\", \"Mehmet\", \"Zeynep\"]\ngrup = ogrenciler[1:3]\nprint(grup)",
      solution: "ogrenciler = [\"Ali\", \"Ayşe\", \"Mehmet\", \"Zeynep\"]\ngrup = ogrenciler[1:3]\nprint(grup)",
      validator: (code) => {
        const clean = code.trim();
        const hasSlice = /ogrenciler\s*\[\s*1\s*:\s*3\s*\]/.test(clean);
        const hasPrint = /print\s*\(\s*grup\s*\)/.test(clean) || /print\s*\(\s*ogrenciler\s*\[\s*1\s*:\s*3\s*\]\s*\)/.test(clean);
        if (hasSlice && hasPrint) return { ok: true, msg: "Tebrikler! [1:3] aralığı 1. ve 2. indeksleri başarıyla kapsadı. 5. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: grup = ogrenciler[1:3] ile 1 ve 2. elemanları dilimleyin." };
      }
    }
  ],
  python_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: GÜVENLİ SÖZLÜK ERİŞİMİ (.GET)",
      title: "1. Soru: Güvenli Anahtar Erişimi",
      prompt: "Geliştirici bir kullanıcının yaş bilgisini sözlükten okumak istiyor ancak olmayan bir anahtar yüzünden program aniden duruyor. Anahtar bulunamadığında varsayılan olarak <code class=\"code-highlight\">\"Belirtilmedi\"</code> döndüren güvenli yöntemi yazar mısın?",
      presetCode: "kullanici = {\"ad\": \"Can\", \"sehir\": \"İzmir\"}\nyas = kullanici[\"yas\"]\nprint(yas)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "sozlukler.py",
      lang: "Python 3.11",
      quickKeys: ["kullanici.get(\"yas\", \"Belirtilmedi\")","print(yas)",".get("],
      hint: "kullanici = {\"ad\": \"Can\", \"sehir\": \"İzmir\"}\nyas = kullanici.get(\"yas\", \"Belirtilmedi\")\nprint(yas)",
      solution: "kullanici = {\"ad\": \"Can\", \"sehir\": \"İzmir\"}\nyas = kullanici.get(\"yas\", \"Belirtilmedi\")\nprint(yas)",
      validator: (code) => {
        const clean = code.trim();
        const hasGet = /kullanici\.get\s*\(\s*['"]yas['"]\s*,\s*['"]Belirtilmedi['"]\s*\)/.test(clean);
        const hasPrint = /print\s*\(/.test(clean);
        if (hasGet && hasPrint) return { ok: true, msg: "Harika! .get() metodu anahtar yoksa varsayılan değeri güvenle döner. ✓" };
        return { ok: false, msg: 'Hata: yas = kullanici.get("yas", "Belirtilmedi") kullanmalısınız.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: SÖZLÜK GÜNCELLEME",
      title: "2. Soru: Sözlük Değeri Güncelleme",
      prompt: "Geliştirici bir ürünün fiyat bilgisini güncellemek istiyor fakat hatalı sözdizimi nedeniyle kod çalışmıyor. Sözlüğü doğru şekilde güncelleyebilir misin?",
      presetCode: "urun = {\"isim\": \"Laptop\", \"fiyat\": 15000}\nurun(\"fiyat\") = 18000\nprint(urun)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "sozlukler.py",
      lang: "Python 3.11",
      quickKeys: ["urun[\"fiyat\"] = 18000","print(urun)","urun[\"fiyat\"]"],
      hint: "urun = {\"isim\": \"Laptop\", \"fiyat\": 15000}\nurun[\"fiyat\"] = 18000\nprint(urun)",
      solution: "urun = {\"isim\": \"Laptop\", \"fiyat\": 15000}\nurun[\"fiyat\"] = 18000\nprint(urun)",
      validator: (code) => {
        const clean = code.trim();
        const hasAssign = /urun\s*\[\s*['"]fiyat['"]\s*\]\s*=\s*18000/.test(clean);
        const hasPrint = /print\s*\(\s*urun\s*\)/.test(clean);
        if (hasAssign && hasPrint) return { ok: true, msg: "Tebrikler! Sözlük anahtarlarına köşeli parantez [] ile değer atanır. ✓" };
        return { ok: false, msg: 'Hata: urun["fiyat"] = 18000 ataması yapıp print(urun) yazdırın.' };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KÜMELER & BENZERSİZ ELEMANLAR",
      title: "3. Soru: Benzersiz Eleman Kümesi",
      prompt: "Geliştirici tekrar eden rakamlardan oluşan bir listeden yalnızca benzersiz (tekil) sayıları ayıklamak istiyor ancak kullandığı yapı tekrarları engellemiyor. Benzersiz elemanları elde etmek için doğru veri yapısını kullanır mısın?",
      presetCode: "sayilar = [1, 2, 2, 3, 4, 4, 5]\ntekil_sayilar = [set(sayilar)]\nprint(tekil_sayilar)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "kumeler.py",
      lang: "Python 3.11",
      quickKeys: ["tekil_sayilar = set(sayilar)","print(tekil_sayilar)","set(sayilar)"],
      hint: "sayilar = [1, 2, 2, 3, 4, 4, 5]\ntekil_sayilar = set(sayilar)\nprint(tekil_sayilar)",
      solution: "sayilar = [1, 2, 2, 3, 4, 4, 5]\ntekil_sayilar = set(sayilar)\nprint(tekil_sayilar)",
      validator: (code) => {
        const clean = code.trim();
        const hasSet = /tekil_sayilar\s*=\s*set\s*\(\s*sayilar\s*\)/.test(clean);
        const hasPrint = /print\s*\(\s*tekil_sayilar\s*\)/.test(clean);
        if (hasSet && hasPrint) return { ok: true, msg: "Mükemmel! set() fonksiyonu tekrarlanan tüm elemanları eler. ✓" };
        return { ok: false, msg: "Hata: tekil_sayilar = set(sayilar) kullanarak kümeyi elde edin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KÜMEYE ELEMAN EKLEME (.ADD)",
      title: "4. Soru: Kümeye Eleman Ekleme",
      prompt: "Geliştirici bir kümeye yeni bir etiket eklemek istiyor ancak liste metodu kullandığı için hata alıyor. Kümeye eleman ekleyen doğru metodu uygulayabilir misin?",
      presetCode: "etiketler = {\"python\", \"kodlama\", \"yazilim\"}\netiketler.append(\"yapayzeka\")\nprint(etiketler)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "kumeler.py",
      lang: "Python 3.11",
      quickKeys: ["etiketler.add(\"yapayzeka\")","print(etiketler)",".add("],
      hint: "etiketler = {\"python\", \"kodlama\", \"yazilim\"}\netiketler.add(\"yapayzeka\")\nprint(etiketler)",
      solution: "etiketler = {\"python\", \"kodlama\", \"yazilim\"}\netiketler.add(\"yapayzeka\")\nprint(etiketler)",
      validator: (code) => {
        const clean = code.trim();
        const hasAdd = /etiketler\.add\s*\(\s*['"]yapayzeka['"]\s*\)/.test(clean);
        const hasPrint = /print\s*\(\s*etiketler\s*\)/.test(clean);
        if (hasAdd && hasPrint) return { ok: true, msg: "Harika! Kümeler için .add() metodu kullanılır. ✓" };
        return { ok: false, msg: 'Hata: etiketler.add("yapayzeka") ile elemanı ekleyin.' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: SÖZLÜK ANAHTARLARINI LİSTELEME",
      title: "5. Soru: Sözlük Anahtarlarını Alma",
      prompt: "Geliştirici sözlükteki tüm anahtarları (key) bir liste halinde ekranda görmek istiyor ancak anahtarlar yerine değerleri alıyor. Anahtarları ekrana yazdıracak şekilde kodu düzeltebilir misin?",
      presetCode: "puanlar = {\"matematik\": 90, \"fizik\": 85, \"kimya\": 78}\nprint(list(puanlar.values()))\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "sozlukler.py",
      lang: "Python 3.11",
      quickKeys: ["list(puanlar.keys())","print(list(puanlar.keys()))",".keys()"],
      hint: "puanlar = {\"matematik\": 90, \"fizik\": 85, \"kimya\": 78}\nprint(list(puanlar.keys()))",
      solution: "puanlar = {\"matematik\": 90, \"fizik\": 85, \"kimya\": 78}\nprint(list(puanlar.keys()))",
      validator: (code) => {
        const clean = code.trim();
        const hasKeys = /puanlar\.keys\s*\(\s*\)/.test(clean);
        const hasPrint = /print\s*\(.*puanlar\.keys/.test(clean);
        if (hasKeys && hasPrint) return { ok: true, msg: "Tebrikler! .keys() sözlüğün tüm anahtarlarını döner. 6. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: print(list(puanlar.keys())) komutuyla anahtarları yazdırın." };
      }
    }
  ],
  python_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: RANGE DÖNGÜ ARALIĞI",
      title: "1. Soru: Range Sınır Değeri",
      prompt: "Geliştirici 1'den 5'e kadar olan sayıları (5 dahil) ekrana yazdırmak istiyor ancak döngü 4'te duruyor. 5'in de yazdırılmasını sağlayacak şekilde aralığı düzenleyebilir misin?",
      presetCode: "for i in range(1, 5):\n    print(i)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["for i in range(1, 6):","    print(i)","range(1, 6)"],
      hint: "for i in range(1, 6):\n    print(i)",
      solution: "for i in range(1, 6):\n    print(i)",
      validator: (code) => {
        const clean = code.trim();
        if (/range\s*\(\s*1\s*,\s*6\s*\)/.test(clean) && /print\s*\(\s*i\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! range(1, 6) bitiş değeri 6 olduğu için 5'e kadar yazdırır. ✓" };
        }
        return { ok: false, msg: "Hata: for i in range(1, 6): ile 5 dahil saydırmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: WHILE DÖNGÜSÜ SAYAÇ YÖNETİMİ",
      title: "2. Soru: Sonsuz Döngüyü Önleme",
      prompt: "Geliştirici sayaç 5 olana kadar çalışan bir döngü kurmak istiyor ancak döngü sonsuz döngüye girip sistemi kilitliyor. Döngünün güvenle sonlanması için eksik adımı tamamlayabilir misin?",
      presetCode: "sayac = 1\nwhile sayac <= 5:\n    print(sayac)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["sayac += 1","while sayac <= 5:","    print(sayac)"],
      hint: "sayac = 1\nwhile sayac <= 5:\n    print(sayac)\n    sayac += 1",
      solution: "sayac = 1\nwhile sayac <= 5:\n    print(sayac)\n    sayac += 1",
      validator: (code) => {
        const clean = code.trim();
        const hasIncrement = /sayac\s*(\+=|\=)\s*(sayac\s*\+\s*1|1)/.test(clean);
        const hasWhile = /while\s+sayac\s*<=\s*5\s*:/.test(clean);
        if (hasIncrement && hasWhile) return { ok: true, msg: "Tebrikler! sayac += 1 eklenerek sonsuz döngü engellendi. ✓" };
        return { ok: false, msg: "Hata: while bloğunun içine sayac += 1 eklemelisiniz." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DÖNGÜYÜ KIRMA (BREAK)",
      title: "3. Soru: Döngüyü Koşulda Sonlandırma",
      prompt: "Geliştirici listede 0 sayısını gördüğü anda döngüyü tamamen durdurmak istiyor ancak kod döngüyü sonlandırmadan devam ediyor. İstenen koşulda döngüyü anında sonlandıracak komutu ekleyebilir misin?",
      presetCode: "sayilar = [10, 20, 0, 40, 50]\nfor s in sayilar:\n    if s == 0:\n        continue\n    print(s)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["break","if s == 0:\n        break","for s in sayilar:"],
      hint: "sayilar = [10, 20, 0, 40, 50]\nfor s in sayilar:\n    if s == 0:\n        break\n    print(s)",
      solution: "sayilar = [10, 20, 0, 40, 50]\nfor s in sayilar:\n    if s == 0:\n        break\n    print(s)",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s+s\s*==\s*0\s*:\s*[\s\S]*break/.test(clean)) {
          return { ok: true, msg: "Mükemmel! break komutu döngüyü 0'ı gördüğü anda bitirir. ✓" };
        }
        return { ok: false, msg: "Hata: if s == 0 durumunda break komutunu kullanmalısınız." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: ENUMERATE İLE İNDEKS TAKİBİ",
      title: "4. Soru: İndeks ve Eleman Eşleşmesi",
      prompt: "Geliştirici listedeki meyveleri ve onların sıra numaralarını (0'dan başlayarak) eşzamanlı yazdırmak istiyor ancak indeks takibi yapamıyor. Hem indeksi hem elemanı birlikte sunan yapıyı ekleyebilir misin?",
      presetCode: "meyveler = [\"Elma\", \"Armut\", \"Muz\"]\nfor meyve in meyveler:\n    print(meyve)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["for i, meyve in enumerate(meyveler):","    print(i, meyve)","enumerate(meyveler)"],
      hint: "meyveler = [\"Elma\", \"Armut\", \"Muz\"]\nfor i, meyve in enumerate(meyveler):\n    print(i, meyve)",
      solution: "meyveler = [\"Elma\", \"Armut\", \"Muz\"]\nfor i, meyve in enumerate(meyveler):\n    print(i, meyve)",
      validator: (code) => {
        const clean = code.trim();
        if (/enumerate\s*\(\s*meyveler\s*\)/.test(clean) && /print\s*\(.*i.*meyve/.test(clean)) {
          return { ok: true, msg: "Harika! enumerate() hem indeksi hem de elemanı döndürür. ✓" };
        }
        return { ok: false, msg: "Hata: for i, meyve in enumerate(meyveler): yapısını kurun." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: ZIP İLE PARALEL DÖNGÜ",
      title: "5. Soru: İki Listeyi Eşleştirme",
      prompt: "Geliştirici iki farklı listedeki isimleri ve notları sırasıyla eşleştirip ekrana yazdırmak istiyor ancak iç içe döngü yüzünden tüm kombinasyonları basıyor. İki listeyi paralel eşleştirecek yapıyı kurabilir misin?",
      presetCode: "isimler = [\"Ali\", \"Ayşe\"]\nnotlar = [90, 100]\nfor i in isimler:\n    for n in notlar:\n        print(i, n)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["for i, n in zip(isimler, notlar):","    print(i, n)","zip(isimler, notlar)"],
      hint: "isimler = [\"Ali\", \"Ayşe\"]\nnotlar = [90, 100]\nfor i, n in zip(isimler, notlar):\n    print(i, n)",
      solution: "isimler = [\"Ali\", \"Ayşe\"]\nnotlar = [90, 100]\nfor i, n in zip(isimler, notlar):\n    print(i, n)",
      validator: (code) => {
        const clean = code.trim();
        if (/zip\s*\(\s*isimler\s*,\s*notlar\s*\)/.test(clean) && /print\s*\(.*i.*n/.test(clean)) {
          return { ok: true, msg: "Tebrikler! zip() listeleri birebir eleman eşleşmesiyle dolaşır. 7. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: for i, n in zip(isimler, notlar): ile paralel döngü kurun." };
      }
    }
  ],
  python_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: DEĞER DÖNDÜRME (RETURN)",
      title: "1. Soru: Fonksiyondan Değer Döndürme",
      prompt: "Geliştirici bir sayının karesini hesaplayan fonksiyonun sonucunu değişkene kaydedip yazdırmak istiyor ancak ekranda <code class=\"code-highlight\">None</code> çıktısı görüyor. Fonksiyonun sonucu dışarı aktarmasını sağlar mısın?",
      presetCode: "def kare_al(sayi):\n    sonuc = sayi ** 2\n\ndeger = kare_al(4)\nprint(deger)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["return sayi ** 2","return sonuc","def kare_al(sayi):"],
      hint: "def kare_al(sayi):\n    return sayi ** 2\n\ndeger = kare_al(4)\nprint(deger)",
      solution: "def kare_al(sayi):\n    return sayi ** 2\n\ndeger = kare_al(4)\nprint(deger)",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+kare_al/.test(clean) && /return\s+/.test(clean)) {
          return { ok: true, msg: "Harika! return ifadesi fonksiyon sonucunu dışarıya aktarır. ✓" };
        }
        return { ok: false, msg: "Hata: Fonksiyon içinde return sayi ** 2 döndürmelisiniz." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: VARSAYILAN PARAMETRELER",
      title: "2. Soru: Varsayılan Parametre Değeri",
      prompt: "Geliştirici kullanıcı isim belirtmediğinde varsayılan olarak <code class=\"code-highlight\">\"Misafir\"</code> ismiyle karşılama yapmak istiyor ancak isim verilmediğinde program parametre eksikliği hatası veriyor. Varsayılan parametreyi tanımlayabilir misin?",
      presetCode: "def karsila(isim):\n    return f\"Hoş geldin {isim}\"\n\nprint(karsila())\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["def karsila(isim=\"Misafir\"):","isim=\"Misafir\"","return f\"Hoş geldin {isim}\""],
      hint: "def karsila(isim=\"Misafir\"):\n    return f\"Hoş geldin {isim}\"\n\nprint(karsila())",
      solution: "def karsila(isim=\"Misafir\"):\n    return f\"Hoş geldin {isim}\"\n\nprint(karsila())",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+karsila\s*\(\s*isim\s*=\s*['"]Misafir['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! Varsayılan parametre sayesinde fonksiyona argüman verilmediğinde hata oluşmaz. ✓" };
        }
        return { ok: false, msg: 'Hata: def karsila(isim="Misafir"): şeklinde varsayılan değer verin.' };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: ESNEK KONUMSAL PARAMETRELER (*ARGS)",
      title: "3. Soru: Esnek Sayıda Argüman (*args)",
      prompt: "Geliştirici fonksiyona kaç adet sayı gönderilirse gönderilsin hepsini toplayabilen esnek bir yapı kurmak istiyor fakat kod sadece 2 sayı kabul ediyor. İstenen sayıda argüman alabilecek parametre yapısını ekler misin?",
      presetCode: "def topla(a, b):\n    return a + b\n\nprint(topla(5, 10, 15, 20))\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["def topla(*sayilar):","return sum(sayilar)","*args"],
      hint: "def topla(*sayilar):\n    return sum(sayilar)\n\nprint(topla(5, 10, 15, 20))",
      solution: "def topla(*sayilar):\n    return sum(sayilar)\n\nprint(topla(5, 10, 15, 20))",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+topla\s*\(\s*\*\w+\s*\)/.test(clean) && (/sum\s*\(/.test(clean) || /for\s+/.test(clean))) {
          return { ok: true, msg: "Mükemmel! *sayilar (*args) değişken sayıda argümanları demet olarak toplar. ✓" };
        }
        return { ok: false, msg: "Hata: def topla(*sayilar): tanımlayıp return sum(sayilar) döndürün." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: GLOBAL DEĞİŞKEN KAPSAMI",
      title: "4. Soru: Global Kapsama Müdahale",
      prompt: "Geliştirici fonksiyon içinden global tanımlanmış puan değişkenini artırmak istiyor ancak lokal değişken hatası alıyor. Global değişkene fonksiyon içerisinden müdahale edebilmesini sağlayabilir misin?",
      presetCode: "skor = 100\ndef skor_arttir():\n    skor += 10\n\nskor_arttir()\nprint(skor)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["global skor","skor += 10","def skor_arttir():"],
      hint: "skor = 100\ndef skor_arttir():\n    global skor\n    skor += 10\n\nskor_arttir()\nprint(skor)",
      solution: "skor = 100\ndef skor_arttir():\n    global skor\n    skor += 10\n\nskor_arttir()\nprint(skor)",
      validator: (code) => {
        const clean = code.trim();
        if (/global\s+skor/.test(clean) && /skor\s*\+=\s*10/.test(clean)) {
          return { ok: true, msg: "Harika! global anahtar kelimesi fonksiyonun dışındaki değişkene erişim sağlar. ✓" };
        }
        return { ok: false, msg: "Hata: Fonksiyon içinde 'global skor' tanımlamalısınız." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: İSİMLENDİRİLMİŞ PARAMETRELER (**KWARGS)",
      title: "5. Soru: Anahtar-Değer Argümanları (**kwargs)",
      prompt: "Geliştirici anahtar-değer çifti şeklinde gönderilen kullanıcı bilgilerini sözlük olarak toplayıp yazdırmak istiyor. İsimlendirilmiş argümanları kabul eden fonksiyon tanımını yapar mısın?",
      presetCode: "def profil_yaz(*bilgiler):\n    return bilgiler\n\nprint(profil_yaz(ad=\"Can\", rol=\"Admin\"))\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["def profil_yaz(**bilgiler):","return bilgiler","**kwargs"],
      hint: "def profil_yaz(**bilgiler):\n    return bilgiler\n\nprint(profil_yaz(ad=\"Can\", rol=\"Admin\"))",
      solution: "def profil_yaz(**bilgiler):\n    return bilgiler\n\nprint(profil_yaz(ad=\"Can\", rol=\"Admin\"))",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+profil_yaz\s*\(\s*\*\*\w+\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! **kwargs isimlendirilmiş parametreleri sözlük olarak yakalar. 8. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: def profil_yaz(**bilgiler): şeklinde çift yıldız (**) kullanın." };
      }
    }
  ],
  python_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: LAMBDA ANONİM FONKSİYONLAR",
      title: "1. Soru: Lambda Sözdizimi",
      prompt: "Geliştirici verilen bir sayının iki katını alan tek satırlık anonim (lambda) fonksiyon oluşturmak istiyor ancak sözdizimindeki gereksiz anahtar kelimeler hata veriyor. Lambda tanımını doğru şekilde yazar mısın?",
      presetCode: "iki_kat = lambda x: return x * 2\nprint(iki_kat(5))\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "lambda.py",
      lang: "Python 3.11",
      quickKeys: ["iki_kat = lambda x: x * 2","lambda x: x * 2","print(iki_kat(5))"],
      hint: "iki_kat = lambda x: x * 2\nprint(iki_kat(5))",
      solution: "iki_kat = lambda x: x * 2\nprint(iki_kat(5))",
      validator: (code) => {
        const clean = code.trim();
        if (/lambda\s+x\s*:\s*x\s*\*\s*2/.test(clean) && !/return/.test(clean)) {
          return { ok: true, msg: "Harika! Lambda ifadelerinde 'return' yazılmaz, ifade otomatik döndürülür. ✓" };
        }
        return { ok: false, msg: "Hata: iki_kat = lambda x: x * 2 tanımını kurun." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: LİSTE ÜRETECİ (LIST COMPREHENSION)",
      title: "2. Soru: List Comprehension Sözdizimi",
      prompt: "Geliştirici 1'den 5'e kadar olan sayıların karelerinden oluşan bir listeyi tek satırda (List Comprehension) üretmek istiyor ancak sözdizim hatası alıyor. Listeyi doğru formatta oluşturabilir misin?",
      presetCode: "kareler = [for x in range(1, 6): x**2]\nprint(kareler)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "comprehension.py",
      lang: "Python 3.11",
      quickKeys: ["kareler = [x**2 for x in range(1, 6)]","x**2 for x in range(1, 6)","print(kareler)"],
      hint: "kareler = [x**2 for x in range(1, 6)]\nprint(kareler)",
      solution: "kareler = [x**2 for x in range(1, 6)]\nprint(kareler)",
      validator: (code) => {
        const clean = code.trim();
        if (/\[\s*x\s*\*\*\s*2\s+for\s+x\s+in\s+range\s*\(\s*1\s*,\s*6\s*\)\s*\]/.test(clean)) {
          return { ok: true, msg: "Tebrikler! List comprehension'da üretilecek ifade döngüden önce gelir. ✓" };
        }
        return { ok: false, msg: "Hata: kareler = [x**2 for x in range(1, 6)] yapısını kurun." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: KOŞULLU LİSTE ÜRETECİ",
      title: "3. Soru: Koşullu List Comprehension",
      prompt: "Geliştirici bir sayı listesindeki çift sayıları List Comprehension ile filtreleyip almak istiyor ancak koşul yerleşimi hatalı olduğu için kod çalışmıyor. Doğru filtreleme sözdizimini yazar mısın?",
      presetCode: "sayilar = [1, 2, 3, 4, 5, 6]\nciftler = [if x % 2 == 0: x for x in sayilar]\nprint(ciftler)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "comprehension.py",
      lang: "Python 3.11",
      quickKeys: ["ciftler = [x for x in sayilar if x % 2 == 0]","if x % 2 == 0","print(ciftler)"],
      hint: "sayilar = [1, 2, 3, 4, 5, 6]\nciftler = [x for x in sayilar if x % 2 == 0]\nprint(ciftler)",
      solution: "sayilar = [1, 2, 3, 4, 5, 6]\nciftler = [x for x in sayilar if x % 2 == 0]\nprint(ciftler)",
      validator: (code) => {
        const clean = code.trim();
        if (/\[\s*x\s+for\s+x\s+in\s+sayilar\s+if\s+x\s*%\s*2\s*==\s*0\s*\]/.test(clean)) {
          return { ok: true, msg: "Mükemmel! Filtreleme if koşulu döngünün sonuna yerleştirilir. ✓" };
        }
        return { ok: false, msg: "Hata: ciftler = [x for x in sayilar if x % 2 == 0] şeklinde yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: DÖNÜŞTÜRÜCÜ (MAP FONKSİYONU)",
      title: "4. Soru: Map Sonucunu Listeye Çevirme",
      prompt: "Geliştirici listedeki tüm metinlerin harflerini büyütmek için <code class=\"code-highlight\">map()</code> fonksiyonunu kullanıyor ancak çıktı olarak bir liste yerine nesne referansı görüyor. Sonucu okunabilir bir listeye dönüştürebilir misin?",
      presetCode: "isimler = [\"ali\", \"veli\", \"can\"]\nbuyukler = map(str.upper, isimler)\nprint(buyukler)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "map_filter.py",
      lang: "Python 3.11",
      quickKeys: ["buyukler = list(map(str.upper, isimler))","list(buyukler)","print(buyukler)"],
      hint: "isimler = [\"ali\", \"veli\", \"can\"]\nbuyukler = list(map(str.upper, isimler))\nprint(buyukler)",
      solution: "isimler = [\"ali\", \"veli\", \"can\"]\nbuyukler = list(map(str.upper, isimler))\nprint(buyukler)",
      validator: (code) => {
        const clean = code.trim();
        if (/list\s*\(\s*map\s*\(\s*str\.upper\s*,\s*isimler\s*\)\s*\)/.test(clean) || /print\s*\(\s*list\s*\(\s*buyukler\s*\)\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! map() sonucunu görmek için list() dönüşümü yapılır. ✓" };
        }
        return { ok: false, msg: "Hata: buyukler = list(map(str.upper, isimler)) şeklinde listeye çevirin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: FİLTRELEYİCİ (FILTER FONKSİYONU)",
      title: "5. Soru: Filter ile Pozitif Sayıları Seçme",
      prompt: "Geliştirici listedeki pozitif sayıları <code class=\"code-highlight\">filter()</code> ile ayıklamak istiyor ancak çıktıyı liste olarak alamıyor. <code class=\"code-highlight\">filter()</code> sonucunu doğru şekilde listeye çevirip yazdırabilir misin?",
      presetCode: "sayilar = [-5, 10, -2, 8, -1]\npozitifler = filter(lambda x: x > 0, sayilar)\nprint(pozitifler)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "map_filter.py",
      lang: "Python 3.11",
      quickKeys: ["pozitifler = list(filter(lambda x: x > 0, sayilar))","list(pozitifler)","print(pozitifler)"],
      hint: "sayilar = [-5, 10, -2, 8, -1]\npozitifler = list(filter(lambda x: x > 0, sayilar))\nprint(pozitifler)",
      solution: "sayilar = [-5, 10, -2, 8, -1]\npozitifler = list(filter(lambda x: x > 0, sayilar))\nprint(pozitifler)",
      validator: (code) => {
        const clean = code.trim();
        if (/list\s*\(\s*filter\s*\(/.test(clean) || /print\s*\(\s*list\s*\(\s*pozitifler\s*\)\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! filter() sonucu list() ile listeye dönüştürüldü. 9. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: pozitifler = list(filter(lambda x: x > 0, sayilar)) şeklinde yazın." };
      }
    }
  ],
  python_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: STANDART KÜTÜPHANE İÇE AKTARMA",
      title: "1. Soru: Modül İçe Aktarma (Import)",
      prompt: "Geliştirici Python'ın yerleşik matematik modülünü kullanarak 16 sayısının karekökünü hesaplamak istiyor ancak modülü çağırmadığı için hata alıyor. Gerekli modülü içeri aktarıp karekökü yazdırabilir misin?",
      presetCode: "sonuc = math.sqrt(16)\nprint(sonuc)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["import math","sonuc = math.sqrt(16)","print(sonuc)"],
      hint: "import math\nsonuc = math.sqrt(16)\nprint(sonuc)",
      solution: "import math\nsonuc = math.sqrt(16)\nprint(sonuc)",
      validator: (code) => {
        const clean = code.trim();
        if (/import\s+math/.test(clean) && /math\.sqrt\s*\(\s*16\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! import math ile matematik fonksiyonları kullanıma açıldı. ✓" };
        }
        return { ok: false, msg: "Hata: Dosya başına 'import math' eklemelisiniz." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: FROM ... IMPORT SÖZDİZİMİ",
      title: "2. Soru: Belirli Fonksiyonu İçe Aktarma",
      prompt: "Geliştirici <code class=\"code-highlight\">random</code> modülünden yalnızca <code class=\"code-highlight\">randint</code> fonksiyonunu doğrudan kullanmak istiyor ancak çağırma biçimindeki hata yüzünden fonksiyon bulunamıyor. Fonksiyonu doğrudan kullanılabilir şekilde içe aktarır mısın?",
      presetCode: "import randint from random\nsayi = randint(1, 10)\nprint(sayi)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["from random import randint","sayi = randint(1, 10)","print(sayi)"],
      hint: "from random import randint\nsayi = randint(1, 10)\nprint(sayi)",
      solution: "from random import randint\nsayi = randint(1, 10)\nprint(sayi)",
      validator: (code) => {
        const clean = code.trim();
        if (/from\s+random\s+import\s+randint/.test(clean)) {
          return { ok: true, msg: "Tebrikler! from modul import fonksiyon sözdizimi başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'from random import randint' şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: MODÜLE TAKMA AD VERME (AS)",
      title: "3. Soru: Modül Takma Adı (Alias)",
      prompt: "Geliştirici uzun bir modül ismine kısa bir takma ad (alias) vererek kullanmak istiyor ancak anahtar kelimeyi yanlış kullandığı için sözdizim hatası alıyor. Doğru takma adlandırmayı uygulayabilir misin?",
      presetCode: "import datetime with dt\nsimdi = dt.datetime.now()\nprint(simdi)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["import datetime as dt","simdi = dt.datetime.now()","as dt"],
      hint: "import datetime as dt\nsimdi = dt.datetime.now()\nprint(simdi)",
      solution: "import datetime as dt\nsimdi = dt.datetime.now()\nprint(simdi)",
      validator: (code) => {
        const clean = code.trim();
        if (/import\s+datetime\s+as\s+dt/.test(clean)) {
          return { ok: true, msg: "Mükemmel! Takma ad tanımlamak için 'as' anahtar kelimesi kullanılır. ✓" };
        }
        return { ok: false, msg: "Hata: 'import datetime as dt' şeklinde düzeltmelisiniz." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: DOĞRUDAN SABİT KULLANIMI",
      title: "4. Soru: Pi Sayısı ile Alan Hesabı",
      prompt: "Geliştirici <code class=\"code-highlight\">math</code> modülündeki pi sayısını kullanarak yarıçapı 5 olan dairenin alanını (<code class=\"code-highlight\">pi * r**2</code>) hesaplamak istiyor ancak modül adı yazımında aksaklık var. Pi sabitini doğru şekilde içe aktarıp alanı hesaplar mısın?",
      presetCode: "from math import pi\nr = 5\nalan = math.pi * (r ** 2)\nprint(alan)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["alan = pi * (r ** 2)","from math import pi","print(alan)"],
      hint: "from math import pi\nr = 5\nalan = pi * (r ** 2)\nprint(alan)",
      solution: "from math import pi\nr = 5\nalan = pi * (r ** 2)\nprint(alan)",
      validator: (code) => {
        const clean = code.trim();
        if (/from\s+math\s+import\s+pi/.test(clean) && !/math\.pi/.test(clean) && /pi\s*\*\s*(\(?r\s*\*\*\s*2\)?|25)/.test(clean)) {
          return { ok: true, msg: "Harika! from ile içe aktarılan pi doğrudan adıyla kullanılır. ✓" };
        }
        return { ok: false, msg: "Hata: alan = pi * (r ** 2) şeklinde math. önekini kaldırın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: RASTGELE SEÇİM (RANDOM.CHOICE)",
      title: "5. Soru: Listeden Rastgele Seçim",
      prompt: "Geliştirici bir listeden rastgele bir eleman seçmek istiyor ancak yanlış fonksiyon çağırdığı için hata alıyor. Listeden rastgele eleman seçen doğru <code class=\"code-highlight\">random</code> fonksiyonunu kullanabilir misin?",
      presetCode: "import random\nrenkler = [\"Kırmızı\", \"Mavi\", \"Yeşil\"]\nsecim = random.rand(renkler)\nprint(secim)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["secim = random.choice(renkler)","random.choice(","print(secim)"],
      hint: "import random\nrenkler = [\"Kırmızı\", \"Mavi\", \"Yeşil\"]\nsecim = random.choice(renkler)\nprint(secim)",
      solution: "import random\nrenkler = [\"Kırmızı\", \"Mavi\", \"Yeşil\"]\nsecim = random.choice(renkler)\nprint(secim)",
      validator: (code) => {
        const clean = code.trim();
        if (/random\.choice\s*\(\s*renkler\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! random.choice() listeden rastgele eleman seçer. 10. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: secim = random.choice(renkler) fonksiyonunu kullanmalısınız." };
      }
    }
  ],
  python_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: SIFIRA BÖLME HATASI (ZERODIVISIONERROR)",
      title: "1. Soru: Sıfıra Bölme Hatasını Yakalama",
      prompt: "Geliştirici bir sayıyı 0'a bölmeye çalışırken programın çökmesini engellemek ve ekrana <code class=\"code-highlight\">\"Sıfıra bölünemez\"</code> uyarısı basmak istiyor. Olası hatayı yakalayan koruma bloğunu kurabilir misin?",
      presetCode: "sayi = 10 / 0\nprint(sayi)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["try:","except ZeroDivisionError:","    print(\"Sıfıra bölünemez\")"],
      hint: "try:\n    sayi = 10 / 0\n    print(sayi)\nexcept ZeroDivisionError:\n    print(\"Sıfıra bölünemez\")",
      solution: "try:\n    sayi = 10 / 0\n    print(sayi)\nexcept ZeroDivisionError:\n    print(\"Sıfıra bölünemez\")",
      validator: (code) => {
        const clean = code.trim();
        if (/try\s*:[\s\S]*except\s+(ZeroDivisionError|Exception)\s*:[\s\S]*print\s*\(\s*['"]Sıfıra bölünemez['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! ZeroDivisionError try-except ile güvenle yakalandı. ✓" };
        }
        return { ok: false, msg: 'Hata: try-except ZeroDivisionError bloğu ile "Sıfıra bölünemez" yazdırın.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: DEĞER DÖNÜŞÜM HATASI (VALUEERROR)",
      title: "2. Soru: Tip Dönüşüm Hatası",
      prompt: "Geliştirici metin halindeki geçersiz bir girdiyi sayıya dönüştürürken oluşan hatayı yakalayıp <code class=\"code-highlight\">\"Geçersiz Sayı\"</code> yazdırmak istiyor. İlgili veri dönüşüm hatasını yakalayan bloğu yazar mısın?",
      presetCode: "try:\n    deger = int(\"abc\")\nexcept KeyError:\n    print(\"Geçersiz Sayı\")\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["except ValueError:","print(\"Geçersiz Sayı\")","try:\n    deger = int(\"abc\")"],
      hint: "try:\n    deger = int(\"abc\")\nexcept ValueError:\n    print(\"Geçersiz Sayı\")",
      solution: "try:\n    deger = int(\"abc\")\nexcept ValueError:\n    print(\"Geçersiz Sayı\")",
      validator: (code) => {
        const clean = code.trim();
        if (/except\s+ValueError\s*:/.test(clean) && /print\s*\(\s*['"]Geçersiz Sayı['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! int('abc') dönüşümü ValueError üretir ve doğru yakalandı. ✓" };
        }
        return { ok: false, msg: "Hata: except KeyError yerine except ValueError kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: GARANTİ ÇALIŞAN BLOK (FINALLY)",
      title: "3. Soru: Her Durumda Çalışan Finally",
      prompt: "Geliştirici hata olsun ya da olmasın her durumda <code class=\"code-highlight\">\"İşlem Bitti\"</code> mesajının mutlaka çalışmasını istiyor. Her senaryoda çalışan garanti bloğunu ekleyebilir misin?",
      presetCode: "try:\n    x = 5 + 5\nexcept Exception:\n    print(\"Hata\")\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["finally:","    print(\"İşlem Bitti\")","try:    x = 5 + 5"],
      hint: "try:\n    x = 5 + 5\nexcept Exception:\n    print(\"Hata\")\nfinally:\n    print(\"İşlem Bitti\")",
      solution: "try:\n    x = 5 + 5\nexcept Exception:\n    print(\"Hata\")\nfinally:\n    print(\"İşlem Bitti\")",
      validator: (code) => {
        const clean = code.trim();
        if (/finally\s*:[\s\S]*print\s*\(\s*['"]İşlem Bitti['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Mükemmel! finally bloğu her ihtimalde mutlaka çalıştırılır. ✓" };
        }
        return { ok: false, msg: 'Hata: finally: bloğunun altına print("İşlem Bitti") ekleyin.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: ÖZEL HATA FIRLATMA (RAISE)",
      title: "4. Soru: Manuel Hata Fırlatma",
      prompt: "Geliştirici yaş değeri 0'dan küçük girildiğinde manuel olarak bir hata tetiklemek istiyor ancak hatalı komut kullandığı için hata fırlatılamıyor. Doğru hata fırlatma komutunu uygular mısın?",
      presetCode: "yas = -5\nif yas < 0:\n    throw ValueError(\"Yaş negatif olamaz\")\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["raise ValueError(\"Yaş negatif olamaz\")","raise","if yas < 0:"],
      hint: "yas = -5\nif yas < 0:\n    raise ValueError(\"Yaş negatif olamaz\")",
      solution: "yas = -5\nif yas < 0:\n    raise ValueError(\"Yaş negatif olamaz\")",
      validator: (code) => {
        const clean = code.trim();
        if (/raise\s+ValueError\s*\(\s*['"]Yaş negatif olamaz['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! Python'da hata fırlatmak için 'raise' anahtar kelimesi kullanılır. ✓" };
        }
        return { ok: false, msg: 'Hata: throw yerine raise ValueError("Yaş negatif olamaz") yazmalısınız.' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: HATA DETAYINI ALMA (EXCEPT ... AS E)",
      title: "5. Soru: Hata Mesajına Erişme",
      prompt: "Geliştirici yakalanan hatanın sistem tarafından üretilen detaylı mesajını ekrana yazdırmak istiyor ancak hata değişkenini yakalayamıyor. Hata nesnesini değişkene atayarak yazdırabilir misin?",
      presetCode: "try:\n    sonuc = 10 / 0\nexcept ZeroDivisionError:\n    print(e)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["except ZeroDivisionError as e:","print(e)","as e"],
      hint: "try:\n    sonuc = 10 / 0\nexcept ZeroDivisionError as e:\n    print(e)",
      solution: "try:\n    sonuc = 10 / 0\nexcept ZeroDivisionError as e:\n    print(e)",
      validator: (code) => {
        const clean = code.trim();
        if (/except\s+ZeroDivisionError\s+as\s+e\s*:/.test(clean) && /print\s*\(\s*e\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! 'as e' ile hata nesnesi değişkene bağlanır. 11. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: except ZeroDivisionError as e: tanımlaması yapın." };
      }
    }
  ],
  python_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: DOSYAYA YAZMA MODU (\"W\")",
      title: "1. Soru: Dosyaya Yazma Modu",
      prompt: "Geliştirici <code class=\"code-highlight\">notlar.txt</code> dosyasına yeni bir not yazmak istiyor ancak okuma modunda açtığı için yazma hatası alıyor. Dosyayı yazma modunda açıp <code class=\"code-highlight\">\"Python 100\"</code> metnini yazdırabilir misin?",
      presetCode: "with open(\"notlar.txt\", \"r\") as dosya:\n    dosya.write(\"Python 100\")\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["with open(\"notlar.txt\", \"w\") as dosya:","    dosya.write(\"Python 100\")","\"w\""],
      hint: "with open(\"notlar.txt\", \"w\") as dosya:\n    dosya.write(\"Python 100\")",
      solution: "with open(\"notlar.txt\", \"w\") as dosya:\n    dosya.write(\"Python 100\")",
      validator: (code) => {
        const clean = code.trim();
        if (/with\s+open\s*\(\s*['"]notlar\.txt['"]\s*,\s*['"]w['"]\s*\)\s*as\s+dosya\s*:[\s\S]*dosya\.write\s*\(\s*['"]Python 100['"]\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! Dosyaya yazmak için 'w' (write) modu kullanılır. ✓" };
        }
        return { ok: false, msg: 'Hata: with open("notlar.txt", "w") as dosya: modunu kullanın.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: DOSYAYA EKLEME MODU (\"A\")",
      title: "2. Soru: Dosya Sonuna Veri Ekleme",
      prompt: "Geliştirici dosyadaki mevcut içeriği silmeden dosyanın sonuna yeni bir satır eklemek istiyor ancak \"w\" modu kullandığı için eski veriler kayboluyor. Dosyanın sonuna ekleme yapan doğru modu yazar mısın?",
      presetCode: "with open(\"log.txt\", \"w\") as dosya:\n    dosya.write(\"Yeni Satır\\n\")\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["with open(\"log.txt\", \"a\") as dosya:","    dosya.write(\"Yeni Satır\\n\")","\"a\""],
      hint: "with open(\"log.txt\", \"a\") as dosya:\n    dosya.write(\"Yeni Satır\\n\")",
      solution: "with open(\"log.txt\", \"a\") as dosya:\n    dosya.write(\"Yeni Satır\\n\")",
      validator: (code) => {
        const clean = code.trim();
        if (/with\s+open\s*\(\s*['"]log\.txt['"]\s*,\s*['"]a['"]\s*\)\s*as\s+dosya\s*:/.test(clean)) {
          return { ok: true, msg: "Tebrikler! 'a' (append) modu eski içeriği koruyarak sonuna ekler. ✓" };
        }
        return { ok: false, msg: 'Hata: with open("log.txt", "a") as dosya: şeklinde "a" modunu kullanın.' };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: DOSYA METNİNİ OKUMA (.READ)",
      title: "3. Soru: Dosya İçeriğini Okuma",
      prompt: "Geliştirici bir dosyadaki tüm metni okuyup ekrana basmak istiyor ancak dosya içeriğini okuma metodunu çağırmayı unutuyor. Dosya içeriğini okuyup ekrana yazdırabilir misin?",
      presetCode: "with open(\"metin.txt\", \"r\") as dosya:\n    icerik = dosya\n    print(icerik)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["icerik = dosya.read()","dosya.read()","print(icerik)"],
      hint: "with open(\"metin.txt\", \"r\") as dosya:\n    icerik = dosya.read()\n    print(icerik)",
      solution: "with open(\"metin.txt\", \"r\") as dosya:\n    icerik = dosya.read()\n    print(icerik)",
      validator: (code) => {
        const clean = code.trim();
        if (/dosya\.read\s*\(\s*\)/.test(clean) && /print\s*\(/.test(clean)) {
          return { ok: true, msg: "Mükemmel! dosya.read() dosyanın tüm metnini string olarak çeker. ✓" };
        }
        return { ok: false, msg: "Hata: icerik = dosya.read() ile metni okumalısınız." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: SATIRLARI LİSTE HALİNDE OKUMA",
      title: "4. Soru: Satırları Liste Olarak Alma",
      prompt: "Geliştirici dosyadaki satırları tek tek bir liste halinde almak istiyor ancak tüm dosyayı tek bir metin olarak alıyor. Satırları liste olarak döndüren metodu kullanabilir misin?",
      presetCode: "with open(\"liste.txt\", \"r\") as dosya:\n    satirlar = dosya.readline()\n    print(satirlar)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["satirlar = dosya.readlines()","dosya.readlines()","print(satirlar)"],
      hint: "with open(\"liste.txt\", \"r\") as dosya:\n    satirlar = dosya.readlines()\n    print(satirlar)",
      solution: "with open(\"liste.txt\", \"r\") as dosya:\n    satirlar = dosya.readlines()\n    print(satirlar)",
      validator: (code) => {
        const clean = code.trim();
        if (/dosya\.readlines\s*\(\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! .readlines() dosyadaki tüm satırları bir liste içinde döner. ✓" };
        }
        return { ok: false, msg: "Hata: satirlar = dosya.readlines() metodunu kullanın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: WITH OPEN İLE GÜVENLİ YÖNETİM",
      title: "5. Soru: With Open Kalıbı",
      prompt: "Geliştirici manuel açtığı dosyayı işlem bitince açık unutmamak için modern ve güvenli otomatik kapatma bloğunu kullanmak istiyor. <code class=\"code-highlight\">with open(...)</code> kalıbını kurabilir misin?",
      presetCode: "dosya = open(\"veri.txt\", \"r\")\nicerik = dosya.read()\n# Kodunu aşağıya with open kullanarak doğru şekilde yaz:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["with open(\"veri.txt\", \"r\") as dosya:","    icerik = dosya.read()","    print(icerik)"],
      hint: "with open(\"veri.txt\", \"r\") as dosya:\n    icerik = dosya.read()\n    print(icerik)",
      solution: "with open(\"veri.txt\", \"r\") as dosya:\n    icerik = dosya.read()\n    print(icerik)",
      validator: (code) => {
        const clean = code.trim();
        if (/with\s+open\s*\(\s*['"]veri\.txt['"]/.test(clean) && /as\s+dosya\s*:/.test(clean)) {
          return { ok: true, msg: "Tebrikler! with open context manager dosyayı otomatik kapatır. 12. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: 'Hata: with open("veri.txt", "r") as dosya: yapısını kurun.' };
      }
    }
  ],
  python_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: KURUCU METOT (__INIT__)",
      title: "1. Soru: Yapıcı Metot Tanımlama",
      prompt: "Geliştirici bir Araba sınıfı oluşturup nesne üretirken marka bilgisini başlatmak istiyor ancak kurucu metodun ismini hatalı tanımladığı için çalışmıyor. Doğru yapıcı (constructor) metodunu tanımlar mısın?",
      presetCode: "class Araba:\n    def init(self, marka):\n        self.marka = marka\n\na1 = Araba(\"Toyota\")\nprint(a1.marka)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["def __init__(self, marka):","__init__","self.marka = marka"],
      hint: "class Araba:\n    def __init__(self, marka):\n        self.marka = marka\n\na1 = Araba(\"Toyota\")\nprint(a1.marka)",
      solution: "class Araba:\n    def __init__(self, marka):\n        self.marka = marka\n\na1 = Araba(\"Toyota\")\nprint(a1.marka)",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+__init__\s*\(\s*self\s*,\s*marka\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! Kurucu metot __init__ çift alt tire ile tanımlanır. ✓" };
        }
        return { ok: false, msg: "Hata: def __init__(self, marka): şeklinde yapıcı metodu düzeltin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: NESNE REFERANSI (SELF)",
      title: "2. Soru: Metotta Self Parametresi",
      prompt: "Geliştirici sınıftaki bir metot içerisinde nesnenin kendi özelliğine (<code class=\"code-highlight\">self.ad</code>) erişmek istiyor ancak parametreye referansı eklemediği için hata alıyor. Nesne referansını metoda dahil edebilir misin?",
      presetCode: "class Oyuncu:\n    def __init__(self, ad):\n        self.ad = ad\n    def selamla():\n        return f\"Merhaba {self.ad}\"\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["def selamla(self):","self.ad","return f\"Merhaba {self.ad}\""],
      hint: "class Oyuncu:\n    def __init__(self, ad):\n        self.ad = ad\n    def selamla(self):\n        return f\"Merhaba {self.ad}\"",
      solution: "class Oyuncu:\n    def __init__(self, ad):\n        self.ad = ad\n    def selamla(self):\n        return f\"Merhaba {self.ad}\"",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+selamla\s*\(\s*self\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! Sınıf metotları ilk parametre olarak 'self' alır. ✓" };
        }
        return { ok: false, msg: "Hata: def selamla(self): şeklinde self parametresini ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: KALITIM & MİRAS (INHERITANCE)",
      title: "3. Soru: Sınıf Kalıtımı",
      prompt: "Geliştirici <code class=\"code-highlight\">Kopek</code> sınıfının <code class=\"code-highlight\">Hayvan</code> sınıfındaki özellikleri miras (inheritance) almasını istiyor ancak kalıtım parantezini unuttuğu için metotlara erişemiyor. Kalıtım bağlantısını kurabilir misin?",
      presetCode: "class Hayvan:\n    def ses_cikar(self):\n        return \"Ses\"\n\nclass Kopek:\n    pass\n\nk = Kopek()\nprint(k.ses_cikar())\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["class Kopek(Hayvan):","class Kopek(Hayvan):\n    pass","k = Kopek()"],
      hint: "class Hayvan:\n    def ses_cikar(self):\n        return \"Ses\"\n\nclass Kopek(Hayvan):\n    pass\n\nk = Kopek()\nprint(k.ses_cikar())",
      solution: "class Hayvan:\n    def ses_cikar(self):\n        return \"Ses\"\n\nclass Kopek(Hayvan):\n    pass\n\nk = Kopek()\nprint(k.ses_cikar())",
      validator: (code) => {
        const clean = code.trim();
        if (/class\s+Kopek\s*\(\s*Hayvan\s*\)/.test(clean)) {
          return { ok: true, msg: "Mükemmel! class Kopek(Hayvan): ile miras alındı. ✓" };
        }
        return { ok: false, msg: "Hata: class Kopek(Hayvan): şeklinde parantez içine üst sınıfı yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: ÜST SINIF METODU (SUPER())",
      title: "4. Soru: Super() ile Üst Sınıf Kurucusu",
      prompt: "Geliştirici alt sınıfta üst sınıfın kurucu metodunu çalıştırmak istiyor ancak hatalı anahtar kelime kullandığı için özellikler aktarılmıyor. <code class=\"code-highlight\">super()</code> fonksiyonunu doğru uygulayabilir misin?",
      presetCode: "class Calisan:\n    def __init__(self, isim):\n        self.isim = isim\n\nclass Mudur(Calisan):\n    def __init__(self, isim, departman):\n        parent.__init__(isim)\n        self.departman = departman\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["super().__init__(isim)","super()","self.departman = departman"],
      hint: "class Calisan:\n    def __init__(self, isim):\n        self.isim = isim\n\nclass Mudur(Calisan):\n    def __init__(self, isim, departman):\n        super().__init__(isim)\n        self.departman = departman",
      solution: "class Calisan:\n    def __init__(self, isim):\n        self.isim = isim\n\nclass Mudur(Calisan):\n    def __init__(self, isim, departman):\n        super().__init__(isim)\n        self.departman = departman",
      validator: (code) => {
        const clean = code.trim();
        if (/super\s*\(\s*\)\.__init__\s*\(\s*isim\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! super().__init__(isim) üst sınıfın kurucusunu çağırır. ✓" };
        }
        return { ok: false, msg: "Hata: parent yerine super().__init__(isim) kullanın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: METİN TEMSİLİ (__STR__)",
      title: "5. Soru: Nesne Metin Temsili (__str__)",
      prompt: "Geliştirici nesneyi doğrudan <code class=\"code-highlight\">print(kitap)</code> ile yazdırdığında anlaşılır bir metin görmek istiyor ancak ekranda karmaşık bellek adresi çıkıyor. Nesnenin metin temsilini belirleyen özel metodu ekler misin?",
      presetCode: "class Kitap:\n    def __init__(self, baslik):\n        self.baslik = baslik\n    def to_string(self):\n        return self.baslik\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["def __str__(self):","__str__","return self.baslik"],
      hint: "class Kitap:\n    def __init__(self, baslik):\n        self.baslik = baslik\n    def __str__(self):\n        return self.baslik",
      solution: "class Kitap:\n    def __init__(self, baslik):\n        self.baslik = baslik\n    def __str__(self):\n        return self.baslik",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+__str__\s*\(\s*self\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! __str__ metodu nesne print edildiğinde dönecek metni ayarlar. 13. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: to_string yerine def __str__(self): tanımlayın." };
      }
    }
  ],
  python_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: JSON METNİ OLUŞTURMA (DUMPS)",
      title: "1. Soru: Sözlüğü JSON Formatına Çevirme",
      prompt: "Geliştirici bir Python sözlüğünü JSON metin formatına dönüştürmek istiyor ancak <code class=\"code-highlight\">json</code> modülünün metodunu yanlış çağırdığı için hata alıyor. Sözlüğü JSON stringine çeviren doğru metodu yazar mısın?",
      presetCode: "import json\nveri = {\"proje\": \"Sehir\", \"seviye\": 14}\njson_metin = json.to_json(veri)\nprint(json_metin)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "proje.py",
      lang: "Python 3.11",
      quickKeys: ["json_metin = json.dumps(veri)","json.dumps(veri)","import json"],
      hint: "import json\nveri = {\"proje\": \"Sehir\", \"seviye\": 14}\njson_metin = json.dumps(veri)\nprint(json_metin)",
      solution: "import json\nveri = {\"proje\": \"Sehir\", \"seviye\": 14}\njson_metin = json.dumps(veri)\nprint(json_metin)",
      validator: (code) => {
        const clean = code.trim();
        if (/json\.dumps\s*\(\s*veri\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! json.dumps() Python nesnesini JSON formatında stringe çevirir. ✓" };
        }
        return { ok: false, msg: "Hata: json_metin = json.dumps(veri) metodunu kullanmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: JSON METNİNİ ÇÖZÜMLEME (LOADS)",
      title: "2. Soru: JSON Metnini Sözlüğe Çevirme",
      prompt: "Geliştirici JSON formatındaki bir metni tekrar Python sözlüğüne çevirmek istiyor ancak dosya okuma metoduyla karıştırdığı için hata alıyor. Metinden JSON yükleyen doğru metodu kullanır mısın?",
      presetCode: "import json\nmetin = '{\"durum\": \"aktif\", \"skor\": 100}'\nsozluk = json.load(metin)\nprint(sozluk[\"durum\"])\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "proje.py",
      lang: "Python 3.11",
      quickKeys: ["sozluk = json.loads(metin)","json.loads(metin)","print(sozluk[\"durum\"])"],
      hint: "import json\nmetin = '{\"durum\": \"aktif\", \"skor\": 100}'\nsozluk = json.loads(metin)\nprint(sozluk[\"durum\"])",
      solution: "import json\nmetin = '{\"durum\": \"aktif\", \"skor\": 100}'\nsozluk = json.loads(metin)\nprint(sozluk[\"durum\"])",
      validator: (code) => {
        const clean = code.trim();
        if (/json\.loads\s*\(\s*metin\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! json.loads() JSON stringini sözlüğe dönüştürür. ✓" };
        }
        return { ok: false, msg: "Hata: sozluk = json.loads(metin) metodunu kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: TKINTER PENCERE DÖNGÜSÜ",
      title: "3. Soru: GUI Ana Olay Döngüsü",
      prompt: "Geliştirici Tkinter kütüphanesiyle temel bir grafik arayüz penceresi oluşturup ekranda açık tutmak istiyor ancak ana olay döngüsünü başlatmadığı için pencere anında kapanıyor. Döngüyü başlatan komutu ekleyebilir misin?",
      presetCode: "import tkinter as tk\npencere = tk.Tk()\npencere.title(\"Kod Çiftliği\")\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "arayuz.py",
      lang: "Python 3.11",
      quickKeys: ["pencere.mainloop()","pencere.title(\"Kod Çiftliği\")","import tkinter as tk"],
      hint: "import tkinter as tk\npencere = tk.Tk()\npencere.title(\"Kod Çiftliği\")\npencere.mainloop()",
      solution: "import tkinter as tk\npencere = tk.Tk()\npencere.title(\"Kod Çiftliği\")\npencere.mainloop()",
      validator: (code) => {
        const clean = code.trim();
        if (/pencere\.mainloop\s*\(\s*\)/.test(clean)) {
          return { ok: true, msg: "Mükemmel! pencere.mainloop() grafik arayüz penceresini açık ve etkileşimde tutar. ✓" };
        }
        return { ok: false, msg: "Hata: pencere.mainloop() komutunu çağırmalısınız." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: FONKSİYON DEKORATÖRLERİ (@)",
      title: "4. Soru: Dekoratör (@) Uygulama",
      prompt: "Geliştirici bir fonksiyona ek özellik katan bir dekoratör (decorator) kullanmak istiyor ancak dekoratörün fonksiyon üzerindeki işaretleme sözdizimini yanlış yazıyor. Doğru dekoratör çağrısını ekler misin?",
      presetCode: "def buyuk_harf_yap(fonk):\n    def sarmal():\n        return fonk().upper()\n    return sarmal\n\n# dekorator fonksiyonunu merhaba fonksiyonuna uygula:\ndef merhaba():\n    return \"gunaydin\"\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "dekorator.py",
      lang: "Python 3.11",
      quickKeys: ["@buyuk_harf_yap\ndef merhaba():","@buyuk_harf_yap","print(merhaba())"],
      hint: "def buyuk_harf_yap(fonk):\n    def sarmal():\n        return fonk().upper()\n    return sarmal\n\n@buyuk_harf_yap\ndef merhaba():\n    return \"gunaydin\"\n\nprint(merhaba())",
      solution: "def buyuk_harf_yap(fonk):\n    def sarmal():\n        return fonk().upper()\n    return sarmal\n\n@buyuk_harf_yap\ndef merhaba():\n    return \"gunaydin\"\n\nprint(merhaba())",
      validator: (code) => {
        const clean = code.trim();
        if (/@buyuk_harf_yap\s+def\s+merhaba/.test(clean)) {
          return { ok: true, msg: "Harika! Dekoratörler fonksiyon tanımının üstüne @dekorator ile eklenir. ✓" };
        }
        return { ok: false, msg: "Hata: def merhaba() tanımının hemen üstüne @buyuk_harf_yap ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: ÜRETEÇLER (GENERATORS & YIELD)",
      title: "5. Soru: Üreteç Fonksiyonu (yield)",
      prompt: "Geliştirici büyük bir veri kümesini belleği şişirmeden adım adım üreten bir üreteç (generator) fonksiyonu tasarlamak istiyor ancak <code class=\"code-highlight\">return</code> kullandığı için tek bir değer alıp sonlanıyor. Üreteç mekanizmasını devreye sokan anahtar kelimeyi yazar mısın?",
      presetCode: "def sayac():\n    for i in range(1, 4):\n        return i\n\nfor sayi in sayac():\n    print(sayi)\n# Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "generator.py",
      lang: "Python 3.11",
      quickKeys: ["yield i","def sayac():","for sayi in sayac():"],
      hint: "def sayac():\n    for i in range(1, 4):\n        yield i\n\nfor sayi in sayac():\n    print(sayi)",
      solution: "def sayac():\n    for i in range(1, 4):\n        yield i\n\nfor sayi in sayac():\n    print(sayi)",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+sayac\s*\(\s*\):[\s\S]*yield\s+i/.test(clean)) {
          return { ok: true, msg: "Tebrikler! yield anahtar kelimesi ile generator başarıyla tamamlandı. Python Müfredatı Tamamlandı! 🚀🏆" };
        }
        return { ok: false, msg: "Hata: return yerine 'yield i' kullanmalısınız." };
      }
    }
  ],
  java_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: KONSOL ÇIKTISI (PRINTLN)",
      title: "1. Soru: Ekrana Çıktı Verme Sözdizimi",
      prompt: "Geliştirici ekrana bir karşılama mesajı yazdırmak istiyor ancak konsol komutunu hatalı yazdığı için program derlenmiyor. Koddaki aksaklığı gidererek mesajın ekranda görünmesini sağlayabilir misin?",
      presetCode: "Print(\"Merhaba Java\")\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["System.out.println(\"Merhaba Java\");","System.out.println(","System.out.print("],
      solution: "System.out.println(\"Merhaba Java\");",
      validator: (code) => {
        const clean = code.trim();
        if (/System\.out\.println\s*\(\s*["']Merhaba Java["']\s*\)\s*;/.test(clean)) return { ok: true, msg: "Harika! System.out.println() başarıyla çalıştı. ✓" };
        return { ok: false, msg: 'Hata: System.out.println("Merhaba Java"); şeklinde yazmalısınız.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: TAMSAYI DEĞİŞKENİ (INT)",
      title: "2. Soru: Değişken Tipi Tanımlama",
      prompt: "Geliştirici tam sayı tutan bir değişken oluşturmak istiyor fakat değişken tipini belirtmeyi unuttuğu için derleyici hata veriyor. Gerekli tür bildirimini ekleyebilir misin?",
      presetCode: "puan = 100;\nSystem.out.println(puan);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int puan = 100;","System.out.println(puan);","int "],
      solution: "int puan = 100;\nSystem.out.println(puan);",
      validator: (code) => {
        const clean = code.trim();
        if (/int\s+puan\s*=\s*100\s*;/.test(clean) && /System\.out\.println\s*\(\s*puan\s*\)\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! int türü tanımlandı. ✓" };
        return { ok: false, msg: "Hata: int puan = 100; şeklinde değişken türünü belirtin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: METİN DEĞİŞKENİ (STRING)",
      title: "3. Soru: Metin ve Tırnak Kuralı",
      prompt: "Geliştirici bir şehir ismini değişkende saklamak istiyor ancak metin için yanlış tırnak işareti kullandığı için program derlenmiyor. Doğru tırnak formatını uygular mısın?",
      presetCode: "String sehir = 'Ankara';\nSystem.out.println(sehir);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["String sehir = \"Ankara\";","System.out.println(sehir);","\"Ankara\""],
      solution: "String sehir = \"Ankara\";\nSystem.out.println(sehir);",
      validator: (code) => {
        const clean = code.trim();
        if (/String\s+sehir\s*=\s*"Ankara"\s*;/.test(clean) && /System\.out\.println\s*\(\s*sehir\s*\)\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! String için çift tırnak kullanılır. ✓" };
        return { ok: false, msg: 'Hata: String sehir = "Ankara"; şeklinde çift tırnak kullanın.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: ONDALIKLI SAYILAR (DOUBLE)",
      title: "4. Soru: Ondalıklı Sayı Türü",
      prompt: "Geliştirici küsurlu bir sıcaklık değerini değişkende tutmak istiyor ancak tam sayı tipi seçtiği için küsurat bilgisi kayboluyor. Ondalıklı sayıları saklayan doğru veri tipini seçebilir misin?",
      presetCode: "int sicaklik = 36.6;\nSystem.out.println(sicaklik);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["double sicaklik = 36.6;","System.out.println(sicaklik);","double "],
      solution: "double sicaklik = 36.6;\nSystem.out.println(sicaklik);",
      validator: (code) => {
        const clean = code.trim();
        if (/double\s+sicaklik\s*=\s*36\.6\s*;/.test(clean)) return { ok: true, msg: "Harika! double türü küsuratı başarıyla korur. ✓" };
        return { ok: false, msg: "Hata: double sicaklik = 36.6; şeklinde tipi double yapın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: TÜR DÖNÜŞÜMÜ (CASTING)",
      title: "5. Soru: Tip Dönüşümü (Type Casting)",
      prompt: "Geliştirici ondalıklı bir sayının tam sayı kısmını alıp bir tamsayı değişkenine aktarmak istiyor ancak doğrudan atama yapamadığı için hata alıyor. Açık tür dönüşümünü (explicit casting) uygular mısın?",
      presetCode: "double oran = 9.85;\nint tamSayi = oran;\nSystem.out.println(tamSayi);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int tamSayi = (int) oran;","(int) oran","System.out.println(tamSayi);"],
      solution: "double oran = 9.85;\nint tamSayi = (int) oran;\nSystem.out.println(tamSayi);",
      validator: (code) => {
        const clean = code.trim();
        if (/int\s+tamSayi\s*=\s*\(\s*int\s*\)\s*oran\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! (int) cast işlemi başarıyla yapıldı. 1. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: int tamSayi = (int) oran; şeklinde cast uygulayın." };
      }
    }
  ],
  java_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: KALAN / MOD HESABI (%)",
      title: "1. Soru: Mod (Kalan) Alma",
      prompt: "Geliştirici 29 sayısının 4 ile bölümünden kalanı bulmak istiyor ancak yanlış operatör kullandığı için bölümün sonucunu alıyor. Kalanı bulan operatörü yazar mısın?",
      presetCode: "int kalan = 29 / 4;\nSystem.out.println(kalan);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int kalan = 29 % 4;","29 % 4","System.out.println(kalan);"],
      solution: "int kalan = 29 % 4;\nSystem.out.println(kalan);",
      validator: (code) => {
        const clean = code.trim();
        if (/29\s*%\s*4\s*;/.test(clean)) return { ok: true, msg: "Harika! % operatörü kalanı bulur. ✓" };
        return { ok: false, msg: "Hata: int kalan = 29 % 4; komutunu kullanın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: HASSAS ONDALIKLI BÖLME",
      title: "2. Soru: Hassas Ondalıklı Bölme",
      prompt: "Geliştirici 7'yi 2'ye böldüğünde ekranda tam olarak 3.5 sonucunu görmek istiyor ancak tamsayı bölmesi yüzünden 3.0 alıyor. Bölme işlemini küsurat kaybetmeyecek şekilde düzeltir misin?",
      presetCode: "double sonuc = 7 / 2;\nSystem.out.println(sonuc);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["double sonuc = 7.0 / 2;","7.0 / 2","7 / 2.0"],
      solution: "double sonuc = 7.0 / 2;\nSystem.out.println(sonuc);",
      validator: (code) => {
        const clean = code.trim();
        if (/double\s+sonuc\s*=\s*(7\.0\s*\/\s*2|7\s*\/\s*2\.0|\(double\)\s*7\s*\/\s*2)\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! 3.5 küsuratı korundu. ✓" };
        return { ok: false, msg: "Hata: double sonuc = 7.0 / 2; şeklinde ondalıklı bölme yapın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: MATH.MAX METODU",
      title: "3. Soru: Matematik Sınıfı ile En Büyük Sayıyı Bulma",
      prompt: "Geliştirici iki sayı arasındaki en büyük olanı Math kütüphanesi ile bulmak istiyor ancak sınıf adını yanlış çağırdığı için hata alıyor. Doğru Math metodunu uygular mısın?",
      presetCode: "int buyuk = max(45, 80);\nSystem.out.println(buyuk);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int buyuk = Math.max(45, 80);","Math.max(45, 80)","System.out.println(buyuk);"],
      solution: "int buyuk = Math.max(45, 80);\nSystem.out.println(buyuk);",
      validator: (code) => {
        const clean = code.trim();
        if (/Math\.max\s*\(\s*45\s*,\s*80\s*\)/.test(clean)) return { ok: true, msg: "Mükemmel! Math.max() başarıyla uygulandı. ✓" };
        return { ok: false, msg: "Hata: int buyuk = Math.max(45, 80); şeklinde çağırın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: KAREKÖK (MATH.SQRT)",
      title: "4. Soru: Karekök Hesabı",
      prompt: "Geliştirici 81 sayısının karekökünü hesaplayıp yazdırmak istiyor ancak sözdizim hatası nedeniyle program çalışmıyor. Karekök fonksiyonunu doğru şekilde çağırabilir misin?",
      presetCode: "double kok = Math.square(81);\nSystem.out.println(kok);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["double kok = Math.sqrt(81);","Math.sqrt(81)","System.out.println(kok);"],
      solution: "double kok = Math.sqrt(81);\nSystem.out.println(kok);",
      validator: (code) => {
        const clean = code.trim();
        if (/Math\.sqrt\s*\(\s*81\s*\)/.test(clean)) return { ok: true, msg: "Harika! Math.sqrt() karekök hesaplar. ✓" };
        return { ok: false, msg: "Hata: double kok = Math.sqrt(81); şeklinde sqrt metodunu kullanın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: ARTIRMA OPERATÖRÜ (++)",
      title: "5. Soru: Değeri 1 Artırma Operatörü",
      prompt: "Geliştirici sayaç değişkenini kısa yoldan 1 artırmak istiyor ancak sözdizimindeki aksaklığı gidererek güncel sayacı yazdırabilir misin?",
      presetCode: "int sayac = 10;\nsayac+;\nSystem.out.println(sayac);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["sayac++;","int sayac = 10;\nsayac++;","System.out.println(sayac);"],
      solution: "int sayac = 10;\nsayac++;\nSystem.out.println(sayac);",
      validator: (code) => {
        const clean = code.trim();
        if (/sayac\s*\+\+\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! sayac++ ile değer 11 yapıldı. 2. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: sayac++; şeklinde çift artı operatörünü kullanın." };
      }
    }
  ],
  java_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: METİN KARŞILAŞTIRMA (.EQUALS)",
      title: "1. Soru: String Eşitlik Kontrolü",
      prompt: "Geliştirici kullanıcının girdiği şifrenin \"gizli\" olup olmadığını doğrulamak istiyor ancak yanlış karşılaştırma yöntemi kullandığı için beklenmedik sonuç alıyor. Metin içeriklerini güvenle karşılaştıran metodu yazar mısın?",
      presetCode: "String parola = \"gizli\";\nboolean esitMi = (parola == \"gizli\");\nSystem.out.println(esitMi);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["boolean esitMi = parola.equals(\"gizli\");","parola.equals(\"gizli\")","System.out.println(esitMi);"],
      solution: "String parola = \"gizli\";\nboolean esitMi = parola.equals(\"gizli\");\nSystem.out.println(esitMi);",
      validator: (code) => {
        const clean = code.trim();
        if (/parola\.equals\s*\(\s*"gizli"\s*\)/.test(clean)) return { ok: true, msg: "Harika! String karşılaştırması için .equals() kullanılır. ✓" };
        return { ok: false, msg: 'Hata: boolean esitMi = parola.equals("gizli"); şeklinde yazın.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: METİN UZUNLUĞU (.LENGTH())",
      title: "2. Soru: Metin Uzunluğunu Bulma",
      prompt: "Geliştirici bir metnin karakter uzunluğunu bulup ekrana basmak istiyor ancak metodu özellik gibi çağırdığı için derleme hatası alıyor. Hatayı düzeltebilir misin?",
      presetCode: "String mesaj = \"Kodlama\";\nint uzunluk = mesaj.length;\nSystem.out.println(uzunluk);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int uzunluk = mesaj.length();","mesaj.length()","System.out.println(uzunluk);"],
      solution: "String mesaj = \"Kodlama\";\nint uzunluk = mesaj.length();\nSystem.out.println(uzunluk);",
      validator: (code) => {
        const clean = code.trim();
        if (/mesaj\.length\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! String uzunluğu .length() metodudur. ✓" };
        return { ok: false, msg: "Hata: int uzunluk = mesaj.length(); şeklinde parantez ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: KARAKTERE ERİŞİM (.CHARAT)",
      title: "3. Soru: Belirli İndeksteki Karakteri Alma",
      prompt: "Geliştirici metnin ilk harfini almak istiyor ancak köşeli parantez kullandığı için derleyici hata veriyor. İndeksteki karakteri döndüren doğru String metodunu uygular mısın?",
      presetCode: "String dil = \"Java\";\nchar ilk = dil[0];\nSystem.out.println(ilk);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["char ilk = dil.charAt(0);","dil.charAt(0)","System.out.println(ilk);"],
      solution: "String dil = \"Java\";\nchar ilk = dil.charAt(0);\nSystem.out.println(ilk);",
      validator: (code) => {
        const clean = code.trim();
        if (/dil\.charAt\s*\(\s*0\s*\)/.test(clean)) return { ok: true, msg: "Mükemmel! .charAt(0) ilk karakteri alır. ✓" };
        return { ok: false, msg: "Hata: char ilk = dil.charAt(0); metodunu kullanın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: BÜYÜK HARFE ÇEVİRME (.TOUPPERCASE)",
      title: "4. Soru: Büyük Harfe Çevirme",
      prompt: "Geliştirici metni büyük harflere dönüştürüp ekrana basmak istiyor ancak metodun sonucunu yakalamadığı için ekranda küçük harfli orijinal metin kalıyor. Doğru atamayı yapar mısın?",
      presetCode: "String sehir = \"izmir\";\nsehir.toUpperCase();\nSystem.out.println(sehir);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["sehir = sehir.toUpperCase();","System.out.println(sehir.toUpperCase());","sehir.toUpperCase()"],
      solution: "String sehir = \"izmir\";\nsehir = sehir.toUpperCase();\nSystem.out.println(sehir);",
      validator: (code) => {
        const clean = code.trim();
        if (/sehir\s*=\s*sehir\.toUpperCase\s*\(\s*\)/.test(clean) || /System\.out\.println\s*\(\s*sehir\.toUpperCase\s*\(\s*\)\s*\)/.test(clean)) return { ok: true, msg: "Harika! String dönüşümü başarıyla atandı. ✓" };
        return { ok: false, msg: "Hata: sehir = sehir.toUpperCase(); şeklinde sonucu değişkene atayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: METİN BİRLEŞTİRME (+)",
      title: "5. Soru: Metin Birleştirme",
      prompt: "Geliştirici isim ve soyisim metinlerini aralarında bir boşluk bırakarak birleştirmek istiyor. Birleştirme işlemini doğru tamamlayabilir misin?",
      presetCode: "String ad = \"Ali\", soyad = \"Yılmaz\";\nString tamAd = ad soyad;\nSystem.out.println(tamAd);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["String tamAd = ad + \" \" + soyad;","ad + \" \" + soyad","System.out.println(tamAd);"],
      solution: "String ad = \"Ali\", soyad = \"Yılmaz\";\nString tamAd = ad + \" \" + soyad;\nSystem.out.println(tamAd);",
      validator: (code) => {
        const clean = code.trim();
        if (/ad\s*\+\s*" "\s*\+\s*soyad/.test(clean)) return { ok: true, msg: "Tebrikler! Metinler başarıyla birleştirildi. 3. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: 'Hata: String tamAd = ad + " " + soyad; şeklinde araya boşluk koyarak bağlayın.' };
      }
    }
  ],
  java_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: IF KOŞULU",
      title: "1. Soru: If Koşul Parantezi",
      prompt: "Geliştirici yaş kontrolü yapmak istiyor ancak sözdizim hatası yüzünden kod derlenmiyor. Koşul ifadesini Java standartlarına uygun yazabilir misin?",
      presetCode: "int yas = 20;\nif yas >= 18 {\n    System.out.println(\"Reşit\");\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["if (yas >= 18) {","System.out.println(\"Reşit\");","int yas = 20;"],
      solution: "int yas = 20;\nif (yas >= 18) {\n    System.out.println(\"Reşit\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*yas\s*>=\s*18\s*\)/.test(clean)) return { ok: true, msg: "Harika! if koşulu parantez içine alındı. ✓" };
        return { ok: false, msg: "Hata: if (yas >= 18) şeklinde parantez kullanın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: IF-ELSE YAPISI",
      title: "2. Soru: If-Else Bloğu",
      prompt: "Geliştirici sayının pozitif ya da negatif olduğunu belirlemek istiyor ancak hatalı anahtar kelime kullandığı için kod çalışmıyor. else bloğunu doğru tanımlar mısın?",
      presetCode: "int sayi = -5;\nif (sayi >= 0) {\n    System.out.println(\"Pozitif\");\n} otherwise {\n    System.out.println(\"Negatif\");\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["} else {","System.out.println(\"Negatif\");","if (sayi >= 0) {"],
      solution: "int sayi = -5;\nif (sayi >= 0) {\n    System.out.println(\"Pozitif\");\n} else {\n    System.out.println(\"Negatif\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\}\s*else\s*\{[\s\S]*Negatif/.test(clean)) return { ok: true, msg: "Tebrikler! else bloğu doğru kuruldu. ✓" };
        return { ok: false, msg: "Hata: otherwise yerine else { ... } kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: TERNARY OPERATÖRÜ",
      title: "3. Soru: Ternary (Tek Satır If-Else)",
      prompt: "Geliştirici vize notuna göre tek satırda ternary operatörü ile durumu belirlemek istiyor ancak sözdizimdeki eksikliği tamamlayabilir misin?",
      presetCode: "int puan = 65;\nString sonuc = (puan >= 50) : \"Geçti\" ? \"Kaldı\";\nSystem.out.println(sonuc);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["String sonuc = (puan >= 50) ? \"Geçti\" : \"Kaldı\";","? \"Geçti\" : \"Kaldı\"","System.out.println(sonuc);"],
      solution: "int puan = 65;\nString sonuc = (puan >= 50) ? \"Geçti\" : \"Kaldı\";\nSystem.out.println(sonuc);",
      validator: (code) => {
        const clean = code.trim();
        if (/\(\s*puan\s*>=\s*50\s*\)\s*\?\s*"Geçti"\s*:\s*"Kaldı"/.test(clean)) return { ok: true, msg: "Mükemmel! Ternary (? :) sözdizimi başarıyla uygulandı. ✓" };
        return { ok: false, msg: 'Hata: String sonuc = (puan >= 50) ? "Geçti" : "Kaldı"; şeklinde yazın.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: SWITCH-CASE & BREAK",
      title: "4. Soru: Switch-Case Break Eksikliği",
      prompt: "Geliştirici haftanın gününe göre sadece ilgili günü basmak istiyor ancak 1 girdiğinde sonraki günleri de peş peşe yazdırıyor. Durumu ilgili günde sonlandıran komutu ekler misin?",
      presetCode: "int gun = 1;\nswitch (gun) {\n    case 1:\n        System.out.println(\"Pazartesi\");\n    case 2:\n        System.out.println(\"Salı\");\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["break;","case 1:\n        System.out.println(\"Pazartesi\");\n        break;","switch (gun) {"],
      solution: "int gun = 1;\nswitch (gun) {\n    case 1:\n        System.out.println(\"Pazartesi\");\n        break;\n    case 2:\n        System.out.println(\"Salı\");\n        break;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/case\s+1\s*:[\s\S]*break\s*;/.test(clean)) return { ok: true, msg: "Harika! break; komutu fall-through sorununu çözdü. ✓" };
        return { ok: false, msg: "Hata: case 1 bloğunun sonuna break; ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: MANTIKSAL VE (&&)",
      title: "5. Soru: Mantıksal VE (&&) Bağlacı",
      prompt: "Geliştirici hem yaşın 18'den büyük hem de ehliyetin var olduğunu tek bir koşulda denetlemek istiyor. İki şartı birleştiren mantıksal operatörü yazar mısın?",
      presetCode: "int yas = 22;\nboolean ehliyet = true;\nif (yas >= 18 and ehliyet == true) {\n    System.out.println(\"Araç Kullanabilir\");\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["if (yas >= 18 && ehliyet) {","yas >= 18 && ehliyet","System.out.println(\"Araç Kullanabilir\");"],
      solution: "int yas = 22;\nboolean ehliyet = true;\nif (yas >= 18 && ehliyet) {\n    System.out.println(\"Araç Kullanabilir\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/yas\s*>=\s*18\s*&&\s*ehliyet/.test(clean)) return { ok: true, msg: "Tebrikler! && mantıksal bağlacı uygulandı. 4. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: and yerine && operatörünü kullanın." };
      }
    }
  ],
  java_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: FOR DÖNGÜSÜ",
      title: "1. Soru: Klasik For Döngüsü Sözdizimi",
      prompt: "Geliştirici 1'den 3'e kadar sayıları yazdırmak istiyor ancak döngü başlığında virgül kullandığı için derleme hatası alıyor. Doğru for döngüsü formatını yazar mısın?",
      presetCode: "for (int i = 1, i <= 3, i++) {\n    System.out.println(i);\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["for (int i = 1; i <= 3; i++) {","System.out.println(i);","i <= 3;"],
      solution: "for (int i = 1; i <= 3; i++) {\n    System.out.println(i);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/for\s*\(\s*int\s+i\s*=\s*1\s*;\s*i\s*<=\s*3\s*;\s*i\+\+\s*\)/.test(clean)) return { ok: true, msg: "Harika! for döngüsü noktalı virgüllerle ayrıldı. ✓" };
        return { ok: false, msg: "Hata: for (int i = 1; i <= 3; i++) şeklinde noktalı virgül kullanın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: WHILE SAYAÇ YÖNETİMİ",
      title: "2. Soru: Sonsuz While Döngüsünü Önleme",
      prompt: "Geliştirici sayaç 3 olana kadar ekrana yazdırmak istiyor ancak döngü sonsuz döngüye giriyor. Döngünün güvenle bitmesini sağlayacak satırı ekler misin?",
      presetCode: "int sayac = 1;\nwhile (sayac <= 3) {\n    System.out.println(sayac);\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["sayac++;","while (sayac <= 3) {","System.out.println(sayac);"],
      solution: "int sayac = 1;\nwhile (sayac <= 3) {\n    System.out.println(sayac);\n    sayac++;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/sayac\s*\+\+\s*;/.test(clean) && /while\s*\(\s*sayac\s*<=\s*3\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! sayac++ ile sonsuz döngü engellendi. ✓" };
        return { ok: false, msg: "Hata: while bloğunun içine sayac++; ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: DÖNGÜYÜ KIRMA (BREAK)",
      title: "3. Soru: Döngüyü Erken Kırma (Break)",
      prompt: "Geliştirici döngüde 3 sayısına ulaşıldığı anda döngüyü tamamen bitirmek istiyor. İstenen koşulda döngüyü sonlandıran komutu yazar mısın?",
      presetCode: "for (int i = 1; i <= 5; i++) {\n    if (i == 3) {\n        stop;\n    }\n    System.out.println(i);\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["break;","if (i == 3) {\n        break;\n    }","for (int i = 1; i <= 5; i++) {"],
      solution: "for (int i = 1; i <= 5; i++) {\n    if (i == 3) {\n        break;\n    }\n    System.out.println(i);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*i\s*==\s*3\s*\)\s*\{[\s\S]*break\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! break komutu uygulandı. ✓" };
        return { ok: false, msg: "Hata: if (i == 3) durumunda break; komutunu kullanın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: TURU ATLAMA (CONTINUE)",
      title: "4. Soru: Belirli Adımı Atlama (Continue)",
      prompt: "Geliştirici 2 sayısını ekrana basmadan atlayıp sonraki sayılara devam etmek istiyor. O anki turu atlayan anahtar kelimeyi yazar mısın?",
      presetCode: "for (int i = 1; i <= 3; i++) {\n    if (i == 2) {\n        pass;\n    }\n    System.out.println(i);\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["continue;","if (i == 2) {\n        continue;\n    }","for (int i = 1; i <= 3; i++) {"],
      solution: "for (int i = 1; i <= 3; i++) {\n    if (i == 2) {\n        continue;\n    }\n    System.out.println(i);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*i\s*==\s*2\s*\)\s*\{[\s\S]*continue\s*;/.test(clean)) return { ok: true, msg: "Harika! continue ile 2 atlandı. ✓" };
        return { ok: false, msg: "Hata: if (i == 2) durumunda continue; kullanın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: DO-WHILE DÖNGÜSÜ",
      title: "5. Soru: Do-While Döngüsü Sözdizimi",
      prompt: "Geliştirici en az bir kez çalışan do-while döngüsü kurmak istiyor ancak sözdizimdeki eksikliği tamamlayabilir misin?",
      presetCode: "int x = 5;\ndo {\n    System.out.println(x);\n} while (x < 3)\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["} while (x < 3);","do {","int x = 5;"],
      solution: "int x = 5;\ndo {\n    System.out.println(x);\n} while (x < 3);",
      validator: (code) => {
        const clean = code.trim();
        if (/do\s*\{[\s\S]*\}\s*while\s*\(\s*x\s*<\s*3\s*\)\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! do-while sonuna noktalı virgül eklendi. 5. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: while (x < 3) satırının sonuna noktalı virgül (;) koyun." };
      }
    }
  ],
  java_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: DİZİ TANIMLAMA",
      title: "1. Soru: Dizi Tanımlama",
      prompt: "Geliştirici 3 elemanlı bir tamsayı dizisi oluşturmak istiyor ancak dizi tanımlama sözdiziminde hata yaptığı için derlenmiyor. Dizi tanımlamasını doğru şekilde yazar mısın?",
      presetCode: "int sayilar = [10, 20, 30];\nSystem.out.println(sayilar[0]);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int[] sayilar = {10, 20, 30};","System.out.println(sayilar[0]);","int[] "],
      solution: "int[] sayilar = {10, 20, 30};\nSystem.out.println(sayilar[0]);",
      validator: (code) => {
        const clean = code.trim();
        if (/int\s*\[\s*\]\s*sayilar\s*=\s*\{\s*10\s*,\s*20\s*,\s*30\s*\}\s*;/.test(clean)) return { ok: true, msg: "Harika! int[] sayilar = {...} dizisi kuruldu. ✓" };
        return { ok: false, msg: "Hata: int[] sayilar = {10, 20, 30}; şeklinde tanımlayın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: DİZİ UZUNLUĞU (.LENGTH)",
      title: "2. Soru: Dizi Eleman Sayısını Alma",
      prompt: "Geliştirici dizide kaç eleman olduğunu öğrenmek istiyor ancak String metoduyla karıştırdığı için derleme hatası alıyor. Dizi uzunluk özelliğini doğru çağırır mısın?",
      presetCode: "String[] arabalar = {\"Volvo\", \"BMW\", \"Ford\"};\nint adet = arabalar.length();\nSystem.out.println(adet);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int adet = arabalar.length;","arabalar.length","System.out.println(adet);"],
      solution: "String[] arabalar = {\"Volvo\", \"BMW\", \"Ford\"};\nint adet = arabalar.length;\nSystem.out.println(adet);",
      validator: (code) => {
        const clean = code.trim();
        if (/arabalar\.length\s*;/.test(clean) && !/arabalar\.length\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! Dizilerde .length parantezsizdir. ✓" };
        return { ok: false, msg: "Hata: arabalar.length özelliğini parantezsiz çağırın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: FOR-EACH DÖNGÜSÜ",
      title: "3. Soru: For-Each Döngüsü",
      prompt: "Geliştirici dizideki tüm elemanları For-Each döngüsüyle yazdırmak istiyor ancak döngü sözdizimini yanlış yazdığı için kod çalışmıyor. Doğru For-Each yapısını kurabilir misin?",
      presetCode: "int[] numaralar = {1, 2, 3};\nfor (int n in numaralar) {\n    System.out.println(n);\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["for (int n : numaralar) {","System.out.println(n);","int[] numaralar = {1, 2, 3};"],
      solution: "int[] numaralar = {1, 2, 3};\nfor (int n : numaralar) {\n    System.out.println(n);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/for\s*\(\s*int\s+n\s*:\s*numaralar\s*\)/.test(clean)) return { ok: true, msg: "Mükemmel! for (int n : dizi) yapısı doğru kuruldu. ✓" };
        return { ok: false, msg: "Hata: in yerine iki nokta (:) kullanın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: DİZİ ELEMANI GÜNCELLEME",
      title: "4. Soru: Dizi Elemanını Güncelleme",
      prompt: "Geliştirici dizinin ilk elemanını \"Elma\" olarak güncellemek istiyor ancak hatalı metot çağırdığı için hata alıyor. İndeks atamasıyla güncellemeyi yapar mısın?",
      presetCode: "String[] meyveler = {\"Muz\", \"Çilek\"};\nmeyveler.set(0, \"Elma\");\nSystem.out.println(meyveler[0]);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["meyveler[0] = \"Elma\";","meyveler[0]","System.out.println(meyveler[0]);"],
      solution: "String[] meyveler = {\"Muz\", \"Çilek\"};\nmeyveler[0] = \"Elma\";\nSystem.out.println(meyveler[0]);",
      validator: (code) => {
        const clean = code.trim();
        if (/meyveler\s*\[\s*0\s*\]\s*=\s*"Elma"\s*;/.test(clean)) return { ok: true, msg: "Harika! meyveler[0] = 'Elma' ataması tamamlandı. ✓" };
        return { ok: false, msg: 'Hata: meyveler[0] = "Elma"; atamasını yapın.' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: ÇOK BOYUTLU DİZİLER",
      title: "5. Soru: Çok Boyutlu Dizi Erişimi",
      prompt: "Geliştirici 2 boyutlu bir matrisin 0. satır 1. sütunundaki elemanı almak istiyor. Çok boyutlu dizi indeksleme sözdizimini düzeltebilir misin?",
      presetCode: "int[][] matris = {{1, 2}, {3, 4}};\nint deger = matris[0, 1];\nSystem.out.println(deger);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int deger = matris[0][1];","matris[0][1]","System.out.println(deger);"],
      solution: "int[][] matris = {{1, 2}, {3, 4}};\nint deger = matris[0][1];\nSystem.out.println(deger);",
      validator: (code) => {
        const clean = code.trim();
        if (/matris\s*\[\s*0\s*\]\s*\[\s*1\s*\]/.test(clean)) return { ok: true, msg: "Tebrikler! matris[0][1] erişimi sağlandı. 6. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: matris[0][1] şeklinde iki ayrı köşeli parantez kullanın." };
      }
    }
  ],
  java_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: RETURN İFADESİ",
      title: "1. Soru: Değer Döndüren Metot (Return)",
      prompt: "Geliştirici iki sayıyı toplayıp sonucunu dönen bir metot yazmak istiyor ancak dönüş değerini dışarı aktarmayı unuttuğu için hata alıyor. Eksik return ifadesini ekler misin?",
      presetCode: "public static int topla(int a, int b) {\n    int sonuc = a + b;\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["return sonuc;","return a + b;","public static int topla(int a, int b) {"],
      solution: "public static int topla(int a, int b) {\n    int sonuc = a + b;\n    return sonuc;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/return\s+(sonuc|a\s*\+\s*b)\s*;/.test(clean)) return { ok: true, msg: "Harika! return ifadesi eklendi. ✓" };
        return { ok: false, msg: "Hata: Metot içine 'return sonuc;' ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: VOID METOTLAR",
      title: "2. Soru: Void Dönüş Tipi",
      prompt: "Geliştirici sadece ekrana mesaj yazdıran ve geriye bir değer üretmeyen bir metot tasarlamak istiyor. Değer döndürmeyen doğru anahtar kelimeyi yazar mısın?",
      presetCode: "public static empty yazdir(String mesaj) {\n    System.out.println(mesaj);\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static void yazdir(String mesaj) {","System.out.println(mesaj);","void "],
      solution: "public static void yazdir(String mesaj) {\n    System.out.println(mesaj);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+static\s+void\s+yazdir/.test(clean)) return { ok: true, msg: "Tebrikler! void dönüş tipi doğru uygulandı. ✓" };
        return { ok: false, msg: "Hata: empty yerine void anahtar kelimesini kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: METOT PARAMETRELERİ",
      title: "3. Soru: Parametre Tanımlama",
      prompt: "Geliştirici kullanıcı ismini alıp selamlayan bir metot yazmak istiyor ancak parametre tipini belirtmediği için derleme hatası alıyor. Parametreyi doğru tanımlayabilir misin?",
      presetCode: "public static void selamla(isim) {\n    System.out.println(\"Merhaba \" + isim);\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static void selamla(String isim) {","String isim","System.out.println(\"Merhaba \" + isim);"],
      solution: "public static void selamla(String isim) {\n    System.out.println(\"Merhaba \" + isim);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/void\s+selamla\s*\(\s*String\s+isim\s*\)/.test(clean)) return { ok: true, msg: "Mükemmel! String isim parametresi tanımlandı. ✓" };
        return { ok: false, msg: "Hata: parametreyi (String isim) olarak belirtin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: METOT AŞIRI YÜKLEME (OVERLOADING)",
      title: "4. Soru: Metot Aşırı Yükleme (Method Overloading)",
      prompt: "Geliştirici hem int hem double toplayabilen iki farklı sürüm oluşturmak istiyor ancak ikinci metodun dönüş tipini ve parametresini uyumlu hale getirebilir misin?",
      presetCode: "public static int topla(int a, int b) { return a + b; }\npublic static int topla(double a, double b) { return a + b; }\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static double topla(double a, double b) { return a + b; }","double topla","return a + b;"],
      solution: "public static int topla(int a, int b) { return a + b; }\npublic static double topla(double a, double b) { return a + b; }",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+static\s+double\s+topla\s*\(\s*double\s+a\s*,\s*double\s+b\s*\)/.test(clean)) return { ok: true, msg: "Harika! Overloading metot dönüş tipi double yapıldı. ✓" };
        return { ok: false, msg: "Hata: double toplayan metodun dönüş tipini double yapın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: STATIC METOTLAR",
      title: "5. Soru: Statik Metot Çağrısı",
      prompt: "Geliştirici main içerisinden nesne üretmeden bir hesaplama metodunu doğrudan çağırmak istiyor. Metodu nesnesiz çağrılabilir kılan anahtar kelimeyi ekler misin?",
      presetCode: "public int kupAl(int x) {\n    return x * x * x;\n}\n// Kodunu main içinden doğrudan çağrılabilir şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static int kupAl(int x) {","static ","return x * x * x;"],
      solution: "public static int kupAl(int x) {\n    return x * x * x;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+static\s+int\s+kupAl/.test(clean)) return { ok: true, msg: "Tebrikler! static anahtar kelimesi eklendi. 7. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'public static int kupAl(int x)' şeklinde static ekleyin." };
      }
    }
  ],
  java_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: NESNE OLUŞTURMA (NEW)",
      title: "1. Soru: Nesne Örneği Oluşturma (new)",
      prompt: "Geliştirici Ogrenci sınıfından yeni bir nesne üretmek istiyor ancak nesne oluşturma anahtar kelimesini unuttuğu için kod derlenmiyor. Doğru nesne başlatma kodunu yazar mısın?",
      presetCode: "class Ogrenci { String ad; }\nOgrenci ogr = Ogrenci();\nogr.ad = \"Ali\";\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["Ogrenci ogr = new Ogrenci();","new Ogrenci()","ogr.ad = \"Ali\";"],
      solution: "class Ogrenci { String ad; }\nOgrenci ogr = new Ogrenci();\nogr.ad = \"Ali\";",
      validator: (code) => {
        const clean = code.trim();
        if (/Ogrenci\s+ogr\s*=\s*new\s+Ogrenci\s*\(\s*\)\s*;/.test(clean)) return { ok: true, msg: "Harika! new anahtar kelimesi ile nesne üretildi. ✓" };
        return { ok: false, msg: "Hata: Ogrenci ogr = new Ogrenci(); şeklinde new kullanın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: ALAN ERİŞİMİ (.)",
      title: "2. Soru: Sınıf Alanına (Field) Değer Atama",
      prompt: "Geliştirici oluşturduğu araba nesnesinin model yılına değer atamak istiyor ancak hatalı sözdizimini düzelterek değeri 2024 yapabilir misin?",
      presetCode: "class Araba { int yil; }\nAraba a = new Araba();\na->yil = 2024;\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["a.yil = 2024;","a.yil","Araba a = new Araba();"],
      solution: "class Araba { int yil; }\nAraba a = new Araba();\na.yil = 2024;",
      validator: (code) => {
        const clean = code.trim();
        if (/a\.yil\s*=\s*2024\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! a.yil = 2024 nokta operatörüyle atandı. ✓" };
        return { ok: false, msg: "Hata: a.yil = 2024; şeklinde nokta (.) kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: NESNE METOTLARI",
      title: "3. Soru: Nesne Metodu Çağırma",
      prompt: "Geliştirici Kopek nesnesinin havla metodunu çalıştırmak istiyor. Nesne üzerinden metot çağırma satırını doğru şekilde tamamlar mısın?",
      presetCode: "class Kopek {\n    void havla() { System.out.println(\"Hav!\"); }\n}\nKopek k = new Kopek();\nhavla(k);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["k.havla();","Kopek k = new Kopek();","k.havla()"],
      solution: "class Kopek {\n    void havla() { System.out.println(\"Hav!\"); }\n}\nKopek k = new Kopek();\nk.havla();",
      validator: (code) => {
        const clean = code.trim();
        if (/k\.havla\s*\(\s*\)\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! k.havla() metodu çağrıldı. ✓" };
        return { ok: false, msg: "Hata: k.havla(); şeklinde nesne üzerinden çağırın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: THIS ANAHTAR KELİMESİ",
      title: "4. Soru: This Anahtar Kelimesi",
      prompt: "Geliştirici metot parametresi ile sınıf alanının ismi aynı olduğunda sınıf alanına atama yapmak istiyor. Nesnenin kendi alanını işaret eden anahtar kelimeyi ekler misin?",
      presetCode: "class Urun {\n    int fiyat;\n    void setFiyat(int fiyat) {\n        fiyat = fiyat;\n    }\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["this.fiyat = fiyat;","this.fiyat","void setFiyat(int fiyat) {"],
      solution: "class Urun {\n    int fiyat;\n    void setFiyat(int fiyat) {\n        this.fiyat = fiyat;\n    }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/this\.fiyat\s*=\s*fiyat\s*;/.test(clean)) return { ok: true, msg: "Harika! this.fiyat ile nesne alanı hedeflendi. ✓" };
        return { ok: false, msg: "Hata: this.fiyat = fiyat; ataması yapın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: ÇOKLU NESNE YÖNETİMİ",
      title: "5. Soru: Çoklu Nesne Üretimi",
      prompt: "Geliştirici aynı sınıftan iki bağımsız nesne oluşturup isimlerini atamak istiyor. İkinci nesneyi doğru şekilde oluşturup adını \"Ayşe\" yapar mısın?",
      presetCode: "class Calisan { String isim; }\nCalisan c1 = new Calisan();\nc1.isim = \"Ahmet\";\nCalisan c2 = c1;\nc2.isim = \"Ayşe\";\n// c2'yi bağımsız yeni bir nesne olarak oluştur:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["Calisan c2 = new Calisan();","c2.isim = \"Ayşe\";","new Calisan()"],
      solution: "class Calisan { String isim; }\nCalisan c1 = new Calisan();\nc1.isim = \"Ahmet\";\nCalisan c2 = new Calisan();\nc2.isim = \"Ayşe\";",
      validator: (code) => {
        const clean = code.trim();
        if (/Calisan\s+c2\s*=\s*new\s+Calisan\s*\(\s*\)\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! Bağımsız c2 nesnesi üretildi. 8. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: Calisan c2 = new Calisan(); ile yeni nesne açın." };
      }
    }
  ],
  java_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: KURUCU METOTLAR",
      title: "1. Soru: Kurucu Metot Tanımlama",
      prompt: "Geliştirici Kitap sınıfına kurucu metot yazmak istiyor ancak dönüş tipi eklediği için kurucu çalışmıyor. Doğru kurucu tanımını yapar mısın?",
      presetCode: "class Kitap {\n    String baslik;\n    public void Kitap(String b) {\n        this.baslik = b;\n    }\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public Kitap(String b) {","this.baslik = b;","class Kitap {"],
      solution: "class Kitap {\n    String baslik;\n    public Kitap(String b) {\n        this.baslik = b;\n    }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+Kitap\s*\(\s*String\s+b\s*\)/.test(clean) && !/void/.test(clean)) return { ok: true, msg: "Harika! Kurucu metottan void kaldırıldı. ✓" };
        return { ok: false, msg: "Hata: public Kitap(String b) şeklinde void olmadan tanımlayın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: KURUCU İSİMLENDİRME",
      title: "2. Soru: Kurucu İsim Kuralı",
      prompt: "Geliştirici yapıcı metot tanımlamak istiyor ancak metot adını sınıf adıyla aynı yapmadığı için derleyici hata veriyor. Kurucu ismini sınıf ismiyle eşleştirir misin?",
      presetCode: "class Banka {\n    int bakiye;\n    public init(int b) {\n        this.bakiye = b;\n    }\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public Banka(int b) {","this.bakiye = b;","class Banka {"],
      solution: "class Banka {\n    int bakiye;\n    public Banka(int b) {\n        this.bakiye = b;\n    }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+Banka\s*\(\s*int\s+b\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! Kurucu adı sınıf adı Banka ile eşleşti. ✓" };
        return { ok: false, msg: "Hata: init yerine public Banka(int b) yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: PRIVATE BELİRTECİ",
      title: "3. Soru: Private Erişimi Kısıtlama",
      prompt: "Geliştirici sifre değişkeninin sınıf dışından doğrudan değiştirilmesini engellemek istiyor. En kısıtlayıcı erişim belirtecini ekler misin?",
      presetCode: "class Hesap {\n    public String sifre;\n}\n// sifre alanını sadece bu sınıfa özel (gizli) yap:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["private String sifre;","private ","class Hesap {"],
      solution: "class Hesap {\n    private String sifre;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/private\s+String\s+sifre\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! private String sifre ile veri gizlendi. ✓" };
        return { ok: false, msg: "Hata: public yerine private String sifre; yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: STATIC ALANLAR",
      title: "4. Soru: Static Değişken Paylaşımı",
      prompt: "Geliştirici üretilen tüm nesneler tarafından ortak paylaşılan tek bir sayaç değişkeni tanımlamak istiyor. Sınıfa ait ortak değişken anahtar kelimesini ekler misin?",
      presetCode: "class Oyuncu {\n    public int toplamOyuncu = 0;\n}\n// toplamOyuncu değişkenini tüm nesneler için tek ve ortak (sınıfa ait) yap:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static int toplamOyuncu = 0;","static ","public static int "],
      solution: "class Oyuncu {\n    public static int toplamOyuncu = 0;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+static\s+int\s+toplamOyuncu/.test(clean)) return { ok: true, msg: "Harika! static belirteci sınıf geneline yayıldı. ✓" };
        return { ok: false, msg: "Hata: public static int toplamOyuncu = 0; şeklinde tanımlayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: ÇOKLU KURUCU (OVERLOADING)",
      title: "5. Soru: Çoklu Kurucu (Constructor Overloading)",
      prompt: "Geliştirici hem boş hem de isim alan iki kurucu tanımlamak istiyor. Parametresiz kurucuyu doğru şekilde ekler misin?",
      presetCode: "class Kisi {\n    String isim;\n    public Kisi(String isim) { this.isim = isim; }\n}\n// Parametresiz varsayılan kurucuyu da ekle:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public Kisi() { this.isim = \"Bilinmiyor\"; }","public Kisi() {}","class Kisi {"],
      solution: "class Kisi {\n    String isim;\n    public Kisi() { this.isim = \"Bilinmiyor\"; }\n    public Kisi(String isim) { this.isim = isim; }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+Kisi\s*\(\s*\)/.test(clean) && /public\s+Kisi\s*\(\s*String/.test(clean)) return { ok: true, msg: "Tebrikler! Constructor overloading tamamlandı. 9. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: public Kisi() { ... } kurucusunu ekleyin." };
      }
    }
  ],
  java_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: GETTER METOTLARI",
      title: "1. Soru: Getter Metodu Yazma",
      prompt: "Geliştirici private olarak saklanan isim bilgisini dışarıya okutmak istiyor. Standart Getter metodunu tamamlayabilir misin?",
      presetCode: "class Kullanici {\n    private String isim = \"Can\";\n    public void getIsim() {\n        return isim;\n    }\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public String getIsim() {\n        return isim;\n    }","public String getIsim()","return isim;"],
      solution: "class Kullanici {\n    private String isim = \"Can\";\n    public String getIsim() {\n        return isim;\n    }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+String\s+getIsim\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Harika! public String getIsim() tanımlandı. ✓" };
        return { ok: false, msg: "Hata: Getter dönüş tipini String yapın: public String getIsim()" };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: SETTER METOTLARI",
      title: "2. Soru: Setter ile Değer Doğrulama",
      prompt: "Geliştirici yaş bilgisini güncellerken negatif değer girilmesini engellemek istiyor. Setter metodunu kurallı şekilde yazar mısın?",
      presetCode: "class Uye {\n    private int yas;\n    public void setYas(int y) {\n        this.yas = y;\n    }\n}\n// y > 0 ise atama yapacak şekilde düzenle:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["if (y > 0) { this.yas = y; }","public void setYas(int y) {","this.yas = y;"],
      solution: "class Uye {\n    private int yas;\n    public void setYas(int y) {\n        if (y > 0) {\n            this.yas = y;\n        }\n    }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*y\s*>\s*0\s*\)\s*\{[\s\S]*this\.yas\s*=\s*y\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! Setter içine kontrol eklendi. ✓" };
        return { ok: false, msg: "Hata: if (y > 0) { this.yas = y; } şartını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: PAKET İÇE AKTARMA (IMPORT)",
      title: "3. Soru: Paket İçe Aktarma (Import)",
      prompt: "Geliştirici kullanıcıdan girdi almak için Scanner sınıfını kullanmak istiyor ancak paketi dahil etmediği için sınıf bulunamıyor. Gerekli import ifadesini ekler misin?",
      presetCode: "// Scanner paketini içe aktar:\npublic class AnaProgram {\n    Scanner input = new Scanner(System.in);\n}\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["import java.util.Scanner;","Scanner input","public class AnaProgram {"],
      solution: "import java.util.Scanner;\n\npublic class AnaProgram {\n    Scanner input = new Scanner(System.in);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/import\s+java\.util\.Scanner\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! import java.util.Scanner; eklendi. ✓" };
        return { ok: false, msg: "Hata: En üste 'import java.util.Scanner;' ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: KAPSÜLLENMİŞ VERİ OKUMA",
      title: "4. Soru: Kapsüllenmiş Alana Erişim",
      prompt: "Geliştirici private hiz alanına dışarıdan erişmek istiyor ancak doğrudan alan adını yazdığı için hata alıyor. Doğru Getter metodunu çağırır mısın?",
      presetCode: "class Motor {\n    private int hiz = 80;\n    public int getHiz() { return hiz; }\n}\nMotor m = new Motor();\nSystem.out.println(m.hiz);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["System.out.println(m.getHiz());","m.getHiz()","Motor m = new Motor();"],
      solution: "class Motor {\n    private int hiz = 80;\n    public int getHiz() { return hiz; }\n}\nMotor m = new Motor();\nSystem.out.println(m.getHiz());",
      validator: (code) => {
        const clean = code.trim();
        if (/m\.getHiz\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Harika! m.getHiz() ile güvenli erişildi. ✓" };
        return { ok: false, msg: "Hata: System.out.println(m.getHiz()); şeklinde çağırın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: BOOLEAN GETTER (IS)",
      title: "5. Soru: Boolean Getter İsimlendirme Standardı",
      prompt: "Geliştirici boolean türündeki aktif alanı için Java standartlarına uygun Getter metodu tanımlamak istiyor. Boolean getter kuralını uygular mısın?",
      presetCode: "class Hesap {\n    private boolean aktif = true;\n    public boolean getAktif() { return aktif; }\n}\n// Java standardı olan 'is' önekini kullan:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public boolean isAktif() { return aktif; }","isAktif()","private boolean aktif = true;"],
      solution: "class Hesap {\n    private boolean aktif = true;\n    public boolean isAktif() { return aktif; }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+boolean\s+isAktif\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! isAktif() standardı uygulandı. 10. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: public boolean isAktif() { return aktif; } yazın." };
      }
    }
  ],
  java_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: MİRAS ALMA (EXTENDS)",
      title: "1. Soru: Miras Alma Sözdizimi (Extends)",
      prompt: "Geliştirici Kamyon sınıfının Arac sınıfından miras almasını istiyor ancak hatalı anahtar kelime kullandığı için derlenmiyor. Doğru kalıtım anahtar kelimesini yazar mısın?",
      presetCode: "class Arac { int tekerlek = 4; }\nclass Kamyon inherits Arac { }\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["class Kamyon extends Arac { }","extends Arac","class Arac { int tekerlek = 4; }"],
      solution: "class Arac { int tekerlek = 4; }\nclass Kamyon extends Arac { }",
      validator: (code) => {
        const clean = code.trim();
        if (/class\s+Kamyon\s+extends\s+Arac/.test(clean)) return { ok: true, msg: "Harika! extends anahtar kelimesi uygulandı. ✓" };
        return { ok: false, msg: "Hata: class Kamyon extends Arac { } yazmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: ÜST SINIF KURUCUSU (SUPER)",
      title: "2. Soru: Üst Sınıf Kurucusunu Çağırma (Super)",
      prompt: "Geliştirici alt sınıfta üst sınıfın kurucusunu çalıştırmak istiyor ancak hatalı kelime kullandığı için hata alıyor. Üst sınıf kurucu çağrısını düzeltir misin?",
      presetCode: "class Kisi {\n    Kisi(String ad) { System.out.println(ad); }\n}\nclass Ogrenci extends Kisi {\n    Ogrenci(String ad) {\n        parent(ad);\n    }\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["super(ad);","Ogrenci(String ad) {","class Ogrenci extends Kisi {"],
      solution: "class Kisi {\n    Kisi(String ad) { System.out.println(ad); }\n}\nclass Ogrenci extends Kisi {\n    Ogrenci(String ad) {\n        super(ad);\n    }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/super\s*\(\s*ad\s*\)\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! super(ad) çağrısı doğru yapıldı. ✓" };
        return { ok: false, msg: "Hata: parent(ad) yerine super(ad); yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: METOT EZME (@OVERRIDE)",
      title: "3. Soru: Metot Ezme (@Override)",
      prompt: "Geliştirici üst sınıftan gelen sesCikar metodunu alt sınıfta özelleştirmek istiyor. Standart metot ezme anotasyonunu ekler misin?",
      presetCode: "class Kus {\n    void sesCikar() { System.out.println(\"Cik\"); }\n}\nclass Karga extends Kus {\n    void sesCikar() { System.out.println(\"Gak\"); }\n}\n// @Override anotasyonunu ekle:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["@Override\n    void sesCikar() {","@Override","void sesCikar() {"],
      solution: "class Kus {\n    void sesCikar() { System.out.println(\"Cik\"); }\n}\nclass Karga extends Kus {\n    @Override\n    void sesCikar() { System.out.println(\"Gak\"); }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/@Override\s+void\s+sesCikar/.test(clean)) return { ok: true, msg: "Mükemmel! @Override anotasyonu eklendi. ✓" };
        return { ok: false, msg: "Hata: void sesCikar() üstüne @Override ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: ÇOK BİÇİMLİLİK (POLYMORPHISM)",
      title: "4. Soru: Çok Biçimlilik (Polymorphism) Referansı",
      prompt: "Geliştirici üst sınıf türünde bir referansla alt sınıf nesnesini tutmak istiyor. Polimorfik nesne tanımlamasını yapar mısın?",
      presetCode: "class Sekil { }\nclass Daire extends Sekil { }\nDaire d = new Sekil();\n// Üst sınıf referansıyla alt sınıf nesnesi oluştur:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["Sekil s = new Daire();","new Daire()","class Daire extends Sekil { }"],
      solution: "class Sekil { }\nclass Daire extends Sekil { }\nSekil s = new Daire();",
      validator: (code) => {
        const clean = code.trim();
        if (/Sekil\s+\w+\s*=\s*new\s+Daire\s*\(\s*\)\s*;/.test(clean)) return { ok: true, msg: "Harika! Sekil s = new Daire(); polimorfizmi kuruldu. ✓" };
        return { ok: false, msg: "Hata: Sekil s = new Daire(); şeklinde tanımlayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: FINAL METOTLAR",
      title: "5. Soru: Final Metot Kuralı",
      prompt: "Geliştirici bir metodun alt sınıflar tarafından ezilmesini (override) kesin olarak yasaklamak istiyor. Metodu kitleyen anahtar kelimeyi ekler misin?",
      presetCode: "class Guvenlik {\n    public void sifrele() { System.out.println(\"AES\"); }\n}\n// sifrele metodunun ezilmesini engelle:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public final void sifrele() {","final ","public final void "],
      solution: "class Guvenlik {\n    public final void sifrele() { System.out.println(\"AES\"); }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+final\s+void\s+sifrele/.test(clean)) return { ok: true, msg: "Tebrikler! final ile metot kilitlendi. 11. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: public final void sifrele() şeklinde final ekleyin." };
      }
    }
  ],
  java_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: SOYUT SINIFLAR (ABSTRACT)",
      title: "1. Soru: Soyut Sınıf Tanımlama",
      prompt: "Geliştirici gövdesiz bir metot barındıran soyut bir sınıf oluşturmak istiyor ancak sınıf bildirimindeki eksikliği tamamlayabilir misin?",
      presetCode: "class Hayvan {\n    abstract void sesCikar();\n}\n// Sınıfı soyut (abstract) yap:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["abstract class Hayvan {","abstract void sesCikar();","abstract class "],
      solution: "abstract class Hayvan {\n    abstract void sesCikar();\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/abstract\s+class\s+Hayvan/.test(clean)) return { ok: true, msg: "Harika! abstract class Hayvan tanımlandı. ✓" };
        return { ok: false, msg: "Hata: 'abstract class Hayvan' şeklinde sınıfı soyut yapın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ARAYÜZLER (IMPLEMENTS)",
      title: "2. Soru: Arayüz Uygulama (Implements)",
      prompt: "Geliştirici Ucak sınıfının Ucabilir arayüzünü uygulamasını istiyor ancak yanlış anahtar kelime kullandığı için kod derlenmiyor. Doğru sözdizimini yazar mısın?",
      presetCode: "interface Ucabilir { void uc(); }\nclass Ucak extends Ucabilir {\n    public void uc() { System.out.println(\"Uçuyor\"); }\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["class Ucak implements Ucabilir {","implements Ucabilir","interface Ucabilir { void uc(); }"],
      solution: "interface Ucabilir { void uc(); }\nclass Ucak implements Ucabilir {\n    public void uc() { System.out.println(\"Uçuyor\"); }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/class\s+Ucak\s+implements\s+Ucabilir/.test(clean)) return { ok: true, msg: "Tebrikler! implements anahtar kelimesi uygulandı. ✓" };
        return { ok: false, msg: "Hata: extends yerine 'implements Ucabilir' kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ARAYÜZ METOT ERİŞİMİ",
      title: "3. Soru: Arayüz Metodu Erişim Seviyesi",
      prompt: "Geliştirici arayüzden gelen metodu sınıfta doldururken erişim belirtecini unuttuğu için derleme hatası alıyor. Arayüz metotlarının varsayılan erişim belirtecini ekler misin?",
      presetCode: "interface Cizilebilir { void ciz(); }\nclass Kare implements Cizilebilir {\n    void ciz() { System.out.println(\"Kare\"); }\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public void ciz() { System.out.println(\"Kare\"); }","public void ciz()","public "],
      solution: "interface Cizilebilir { void ciz(); }\nclass Kare implements Cizilebilir {\n    public void ciz() { System.out.println(\"Kare\"); }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+void\s+ciz\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Mükemmel! public void ciz() görünürlüğü korundu. ✓" };
        return { ok: false, msg: "Hata: metot başına 'public void ciz()' ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ÇOKLU ARAYÜZ (INTERFACE)",
      title: "4. Soru: Çoklu Arayüz Uygulama",
      prompt: "Geliştirici bir sınıfın hem Yazici hem de Tarayici arayüzlerini uygulamasını istiyor. Çoklu interface uygulama sözdizimini yazar mısın?",
      presetCode: "interface Yazici { void yaz(); }\ninterface Tarayici { void tara(); }\nclass CokFonksiyonlu implements Yazici and Tarayici { }\n// İki arayüzü virgülle bağla:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["class CokFonksiyonlu implements Yazici, Tarayici {","implements Yazici, Tarayici","public void yaz() {}"],
      solution: "interface Yazici { void yaz(); }\ninterface Tarayici { void tara(); }\nclass CokFonksiyonlu implements Yazici, Tarayici {\n    public void yaz() {}\n    public void tara() {}\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/class\s+CokFonksiyonlu\s+implements\s+Yazici\s*,\s*Tarayici/.test(clean)) return { ok: true, msg: "Harika! implements Yazici, Tarayici virgülle bağlandı. ✓" };
        return { ok: false, msg: "Hata: 'implements Yazici, Tarayici' şeklinde virgül kullanın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ENUMLAR",
      title: "5. Soru: Sabitler Kümesi (Enum)",
      prompt: "Geliştirici sipariş durumlarını temsil eden bir Enum oluşturmak istiyor. Doğru enum tanımını yapar mısın?",
      presetCode: "enum class Durum {\n    BEKLEMEDE, ONAYLANDI, IPTAL\n}\n// Doğru enum sözdizimini yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["enum Durum {","BEKLEMEDE, ONAYLANDI, IPTAL","enum Durum {\n    BEKLEMEDE, ONAYLANDI, IPTAL\n}"],
      solution: "enum Durum {\n    BEKLEMEDE, ONAYLANDI, IPTAL\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/enum\s+Durum\s*\{/.test(clean)) return { ok: true, msg: "Tebrikler! enum Durum başarıyla tanımlandı. 12. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'enum Durum { ... }' şeklinde class kelimesini kaldırın." };
      }
    }
  ],
  java_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: ARRAYLIST & WRAPPER",
      title: "1. Soru: ArrayList Tanımlama & Wrapper Sınıfı",
      prompt: "Geliştirici tamsayılardan oluşan dinamik bir liste kurmak istiyor ancak ilkel tip yazdığı için derleme hatası alıyor. Doğru Wrapper sınıfını yazar mısın?",
      presetCode: "import java.util.ArrayList;\nArrayList<int> sayilar = new ArrayList<>();\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["ArrayList<Integer> sayilar = new ArrayList<>();","ArrayList<Integer>","new ArrayList<>()"],
      solution: "import java.util.ArrayList;\nArrayList<Integer> sayilar = new ArrayList<>();",
      validator: (code) => {
        const clean = code.trim();
        if (/ArrayList\s*<\s*Integer\s*>\s*sayilar\s*=\s*new\s+ArrayList\s*<\s*>\s*\(\s*\)\s*;/.test(clean)) return { ok: true, msg: "Harika! ArrayList<Integer> Wrapper tipi uygulandı. ✓" };
        return { ok: false, msg: "Hata: ArrayList<Integer> sayilar = new ArrayList<>(); şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: LİSTEDEN OKUMA (.GET)",
      title: "2. Soru: Listeden Eleman Okuma",
      prompt: "Geliştirici listenin ilk elemanını ekrana basmak istiyor ancak dizi köşeli parantezi kullandığı için hata alıyor. Liste okuma metodunu uygular mısın?",
      presetCode: "import java.util.ArrayList;\nArrayList<String> isimler = new ArrayList<>();\nisimler.add(\"Bengi\");\nSystem.out.println(isimler[0]);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["System.out.println(isimler.get(0));","isimler.get(0)","isimler.add(\"Bengi\");"],
      solution: "import java.util.ArrayList;\nArrayList<String> isimler = new ArrayList<>();\nisimler.add(\"Bengi\");\nSystem.out.println(isimler.get(0));",
      validator: (code) => {
        const clean = code.trim();
        if (/isimler\.get\s*\(\s*0\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! isimler.get(0) ile eleman okundu. ✓" };
        return { ok: false, msg: "Hata: System.out.println(isimler.get(0)); şeklinde çağırın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: HASHMAP DEĞER EKLEME (.PUT)",
      title: "3. Soru: HashMap Değer Ekleme (Put)",
      prompt: "Geliştirici öğrenci notunu haritaya kaydetmek istiyor ancak liste metoduyla karıştırdığı için hata alıyor. HashMap veri ekleme metodunu yazar mısın?",
      presetCode: "import java.util.HashMap;\nHashMap<String, Integer> notlar = new HashMap<>();\nnotlar.add(\"Matematik\", 95);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["notlar.put(\"Matematik\", 95);","notlar.put(","new HashMap<>()"],
      solution: "import java.util.HashMap;\nHashMap<String, Integer> notlar = new HashMap<>();\nnotlar.put(\"Matematik\", 95);",
      validator: (code) => {
        const clean = code.trim();
        if (/notlar\.put\s*\(\s*"Matematik"\s*,\s*95\s*\)\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! notlar.put('Matematik', 95) haritaya eklendi. ✓" };
        return { ok: false, msg: 'Hata: notlar.put("Matematik", 95); şeklinde put kullanın.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: LİSTEDEN SİLME (.REMOVE)",
      title: "4. Soru: Listeden Eleman Silme",
      prompt: "Geliştirici listenin 0. indeksindeki elemanı listeden kaldırmak istiyor. Doğru silme metodunu çağırır mısın?",
      presetCode: "import java.util.ArrayList;\nArrayList<String> diller = new ArrayList<>();\ndiller.add(\"Java\");\ndiller.delete(0);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["diller.remove(0);","diller.remove","diller.add(\"Java\");"],
      solution: "import java.util.ArrayList;\nArrayList<String> diller = new ArrayList<>();\ndiller.add(\"Java\");\ndiller.remove(0);",
      validator: (code) => {
        const clean = code.trim();
        if (/diller\.remove\s*\(\s*0\s*\)\s*;/.test(clean)) return { ok: true, msg: "Harika! diller.remove(0) metodu çalıştırıldı. ✓" };
        return { ok: false, msg: "Hata: diller.remove(0); şeklinde remove kullanın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: TEKİL KÜMELER (HASHSET)",
      title: "5. Soru: Benzersiz Eleman Kümesi (HashSet)",
      prompt: "Geliştirici tekrar eden sayıları otomatik eleyen bir küme oluşturmak istiyor. Benzersiz küme koleksiyonuna eleman ekleme metodunu yazar mısın?",
      presetCode: "import java.util.HashSet;\nHashSet<Integer> tekiller = new HashSet<>();\ntekiller.put(5);\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["tekiller.add(5);","tekiller.add","HashSet<Integer>"],
      solution: "import java.util.HashSet;\nHashSet<Integer> tekiller = new HashSet<>();\ntekiller.add(5);",
      validator: (code) => {
        const clean = code.trim();
        if (/tekiller\.add\s*\(\s*5\s*\)\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! HashSet tekiller.add(5) eklendi. 13. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: tekiller.add(5); şeklinde add metodunu kullanın." };
      }
    }
  ],
  java_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: TRY-CATCH BLOKLARI",
      title: "1. Soru: Sıfıra Bölme Hatasını Yakalama",
      prompt: "Geliştirici sıfıra bölme işleminde programın çökmesini önleyip ekrana \"Hata Oluştu\" yazdırmak istiyor. try-catch bloğunu tamamlayabilir misin?",
      presetCode: "int a = 10, b = 0;\nint bolum = a / b;\nSystem.out.println(bolum);\n// try-catch ile sarmala:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["try {","} catch (ArithmeticException e) {","System.out.println(\"Hata Oluştu\");"],
      solution: "try {\n    int a = 10, b = 0;\n    int bolum = a / b;\n    System.out.println(bolum);\n} catch (ArithmeticException e) {\n    System.out.println(\"Hata Oluştu\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/try\s*\{[\s\S]*\}\s*catch\s*\(\s*(ArithmeticException|Exception)\s+\w+\s*\)\s*\{[\s\S]*Hata Oluştu/.test(clean)) return { ok: true, msg: "Harika! try-catch ile ArithmeticException yakalandı. ✓" };
        return { ok: false, msg: 'Hata: try { ... } catch (ArithmeticException e) { System.out.println("Hata Oluştu"); } kurun.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: NUMBERFORMATEXCEPTION",
      title: "2. Soru: Sayı Dönüşüm Hatası (NumberFormatException)",
      prompt: "Geliştirici metin halindeki geçersiz bir girdiyi tamsayıya çevirirken oluşan hatayı yakalamak istiyor. İlgili hata türünü catch parametresine yazar mısın?",
      presetCode: "try {\n    int sayi = Integer.parseInt(\"abc\");\n} catch (NullPointerException e) {\n    System.out.println(\"Geçersiz Sayı\");\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["catch (NumberFormatException e) {","System.out.println(\"Geçersiz Sayı\");","Integer.parseInt(\"abc\")"],
      solution: "try {\n    int sayi = Integer.parseInt(\"abc\");\n} catch (NumberFormatException e) {\n    System.out.println(\"Geçersiz Sayı\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/catch\s*\(\s*NumberFormatException\s+e\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! NumberFormatException doğru yakalandı. ✓" };
        return { ok: false, msg: "Hata: catch (NumberFormatException e) şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: FINALLY BLOĞU",
      title: "3. Soru: Garanti Çalışan Blok (Finally)",
      prompt: "Geliştirici hata olsun ya da olmasın her durumda bağlantının kapandığını ekrana basmak istiyor. Her senaryoda çalışan garanti bloğunu ekler misin?",
      presetCode: "try {\n    int x = 5;\n} catch (Exception e) {\n    System.out.println(\"Hata\");\n}\nlast {\n    System.out.println(\"Tamamlandı\");\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["finally {\n    System.out.println(\"Tamamlandı\");\n}","finally {","System.out.println(\"Tamamlandı\");"],
      solution: "try {\n    int x = 5;\n} catch (Exception e) {\n    System.out.println(\"Hata\");\n} finally {\n    System.out.println(\"Tamamlandı\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/finally\s*\{[\s\S]*Tamamlandı/.test(clean)) return { ok: true, msg: "Mükemmel! finally bloğu garantilendi. ✓" };
        return { ok: false, msg: 'Hata: last yerine finally { System.out.println("Tamamlandı"); } yazın.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: MANUEL HATA FIRLATMA (THROW)",
      title: "4. Soru: Manuel Hata Fırlatma (Throw)",
      prompt: "Geliştirici yaş değeri 0'dan küçük girildiğinde manuel olarak IllegalArgumentException fırlatmak istiyor. Hata fırlatma anahtar kelimesini ekler misin?",
      presetCode: "int yas = -1;\nif (yas < 0) {\n    raise new IllegalArgumentException(\"Yaş negatif olamaz\");\n}\n// Kodunu aşağıya doğru şekilde yaz:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["throw new IllegalArgumentException(\"Yaş negatif olamaz\");","throw new ","if (yas < 0) {"],
      solution: "int yas = -1;\nif (yas < 0) {\n    throw new IllegalArgumentException(\"Yaş negatif olamaz\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/throw\s+new\s+IllegalArgumentException\s*\(\s*"Yaş negatif olamaz"\s*\)\s*;/.test(clean)) return { ok: true, msg: "Harika! throw new IllegalArgumentException(...) fırlatıldı. ✓" };
        return { ok: false, msg: 'Hata: raise yerine throw new IllegalArgumentException("Yaş negatif olamaz"); yazın.' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: DOSYA YAZMA & KAPATMA (FILEWRITER)",
      title: "5. Soru: Dosyaya Yazma ve Kapatma (FileWriter)",
      prompt: "Geliştirici dosyaya \"Java 100\" yazıp dosyayı güvenle kapatmak istiyor ancak yazma işlemini kapatmayı unuttuğu için veriler diske kaydedilmiyor. Dosyayı kapatma komutunu ekler misin?",
      presetCode: "import java.io.FileWriter;\nimport java.io.IOException;\n\ntry {\n    FileWriter yazar = new FileWriter(\"not.txt\");\n    yazar.write(\"Java 100\");\n} catch (IOException e) {\n    System.out.println(\"Dosya Hatası\");\n}\n// yazar.close() çağrısını ekle:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["yazar.close();","yazar.write(\"Java 100\");\n    yazar.close();","FileWriter yazar = new FileWriter(\"not.txt\");"],
      solution: "import java.io.FileWriter;\nimport java.io.IOException;\n\ntry {\n    FileWriter yazar = new FileWriter(\"not.txt\");\n    yazar.write(\"Java 100\");\n    yazar.close();\n} catch (IOException e) {\n    System.out.println(\"Dosya Hatası\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/yazar\.close\s*\(\s*\)\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! yazar.close() eklendi. Java Master Müfredatı Tamamlandı! 🚀🏆" };
        return { ok: false, msg: "Hata: try bloğunun içine yazar.close(); ekleyin." };
      }
    }
  ]
};

// Eski id eşleştirmeleri
CHALLENGES_DATABASE.p1 = CHALLENGES_DATABASE.python_1;
CHALLENGES_DATABASE.p2 = CHALLENGES_DATABASE.python_2;
CHALLENGES_DATABASE.p3 = CHALLENGES_DATABASE.python_3;
CHALLENGES_DATABASE.p4 = CHALLENGES_DATABASE.python_4;
CHALLENGES_DATABASE.p5 = CHALLENGES_DATABASE.python_5;
CHALLENGES_DATABASE.p6 = CHALLENGES_DATABASE.python_6;
CHALLENGES_DATABASE.p7 = CHALLENGES_DATABASE.python_7;
CHALLENGES_DATABASE.p8 = CHALLENGES_DATABASE.python_8;
CHALLENGES_DATABASE.p9 = CHALLENGES_DATABASE.python_9;
CHALLENGES_DATABASE.p10 = CHALLENGES_DATABASE.python_10;
CHALLENGES_DATABASE.p11 = CHALLENGES_DATABASE.python_11;
CHALLENGES_DATABASE.p12 = CHALLENGES_DATABASE.python_12;
CHALLENGES_DATABASE.p13 = CHALLENGES_DATABASE.python_13;
CHALLENGES_DATABASE.p14 = CHALLENGES_DATABASE.python_14;

// Java Challenge Aliasları
CHALLENGES_DATABASE.j1 = CHALLENGES_DATABASE.java_1;
CHALLENGES_DATABASE.j2 = CHALLENGES_DATABASE.java_2;
CHALLENGES_DATABASE.j3 = CHALLENGES_DATABASE.java_3;
CHALLENGES_DATABASE.j4 = CHALLENGES_DATABASE.java_4;
CHALLENGES_DATABASE.j5 = CHALLENGES_DATABASE.java_5;
CHALLENGES_DATABASE.j6 = CHALLENGES_DATABASE.java_6;
CHALLENGES_DATABASE.j7 = CHALLENGES_DATABASE.java_7;
CHALLENGES_DATABASE.j8 = CHALLENGES_DATABASE.java_8;
CHALLENGES_DATABASE.j9 = CHALLENGES_DATABASE.java_9;
CHALLENGES_DATABASE.j10 = CHALLENGES_DATABASE.java_10;
CHALLENGES_DATABASE.j11 = CHALLENGES_DATABASE.java_11;
CHALLENGES_DATABASE.j12 = CHALLENGES_DATABASE.java_12;
CHALLENGES_DATABASE.j13 = CHALLENGES_DATABASE.java_13;
CHALLENGES_DATABASE.j14 = CHALLENGES_DATABASE.java_14;


let currentChallengeIndex = 0;
let currentChallengesList = [];

function loadNodeFarmGame() {
  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
  const topicId = state.selectedNodeId || `${curLang.id}_1` || 'python_1';

  currentChallengesList = CHALLENGES_DATABASE[topicId] || CHALLENGES_DATABASE.python_1;
  currentChallengeIndex = 0;

  renderCurrentChallenge();
}

function renderCurrentChallenge() {
  const challenge = currentChallengesList[currentChallengeIndex] || currentChallengesList[0];

  const titleEl = document.getElementById('coding-topic-title');
  const subEl = document.getElementById('coding-module-subtitle');
  const stepPill = document.getElementById('step-pill');
  const progBar = document.getElementById('coding-step-progress');
  const promptEl = document.getElementById('challenge-prompt');
  const presetEl = document.getElementById('ide-code-preset');
  const filenameEl = document.getElementById('ide-filename');
  const keysBar = document.getElementById('quick-keys-bar');

  if (titleEl) titleEl.textContent = challenge.title;
  if (subEl) subEl.textContent = challenge.moduleSubtitle;
  if (stepPill) stepPill.textContent = `${challenge.stepNum}/${challenge.totalSteps}`;
  if (progBar) progBar.style.width = `${(challenge.stepNum / challenge.totalSteps) * 100}%`;
  if (promptEl) promptEl.innerHTML = challenge.prompt;
  if (presetEl) presetEl.innerHTML = challenge.presetCode;
  if (filenameEl) filenameEl.textContent = challenge.filename;

  // İpucu Paneli ve Kod Parçacıklarını Güncelle
  const hintPanel = document.getElementById('hint-panel');
  if (hintPanel) hintPanel.style.display = 'none'; // Yeni soruya geçildiğinde kapalı başlasın

  if (keysBar) {
    keysBar.innerHTML = '';
    challenge.quickKeys.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'key-btn';
      btn.textContent = k.trim() || 'Tab';
      btn.addEventListener('click', () => {
        insertTextAtCursor(dom.codeInput, k);
      });
      keysBar.appendChild(btn);
    });
  }

  dom.codeInput.value = '';
  updateLineNumbers();
}

function insertTextAtCursor(input, text) {
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const val = input.value;
  input.value = val.substring(0, start) + text + val.substring(end);
  input.selectionStart = input.selectionEnd = start + text.length;
  input.focus();
  updateLineNumbers();
  sfx.playPop();
}

function updateLineNumbers() {
  const presetLines = 4; // preset code satırları
  const userLines = dom.codeInput.value ? dom.codeInput.value.split('\n').length : 1;
  const total = presetLines + Math.max(userLines, 3);
  const lineNumEl = document.getElementById('ide-line-numbers');
  if (lineNumEl) {
    lineNumEl.innerHTML = Array.from({ length: total }, (_, i) => i + 1).join('<br>');
  }
}

function runCurrentCode() {
  const challenge = currentChallengesList[currentChallengeIndex] || currentChallengesList[0];
  const userCode = dom.codeInput.value;

  logToTerminal(`⚡ <strong>Testler Çalıştırılıyor (${challenge.filename})...</strong>`, 'info');

  const result = challenge.validator(userCode);

  if (result.ok) {
    sfx.playSuccess();
    logToTerminal(`✅ ${result.msg}`, 'success');
    
    state.xp += challenge.stepNum * 40;
    state.harvestCount += 1;
    updateGlobalStats();

    if (currentChallengeIndex + 1 < currentChallengesList.length) {
      currentChallengeIndex += 1;
      logToTerminal(`🎉 Harika! Sıradaki soruya geçiliyor...`, 'success');
      setTimeout(() => {
        renderCurrentChallenge();
      }, 600);
    } else {
      // Modül bitti, konuyu tamamla ve sıradaki konuyu aç
      state.completedNodes.add(state.selectedNodeId);
      completeCurrentTopic(state.selectedLangId, state.selectedNodeId);
      setTimeout(() => {
        showVictoryModal();
      }, 700);
    }
  } else {
    sfx.playError();
    logToTerminal(`❌ ${result.msg}`, 'error');
  }
}

function logToTerminal(message, type = 'info') {
  const div = document.createElement('div');
  div.className = `log log-${type}`;
  div.innerHTML = message;
  dom.terminalOutput.appendChild(div);
  dom.terminalOutput.scrollTop = dom.terminalOutput.scrollHeight;
}

function updateGlobalStats() {
  dom.statXp.textContent = `${state.xp || 0} XP`;
  dom.statHarvest.textContent = `${state.harvestCount || 0} Görev`;

  if (state.xp >= 1500) {
    dom.statMastery.textContent = 'Kıdemli';
  } else if (state.xp >= 600) {
    dom.statMastery.textContent = 'Yazılımcı';
  } else {
    dom.statMastery.textContent = 'Çırak';
  }
}

function showVictoryModal() {
  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
  sfx.playVictory();

  dom.victoryTitle.textContent = `Tebrikler! Modül Tamamlandı`;
  dom.victorySubtitle.textContent = `Bu konudaki tüm adımları başarıyla tamamladın ve Şehre yeni bir yapı kazandırdın!`;
  dom.victoryBadgeText.textContent = `${curLang.name} Modülü Onaylandı`;

  dom.finalXp.textContent = `+150 XP`;
  dom.finalCrops.textContent = `5 Adım`;
  dom.victoryModal.classList.add('open');
}


// =========================================================================
// 🔐 MONGODB BULUT KİMLİK DOĞRULAMA & SENKRONİZASYON MOTORU (Cloud Auth & Sync)
// =========================================================================

const API_BASE_URL = (typeof window !== 'undefined' && window.location && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'))
  ? 'http://localhost:3000/api'
  : 'https://coding-game-backend.onrender.com/api'; // Vercel/Render veya sunucu URL'si

const authManager = {
  token: null,
  user: null,

  init() {
    try {
      this.token = localStorage.getItem('codegame_token') || null;
      const savedUser = localStorage.getItem('codegame_user');
      if (savedUser) this.user = JSON.parse(savedUser);
    } catch (e) {}

    this.updateHeaderUI();
    if (this.token) {
      this.verifyAndFetchProfile();
      this.loadCloudProgress();
    }
  },

  isLoggedIn() {
    return !!this.token && !!this.user;
  },

  async register(username, email, password) {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.msg || 'Kayıt başarısız.');

      this.setSession(data.token, data.user);
      await this.syncCurrentLocalProgress();
      return { ok: true, msg: data.msg, user: data.user, isCloud: true };
    } catch (err) {
      console.warn('Backend API erişilemedi, yerel hesap açılıyor:', err.message);
      // Yerel Güvenli Fallback Hesabı
      if (!username || !email || !password) {
        return { ok: false, msg: 'Tüm alanları doldurunuz.' };
      }
      if (password.length < 6) {
        return { ok: false, msg: 'Şifre en az 6 karakter olmalıdır.' };
      }

      const localUser = {
        id: 'local_' + Date.now(),
        username: username.trim(),
        email: email.trim().toLowerCase(),
        avatar: '🧑‍🌾',
        totalXp: state.xp || 0
      };
      const localToken = 'local_jwt_' + btoa(email);
      
      // Yerel hesap listesine kaydet
      const localAccounts = JSON.parse(localStorage.getItem('codegame_local_users') || '{}');
      localAccounts[email.toLowerCase()] = { ...localUser, password };
      localStorage.setItem('codegame_local_users', JSON.stringify(localAccounts));

      this.setSession(localToken, localUser);
      return {
        ok: true,
        msg: 'Hesap oluşturuldu! (Lokalde node server.js çalıştırdığında MongoDB\'ye otomatik aktarılacak)',
        user: localUser,
        isCloud: false
      };
    }
  },

  async login(email, password) {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.msg || 'Giriş başarısız.');

      this.setSession(data.token, data.user);
      await this.loadCloudProgress();
      return { ok: true, msg: data.msg, user: data.user, isCloud: true };
    } catch (err) {
      console.warn('Backend API erişilemedi, yerel giriş deneniyor:', err.message);
      // Yerel Hesap Kontrolü
      const localAccounts = JSON.parse(localStorage.getItem('codegame_local_users') || '{}');
      const cleanEmail = (email || '').trim().toLowerCase();
      const existing = localAccounts[cleanEmail];

      if (existing && existing.password === password) {
        const localToken = 'local_jwt_' + btoa(cleanEmail);
        this.setSession(localToken, existing);
        return { ok: true, msg: `Giriş başarılı! Hoş geldin, ${existing.username} (Yerel Mod)`, user: existing, isCloud: false };
      }

      return {
        ok: false,
        msg: 'Sunucuya bağlanılamadı. Lokalde `node server.js` komutunu çalıştırdığınızdan emin olun.'
      };
    }
  },

  setSession(token, user) {
    this.token = token;
    this.user = user;
    try {
      localStorage.setItem('codegame_token', token);
      localStorage.setItem('codegame_user', JSON.stringify(user));
    } catch (e) {}
    this.updateHeaderUI();
  },

  logout() {
    this.token = null;
    this.user = null;
    try {
      localStorage.removeItem('codegame_token');
      localStorage.removeItem('codegame_user');
    } catch (e) {}
    this.updateHeaderUI();
    if (typeof logToTerminal === 'function') {
      logToTerminal('🚪 Oturum kapatıldı. Misafir moduna geçildi.', 'info');
    }
  },

  async verifyAndFetchProfile() {
    if (!this.token) return;
    try {
      const res = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { 'Authorization': `Bearer ${this.token}` }
      });
      const data = await res.json();
      if (data.ok && data.user) {
        this.user = data.user;
        localStorage.setItem('codegame_user', JSON.stringify(data.user));
        this.updateHeaderUI();
      } else {
        this.logout();
      }
    } catch (e) {}
  },

  async syncCurrentLocalProgress(langId = state.selectedLangId) {
    if (!this.token) return;
    const curLang = LANGUAGES_DB.find(l => l.id === langId) || LANGUAGES_DB[0];
    const topics = getLanguageTopics(curLang.id);
    const completedTopics = topics.filter(t => t.status === 'done').map(t => t.id);

    try {
      const res = await fetch(`${API_BASE_URL}/progress/sync`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify({
          langId: curLang.id,
          completedTopics,
          completedCount: completedTopics.length,
          xp: state.xp
        })
      });
      const data = await res.json();
      if (data.ok) {
        const cloudStatusEl = document.getElementById('header-cloud-status');
        if (cloudStatusEl) {
          cloudStatusEl.textContent = '☁️ Bulut Senkronize';
          cloudStatusEl.style.color = '#10b981';
        }
      }
    } catch (e) {
      console.warn('Bulut senkronizasyonu başarısız (çevrimdışı):', e);
    }
  },

  async loadCloudProgress() {
    if (!this.token) return;
    try {
      const res = await fetch(`${API_BASE_URL}/progress`, {
        headers: { 'Authorization': `Bearer ${this.token}` }
      });
      const data = await res.json();
      if (data.ok && data.languages) {
        let totalCloudXp = 0;

        for (const [langKey, langProgress] of Object.entries(data.languages)) {
          totalCloudXp += (langProgress.xp || 0);
          if (!userTopicsState[langKey]) {
            getLanguageTopics(langKey);
          }
          const topics = userTopicsState[langKey];
          if (topics && Array.isArray(langProgress.completedTopics)) {
            langProgress.completedTopics.forEach(doneId => {
              const t = topics.find(item => item.id === doneId);
              if (t) t.status = 'done';
            });
            // Tamamlananlardan sonraki ilk kilitli olanı aktif yap
            const nextLockedIdx = topics.findIndex(t => t.status === 'locked');
            if (nextLockedIdx !== -1) {
              topics[nextLockedIdx].status = 'active';
            }
          }
        }

        if (totalCloudXp > 0) {
          state.xp = Math.max(state.xp, totalCloudXp);
          updateGlobalStats();
        }

        const completedCount = getLanguageTopics(state.selectedLangId).filter(t => t.status === 'done').length;
        renderCityVisual(completedCount);
        renderSkillTree();
      }
    } catch (e) {
      console.warn('Bulut ilerlemesi çekilemedi:', e);
    }
  },

  updateHeaderUI() {
    const btnOpenAuth = document.getElementById('btn-open-auth');
    const userProfileCard = document.getElementById('user-profile-card');
    const headerUsername = document.getElementById('header-username');
    const headerAvatar = document.getElementById('header-user-avatar');

    if (this.isLoggedIn()) {
      if (btnOpenAuth) btnOpenAuth.style.display = 'none';
      if (userProfileCard) userProfileCard.style.display = 'flex';
      if (headerUsername) headerUsername.textContent = this.user.username || 'Kullanıcı';
      if (headerAvatar) headerAvatar.textContent = this.user.avatar || '🧑‍🌾';
    } else {
      if (btnOpenAuth) btnOpenAuth.style.display = 'flex';
      if (userProfileCard) userProfileCard.style.display = 'none';
    }
  }
};

// --- 9. EVENT LISTENERS ---

dom.navBrand.addEventListener('click', () => switchView('languages'));
if (dom.navBtnHome) dom.navBtnHome.addEventListener('click', () => switchView('languages'));
if (dom.navBtnRoadmap) dom.navBtnRoadmap.addEventListener('click', () => switchView('roadmap'));
if (dom.navBtnGame) dom.navBtnGame.addEventListener('click', () => switchView('game'));
dom.btnBackToLanguages.addEventListener('click', () => switchView('languages'));
dom.btnBackToRoadmap.addEventListener('click', () => switchView('roadmap'));

if (dom.languageSearchInput) {
  dom.languageSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderLanguages();
  });
}

dom.btnRun.addEventListener('click', runCurrentCode);

const btnCloseHint = document.getElementById('btn-close-hint');

dom.btnHint.addEventListener('click', () => {
  const hintPanel = document.getElementById('hint-panel');
  const challenge = currentChallengesList[currentChallengeIndex] || currentChallengesList[0];

  if (hintPanel) {
    const isHidden = hintPanel.style.display === 'none' || !hintPanel.style.display;
    hintPanel.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      hintPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  logToTerminal('💡 <strong>İpucu:</strong> Kod parçacıkları paneli açıldı. İhtiyacın olan parçaları tıklayarak editöre ekleyebilirsin.', 'hint');
  sfx.playPop();
});

if (btnCloseHint) {
  btnCloseHint.addEventListener('click', () => {
    const hintPanel = document.getElementById('hint-panel');
    if (hintPanel) hintPanel.style.display = 'none';
    sfx.playPop();
  });
}

dom.btnClearConsole.addEventListener('click', () => {
  dom.terminalOutput.innerHTML = '';
});

// Hızlı Modül Atlama Fonksiyonu (Alıştırmayı Tamamla ve Sonraki Konuya Geç)
function skipEntireModule() {
  state.completedNodes.add(state.selectedNodeId);
  completeCurrentTopic(state.selectedLangId, state.selectedNodeId);
  state.xp += 150;
  state.harvestCount += 5;
  updateGlobalStats();
  sfx.playVictory();
  logToTerminal('⚡ <strong>Alıştırma Atlandı & Modül Başarıyla Tamamlandı!</strong>', 'success');
  showVictoryModal();
}

const btnSkipModule = document.getElementById('btn-skip-module') || document.getElementById('btn-skip-step');
if (btnSkipModule) {
  btnSkipModule.addEventListener('click', skipEntireModule);
}

const btnUnlockAll = document.getElementById('btn-unlock-all');
let allUnlocked = false;
if (btnUnlockAll) {
  btnUnlockAll.addEventListener('click', () => {
    const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
    const topics = getLanguageTopics(curLang.id);
    allUnlocked = !allUnlocked;
    topics.forEach((t, i) => {
      t.status = allUnlocked ? 'active' : (i === 0 ? 'active' : 'locked');
    });
    btnUnlockAll.innerHTML = allUnlocked ? '<span>🔒 Kilitleri Aç/Kapat</span>' : '<span>🔓 Tüm Kilitleri Aç</span>';
    sfx.playSuccess();
    renderSkillTree();
  });
}

// Editör Otomatik Karakter Kapatma (Auto-Closing Pairs) & Akıllı Tuş Yönetimi
const AUTO_PAIRS = {
  '(': ')',
  '[': ']',
  '{': '}',
  '"': '"',
  "'": "'"
};

const CLOSING_CHARS = new Set([')', ']', '}', '"', "'"]);

dom.codeInput.addEventListener('keydown', (e) => {
  const input = dom.codeInput;
  const start = input.selectionStart;
  const end = input.selectionEnd;
  const val = input.value;

  // 1. Kodu Çalıştır (Ctrl + Enter)
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    runCurrentCode();
    return;
  }

  // 2. Modülü Atla (Ctrl + .)
  if ((e.ctrlKey || e.metaKey) && (e.key === '.' || e.key === '>')) {
    e.preventDefault();
    skipEntireModule();
    return;
  }

  // 3. Tab Tuşu (4 Boşluk Girinti)
  if (e.key === 'Tab') {
    e.preventDefault();
    const tabSpaces = '    ';
    input.value = val.substring(0, start) + tabSpaces + val.substring(end);
    input.selectionStart = input.selectionEnd = start + tabSpaces.length;
    updateLineNumbers();
    return;
  }

  // 4. Kapanış Karakterinin Üzerinden Atlama (Skip Over Closing Character)
  if (CLOSING_CHARS.has(e.key) && start === end && val[start] === e.key) {
    e.preventDefault();
    input.selectionStart = input.selectionEnd = start + 1;
    return;
  }

  // 5. Otomatik Çift Kapatma (Auto-Closing: (, [, {, ", ')
  if (AUTO_PAIRS[e.key]) {
    e.preventDefault();
    const openChar = e.key;
    const closeChar = AUTO_PAIRS[openChar];
    const selectedText = val.substring(start, end);

    // Eğer bir metin seçiliyse onu parantez/tırnak içine al
    input.value = val.substring(0, start) + openChar + selectedText + closeChar + val.substring(end);
    input.selectionStart = start + 1;
    input.selectionEnd = end + 1;
    updateLineNumbers();
    return;
  }

  // 6. Akıllı Silme (Backspace ile boş çifti silme: () -> silince ikisi de gitsin)
  if (e.key === 'Backspace' && start === end && start > 0) {
    const prevChar = val[start - 1];
    const nextChar = val[start];
    if (AUTO_PAIRS[prevChar] === nextChar) {
      e.preventDefault();
      input.value = val.substring(0, start - 1) + val.substring(start + 1);
      input.selectionStart = input.selectionEnd = start - 1;
      updateLineNumbers();
      return;
    }
  }
});

dom.codeInput.addEventListener('input', updateLineNumbers);

dom.btnSoundToggle.addEventListener('click', () => {
  sfx.enabled = !sfx.enabled;
  dom.btnSoundToggle.textContent = sfx.enabled ? '🔊' : '🔇';
  dom.btnSoundToggle.title = sfx.enabled ? 'Sesi Kapat' : 'Sesi Aç';
});

dom.btnRestart.addEventListener('click', () => {
  dom.victoryModal.classList.remove('open');
  loadNodeFarmGame();
  logToTerminal('🔄 Alıştırma sıfırlandı.', 'info');
});

dom.btnModalRoadmap.addEventListener('click', () => {
  dom.victoryModal.classList.remove('open');
  switchView('roadmap');
});

// Hızlı Özet Modal Butonları
const btnStartPractice = document.getElementById('btn-start-practice');
if (btnStartPractice) {
  btnStartPractice.addEventListener('click', () => {
    closeTopicReviewModal();
    sfx.playPop();
    switchView('game');
  });
}

const btnDismissReview = document.getElementById('btn-dismiss-review');
if (btnDismissReview) {
  btnDismissReview.addEventListener('click', () => {
    closeTopicReviewModal();
    sfx.playPop();
  });
}

const topicReviewModal = document.getElementById('topic-review-modal');
if (topicReviewModal) {
  topicReviewModal.addEventListener('click', (e) => {
    if (e.target === topicReviewModal) {
      closeTopicReviewModal();
    }
  });
}

// Başlangıç Yüklemesi
switchView('languages');

updateGlobalStats();


// --- AUTH MODAL ETKİLEŞİMLERİ ---
let currentAuthMode = 'login'; // 'login' | 'register'

function openAuthModal(mode = 'login') {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  setAuthMode(mode);
  modal.classList.add('open');
  sfx.playPop();
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('open');
  clearAuthAlert();
}

function setAuthMode(mode) {
  currentAuthMode = mode;
  const tabLogin = document.getElementById('tab-btn-login');
  const tabRegister = document.getElementById('tab-btn-register');
  const groupUsername = document.getElementById('group-username');
  const authTitle = document.getElementById('auth-title');
  const authBtnText = document.getElementById('auth-btn-text');
  const switchText = document.getElementById('auth-footer-switch-text');
  const switchBtn = document.getElementById('btn-toggle-auth-mode');
  const inputUsername = document.getElementById('auth-input-username');

  clearAuthAlert();

  if (mode === 'register') {
    if (tabLogin) tabLogin.classList.remove('active');
    if (tabRegister) tabRegister.classList.add('active');
    if (groupUsername) groupUsername.style.display = 'flex';
    if (inputUsername) inputUsername.required = true;
    if (authTitle) authTitle.textContent = 'Yeni CodeFarm Hesabı Aç';
    if (authBtnText) authBtnText.textContent = 'Kayıt Ol ve Başla 🎉';
    if (switchText) switchText.textContent = 'Zaten bir hesabın var mı?';
    if (switchBtn) switchBtn.textContent = 'Giriş Yap';
  } else {
    if (tabLogin) tabLogin.classList.add('active');
    if (tabRegister) tabRegister.classList.remove('active');
    if (groupUsername) groupUsername.style.display = 'none';
    if (inputUsername) inputUsername.required = false;
    if (authTitle) authTitle.textContent = 'CodeFarm Hesabına Giriş Yap';
    if (authBtnText) authBtnText.textContent = 'Giriş Yap 🚀';
    if (switchText) switchText.textContent = 'Hesabın yok mu?';
    if (switchBtn) switchBtn.textContent = 'Kayıt Ol';
  }
}

function showAuthAlert(msg, type = 'error') {
  const alertBox = document.getElementById('auth-alert-box');
  if (!alertBox) return;
  alertBox.className = `auth-alert-box ${type}`;
  alertBox.textContent = msg;
  alertBox.style.display = 'block';
}

function clearAuthAlert() {
  const alertBox = document.getElementById('auth-alert-box');
  if (alertBox) alertBox.style.display = 'none';
}

const btnOpenAuth = document.getElementById('btn-open-auth');
if (btnOpenAuth) {
  btnOpenAuth.addEventListener('click', () => openAuthModal('login'));
}

const btnCloseAuth = document.getElementById('btn-close-auth-modal');
if (btnCloseAuth) {
  btnCloseAuth.addEventListener('click', closeAuthModal);
}

const authModalOverlay = document.getElementById('auth-modal');
if (authModalOverlay) {
  authModalOverlay.addEventListener('click', (e) => {
    if (e.target === authModalOverlay) closeAuthModal();
  });
}

const tabLogin = document.getElementById('tab-btn-login');
if (tabLogin) {
  tabLogin.addEventListener('click', () => setAuthMode('login'));
}

const tabRegister = document.getElementById('tab-btn-register');
if (tabRegister) {
  tabRegister.addEventListener('click', () => setAuthMode('register'));
}

const btnToggleAuth = document.getElementById('btn-toggle-auth-mode');
if (btnToggleAuth) {
  btnToggleAuth.addEventListener('click', () => {
    setAuthMode(currentAuthMode === 'login' ? 'register' : 'login');
  });
}

const btnHeaderLogout = document.getElementById('btn-header-logout');
if (btnHeaderLogout) {
  btnHeaderLogout.addEventListener('click', () => {
    authManager.logout();
    sfx.playPop();
  });
}

const authForm = document.getElementById('auth-form');
if (authForm) {
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('auth-input-email').value;
    const password = document.getElementById('auth-input-password').value;
    const username = document.getElementById('auth-input-username')?.value;
    const submitBtn = document.getElementById('btn-auth-submit');
    const spinner = document.getElementById('auth-spinner');
    const btnText = document.getElementById('auth-btn-text');

    clearAuthAlert();
    if (submitBtn) submitBtn.disabled = true;
    if (spinner) spinner.style.display = 'block';
    if (btnText) btnText.style.display = 'none';

    let result;
    if (currentAuthMode === 'register') {
      result = await authManager.register(username, email, password);
    } else {
      result = await authManager.login(email, password);
    }

    if (submitBtn) submitBtn.disabled = false;
    if (spinner) spinner.style.display = 'none';
    if (btnText) btnText.style.display = 'inline';

    if (result.ok) {
      showAuthAlert(result.msg || 'İşlem başarılı!', 'success');
      sfx.playSuccess();
      setTimeout(() => {
        closeAuthModal();
        if (typeof logToTerminal === 'function') {
          logToTerminal(`🌟 <strong>Hoş geldin ${result.user.username}!</strong> İlerlemelerin MongoDB bulutuna kaydediliyor.`, 'success');
        }
      }, 1000);
    } else {
      showAuthAlert(result.msg || 'Bir hata oluştu.', 'error');
    }
  });
}

// Başlangıçta Auth Durumunu Başlat
if (typeof authManager !== 'undefined') {
  authManager.init();
}

