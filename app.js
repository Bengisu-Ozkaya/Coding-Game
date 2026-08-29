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
    lessonsText: '47 Ders',
    badgeClass: 'badge-python',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>`,
    icon: '🐍',
    category: 'backend',
    fileExt: 'tarla.py',
    langTag: 'Python 3.11',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'java',
    name: 'Java',
    lessonsText: '36 Ders',
    badgeClass: 'badge-java',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
    icon: '☕',
    category: 'backend',
    fileExt: 'TarlaKod.java',
    langTag: 'Java 17',
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
  python: [
    {
      id: 'python_1',
      title: '1. Değişkenler & Veri Tipleri (Ders #1 - #5)',
      desc: 'print() komutu, yorum satırları, değişken isimlendirme kuralları, int, float, str, bool ve type() fonksiyonu.',
      reward: '🛣️ Asfalt Yollar & Sokak Lambaları',
      status: 'active',
      xp: 120
    },
    {
      id: 'python_2',
      title: '2. Stringler & Metin İşlemleri (Ders #6 - #9)',
      desc: 'İndeksleme, dilimleme [start:stop], len(), .upper(), .lower(), .replace(), .split() ve modern f-string formatlama.',
      reward: '💡 Şehir Elektrik Şebekesi',
      status: 'locked',
      xp: 140
    },
    {
      id: 'python_3',
      title: '3. Operatörler & Matematik (Ders #10 - #12)',
      desc: 'Aritmetik (+, -, *, /, //, %, **), karşılaştırma (==, !=, >, <) ve mantıksal (and, or, not) operatörler.',
      reward: '🚰 Temiz Su Arıtma & Çeşmeler',
      status: 'locked',
      xp: 160
    },
    {
      id: 'python_4',
      title: '4. Koşullu Durumlar (If / Elif / Else) (Ders #13 - #15)',
      desc: 'if, elif, else blokları, iki nokta (:) ve girintileme (indentation) kuralları, tek satır ternary if koşulları.',
      reward: '🌳 Şehir Parkı & Fıskiye',
      status: 'locked',
      xp: 180
    },
    {
      id: 'python_5',
      title: '5. Listeler & Demetler (Lists & Tuples) (Ders #16 - #19)',
      desc: 'Listeler [], .append(), .pop(), .sort(), .insert() metotları ve değiştirilemez (immutable) demetler ().',
      reward: '🏢 Modern İş Kuleleri & Rezidanslar',
      status: 'locked',
      xp: 200
    },
    {
      id: 'python_6',
      title: '6. Sözlükler & Kümeler (Dict & Set) (Ders #20 - #22)',
      desc: 'Anahtar-Değer (key: value) sözlükler {}, .keys(), .values(), .get() ve benzersiz eleman kümeleri set().',
      reward: '🎬 Modern Sinema & Tiyatro Kompleksi',
      status: 'locked',
      xp: 220
    },
    {
      id: 'python_7',
      title: '7. Döngüler (For & While) (Ders #23 - #26)',
      desc: 'for döngüsü, range(başla, bitir, artış), while döngüsü, break (kır), continue (atla), enumerate() ve zip().',
      reward: '🎡 Lunapark & Dönme Dolap',
      status: 'locked',
      xp: 250
    },
    {
      id: 'python_8',
      title: '8. Fonksiyonlar & Kapsam (Ders #27 - #30)',
      desc: 'def ile fonksiyon tanımlama, return ile değer döndürme, varsayılan parametreler, *args, **kwargs ve global kapsam.',
      reward: '🏥 Şehir Hastanesi & Acil Servis',
      status: 'locked',
      xp: 280
    },
    {
      id: 'python_9',
      title: '9. Lambda, Map & Filter (Ders #31 - #33)',
      desc: 'Tek satırlık anonim lambda fonksiyonları, map(), filter() ve modern List Comprehension [x for x in liste] yapıları.',
      reward: '🛍️ Alışveriş & Ticaret Merkezi',
      status: 'locked',
      xp: 300
    },
    {
      id: 'python_10',
      title: '10. Modüller & Paketler (Ders #34 - #36)',
      desc: 'Standart kütüphane modülleri (math, random, datetime), import, from ... import, as takma ad ve pip paket yönetimi.',
      reward: '🚄 Hızlı Tren Garı & Metro Hattı',
      status: 'locked',
      xp: 320
    },
    {
      id: 'python_11',
      title: '11. Hata ve İstisna Yönetimi (Try / Except) (Ders #37 - #39)',
      desc: 'try, except blokları ile çalışma zamanı hatalarını yakalama, finally ile temizlik ve raise ile özel hata fırlatma.',
      reward: '📡 Uydu İletişim & Radyo Kulesi',
      status: 'locked',
      xp: 350
    },
    {
      id: 'python_12',
      title: '12. Dosya İşlemleri (File I/O) (Ders #40 - #42)',
      desc: 'open() fonksiyonu, okuma ("r"), yazma ("w"), ekleme ("a") modları ve with open(...) otomatik dosya yönetimi.',
      reward: '🚢 Uluslararası Liman & Konteyner Terminali',
      status: 'locked',
      xp: 380
    },
    {
      id: 'python_13',
      title: '13. Nesne Yönelimli Programlama (OOP) (Ders #43 - #45)',
      desc: 'class tanımlama, __init__ kurucu metodu, self nesne referansı, sınıf metotları ve Kalıtım (Inheritance).',
      reward: '🏛️ Çiftlik & Şehir Yönetim Sarayı',
      status: 'locked',
      xp: 420
    },
    {
      id: 'python_14',
      title: '14. İleri Seviye & GUI / Proje (Ders #46 - #47)',
      desc: 'Tkinter ile görsel arayüz pencereleri ve butonlar, JSON veri işleme ve modüler Python şehir mimarisi.',
      reward: '🚀 Teknoloji Vadisi & Gözlemevi',
      status: 'locked',
      xp: 500
    }
  ]
};

// Dil bazlı konu durumlarını saklayan nesne
const userTopicsState = {};

// Diller için konu listesi adaptörü (Her dil için Level 1'den başlar)
function getLanguageTopics(langId) {
  if (!userTopicsState[langId]) {
    const curLang = LANGUAGES_DB.find(l => l.id === langId) || LANGUAGES_DB[0];
    const baseTopics = COURSE_TOPICS_DB.python;
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
function renderCityVisual(completedCount) {
  const svg = document.getElementById('city-dynamic-svg');
  if (!svg) return;

  const statusText = document.getElementById('city-status-text');
  const levelPercent = Math.min(100, Math.round((completedCount / 14) * 100));

  if (statusText) {
    let phaseName = 'Issız Harabe Şehir';
    if (completedCount >= 12) phaseName = 'Metropol Şehir & Teknoloji Vadisi';
    else if (completedCount >= 9) phaseName = 'Modern Liman ve Ticaret Şehri';
    else if (completedCount >= 6) phaseName = 'Lunaparklı Gelişen Şehir';
    else if (completedCount >= 3) phaseName = 'İlk Yerleşim & Altyapı';

    statusText.textContent = `Şehirleşme: %${levelPercent} • ${phaseName}`;
  }

  // SVG Çizimi: Issız başlayıp zenginleşen şehir katmanları
  let svgHTML = `
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${completedCount >= 3 ? '#bae6fd' : '#cbd5e1'}" />
        <stop offset="100%" stop-color="${completedCount >= 3 ? '#f0f9ff' : '#94a3b8'}" />
      </linearGradient>
      <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${completedCount >= 3 ? '#86efac' : '#94a3b8'}" />
        <stop offset="100%" stop-color="${completedCount >= 3 ? '#4ade80' : '#64748b'}" />
      </linearGradient>
    </defs>

    <!-- Gökyüzü -->
    <rect width="460" height="210" fill="url(#skyGrad)" />
    <circle cx="390" cy="50" r="28" fill="${completedCount >= 2 ? '#fef08a' : '#f1f5f9'}" opacity="0.8" />

    <!-- Arka Plan Dağlar / Tepeler -->
    <path d="M 0 160 Q 110 110, 220 150 T 460 140 L 460 210 L 0 210 Z" fill="${completedCount >= 3 ? '#bbf7d0' : '#cbd5e1'}" opacity="0.6" />

    <!-- Zemin (Toprak / Çim) -->
    <path d="M 0 160 C 120 155, 300 158, 460 160 L 460 210 L 0 210 Z" fill="url(#groundGrad)" />
  `;

  // Seviye 0: Issız harabe iskelet binalar
  if (completedCount === 0) {
    svgHTML += `
      <!-- Issız Harabe Binalar -->
      <rect x="40" y="90" width="60" height="75" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
      <rect x="120" y="70" width="75" height="95" rx="8" fill="#64748b" stroke="#475569" stroke-width="2" />
      <rect x="220" y="100" width="65" height="65" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
      <rect x="310" y="80" width="70" height="85" rx="8" fill="#64748b" stroke="#475569" stroke-width="2" />
      
      <!-- Kuru Çatlaklar -->
      <path d="M 50 175 L 80 185 L 110 180 M 240 180 L 270 190" stroke="#475569" stroke-width="2" stroke-dasharray="3,3" />
      <text x="230" y="195" font-size="12" font-weight="700" fill="#475569" text-anchor="middle">Issız ve Terk Edilmiş Bölge</text>
    `;
  }

  // Seviye 1+: Asfalt Yollar ve Sokak Lambaları
  if (completedCount >= 1) {
    svgHTML += `
      <!-- Asfalt Yol -->
      <path d="M 0 185 Q 230 178, 460 185" stroke="#334155" stroke-width="20" fill="none" />
      <path d="M 0 185 Q 230 178, 460 185" stroke="#f8fafc" stroke-width="2" stroke-dasharray="8,8" fill="none" />
      
      <!-- Sokak Lambaları -->
      <line x1="60" y1="175" x2="60" y2="155" stroke="#475569" stroke-width="2" />
      <circle cx="60" cy="155" r="4" fill="#fef08a" />
      <line x1="200" y1="175" x2="200" y2="155" stroke="#475569" stroke-width="2" />
      <circle cx="200" cy="155" r="4" fill="#fef08a" />
      <line x1="360" y1="175" x2="360" y2="155" stroke="#475569" stroke-width="2" />
      <circle cx="360" cy="155" r="4" fill="#fef08a" />
    `;
  }

  // Seviye 2+: Işıkları Yanan Konutlar & Binalar
  if (completedCount >= 2) {
    svgHTML += `
      <!-- Işıkları Yanan Modern Binalar -->
      <rect x="30" y="90" width="55" height="75" rx="6" fill="#475569" stroke="#334155" stroke-width="2" />
      <rect x="40" y="100" width="10" height="12" fill="#fef08a" rx="2" />
      <rect x="60" y="100" width="10" height="12" fill="#fef08a" rx="2" />
      <rect x="40" y="125" width="10" height="12" fill="#fef08a" rx="2" />
      <rect x="60" y="125" width="10" height="12" fill="#fef08a" rx="2" />

      <rect x="100" y="70" width="70" height="95" rx="6" fill="#334155" stroke="#1e293b" stroke-width="2" />
      <rect x="112" y="80" width="12" height="12" fill="#fef08a" rx="2" />
      <rect x="140" y="80" width="12" height="12" fill="#fef08a" rx="2" />
      <rect x="112" y="105" width="12" height="12" fill="#fef08a" rx="2" />
      <rect x="140" y="105" width="12" height="12" fill="#fef08a" rx="2" />
      <rect x="112" y="130" width="12" height="12" fill="#fef08a" rx="2" />
      <rect x="140" y="130" width="12" height="12" fill="#fef08a" rx="2" />
    `;
  }

  // Seviye 3+: Şehir Parkı, Ağaçlar & Fıskiye
  if (completedCount >= 3) {
    svgHTML += `
      <!-- Park & Ağaçlar -->
      <g transform="translate(190, 120)">
        <!-- Fıskiye Havuzu -->
        <ellipse cx="40" cy="40" rx="24" ry="10" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
        <circle cx="40" cy="38" r="4" fill="#ffffff" />
        <!-- Ağaç 1 -->
        <polygon points="10,35 18,15 26,35" fill="#15803d" />
        <rect x="16" y="35" width="4" height="8" fill="#78350f" />
        <!-- Ağaç 2 -->
        <polygon points="56,35 64,15 72,35" fill="#16a34a" />
        <rect x="62" y="35" width="4" height="8" fill="#78350f" />
      </g>
    `;
  }

  // Seviye 4+: Modern İş Kuleleri & Gökdelenler
  if (completedCount >= 4) {
    svgHTML += `
      <!-- Cam Gökdelen -->
      <rect x="290" y="45" width="60" height="120" rx="6" fill="#0284c7" stroke="#0369a1" stroke-width="2" />
      <line x1="300" y1="45" x2="300" y2="165" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
      <line x1="320" y1="45" x2="320" y2="165" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
      <line x1="340" y1="45" x2="340" y2="165" stroke="rgba(255,255,255,0.4)" stroke-width="2" />
      <!-- Çatı Anteni -->
      <line x1="320" y1="45" x2="320" y2="25" stroke="#e11d48" stroke-width="3" />
      <circle cx="320" cy="25" r="3" fill="#e11d48" />
    `;
  }

  // Seviye 5+: Sinema Binası (🎬 SİNEMA)
  if (completedCount >= 5) {
    svgHTML += `
      <!-- Modern Sinema Kompleksi -->
      <rect x="365" y="80" width="70" height="85" rx="6" fill="#be123c" stroke="#881337" stroke-width="2" />
      <rect x="375" y="90" width="50" height="18" rx="4" fill="#fbbf24" />
      <text x="400" y="103" font-size="9" font-weight="900" fill="#881337" text-anchor="middle">🎬 SİNEMA</text>
      <!-- Sinema Işıkları -->
      <circle cx="375" cy="120" r="3" fill="#fef08a" />
      <circle cx="390" cy="120" r="3" fill="#fef08a" />
      <circle cx="405" cy="120" r="3" fill="#fef08a" />
      <circle cx="420" cy="120" r="3" fill="#fef08a" />
    `;
  }

  // Seviye 6+: Lunapark & Dönen Dönme Dolap (🎡)
  if (completedCount >= 6) {
    svgHTML += `
      <!-- Lunapark & Dönme Dolap -->
      <g transform="translate(235, 30)">
        <circle cx="40" cy="55" r="32" stroke="#e11d48" stroke-width="3" fill="none" stroke-dasharray="6,4" />
        <line x1="40" y1="23" x2="40" y2="87" stroke="#fbbf24" stroke-width="2" />
        <line x1="8" y1="55" x2="72" y2="55" stroke="#fbbf24" stroke-width="2" />
        <line x1="40" y1="55" x2="25" y2="105" stroke="#475569" stroke-width="4" />
        <line x1="40" y1="55" x2="55" y2="105" stroke="#475569" stroke-width="4" />
        <!-- Kabinler -->
        <circle cx="40" cy="23" r="5" fill="#38bdf8" />
        <circle cx="40" cy="87" r="5" fill="#38bdf8" />
        <circle cx="8" cy="55" r="5" fill="#38bdf8" />
        <circle cx="72" cy="55" r="5" fill="#38bdf8" />
        <text x="40" y="112" font-size="8" font-weight="900" fill="#e11d48" text-anchor="middle">🎡 LUNAPARK</text>
      </g>
    `;
  }

  svg.innerHTML = svgHTML;


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

    // Tıklama ile Hızlı Özet Modalını Açma
    const cardEl = row.querySelector('.timeline-card');
    cardEl.addEventListener('click', () => {
      if (isLocked) {
        sfx.playError();
        logToTerminal(`🔒 Bu konu henüz kilitli! Sıradaki aktif konuyu tamamlamalısın.`, 'hint');
        return;
      }

      state.selectedNodeId = topic.id;
      sfx.playPop();
      openTopicReviewModal(topic);
    });

    container.appendChild(row);
  });
}

// --- 7.1 KONU HIZLI ÖZET MODAL MOTORU (Topic Quick Review Modal Engine) ---

const TOPIC_REVIEWS_DB = {
  python_1: {
    title: 'Değişkenler & Veri Tipleri',
    readTime: '2 dk okuma',
    rulesHeading: 'İSİMLENDİRME VE TANIMLAMA KURALLARI',
    rules: [
      'Açıklayıcı isimler kullanın (örn: <code>kullanici_yasi</code>, <code>x</code> değil)',
      'Bir harf veya alt çizgi (<code>_</code>) ile başlayın, rakamla başlamayın',
      'Çok kelimeli değişkenler için <code>snake_case</code> stilini kullanın',
      'Python ayrılmış anahtar kelimelerinden kaçının (<code>global</code>, <code>pass</code>, <code>int</code>, <code>for</code> gibi)'
    ],
    typesHeading: 'TEMEL VERİ TÜRLERİ',
    types: [
      { name: 'int', label: 'TÜR', value: '42' },
      { name: 'float', label: 'TÜR', value: '3.14' },
      { name: 'str', label: 'TÜR', value: '"merhaba"' },
      { name: 'bool', label: 'TÜR', value: 'True' }
    ]
  },
  python_2: {
    title: 'Stringler & Metin İşlemleri',
    readTime: '2 dk okuma',
    rulesHeading: 'METİN VE DİLİMLEME KURALLARI',
    rules: [
      'İndeksler 0\'dan başlar: <code>metin[0]</code> ilk harfi verir',
      'Negatif indeksler sondan sayar: <code>metin[-1]</code> son harftir',
      'Dilimleme: <code>metin[0:4]</code> 0\'dan 4. indekse kadar (4 hariç) alır',
      'Modern metin birleştirme için f-string kullanın: <code>f"Merhaba {isim}"</code>'
    ],
    typesHeading: 'TEMEL STRİNG METOTLARI',
    types: [
      { name: 'len()', label: 'METOT', value: 'len("kod") -> 3' },
      { name: '.upper()', label: 'METOT', value: '"abc".upper() -> "ABC"' },
      { name: '.replace()', label: 'METOT', value: '"a-b".replace("-"," ")' },
      { name: 'f-string', label: 'SÖZDİZİMİ', value: 'f"{ad} {yas}"' }
    ]
  },
  python_3: {
    title: 'Operatörler & Matematik',
    readTime: '2 dk okuma',
    rulesHeading: 'MATEMATİKSEL VE MANTIKSAL KURALLAR',
    rules: [
      '<code>//</code> tam sayı bölmesi yapar (ondalık kısmı atar)',
      '<code>%</code> modu yani bölme işleminden kalanı verir',
      '<code>**</code> üs alma işlemidir (örn: <code>2 ** 3 = 8</code>)',
      '<code>and</code> her iki koşul doğruysa, <code>or</code> en az biri doğruysa <code>True</code> döner'
    ],
    typesHeading: 'ÖNEMLİ OPERATÖRLER',
    types: [
      { name: '//', label: 'TAM BÖLME', value: '7 // 2 -> 3' },
      { name: '%', label: 'MOD (KALAN)', value: '7 % 3 -> 1' },
      { name: '**', label: 'ÜS ALMA', value: '2 ** 4 -> 16' },
      { name: '!=', label: 'EŞİT DEĞİL', value: '5 != 3 -> True' }
    ]
  },
  python_4: {
    title: 'Koşullu Durumlar (If / Elif / Else)',
    readTime: '2 dk okuma',
    rulesHeading: 'KOŞUL VE BLOK KURALLARI',
    rules: [
      'Koşul satırlarının sonuna mutlaka iki nokta (<code>:</code>) koyun',
      'Koşulun altındaki kod bloğu için 4 boşluk girinti (indentation) bırakın',
      'Eşitlik kıyaslaması için <code>==</code>, atama için <code>=</code> kullanın',
      'Birden fazla basamaklı koşullar için <code>elif</code> kullanın'
    ],
    typesHeading: 'KOŞUL YAPILARI',
    types: [
      { name: 'if', label: 'BAŞLANGIÇ', value: 'if puan >= 50:' },
      { name: 'elif', label: 'EK KOŞUL', value: 'elif puan >= 40:' },
      { name: 'else', label: 'VARSAYILAN', value: 'else: pass' },
      { name: 'ternary', label: 'TEK SATIR', value: '"Geçti" if p>50 else "Kaldı"' }
    ]
  },
  python_5: {
    title: 'Listeler & Demetler (Lists & Tuples)',
    readTime: '3 dk okuma',
    rulesHeading: 'LİSTE VE DEMET KURALLARI',
    rules: [
      'Listeler köşeli parantez <code>[]</code> ile tanımlanır ve değiştirilebilir (mutable)',
      'Demetler (Tuples) normal parantez <code>()</code> ile tanımlanır ve sabittir (immutable)',
      '<code>.append()</code> listenin sonuna yeni bir eleman ekler',
      '<code>.pop()</code> son elemanı siler ve döndürür'
    ],
    typesHeading: 'LİSTE İŞLEMLERİ',
    types: [
      { name: '[ ]', label: 'LİSTE', value: '[10, 20, 30]' },
      { name: '( )', label: 'TUPLE', value: '("a", "b", "c")' },
      { name: '.append()', label: 'EKLE', value: 'liste.append(40)' },
      { name: '.sort()', label: 'SIRALA', value: 'liste.sort()' }
    ]
  },
  python_6: {
    title: 'Sözlükler & Kümeler (Dict & Set)',
    readTime: '3 dk okuma',
    rulesHeading: 'SÖZLÜK VE KÜME KURALLARI',
    rules: [
      'Sözlükler <code>{"anahtar": "değer"}</code> çiftleriyle çalışır',
      'Olmayan bir anahtarda hata almamak için <code>sozluk.get("anahtar")</code> kullanın',
      'Kümeler <code>set()</code> veya <code>{1, 2}</code> tekrarlayan elemanları otomatik eler',
      'Sözlük anahtarları değiştirilemez (örneğin string veya int) olmalıdır'
    ],
    typesHeading: 'SÖZLÜK & KÜME YAPILARI',
    types: [
      { name: '{k: v}', label: 'SÖZLÜK', value: '{"ad": "Bengi", "yas": 25}' },
      { name: '.keys()', label: 'ANAHTARLAR', value: 'sozluk.keys()' },
      { name: '.values()', label: 'DEĞERLER', value: 'sozluk.values()' },
      { name: 'set()', label: 'BENZERSİZ', value: '{1, 2, 2, 3} -> {1, 2, 3}' }
    ]
  },
  python_7: {
    title: 'Döngüler (For & While)',
    readTime: '3 dk okuma',
    rulesHeading: 'DÖNGÜ VE KONTROL KURALLARI',
    rules: [
      '<code>range(5)</code> 0\'dan 4\'e kadar (5 hariç) sayılar üretir',
      '<code>range(1, 10, 2)</code> 1\'den başlar, 2\'şer artarak 10\'a kadar gider',
      '<code>break</code> döngüyü anında sonlandırır',
      '<code>continue</code> o anki adımı atlar ve bir sonraki tura geçer'
    ],
    typesHeading: 'DÖNGÜ YAPILARI',
    types: [
      { name: 'for in', label: 'FOR DÖNGÜSÜ', value: 'for x in liste:' },
      { name: 'range()', label: 'ARALIK', value: 'range(1, 10)' },
      { name: 'while', label: 'KOŞULLU', value: 'while sayac < 5:' },
      { name: 'break', label: 'DURDUR', value: 'if x == 3: break' }
    ]
  },
  python_8: {
    title: 'Fonksiyonlar & Kapsam',
    readTime: '3 dk okuma',
    rulesHeading: 'FONKSİYON KURALLARI',
    rules: [
      'Fonksiyonlar <code>def fonksiyon_adi():</code> şeklinde tanımlanır',
      'Sonucu çağıran yere aktarmak için <code>return</code> kullanılır',
      '<code>*args</code> sınırsız sayıda isimsiz parametre almaya yarar',
      'Fonksiyon içindeki değişkenler yereldir (local scope)'
    ],
    typesHeading: 'FONKSİYON ANATOMİSİ',
    types: [
      { name: 'def', label: 'TANIM', value: 'def topla(a, b):' },
      { name: 'return', label: 'SONUÇ', value: 'return a + b' },
      { name: 'varsayılan', label: 'PARAMETRE', value: 'def selam(ad="Misafir"):' },
      { name: '*args', label: 'ESNEK', value: 'def topla(*sayilar):' }
    ]
  },
  python_9: {
    title: 'Lambda, Map & Filter',
    readTime: '2 dk okuma',
    rulesHeading: 'FONKSİYONEL PROGRAMLAMA KURALLARI',
    rules: [
      '<code>lambda x: x * 2</code> tek satırlık isimsiz hızlı fonksiyondur',
      '<code>map(fn, liste)</code> listedeki tüm elemanlara fonksiyonu uygular',
      '<code>filter(fn, liste)</code> koşula uyan elemanları süzer',
      'List Comprehension: <code>[x**2 for x in sayilar if x > 2]</code>'
    ],
    typesHeading: 'FONKSİYONEL ARAÇLAR',
    types: [
      { name: 'lambda', label: 'TEK SATIR', value: 'kare = lambda x: x**2' },
      { name: 'map()', label: 'DÖNÜŞTÜR', value: 'map(str, [1, 2, 3])' },
      { name: 'filter()', label: 'FİLTRELE', value: 'filter(lambda x: x>0, l)' },
      { name: '[comp]', label: 'LİSTE ÜRETİCİ', value: '[x*2 for x in l]' }
    ]
  },
  python_10: {
    title: 'Modüller & Paketler',
    readTime: '2 dk okuma',
    rulesHeading: 'MODÜL VE PAKET KURALLARI',
    rules: [
      '<code>import math</code> ile standart matematik kütüphanesi yüklenir',
      '<code>from random import randint</code> ile sadece belirli fonksiyon alınır',
      '<code>import numpy as np</code> ile modüle kısa takma ad (alias) verilir',
      'Harici paketler terminalden <code>pip install paket_adi</code> ile kurulur'
    ],
    typesHeading: 'MODÜL KULLANIMI',
    types: [
      { name: 'import', label: 'DÂHİL ET', value: 'import math' },
      { name: 'from..import', label: 'SEÇEREK AL', value: 'from random import choice' },
      { name: 'as', label: 'TAKMA AD', value: 'import datetime as dt' },
      { name: 'pip', label: 'YÖNETİCİ', value: 'pip install requests' }
    ]
  },
  python_11: {
    title: 'Hata ve İstisna Yönetimi (Try / Except)',
    readTime: '3 dk okuma',
    rulesHeading: 'HATA YAKALAMA KURALLARI',
    rules: [
      'Hata çıkarabilecek kodlar <code>try:</code> bloğuna yazılır',
      '<code>except ValueError:</code> sadece belirtilen hatayı yakalar',
      '<code>finally:</code> hata olsun ya da olmasın daima en son çalışan koddur',
      '<code>raise Exception("Mesaj")</code> ile bilinçli hata fırlatılır'
    ],
    typesHeading: 'HATA BLOKLARI',
    types: [
      { name: 'try', label: 'DENE', value: 'try: x = int(sayi)' },
      { name: 'except', label: 'YAKALA', value: 'except ValueError as e:' },
      { name: 'finally', label: 'SON BLOK', value: 'finally: dosya.close()' },
      { name: 'raise', label: 'FIRLAT', value: 'raise ValueError("Geçersiz")' }
    ]
  },
  python_12: {
    title: 'Dosya İşlemleri (File I/O)',
    readTime: '3 dk okuma',
    rulesHeading: 'DOSYA YÖNETİM KURALLARI',
    rules: [
      '<code>with open("dosya.txt", "r") as f:</code> dosyayı işlem bitince otomatik kapatır',
      '<code>"r"</code> (read) sadece okuma, <code>"w"</code> (write) sıfırlayarak yazma modudur',
      '<code>"a"</code> (append) dosyanın sonuna yeni satır ekler',
      'Türkçe karakterler için <code>encoding="utf-8"</code> parametresi eklenmelidir'
    ],
    typesHeading: 'DOSYA MODLARI',
    types: [
      { name: 'with open', label: 'GÜVENLİ', value: 'with open("a.txt", "r") as f:' },
      { name: '"w"', label: 'YAZMA', value: 'open("a.txt", "w", encoding="utf-8")' },
      { name: '"a"', label: 'EKLEME', value: 'open("a.txt", "a")' },
      { name: '.read()', label: 'OKUMA', value: 'icerik = f.read()' }
    ]
  },
  python_13: {
    title: 'Nesne Yönelimli Programlama (OOP)',
    readTime: '4 dk okuma',
    rulesHeading: 'NESNE VE SINIF KURALLARI',
    rules: [
      'Sınıflar <code>class SinifAdi:</code> şeklinde PascalCase ile adlandırılır',
      '<code>__init__(self)</code> kurucu metottur ve nesne yaratılırken ilk çağrılır',
      '<code>self</code> nesnenin kendi özelliklerine ve metotlarına erişimi sağlar',
      'Kalıtım: <code>class Kopek(Hayvan):</code> üst sınıfın özelliklerini devralır'
    ],
    typesHeading: 'OOP YAPITAŞLARI',
    types: [
      { name: 'class', label: 'SINIF', value: 'class Araba:' },
      { name: '__init__', label: 'KURUCU', value: 'def __init__(self, model):' },
      { name: 'self', label: 'REFERANS', value: 'self.model = model' },
      { name: 'super()', label: 'ÜST SINIF', value: 'super().__init__()' }
    ]
  },
  python_14: {
    title: 'İleri Seviye & GUI / Proje',
    readTime: '4 dk okuma',
    rulesHeading: 'PROJE VE ARAYÜZ KURALLARI',
    rules: [
      '<code>tkinter</code> Python\'ın dahili masaüstü grafik arayüz kütüphanesidir',
      '<code>json.loads()</code> metin halindeki JSON verisini Python sözlüğüne çevirir',
      '<code>json.dumps()</code> Python verisini JSON metnine dönüştürür',
      'Tüm modülleri birleştiren ana dosya genellikle <code>main.py</code> olarak adlandırılır'
    ],
    typesHeading: 'İLERİ SEVİYE ARAÇLAR',
    types: [
      { name: 'tkinter', label: 'ARAYÜZ', value: 'import tkinter as tk' },
      { name: 'json.loads', label: 'AYRIŞTIR', value: 'veri = json.loads(metin)' },
      { name: 'json.dumps', label: 'PAKETLE', value: 'json.dumps(sozluk)' },
      { name: 'mainloop()', label: 'UYGULAMA', value: 'pencere.mainloop()' }
    ]
  }
};

// Eski p1 ve p2 id eşleştirmeleri
TOPIC_REVIEWS_DB.p1 = TOPIC_REVIEWS_DB.python_1;
TOPIC_REVIEWS_DB.p2 = TOPIC_REVIEWS_DB.python_2;

function openTopicReviewModal(topic) {
  const modal = document.getElementById('topic-review-modal');
  if (!modal) {
    switchView('game');
    return;
  }

  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
  const reviewData = TOPIC_REVIEWS_DB[topic.id] || TOPIC_REVIEWS_DB.p1;

  const titleEl = document.getElementById('review-title');
  const readTextEl = document.getElementById('review-read-text');
  const rulesHeadingEl = document.getElementById('review-rules-heading');
  const rulesListEl = document.getElementById('review-rules-list');
  const typesHeadingEl = document.getElementById('review-types-heading');
  const typesGridEl = document.getElementById('review-types-grid');

  if (titleEl) titleEl.textContent = topic.title.replace(/^\d+\.\s*/, '') || reviewData.title;
  if (readTextEl) readTextEl.textContent = reviewData.readTime || '2 dk okuma';
  if (rulesHeadingEl) rulesHeadingEl.textContent = reviewData.rulesHeading || 'İSİMLENDİRME KURALLARI';

  if (rulesListEl) {
    rulesListEl.innerHTML = reviewData.rules.map(rule => `
      <div class="review-rule-item">
        <span class="review-rule-bullet">›</span>
        <span>${rule}</span>
      </div>
    `).join('');
  }

  if (typesHeadingEl) typesHeadingEl.textContent = reviewData.typesHeading || 'TEMEL VERİ TÜRLERİ';

  if (typesGridEl) {
    typesGridEl.innerHTML = reviewData.types.map(t => `
      <div class="review-type-box">
        <div class="type-box-header">
          <span class="type-name">${t.name}</span>
          <span class="type-tag">${t.label}</span>
        </div>
        <span class="type-value">${t.value}</span>
      </div>
    `).join('');
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
  p1: [
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
      moduleSubtitle: 'MODÜL 1: ÇOKLU DEĞİŞKENLER',
      title: '5. Soru: Çoklu Değişken Tanımlama',
      prompt: "<code class=\"code-highlight\">isim</code>, <code class=\"code-highlight\">yas</code> ve <code class=\"code-highlight\">meslek</code> isminde 3 değişken tanımlayabilir misin?",
      presetCode: `# "isim", "yas" ve "meslek" adında 3 değişken tanımla:\n`,
      filename: 'degiskenler.py',
      lang: 'Python 3.11',
      quickKeys: ['isim = ', 'yas = ', 'meslek = ', '"Bengi"', '25', '"Mühendis"'],
      hint: 'isim = "Bengi"\nyas = 25\nmeslek = "Mühendis"',
      solution: 'isim = "Bengi"\nyas = 25\nmeslek = "Mühendis"',
      validator: (code) => {
        const clean = code.trim();
        const hasIsim = /isim\s*=\s*['"][^'"]+['"]/.test(clean);
        const hasYas = /yas\s*=\s*\d+/.test(clean);
        const hasMeslek = /meslek\s*=\s*['"][^'"]+['"]/.test(clean);

        if (hasIsim && hasYas && hasMeslek) {
          return { ok: true, msg: "Harika iş çıkardın! 3 değişken de başarıyla tanımlandı. Seviye tamamlandı! 🎉" };
        }

        const missing = [];
        if (!hasIsim) missing.push('isim (metin)');
        if (!hasYas) missing.push('yas (sayı)');
        if (!hasMeslek) missing.push('meslek (metin)');

        return { ok: false, msg: `Eksik veya hatalı tanımlar: ${missing.join(', ')}. Lütfen 3 değişkeni de tanımlayın.` };
      }
    }
  ]
};

// python_1 veya diğer dillerin 1. modülleri için p1 veritabanını kullan
CHALLENGES_DATABASE.python_1 = CHALLENGES_DATABASE.p1;

let currentChallengeIndex = 0;
let currentChallengesList = [];

function loadNodeFarmGame() {
  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
  const topicId = state.selectedNodeId || 'p1';

  currentChallengesList = CHALLENGES_DATABASE[topicId] || CHALLENGES_DATABASE.p1;
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

  // Hızlı Kısayol Tuşları
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
  const userLines = dom.codeInput.value.split('\n').length;
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

dom.btnHint.addEventListener('click', () => {
  const challenge = currentChallengesList[currentChallengeIndex] || currentChallengesList[0];
  logToTerminal(`💡 <strong>İpucu:</strong> <pre style="margin-top:4px;color:#fcd34d;">${challenge.hint}</pre>`, 'hint');
  sfx.playPop();
});

dom.btnClearConsole.addEventListener('click', () => {
  dom.terminalOutput.innerHTML = '';
});

dom.codeInput.addEventListener('input', updateLineNumbers);

dom.codeInput.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    runCurrentCode();
  }
});

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
}
