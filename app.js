/**
 * 🌾 Kod Çiftliği (Code & Farm) - Radyal Yetenek Ağacı (Skill Tree) & Oyun Motoru
 */

// --- 1. SES SENTEZLEYİCİSİ (Devre Dışı / Sessiz Mod) ---
class SoundEffects {
  constructor() {
    this.enabled = false;
  }
  init() {}
  playPop() {}
  playSuccess() {}
  playError() {}
  playVictory() {}
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
    id: 'html',
    name: 'HTML',
    lessonsText: '70 Alıştırma • 14 Modül',
    badgeClass: 'badge-html',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 3 1.5 15L12 21l6.5-3 1.5-15H4z"></path><path d="M16 8.5H8.5l.3 3.5h7.2l-.5 4.5-3.5 1-3.5-1-.2-2.5"></path></svg>`,
    icon: '🌐',
    category: 'frontend',
    fileExt: 'index.html',
    langTag: 'HTML5',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'css',
    name: 'CSS',
    lessonsText: '80 Alıştırma • 16 Modül',
    badgeClass: 'badge-css',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16l-2 15-6 3-6-3L4 3z"></path><path d="M7.5 7.5h9l-.5 4h-8l.5 4 4.5 1.5 4.5-1.5.2-2"></path></svg>`,
    icon: '🎨',
    category: 'frontend',
    fileExt: 'style.css',
    langTag: 'CSS3',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    lessonsText: '60 Alıştırma • 12 Modül',
    badgeClass: 'badge-bootstrap',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M8.5 7.5h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4v-4z"></path><path d="M8.5 11.5h4.5c1.1 0 2 .9 2 2s-.9 2-2 2h-4.5v-4z"></path></svg>`,
    icon: '🅱️',
    category: 'frontend',
    fileExt: 'index.html',
    langTag: 'Bootstrap 5',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    lessonsText: '70 Alıştırma • 14 Modül',
    badgeClass: 'badge-javascript',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16l-2 15-6 3-6-3L4 3z"></path><path d="M9 8v6a2 2 0 0 1-2 2H6"></path><path d="M14 9.5c.6-.4 1.3-.5 2-.5 1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5c-.8 0-1.5-.3-2-.8"></path></svg>`,
    icon: '⚡',
    category: 'frontend',
    fileExt: 'app.js',
    langTag: 'JavaScript (ES6+)',
    skillTreeNodes: SKILL_TREE_JAVA_NODES
  },
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
    lessonsText: '70 Alıştırma • 14 Modül',
    badgeClass: 'badge-sql',
    iconSvg: `<svg class="explore-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
    icon: '🗄️',
    category: 'database',
    fileExt: 'sorgu.sql',
    langTag: 'SQL / PostgreSQL',
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

let authTrigger = 'navbar'; // 'navbar' | 'card' | 'switch'

// --- 5. EKRAN GEÇİŞLERİ ---
function switchView(viewName) {
  // Kullanıcı Girişi Kontrolü (Roadmap ve Game ekranları oturum gerektirir)
  if ((viewName === 'roadmap' || viewName === 'game') && typeof authManager !== 'undefined' && !authManager.isLoggedIn()) {
    const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
    authTrigger = 'switch';
    openAuthModal('login');
    showAuthAlert(`🔒 ${curLang.name} konu haritasına ve alıştırmalara erişmek için lütfen giriş yapın veya ücretsiz hesap oluşturun.`, 'info');
    viewName = 'languages';
  }

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
    if (dom.headerLangBadge) {
      dom.headerLangBadge.style.display = 'none';
      dom.headerLangBadge.textContent = '';
    }
    if (dom.headerSubtitle) dom.headerSubtitle.textContent = 'İnteraktif kodlama macerana başlamak için bir yol seç.';
    renderLanguages();
  } else if (viewName === 'roadmap') {
    dom.viewRoadmap.classList.add('active');
    if (dom.navBtnRoadmap) dom.navBtnRoadmap.classList.add('active');
    if (dom.headerLangBadge) {
      dom.headerLangBadge.style.display = 'inline-block';
      dom.headerLangBadge.textContent = curLang.name;
    }
    if (dom.headerSubtitle) dom.headerSubtitle.textContent = `${curLang.name} Konu Haritası & Gelişen Şehir`;
    renderSkillTree();
  } else if (viewName === 'game') {
    dom.viewGame.classList.add('active');
    if (dom.navBtnGame) dom.navBtnGame.classList.add('active');
    if (dom.headerLangBadge) {
      dom.headerLangBadge.style.display = 'inline-block';
      dom.headerLangBadge.textContent = curLang.name;
    }
    if (dom.headerSubtitle) dom.headerSubtitle.textContent = 'Kodunu yaz, testleri çalıştır ve çözümü onayla!';
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
      if (typeof authManager !== 'undefined' && !authManager.isLoggedIn()) {
        authTrigger = 'card';
        openAuthModal('login');
        showAuthAlert(`🔒 ${lang.name} konu haritasına erişmek için lütfen giriş yapın veya hesap oluşturun.`, 'info');
        return;
      }
      switchView('roadmap');
    });

    dom.languagesGrid.appendChild(card);
  });
}

// --- 7. GELİŞEN ŞEHİR & DİKEY KONU YOL HARİTASI (Evolving City & Roadmap Engine) ---

const COURSE_TOPICS_DB = {
  html: [
    {
      id: "html_1",
      title: "1. HTML Temelleri & Sayfa İskeleti",
      desc: "DOCTYPE, html, head, body ve title etiketleriyle standart web sayfası iskeleti oluşturma.",
      reward: "🏡 Giriş Çiftliği & Su Kuyusu",
      status: "active",
      xp: 120
    },
    {
      id: "html_2",
      title: "2. Başlıklar & Metin Biçimlendirme",
      desc: "Başlık hiyerarşisi (h1-h6), paragraflar (p), satır sonu (br), tematik çizgi (hr) ve vurgulama (strong, em, mark).",
      reward: "💡 Şehir Elektrik Şebekesi",
      status: "locked",
      xp: 140
    },
    {
      id: "html_3",
      title: "3. Bağlantılar & Köprüler (Links)",
      desc: "a etiketi, href ile harici sayfalara geçiş, target='_blank' ve sayfa içi çapa (#id) linkleri.",
      reward: "🚰 Su Arıtma & Çeşmeler",
      status: "locked",
      xp: 160
    },
    {
      id: "html_4",
      title: "4. Görseller & Medya (Images)",
      desc: "img etiketi, src kaynak yolu, alt açıklama metni, width/height boyutları ve figure/figcaption.",
      reward: "🌳 Şehir Parkı & Botanik Bahçe",
      status: "locked",
      xp: 180
    },
    {
      id: "html_5",
      title: "5. Listeler (Sıralı, Sırasız & Tanım)",
      desc: "ul sırasız ve ol sıralı listeler, li elemanları, dl/dt/dd tanım listeleri ve iç içe listeler.",
      reward: "🏢 Modern Rezidanslar & İş Kuleleri",
      status: "locked",
      xp: 200
    },
    {
      id: "html_6",
      title: "6. Tablo Temelleri (Tables)",
      desc: "table, tr satırları, th başlık hücreleri, td veri hücreleri ve caption tablo başlığı.",
      reward: "🎬 Sinema & Kültür Merkezi",
      status: "locked",
      xp: 220
    },
    {
      id: "html_7",
      title: "7. İleri Tablolar (Colspan & Rowspan)",
      desc: "thead, tbody, tfoot bölümleri, colspan (sütun birleştirme) ve rowspan (satır birleştirme).",
      reward: "🎡 Lunapark & Dönme Dolap",
      status: "locked",
      xp: 250
    },
    {
      id: "html_8",
      title: "8. Blok & Satır İçi, Div & Span",
      desc: "Block vs Inline eleman ayrımı, div ve span kapsayıcıları, id ve class öznitelikleri.",
      reward: "🏛️ Yönetim Sarayı & Belediye",
      status: "locked",
      xp: 280
    },
    {
      id: "html_9",
      title: "9. Temel Form Elemanları (Form & Input)",
      desc: "form kapsayıcısı, text, password, email, number, checkbox, radio inputları ve label etiketleri.",
      reward: "🏥 Şehir Hastanesi & Acil Servis",
      status: "locked",
      xp: 300
    },
    {
      id: "html_10",
      title: "10. Gelişmiş Form Kontrolleri & Doğrulama",
      desc: "textarea, select, option, datalist, fieldset, required, placeholder ve regex pattern doğrulaması.",
      reward: "🛍️ Alışveriş & Ticaret Merkezi",
      status: "locked",
      xp: 320
    },
    {
      id: "html_11",
      title: "11. Semantik HTML5 Mimarisi",
      desc: "header, nav, main, section, article, aside, footer ve details/summary semantik etiketleri.",
      reward: "🚄 Hızlı Tren Garı & Raylar",
      status: "locked",
      xp: 350
    },
    {
      id: "html_12",
      title: "12. Multimedya & Gömülü İçerikler",
      desc: "audio, video kontrolleri, source formatları ve YouTube için iframe gömme mimarisi.",
      reward: "📡 5G Telekom & Uydu Kulesi",
      status: "locked",
      xp: 380
    },
    {
      id: "html_13",
      title: "13. Head, Meta Etiketleri & Varlıklar",
      desc: "meta charset, viewport, SEO description, favicon ve HTML varlıkları (&nbsp;, &lt;, &gt;, &copy;).",
      reward: "🚢 Uluslararası Liman & Konteynerler",
      status: "locked",
      xp: 420
    },
    {
      id: "html_14",
      title: "14. Kapsamlı Web Sayfası İskelet Projesi",
      desc: "Tüm HTML5 standartlarını, formları, tabloları ve semantik düzeni birleştiren ana web sayfası projesi.",
      reward: "🚀 Teknoloji Vadisi & Roket Üssü",
      status: "locked",
      xp: 450
    }
  ],
  css: [
    {
      id: "css_1",
      title: "1. CSS'e Giriş & Ekleme Yöntemleri",
      desc: "CSS sözdizimi, Satır içi (Inline), Dahili (<style>) ve Harici (<link rel='stylesheet'>) CSS mimarisi.",
      reward: "🏡 Giriş Çiftliği & Su Kuyusu",
      status: "active",
      xp: 120
    },
    {
      id: "css_2",
      title: "2. CSS Seçicileri & Öncelik Sırası",
      desc: "Etiket, sınıf (.), ID (#), evrensel (*), grup (,) ve torun seçiciler ile !important öncelik yönetimi.",
      reward: "💡 Şehir Elektrik Şebekesi",
      status: "locked",
      xp: 140
    },
    {
      id: "css_3",
      title: "3. Renkler & Arka Planlar (Colors & BG)",
      desc: "HEX, RGB, RGBA, background-color, background-image, background-size: cover ve repeat kontrolleri.",
      reward: "🚰 Su Arıtma & Çeşmeler",
      status: "locked",
      xp: 160
    },
    {
      id: "css_4",
      title: "4. Metin & Tipografi Stilleri",
      desc: "font-family, font-size, font-weight, text-align, text-decoration, line-height ve letter-spacing.",
      reward: "🌳 Şehir Parkı & Botanik Bahçe",
      status: "locked",
      xp: 180
    },
    {
      id: "css_5",
      title: "5. Kutu Modeli (Box Model Mimarisi)",
      desc: "Content, padding (iç boşluk), border (kenarlık), margin (dış boşluk) ve box-sizing: border-box.",
      reward: "🏢 Modern Rezidanslar & İş Kuleleri",
      status: "locked",
      xp: 200
    },
    {
      id: "css_6",
      title: "6. Kenarlıklar, Köşeler & Gölgeler",
      desc: "border-radius, box-shadow, text-shadow ve modern kart/kartvizit gölgelendirmeleri.",
      reward: "🎬 Sinema & Kültür Merkezi",
      status: "locked",
      xp: 220
    },
    {
      id: "css_7",
      title: "7. Görüntüleme & Görünürlük (Display)",
      desc: "display: block, inline, inline-block, none ve visibility: hidden farkları.",
      reward: "🎡 Lunapark & Dönme Dolap",
      status: "locked",
      xp: 250
    },
    {
      id: "css_8",
      title: "8. Konumlandırma (CSS Positioning)",
      desc: "position: static, relative, absolute, fixed, sticky ve z-index katman derinliği.",
      reward: "🏛️ Yönetim Sarayı & Belediye",
      status: "locked",
      xp: 280
    },
    {
      id: "css_9",
      title: "9. Taşma & Boyutlandırma (Overflow)",
      desc: "width, height, max-width, min-height, overflow: hidden, scroll, auto ve text-overflow: ellipsis.",
      reward: "🏥 Şehir Hastanesi & Acil Servis",
      status: "locked",
      xp: 300
    },
    {
      id: "css_10",
      title: "10. Sözde Sınıflar & Öğeler (Pseudo)",
      desc: ":hover, :focus, :active, :nth-child(n), ::before ve ::after ile dinamik stil katmanları.",
      reward: "🛍️ Alışveriş & Ticaret Merkezi",
      status: "locked",
      xp: 320
    },
    {
      id: "css_11",
      title: "11. Geçişler & Dönüşümler (Transitions)",
      desc: "transition (all 0.3s ease), transform (scale, rotate, translate) ve akıcı hover animasyonları.",
      reward: "🚄 Hızlı Tren Garı & Raylar",
      status: "locked",
      xp: 350
    },
    {
      id: "css_12",
      title: "12. CSS Animasyonları (@keyframes)",
      desc: "@keyframes, animation-name, duration, iteration-count: infinite ve timing-function döngüleri.",
      reward: "📡 5G Telekom & Uydu Kulesi",
      status: "locked",
      xp: 380
    },
    {
      id: "css_13",
      title: "13. Flexbox ile Tek Boyutlu Yerleşim",
      desc: "display: flex, flex-direction, justify-content, align-items, gap ve flex-wrap hizalamaları.",
      reward: "🚢 Uluslararası Liman & Konteynerler",
      status: "locked",
      xp: 400
    },
    {
      id: "css_14",
      title: "14. CSS Grid ile İki Boyutlu Izgara",
      desc: "display: grid, grid-template-columns, fr kesirli birimi, repeat(), gap ve grid-column alan yerleşimi.",
      reward: "🏦 Merkez Bankası & Finans Merkezi",
      status: "locked",
      xp: 400
    },
    {
      id: "css_15",
      title: "15. Responsive Tasarım & Medya Sorguları",
      desc: "@media (max-width: 768px), Mobil Öncelikli (Mobile First) yaklaşım ve esnek arayüz uyarlamaları.",
      reward: "🏛️ Hükümet Sarayı & Kongre Merkezi",
      status: "locked",
      xp: 420
    },
    {
      id: "css_16",
      title: "16. CSS Değişkenleri & Kapsamlı Proje",
      desc: ":root CSS Custom Properties (--ana-renk), var(), calc() ve modern kart bileşeni mimarisi.",
      reward: "🚀 Teknoloji Vadisi & Roket Üssü",
      status: "locked",
      xp: 450
    }
  ],
  bootstrap: [
    {
      id: "bs_1",
      title: "1. Bootstrap 5'e Giriş & CDN Kurulumu",
      desc: "CDN CSS ve JS bundle bağlama, .container ve .container-fluid ile sayfa genişlik düzeni.",
      reward: "🏡 Giriş Çiftliği & Su Kuyusu",
      status: "active",
      xp: 120
    },
    {
      id: "bs_2",
      title: "2. Grid Sistemi & Responsive Izgara",
      desc: ".row, .col, breakpoint sütunları (.col-12, .col-md-6, .col-lg-4) ve esnek yerleşim.",
      reward: "💡 Şehir Elektrik Şebekesi",
      status: "locked",
      xp: 140
    },
    {
      id: "bs_3",
      title: "3. Tipografi, Renkler & Arka Planlar",
      desc: ".display-1..6, .lead, .text-primary/success/danger, .bg-dark/light ve .text-center hizalama.",
      reward: "🚰 Su Arıtma & Çeşmeler",
      status: "locked",
      xp: 160
    },
    {
      id: "bs_4",
      title: "4. Boşluklar (Spacing), Kenarlıklar & Gölgeler",
      desc: ".m-3, .p-4, .mx-auto, .border, .rounded-pill, .rounded-circle ve .shadow gölge efektleri.",
      reward: "🌳 Şehir Parkı & Botanik Bahçe",
      status: "locked",
      xp: 180
    },
    {
      id: "bs_5",
      title: "5. Butonlar, Buton Grupları & Rozetler",
      desc: ".btn .btn-primary, .btn-outline-*, .btn-lg/.btn-sm, .btn-group ve .badge rozetleri.",
      reward: "🏢 Modern Rezidanslar & İş Kuleleri",
      status: "locked",
      xp: 200
    },
    {
      id: "bs_6",
      title: "6. Uyarılar (Alerts), İlerleme & Spinnerlar",
      desc: ".alert .alert-success, .alert-dismissible, .progress, .progress-bar ve .spinner-border.",
      reward: "🎬 Sinema & Kültür Merkezi",
      status: "locked",
      xp: 220
    },
    {
      id: "bs_7",
      title: "7. Tablolar & Liste Grupları",
      desc: ".table, .table-striped, .table-hover, .table-bordered, .table-responsive ve .list-group.",
      reward: "🎡 Lunapark & Dönme Dolap",
      status: "locked",
      xp: 250
    },
    {
      id: "bs_8",
      title: "8. Kart Bileşeni Mimarisi (Cards)",
      desc: ".card, .card-header, .card-body, .card-title, .card-text, .card-img-top ve .card-footer.",
      reward: "🏛️ Yönetim Sarayı & Belediye",
      status: "locked",
      xp: 280
    },
    {
      id: "bs_9",
      title: "9. Form Kontrolleri & Girdiler (Forms)",
      desc: ".form-control, .form-label, .form-select, .form-check, .form-check-input ve .input-group.",
      reward: "🏥 Şehir Hastanesi & Acil Servis",
      status: "locked",
      xp: 300
    },
    {
      id: "bs_10",
      title: "10. Navigasyon & Menü Çubuğu (Navbar)",
      desc: ".navbar, .navbar-expand-lg, .navbar-dark .bg-dark, .navbar-brand, .navbar-nav ve .nav-link.",
      reward: "🛍️ Alışveriş & Ticaret Merkezi",
      status: "locked",
      xp: 340
    },
    {
      id: "bs_11",
      title: "11. Açılır Pencereler & Etkileşim (Modal)",
      desc: ".modal, .modal-dialog, .modal-content, data-bs-toggle='modal', data-bs-target ve .collapse.",
      reward: "🚄 Hızlı Tren Garı & Raylar",
      status: "locked",
      xp: 380
    },
    {
      id: "bs_12",
      title: "12. Kapsamlı Landing Page Projesi",
      desc: "Navbar, Hero Section, 3'lü kart ızgarası, form ve footer birleştiren modern Bootstrap projesi.",
      reward: "🚀 Teknoloji Vadisi & Roket Üssü",
      status: "locked",
      xp: 450
    }
  ],
  javascript: [
    {
      id: "js_1",
      title: "1. JS'e Giriş, Çıktı & Değişkenler",
      desc: "console.log(), alert(), let, const, var, Global ve Block Scope ({}) yönetimi.",
      reward: "🏡 Giriş Çiftliği & Su Kuyusu",
      status: "active",
      xp: 120
    },
    {
      id: "js_2",
      title: "2. Veri Tipleri & Operatörler",
      desc: "typeof, Number, String, Boolean, type casting (Number(), String()), aritmetik, katı eşitlik (===) ve mantık (&&, ||).",
      reward: "💡 Şehir Elektrik Şebekesi",
      status: "locked",
      xp: 140
    },
    {
      id: "js_3",
      title: "3. Karar Yapıları (If, Switch & Ternary)",
      desc: "if, else if, else blokları, switch-case-default yapısı ve tek satırlık Ternary (koşul ? a : b) kontrolü.",
      reward: "🚰 Su Arıtma & Çeşmeler",
      status: "locked",
      xp: 160
    },
    {
      id: "js_4",
      title: "4. Döngüler (For & While)",
      desc: "for döngüsü, while, sayaç artırma, break ile erken çıkış ve continue ile adımı atlama.",
      reward: "🌳 Şehir Parkı & Botanik Bahçe",
      status: "locked",
      xp: 180
    },
    {
      id: "js_5",
      title: "5. Fonksiyonlar & Arrow Functions",
      desc: "function tanımlama, parametreler, return değeri ve modern ES6 Arrow Function (() => {}) mimarisi.",
      reward: "🏢 Modern Rezidanslar & İş Kuleleri",
      status: "locked",
      xp: 200
    },
    {
      id: "js_6",
      title: "6. Diziler (Arrays) & Temel Metotlar",
      desc: "Dizi tanımlama ([]), push, pop, shift, unshift, indexOf, includes ve .length özelliği.",
      reward: "🎬 Sinema & Kültür Merkezi",
      status: "locked",
      xp: 220
    },
    {
      id: "js_7",
      title: "7. İleri Dizi Metotları (ES6+ Iterators)",
      desc: "forEach, map ile dönüştürme, filter ile filtreleme, find ve reduce ile veri toplama.",
      reward: "🎡 Lunapark & Dönme Dolap",
      status: "locked",
      xp: 250
    },
    {
      id: "js_8",
      title: "8. Nesneler (Objects) & Destructuring",
      desc: "Key-value obje yapısı ({}), this anahtarı, Object.keys(), Object.values() ve Obje Parçalama (Destructuring).",
      reward: "🏛️ Yönetim Sarayı & Belediye",
      status: "locked",
      xp: 280
    },
    {
      id: "js_9",
      title: "9. String, Math & Template Literals",
      desc: "trim(), toUpperCase(), split(), replace(), Backtick Template Literals (${ad}) ve Math.floor()/random().",
      reward: "🏥 Şehir Hastanesi & Acil Servis",
      status: "locked",
      xp: 300
    },
    {
      id: "js_10",
      title: "10. DOM Seçicileri & İçerik Yönetimi",
      desc: "getElementById, querySelector, querySelectorAll, textContent, innerHTML ve input.value okuma/yazma.",
      reward: "🛍️ Alışveriş & Ticaret Merkezi",
      status: "locked",
      xp: 320
    },
    {
      id: "js_11",
      title: "11. DOM Stil & CSS Sınıfı (classList)",
      desc: "element.style.color, classList.add(), remove(), toggle() ve contains() ile dinamik stil kontrolü.",
      reward: "🚄 Hızlı Tren Garı & Raylar",
      status: "locked",
      xp: 350
    },
    {
      id: "js_12",
      title: "12. DOM Olayları (Event Listeners)",
      desc: "addEventListener('click', 'input', 'submit'), event nesnesi, e.target ve e.preventDefault().",
      reward: "📡 5G Telekom & Uydu Kulesi",
      status: "locked",
      xp: 380
    },
    {
      id: "js_13",
      title: "13. Dinamik DOM Eleman Yönetimi",
      desc: "document.createElement(), appendChild(), prepend(), remove() ve parentElement ile dinamik UI üretimi.",
      reward: "🚢 Uluslararası Liman & Konteynerler",
      status: "locked",
      xp: 420
    },
    {
      id: "js_14",
      title: "14. Web Storage & Kapsamlı Proje",
      desc: "localStorage.setItem, getItem, removeItem, JSON.stringify, JSON.parse ve Todo/Sepet Projesi.",
      reward: "🚀 Teknoloji Vadisi & Roket Üssü",
      status: "locked",
      xp: 450
    }
  ],
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
  sql: [
    {
      id: "sql_1",
      title: "1. SQL'e Giriş, SELECT & FROM Sorguları",
      desc: "İlişkisel veritabanı temelleri, SELECT *, belirli sütunları seçme ve SELECT DISTINCT ile tekilleştirme.",
      reward: "🏡 Giriş Çiftliği & Su Kuyusu",
      status: "active",
      xp: 120
    },
    {
      id: "sql_2",
      title: "2. WHERE ile Veri Filtreleme & Karşılaştırma",
      desc: "WHERE koşul cümlesi, sayısal ve metin karşılaştırmaları (=, >, <, >=, <=, !=, <>).",
      reward: "💡 Şehir Elektrik Şebekesi",
      status: "locked",
      xp: 140
    },
    {
      id: "sql_3",
      title: "3. Mantıksal Operatörler (AND, OR, NOT)",
      desc: "Çoklu filtre koşulları, AND ile zorunlu şartlar, OR ile alternatifler, NOT ile tersleme ve parantez önceliği.",
      reward: "🚰 Su Arıtma & Çeşmeler",
      status: "locked",
      xp: 160
    },
    {
      id: "sql_4",
      title: "4. Sıralama (ORDER BY) & Sınırlandırma (LIMIT)",
      desc: "ORDER BY ASC (artan) ve DESC (azalan) sıralama, çoklu sütuna göre sıralama ve LIMIT ile ilk N kaydı çekme.",
      reward: "🌳 Şehir Parkı & Botanik Bahçe",
      status: "locked",
      xp: 180
    },
    {
      id: "sql_5",
      title: "5. Metin Arama & Jokerler (LIKE & Wildcards)",
      desc: "Metin içinde desen arama, LIKE operatörü, % (sıfır veya çok karakter) ve _ (tek karakter) jokerleri.",
      reward: "🏢 Modern Rezidanslar & İş Kuleleri",
      status: "locked",
      xp: 200
    },
    {
      id: "sql_6",
      title: "6. Küme ve Aralık Operatörleri (IN & BETWEEN)",
      desc: "IN ile liste içi eleman kontrolü, BETWEEN ile sayı/tarih aralıkları ve NOT IN / NOT BETWEEN kullanımı.",
      reward: "🎬 Sinema & Kültür Merkezi",
      status: "locked",
      xp: 220
    },
    {
      id: "sql_7",
      title: "7. Boş Değerler (NULL, IS NULL & COALESCE)",
      desc: "NULL kavramı, IS NULL ile boşluk denetimi, IS NOT NULL ve COALESCE ile varsayılan değer atama.",
      reward: "🎡 Lunapark & Dönme Dolap",
      status: "locked",
      xp: 250
    },
    {
      id: "sql_8",
      title: "8. Toplama & İstatistik Fonksiyonları (Aggregate)",
      desc: "COUNT(*) satır sayma, SUM() toplam alma, AVG() ortalama hesaplama, MIN()/MAX() ve AS takma adları.",
      reward: "🏛️ Yönetim Sarayı & Belediye",
      status: "locked",
      xp: 280
    },
    {
      id: "sql_9",
      title: "9. Gruplama (GROUP BY) & Grup Filtresi (HAVING)",
      desc: "GROUP BY ile kategori bazlı özetler çıkarma ve HAVING ile gruplanmış sonuçları filtreleme farkı.",
      reward: "🏥 Şehir Hastanesi & Acil Servis",
      status: "locked",
      xp: 300
    },
    {
      id: "sql_10",
      title: "10. Yeni Kayıt Ekleme (INSERT INTO & VALUES)",
      desc: "Tabloya tek satır veri ekleme, belirli sütunları doldurma ve çoklu satır (batch) INSERT işlemleri.",
      reward: "🛍️ Alışveriş & Ticaret Merkezi",
      status: "locked",
      xp: 320
    },
    {
      id: "sql_11",
      title: "11. Veri Güncelleme & Silme (UPDATE, DELETE & TRUNCATE)",
      desc: "UPDATE SET ile güvenli veri güncelleme, DELETE FROM ile satır silme ve TRUNCATE TABLE ile tablo sıfırlama.",
      reward: "🚄 Hızlı Tren Garı & Raylar",
      status: "locked",
      xp: 350
    },
    {
      id: "sql_12",
      title: "12. İlişkisel Tabloları Birleştirme (INNER JOIN)",
      desc: "Primary Key & Foreign Key ilişkileri, INNER JOIN ON sözdizimi, tablo takma adları (Alias) ve 3'lü tablo birleştirme.",
      reward: "📡 5G Telekom & Uydu Kulesi",
      status: "locked",
      xp: 380
    },
    {
      id: "sql_13",
      title: "13. Gelişmiş Birleştirmeler (LEFT, RIGHT & FULL JOIN)",
      desc: "LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN ve ilişkisiz kayıtları bulma (LEFT JOIN + IS NULL) mimarisi.",
      reward: "🚢 Uluslararası Liman & Konteynerler",
      status: "locked",
      xp: 420
    },
    {
      id: "sql_14",
      title: "14. Tablo Yönetimi & Kısıtlamalar (DDL & Constraints)",
      desc: "CREATE TABLE, PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, ALTER TABLE ve DROP TABLE yönetimi.",
      reward: "🚀 Teknoloji Vadisi & Roket Üssü",
      status: "locked",
      xp: 450
    }
  ]
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
  const svg = document.getElementById('city-svg') || document.getElementById('city-dynamic-svg');

  const statusText = document.getElementById('city-stage-badge') || document.getElementById('city-status-text');
  const countText = document.getElementById('city-building-count');

  if (countText) {
    countText.textContent = `${completedCount} / 14 Bina`;
  }

  if (statusText) {
    let phaseName = '1. Seviye: Başlangıç Köyü';
    if (completedCount >= 14) phaseName = '7. Seviye: Mega Siber Metropol';
    else if (completedCount >= 12) phaseName = '6. Seviye: Uluslararası Liman & Metropol';
    else if (completedCount >= 9) phaseName = '5. Seviye: Ticaret & Sanayi Şehri';
    else if (completedCount >= 6) phaseName = '4. Seviye: Kültür & Teknoloji Şehri';
    else if (completedCount >= 3) phaseName = '3. Seviye: Gelişen Kasaba';
    else if (completedCount >= 1) phaseName = '2. Seviye: İlk Yerleşim';

    statusText.textContent = phaseName;
  }

  // 3D İzometrik Kutu (Bina / Yapı Bloğu) Yardımcısı
  const isoBox = (x, y, w, d, h, topCol, leftCol, rightCol, stroke = 'rgba(15,23,42,0.15)') => {
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
  const treeLangIcon = document.getElementById('tree-lang-icon') || document.getElementById('course-lang-icon');
  const treeLangTitle = document.getElementById('tree-lang-title') || document.getElementById('course-lang-title');
  const treeLangDesc = document.getElementById('tree-lang-desc');
  const treeProgressFill = document.getElementById('tree-progress-bar-fill') || document.getElementById('course-progress-fill');
  const treeProgressText = document.getElementById('tree-progress-text') || document.getElementById('course-progress-text');
  const roadmapXpCount = document.getElementById('roadmap-xp-count');

  if (treeLangIcon) treeLangIcon.textContent = curLang.icon || '💻';
  if (treeLangTitle) treeLangTitle.textContent = `${curLang.name}`;
  if (treeLangDesc) treeLangDesc.textContent = `Gelişen Şehir & Konu Haritası (${topics.length} Konu)`;
  if (roadmapXpCount) roadmapXpCount.textContent = `${state.xp || 0} XP`;

  // Tamamlanan ve Aktif konu hesaplama
  const doneCount = topics.filter(t => t.status === 'done').length;
  const progressPercent = Math.round((doneCount / topics.length) * 100);

  if (treeProgressFill) treeProgressFill.style.width = `${progressPercent}%`;
  if (treeProgressText) treeProgressText.textContent = `${doneCount} / ${topics.length} Konu Tamamlandı (%${progressPercent})`;

  // Şehir Görselini Çiz
  renderCityVisual(doneCount);

  // Dikey Konu Yol Haritasını Oluştur
  const container = document.getElementById('topics-list-container') || document.getElementById('roadmap-timeline-list');
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

    const safeTitle = (topic.title || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const safeDesc = (topic.desc || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    row.innerHTML = `
      ${lineHTML}
      <div class="timeline-node ${nodeClass}">${nodeIcon}</div>
      <div class="timeline-card ${isActive ? 'card-active' : ''} ${isLocked ? 'card-locked' : ''}">
        <div class="timeline-card-header">
          <h3 class="timeline-topic-title">${safeTitle}</h3>
          <span class="timeline-status-badge ${badgeClass}">${badgeText}</span>
        </div>
        <p class="timeline-topic-desc">${safeDesc}</p>
        <div class="timeline-reward-tag">
          <span>🎁 Ödül:</span>
          <strong>${topic.reward}</strong>
        </div>
      </div>
    `;

    // Tıklama ile Hızlı Özet Modalını Açma (Kilitli olsa bile okunabilir)
    const cardEl = row.querySelector('.timeline-card');
    if (cardEl) {
      cardEl.addEventListener('click', () => {
        state.selectedNodeId = topic.id;
        sfx.playPop();
        openTopicReviewModal(topic);
      });
    }

    container.appendChild(row);
  });
}

function openTopicReviewModal(topic) {
  const modal = document.getElementById('review-modal') || document.getElementById('topic-review-modal');
  if (!modal) {
    state.selectedNodeId = topic.id;
    switchView('game');
    return;
  }

  const data = TOPIC_REVIEWS_DB[topic.id] || {
    title: topic.title,
    readTime: "2 dk okuma",
    rewardText: topic.reward,
    logic: topic.desc,
    syntaxRules: ["Temel sözdizim kurallarını dikkatlice inceleyin."],
    pitfalls: ["Hatalı değişken ve fonksiyon isimlerine dikkat edin."],
    exampleCode: "// Kodlama arenasında çözüme başlayın."
  };

  const badgeEl = document.getElementById('review-topic-badge');
  const rewardBadgeEl = document.getElementById('review-reward-badge') || document.getElementById('review-reward-text');
  const titleEl = document.getElementById('review-title') || document.getElementById('review-topic-title');
  const descEl = document.getElementById('review-desc');
  const goalEl = document.getElementById('review-goal-text');
  const syntaxListEl = document.getElementById('review-syntax-list');
  const trapsListEl = document.getElementById('review-traps-list');
  const codeEl = document.getElementById('review-code-snippet');
  const btnStart = document.getElementById('btn-start-practice');
  const lockedNotice = document.getElementById('review-locked-notice');

  if (badgeEl) badgeEl.textContent = `${topic.title.split('.')[0]}. Konu Özeti`;
  if (rewardBadgeEl) rewardBadgeEl.textContent = data.rewardText || topic.reward;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = topic.desc;
  if (goalEl) goalEl.textContent = data.logic;

  if (syntaxListEl) {
    syntaxListEl.innerHTML = '';
    (data.syntaxRules || []).forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = r;
      syntaxListEl.appendChild(li);
    });
  }

  if (trapsListEl) {
    trapsListEl.innerHTML = '';
    (data.pitfalls || []).forEach(p => {
      const li = document.createElement('li');
      li.innerHTML = p;
      trapsListEl.appendChild(li);
    });
  }

  if (codeEl) codeEl.textContent = data.exampleCode || '';

  const isLocked = topic.status === 'locked';
  if (btnStart) {
    btnStart.style.display = isLocked ? 'none' : 'flex';
    btnStart.onclick = () => {
      closeTopicReviewModal();
      state.selectedNodeId = topic.id;
      switchView('game');
    };
  }
  if (lockedNotice) {
    lockedNotice.style.display = isLocked ? 'block' : 'none';
  }

  modal.classList.add('open');
  document.body.classList.add('modal-open');
  sfx.playPop();
}

function closeTopicReviewModal() {
  const modal = document.getElementById('review-modal') || document.getElementById('topic-review-modal');
  if (modal) modal.classList.remove('open');
  document.body.classList.remove('modal-open');
}

// --- 7.1 KONU HIZLI ÖZET MODAL MOTORU (Topic Quick Review Modal Engine) ---

const TOPIC_REVIEWS_DB = {
  "html_1": {
    "title": "HTML Temelleri & Sayfa İskeleti",
    "readTime": "2 dk okuma",
    "rewardText": "🏡 Giriş Çiftliği & Su Kuyusu",
    "logic": "HTML (HyperText Markup Language), web sayfalarının iskeletini ve içeriğini yapılandıran standart işaretleme dilidir. Tarayıcılar HTML etiketlerini okuyarak görsel sayfaya dönüştürür.",
    "syntaxRules": [
      "<code>&lt;!DOCTYPE html&gt;</code> : Belgenin modern HTML5 standardında olduğunu tarayıcıya bildirir.",
      "<code>&lt;html lang=\"tr\"&gt; ... &lt;/html&gt;</code> : Tüm web sayfasını sarmalayan kök elemandır.",
      "<code>&lt;head&gt; ... &lt;/head&gt;</code> : Sayfa başlığı, meta etiketleri ve stil bağlantıları gibi teknik verileri tutar.",
      "<code>&lt;body&gt; ... &lt;/body&gt;</code> : Ekranda kullanıcıya görünen tüm görsel içerikleri barındırır.",
      "<code>&lt;title&gt;Başlık&lt;/title&gt;</code> : Tarayıcı sekmesinde görünen sayfa başlığını belirler."
    ],
    "pitfalls": [
      "⚠️ HTML bir programlama dili değil, bir içerik ve etiketleme (markup) dilidir.",
      "⚠️ Açılan etiketlerin neredeyse tamamı (örn: <code>&lt;body&gt;</code>) bir kapanış etiketiyle (<code>&lt;/body&gt;</code>) kapatılmalıdır.",
      "⚠️ <code>&lt;!DOCTYPE html&gt;</code> dokümanın en başında ve tek başına yer almalıdır."
    ],
    "exampleCode": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Kod Çiftliği</title>\n</head>\n<body>\n  <h1>Merhaba Dünya!</h1>\n</body>\n</html>"
  },
  "html_2": {
    "title": "Başlıklar & Metin Biçimlendirme",
    "readTime": "2 dk okuma",
    "rewardText": "💡 Şehir Elektrik Şebekesi",
    "logic": "İçeriği hiyerarşik başlıklara ayırmak ve metin parçalarını anlamsal olarak vurgulamak için kullanılır.",
    "syntaxRules": [
      "<code>&lt;h1&gt; ... &lt;/h6&gt;</code> : En büyük (h1) seviyeden en küçük (h6) seviyeye başlık hiyerarşisi.",
      "<code>&lt;p&gt; ... &lt;/p&gt;</code> : Paragraf bloğu oluşturur ve alt satıra boşluk bırakır.",
      "<code>&lt;strong&gt; / &lt;em&gt;</code> : Anlamsal olarak önemli ve vurgulu (italik) metin.",
      "<code>&lt;br&gt; / &lt;hr&gt;</code> : Alt satıra geçiş ve yatay tematik ayırıcı çizgi (kapanış etiketi gerektirmez).",
      "<code>&lt;mark&gt; / &lt;del&gt;</code> : Fosforlu sarı vurgu ve üzeri çizili metin."
    ],
    "pitfalls": [
      "⚠️ SEO açısından her sayfada yalnızca bir adet <code>&lt;h1&gt;</code> ana başlığı bulunmalıdır.",
      "⚠️ Sadece görsel kalınlık için <code>&lt;b&gt;</code>, anlamsal önem taşımıyorsa <code>&lt;strong&gt;</code> yerine CSS tercih edilmelidir.",
      "⚠️ <code>&lt;br&gt;</code> etiketi paragraflar arası boşluk vermek için değil, şiir/adres gibi aynı paragraf içi satır kırmalarda kullanılmalıdır."
    ],
    "exampleCode": "<h1>Web Geliştirme</h1>\n<p>HTML ile <strong>güçlü</strong> ve <em>hızlı</em> web sayfaları hazırlayabilirsiniz.<br>Hemen öğrenmeye başlayın.</p>\n<hr>"
  },
  "html_3": {
    "title": "Bağlantılar & Köprüler (Links)",
    "readTime": "2 dk okuma",
    "rewardText": "🚰 Su Arıtma & Çeşmeler",
    "logic": "Köprü metinleri (Hyperlinks) ile sayfalar arası geçiş, harici sitelere yönlendirme ve sayfa içi çapa gezintisi sağlanır.",
    "syntaxRules": [
      "<code>&lt;a href=\"url\"&gt;Metin&lt;/a&gt;</code> : Tıklanabilir bağlantı oluşturur.",
      "<code>target=\"_blank\"</code> : Bağlantıyı yeni sekmede açar.",
      "<code>rel=\"noopener noreferrer\"</code> : Yeni sekmede açılan linklerde güvenlik ve performans sağlar.",
      "<code>href=\"#bolum1\"</code> : Sayfa içindeki <code>id=\"bolum1\"</code> elemanına kaydırır.",
      "<code>href=\"mailto:eposta@site.com\"</code> : E-posta istemcisini tetikler."
    ],
    "pitfalls": [
      "⚠️ <code>href</code> özniteliği yazılmazsa <code>&lt;a&gt;</code> etiketi link özelliği göstermez.",
      "⚠️ Dış linklere <code>target=\"_blank\"</code> verirken güvenlik için <code>rel=\"noopener\"</code> eklenmelidir.",
      "⚠️ Sayfa içi çapa bağlantılarında <code>href</code> içine mutlaka <code>#</code> işareti konulmalıdır (örn: <code>href=\"#iletisim\"</code>)."
    ],
    "exampleCode": "<a href=\"https://www.w3schools.com\" target=\"_blank\" rel=\"noopener\">\n  W3Schools'u Ziyaret Et\n</a>\n<a href=\"#alt-kisim\">Sayfa Sonuna Git</a>"
  },
  "html_4": {
    "title": "Görseller & Medya Yönetimi (Images)",
    "readTime": "2 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Botanik Bahçe",
    "logic": "Web sayfasına resim, grafik ve ikonlar yerleştirir. Resimler sayfaya gömülmez, URL üzerinden bağlanarak çağrılır.",
    "syntaxRules": [
      "<code>&lt;img src=\"resim.jpg\" alt=\"Açıklama\"&gt;</code> : Kapanış etiketi olmayan tekil görsel etiketi.",
      "<code>src=\"...\"</code> : Görsel dosyasının dosya yolu veya web adresi.",
      "<code>alt=\"...\"</code> : Resim yüklenemediğinde veya ekran okuyucularda okunan alternatif metin.",
      "<code>width=\"300\" height=\"200\"</code> : Piksel cinsinden genişlik ve yükseklik.",
      "<code>&lt;figure&gt; &lt;figcaption&gt;</code> : Görsel ve alt başlığını semantik olarak gruplar."
    ],
    "pitfalls": [
      "⚠️ <code>alt</code> özniteliği erişilebilirlik ve SEO için zorunludur; asla boş bırakılmamalıdır.",
      "⚠️ <code>&lt;img&gt;</code> etiketi self-closing (tekil) bir etikettir; <code>&lt;/img&gt;</code> yazılmaz.",
      "⚠️ Resim dosya yolunda büyük-küçük harf ve Türkçe karakter hatalarına dikkat edilmelidir."
    ],
    "exampleCode": "<figure>\n  <img src=\"tarla.jpg\" alt=\"Yeşil Buğday Tarlası\" width=\"400\">\n  <figcaption>Hasat öncesi buğday tarlası</figcaption>\n</figure>"
  },
  "html_5": {
    "title": "Listeler (Sıralı, Sırasız & Tanım)",
    "readTime": "3 dk okuma",
    "rewardText": "🏢 Modern Rezidanslar & İş Kuleleri",
    "logic": "Maddeli ve sıralı içerikleri listelemek, navigasyon menüleri kurmak ve sözlük/terim açıklamaları hazırlamak için kullanılır.",
    "syntaxRules": [
      "<code>&lt;ul&gt; &lt;li&gt;Madde&lt;/li&gt; &lt;/ul&gt;</code> : Madde işaretli sırasız liste (Unordered List).",
      "<code>&lt;ol&gt; &lt;li&gt;Adım&lt;/li&gt; &lt;/ol&gt;</code> : Numaralandırılmış sıralı liste (Ordered List).",
      "<code>&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</code> : Tanım listesi, terim başlığı ve terim açıklaması.",
      "<code>type=\"A\" / start=\"5\"</code> : Sıralı listelerde başlangıç ve numara biçimi ayarı."
    ],
    "pitfalls": [
      "⚠️ <code>&lt;ul&gt;</code> ve <code>&lt;ol&gt;</code> etiketlerinin doğrudan alt çocuğu yalnızca <code>&lt;li&gt;</code> olmalıdır; araya doğrudan metin veya div konulmamalıdır.",
      "⚠️ İç içe (nested) listelerde alt liste (<code>&lt;ul&gt;</code>), bir önceki <code>&lt;li&gt;</code> etiketinin içine yazılmalıdır.",
      "⚠️ Kapanış <code>&lt;/li&gt;</code> etiketlerini unutmak liste hiyerarşisini bozar."
    ],
    "exampleCode": "<ul>\n  <li>Meyveler\n    <ul>\n      <li>Elma</li>\n      <li>Portakal</li>\n    </ul>\n  </li>\n  <li>Sebzeler</li>\n</ul>"
  },
  "html_6": {
    "title": "Tablo Temelleri (Tables)",
    "readTime": "3 dk okuma",
    "rewardText": "🎬 Sinema & Kültür Merkezi",
    "logic": "Verileri satır ve sütunlardan oluşan ızgara yapısında düzenli olarak sunmak için kullanılır.",
    "syntaxRules": [
      "<code>&lt;table&gt; ... &lt;/table&gt;</code> : Tablo ana kapsayıcısı.",
      "<code>&lt;tr&gt; ... &lt;/tr&gt;</code> : Tablo satırı (Table Row).",
      "<code>&lt;th&gt; ... &lt;/th&gt;</code> : Tablo başlık hücresi (Varsayılan olarak kalın ve ortalı).",
      "<code>&lt;td&gt; ... &lt;/td&gt;</code> : Standart veri hücresi (Table Data).",
      "<code>&lt;caption&gt;Başlık&lt;/caption&gt;</code> : Tablonun üst açıklaması."
    ],
    "pitfalls": [
      "⚠️ Tablolar sayfa düzeni (layout) yapmak için değil, yalnızca veri listelemek için kullanılmalıdır.",
      "⚠️ Hücreler (<code>&lt;th&gt;</code> veya <code>&lt;td&gt;</code>) daima bir <code>&lt;tr&gt;</code> satırı içinde olmalıdır.",
      "⚠️ Her satırdaki toplam sütun sayısı birbiriyle uyumlu olmalıdır."
    ],
    "exampleCode": "<table>\n  <caption>Ürün Fiyat Listesi</caption>\n  <tr>\n    <th>Ürün</th>\n    <th>Fiyat</th>\n  </tr>\n  <tr>\n    <td>Domates</td>\n    <td>30 TL</td>\n  </tr>\n</table>"
  },
  "html_7": {
    "title": "Gelişmiş Tablolar (Colspan & Rowspan)",
    "readTime": "3 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Tabloları anlamsal bölümlere ayırmak ve birden fazla hücreyi yatay veya dikeyde birleştirmek için kullanılır.",
    "syntaxRules": [
      "<code>&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</code> : Tablonun başlık, gövde ve dip toplam bölümleri.",
      "<code>colspan=\"2\"</code> : Hücreyi yatayda 2 sütun genişliğinde birleştirir.",
      "<code>rowspan=\"3\"</code> : Hücreyi dikeyde 3 satır yüksekliğinde birleştirir.",
      "<code>scope=\"col / row\"</code> : Başlık hücresinin etki yönünü erişilebilirlik için belirtir."
    ],
    "pitfalls": [
      "⚠️ <code>colspan</code> kullanıldığında aynı satırdaki fazla <code>&lt;td&gt;</code> hücreleri silinmelidir.",
      "⚠️ <code>rowspan</code> kullanıldığında alt satırlardaki çakışan hücreler kaldırılmalıdır; aksi halde tablo sağa doğru taşar.",
      "⚠️ <code>&lt;thead&gt;</code> ve <code>&lt;tbody&gt;</code> içinde mutlaka <code>&lt;tr&gt;</code> satırları bulunmalıdır."
    ],
    "exampleCode": "<table>\n  <thead>\n    <tr>\n      <th>İsim</th>\n      <th colspan=\"2\">İletişim</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Ahmet</td>\n      <td>555-1234</td>\n      <td>ahmet@mail.com</td>\n    </tr>\n  </tbody>\n</table>"
  },
  "html_8": {
    "title": "Blok & Satır İçi, Div & Span",
    "readTime": "2 dk okuma",
    "rewardText": "🏛️ Yönetim Sarayı & Belediye",
    "logic": "Elemanların ekranda kapladığı alan türünü belirler. Blok elemanlar tüm satırı kaplar; satır içi elemanlar yalnızca içeriği kadar yer tutar.",
    "syntaxRules": [
      "<code>&lt;div&gt; ... &lt;/div&gt;</code> : Blok (Block) seviyesinde genel amaçlı kapsayıcı.",
      "<code>&lt;span&gt; ... &lt;/span&gt;</code> : Satır içi (Inline) metin içi kapsayıcı.",
      "<code>class=\"kart-kutusu\"</code> : Birden fazla elemana verilebilen ortak stil sınıfı.",
      "<code>id=\"ana-baslik\"</code> : Sayfada yalnızca bir elemana özgü benzersiz kimlik."
    ],
    "pitfalls": [
      "⚠️ Bir sayfada aynı <code>id</code> değerine sahip birden fazla eleman bulunamaz.",
      "⚠️ Satır içi (inline) bir elemanın içine blok seviyesinde bir eleman (örn: span içine div) konulmamalıdır.",
      "⚠️ Anlamsız aşırı div kullanımından (div soup) kaçınılmalı, semantik etiketler tercih edilmelidir."
    ],
    "exampleCode": "<div class=\"kart\" id=\"kart-1\">\n  <h3>Ürün Kartı</h3>\n  <p>Fiyat: <span class=\"fiyat\">150 TL</span></p>\n</div>"
  },
  "html_9": {
    "title": "Temel Form Elemanları (Form & Input)",
    "readTime": "3 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Kullanıcıdan veri almak ve bu verileri sunucuya göndermek için form kontrolleri oluşturur.",
    "syntaxRules": [
      "<code>&lt;form action=\"/kaydet\" method=\"POST\"&gt;</code> : Form kapsayıcısı ve veri gönderim metodu.",
      "<code>&lt;label for=\"ad\"&gt;Adınız:&lt;/label&gt;</code> : Erişilebilir alan etiketi.",
      "<code>&lt;input type=\"text\" id=\"ad\" name=\"kullanici_adi\"&gt;</code> : Tek satırlı metin girişi.",
      "<code>&lt;input type=\"password\"&gt; / &lt;input type=\"email\"&gt;</code> : Şifre ve e-posta girişleri.",
      "<code>&lt;input type=\"radio\" name=\"cinsiyet\"&gt;</code> : Ortak name grubunda tekli seçim.",
      "<code>&lt;input type=\"checkbox\"&gt;</code> : Bağımsız çoklu onay kutusu.",
      "<code>&lt;button type=\"submit\"&gt;Gönder&lt;/button&gt;</code> : Formu sunucuya gönderen buton."
    ],
    "pitfalls": [
      "⚠️ <code>name</code> özniteliği yazılmayan inputların değerleri sunucuya iletilmez.",
      "⚠️ <code>label</code> etiketindeki <code>for</code> ile inputun <code>id</code> değeri birebir eşleşmelidir.",
      "⚠️ Radyo butonlarında tekli seçim çalışması için tüm seçeneklerin <code>name</code> değeri aynı olmalıdır."
    ],
    "exampleCode": "<form action=\"/giris\" method=\"POST\">\n  <label for=\"eposta\">E-posta:</label>\n  <input type=\"email\" id=\"eposta\" name=\"email\" required>\n  <button type=\"submit\">Giriş Yap</button>\n</form>"
  },
  "html_10": {
    "title": "Gelişmiş Form Kontrolleri & Doğrulama",
    "readTime": "3 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "Çok satırlı metinler, açılır menüler, veri gruplama ve HTML5 yerleşik istemci doğrulama mekanizmaları sunar.",
    "syntaxRules": [
      "<code>&lt;textarea rows=\"4\" cols=\"50\"&gt;&lt;/textarea&gt;</code> : Çok satırlı metin alanı.",
      "<code>&lt;select&gt; &lt;option value=\"1\"&gt;Seçenek&lt;/option&gt; &lt;/select&gt;</code> : Açılır menü (Dropdown).",
      "<code>&lt;datalist id=\"sehirler\"&gt;</code> : Input için otomatik tamamlama öneri listesi.",
      "<code>&lt;fieldset&gt; &lt;legend&gt;Grup Başlığı&lt;/legend&gt; &lt;/fieldset&gt;</code> : Form alanlarını çerçeve içine alıp gruplar.",
      "<code>required / placeholder / min / max / pattern</code> : Form doğrulama ve ipucu öznitelikleri."
    ],
    "pitfalls": [
      "⚠️ <code>&lt;textarea&gt;</code> etiketinin varsayılan değeri <code>value=\"\"</code> ile değil, etiketlerin arasına yazılır.",
      "⚠️ <code>&lt;option&gt;</code> içine <code>value</code> yazılmazsa görünen metin gönderilir; mutlaka standart değer atanmalıdır.",
      "⚠️ <code>disabled</code> yapılan inputlar sunucuya POST edilmezken, <code>readonly</code> olanlar gönderilir."
    ],
    "exampleCode": "<fieldset>\n  <legend>İletişim Mesajı</legend>\n  <label for=\"konu\">Konu:</label>\n  <select id=\"konu\" name=\"konu\">\n    <option value=\"destek\">Destek Talebi</option>\n    <option value=\"oneri\">Öneri / İstek</option>\n  </select>\n  <textarea name=\"mesaj\" placeholder=\"Mesajınız...\" required></textarea>\n</fieldset>"
  },
  "html_11": {
    "title": "Semantik HTML5 Mimarisi",
    "readTime": "3 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Raylar",
    "logic": "Sayfa bölümlerini div yerine anlamsal etiketlerle kurarak arama motorlarına (SEO) ve ekran okuyuculara net bir harita sunar.",
    "syntaxRules": [
      "<code>&lt;header&gt; ... &lt;/header&gt;</code> : Sayfanın veya bölümün üst bilgi ve logo alanı.",
      "<code>&lt;nav&gt; ... &lt;/nav&gt;</code> : Ana menü ve gezinti linkleri bölümü.",
      "<code>&lt;main&gt; ... &lt;/main&gt;</code> : Sayfanın tekil ana içerik gövdesi (sayfada 1 adet olmalıdır).",
      "<code>&lt;section&gt; ... &lt;/section&gt;</code> : Tematik olarak ilişkili bağımsız konu bölümü.",
      "<code>&lt;article&gt; ... &lt;/article&gt;</code> : Kendi başına anlam ifade eden bağımsız yazı/haber kartı.",
      "<code>&lt;aside&gt; ... &lt;/aside&gt;</code> : Yan çubuk (Sidebar) veya ikincil içerik.",
      "<code>&lt;footer&gt; ... &lt;/footer&gt;</code> : Telif hakkı, alt menü ve iletişim bilgilerini içeren alt bilgi."
    ],
    "pitfalls": [
      "⚠️ Sayfada birden fazla <code>&lt;main&gt;</code> etiketi bulunmamalıdır.",
      "⚠️ Her stil ihtiyacı için semantik etiket zorlanmamalıdır; anlamsız kapsayıcılar için <code>div</code> kullanılmalıdır.",
      "⚠️ <code>&lt;section&gt;</code> içinde genellikle kendine ait bir başlık (h2, h3) bulunmalıdır."
    ],
    "exampleCode": "<header>\n  <h1>Blog Sitem</h1>\n  <nav><a href=\"#\">Anasayfa</a></nav>\n</header>\n<main>\n  <article>\n    <h2>HTML5 Semantik Yapı</h2>\n    <p>Semantik etiketler erişilebilirliği artırır.</p>\n  </article>\n</main>\n<footer>&copy; 2026 Kod Çiftliği</footer>"
  },
  "html_12": {
    "title": "Multimedya & Gömülü İçerikler",
    "readTime": "3 dk okuma",
    "rewardText": "📡 5G Telekom & Uydu Kulesi",
    "logic": "Flash gibi eklentilere gerek duymadan yerel ses, video ve harici web kaynaklarını (YouTube, harita) sayfaya entegre eder.",
    "syntaxRules": [
      "<code>&lt;audio controls&gt; &lt;source src=\"ses.mp3\" type=\"audio/mpeg\"&gt; &lt;/audio&gt;</code> : Ses oynatıcı.",
      "<code>&lt;video width=\"640\" controls poster=\"kapak.jpg\"&gt; ... &lt;/video&gt;</code> : Video oynatıcı.",
      "<code>autoplay muted loop</code> : Otomatik oynatma (sessiz mod zorunlu), döngüye alma.",
      "<code>&lt;iframe src=\"url\" title=\"Açıklama\"&gt;&lt;/iframe&gt;</code> : Başka bir web sayfasını veya YouTube videosunu çerçeve içine gömer."
    ],
    "pitfalls": [
      "⚠️ Tarayıcı güvenlik politikaları gereği <code>autoplay</code> özniteliğinin çalışması için <code>muted</code> (sessiz) zorunludur.",
      "⚠️ <code>&lt;iframe&gt;</code> kullanırken erişilebilirlik için mutlaka anlamlı bir <code>title</code> özniteliği verilmelidir.",
      "⚠️ Birden fazla <code>&lt;source&gt;</code> formatı (.mp4, .webm) sunmak tarayıcı uyumluluğunu garanti eder."
    ],
    "exampleCode": "<video width=\"480\" height=\"270\" controls poster=\"kapak.jpg\">\n  <source src=\"tanitim.mp4\" type=\"video/mp4\">\n  <source src=\"tanitim.webm\" type=\"video/webm\">\n  Tarayıcınız video etiketini desteklemiyor.\n</video>"
  },
  "html_13": {
    "title": "Head, Meta Etiketleri & Varlıklar",
    "readTime": "3 dk okuma",
    "rewardText": "🚢 Uluslararası Liman & Konteynerler",
    "logic": "Arama motoru optimizasyonu (SEO), mobil ekran uyumu (responsive), karakter seti ve özel karakterlerin hatasız gösterimini sağlar.",
    "syntaxRules": [
      "<code>&lt;meta charset=\"UTF-8\"&gt;</code> : Türkçe ve evrensel tüm karakterleri destekler.",
      "<code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code> : Mobil cihazlarda tam uyumlu ölçekleme.",
      "<code>&lt;meta name=\"description\" content=\"Açıklama\"&gt;</code> : Google arama sonuçlarında görünen snippet açıklaması.",
      "<code>&amp;nbsp; / &amp;lt; / &amp;gt; / &amp;amp; / &amp;copy;</code> : Bölünemez boşluk, <, >, & ve telif hakkı özel karakterleri."
    ],
    "pitfalls": [
      "⚠️ <code>&lt;meta charset=\"UTF-8\"&gt;</code> tanımlanmazsa Türkçe karakterlerde (ş, ğ, ı) bozulmalar yaşanır.",
      "⚠️ HTML içinde <code><</code> veya <code>></code> işareti doğrudan yazılırsa etiket sanılabilir; <code>&amp;lt;</code> ve <code>&amp;gt;</code> kullanılmalıdır.",
      "⚠️ <code>viewport</code> meta etiketi olmayan sayfalar mobilde küçülerek okunaksız masaüstü modunda açılır."
    ],
    "exampleCode": "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"En iyi web geliştirme rehberi.\">\n  <title>SEO Uyumlu Sayfa</title>\n</head>\n<!-- Özel Karakterler: &copy; 2026 | 5 &lt; 10 -->"
  },
  "html_14": {
    "title": "Kapsamlı Web Sayfası İskelet Projesi",
    "readTime": "4 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Roket Üssü",
    "logic": "Tüm semantik HTML5 yapısını, meta etiketlerini, formları, tabloları, görselleri ve linkleri birleştiren üretim seviyesinde ana proje.",
    "syntaxRules": [
      "<code>Semantic Layout</code> : header + nav + main (article, section, aside) + footer.",
      "<code>Accessibility (a11y)</code> : Anlamlı alt metinleri, form label bağlantıları ve hiyerarşik başlıklar.",
      "<code>Clean Code & Validation</code> : W3C standartlarına uygun hatasız etiket kapanışları ve girintileme.",
      "<code>Meta & SEO Architecture</code> : Eksiksiz head yapılandırması."
    ],
    "pitfalls": [
      "⚠️ Tüm etiketlerin düzgün açılıp hiyerarşik sırada kapatıldığından emin olun.",
      "⚠️ Görsellerde ve formlarda erişilebilirlik özniteliklerini (<code>alt</code>, <code>label for</code>, <code>required</code>) eksiksiz bırakın.",
      "⚠️ CSS ve JS dosyalarını doğru link ve script etiketleriyle bağlayın."
    ],
    "exampleCode": "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mega Siber Metropol</title>\n</head>\n<body>\n  <header>\n    <h1>CodeFarm Portalı</h1>\n  </header>\n  <main>\n    <p>14 Modül Başarıyla Tamamlandı!</p>\n  </main>\n  <footer>&copy; 2026 CodeFarm</footer>\n</body>\n</html>"
  },
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

// HTML Topic Review Aliasları
TOPIC_REVIEWS_DB.h1 = TOPIC_REVIEWS_DB.html_1;
TOPIC_REVIEWS_DB.h2 = TOPIC_REVIEWS_DB.html_2;
TOPIC_REVIEWS_DB.h3 = TOPIC_REVIEWS_DB.html_3;
TOPIC_REVIEWS_DB.h4 = TOPIC_REVIEWS_DB.html_4;
TOPIC_REVIEWS_DB.h5 = TOPIC_REVIEWS_DB.html_5;
TOPIC_REVIEWS_DB.h6 = TOPIC_REVIEWS_DB.html_6;
TOPIC_REVIEWS_DB.h7 = TOPIC_REVIEWS_DB.html_7;
TOPIC_REVIEWS_DB.h8 = TOPIC_REVIEWS_DB.html_8;
TOPIC_REVIEWS_DB.h9 = TOPIC_REVIEWS_DB.html_9;
TOPIC_REVIEWS_DB.h10 = TOPIC_REVIEWS_DB.html_10;
TOPIC_REVIEWS_DB.h11 = TOPIC_REVIEWS_DB.html_11;
TOPIC_REVIEWS_DB.h12 = TOPIC_REVIEWS_DB.html_12;
TOPIC_REVIEWS_DB.h13 = TOPIC_REVIEWS_DB.html_13;
TOPIC_REVIEWS_DB.h14 = TOPIC_REVIEWS_DB.html_14;

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

// --- 8. İNTERAKTİF KODLAMA VE KONTROL ALANI (Interactive Challenge & Code Engine) ---

const CHALLENGES_DATABASE = {
  html_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: DOCTYPE TANIMI",
      title: "1. Soru: HTML5 Doctype Bildirimi",
      prompt: "Web tarayıcısına bu belgenin modern bir HTML5 belgesi olduğunu bildiren DOCTYPE bildirimini yazabilir misin?",
      presetCode: "<!-- HTML5 Doctype Bildirimini Buraya Yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<!DOCTYPE html>", "<!DOCTYPE", "html>", "<", ">"],
      hint: "<!DOCTYPE html>",
      solution: "<!DOCTYPE html>",
      validator: (code) => {
        const clean = code.trim();
        if (/<!DOCTYPE\s+html>/i.test(clean)) {
          return { ok: true, msg: "Harika! HTML5 Doctype bildirimi başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen geçerli bir HTML5 bildirimi yazın: <!DOCTYPE html>" };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: KÖK ETİKETİ (HTML)",
      title: "2. Soru: Kök Eleman ve Dil Tanımı",
      prompt: "Tüm web sayfasını sarmalayan ve dili Türkçe ('tr') olarak belirten kök <html> etiketini ve kapanışını yazabilir misin?",
      presetCode: "<!-- lang='tr' özniteliğine sahip html etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<html lang=\"tr\">", "</html>", "lang=\"tr\"", "<html", ">"],
      hint: "<html lang=\"tr\">\n</html>",
      solution: "<html lang=\"tr\">\n</html>",
      validator: (code) => {
        const clean = code.trim();
        if (/<html\s+lang\s*=\s*["']tr["']\s*>[\s\S]*<\/html>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Türkçe dil öznitelikli kök html etiketi oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <html lang=\"tr\">...</html> şeklinde açılış ve kapanış etiketlerini yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: HEAD VE BODY AYRIMI",
      title: "3. Soru: Head ve Body Blokları",
      prompt: "Teknik verileri tutan <head> ve görsel içerikleri tutan <body> bölümlerini oluşturabilir misin?",
      presetCode: "<head>\n</head>\n<!-- Body etiketini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<body>", "</body>", "<head>", "</head>"],
      hint: "<head>\n</head>\n<body>\n</body>",
      solution: "<head>\n</head>\n<body>\n</body>",
      validator: (code) => {
        const clean = code.trim();
        if (/<head\s*>[\s\S]*<\/head\s*>\s*<body\s*>[\s\S]*<\/body\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! <head> ve <body> bölümleri doğru sırada tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <head></head> ve ardından <body></body> bloklarını eksiksiz yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: SAYFA BAŞLIĞI (TITLE)",
      title: "4. Soru: Tarayıcı Sekme Başlığı",
      prompt: "Head bölümü içine tarayıcı sekmesinde 'Kod Çiftliği' yazmasını sağlayan <title> etiketini ekleyebilir misin?",
      presetCode: "<head>\n  <!-- Title etiketini buraya ekleyin -->\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<title>Kod Çiftliği</title>", "<title>", "</title>", "Kod Çiftliği"],
      hint: "<head>\n  <title>Kod Çiftliği</title>\n</head>",
      solution: "<head>\n  <title>Kod Çiftliği</title>\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<title\s*>\s*Kod Çiftliği\s*<\/title\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! <title> etiketi ile sayfa sekme başlığı ayarlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <title>Kod Çiftliği</title> etiketini eklemelisiniz." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: TAM SAYFA İSKELETİ",
      title: "5. Soru: Eksiksiz HTML5 İskeleti",
      prompt: "Aşağıdaki iskelette eksik olan <body> açılış ve </html> kapanış etiketlerini tamamlayabilir misin?",
      presetCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <title>İlk Sayfam</title>\n</head>\n  <h1>Merhaba Dünya!</h1>\n</body>\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<body>", "</body>", "</html>", "<!DOCTYPE html>"],
      hint: "<body> etiketini <h1>'den önce açın ve dosyanın en sonuna </html> ekleyin.",
      solution: "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <title>İlk Sayfam</title>\n</head>\n<body>\n  <h1>Merhaba Dünya!</h1>\n</body>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        const hasDoc = /<!DOCTYPE\s+html>/i.test(clean);
        const hasHtml = /<html[^>]*>[\s\S]*<\/html>/i.test(clean);
        const hasHead = /<head>[\s\S]*<\/head>/i.test(clean);
        const hasBody = /<body>[\s\S]*<h1>[\s\S]*<\/h1>[\s\S]*<\/body>/i.test(clean);
        if (hasDoc && hasHtml && hasHead && hasBody) {
          return { ok: true, msg: "Tebrikler! Standart HTML5 iskeletini eksiksiz kurdunuz. 1. Modül Tamamlandı! 🏡" };
        }
        return { ok: false, msg: "Hata: Lütfen <body> açılışını ve en sondaki </html> kapanışını eksiksiz yazın." };
      }
    }
  ],
  html_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: ANA BAŞLIK (H1)",
      title: "1. Soru: Sayfa Ana Başlığı",
      prompt: "Web sayfasının en önemli başlığı olan 'Web Geliştirme' metnini <h1> etiketi içine yazabilir misin?",
      presetCode: "<!-- h1 etiketini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<h1>Web Geliştirme</h1>", "<h1>", "</h1>", "Web Geliştirme"],
      hint: "<h1>Web Geliştirme</h1>",
      solution: "<h1>Web Geliştirme</h1>",
      validator: (code) => {
        const clean = code.trim();
        if (/<h1\s*>\s*Web Geliştirme\s*<\/h1\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! <h1> ana başlığı başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <h1>Web Geliştirme</h1> şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: BAŞLIK HİYERARŞİSİ",
      title: "2. Soru: Alt Başlıklar (h2 ve h3)",
      prompt: "H1'in altına 'HTML Dersleri' başlıklı bir <h2> ve onun da altına 'Giriş' başlıklı bir <h3> etiketi ekleyebilir misin?",
      presetCode: "<h1>Programlama</h1>\n<!-- h2 ve h3 etiketlerini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<h2>HTML Dersleri</h2>", "<h3>Giriş</h3>", "<h2>", "<h3>"],
      hint: "<h2>HTML Dersleri</h2>\n<h3>Giriş</h3>",
      solution: "<h1>Programlama</h1>\n<h2>HTML Dersleri</h2>\n<h3>Giriş</h3>",
      validator: (code) => {
        const clean = code.trim();
        const hasH2 = /<h2\s*>\s*HTML Dersleri\s*<\/h2\s*>/i.test(clean);
        const hasH3 = /<h3\s*>\s*Giriş\s*<\/h3\s*>/i.test(clean);
        if (hasH2 && hasH3) {
          return { ok: true, msg: "Harika! Başlık hiyerarşisi (h2 ve h3) doğru uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: <h2>HTML Dersleri</h2> ve <h3>Giriş</h3> etiketlerini yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: PARAGRAF VE SATIR ATLATMA",
      title: "3. Soru: Paragraf ve <br> Kullanımı",
      prompt: "Bir <p> paragrafı oluşturup içine 'Birinci Satır' yazın, ardından <br> ile alt satıra geçip 'İkinci Satır' yazabilir misin?",
      presetCode: "<!-- Paragraf ve br etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<p>Birinci Satır<br>İkinci Satır</p>", "<p>", "</p>", "<br>"],
      hint: "<p>Birinci Satır<br>İkinci Satır</p>",
      solution: "<p>Birinci Satır<br>İkinci Satır</p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<p\s*>\s*Birinci Satır\s*<br\s*\/?>\s*İkinci Satır\s*<\/p\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! <p> ve <br> ile satır kırma başarıyla yapıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <p>Birinci Satır<br>İkinci Satır</p> formatında yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: METİN VURGULARI (STRONG & EM)",
      title: "4. Soru: Önemli ve Vurgulu Metin",
      prompt: "Aşağıdaki paragrafta 'önemli' kelimesini <strong>, 'hızlı' kelimesini <em> etiketiyle sarmalayabilir misin?",
      presetCode: "<p>HTML önemli ve hızlı bir dildir.</p>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<strong>önemli</strong>", "<em>hızlı</em>", "<strong>", "<em>"],
      hint: "<p>HTML <strong>önemli</strong> ve <em>hızlı</em> bir dildir.</p>",
      solution: "<p>HTML <strong>önemli</strong> ve <em>hızlı</em> bir dildir.</p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<strong>\s*önemli\s*<\/strong>/i.test(clean) && /<em>\s*hızlı\s*<\/em>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! <strong> ve <em> etiketleri doğru yerleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'önemli' kelimesini <strong>, 'hızlı' kelimesini <em> içine alın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: MARK VE YATAY ÇİZGİ (HR)",
      title: "5. Soru: Fosforlu Metin ve Ayırıcı Çizgi",
      prompt: "Aşağıdaki cümlenin sonuna <hr> yatay çizgi ekleyin ve 'fırsat' kelimesini <mark> etiketi içine alabilir misin?",
      presetCode: "<p>Bu harika bir fırsat!</p>\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<mark>fırsat</mark>", "<hr>", "<mark>", "<hr/>"],
      hint: "<p>Bu harika bir <mark>fırsat</mark>!</p>\n<hr>",
      solution: "<p>Bu harika bir <mark>fırsat</mark>!</p>\n<hr>",
      validator: (code) => {
        const clean = code.trim();
        const hasMark = /<mark\s*>\s*fırsat\s*<\/mark\s*>/i.test(clean);
        const hasHr = /<hr\s*\/?>/i.test(clean);
        if (hasMark && hasHr) {
          return { ok: true, msg: "Tebrikler! <mark> ve <hr> etiketleri başarıyla uygulandı. 2. Modül Tamamlandı! 💡" };
        }
        return { ok: false, msg: "Hata: 'fırsat' kelimesini <mark> içine alın ve altına <hr> ekleyin." };
      }
    }
  ],
  html_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: KÖPRÜ METNİ (A HREF)",
      title: "1. Soru: Temel Bağlantı Oluşturma",
      prompt: "Kullanıcıyı 'https://www.w3schools.com' adresine yönlendiren ve üzerinde 'W3Schools' yazan bir <a> linki oluşturabilir misin?",
      presetCode: "<!-- a etiketini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"https://www.w3schools.com\">W3Schools</a>", "<a href=\"", "</a>", "target=\"_blank\""],
      hint: "<a href=\"https://www.w3schools.com\">W3Schools</a>",
      solution: "<a href=\"https://www.w3schools.com\">W3Schools</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']https:\/\/www\.w3schools\.com\/?["'][^>]*>\s*W3Schools\s*<\/a>/i.test(clean)) {
          return { ok: true, msg: "Harika! W3Schools bağlantısı doğru kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <a href=\"https://www.w3schools.com\">W3Schools</a> şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: YENİ SEKMEDE AÇMA (TARGET)",
      title: "2. Soru: target='_blank' ve Güvenlik",
      prompt: "Aşağıdaki linkin yeni sekmede açılması için target=\"_blank\" ve güvenlik için rel=\"noopener\" özniteliklerini ekleyebilir misin?",
      presetCode: "<a href=\"https://google.com\">Google</a>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["target=\"_blank\"", "rel=\"noopener\"", "target=\"_blank\" rel=\"noopener\""],
      hint: "<a href=\"https://google.com\" target=\"_blank\" rel=\"noopener\">Google</a>",
      solution: "<a href=\"https://google.com\" target=\"_blank\" rel=\"noopener\">Google</a>",
      validator: (code) => {
        const clean = code.trim();
        const hasTarget = /target\s*=\s*["']_blank["']/i.test(clean);
        const hasRel = /rel\s*=\s*["'][^"']*noopener[^"']*["']/i.test(clean);
        if (hasTarget && hasRel) {
          return { ok: true, msg: "Mükemmel! target='_blank' ve rel='noopener' güvenle tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: target=\"_blank\" ve rel=\"noopener\" özniteliklerini linke ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: SAYFA İÇİ ÇAPA LİNK (BOOKMARK)",
      title: "3. Soru: Sayfa İçi #id Gezintisi",
      prompt: "Kullanıcı tıkladığında sayfa içindeki id=\"iletisim\" olan bölüme kaydırması için href=\"#iletisim\" olan 'İletişime Git' linki yazabilir misin?",
      presetCode: "<!-- Çapa linkini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"#iletisim\">İletişime Git</a>", "href=\"#iletisim\"", "<a href=\"#", "</a>"],
      hint: "<a href=\"#iletisim\">İletişime Git</a>",
      solution: "<a href=\"#iletisim\">İletişime Git</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']#iletisim["'][^>]*>\s*İletişime Git\s*<\/a>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Sayfa içi çapa bağlantısı (#id) başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <a href=\"#iletisim\">İletişime Git</a> şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: E-POSTA BAĞLANTISI (MAILTO)",
      title: "4. Soru: mailto: Protokolü",
      prompt: "Tıklandığında 'destek@codefarm.com' adresine e-posta gönderme penceresini açan 'Bize Yazın' linki oluşturabilir misin?",
      presetCode: "<!-- mailto linkini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"mailto:destek@codefarm.com\">Bize Yazın</a>", "href=\"mailto:", "mailto:destek@codefarm.com"],
      hint: "<a href=\"mailto:destek@codefarm.com\">Bize Yazın</a>",
      solution: "<a href=\"mailto:destek@codefarm.com\">Bize Yazın</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']mailto:destek@codefarm\.com["'][^>]*>\s*Bize Yazın\s*<\/a>/i.test(clean)) {
          return { ok: true, msg: "Harika! mailto e-posta bağlantısı doğru yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <a href=\"mailto:destek@codefarm.com\">Bize Yazın</a> yazmalısınız." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: BAĞLANTILI GÖRSEL",
      title: "5. Soru: Tıklanabilir Resim Linki",
      prompt: "Aşağıdaki 'logo.png' görselini 'anasayfa.html' adresine yönlendiren bir <a> etiketi içine alabilir misin?",
      presetCode: "<img src=\"logo.png\" alt=\"Logo\">",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"anasayfa.html\">", "</a>", "<a href=\"", "</a>"],
      hint: "<a href=\"anasayfa.html\">\n  <img src=\"logo.png\" alt=\"Logo\">\n</a>",
      solution: "<a href=\"anasayfa.html\">\n  <img src=\"logo.png\" alt=\"Logo\">\n</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']anasayfa\.html["'][^>]*>\s*<img\s+[^>]*src\s*=\s*["']logo\.png["'][^>]*>\s*<\/a>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Tıklanabilir görsel bağlantısı tamamlandı. 3. Modül Tamamlandı! 🚰" };
        }
        return { ok: false, msg: "Hata: <img> etiketini <a href=\"anasayfa.html\">...</a> içine almalısınız." };
      }
    }
  ],
  html_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: GÖRSEL EKLEME (IMG SRC)",
      title: "1. Soru: Resim Kaynağı (src)",
      prompt: "Web sayfasına 'ciftlik.jpg' dosyasını yükleyen <img> etiketini yazabilir misin?",
      presetCode: "<!-- img etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<img src=\"ciftlik.jpg\" alt=\"Çiftlik\">", "<img src=\"", "alt=\"", "ciftlik.jpg"],
      hint: "<img src=\"ciftlik.jpg\" alt=\"Çiftlik\">",
      solution: "<img src=\"ciftlik.jpg\" alt=\"Çiftlik\">",
      validator: (code) => {
        const clean = code.trim();
        if (/<img\s+[^>]*src\s*=\s*["']ciftlik\.jpg["'][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Harika! <img> etiketi ve src kaynak yolu doğru tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <img src=\"ciftlik.jpg\" alt=\"...\"> şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: ERİŞİLEBİLİRLİK (ALT ÖZNİTELİĞİ)",
      title: "2. Soru: Zorunlu Alternatif Metin",
      prompt: "Aşağıdaki resme ekran okuyucular ve SEO için alt=\"Yeşil Buğday Tarlası\" özniteliğini ekleyebilir misin?",
      presetCode: "<img src=\"tarla.png\">",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["alt=\"Yeşil Buğday Tarlası\"", "alt=\"", "width=\"300\""],
      hint: "<img src=\"tarla.png\" alt=\"Yeşil Buğday Tarlası\">",
      solution: "<img src=\"tarla.png\" alt=\"Yeşil Buğday Tarlası\">",
      validator: (code) => {
        const clean = code.trim();
        if (/<img\s+[^>]*alt\s*=\s*["']Yeşil Buğday Tarlası["'][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! alt açıklama metni başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: alt=\"Yeşil Buğday Tarlası\" özniteliğini ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: GÖRSEL BOYUTLANDIRMA",
      title: "3. Soru: width ve height Nitelikleri",
      prompt: "Aşağıdaki görsele genişlik width=\"400\" ve yükseklik height=\"250\" özniteliklerini ekleyebilir misin?",
      presetCode: "<img src=\"manzara.jpg\" alt=\"Manzara\">",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["width=\"400\"", "height=\"250\"", "width=\"400\" height=\"250\""],
      hint: "<img src=\"manzara.jpg\" alt=\"Manzara\" width=\"400\" height=\"250\">",
      solution: "<img src=\"manzara.jpg\" alt=\"Manzara\" width=\"400\" height=\"250\">",
      validator: (code) => {
        const clean = code.trim();
        const hasWidth = /width\s*=\s*["']?400["']?/i.test(clean);
        const hasHeight = /height\s*=\s*["']?250["']?/i.test(clean);
        if (hasWidth && hasHeight) {
          return { ok: true, msg: "Tebrikler! width ve height boyutları doğru ayarlandı. ✓" };
        }
        return { ok: false, msg: "Hata: width=\"400\" ve height=\"250\" özniteliklerini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: KLASÖR VE DOSYA YOLU (RELATIVE PATH)",
      title: "4. Soru: Alt Klasörden Resim Çağırma",
      prompt: "'images' klasörü içindeki 'traktor.png' resmini çağıracak src dosya yolunu ve alt=\"Traktör\" açıklamasını yazabilir misin?",
      presetCode: "<!-- img etiketini images klasöründen çağırın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<img src=\"images/traktor.png\" alt=\"Traktör\">", "src=\"images/traktor.png\"", "alt=\"Traktör\""],
      hint: "<img src=\"images/traktor.png\" alt=\"Traktör\">",
      solution: "<img src=\"images/traktor.png\" alt=\"Traktör\">",
      validator: (code) => {
        const clean = code.trim();
        if (/<img\s+[^>]*src\s*=\s*["']images\/traktor\.png["'][^>]*alt\s*=\s*["']Traktör["'][^>]*>/i.test(clean) ||
            /<img\s+[^>]*alt\s*=\s*["']Traktör["'][^>]*src\s*=\s*["']images\/traktor\.png["'][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Göreli dosya yolu (images/traktor.png) doğru bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <img src=\"images/traktor.png\" alt=\"Traktör\"> şeklinde yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: SEMANTİK GÖRSEL (FIGURE & FIGCAPTION)",
      title: "5. Soru: Görsel ve Açıklama Başlığı",
      prompt: "Bir <figure> etiketi açıp içine resim ve altına <figcaption>Organik Domatesler</figcaption> ekleyebilir misin?",
      presetCode: "<figure>\n  <img src=\"domates.jpg\" alt=\"Domates\">\n  <!-- figcaption ekleyin -->\n</figure>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<figcaption>Organik Domatesler</figcaption>", "<figcaption>", "</figcaption>", "</figure>"],
      hint: "<figure>\n  <img src=\"domates.jpg\" alt=\"Domates\">\n  <figcaption>Organik Domatesler</figcaption>\n</figure>",
      solution: "<figure>\n  <img src=\"domates.jpg\" alt=\"Domates\">\n  <figcaption>Organik Domatesler</figcaption>\n</figure>",
      validator: (code) => {
        const clean = code.trim();
        if (/<figure>[\s\S]*<img[^>]*>[\s\S]*<figcaption\s*>\s*Organik Domatesler\s*<\/figcaption\s*>[\s\S]*<\/figure>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! <figure> ve <figcaption> ile semantik görsel alanı kuruldu. 4. Modül Tamamlandı! 🌳" };
        }
        return { ok: false, msg: "Hata: <figcaption>Organik Domatesler</figcaption> eklemelisiniz." };
      }
    }
  ],
  html_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: SIRASIZ LİSTE (UL & LI)",
      title: "1. Soru: Madde İşaretli Liste",
      prompt: "<ul> etiketi içinde 'Elma' ve 'Armut' maddelerini barındıran iki adet <li> elemanı oluşturabilir misin?",
      presetCode: "<!-- ul ve li etiketlerini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<ul>", "<li>Elma</li>", "<li>Armut</li>", "</ul>"],
      hint: "<ul>\n  <li>Elma</li>\n  <li>Armut</li>\n</ul>",
      solution: "<ul>\n  <li>Elma</li>\n  <li>Armut</li>\n</ul>",
      validator: (code) => {
        const clean = code.trim();
        if (/<ul\s*>\s*<li\s*>\s*Elma\s*<\/li\s*>\s*<li\s*>\s*Armut\s*<\/li\s*>\s*<\/ul\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! <ul> ve <li> ile sırasız liste başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <ul> içine <li>Elma</li> ve <li>Armut</li> yazmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: SIRALI LİSTE (OL & LI)",
      title: "2. Soru: Numaralandırılmış Liste",
      prompt: "<ol> etiketi içinde sırasıyla '1. Tohum Ek' ve '2. Sula' adımlarını <li> olarak tanımlayabilir misin?",
      presetCode: "<!-- ol ve li etiketlerini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<ol>", "<li>Tohum Ek</li>", "<li>Sula</li>", "</ol>"],
      hint: "<ol>\n  <li>Tohum Ek</li>\n  <li>Sula</li>\n</ol>",
      solution: "<ol>\n  <li>Tohum Ek</li>\n  <li>Sula</li>\n</ol>",
      validator: (code) => {
        const clean = code.trim();
        if (/<ol\s*>\s*<li\s*>\s*Tohum Ek\s*<\/li\s*>\s*<li\s*>\s*Sula\s*<\/li\s*>\s*<\/ol\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! <ol> ile sıralı liste doğru oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <ol> içine <li>Tohum Ek</li> ve <li>Sula</li> yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: LİSTE BAŞLANGIÇ DEĞERİ (START)",
      title: "3. Soru: Numarayı 5'ten Başlatma",
      prompt: "Aşağıdaki sıralı listeyi start=\"5\" özniteliği ile 5. numaradan başlayacak şekilde güncelleyebilir misin?",
      presetCode: "<ol>\n  <li>Adım Beş</li>\n  <li>Adım Altı</li>\n</ol>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<ol start=\"5\">", "start=\"5\"", "type=\"A\"", "reversed"],
      hint: "<ol start=\"5\">\n  <li>Adım Beş</li>\n  <li>Adım Altı</li>\n</ol>",
      solution: "<ol start=\"5\">\n  <li>Adım Beş</li>\n  <li>Adım Altı</li>\n</ol>",
      validator: (code) => {
        const clean = code.trim();
        if (/<ol\s+[^>]*start\s*=\s*["']?5["']?[^>]*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! start='5' ile liste başlangıcı ayarlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <ol start=\"5\"> özniteliğini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: TANIM LİSTESİ (DL, DT, DD)",
      title: "4. Soru: Terim ve Açıklama Listesi",
      prompt: "<dl> etiketi içinde terim başlığı olarak <dt>HTML</dt> ve açıklama olarak <dd>İşaretleme dili</dd> ekleyebilir misin?",
      presetCode: "<dl>\n  <!-- dt ve dd ekleyin -->\n</dl>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<dt>HTML</dt>", "<dd>İşaretleme dili</dd>", "<dt>", "<dd>"],
      hint: "<dl>\n  <dt>HTML</dt>\n  <dd>İşaretleme dili</dd>\n</dl>",
      solution: "<dl>\n  <dt>HTML</dt>\n  <dd>İşaretleme dili</dd>\n</dl>",
      validator: (code) => {
        const clean = code.trim();
        if (/<dl>[\s\S]*<dt\s*>\s*HTML\s*<\/dt\s*>[\s\S]*<dd\s*>\s*İşaretleme dili\s*<\/dd\s*>[\s\S]*<\/dl>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! <dl>, <dt> ve <dd> tanım listesi doğru kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <dt>HTML</dt> ve <dd>İşaretleme dili</dd> eklemelisiniz." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: İÇ İÇE LİSTELER (NESTED LISTS)",
      title: "5. Soru: Alt Liste Oluşturma",
      prompt: "Aşağıdaki 'İçecekler' maddesinin içine yeni bir <ul> açarak 'Çay' ve 'Kahve' alt maddelerini ekleyebilir misin?",
      presetCode: "<ul>\n  <li>İçecekler\n    <!-- Alt ul listesini buraya ekleyin -->\n  </li>\n</ul>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<ul><li>Çay</li><li>Kahve</li></ul>", "<li>Çay</li>", "<li>Kahve</li>", "</ul>"],
      hint: "<ul>\n  <li>İçecekler\n    <ul>\n      <li>Çay</li>\n      <li>Kahve</li>\n    </ul>\n  </li>\n</ul>",
      solution: "<ul>\n  <li>İçecekler\n    <ul>\n      <li>Çay</li>\n      <li>Kahve</li>\n    </ul>\n  </li>\n</ul>",
      validator: (code) => {
        const clean = code.trim();
        if (/<li>\s*İçecekler[\s\S]*<ul>[\s\S]*<li>\s*Çay\s*<\/li>[\s\S]*<li>\s*Kahve\s*<\/li>[\s\S]*<\/ul>[\s\S]*<\/li>/i.test(clean)) {
          return { ok: true, msg: "Harika! İç içe (nested) liste hiyerarşisi başarıyla kuruldu. 5. Modül Tamamlandı! 🏢" };
        }
        return { ok: false, msg: "Hata: <li>İçecekler</li> içine <ul><li>Çay</li><li>Kahve</li></ul> ekleyin." };
      }
    }
  ],
  html_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: TABLO İSKELETİ (TABLE & TR)",
      title: "1. Soru: Tablo ve İlk Satır",
      prompt: "<table> etiketi içinde tek bir satır <tr> açıp içine 'Veri 1' yazan bir <td> hücresi ekleyebilir misin?",
      presetCode: "<!-- table, tr ve td etiketlerini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<table>", "<tr><td>Veri 1</td></tr>", "</table>", "<td>", "<tr>"],
      hint: "<table>\n  <tr>\n    <td>Veri 1</td>\n  </tr>\n</table>",
      solution: "<table>\n  <tr>\n    <td>Veri 1</td>\n  </tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<table\s*>[\s\S]*<tr\s*>[\s\S]*<td\s*>\s*Veri 1\s*<\/td\s*>[\s\S]*<\/tr\s*>[\s\S]*<\/table\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Tablo ve ilk veri hücresi oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <table><tr><td>Veri 1</td></tr></table> şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: TABLO BAŞLIĞI (TH)",
      title: "2. Soru: Başlık Hücreleri (th)",
      prompt: "Aşağıdaki tablonun ilk satırına başlık olarak <th>Ürün</th> ve <th>Fiyat</th> hücrelerini ekleyebilir misin?",
      presetCode: "<table>\n  <tr>\n    <!-- th başlıklarını ekleyin -->\n  </tr>\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<th>Ürün</th>", "<th>Fiyat</th>", "<th>", "</th>"],
      hint: "<table>\n  <tr>\n    <th>Ürün</th>\n    <th>Fiyat</th>\n  </tr>\n</table>",
      solution: "<table>\n  <tr>\n    <th>Ürün</th>\n    <th>Fiyat</th>\n  </tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<tr\s*>[\s\S]*<th\s*>\s*Ürün\s*<\/th\s*>[\s\S]*<th\s*>\s*Fiyat\s*<\/th\s*>[\s\S]*<\/tr\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! <th> başlık hücreleri başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <tr> içine <th>Ürün</th> ve <th>Fiyat</th> ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: ÇOKLU SATIR VE VERİ (TD)",
      title: "3. Soru: İkinci Veri Satırı",
      prompt: "Aşağıdaki tabloya yeni bir <tr> satırı açıp içine <td>Buğday</td> ve <td>40 TL</td> hücrelerini ekleyebilir misin?",
      presetCode: "<table>\n  <tr>\n    <th>Mahsul</th>\n    <th>Tutar</th>\n  </tr>\n  <!-- İkinci satırı buraya ekleyin -->\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<tr><td>Buğday</td><td>40 TL</td></tr>", "<tr>", "<td>Buğday</td>", "<td>40 TL</td>", "</tr>"],
      hint: "<tr>\n  <td>Buğday</td>\n  <td>40 TL</td>\n</tr>",
      solution: "<table>\n  <tr>\n    <th>Mahsul</th>\n    <th>Tutar</th>\n  </tr>\n  <tr>\n    <td>Buğday</td>\n    <td>40 TL</td>\n  </tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<tr\s*>[\s\S]*<td\s*>\s*Buğday\s*<\/td\s*>[\s\S]*<td\s*>\s*40 TL\s*<\/td\s*>[\s\S]*<\/tr\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! İkinci veri satırı tabloya eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <tr><td>Buğday</td><td>40 TL</td></tr> satırını ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: TABLO AÇIKLAMASI (CAPTION)",
      title: "4. Soru: Tablo Başlık Açıklaması",
      prompt: "Tablonun en üstüne <caption>Haftalık Hasat Raporu</caption> etiketini ekleyebilir misin?",
      presetCode: "<table>\n  <!-- caption etiketini ekleyin -->\n  <tr>\n    <th>Gün</th>\n    <th>Miktar</th>\n  </tr>\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<caption>Haftalık Hasat Raporu</caption>", "<caption>", "</caption>"],
      hint: "<caption>Haftalık Hasat Raporu</caption>",
      solution: "<table>\n  <caption>Haftalık Hasat Raporu</caption>\n  <tr>\n    <th>Gün</th>\n    <th>Miktar</th>\n  </tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<caption\s*>\s*Haftalık Hasat Raporu\s*<\/caption\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! <caption> tablo açıklaması doğru tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <caption>Haftalık Hasat Raporu</caption> etiketini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: TABLO KENARLIĞI (BORDER)",
      title: "5. Soru: border Özniteliği",
      prompt: "Aşağıdaki tablo etiketine kenarlık görünmesi için border=\"1\" özniteliğini ekleyebilir misin?",
      presetCode: "<table>\n  <tr>\n    <td>Hücre 1</td>\n    <td>Hücre 2</td>\n  </tr>\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<table border=\"1\">", "border=\"1\"", "cellpadding=\"5\""],
      hint: "<table border=\"1\">\n  <tr>\n    <td>Hücre 1</td>\n    <td>Hücre 2</td>\n  </tr>\n</table>",
      solution: "<table border=\"1\">\n  <tr>\n    <td>Hücre 1</td>\n    <td>Hücre 2</td>\n  </tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<table\s+[^>]*border\s*=\s*["']?1["']?[^>]*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! border='1' ile tablo kenarlığı oluşturuldu. 6. Modül Tamamlandı! 🎬" };
        }
        return { ok: false, msg: "Hata: <table border=\"1\"> şeklinde güncelleyin." };
      }
    }
  ],
  html_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: TABLO BÖLÜMLERİ (THEAD & TBODY)",
      title: "1. Soru: thead ve tbody Yapısı",
      prompt: "Aşağıdaki tabloda başlık satırını <thead>, veri satırını <tbody> etiketi içine alabilir misin?",
      presetCode: "<table>\n  <tr>\n    <th>Ürün</th>\n  </tr>\n  <tr>\n    <td>Mısır</td>\n  </tr>\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<thead>", "</thead>", "<tbody>", "</tbody>"],
      hint: "<table>\n  <thead>\n    <tr><th>Ürün</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Mısır</td></tr>\n  </tbody>\n</table>",
      solution: "<table>\n  <thead>\n    <tr>\n      <th>Ürün</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Mısır</td>\n    </tr>\n  </tbody>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        const hasThead = /<thead>[\s\S]*<th>[\s\S]*<\/thead>/i.test(clean);
        const hasTbody = /<tbody>[\s\S]*<td>[\s\S]*<\/tbody>/i.test(clean);
        if (hasThead && hasTbody) {
          return { ok: true, msg: "Harika! <thead> ve <tbody> bölümleri başarıyla ayrıldı. ✓" };
        }
        return { ok: false, msg: "Hata: Başlığı <thead>, veriyi <tbody> içine alın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: SÜTUN BİRLEŞTİRME (COLSPAN)",
      title: "2. Soru: colspan Kullanımı",
      prompt: "Aşağıdaki 'İletişim' başlık hücresinin 2 sütunu kaplaması için colspan=\"2\" özniteliğini ekleyebilir misin?",
      presetCode: "<tr>\n  <th>İsim</th>\n  <th>İletişim</th>\n</tr>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<th colspan=\"2\">İletişim</th>", "colspan=\"2\"", "rowspan=\"2\""],
      hint: "<tr>\n  <th>İsim</th>\n  <th colspan=\"2\">İletişim</th>\n</tr>",
      solution: "<tr>\n  <th>İsim</th>\n  <th colspan=\"2\">İletişim</th>\n</tr>",
      validator: (code) => {
        const clean = code.trim();
        if (/<th\s+[^>]*colspan\s*=\s*["']?2["']?[^>]*>\s*İletişim\s*<\/th\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! colspan='2' ile sütunlar başarıyla birleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: <th colspan=\"2\">İletişim</th> şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: SATIR BİRLEŞTİRME (ROWSPAN)",
      title: "3. Soru: rowspan Kullanımı",
      prompt: "Aşağıdaki 'Telefon' hücresinin dikeyde 2 satırı kaplaması için rowspan=\"2\" özniteliğini ekleyebilir misin?",
      presetCode: "<tr>\n  <th>Telefon</th>\n  <td>555-1111</td>\n</tr>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<th rowspan=\"2\">Telefon</th>", "rowspan=\"2\"", "colspan=\"2\""],
      hint: "<tr>\n  <th rowspan=\"2\">Telefon</th>\n  <td>555-1111</td>\n</tr>",
      solution: "<tr>\n  <th rowspan=\"2\">Telefon</th>\n  <td>555-1111</td>\n</tr>",
      validator: (code) => {
        const clean = code.trim();
        if (/<th\s+[^>]*rowspan\s*=\s*["']?2["']?[^>]*>\s*Telefon\s*<\/th\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! rowspan='2' ile dikey hücre birleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: <th rowspan=\"2\">Telefon</th> şeklinde yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DİP TOPLAM BÖLÜMÜ (TFOOT)",
      title: "4. Soru: tfoot ve Colspan Toplamı",
      prompt: "Tablonun altına <tfoot> ekleyip içinde 2 sütunu birleştiren <td colspan=\"2\">Toplam: 100 TL</td> hücresi yazabilir misin?",
      presetCode: "<table>\n  <tbody>\n    <tr><td>Ürün</td><td>50 TL</td></tr>\n  </tbody>\n  <!-- tfoot bölümünü buraya ekleyin -->\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<tfoot><tr><td colspan=\"2\">Toplam: 100 TL</td></tr></tfoot>", "<tfoot>", "</tfoot>", "<td colspan=\"2\">"],
      hint: "<tfoot>\n  <tr>\n    <td colspan=\"2\">Toplam: 100 TL</td>\n  </tr>\n</tfoot>",
      solution: "<table>\n  <tbody>\n    <tr><td>Ürün</td><td>50 TL</td></tr>\n  </tbody>\n  <tfoot>\n    <tr>\n      <td colspan=\"2\">Toplam: 100 TL</td>\n    </tr>\n  </tfoot>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<tfoot>[\s\S]*<td\s+[^>]*colspan\s*=\s*["']?2["']?[^>]*>\s*Toplam:\s*100\s*TL\s*<\/td>[\s\S]*<\/tfoot>/i.test(clean)) {
          return { ok: true, msg: "Harika! <tfoot> ve colspan toplam satırı doğru oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <tfoot><tr><td colspan=\"2\">Toplam: 100 TL</td></tr></tfoot> ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: GELİŞMİŞ BİRLEŞİK TABLO",
      title: "5. Soru: Colspan ve Rowspan Entegrasyonu",
      prompt: "Aşağıdaki tabloda ilk hücreye <th rowspan=\"2\">Bölge</th> ve başlık hücresine <th colspan=\"2\">Satışlar</th> yazarak birleştirebilir misin?",
      presetCode: "<tr>\n  <th>Bölge</th>\n  <th>Satışlar</th>\n</tr>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<th rowspan=\"2\">Bölge</th>", "<th colspan=\"2\">Satışlar</th>", "rowspan=\"2\"", "colspan=\"2\""],
      hint: "<tr>\n  <th rowspan=\"2\">Bölge</th>\n  <th colspan=\"2\">Satışlar</th>\n</tr>",
      solution: "<tr>\n  <th rowspan=\"2\">Bölge</th>\n  <th colspan=\"2\">Satışlar</th>\n</tr>",
      validator: (code) => {
        const clean = code.trim();
        const hasRow = /<th\s+[^>]*rowspan\s*=\s*["']?2["']?[^>]*>\s*Bölge\s*<\/th\s*>/i.test(clean);
        const hasCol = /<th\s+[^>]*colspan\s*=\s*["']?2["']?[^>]*>\s*Satışlar\s*<\/th\s*>/i.test(clean);
        if (hasRow && hasCol) {
          return { ok: true, msg: "Mükemmel! Gelişmiş tablo birleştirme kuralları tamamlandı. 7. Modül Tamamlandı! 🎡" };
        }
        return { ok: false, msg: "Hata: <th rowspan=\"2\">Bölge</th> ve <th colspan=\"2\">Satışlar</th> şeklinde yazın." };
      }
    }
  ],
  html_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: BLOK SEVİYESİ (DIV)",
      title: "1. Soru: div Kapsayıcısı",
      prompt: "Bir <div> etiketi açıp içine <h2>Kart Başlığı</h2> ve <p>İçerik</p> elemanlarını yerleştirebilir misin?",
      presetCode: "<!-- div kapsayıcısını oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<div>", "<h2>Kart Başlığı</h2>", "<p>İçerik</p>", "</div>"],
      hint: "<div>\n  <h2>Kart Başlığı</h2>\n  <p>İçerik</p>\n</div>",
      solution: "<div>\n  <h2>Kart Başlığı</h2>\n  <p>İçerik</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s*>[\s\S]*<h2\s*>\s*Kart Başlığı\s*<\/h2\s*>[\s\S]*<p\s*>\s*İçerik\s*<\/p\s*>[\s\S]*<\/div\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! <div> blok kapsayıcısı başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <div> içine <h2>Kart Başlığı</h2> ve <p>İçerik</p> koyun." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: SATIR İÇİ (SPAN)",
      title: "2. Soru: span ile Metin İçi Vurgulama",
      prompt: "Aşağıdaki cümlede '50 TL' metnini <span> etiketi içine alabilir misin?",
      presetCode: "<p>Toplam Tutar: 50 TL</p>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<span>50 TL</span>", "<span>", "</span>"],
      hint: "<p>Toplam Tutar: <span>50 TL</span></p>",
      solution: "<p>Toplam Tutar: <span>50 TL</span></p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<p\s*>[\s\S]*<span>\s*50 TL\s*<\/span>[\s\S]*<\/p>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! <span> ile satır içi parça sarmalandı. ✓" };
        }
        return { ok: false, msg: "Hata: '50 TL' kısmını <span>50 TL</span> şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: BENZERSİZ KİMLİK (ID)",
      title: "3. Soru: id Özniteliği Tanımlama",
      prompt: "Aşağıdaki div kapsayıcısına benzersiz bir kimlik olan id=\"ana-kart\" özniteliğini ekleyebilir misin?",
      presetCode: "<div>\n  <p>Özel Kutu</p>\n</div>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<div id=\"ana-kart\">", "id=\"ana-kart\"", "class=\"kart\""],
      hint: "<div id=\"ana-kart\">\n  <p>Özel Kutu</p>\n</div>",
      solution: "<div id=\"ana-kart\">\n  <p>Özel Kutu</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*id\s*=\s*["']ana-kart["'][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! id='ana-kart' kimliği başarıyla atandı. ✓" };
        }
        return { ok: false, msg: "Hata: <div id=\"ana-kart\"> şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: STİL SINIFI (CLASS)",
      title: "4. Soru: class Sınıfı Ekleme",
      prompt: "Aşağıdaki div kapsayıcısına class=\"urun-karti aktif\" özniteliğini ekleyebilir misin?",
      presetCode: "<div>\n  <h3>Domates Fidesi</h3>\n</div>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["class=\"urun-karti aktif\"", "class=\"urun-karti\"", "id=\"kart\""],
      hint: "<div class=\"urun-karti aktif\">\n  <h3>Domates Fidesi</h3>\n</div>",
      solution: "<div class=\"urun-karti aktif\">\n  <h3>Domates Fidesi</h3>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*class\s*=\s*["'][^"']*urun-karti\s+aktif[^"']*["'][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Harika! class='urun-karti aktif' sınıfları doğru tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"urun-karti aktif\"> şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: BLOK / INLINE KURAL HATASI",
      title: "5. Soru: Hatalı Span İçi Div Düzenlemesi",
      prompt: "Satır içi (inline) olan <span> içine blok (div) konulamaz. Aşağıdaki yapıyı dışta <div>, içte <span> olacak şekilde düzeltebilir misin?",
      presetCode: "<span>\n  <div>Metin Parçası</div>\n</span>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<div><span>Metin Parçası</span></div>", "<div>", "<span>", "</div>"],
      hint: "<div>\n  <span>Metin Parçası</span>\n</div>",
      solution: "<div>\n  <span>Metin Parçası</span>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s*>[\s\S]*<span\s*>\s*Metin Parçası\s*<\/span\s*>[\s\S]*<\/div\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Blok ve satır içi hiyerarşi kuralı düzeltildi. 8. Modül Tamamlandı! 🏛️" };
        }
        return { ok: false, msg: "Hata: Dış kapsayıcı <div>, içteki eleman <span> olmalıdır." };
      }
    }
  ],
  html_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: FORM KAPSAYICISI (FORM ACTION)",
      title: "1. Soru: Form ve Gönderim Metodu",
      prompt: "Sunucudaki '/kaydet' adresine POST metoduyla veri gönderen <form action=\"/kaydet\" method=\"POST\"> kapsayıcısını ve kapanışını yazabilir misin?",
      presetCode: "<!-- form etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<form action=\"/kaydet\" method=\"POST\">", "</form>", "action=\"/kaydet\"", "method=\"POST\""],
      hint: "<form action=\"/kaydet\" method=\"POST\">\n</form>",
      solution: "<form action=\"/kaydet\" method=\"POST\">\n</form>",
      validator: (code) => {
        const clean = code.trim();
        const hasAction = /action\s*=\s*["']\/kaydet["']/i.test(clean);
        const hasMethod = /method\s*=\s*["']POST["']/i.test(clean);
        const hasTags = /<form[^>]*>[\s\S]*<\/form>/i.test(clean);
        if (hasAction && hasMethod && hasTags) {
          return { ok: true, msg: "Harika! <form> action ve method öznitelikleri doğru kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <form action=\"/kaydet\" method=\"POST\"></form> yazmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: LABEL VE INPUT BAĞLANTISI",
      title: "2. Soru: label for ve input id Eşleşmesi",
      prompt: "<label for=\"ad\">Adınız:</label> ve buna bağlı <input type=\"text\" id=\"ad\" name=\"ad\"> girişini yazabilir misin?",
      presetCode: "<!-- label ve input yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<label for=\"ad\">Adınız:</label>", "<input type=\"text\" id=\"ad\" name=\"ad\">", "for=\"ad\"", "id=\"ad\""],
      hint: "<label for=\"ad\">Adınız:</label>\n<input type=\"text\" id=\"ad\" name=\"ad\">",
      solution: "<label for=\"ad\">Adınız:</label>\n<input type=\"text\" id=\"ad\" name=\"ad\">",
      validator: (code) => {
        const clean = code.trim();
        const hasLabel = /<label\s+[^>]*for\s*=\s*["']ad["'][^>]*>\s*Adınız:\s*<\/label>/i.test(clean);
        const hasInput = /<input\s+[^>]*id\s*=\s*["']ad["'][^>]*>/i.test(clean);
        if (hasLabel && hasInput) {
          return { ok: true, msg: "Mükemmel! label 'for' ile input 'id' doğru eşleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: <label for=\"ad\">Adınız:</label> ve <input id=\"ad\" name=\"ad\"> yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: ŞİFRE VE E-POSTA GİRİŞLERİ",
      title: "3. Soru: type='password' ve type='email'",
      prompt: "Bir adet <input type=\"email\" name=\"eposta\"> ve altına bir adet <input type=\"password\" name=\"sifre\"> ekleyebilir misin?",
      presetCode: "<!-- email ve password inputlarını yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<input type=\"email\" name=\"eposta\">", "<input type=\"password\" name=\"sifre\">", "type=\"email\"", "type=\"password\""],
      hint: "<input type=\"email\" name=\"eposta\">\n<input type=\"password\" name=\"sifre\">",
      solution: "<input type=\"email\" name=\"eposta\">\n<input type=\"password\" name=\"sifre\">",
      validator: (code) => {
        const clean = code.trim();
        const hasEmail = /<input\s+[^>]*type\s*=\s*["']email["'][^>]*>/i.test(clean);
        const hasPass = /<input\s+[^>]*type\s*=\s*["']password["'][^>]*>/i.test(clean);
        if (hasEmail && hasPass) {
          return { ok: true, msg: "Tebrikler! Email ve Password input tipleri başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: type=\"email\" ve type=\"password\" inputlarını ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: RADYO BUTONLARI (RADIO)",
      title: "4. Soru: Ortak name Gruplu Radio Butonları",
      prompt: "Tekli seçim yapabilmek için name=\"cinsiyet\" ortak grubuna sahip 'Erkek' (value=\"e\") ve 'Kadın' (value=\"k\") radio inputları yazabilir misin?",
      presetCode: "<!-- radio inputlarını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<input type=\"radio\" name=\"cinsiyet\" value=\"e\">", "<input type=\"radio\" name=\"cinsiyet\" value=\"k\">", "type=\"radio\"", "name=\"cinsiyet\""],
      hint: "<input type=\"radio\" name=\"cinsiyet\" value=\"e\"> Erkek\n<input type=\"radio\" name=\"cinsiyet\" value=\"k\"> Kadın",
      solution: "<input type=\"radio\" name=\"cinsiyet\" value=\"e\"> Erkek\n<input type=\"radio\" name=\"cinsiyet\" value=\"k\"> Kadın",
      validator: (code) => {
        const clean = code.trim();
        const radioMatches = clean.match(/<input\s+[^>]*type\s*=\s*["']radio["'][^>]*name\s*=\s*["']cinsiyet["'][^>]*>/gi);
        if (radioMatches && radioMatches.length >= 2) {
          return { ok: true, msg: "Harika! Ortak name gruplu radyo butonları doğru tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: İki radyo butonunda da name=\"cinsiyet\" ortak olmalıdır." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: ONAY KUTUSU VE SUBMIT BUTONU",
      title: "5. Soru: Checkbox ve Form Gönder Butonu",
      prompt: "Aşağıdaki forma <input type=\"checkbox\" name=\"sozlesme\"> ve altına <button type=\"submit\">Kayıt Ol</button> ekleyebilir misin?",
      presetCode: "<form action=\"/kayit\" method=\"POST\">\n  <!-- checkbox ve submit butonu ekleyin -->\n</form>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<input type=\"checkbox\" name=\"sozlesme\">", "<button type=\"submit\">Kayıt Ol</button>", "type=\"checkbox\"", "type=\"submit\""],
      hint: "<input type=\"checkbox\" name=\"sozlesme\"> Şartları kabul ediyorum\n<button type=\"submit\">Kayıt Ol</button>",
      solution: "<form action=\"/kayit\" method=\"POST\">\n  <input type=\"checkbox\" name=\"sozlesme\"> Şartları kabul ediyorum\n  <button type=\"submit\">Kayıt Ol</button>\n</form>",
      validator: (code) => {
        const clean = code.trim();
        const hasCheckbox = /<input\s+[^>]*type\s*=\s*["']checkbox["'][^>]*>/i.test(clean);
        const hasSubmit = /<button\s+[^>]*type\s*=\s*["']submit["'][^>]*>\s*Kayıt Ol\s*<\/button>/i.test(clean) ||
                          /<input\s+[^>]*type\s*=\s*["']submit["'][^>]*value\s*=\s*["']Kayıt Ol["'][^>]*>/i.test(clean);
        if (hasCheckbox && hasSubmit) {
          return { ok: true, msg: "Mükemmel! Form bileşenleri ve gönderim butonu tamamlandı. 9. Modül Tamamlandı! 🏥" };
        }
        return { ok: false, msg: "Hata: type=\"checkbox\" onay kutusu ve type=\"submit\" butonunu ekleyin." };
      }
    }
  ],
  html_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: ÇOK SATIRLI METİN (TEXTAREA)",
      title: "1. Soru: textarea Alanı",
      prompt: "Adı name=\"mesaj\", satır sayısı rows=\"4\" ve cols=\"50\" olan bir <textarea> etiketi yazabilir misin?",
      presetCode: "<!-- textarea etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<textarea name=\"mesaj\" rows=\"4\" cols=\"50\"></textarea>", "rows=\"4\"", "cols=\"50\"", "</textarea>"],
      hint: "<textarea name=\"mesaj\" rows=\"4\" cols=\"50\"></textarea>",
      solution: "<textarea name=\"mesaj\" rows=\"4\" cols=\"50\"></textarea>",
      validator: (code) => {
        const clean = code.trim();
        if (/<textarea\s+[^>]*name\s*=\s*["']mesaj["'][^>]*>[\s\S]*<\/textarea>/i.test(clean)) {
          return { ok: true, msg: "Harika! <textarea> çok satırlı metin kutusu doğru oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <textarea name=\"mesaj\" rows=\"4\" cols=\"50\"></textarea> yazmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: AÇILIR MENÜ (SELECT & OPTION)",
      title: "2. Soru: Dropdown Menü",
      prompt: "<select name=\"sehir\"> etiketi içinde value=\"ist\" olan 'İstanbul' ve value=\"ank\" olan 'Ankara' seçeneklerini (<option>) ekleyebilir misin?",
      presetCode: "<!-- select ve option etiketlerini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<select name=\"sehir\">", "<option value=\"ist\">İstanbul</option>", "<option value=\"ank\">Ankara</option>", "</select>"],
      hint: "<select name=\"sehir\">\n  <option value=\"ist\">İstanbul</option>\n  <option value=\"ank\">Ankara</option>\n</select>",
      solution: "<select name=\"sehir\">\n  <option value=\"ist\">İstanbul</option>\n  <option value=\"ank\">Ankara</option>\n</select>",
      validator: (code) => {
        const clean = code.trim();
        const hasSelect = /<select\s+[^>]*name\s*=\s*["']sehir["'][^>]*>[\s\S]*<\/select>/i.test(clean);
        const hasOptions = /<option\s+[^>]*value\s*=\s*["']ist["'][^>]*>\s*İstanbul\s*<\/option>/i.test(clean) &&
                           /<option\s+[^>]*value\s*=\s*["']ank["'][^>]*>\s*Ankara\s*<\/option>/i.test(clean);
        if (hasSelect && hasOptions) {
          return { ok: true, msg: "Mükemmel! <select> ve <option> açılır menüsü doğru kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <select name=\"sehir\"> içine İstanbul ve Ankara option'larını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: OTOMATİK TAMAMLAMA (DATALIST)",
      title: "3. Soru: datalist Öneri Listesi",
      prompt: "Aşağıdaki inputa list=\"meyveler\" bağlayın ve altına id=\"meyveler\" olan <datalist> içinde <option value=\"Elma\"> seçeneğini ekleyebilir misin?",
      presetCode: "<input type=\"text\" name=\"meyve\">\n<!-- datalist ekleyin -->",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["list=\"meyveler\"", "<datalist id=\"meyveler\">", "<option value=\"Elma\">", "</datalist>"],
      hint: "<input type=\"text\" name=\"meyve\" list=\"meyveler\">\n<datalist id=\"meyveler\">\n  <option value=\"Elma\">\n</datalist>",
      solution: "<input type=\"text\" name=\"meyve\" list=\"meyveler\">\n<datalist id=\"meyveler\">\n  <option value=\"Elma\">\n</datalist>",
      validator: (code) => {
        const clean = code.trim();
        const hasListAttr = /<input[^>]*list\s*=\s*["']meyveler["'][^>]*>/i.test(clean);
        const hasDatalist = /<datalist\s+[^>]*id\s*=\s*["']meyveler["'][^>]*>[\s\S]*<option\s+[^>]*value\s*=\s*["']Elma["'][^>]*>[\s\S]*<\/datalist>/i.test(clean);
        if (hasListAttr && hasDatalist) {
          return { ok: true, msg: "Tebrikler! <datalist> otomatik tamamlama listesi başarıyla bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: Input'a list=\"meyveler\" ve altına <datalist id=\"meyveler\"> ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: FORM GRUPLAMA (FIELDSET & LEGEND)",
      title: "4. Soru: Çerçeveli Form Alanı",
      prompt: "Bir <fieldset> açıp en üstüne <legend>Kişisel Bilgiler</legend> başlığı ekleyebilir misin?",
      presetCode: "<!-- fieldset ve legend etiketlerini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<fieldset>", "<legend>Kişisel Bilgiler</legend>", "</fieldset>", "<legend>"],
      hint: "<fieldset>\n  <legend>Kişisel Bilgiler</legend>\n</fieldset>",
      solution: "<fieldset>\n  <legend>Kişisel Bilgiler</legend>\n</fieldset>",
      validator: (code) => {
        const clean = code.trim();
        if (/<fieldset\s*>[\s\S]*<legend\s*>\s*Kişisel Bilgiler\s*<\/legend\s*>[\s\S]*<\/fieldset\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! <fieldset> ve <legend> gruplama yapısı tamamlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <fieldset><legend>Kişisel Bilgiler</legend></fieldset> şeklinde yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: DOĞRULAMA (REQUIRED & PLACEHOLDER)",
      title: "5. Soru: Zorunlu Alan ve İpucu Metni",
      prompt: "Aşağıdaki metin kutusuna zorunlu olması için required ve ipucu için placeholder=\"Kullanıcı adınızı girin\" özniteliklerini ekleyebilir misin?",
      presetCode: "<input type=\"text\" name=\"kullanici\">",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["required", "placeholder=\"Kullanıcı adınızı girin\"", "required placeholder=\"Kullanıcı adınızı girin\""],
      hint: "<input type=\"text\" name=\"kullanici\" placeholder=\"Kullanıcı adınızı girin\" required>",
      solution: "<input type=\"text\" name=\"kullanici\" placeholder=\"Kullanıcı adınızı girin\" required>",
      validator: (code) => {
        const clean = code.trim();
        const hasReq = /required/i.test(clean);
        const hasPlace = /placeholder\s*=\s*["']Kullanıcı adınızı girin["']/i.test(clean);
        if (hasReq && hasPlace) {
          return { ok: true, msg: "Mükemmel! required ve placeholder doğrulama kuralları eklendi. 10. Modül Tamamlandı! 🛍️" };
        }
        return { ok: false, msg: "Hata: placeholder=\"Kullanıcı adınızı girin\" ve required özniteliklerini ekleyin." };
      }
    }
  ],
  html_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: HEADER VE NAV",
      title: "1. Soru: Üst Bilgi ve Navigasyon Menüsü",
      prompt: "<header> etiketi açıp içine <h1>Site Başlığı</h1> ve altına <nav><a href=\"#\">Anasayfa</a></nav> ekleyebilir misin?",
      presetCode: "<!-- header ve nav etiketlerini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<header>", "<h1>Site Başlığı</h1>", "<nav><a href=\"#\">Anasayfa</a></nav>", "</header>"],
      hint: "<header>\n  <h1>Site Başlığı</h1>\n  <nav>\n    <a href=\"#\">Anasayfa</a>\n  </nav>\n</header>",
      solution: "<header>\n  <h1>Site Başlığı</h1>\n  <nav>\n    <a href=\"#\">Anasayfa</a>\n  </nav>\n</header>",
      validator: (code) => {
        const clean = code.trim();
        const hasHeader = /<header\s*>[\s\S]*<\/header\s*>/i.test(clean);
        const hasH1 = /<h1\s*>\s*Site Başlığı\s*<\/h1\s*>/i.test(clean);
        const hasNav = /<nav\s*>[\s\S]*<a[^>]*>\s*Anasayfa\s*<\/a>[\s\S]*<\/nav\s*>/i.test(clean);
        if (hasHeader && hasH1 && hasNav) {
          return { ok: true, msg: "Harika! <header> ve <nav> semantik alanı oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <header> içine <h1>Site Başlığı</h1> ve <nav><a href=\"#\">Anasayfa</a></nav> ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: TEKİL ANA İÇERİK (MAIN)",
      title: "2. Soru: Sayfanın Ana Gövdesi (<main>)",
      prompt: "Sayfanın ana içeriklerini sarmalayan <main> etiketini ve içine <p>Ana içerik buradadır.</p> paragrafını yazabilir misin?",
      presetCode: "<!-- main etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<main>", "<p>Ana içerik buradadır.</p>", "</main>", "<section>"],
      hint: "<main>\n  <p>Ana içerik buradadır.</p>\n</main>",
      solution: "<main>\n  <p>Ana içerik buradadır.</p>\n</main>",
      validator: (code) => {
        const clean = code.trim();
        if (/<main\s*>[\s\S]*<p\s*>\s*Ana içerik buradadır\.\s*<\/p\s*>[\s\S]*<\/main\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Sayfanın tekil <main> ana gövdesi tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <main><p>Ana içerik buradadır.</p></main> şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: MAKALE VE BÖLÜM (ARTICLE & SECTION)",
      title: "3. Soru: Bağımsız Makale Kartı (<article>)",
      prompt: "<article> etiketi açıp içine <h2>HTML5 Yenilikleri</h2> ve <p>Semantik etiketler tanıtıldı.</p> ekleyebilir misin?",
      presetCode: "<!-- article etiketini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<article>", "<h2>HTML5 Yenilikleri</h2>", "<p>Semantik etiketler tanıtıldı.</p>", "</article>"],
      hint: "<article>\n  <h2>HTML5 Yenilikleri</h2>\n  <p>Semantik etiketler tanıtıldı.</p>\n</article>",
      solution: "<article>\n  <h2>HTML5 Yenilikleri</h2>\n  <p>Semantik etiketler tanıtıldı.</p>\n</article>",
      validator: (code) => {
        const clean = code.trim();
        if (/<article\s*>[\s\S]*<h2\s*>\s*HTML5 Yenilikleri\s*<\/h2\s*>[\s\S]*<p\s*>\s*Semantik etiketler tanıtıldı\.\s*<\/p\s*>[\s\S]*<\/article\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! <article> bağımsız içerik bloğu doğru oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <article> içine <h2>HTML5 Yenilikleri</h2> ve paragrafını ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: YAN ÇUBUK (ASIDE)",
      title: "4. Soru: İkincil İçerik Alanı (<aside>)",
      prompt: "Yan çubuk (sidebar) oluşturmak için <aside> açıp içine <h3>Son Yazılar</h3> başlığını ekleyebilir misin?",
      presetCode: "<!-- aside etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<aside>", "<h3>Son Yazılar</h3>", "</aside>", "<aside><h3>Son Yazılar</h3></aside>"],
      hint: "<aside>\n  <h3>Son Yazılar</h3>\n</aside>",
      solution: "<aside>\n  <h3>Son Yazılar</h3>\n</aside>",
      validator: (code) => {
        const clean = code.trim();
        if (/<aside\s*>[\s\S]*<h3\s*>\s*Son Yazılar\s*<\/h3\s*>[\s\S]*<\/aside\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! <aside> yan çubuk alanı doğru kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <aside><h3>Son Yazılar</h3></aside> yazmalısınız." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: ALT BİLGİ (FOOTER)",
      title: "5. Soru: Sayfa Alt Bilgisi (<footer>)",
      prompt: "Sayfanın en altına <footer> açıp içine <p>&copy; 2026 Kod Çiftliği</p> telif yazısını ekleyebilir misin?",
      presetCode: "<!-- footer etiketini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<footer>", "<p>&copy; 2026 Kod Çiftliği</p>", "</footer>", "&copy;"],
      hint: "<footer>\n  <p>&copy; 2026 Kod Çiftliği</p>\n</footer>",
      solution: "<footer>\n  <p>&copy; 2026 Kod Çiftliği</p>\n</footer>",
      validator: (code) => {
        const clean = code.trim();
        if (/<footer\s*>[\s\S]*<p\s*>[\s\S]*(&copy;|©)\s*2026\s*Kod Çiftliği[\s\S]*<\/p\s*>[\s\S]*<\/footer\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! <footer> semantik alt bilgi alanı oluşturuldu. 11. Modül Tamamlandı! 🚄" };
        }
        return { ok: false, msg: "Hata: <footer><p>&copy; 2026 Kod Çiftliği</p></footer> eklemelisiniz." };
      }
    }
  ],
  html_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: SES OYNATICI (AUDIO)",
      title: "1. Soru: Ses Etiketi ve Kontrolleri",
      prompt: "Kontrol paneli görünen <audio controls> açıp içine <source src=\"muzik.mp3\" type=\"audio/mpeg\"> ekleyebilir misin?",
      presetCode: "<!-- audio etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<audio controls>", "<source src=\"muzik.mp3\" type=\"audio/mpeg\">", "</audio>", "controls"],
      hint: "<audio controls>\n  <source src=\"muzik.mp3\" type=\"audio/mpeg\">\n</audio>",
      solution: "<audio controls>\n  <source src=\"muzik.mp3\" type=\"audio/mpeg\">\n</audio>",
      validator: (code) => {
        const clean = code.trim();
        const hasAudio = /<audio\s+[^>]*controls[^>]*>[\s\S]*<\/audio>/i.test(clean);
        const hasSource = /<source\s+[^>]*src\s*=\s*["']muzik\.mp3["'][^>]*type\s*=\s*["']audio\/mpeg["'][^>]*>/i.test(clean);
        if (hasAudio && hasSource) {
          return { ok: true, msg: "Harika! <audio controls> ses oynatıcısı başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <audio controls><source src=\"muzik.mp3\" type=\"audio/mpeg\"></audio> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: VİDEO OYNATICI (VIDEO CONTROLS)",
      title: "2. Soru: Video ve Kapak Resmi (poster)",
      prompt: "Genişliği width=\"640\", kontrolleri aktif (controls) ve kapak resmi poster=\"kapak.jpg\" olan <video> etiketini yazabilir misin?",
      presetCode: "<!-- video etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<video width=\"640\" controls poster=\"kapak.jpg\">", "</video>", "poster=\"kapak.jpg\"", "controls"],
      hint: "<video width=\"640\" controls poster=\"kapak.jpg\">\n  <source src=\"tanitim.mp4\" type=\"video/mp4\">\n</video>",
      solution: "<video width=\"640\" controls poster=\"kapak.jpg\">\n  <source src=\"tanitim.mp4\" type=\"video/mp4\">\n</video>",
      validator: (code) => {
        const clean = code.trim();
        const hasControls = /controls/i.test(clean);
        const hasPoster = /poster\s*=\s*["']kapak\.jpg["']/i.test(clean);
        const hasVideo = /<video[^>]*>[\s\S]*<\/video>/i.test(clean);
        if (hasControls && hasPoster && hasVideo) {
          return { ok: true, msg: "Mükemmel! <video> kontrolleri ve poster kapak resmi doğru bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <video width=\"640\" controls poster=\"kapak.jpg\">...</video> yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: OTOMATİK OYNATMA (AUTOPLAY MUTED)",
      title: "3. Soru: Sessiz Otomatik Video",
      prompt: "Aşağıdaki videoya sayfa açılınca sessizce otomatik başlaması ve döngüye girmesi için autoplay muted loop özniteliklerini ekleyebilir misin?",
      presetCode: "<video width=\"400\">\n  <source src=\"arka-plan.mp4\" type=\"video/mp4\">\n</video>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["autoplay muted loop", "autoplay", "muted", "loop"],
      hint: "<video width=\"400\" autoplay muted loop>\n  <source src=\"arka-plan.mp4\" type=\"video/mp4\">\n</video>",
      solution: "<video width=\"400\" autoplay muted loop>\n  <source src=\"arka-plan.mp4\" type=\"video/mp4\">\n</video>",
      validator: (code) => {
        const clean = code.trim();
        const hasAuto = /autoplay/i.test(clean);
        const hasMuted = /muted/i.test(clean);
        const hasLoop = /loop/i.test(clean);
        if (hasAuto && hasMuted && hasLoop) {
          return { ok: true, msg: "Tebrikler! autoplay, muted ve loop öznitelikleri doğru eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <video> etiketine autoplay, muted ve loop özniteliklerini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: GÖMÜLÜ İÇERİK (IFRAME)",
      title: "4. Soru: YouTube Videosu Gömme",
      prompt: "Genişliği width=\"560\", yüksekliği height=\"315\", kaynağı src=\"https://www.youtube.com/embed/kod\" ve title=\"Video\" olan <iframe> etiketini yazabilir misin?",
      presetCode: "<!-- iframe etiketini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<iframe src=\"https://www.youtube.com/embed/kod\" title=\"Video\" width=\"560\" height=\"315\"></iframe>", "<iframe>", "</iframe>", "title=\"Video\""],
      hint: "<iframe src=\"https://www.youtube.com/embed/kod\" title=\"Video\" width=\"560\" height=\"315\"></iframe>",
      solution: "<iframe src=\"https://www.youtube.com/embed/kod\" title=\"Video\" width=\"560\" height=\"315\"></iframe>",
      validator: (code) => {
        const clean = code.trim();
        const hasSrc = /src\s*=\s*["']https:\/\/www\.youtube\.com\/embed\/kod["']/i.test(clean);
        const hasTitle = /title\s*=\s*["']Video["']/i.test(clean);
        const hasIframe = /<iframe[^>]*>[\s\S]*<\/iframe>/i.test(clean);
        if (hasSrc && hasTitle && hasIframe) {
          return { ok: true, msg: "Harika! <iframe> gömülü medya alanı doğru yapılandırıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <iframe src=\"https://www.youtube.com/embed/kod\" title=\"Video\" width=\"560\" height=\"315\"></iframe> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ÇOKLU FORMAT (SOURCE FALLBACK)",
      title: "5. Soru: Alternatif Video Formatları",
      prompt: "Aşağıdaki videoya hem MP4 (<source src=\"video.mp4\" type=\"video/mp4\">) hem de WebM (<source src=\"video.webm\" type=\"video/webm\">) formatlarını ekleyebilir misin?",
      presetCode: "<video controls>\n  <!-- MP4 ve WebM source etiketlerini ekleyin -->\n</video>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<source src=\"video.mp4\" type=\"video/mp4\">", "<source src=\"video.webm\" type=\"video/webm\">", "<source src=\"", "type=\"video/webm\""],
      hint: "<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n</video>",
      solution: "<video controls>\n  <source src=\"video.mp4\" type=\"video/mp4\">\n  <source src=\"video.webm\" type=\"video/webm\">\n</video>",
      validator: (code) => {
        const clean = code.trim();
        const hasMp4 = /<source\s+[^>]*src\s*=\s*["']video\.mp4["'][^>]*type\s*=\s*["']video\/mp4["'][^>]*>/i.test(clean);
        const hasWebm = /<source\s+[^>]*src\s*=\s*["']video\.webm["'][^>]*type\s*=\s*["']video\/webm["'][^>]*>/i.test(clean);
        if (hasMp4 && hasWebm) {
          return { ok: true, msg: "Mükemmel! Çift format desteği ile tam tarayıcı uyumluluğu sağlandı. 12. Modül Tamamlandı! 📡" };
        }
        return { ok: false, msg: "Hata: Hem video.mp4 hem de video.webm source etiketlerini ekleyin." };
      }
    }
  ],
  html_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: KARAKTER SETİ (CHARSET)",
      title: "1. Soru: UTF-8 Karakter Kodlaması",
      prompt: "<head> bölümünün en başına Türkçe karakterlerin doğru görünmesi için <meta charset=\"UTF-8\"> etiketini ekleyebilir misin?",
      presetCode: "<head>\n  <!-- meta charset etiketini ekleyin -->\n  <title>Sayfam</title>\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta charset=\"UTF-8\">", "<meta charset=\"", "UTF-8", "<meta"],
      hint: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Sayfam</title>\n</head>",
      solution: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Sayfam</title>\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<meta\s+charset\s*=\s*["']UTF-8["']\s*\/?>/i.test(clean)) {
          return { ok: true, msg: "Harika! <meta charset=\"UTF-8\"> karakter seti başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <meta charset=\"UTF-8\"> etiketini <head> içine ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: MOBİL UYUMLULUK (VIEWPORT)",
      title: "2. Soru: Responsive Viewport Meta Etiketi",
      prompt: "Mobil cihazlarda tam uyumlu ölçekleme için <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> etiketini yazabilir misin?",
      presetCode: "<head>\n  <meta charset=\"UTF-8\">\n  <!-- viewport etiketini ekleyin -->\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", "name=\"viewport\"", "content=\"width=device-width, initial-scale=1.0\""],
      hint: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      solution: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<meta\s+[^>]*name\s*=\s*["']viewport["'][^>]*content\s*=\s*["']width=device-width,\s*initial-scale=1\.0["'][^>]*\/?>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Viewport meta etiketi mobil uyumu sağladı. ✓" };
        }
        return { ok: false, msg: "Hata: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: SEO AÇIKLAMASI (DESCRIPTION)",
      title: "3. Soru: Google Arama Açıklaması",
      prompt: "Google arama sonuçlarında görünmesi için <meta name=\"description\" content=\"Kodlama öğrenmenin en eğlenceli yolu.\"> etiketini ekleyebilir misin?",
      presetCode: "<head>\n  <!-- description meta etiketini ekleyin -->\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta name=\"description\" content=\"Kodlama öğrenmenin en eğlenceli yolu.\">", "name=\"description\"", "content=\"Kodlama öğrenmenin en eğlenceli yolu.\""],
      hint: "<meta name=\"description\" content=\"Kodlama öğrenmenin en eğlenceli yolu.\">",
      solution: "<head>\n  <meta name=\"description\" content=\"Kodlama öğrenmenin en eğlenceli yolu.\">\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<meta\s+[^>]*name\s*=\s*["']description["'][^>]*content\s*=\s*["']Kodlama öğrenmenin en eğlenceli yolu\.["'][^>]*\/?>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! SEO description meta etiketi başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <meta name=\"description\" content=\"Kodlama öğrenmenin en eğlenceli yolu.\"> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: ÖZEL KARAKTERLER (ENTITIES)",
      title: "4. Soru: &lt; ve &gt; Sembolleri",
      prompt: "Aşağıdaki paragrafta etiketi bozmadan ekranda '5 < 10 & 20 > 15' görünmesi için &lt; , &amp; ve &gt; entity kodlarını yazabilir misin?",
      presetCode: "<p>5 &lt; 10 &amp; 20 &gt; 15</p>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["&lt;", "&gt;", "&amp;", "&nbsp;", "&copy;"],
      hint: "<p>5 &lt; 10 &amp; 20 &gt; 15</p>",
      solution: "<p>5 &lt; 10 &amp; 20 &gt; 15</p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<p>[\s\S]*5\s*&lt;\s*10\s*&amp;\s*20\s*&gt;\s*15[\s\S]*<\/p>/i.test(clean)) {
          return { ok: true, msg: "Harika! HTML Entity kodları (&lt;, &amp;, &gt;) doğru kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <p>5 &lt; 10 &amp; 20 &gt; 15</p> şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: SEKME İKONU (FAVICON)",
      title: "5. Soru: link rel='icon' Favicon Bağlama",
      prompt: "Head içine tarayıcı sekme ikonu ekleyen <link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\"> etiketini ekleyebilir misin?",
      presetCode: "<head>\n  <!-- favicon link etiketini ekleyin -->\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">", "rel=\"icon\"", "href=\"favicon.ico\"", "<link"],
      hint: "<link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">",
      solution: "<head>\n  <link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\">\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<link\s+[^>]*rel\s*=\s*["']icon["'][^>]*href\s*=\s*["']favicon\.ico["'][^>]*\/?>/i.test(clean) ||
            /<link\s+[^>]*href\s*=\s*["']favicon\.ico["'][^>]*rel\s*=\s*["']icon["'][^>]*\/?>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Favicon sekme ikonu doğru bağlandı. 13. Modül Tamamlandı! 🚢" };
        }
        return { ok: false, msg: "Hata: <link rel=\"icon\" href=\"favicon.ico\" type=\"image/x-icon\"> yazın." };
      }
    }
  ],
  html_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: PROJE ADIM 1: HEAD YAPILANDIRMASI",
      title: "1. Soru: Standart Head & SEO Kurulumu",
      prompt: "HTML5 Doctype ile başlayan, içinde UTF-8 charset, viewport ve <title>Mega Siber Metropol</title> barındıran <head> bölümünü oluşturabilir misin?",
      presetCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n<!-- head bölümünü tamamlayın -->\n</html>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta charset=\"UTF-8\">", "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", "<title>Mega Siber Metropol</title>", "<head>", "</head>"],
      hint: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mega Siber Metropol</title>\n</head>",
      solution: "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mega Siber Metropol</title>\n</head>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        const hasChar = /<meta\s+charset\s*=\s*["']UTF-8["']/i.test(clean);
        const hasView = /<meta\s+[^>]*name\s*=\s*["']viewport["']/i.test(clean);
        const hasTitle = /<title\s*>\s*Mega Siber Metropol\s*<\/title\s*>/i.test(clean);
        if (hasChar && hasView && hasTitle) {
          return { ok: true, msg: "Harika! Projenin profesyonel Head ve SEO temeli atıldı. ✓" };
        }
        return { ok: false, msg: "Hata: charset='UTF-8', viewport ve <title>Mega Siber Metropol</title> ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: PROJE ADIM 2: SEMANTİK HEADER & MENÜ",
      title: "2. Soru: Header ve Gezinti Menüsü",
      prompt: "<body> içine <header> açıp içinde <h1>CodeFarm Metropol</h1> ve <nav> içinde 'Hakkımızda' ile 'İletişim' linklerini ekleyebilir misin?",
      presetCode: "<body>\n  <!-- header ve nav menüsünü ekleyin -->\n</body>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<header>", "<h1>CodeFarm Metropol</h1>", "<nav><a href=\"#\">Hakkımızda</a><a href=\"#\">İletişim</a></nav>", "</header>"],
      hint: "<header>\n  <h1>CodeFarm Metropol</h1>\n  <nav>\n    <a href=\"#hakkimizda\">Hakkımızda</a>\n    <a href=\"#iletisim\">İletişim</a>\n  </nav>\n</header>",
      solution: "<header>\n  <h1>CodeFarm Metropol</h1>\n  <nav>\n    <a href=\"#hakkimizda\">Hakkımızda</a>\n    <a href=\"#iletisim\">İletişim</a>\n  </nav>\n</header>",
      validator: (code) => {
        const clean = code.trim();
        const hasH1 = /<h1\s*>\s*CodeFarm Metropol\s*<\/h1\s*>/i.test(clean);
        const hasNav = /<nav>[\s\S]*Hakkımızda[\s\S]*İletişim[\s\S]*<\/nav>/i.test(clean);
        if (hasH1 && hasNav) {
          return { ok: true, msg: "Mükemmel! Semantik header ve navigasyon menüsü başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <header> içine <h1>CodeFarm Metropol</h1> ve <nav> linklerini ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: PROJE ADIM 3: MAIN & ARTICLE BÖLÜMÜ",
      title: "3. Soru: Ana İçerik ve Görsel Kartı",
      prompt: "<main> içine bir <article> açıp içine <h2>Şehir Gelişimi</h2>, bir paragraf ve <img src=\"sehir.png\" alt=\"Şehir Manzarası\"> ekleyebilir misin?",
      presetCode: "<main>\n  <!-- article ve resim ekleyin -->\n</main>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<article>", "<h2>Şehir Gelişimi</h2>", "<p>Metropol hızla büyüyor.</p>", "<img src=\"sehir.png\" alt=\"Şehir Manzarası\">", "</article>"],
      hint: "<main>\n  <article>\n    <h2>Şehir Gelişimi</h2>\n    <p>Metropol hızla büyüyor.</p>\n    <img src=\"sehir.png\" alt=\"Şehir Manzarası\">\n  </article>\n</main>",
      solution: "<main>\n  <article>\n    <h2>Şehir Gelişimi</h2>\n    <p>Metropol hızla büyüyor.</p>\n    <img src=\"sehir.png\" alt=\"Şehir Manzarası\">\n  </article>\n</main>",
      validator: (code) => {
        const clean = code.trim();
        const hasArticle = /<article>[\s\S]*<h2>\s*Şehir Gelişimi\s*<\/h2>[\s\S]*<img[^>]*src\s*=\s*["']sehir\.png["'][^>]*alt\s*=\s*["']Şehir Manzarası["'][^>]*>[\s\S]*<\/article>/i.test(clean);
        if (hasArticle) {
          return { ok: true, msg: "Tebrikler! Ana içerik article bloğu ve görsel başarıyla entegre edildi. ✓" };
        }
        return { ok: false, msg: "Hata: <article> içine <h2>Şehir Gelişimi</h2> ve <img src=\"sehir.png\" alt=\"Şehir Manzarası\"> ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: PROJE ADIM 4: İLETİŞİM FORMU ENTEGRASYONU",
      title: "4. Soru: Doğrulamalı İletişim Formu",
      prompt: "<section id=\"iletisim\"> içine <form action=\"/mesaj\" method=\"POST\"> açıp e-posta inputu, zorunlu <textarea name=\"mesaj\" required></textarea> ve submit butonu ekleyebilir misin?",
      presetCode: "<section id=\"iletisim\">\n  <!-- İletişim formunu buraya ekleyin -->\n</section>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<form action=\"/mesaj\" method=\"POST\">", "<input type=\"email\" name=\"eposta\" required>", "<textarea name=\"mesaj\" required></textarea>", "<button type=\"submit\">Gönder</button>", "</form>"],
      hint: "<section id=\"iletisim\">\n  <form action=\"/mesaj\" method=\"POST\">\n    <input type=\"email\" name=\"eposta\" required>\n    <textarea name=\"mesaj\" required></textarea>\n    <button type=\"submit\">Gönder</button>\n  </form>\n</section>",
      solution: "<section id=\"iletisim\">\n  <form action=\"/mesaj\" method=\"POST\">\n    <input type=\"email\" name=\"eposta\" required>\n    <textarea name=\"mesaj\" required></textarea>\n    <button type=\"submit\">Gönder</button>\n  </form>\n</section>",
      validator: (code) => {
        const clean = code.trim();
        const hasForm = /<form\s+[^>]*action\s*=\s*["']\/mesaj["'][^>]*method\s*=\s*["']POST["'][^>]*>/i.test(clean);
        const hasTextarea = /<textarea[^>]*name\s*=\s*["']mesaj["'][^>]*required/i.test(clean);
        const hasSubmit = /<button[^>]*type\s*=\s*["']submit["'][^>]*>/i.test(clean) || /<input[^>]*type\s*=\s*["']submit["'][^>]*>/i.test(clean);
        if (hasForm && hasTextarea && hasSubmit) {
          return { ok: true, msg: "Harika! İletişim formu ve doğrulama kuralları doğru bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <form action=\"/mesaj\" method=\"POST\"> içine required textarea ve submit butonu ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: PROJE ADIM 5: BÜYÜK FİNAL DOĞRULAMASI",
      title: "5. Soru: Footer & HTML5 Ustalık Mührü",
      prompt: "En alta <footer><p>&copy; 2026 CodeFarm - Tüm Hakları Saklıdır.</p></footer> ekleyip </body> ve </html> ile projeyi tamamlayabilir misin?",
      presetCode: "  <!-- footer ekleyin -->\n  <footer><p>&copy; 2026 CodeFarm - Tüm Hakları Saklıdır.</p></footer>\n</body>\n</html>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<footer><p>&copy; 2026 CodeFarm - Tüm Hakları Saklıdır.</p></footer>", "</body>", "</html>", "&copy;"],
      hint: "<footer>\n  <p>&copy; 2026 CodeFarm - Tüm Hakları Saklıdır.</p>\n</footer>\n</body>\n</html>",
      solution: "<footer>\n  <p>&copy; 2026 CodeFarm - Tüm Hakları Saklıdır.</p>\n</footer>\n</body>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        const hasFooter = /<footer\s*>[\s\S]*(&copy;|©)\s*2026\s*CodeFarm[\s\S]*<\/footer\s*>/i.test(clean);
        const hasBodyEnd = /<\/body>/i.test(clean);
        const hasHtmlEnd = /<\/html>/i.test(clean);
        if (hasFooter && hasBodyEnd && hasHtmlEnd) {
          return { ok: true, msg: "TEBRİKLER! 🏆 Tüm HTML5 modüllerini ve 70 alıştırmayı başarıyla tamamlayarak Mega Siber Metropol seviyesine ulaştınız! 🚀" };
        }
        return { ok: false, msg: "Hata: <footer><p>&copy; 2026 CodeFarm - Tüm Hakları Saklıdır.</p></footer> ve </body></html> ile projeyi tamamlayın." };
      }
    }
  ],
  python_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: DEĞİŞKEN ADLANDIRMA",
      title: "1. Soru: Değişken Adlandırma Hatası",
      prompt: "Yandaki kod parçasında değişken adlandırmasında (rakamla başlama kuralı) bir hata var gibi, bu hatayı düzeltebilir misin?",
      presetCode: "1sayi = 12\n# Doğru Kod Parçası:\n",
      filename: "degiskenler.py",
      lang: "Python 3.11",
      quickKeys: ["sayi_1 = 12", "sayi1 = 12", "sayi_1", " = ", "12"],
      hint: "Değişken isimleri rakamla başlayamaz (örn: sayi_1 = 12).",
      solution: "sayi_1 = 12",
      validator: (code) => {
        const clean = code.trim();
        if (/^\s*1[a-zA-Z0-9_]*\s*=/m.test(clean)) {
          return { ok: false, msg: "Hata: Değişken ismi rakamla (1...) başlayamaz! Rakamı sona veya ortaya koyun (örn: sayi_1 = 12)." };
        }
        if (/[a-zA-Z_][a-zA-Z0-9_]*\s*=\s*\d+/.test(clean)) {
          return { ok: true, msg: "Tebrikler! Değişken adı başarıyla düzeltildi. ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen geçerli bir değişken tanımlayıp bir sayı atayın (örn: sayi_1 = 12)." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: AYRILMIŞ KELİMELER",
      title: "2. Soru: Değişken Adında Anahtar Kelime",
      prompt: "Yandaki kod parçasında Python anahtar kelimesi (int) değişken adı olarak kullanılmış gibi, bunu düzeltebilir misin?",
      presetCode: "int = \"a\"\n# Doğru Kod Parçası:\n",
      filename: "degiskenler.py",
      lang: "Python 3.11",
      quickKeys: ["metin = \"a\"", "harf = \"a\"", "metin", "harf"],
      hint: "'int' yerleşik tür adıdır. Bunun yerine 'metin = \"a\"' kullanabilirsiniz.",
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
      moduleSubtitle: "MODÜL 1: TAM SAYI TANIMLAMA",
      title: "3. Soru: Tam Sayı Değişkeni",
      prompt: "Yandaki kod parçasında tam sayı değişkeni tanımlanırken tırnak işareti hatası yapılmış gibi, bunu düzeltebilir misin?",
      presetCode: "sayi = \"5\"\n# Doğru Kod Parçası:\n",
      filename: "degiskenler.py",
      lang: "Python 3.11",
      quickKeys: ["sayi = 5", "sayi = 10", "sayi = "],
      hint: "sayi = 5",
      solution: "sayi = 5",
      validator: (code) => {
        const clean = code.trim();
        if (/sayi\s*=\s*\d+/.test(clean) && !/sayi\s*=\s*['"]\d+['"]/.test(clean)) {
          return { ok: true, msg: "Mükemmel! 'sayi' isimli tam sayı değişkeni tırnaksız tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: Tam sayılar tırnaksız yazılır (örn: sayi = 5)." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: METİN TANIMLAMA",
      title: "4. Soru: Metin (String) Değişkeni",
      prompt: "Yandaki kod parçasında metin (string) değişkenine değer atanırken tırnak işareti unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "isim = Bengi\n# Doğru Kod Parçası:\n",
      filename: "degiskenler.py",
      lang: "Python 3.11",
      quickKeys: ["isim = \"Bengi\"", "isim = 'Bengi'", "isim = "],
      hint: 'isim = "Bengi"',
      solution: 'isim = "Bengi"',
      validator: (code) => {
        const clean = code.trim();
        if (/isim\s*=\s*['"][^'"]+['"]/.test(clean)) {
          return { ok: true, msg: "Tebrikler! 'isim' değişkeni doğru bir string olarak tanımlandı. ✓" };
        }
        return { ok: false, msg: 'Hata: Metin ifadeler tırnak içine yazılmalıdır (örn: isim = "Bengi").' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: EKRANA YAZDIRMA (PRINT)",
      title: "5. Soru: Ekrana Yazdırma Parantezi",
      prompt: "Yandaki kod parçasında ekrana yazdırma fonksiyonunun (print) parantezinde bir sözdizim hatası var gibi, bunu düzeltebilir misin?",
      presetCode: "print \"Merhaba Dünya\"\n# Doğru Kod Parçası:\n",
      filename: "degiskenler.py",
      lang: "Python 3.11",
      quickKeys: ["print(\"Merhaba Dünya\")", "print(", ")"],
      hint: 'print("Merhaba Dünya")',
      solution: 'print("Merhaba Dünya")',
      validator: (code) => {
        const clean = code.trim();
        if (/print\s*\(\s*["']Merhaba Dünya["']\s*\)/.test(clean)) {
          return { ok: true, msg: "Mükemmel! print() parantezleri başarıyla tamamlandı. 1. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: 'Hata: print("Merhaba Dünya") şeklinde parantez içine almalısınız.' };
      }
    }
  ],
  python_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: İNDEKSLERE ERİŞİM",
      title: "1. Soru: İlk Harfe Erişme",
      prompt: "Yandaki kod parçasında metnin ilk harfine erişirken indeks numarasında (1 yerine 0) bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "kelime = \"Python\"\nprint(kelime[1])\n# Doğru Kod Parçası:\n",
      filename: "stringler.py",
      lang: "Python 3.11",
      quickKeys: ["print(kelime[0])", "kelime[0]", "print("],
      hint: "print(kelime[0])",
      solution: "kelime = \"Python\"\nprint(kelime[0])",
      validator: (code) => {
        const clean = code.trim();
        if (/kelime\[\s*0\s*\]/.test(clean) || /['"]Python['"]\[\s*0\s*\]/.test(clean)) {
          return { ok: true, msg: "Tebrikler! İlk indeks [0] başarıyla seçildi. ✓" };
        }
        return { ok: false, msg: "Hata: İlk karaktere erişmek için [0] indeksini kullanmalısınız: print(kelime[0])." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: METİN UZUNLUĞU",
      title: "2. Soru: Metin Uzunluğunu Bulma",
      prompt: "Yandaki kod parçasında metin uzunluğunu bulurken metot yerine len() fonksiyonu kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "mesaj = \"Kodlama\"\nprint(mesaj.length())\n# Doğru Kod Parçası:\n",
      filename: "stringler.py",
      lang: "Python 3.11",
      quickKeys: ["print(len(mesaj))", "len(mesaj)", "len("],
      hint: "print(len(mesaj))",
      solution: "mesaj = \"Kodlama\"\nprint(len(mesaj))",
      validator: (code) => {
        const clean = code.trim();
        if (/len\s*\(\s*mesaj\s*\)/.test(clean)) {
          return { ok: true, msg: "Harika! len() fonksiyonu ile metin uzunluğu doğru hesaplandı. ✓" };
        }
        return { ok: false, msg: "Hata: Metin uzunluğunu ölçmek için print(len(mesaj)) kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: BÜYÜK HARFE ÇEVİRME",
      title: "3. Soru: Büyük Harf Metodu (.upper)",
      prompt: "Yandaki kod parçasında metni büyük harfe dönüştürürken .upper fonksiyonunun parantezi unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "sehir = \"istanbul\"\nprint(sehir.upper)\n# Doğru Kod Parçası:\n",
      filename: "stringler.py",
      lang: "Python 3.11",
      quickKeys: ["print(sehir.upper())", "sehir.upper()", ".upper()"],
      hint: "print(sehir.upper())",
      solution: "sehir = \"istanbul\"\nprint(sehir.upper())",
      validator: (code) => {
        const clean = code.trim();
        if (/sehir\.upper\s*\(\s*\)/.test(clean)) {
          return { ok: true, msg: "Mükemmel! .upper() fonksiyon çağrısı doğru yapıldı. ✓" };
        }
        return { ok: false, msg: "Hata: print(sehir.upper()) şeklinde parantez ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: METİN DİLİMLEME (SLICING)",
      title: "4. Soru: Metin Dilimleme",
      prompt: "Yandaki kod parçasında metnin ilk 7 harfini dilimlerken (slicing) indeks aralığında bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "kurs = \"Programlama\"\nprint(kurs[0:5])\n# Doğru Kod Parçası:\n",
      filename: "stringler.py",
      lang: "Python 3.11",
      quickKeys: ["print(kurs[0:7])", "print(kurs[:7])", "kurs[0:7]"],
      hint: "print(kurs[0:7])",
      solution: "kurs = \"Programlama\"\nprint(kurs[0:7])",
      validator: (code) => {
        const clean = code.trim();
        if (/kurs\[\s*(0\s*)?:\s*7\s*\]/.test(clean)) {
          return { ok: true, msg: "Harika! [0:7] dilimleme aralığı doğru uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: İlk 7 harf için print(kurs[0:7]) veya print(kurs[:7]) kullanın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: MODERN METİN BİRLEŞTİRME (F-STRING)",
      title: "5. Soru: f-string ile Birleştirme",
      prompt: "Yandaki kod parçasında dinamik metin oluşturulurken f-string öneki (f\"...\") unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "ad = \"Bengi\"\npuan = 100\nprint(\"{ad} sınavdan {puan} aldı\")\n# Doğru Kod Parçası:\n",
      filename: "stringler.py",
      lang: "Python 3.11",
      quickKeys: ["print(f\"{ad} sınavdan {puan} aldı\")", "f\"{ad} sınavdan {puan} aldı\"", "f\""],
      hint: 'print(f"{ad} sınavdan {puan} aldı")',
      solution: 'ad = "Bengi"\npuan = 100\nprint(f"{ad} sınavdan {puan} aldı")',
      validator: (code) => {
        const clean = code.trim();
        if (/f['"].*\{ad\}.*\{puan\}.*['"]/.test(clean)) {
          return { ok: true, msg: "Tebrikler! f-string ile dinamik metin oluşturuldu. 2. Modül Tamamlandı! 🚀" };
        }
        return { ok: false, msg: 'Hata: print(f"{ad} sınavdan {puan} aldı") şeklinde başına f ekleyin.' };
      }
    }
  ],
  python_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: ARİTMETİK İŞLEMLER",
      title: "1. Soru: Çarpma ve Bölme Operatörü",
      prompt: "Yandaki kod parçasında 18 sayısının 7 katını alıp 9'a bölerken çarpma operatöründe bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "sayi = 18\nsonuc = sayi x 7 / 9\n# Doğru Kod Parçası:\n",
      filename: "operatorler.py",
      lang: "Python 3.11",
      quickKeys: ["sonuc = sayi * 7 / 9", "sayi * 7 / 9", "print(sayi * 7 / 9)"],
      hint: "sonuc = sayi * 7 / 9",
      solution: "sayi = 18\nsonuc = sayi * 7 / 9",
      validator: (code) => {
        const clean = code.trim();
        if (/sayi\s*\*\s*7\s*\/\s*9/.test(clean) || /18\s*\*\s*7\s*\/\s*9/.test(clean)) {
          return { ok: true, msg: "Mükemmel! Aritmetik * operatörü başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: Çarpma için * kullanın: sonuc = sayi * 7 / 9" };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: TAM BÖLME (//)",
      title: "2. Soru: Tam Bölme Operatörü",
      prompt: "Yandaki kod parçasında ondalıksız tam bölme yaparken tek eğik çizgi yerine // kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "tam_bolum = 15 / 4\n# Doğru Kod Parçası:\n",
      filename: "operatorler.py",
      lang: "Python 3.11",
      quickKeys: ["tam_bolum = 15 // 4", "15 // 4", "//"],
      hint: "tam_bolum = 15 // 4",
      solution: "tam_bolum = 15 // 4",
      validator: (code) => {
        const clean = code.trim();
        if (/15\s*\/\/\s*4/.test(clean)) {
          return { ok: true, msg: "Harika! // tam bölme operatörü kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: tam_bolum = 15 // 4 şeklinde çift eğik çizgi kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: ÜS ALMA OPERATÖRÜ (**)",
      title: "3. Soru: Üs Alma Operatörü",
      prompt: "Yandaki kod parçasında üs alma işlemi için ^ yerine ** operatörü kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "kup = 5 ^ 3\n# Doğru Kod Parçası:\n",
      filename: "operatorler.py",
      lang: "Python 3.11",
      quickKeys: ["kup = 5 ** 3", "5 ** 3", "**"],
      hint: "kup = 5 ** 3",
      solution: "kup = 5 ** 3",
      validator: (code) => {
        const clean = code.trim();
        if (/5\s*\*\*\s*3/.test(clean)) {
          return { ok: true, msg: "Tebrikler! ** üs alma operatörü uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: kup = 5 ** 3 şeklinde ** kullanın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: MANTIKSAL AND",
      title: "4. Soru: Mantıksal VE (and)",
      prompt: "Yandaki kod parçasında iki koşulu birbirine bağlarken && yerine 'and' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "yas = 20\nsonuc = (yas >= 18 && yas < 65)\n# Doğru Kod Parçası:\n",
      filename: "operatorler.py",
      lang: "Python 3.11",
      quickKeys: ["sonuc = (yas >= 18 and yas < 65)", "yas >= 18 and yas < 65", "and"],
      hint: "sonuc = (yas >= 18 and yas < 65)",
      solution: "yas = 20\nsonuc = (yas >= 18 and yas < 65)",
      validator: (code) => {
        const clean = code.trim();
        if (/yas\s*>=\s*18\s+and\s+yas\s*<\s*65/.test(clean) || /18\s*<=\s*yas\s*<\s*65/.test(clean)) {
          return { ok: true, msg: "Doğru! 'and' mantıksal operatörü uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: && yerine 'and' kullanın: sonuc = (yas >= 18 and yas < 65)" };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: MOD ALMA (%)",
      title: "5. Soru: Kalan / Mod Operatörü (%)",
      prompt: "Yandaki kod parçasında 29 sayısının 4'e bölümünden kalanı (mod) bulurken mod kelimesi yerine % operatörü gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "kalan = 29 mod 4\n# Doğru Kod Parçası:\n",
      filename: "operatorler.py",
      lang: "Python 3.11",
      quickKeys: ["kalan = 29 % 4", "29 % 4", "%"],
      hint: "kalan = 29 % 4",
      solution: "kalan = 29 % 4",
      validator: (code) => {
        const clean = code.trim();
        if (/29\s*%\s*4/.test(clean)) {
          return { ok: true, msg: "Mükemmel! % operatörü başarıyla uygulandı. 3. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: kalan = 29 % 4 şeklinde % kullanın." };
      }
    }
  ],
  python_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: IF KOŞULU",
      title: "1. Soru: If Koşulunda İki Nokta (:)",
      prompt: "Yandaki kod parçasında if koşulunun sonundaki iki nokta (:) işareti unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "yas = 15\nif yas < 18\n    print(\"Giriş Yapamaz\")\n# Doğru Kod Parçası:\n",
      filename: "kosullar.py",
      lang: "Python 3.11",
      quickKeys: ["if yas < 18:", "    print(\"Giriş Yapamaz\")", ":"],
      hint: 'if yas < 18:\n    print("Giriş Yapamaz")',
      solution: 'yas = 15\nif yas < 18:\n    print("Giriş Yapamaz")',
      validator: (code) => {
        const clean = code.trim();
        if (/if\s+yas\s*<\s*18\s*:/.test(clean)) {
          return { ok: true, msg: "Tebrikler! if koşulunun sonuna : eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'if yas < 18:' şeklinde iki nokta ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: ELSE BLOĞU",
      title: "2. Soru: Else Anahtar Kelimesi",
      prompt: "Yandaki kod parçasında koşulun değilse (else) bloğunda hatalı kelime kullanılmış gibi, bunu düzeltebilir misin?",
      presetCode: "yas = 20\nif yas < 18:\n    print(\"Giriş Yapamaz\")\notherwise:\n    print(\"Giriş Yapabilir\")\n# Doğru Kod Parçası:\n",
      filename: "kosullar.py",
      lang: "Python 3.11",
      quickKeys: ["else:", "    print(\"Giriş Yapabilir\")", "else"],
      hint: 'else:\n    print("Giriş Yapabilir")',
      solution: 'else:\n    print("Giriş Yapabilir")',
      validator: (code) => {
        const clean = code.trim();
        if (/else\s*:/.test(clean)) {
          return { ok: true, msg: "Harika! else: bloğu doğru kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: otherwise yerine else: kullanmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: ELIF YAPISI",
      title: "3. Soru: Çoklu Koşul (elif)",
      prompt: "Yandaki kod parçasında ara koşul için else if yerine 'elif' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "puan = 75\nif puan >= 90:\n    print(\"A\")\nelse if puan >= 70:\n    print(\"B\")\n# Doğru Kod Parçası:\n",
      filename: "kosullar.py",
      lang: "Python 3.11",
      quickKeys: ["elif puan >= 70:", "elif ", "    print(\"B\")"],
      hint: 'elif puan >= 70:\n    print("B")',
      solution: 'elif puan >= 70:\n    print("B")',
      validator: (code) => {
        const clean = code.trim();
        if (/elif\s+puan\s*>=\s*70\s*:/.test(clean)) {
          return { ok: true, msg: "Mükemmel! 'elif' anahtar kelimesi başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: else if yerine elif puan >= 70: yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: TEK SATIR IF-ELSE",
      title: "4. Soru: Ternary (Tek Satır Koşul)",
      prompt: "Yandaki kod parçasında tek satırlık ternary ifadesinde sözdizim hatası var gibi, bunu düzeltebilir misin?",
      presetCode: "durum = (yas >= 18) ? \"Reşit\" : \"Çocuk\"\n# Doğru Kod Parçası:\n",
      filename: "kosullar.py",
      lang: "Python 3.11",
      quickKeys: ["durum = \"Reşit\" if yas >= 18 else \"Çocuk\"", "\"Reşit\" if yas >= 18 else \"Çocuk\""],
      hint: 'durum = "Reşit" if yas >= 18 else "Çocuk"',
      solution: 'durum = "Reşit" if yas >= 18 else "Çocuk"',
      validator: (code) => {
        const clean = code.trim();
        if (/['"]Reşit['"]\s+if\s+yas\s*>=\s*18\s+else\s+['"]Çocuk['"]/.test(clean)) {
          return { ok: true, msg: "Harika! Python ternary (A if kosul else B) uygulandı. ✓" };
        }
        return { ok: false, msg: 'Hata: durum = "Reşit" if yas >= 18 else "Çocuk" şeklinde yazın.' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: SEÇİM YAPILARI (MATCH - CASE)",
      title: "5. Soru: Match-Case Sözdizimi",
      prompt: "Yandaki kod parçasında match-case bloğunda case satırının sonundaki iki nokta (:) unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "gun = 1\nmatch gun:\n    case 1\n        print(\"Pazartesi\")\n# Doğru Kod Parçası:\n",
      filename: "kosullar.py",
      lang: "Python 3.11",
      quickKeys: ["case 1:", "match gun:\n    case 1:\n        print(\"Pazartesi\")", "print(\"Pazartesi\")"],
      hint: 'match gun:\n    case 1:\n        print("Pazartesi")',
      solution: 'match gun:\n    case 1:\n        print("Pazartesi")',
      validator: (code) => {
        const clean = code.trim();
        if (/case\s+1\s*:/.test(clean)) {
          return { ok: true, msg: "Tebrikler! case 1: iki nokta eklendi. 4. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'case 1:' şeklinde iki nokta ekleyin." };
      }
    }
  ],
  python_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: LİSTE METOTLARI (APPEND)",
      title: "1. Soru: Listeye Eleman Ekleme",
      prompt: "Yandaki kod parçasında .append() metodunun sonucu tekrar listeye atanarak liste None yapılmış gibi, bu hatayı düzeltebilir misin?",
      presetCode: "urunler = [\"Elma\", \"Muz\"]\nurunler = urunler.append(\"Çilek\")\n# Doğru Kod Parçası:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["urunler.append(\"Çilek\")", "urunler = [\"Elma\", \"Muz\"]\nurunler.append(\"Çilek\")"],
      hint: 'urunler.append("Çilek")',
      solution: 'urunler = ["Elma", "Muz"]\nurunler.append("Çilek")',
      validator: (code) => {
        const clean = code.trim();
        const hasNoReassign = !/urunler\s*=\s*urunler\.append/.test(clean);
        const hasAppend = /urunler\.append\s*\(\s*['"]Çilek['"]\s*\)/.test(clean);
        if (hasNoReassign && hasAppend) return { ok: true, msg: "Harika! .append() listeyi yerinde günceller. ✓" };
        return { ok: false, msg: "Hata: urunler = urunler.append() yerine doğrudan urunler.append('Çilek') yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: DEĞİŞTİRİLEMEZLİK & DEMETLER",
      title: "2. Soru: Demet ve Liste Dönüşümü",
      prompt: "Yandaki kod parçasında elemanı değiştirilemeyen bir demet (tuple) kullanılmış gibi, bunu köşeli parantezli [] listeye çevirebilir misin?",
      presetCode: "sehirler = (\"İzmir\", \"Ankara\", \"İstanbul\")\nsehirler[0] = \"Bursa\"\n# Doğru Kod Parçası:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["sehirler = [\"İzmir\", \"Ankara\", \"İstanbul\"]", "sehirler[0] = \"Bursa\""],
      hint: 'sehirler = ["İzmir", "Ankara", "İstanbul"]\nsehirler[0] = "Bursa"',
      solution: 'sehirler = ["İzmir", "Ankara", "İstanbul"]\nsehirler[0] = "Bursa"',
      validator: (code) => {
        const clean = code.trim();
        const isList = /sehirler\s*=\s*\[\s*['"]İzmir['"]/.test(clean);
        if (isList) return { ok: true, msg: "Tebrikler! Listeler değiştirilebilir olduğundan hata çözüldü. ✓" };
        return { ok: false, msg: "Hata: sehirler'i liste [] yapıp sehirler[0] = 'Bursa' ataması yapın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: ELEMAN ÇIKARMA (POP)",
      title: "3. Soru: Son Elemanı Ayırma",
      prompt: "Yandaki kod parçasında listenin son elemanını çıkarmak için pop(0) yerine argümansız pop() kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "puanlar = [10, 20, 30, 40]\nson_puan = puanlar.pop(0)\n# Doğru Kod Parçası:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["son_puan = puanlar.pop()", "puanlar.pop()"],
      hint: "son_puan = puanlar.pop()",
      solution: "puanlar = [10, 20, 30, 40]\nson_puan = puanlar.pop()",
      validator: (code) => {
        const clean = code.trim();
        if (/puanlar\.pop\s*\(\s*(\s*|-1\s*)\)/.test(clean)) return { ok: true, msg: "Mükemmel! .pop() argümansız çağrıldığında son elemanı alır. ✓" };
        return { ok: false, msg: "Hata: son_puan = puanlar.pop() kullanarak son elemanı çekin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: LİSTE SIRALAMA (SORT)",
      title: "4. Soru: Listeyi Sıralama",
      prompt: "Yandaki kod parçasında listeyi sıralayan .sort metodunun parantezi unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "sayilar = [85, 12, 44, 3]\nsayilar.sort\n# Doğru Kod Parçası:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["sayilar.sort()", "sayilar = [85, 12, 44, 3]\nsayilar.sort()"],
      hint: "sayilar.sort()",
      solution: "sayilar = [85, 12, 44, 3]\nsayilar.sort()",
      validator: (code) => {
        const clean = code.trim();
        if (/sayilar\.sort\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Harika! sort() metodunu parantez ile çağırmak listeyi sıraladı. ✓" };
        return { ok: false, msg: "Hata: sayilar.sort() fonksiyon çağrısını parantezle tamamlayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: LİSTE DİLİMLEME (SLICING)",
      title: "5. Soru: Liste Dilimleme Aralığı",
      prompt: "Yandaki kod parçasında 1. ve 2. indeksteki elemanları almak için dilimleme bitiş indeksinde bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "ogrenciler = [\"Ali\", \"Ayşe\", \"Mehmet\", \"Zeynep\"]\ngrup = ogrenciler[1:2]\n# Doğru Kod Parçası:\n",
      filename: "listeler.py",
      lang: "Python 3.11",
      quickKeys: ["grup = ogrenciler[1:3]", "ogrenciler[1:3]"],
      hint: "grup = ogrenciler[1:3]",
      solution: "ogrenciler = [\"Ali\", \"Ayşe\", \"Mehmet\", \"Zeynep\"]\ngrup = ogrenciler[1:3]",
      validator: (code) => {
        const clean = code.trim();
        if (/ogrenciler\s*\[\s*1\s*:\s*3\s*\]/.test(clean)) return { ok: true, msg: "Tebrikler! [1:3] aralığı 1. ve 2. indeksleri başarıyla kapsadı. 5. Modül Tamamlandı! 🏆" };
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
      prompt: "Yandaki kod parçasında sözlükte olmayan anahtar hata vermesin diye .get() metoduyla varsayılan değer atanması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "kullanici = {\"ad\": \"Can\", \"sehir\": \"İzmir\"}\nyas = kullanici[\"yas\"]\n# Doğru Kod Parçası:\n",
      filename: "sozlukler.py",
      lang: "Python 3.11",
      quickKeys: ["yas = kullanici.get(\"yas\", \"Belirtilmedi\")", "kullanici.get("],
      hint: 'yas = kullanici.get("yas", "Belirtilmedi")',
      solution: 'kullanici = {"ad": "Can", "sehir": "İzmir"}\nyas = kullanici.get("yas", "Belirtilmedi")',
      validator: (code) => {
        const clean = code.trim();
        if (/kullanici\.get\s*\(\s*['"]yas['"]\s*,\s*['"]Belirtilmedi['"]\s*\)/.test(clean) || /kullanici\.get\s*\(\s*['"]yas['"]\s*\)/.test(clean)) return { ok: true, msg: "Harika! .get() metodu anahtar yoksa varsayılan değeri güvenle döner. ✓" };
        return { ok: false, msg: 'Hata: yas = kullanici.get("yas", "Belirtilmedi") kullanmalısınız.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: SÖZLÜK GÜNCELLEME",
      title: "2. Soru: Sözlük Değeri Güncelleme",
      prompt: "Yandaki kod parçasında sözlük değerini güncellerken normal parantez yerine köşeli parantez [] kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "urun = {\"isim\": \"Laptop\", \"fiyat\": 15000}\nurun(\"fiyat\") = 18000\n# Doğru Kod Parçası:\n",
      filename: "sozlukler.py",
      lang: "Python 3.11",
      quickKeys: ["urun[\"fiyat\"] = 18000", "urun[\"fiyat\"]"],
      hint: 'urun["fiyat"] = 18000',
      solution: 'urun = {"isim": "Laptop", "fiyat": 15000}\nurun["fiyat"] = 18000',
      validator: (code) => {
        const clean = code.trim();
        if (/urun\s*\[\s*['"]fiyat['"]\s*\]\s*=\s*18000/.test(clean)) return { ok: true, msg: "Tebrikler! Sözlük anahtarlarına köşeli parantez [] ile değer atanır. ✓" };
        return { ok: false, msg: 'Hata: urun["fiyat"] = 18000 ataması yapın.' };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KÜMELER & BENZERSİZ ELEMANLAR",
      title: "3. Soru: Benzersiz Eleman Kümesi",
      prompt: "Yandaki kod parçasında listedeki tekrar eden elemanları elemek için set() küme fonksiyonu kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "sayilar = [1, 2, 2, 3, 4, 4, 5]\ntekil_sayilar = [set(sayilar)]\n# Doğru Kod Parçası:\n",
      filename: "kumeler.py",
      lang: "Python 3.11",
      quickKeys: ["tekil_sayilar = set(sayilar)", "set(sayilar)"],
      hint: "tekil_sayilar = set(sayilar)",
      solution: "sayilar = [1, 2, 2, 3, 4, 4, 5]\ntekil_sayilar = set(sayilar)",
      validator: (code) => {
        const clean = code.trim();
        if (/tekil_sayilar\s*=\s*set\s*\(\s*sayilar\s*\)/.test(clean) || /set\s*\(\s*sayilar\s*\)/.test(clean)) return { ok: true, msg: "Mükemmel! set() fonksiyonu tekrarlanan tüm elemanları eler. ✓" };
        return { ok: false, msg: "Hata: tekil_sayilar = set(sayilar) kullanarak kümeyi elde edin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KÜMEYE ELEMAN EKLEME (.ADD)",
      title: "4. Soru: Kümeye Eleman Ekleme",
      prompt: "Yandaki kod parçasında kümeye eleman eklerken append yerine .add() metodunun kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "etiketler = {\"python\", \"kodlama\"}\netiketler.append(\"yapayzeka\")\n# Doğru Kod Parçası:\n",
      filename: "kumeler.py",
      lang: "Python 3.11",
      quickKeys: ["etiketler.add(\"yapayzeka\")", ".add("],
      hint: 'etiketler.add("yapayzeka")',
      solution: 'etiketler = {"python", "kodlama"}\netiketler.add("yapayzeka")',
      validator: (code) => {
        const clean = code.trim();
        if (/etiketler\.add\s*\(\s*['"]yapayzeka['"]\s*\)/.test(clean)) return { ok: true, msg: "Harika! Kümeler için .add() metodu kullanılır. ✓" };
        return { ok: false, msg: 'Hata: etiketler.add("yapayzeka") ile elemanı ekleyin.' };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: SÖZLÜK ANAHTARLARINI LİSTELEME",
      title: "5. Soru: Sözlük Anahtarlarını Alma",
      prompt: "Yandaki kod parçasında sözlüğün anahtarlarını listelemek için .values() yerine .keys() metodunun kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "puanlar = {\"matematik\": 90, \"fizik\": 85}\nanahtarlar = list(puanlar.values())\n# Doğru Kod Parçası:\n",
      filename: "sozlukler.py",
      lang: "Python 3.11",
      quickKeys: ["anahtarlar = list(puanlar.keys())", "list(puanlar.keys())", ".keys()"],
      hint: "anahtarlar = list(puanlar.keys())",
      solution: 'puanlar = {"matematik": 90, "fizik": 85}\nanahtarlar = list(puanlar.keys())',
      validator: (code) => {
        const clean = code.trim();
        if (/puanlar\.keys\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Tebrikler! .keys() sözlüğün tüm anahtarlarını döner. 6. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: anahtarlar = list(puanlar.keys()) komutuyla anahtarları alın." };
      }
    }
  ],
  python_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: RANGE DÖNGÜ ARALIĞI",
      title: "1. Soru: Range Sınır Değeri",
      prompt: "Yandaki kod parçasında 1'den 5'e kadar olan sayıları (5 dahil) yazdırmak için range bitiş değerinde bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "for i in range(1, 5):\n    print(i)\n# Doğru Kod Parçası:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["for i in range(1, 6):", "range(1, 6)", "    print(i)"],
      hint: "for i in range(1, 6):\n    print(i)",
      solution: "for i in range(1, 6):\n    print(i)",
      validator: (code) => {
        const clean = code.trim();
        if (/range\s*\(\s*1\s*,\s*6\s*\)/.test(clean)) {
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
      prompt: "Yandaki kod parçasında while döngüsünün sonsuz döngüye girmemesi için sayacın artırılmasında bir eksiklik var gibi, bunu düzeltebilir misin?",
      presetCode: "sayac = 1\nwhile sayac <= 5:\n    print(sayac)\n# Doğru Kod Parçası:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["sayac += 1", "while sayac <= 5:\n    print(sayac)\n    sayac += 1"],
      hint: "sayac += 1",
      solution: "sayac = 1\nwhile sayac <= 5:\n    print(sayac)\n    sayac += 1",
      validator: (code) => {
        const clean = code.trim();
        if (/sayac\s*(\+=|\=)\s*(sayac\s*\+\s*1|1)/.test(clean)) return { ok: true, msg: "Tebrikler! sayac += 1 eklenerek sonsuz döngü engellendi. ✓" };
        return { ok: false, msg: "Hata: while bloğunun içine sayac += 1 eklemelisiniz." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DÖNGÜYÜ KIRMA (BREAK)",
      title: "3. Soru: Döngüyü Koşulda Sonlandırma",
      prompt: "Yandaki kod parçasında 0 sayısına ulaşıldığında döngüyü sonlandırmak için continue yerine break kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "sayilar = [10, 20, 0, 40]\nfor s in sayilar:\n    if s == 0:\n        continue\n    print(s)\n# Doğru Kod Parçası:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["break", "if s == 0:\n        break"],
      hint: "if s == 0:\n    break",
      solution: "sayilar = [10, 20, 0, 40]\nfor s in sayilar:\n    if s == 0:\n        break\n    print(s)",
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
      prompt: "Yandaki kod parçasında hem elemanı hem sıra numarasını almak için enumerate() fonksiyonu kullanılması gerekiyor gibi, bunu ekleyebilir misin?",
      presetCode: "meyveler = [\"Elma\", \"Armut\", \"Muz\"]\nfor meyve in meyveler:\n    print(meyve)\n# Doğru Kod Parçası:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["for i, meyve in enumerate(meyveler):", "enumerate(meyveler)", "    print(i, meyve)"],
      hint: "for i, meyve in enumerate(meyveler):\n    print(i, meyve)",
      solution: "meyveler = [\"Elma\", \"Armut\", \"Muz\"]\nfor i, meyve in enumerate(meyveler):\n    print(i, meyve)",
      validator: (code) => {
        const clean = code.trim();
        if (/enumerate\s*\(\s*meyveler\s*\)/.test(clean)) {
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
      prompt: "Yandaki kod parçasında iki listeyi eleman eleman eşleştirmek için zip() fonksiyonu kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "adlar = [\"Ali\", \"Ayşe\"]\nnotlar = [90, 100]\nfor a in adlar:\n    for n in notlar:\n        print(a, n)\n# Doğru Kod Parçası:\n",
      filename: "donguler.py",
      lang: "Python 3.11",
      quickKeys: ["for a, n in zip(adlar, notlar):", "zip(adlar, notlar)", "    print(a, n)"],
      hint: "for a, n in zip(adlar, notlar):\n    print(a, n)",
      solution: "adlar = [\"Ali\", \"Ayşe\"]\nnotlar = [90, 100]\nfor a, n in zip(adlar, notlar):\n    print(a, n)",
      validator: (code) => {
        const clean = code.trim();
        if (/zip\s*\(\s*adlar\s*,\s*notlar\s*\)/.test(clean) || /zip\s*\(\s*isimler\s*,\s*notlar\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! zip() listeleri birebir eleman eşleşmesiyle dolaşır. 7. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: for a, n in zip(adlar, notlar): ile paralel döngü kurun." };
      }
    }
  ],
  python_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: DEĞER DÖNDÜRME (RETURN)",
      title: "1. Soru: Fonksiyondan Değer Döndürme",
      prompt: "Yandaki kod parçasında fonksiyonun hesapladığı değeri dışarı aktarması için 'return' ifadesi unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "def kare_al(sayi):\n    sonuc = sayi ** 2\n# Doğru Kod Parçası:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["return sayi ** 2", "return sonuc", "def kare_al(sayi):\n    return sayi ** 2"],
      hint: "return sayi ** 2",
      solution: "def kare_al(sayi):\n    return sayi ** 2",
      validator: (code) => {
        const clean = code.trim();
        if (/return\s+(sayi\s*\*\*\s*2|sonuc)/.test(clean)) {
          return { ok: true, msg: "Harika! return ifadesi fonksiyon sonucunu dışarıya aktarır. ✓" };
        }
        return { ok: false, msg: "Hata: Fonksiyon içinde 'return sayi ** 2' döndürmelisiniz." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: VARSAYILAN PARAMETRELER",
      title: "2. Soru: Varsayılan Parametre Değeri",
      prompt: "Yandaki kod parçasında isim verilmediğinde varsayılan olarak 'Misafir' atanması için parametre varsayılan değerinde eksiklik var gibi, bunu düzeltebilir misin?",
      presetCode: "def karsila(isim):\n    return f\"Hoş geldin {isim}\"\n# Doğru Kod Parçası:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["def karsila(isim=\"Misafir\"):", "isim=\"Misafir\""],
      hint: 'def karsila(isim="Misafir"):',
      solution: 'def karsila(isim="Misafir"):\n    return f"Hoş geldin {isim}"',
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
      prompt: "Yandaki kod parçasında fonksiyona istenen sayıda sayı gönderebilmek için '*sayilar' (*args) kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "def topla(a, b):\n    return a + b\n# Doğru Kod Parçası:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["def topla(*sayilar):\n    return sum(sayilar)", "def topla(*sayilar):", "return sum(sayilar)"],
      hint: "def topla(*sayilar):\n    return sum(sayilar)",
      solution: "def topla(*sayilar):\n    return sum(sayilar)",
      validator: (code) => {
        const clean = code.trim();
        if (/def\s+topla\s*\(\s*\*\w+\s*\)/.test(clean) && (/sum\s*\(/.test(clean) || /return/.test(clean))) {
          return { ok: true, msg: "Mükemmel! *sayilar (*args) değişken sayıda argümanları toplar. ✓" };
        }
        return { ok: false, msg: "Hata: def topla(*sayilar): tanımlayıp return sum(sayilar) döndürün." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: GLOBAL DEĞİŞKEN KAPSAMI",
      title: "4. Soru: Global Kapsama Müdahale",
      prompt: "Yandaki kod parçasında fonksiyon içinden global skora erişebilmek için 'global' bildirimi unutulmuş gibi, bunu ekleyebilir misin?",
      presetCode: "skor = 100\ndef skor_arttir():\n    skor += 10\n# Doğru Kod Parçası:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["global skor", "skor = 100\ndef skor_arttir():\n    global skor\n    skor += 10"],
      hint: "global skor",
      solution: "skor = 100\ndef skor_arttir():\n    global skor\n    skor += 10",
      validator: (code) => {
        const clean = code.trim();
        if (/global\s+skor/.test(clean)) {
          return { ok: true, msg: "Harika! global anahtar kelimesi fonksiyon dışındaki değişkene erişim sağlar. ✓" };
        }
        return { ok: false, msg: "Hata: Fonksiyon içine 'global skor' ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: İSİMLENDİRİLMİŞ PARAMETRELER (**KWARGS)",
      title: "5. Soru: Anahtar-Değer Argümanları (**kwargs)",
      prompt: "Yandaki kod parçasında isimlendirilmiş sözlük parametrelerini yakalamak için tek yıldız yerine çift yıldız (**bilgiler) gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "def profil_yaz(*bilgiler):\n    return bilgiler\n# Doğru Kod Parçası:\n",
      filename: "fonksiyonlar.py",
      lang: "Python 3.11",
      quickKeys: ["def profil_yaz(**bilgiler):", "return bilgiler", "**kwargs"],
      hint: "def profil_yaz(**bilgiler):\n    return bilgiler",
      solution: "def profil_yaz(**bilgiler):\n    return bilgiler",
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
      prompt: "Yandaki kod parçasında tek satırlık lambda fonksiyonunun içinde fazladan 'return' yazılmış gibi, bunu düzeltebilir misin?",
      presetCode: "iki_kat = lambda x: return x * 2\n# Doğru Kod Parçası:\n",
      filename: "lambda.py",
      lang: "Python 3.11",
      quickKeys: ["iki_kat = lambda x: x * 2", "lambda x: x * 2"],
      hint: "iki_kat = lambda x: x * 2",
      solution: "iki_kat = lambda x: x * 2",
      validator: (code) => {
        const clean = code.trim();
        if (/lambda\s+x\s*:\s*x\s*\*\s*2/.test(clean) && !/return/.test(clean)) {
          return { ok: true, msg: "Harika! Lambda ifadelerinde 'return' yazılmaz, otomatik döndürülür. ✓" };
        }
        return { ok: false, msg: "Hata: iki_kat = lambda x: x * 2 tanımını kurun." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: LİSTE ÜRETECİ (LIST COMPREHENSION)",
      title: "2. Soru: List Comprehension Sözdizimi",
      prompt: "Yandaki kod parçasında List Comprehension yapısında üretilecek ifade (x**2) döngünün başına alınmalı gibi, bunu düzeltebilir misin?",
      presetCode: "kareler = [for x in range(1, 6): x**2]\n# Doğru Kod Parçası:\n",
      filename: "comprehension.py",
      lang: "Python 3.11",
      quickKeys: ["kareler = [x**2 for x in range(1, 6)]", "x**2 for x in range(1, 6)"],
      hint: "kareler = [x**2 for x in range(1, 6)]",
      solution: "kareler = [x**2 for x in range(1, 6)]",
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
      prompt: "Yandaki kod parçasında çift sayıları filtreleyen if koşulu döngünün sonuna yerleştirilmeli gibi, bunu düzeltebilir misin?",
      presetCode: "sayilar = [1, 2, 3, 4, 5, 6]\nciftler = [if x % 2 == 0: x for x in sayilar]\n# Doğru Kod Parçası:\n",
      filename: "comprehension.py",
      lang: "Python 3.11",
      quickKeys: ["ciftler = [x for x in sayilar if x % 2 == 0]", "if x % 2 == 0"],
      hint: "ciftler = [x for x in sayilar if x % 2 == 0]",
      solution: "sayilar = [1, 2, 3, 4, 5, 6]\nciftler = [x for x in sayilar if x % 2 == 0]",
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
      prompt: "Yandaki kod parçasında map() sonucunu liste olarak görebilmek için list() ile sarılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "isimler = [\"ali\", \"veli\", \"can\"]\nbuyukler = map(str.upper, isimler)\n# Doğru Kod Parçası:\n",
      filename: "map_filter.py",
      lang: "Python 3.11",
      quickKeys: ["buyukler = list(map(str.upper, isimler))", "list(map(str.upper, isimler))"],
      hint: "buyukler = list(map(str.upper, isimler))",
      solution: "isimler = [\"ali\", \"veli\", \"can\"]\nbuyukler = list(map(str.upper, isimler))",
      validator: (code) => {
        const clean = code.trim();
        if (/list\s*\(\s*map\s*\(\s*str\.upper\s*,\s*isimler\s*\)\s*\)/.test(clean)) {
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
      prompt: "Yandaki kod parçasında filter() sonucunu liste olarak alabilmek için list() dönüşümü gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "sayilar = [-5, 10, -2, 8]\npozitifler = filter(lambda x: x > 0, sayilar)\n# Doğru Kod Parçası:\n",
      filename: "map_filter.py",
      lang: "Python 3.11",
      quickKeys: ["pozitifler = list(filter(lambda x: x > 0, sayilar))", "list(filter("],
      hint: "pozitifler = list(filter(lambda x: x > 0, sayilar))",
      solution: "sayilar = [-5, 10, -2, 8]\npozitifler = list(filter(lambda x: x > 0, sayilar))",
      validator: (code) => {
        const clean = code.trim();
        if (/list\s*\(\s*filter\s*\(/.test(clean)) {
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
      moduleSubtitle: "MODÜL 10: MODÜL İÇE AKTARMA (IMPORT)",
      title: "1. Soru: Modül İçe Aktarma (Import)",
      prompt: "Yandaki kod parçasında math.sqrt fonksiyonunu kullanabilmek için en üste 'import math' eklenmesi gerekiyor gibi, bunu ekleyebilir misin?",
      presetCode: "sonuc = math.sqrt(16)\n# Doğru Kod Parçası:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["import math\nsonuc = math.sqrt(16)", "import math"],
      hint: "import math\nsonuc = math.sqrt(16)",
      solution: "import math\nsonuc = math.sqrt(16)",
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
      prompt: "Yandaki kod parçasında randint fonksiyonunu doğrudan çekmek için 'from random import randint' yazılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import randint from random\nsayi = randint(1, 10)\n# Doğru Kod Parçası:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["from random import randint", "sayi = randint(1, 10)"],
      hint: "from random import randint\nsayi = randint(1, 10)",
      solution: "from random import randint\nsayi = randint(1, 10)",
      validator: (code) => {
        const clean = code.trim();
        if (/from\s+random\s+import\s+randint/.test(clean)) {
          return { ok: true, msg: "Tebrikler! from modul import fonksiyon sözdizimi uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'from random import randint' şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: MODÜLE TAKMA AD VERME (AS)",
      title: "3. Soru: Modül Takma Adı (Alias)",
      prompt: "Yandaki kod parçasında modüle takma ad verirken 'with' yerine 'as' anahtar kelimesi kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import datetime with dt\nsimdi = dt.datetime.now()\n# Doğru Kod Parçası:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["import datetime as dt", "as dt"],
      hint: "import datetime as dt",
      solution: "import datetime as dt\nsimdi = dt.datetime.now()",
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
      prompt: "Yandaki kod parçasında from ile içe aktarılan pi sabiti doğrudan 'pi' adıyla çağrılmalı gibi, bunu düzeltebilir misin?",
      presetCode: "from math import pi\nalan = math.pi * (5 ** 2)\n# Doğru Kod Parçası:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["alan = pi * (5 ** 2)", "alan = pi * 25", "from math import pi"],
      hint: "from math import pi\nalan = pi * (5 ** 2)",
      solution: "from math import pi\nalan = pi * (5 ** 2)",
      validator: (code) => {
        const clean = code.trim();
        if (!/math\.pi/.test(clean) && /pi\s*\*/.test(clean)) {
          return { ok: true, msg: "Harika! from ile içe aktarılan pi doğrudan adıyla kullanılır. ✓" };
        }
        return { ok: false, msg: "Hata: alan = pi * (5 ** 2) şeklinde math. önekini kaldırın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: RASTGELE SEÇİM (RANDOM.CHOICE)",
      title: "5. Soru: Listeden Rastgele Seçim",
      prompt: "Yandaki kod parçasında listeden rastgele eleman seçmek için random.rand yerine 'random.choice' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import random\nrenkler = [\"Kırmızı\", \"Mavi\", \"Yeşil\"]\nsecim = random.rand(renkler)\n# Doğru Kod Parçası:\n",
      filename: "moduller.py",
      lang: "Python 3.11",
      quickKeys: ["secim = random.choice(renkler)", "random.choice(renkler)", "random.choice"],
      hint: "secim = random.choice(renkler)",
      solution: "import random\nrenkler = [\"Kırmızı\", \"Mavi\", \"Yeşil\"]\nsecim = random.choice(renkler)",
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
      prompt: "Yandaki kod parçasında sıfıra bölme hatasını yakalayıp ekrana uyarı basmak için try-except bloğu kurulmalı gibi, bunu ekleyebilir misin?",
      presetCode: "sayi = 10 / 0\n# Doğru Kod Parçası:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["try:\n    sayi = 10 / 0\nexcept ZeroDivisionError:\n    print(\"Sıfıra bölünemez\")", "except ZeroDivisionError:"],
      hint: 'try:\n    sayi = 10 / 0\nexcept ZeroDivisionError:\n    print("Sıfıra bölünemez")',
      solution: 'try:\n    sayi = 10 / 0\nexcept ZeroDivisionError:\n    print("Sıfıra bölünemez")',
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
      prompt: "Yandaki kod parçasında int('abc') dönüşüm hatasını yakalamak için KeyError yerine 'ValueError' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "try:\n    deger = int(\"abc\")\nexcept KeyError:\n    print(\"Geçersiz Sayı\")\n# Doğru Kod Parçası:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["except ValueError:", "try:\n    deger = int(\"abc\")\nexcept ValueError:\n    print(\"Geçersiz Sayı\")"],
      hint: "except ValueError:",
      solution: 'try:\n    deger = int("abc")\nexcept ValueError:\n    print("Geçersiz Sayı")',
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
      prompt: "Yandaki kod parçasında her durumda mutlaka çalışan garanti blok için 'finally' eklenmesi gerekiyor gibi, bunu ekleyebilir misin?",
      presetCode: "try:\n    x = 5 + 5\nexcept Exception:\n    print(\"Hata\")\n# Doğru Kod Parçası:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["finally:\n    print(\"İşlem Bitti\")", "finally:"],
      hint: 'finally:\n    print("İşlem Bitti")',
      solution: 'try:\n    x = 5 + 5\nexcept Exception:\n    print("Hata")\nfinally:\n    print("İşlem Bitti")',
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
      prompt: "Yandaki kod parçasında Python'da manuel hata fırlatırken 'throw' yerine 'raise' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "yas = -5\nif yas < 0:\n    throw ValueError(\"Yaş negatif olamaz\")\n# Doğru Kod Parçası:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["raise ValueError(\"Yaş negatif olamaz\")", "raise "],
      hint: 'raise ValueError("Yaş negatif olamaz")',
      solution: 'yas = -5\nif yas < 0:\n    raise ValueError("Yaş negatif olamaz")',
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
      prompt: "Yandaki kod parçasında hata mesajını değişkene bağlayıp yazdırmak için 'except ZeroDivisionError as e:' şeklinde tanımlama gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "try:\n    sonuc = 10 / 0\nexcept ZeroDivisionError:\n    print(e)\n# Doğru Kod Parçası:\n",
      filename: "hatalar.py",
      lang: "Python 3.11",
      quickKeys: ["except ZeroDivisionError as e:", "as e", "print(e)"],
      hint: "except ZeroDivisionError as e:",
      solution: "try:\n    sonuc = 10 / 0\nexcept ZeroDivisionError as e:\n    print(e)",
      validator: (code) => {
        const clean = code.trim();
        if (/except\s+ZeroDivisionError\s+as\s+e\s*:/.test(clean) && /print\s*\(\s*e\s*\)/.test(clean)) {
          return { ok: true, msg: "Tebrikler! 'as e' ile hata nesnesi değişkene bağlandı. 11. Modül Tamamlandı! 🏆" };
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
      prompt: "Yandaki kod parçasında dosyaya yazı yazabilmek için 'r' okuma modu yerine 'w' yazma modu kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "with open(\"notlar.txt\", \"r\") as dosya:\n    dosya.write(\"Python 100\")\n# Doğru Kod Parçası:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["with open(\"notlar.txt\", \"w\") as dosya:", "\"w\""],
      hint: 'with open("notlar.txt", "w") as dosya:\n    dosya.write("Python 100")',
      solution: 'with open("notlar.txt", "w") as dosya:\n    dosya.write("Python 100")',
      validator: (code) => {
        const clean = code.trim();
        if (/with\s+open\s*\(\s*['"]notlar\.txt['"]\s*,\s*['"]w['"]\s*\)\s*as\s+dosya\s*:/.test(clean)) {
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
      prompt: "Yandaki kod parçasında dosyadaki eski verileri silmeden sonuna ekleme yapmak için 'w' yerine 'a' modu gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "with open(\"log.txt\", \"w\") as dosya:\n    dosya.write(\"Yeni Satır\\n\")\n# Doğru Kod Parçası:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["with open(\"log.txt\", \"a\") as dosya:", "\"a\""],
      hint: 'with open("log.txt", "a") as dosya:\n    dosya.write("Yeni Satır\\n")',
      solution: 'with open("log.txt", "a") as dosya:\n    dosya.write("Yeni Satır\\n")',
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
      prompt: "Yandaki kod parçasında dosyanın tüm metnini okumak için dosya.read() fonksiyon çağrısı unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "with open(\"metin.txt\", \"r\") as dosya:\n    icerik = dosya\n# Doğru Kod Parçası:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["icerik = dosya.read()", "dosya.read()"],
      hint: 'with open("metin.txt", "r") as dosya:\n    icerik = dosya.read()',
      solution: 'with open("metin.txt", "r") as dosya:\n    icerik = dosya.read()',
      validator: (code) => {
        const clean = code.trim();
        if (/dosya\.read\s*\(\s*\)/.test(clean)) {
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
      prompt: "Yandaki kod parçasında tüm satırları liste olarak okumak için readline yerine 'readlines()' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "with open(\"liste.txt\", \"r\") as dosya:\n    satirlar = dosya.readline()\n# Doğru Kod Parçası:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["satirlar = dosya.readlines()", "dosya.readlines()"],
      hint: "satirlar = dosya.readlines()",
      solution: 'with open("liste.txt", "r") as dosya:\n    satirlar = dosya.readlines()',
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
      prompt: "Yandaki kod parçasında dosyanın otomatik güvenle kapanması için 'with open(...) as dosya:' kalıbı kurulmalı gibi, bunu düzeltebilir misin?",
      presetCode: "dosya = open(\"veri.txt\", \"r\")\nicerik = dosya.read()\n# Doğru Kod Parçası:\n",
      filename: "dosyalar.py",
      lang: "Python 3.11",
      quickKeys: ["with open(\"veri.txt\", \"r\") as dosya:\n    icerik = dosya.read()", "with open("],
      hint: 'with open("veri.txt", "r") as dosya:\n    icerik = dosya.read()',
      solution: 'with open("veri.txt", "r") as dosya:\n    icerik = dosya.read()',
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
      prompt: "Yandaki kod parçasında yapıcı (constructor) metot adı 'init' yerine '__init__' olarak tanımlanmalı gibi, bunu düzeltebilir misin?",
      presetCode: "class Araba:\n    def init(self, marka):\n        self.marka = marka\n# Doğru Kod Parçası:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["def __init__(self, marka):", "__init__", "self.marka = marka"],
      hint: "def __init__(self, marka):\n    self.marka = marka",
      solution: "class Araba:\n    def __init__(self, marka):\n        self.marka = marka",
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
      prompt: "Yandaki kod parçasında sınıf metodunun ilk parametresine nesne referansı olan 'self' eklenmeli gibi, bunu düzeltebilir misin?",
      presetCode: "class Oyuncu:\n    def __init__(self, ad):\n        self.ad = ad\n    def selamla():\n        return f\"Merhaba {self.ad}\"\n# Doğru Kod Parçası:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["def selamla(self):", "self", "return f\"Merhaba {self.ad}\""],
      hint: "def selamla(self):",
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
      prompt: "Yandaki kod parçasında üst sınıftan miras (kalıtım) almak için sınıf adının yanına 'class Kopek(Hayvan):' parantezi eklenmeli gibi, bunu düzeltebilir misin?",
      presetCode: "class Hayvan:\n    def ses_cikar(self):\n        return \"Ses\"\n\nclass Kopek:\n    pass\n# Doğru Kod Parçası:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["class Kopek(Hayvan):", "class Kopek(Hayvan):\n    pass"],
      hint: "class Kopek(Hayvan):",
      solution: "class Hayvan:\n    def ses_cikar(self): return \"Ses\"\n\nclass Kopek(Hayvan):\n    pass",
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
      prompt: "Yandaki kod parçasında üst sınıfın kurucusunu çağırırken 'parent' yerine 'super().__init__(isim)' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "class Calisan:\n    def __init__(self, isim):\n        self.isim = isim\n\nclass Mudur(Calisan):\n    def __init__(self, isim, departman):\n        parent.__init__(isim)\n        self.departman = departman\n# Doğru Kod Parçası:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["super().__init__(isim)", "super()"],
      hint: "super().__init__(isim)",
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
      prompt: "Yandaki kod parçasında nesne print edildiğinde anlaşılır metin dönmesi için to_string yerine '__str__' tanımlanmalı gibi, bunu düzeltebilir misin?",
      presetCode: "class Kitap:\n    def __init__(self, baslik):\n        self.baslik = baslik\n    def to_string(self):\n        return self.baslik\n# Doğru Kod Parçası:\n",
      filename: "oop.py",
      lang: "Python 3.11",
      quickKeys: ["def __str__(self):", "__str__", "return self.baslik"],
      hint: "def __str__(self):\n    return self.baslik",
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
      prompt: "Yandaki kod parçasında sözlüğü JSON metnine çevirmek için json.to_json yerine 'json.dumps(veri)' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import json\nveri = {\"proje\": \"Sehir\", \"seviye\": 14}\njson_metin = json.to_json(veri)\n# Doğru Kod Parçası:\n",
      filename: "proje.py",
      lang: "Python 3.11",
      quickKeys: ["json_metin = json.dumps(veri)", "json.dumps(veri)", "import json"],
      hint: "json_metin = json.dumps(veri)",
      solution: 'import json\nveri = {"proje": "Sehir", "seviye": 14}\njson_metin = json.dumps(veri)',
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
      prompt: "Yandaki kod parçasında JSON metnini sözlüğe dönüştürmek için json.load yerine 'json.loads(metin)' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import json\nmetin = '{\"durum\": \"aktif\", \"skor\": 100}'\nsozluk = json.load(metin)\n# Doğru Kod Parçası:\n",
      filename: "proje.py",
      lang: "Python 3.11",
      quickKeys: ["sozluk = json.loads(metin)", "json.loads(metin)"],
      hint: "sozluk = json.loads(metin)",
      solution: 'import json\nmetin = \'{"durum": "aktif", "skor": 100}\'\nsozluk = json.loads(metin)',
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
      prompt: "Yandaki kod parçasında arayüz penceresinin açık kalması için 'pencere.mainloop()' döngü komutu eksik kalmış gibi, bunu ekleyebilir misin?",
      presetCode: "import tkinter as tk\npencere = tk.Tk()\npencere.title(\"Kod Çiftliği\")\n# Doğru Kod Parçası:\n",
      filename: "arayuz.py",
      lang: "Python 3.11",
      quickKeys: ["pencere.mainloop()", "import tkinter as tk"],
      hint: "pencere.mainloop()",
      solution: "import tkinter as tk\npencere = tk.Tk()\npencere.title(\"Kod Çiftliği\")\npencere.mainloop()",
      validator: (code) => {
        const clean = code.trim();
        if (/pencere\.mainloop\s*\(\s*\)/.test(clean)) {
          return { ok: true, msg: "Mükemmel! pencere.mainloop() grafik arayüz penceresini açık tutar. ✓" };
        }
        return { ok: false, msg: "Hata: pencere.mainloop() komutunu çağırmalısınız." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: FONKSİYON DEKORATÖRLERİ (@)",
      title: "4. Soru: Dekoratör (@) Uygulama",
      prompt: "Yandaki kod parçasında dekoratörü fonksiyona bağlamak için fonksiyonun hemen üstüne '@buyuk_harf_yap' eklenmeli gibi, bunu düzeltebilir misin?",
      presetCode: "def buyuk_harf_yap(fonk):\n    def sarmal():\n        return fonk().upper()\n    return sarmal\n\ndef merhaba():\n    return \"gunaydin\"\n# Doğru Kod Parçası:\n",
      filename: "dekorator.py",
      lang: "Python 3.11",
      quickKeys: ["@buyuk_harf_yap\ndef merhaba():", "@buyuk_harf_yap"],
      hint: "@buyuk_harf_yap\ndef merhaba():",
      solution: 'def buyuk_harf_yap(fonk):\n    def sarmal():\n        return fonk().upper()\n    return sarmal\n\n@buyuk_harf_yap\ndef merhaba():\n    return "gunaydin"',
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
      prompt: "Yandaki kod parçasında generator üreteç fonksiyonunda 'return' yerine 'yield i' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "def sayac():\n    for i in range(1, 4):\n        return i\n# Doğru Kod Parçası:\n",
      filename: "generator.py",
      lang: "Python 3.11",
      quickKeys: ["yield i", "def sayac():\n    for i in range(1, 4):\n        yield i"],
      hint: "yield i",
      solution: "def sayac():\n    for i in range(1, 4):\n        yield i",
      validator: (code) => {
        const clean = code.trim();
        if (/yield\s+i/.test(clean)) {
          return { ok: true, msg: "Tebrikler! yield anahtar kelimesi ile generator başarıyla tamamlandı. Python Müfredatı Tamamlandı! 🚀🏆" };
        }
        return { ok: false, msg: "Hata: return yerine 'yield i' kullanmalısınız." };
      }
    }
  ]
,
  java_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: KONSOL ÇIKTISI (PRINTLN)",
      title: "1. Soru: Ekrana Çıktı Verme Sözdizimi",
      prompt: "Yandaki kod parçasında ekrana yazdırma komutunda (konsol çıktısı) bir hata var gibi, bu hatayı düzeltebilir misin?",
      presetCode: "Print(\"Merhaba Java\");\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["System.out.println(\"Merhaba Java\");", "System.out.println(", ";"],
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
      prompt: "Yandaki kod parçasında tam sayı değişkeninin tip tanımlamasında (int) bir eksiklik var gibi, bunu düzeltebilir misin?",
      presetCode: "puan = 100;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int puan = 100;", "int ", "puan = 100;"],
      solution: "int puan = 100;\nSystem.out.println(puan);",
      validator: (code) => {
        const clean = code.trim();
        if (/int\s+puan\s*=\s*100\s*;/.test(clean)) return { ok: true, msg: "Tebrikler! int türü tanımlandı. ✓" };
        return { ok: false, msg: "Hata: int puan = 100; şeklinde değişken türünü belirtin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: METİN DEĞİŞKENİ (STRING)",
      title: "3. Soru: Metin ve Tırnak Kuralı",
      prompt: "Yandaki kod parçasında metin (String) tanımlanırken tırnak işaretinde bir hata yapılmış gibi, bunu düzeltebilir misin?",
      presetCode: "String sehir = 'Ankara';\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["String sehir = \"Ankara\";", "\"Ankara\"", "String "],
      solution: "String sehir = \"Ankara\";",
      validator: (code) => {
        const clean = code.trim();
        if (/String\s+sehir\s*=\s*"Ankara"\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! String için çift tırnak kullanılır. ✓" };
        return { ok: false, msg: 'Hata: String sehir = "Ankara"; şeklinde çift tırnak kullanın.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: ONDALIKLI SAYILAR (DOUBLE)",
      title: "4. Soru: Ondalıklı Sayı Türü",
      prompt: "Yandaki kod parçasında ondalıklı bir sayı için yanlış veri tipi seçilmiş gibi, bunu düzeltebilir misin?",
      presetCode: "int sicaklik = 36.6;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["double sicaklik = 36.6;", "double ", "sicaklik = 36.6;"],
      solution: "double sicaklik = 36.6;",
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
      prompt: "Yandaki kod parçasında ondalıklı sayıyı tam sayıya dönüştürürken (casting) bir hata var gibi, bu tür dönüşümünü düzeltebilir misin?",
      presetCode: "double oran = 9.85;\nint tamSayi = oran;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int tamSayi = (int) oran;", "(int) oran", "int tamSayi"],
      solution: "double oran = 9.85;\nint tamSayi = (int) oran;",
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
      prompt: "Yandaki kod parçasında bölme işleminden kalanı (mod) bulurken yanlış operatör kullanılmış gibi, bunu düzeltebilir misin?",
      presetCode: "int kalan = 29 / 4;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int kalan = 29 % 4;", "29 % 4", "int kalan = "],
      solution: "int kalan = 29 % 4;",
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
      prompt: "Yandaki kod parçasında bölme işleminin sonucunun küsuratlı (3.5) çıkması gerekirken bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "double sonuc = 7 / 2;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["double sonuc = 7.0 / 2;", "7.0 / 2", "7 / 2.0"],
      solution: "double sonuc = 7.0 / 2;",
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
      prompt: "Yandaki kod parçasında en büyük sayıyı bulan Math sınıfı çağrısında bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "int buyuk = max(45, 80);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int buyuk = Math.max(45, 80);", "Math.max(45, 80)", "Math.max"],
      solution: "int buyuk = Math.max(45, 80);",
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
      prompt: "Yandaki kod parçasında karekök alma fonksiyonunun isminde bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "double kok = Math.square(81);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["double kok = Math.sqrt(81);", "Math.sqrt(81)", "Math.sqrt"],
      solution: "double kok = Math.sqrt(81);",
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
      prompt: "Yandaki kod parçasında sayacı 1 artırma operatöründe (++) bir yazım hatası var gibi, bunu düzeltebilir misin?",
      presetCode: "int sayac = 10;\nsayac+;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["sayac++;", "int sayac = 10;\nsayac++;", "sayac++"],
      solution: "int sayac = 10;\nsayac++;",
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
      prompt: "Yandaki kod parçasında iki metnin içeriğini karşılaştırırken yanlış operatör kullanılmış gibi, bunu .equals ile düzeltebilir misin?",
      presetCode: "String parola = \"gizli\";\nboolean esitMi = (parola == \"gizli\");\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["boolean esitMi = parola.equals(\"gizli\");", "parola.equals(\"gizli\")", ".equals("],
      solution: "String parola = \"gizli\";\nboolean esitMi = parola.equals(\"gizli\");",
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
      prompt: "Yandaki kod parçasında metin uzunluğunu bulurken metot parantezinde bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "String mesaj = \"Kodlama\";\nint uzunluk = mesaj.length;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int uzunluk = mesaj.length();", "mesaj.length()", ".length()"],
      solution: "String mesaj = \"Kodlama\";\nint uzunluk = mesaj.length();",
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
      prompt: "Yandaki kod parçasında metnin ilk karakterine erişirken köşeli parantez hatası yapılmış gibi, bunu .charAt() ile düzeltebilir misin?",
      presetCode: "String dil = \"Java\";\nchar ilk = dil[0];\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["char ilk = dil.charAt(0);", "dil.charAt(0)", ".charAt(0)"],
      solution: "String dil = \"Java\";\nchar ilk = dil.charAt(0);",
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
      prompt: "Yandaki kod parçasında metni büyük harfe dönüştürdükten sonra değişkene atamada bir eksiklik var gibi, bunu düzeltebilir misin?",
      presetCode: "String sehir = \"izmir\";\nsehir.toUpperCase();\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["sehir = sehir.toUpperCase();", "sehir.toUpperCase()", "System.out.println(sehir.toUpperCase());"],
      solution: "String sehir = \"izmir\";\nsehir = sehir.toUpperCase();",
      validator: (code) => {
        const clean = code.trim();
        if (/sehir\s*=\s*sehir\.toUpperCase\s*\(\s*\)/.test(clean) || /System\.out\.println\s*\(\s*sehir\.toUpperCase\s*\(\s*\)\s*\)/.test(clean) || /sehir\.toUpperCase\s*\(\s*\)/.test(clean)) return { ok: true, msg: "Harika! String dönüşümü başarıyla yapıldı. ✓" };
        return { ok: false, msg: "Hata: sehir = sehir.toUpperCase(); şeklinde sonucu değişkene atayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: METİN BİRLEŞTİRME (+)",
      title: "5. Soru: Metin Birleştirme",
      prompt: "Yandaki kod parçasında iki metni araya boşluk koyarak birleştirirken (+) operatörü unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "String ad = \"Ali\", soyad = \"Yılmaz\";\nString tamAd = ad soyad;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["String tamAd = ad + \" \" + soyad;", "ad + \" \" + soyad", "ad + soyad"],
      solution: "String ad = \"Ali\", soyad = \"Yılmaz\";\nString tamAd = ad + \" \" + soyad;",
      validator: (code) => {
        const clean = code.trim();
        if (/ad\s*\+\s*" "\s*\+\s*soyad/.test(clean) || /ad\s*\+\s*soyad/.test(clean)) return { ok: true, msg: "Tebrikler! Metinler başarıyla birleştirildi. 3. Modül Tamamlandı! 🏆" };
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
      prompt: "Yandaki kod parçasında if koşulunun parantezlerinde bir sözdizim hatası var gibi, bunu düzeltebilir misin?",
      presetCode: "int yas = 20;\nif yas >= 18 {\n    System.out.println(\"Reşit\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["if (yas >= 18) {", "if (yas >= 18)", "System.out.println(\"Reşit\");"],
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
      prompt: "Yandaki kod parçasında koşulun değilse (else) bloğunda hatalı bir anahtar kelime kullanılmış gibi, bunu düzeltebilir misin?",
      presetCode: "int sayi = -5;\nif (sayi >= 0) {\n    System.out.println(\"Pozitif\");\n} otherwise {\n    System.out.println(\"Negatif\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["} else {", "else {", "System.out.println(\"Negatif\");"],
      solution: "int sayi = -5;\nif (sayi >= 0) {\n    System.out.println(\"Pozitif\");\n} else {\n    System.out.println(\"Negatif\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\}\s*else\s*\{[\s\S]*Negatif/.test(clean) || /else\s*\{/.test(clean)) return { ok: true, msg: "Tebrikler! else bloğu doğru kuruldu. ✓" };
        return { ok: false, msg: "Hata: otherwise yerine else { ... } kullanın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: TERNARY OPERATÖRÜ",
      title: "3. Soru: Ternary (Tek Satır If-Else)",
      prompt: "Yandaki kod parçasında tek satırlık ternary koşul operatöründe (? :) bir sözdizim hatası var gibi, bunu düzeltebilir misin?",
      presetCode: "int puan = 65;\nString sonuc = (puan >= 50) : \"Geçti\" ? \"Kaldı\";\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["String sonuc = (puan >= 50) ? \"Geçti\" : \"Kaldı\";", "? \"Geçti\" : \"Kaldı\"", "? :"],
      solution: "int puan = 65;\nString sonuc = (puan >= 50) ? \"Geçti\" : \"Kaldı\";",
      validator: (code) => {
        const clean = code.trim();
        if (/\(\s*puan\s*>=\s*50\s*\)\s*\?\s*"Geçti"\s*:\s*"Kaldı"/.test(clean) || /puan\s*>=\s*50\s*\?\s*"Geçti"\s*:\s*"Kaldı"/.test(clean)) return { ok: true, msg: "Mükemmel! Ternary (? :) sözdizimi başarıyla uygulandı. ✓" };
        return { ok: false, msg: 'Hata: String sonuc = (puan >= 50) ? "Geçti" : "Kaldı"; şeklinde yazın.' };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: SWITCH-CASE & BREAK",
      title: "4. Soru: Switch-Case Break Eksikliği",
      prompt: "Yandaki kod parçasında switch-case yapısında sonraki duruma geçişi engelleyen (break) komutu unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "int gun = 1;\nswitch (gun) {\n    case 1:\n        System.out.println(\"Pazartesi\");\n    case 2:\n        System.out.println(\"Salı\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["break;", "case 1:\n        System.out.println(\"Pazartesi\");\n        break;", "switch (gun) {"],
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
      prompt: "Yandaki kod parçasında iki koşulu birbirine bağlayan mantıksal VE (&&) operatöründe bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "int yas = 22;\nboolean ehliyet = true;\nif (yas >= 18 and ehliyet == true) {\n    System.out.println(\"Araç Kullanabilir\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["if (yas >= 18 && ehliyet) {", "yas >= 18 && ehliyet", "&&"],
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
      prompt: "Yandaki kod parçasında for döngüsünün parametrelerini ayırırken virgül kullanılmış gibi, bunu noktalı virgülle (;) düzeltebilir misin?",
      presetCode: "for (int i = 1, i <= 3, i++) {\n    System.out.println(i);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["for (int i = 1; i <= 3; i++) {", "i <= 3;", "for (int i = 1;"],
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
      prompt: "Yandaki kod parçasında while döngüsünün sonsuz döngüye girmemesi için sayacı artırmada bir eksiklik var gibi, bunu düzeltebilir misin?",
      presetCode: "int sayac = 1;\nwhile (sayac <= 3) {\n    System.out.println(sayac);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["sayac++;", "while (sayac <= 3) {", "System.out.println(sayac);"],
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
      prompt: "Yandaki kod parçasında döngüyü erken sonlandırmak için hatalı bir kelime kullanılmış gibi, bunu break ile düzeltebilir misin?",
      presetCode: "for (int i = 1; i <= 5; i++) {\n    if (i == 3) {\n        stop;\n    }\n    System.out.println(i);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["break;", "if (i == 3) {\n        break;\n    }", "for (int i = 1; i <= 5; i++) {"],
      solution: "for (int i = 1; i <= 5; i++) {\n    if (i == 3) {\n        break;\n    }\n    System.out.println(i);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*i\s*==s*3\s*\)\s*\{[\s\S]*break\s*;/.test(clean)) return { ok: true, msg: "Mükemmel! break komutu uygulandı. ✓" };
        return { ok: false, msg: "Hata: if (i == 3) durumunda break; komutunu kullanın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: TURU ATLAMA (CONTINUE)",
      title: "4. Soru: Belirli Adımı Atlama (Continue)",
      prompt: "Yandaki kod parçasında o anki adımı atlayıp döngüye devam etmek için hatalı kelime yazılmış gibi, bunu continue ile düzeltebilir misin?",
      presetCode: "for (int i = 1; i <= 3; i++) {\n    if (i == 2) {\n        pass;\n    }\n    System.out.println(i);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["continue;", "if (i == 2) {\n        continue;\n    }", "for (int i = 1; i <= 3; i++) {"],
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
      prompt: "Yandaki kod parçasında do-while döngüsünün en sonundaki noktalı virgülde (;) bir eksiklik var gibi, bunu düzeltebilir misin?",
      presetCode: "int x = 5;\ndo {\n    System.out.println(x);\n} while (x < 3)\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["} while (x < 3);", "do {", "int x = 5;"],
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
      prompt: "Yandaki kod parçasında dizi tanımlama ve süslü parantez {...} kullanımında bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "int sayilar = [10, 20, 30];\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int[] sayilar = {10, 20, 30};", "System.out.println(sayilar[0]);", "int[] "],
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
      prompt: "Yandaki kod parçasında dizinin eleman sayısını alırken parantez kullanılmış gibi, .length özelliğini düzeltebilir misin?",
      presetCode: "String[] arabalar = {\"Volvo\", \"BMW\", \"Ford\"};\nint adet = arabalar.length();\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int adet = arabalar.length;", "arabalar.length", "System.out.println(adet);"],
      solution: "String[] arabalar = {\"Volvo\", \"BMW\", \"Ford\"};\nint adet = arabalar.length;",
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
      prompt: "Yandaki kod parçasında For-Each döngüsünde 'in' yerine iki nokta (:) kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "int[] numaralar = {1, 2, 3};\nfor (int n in numaralar) {\n    System.out.println(n);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["for (int n : numaralar) {", "System.out.println(n);", "int[] numaralar = {1, 2, 3};"],
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
      prompt: "Yandaki kod parçasında dizinin ilk elemanını güncellerken metot yerine indeks ataması yapılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "String[] meyveler = {\"Muz\", \"Çilek\"};\nmeyveler.set(0, \"Elma\");\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["meyveler[0] = \"Elma\";", "meyveler[0]", "System.out.println(meyveler[0]);"],
      solution: "String[] meyveler = {\"Muz\", \"Çilek\"};\nmeyveler[0] = \"Elma\";",
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
      prompt: "Yandaki kod parçasında 2 boyutlu matristen eleman çekerken indeks parantezlerinde bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "int[][] matris = {{1, 2}, {3, 4}};\nint deger = matris[0, 1];\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["int deger = matris[0][1];", "matris[0][1]", "System.out.println(deger);"],
      solution: "int[][] matris = {{1, 2}, {3, 4}};\nint deger = matris[0][1];",
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
      prompt: "Yandaki kod parçasında tam sayı döndüren metodun içinde 'return' ifadesi unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "public static int topla(int a, int b) {\n    int sonuc = a + b;\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["return sonuc;", "return a + b;", "public static int topla(int a, int b) {"],
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
      prompt: "Yandaki kod parçasında değer döndürmeyen metot için 'void' yerine yanlış bir anahtar kelime yazılmış gibi, bunu düzeltebilir misin?",
      presetCode: "public static empty yazdir(String mesaj) {\n    System.out.println(mesaj);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static void yazdir(String mesaj) {", "System.out.println(mesaj);", "void "],
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
      prompt: "Yandaki kod parçasında metodun parametresine veri tipi (String) yazılması unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "public static void selamla(isim) {\n    System.out.println(\"Merhaba \" + isim);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static void selamla(String isim) {", "String isim", "System.out.println(\"Merhaba \" + isim);"],
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
      prompt: "Yandaki kod parçasında metot aşırı yüklemede double parametre alan metodun dönüş tipinde bir uyumsuzluk var gibi, bunu düzeltebilir misin?",
      presetCode: "public static int topla(int a, int b) { return a + b; }\npublic static int topla(double a, double b) { return a + b; }\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static double topla(double a, double b) { return a + b; }", "double topla", "return a + b;"],
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
      prompt: "Yandaki kod parçasında metodun nesne üretmeden doğrudan çağrılabilmesi için 'static' belirteci eksik gibi, bunu düzeltebilir misin?",
      presetCode: "public int kupAl(int x) {\n    return x * x * x;\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static int kupAl(int x) {", "static ", "return x * x * x;"],
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
      prompt: "Yandaki kod parçasında yeni bir nesne örneği türetilirken 'new' anahtar kelimesi unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "class Ogrenci { String ad; }\nOgrenci ogr = Ogrenci();\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["Ogrenci ogr = new Ogrenci();", "new Ogrenci()", "ogr.ad = \"Ali\";"],
      solution: "class Ogrenci { String ad; }\nOgrenci ogr = new Ogrenci();",
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
      prompt: "Yandaki kod parçasında nesne alanına erişirken ok (->) yerine nokta (.) kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "class Araba { int yil; }\nAraba a = new Araba();\na->yil = 2024;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["a.yil = 2024;", "a.yil", "Araba a = new Araba();"],
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
      prompt: "Yandaki kod parçasında nesnenin metodunu çağırırken nesne üzerinden (k.havla()) çağrı yapılmamış gibi, bunu düzeltebilir misin?",
      presetCode: "class Kopek {\n    void havla() { System.out.println(\"Hav!\"); }\n}\nKopek k = new Kopek();\nhavla(k);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["k.havla();", "Kopek k = new Kopek();", "k.havla()"],
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
      prompt: "Yandaki kod parçasında parametre ile sınıf alanını ayırt etmek için 'this' anahtar kelimesi unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "class Urun {\n    int fiyat;\n    void setFiyat(int fiyat) {\n        fiyat = fiyat;\n    }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["this.fiyat = fiyat;", "this.fiyat", "void setFiyat(int fiyat) {"],
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
      prompt: "Yandaki kod parçasında c2'nin c1'den bağımsız yeni bir nesne olması için new ile türetilmesi gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "class Calisan { String isim; }\nCalisan c1 = new Calisan();\nCalisan c2 = c1;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["Calisan c2 = new Calisan();", "c2.isim = \"Ayşe\";", "new Calisan()"],
      solution: "class Calisan { String isim; }\nCalisan c1 = new Calisan();\nCalisan c2 = new Calisan();",
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
      prompt: "Yandaki kod parçasında kurucu (constructor) metoda fazladan 'void' yazılmış gibi, bunu düzeltebilir misin?",
      presetCode: "class Kitap {\n    String baslik;\n    public void Kitap(String b) {\n        this.baslik = b;\n    }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public Kitap(String b) {", "this.baslik = b;", "class Kitap {"],
      solution: "class Kitap {\n    String baslik;\n    public Kitap(String b) {\n        this.baslik = b;\n    }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/public\s+Kitap\s*\(\s*String\s+b\s*\)/.test(clean) && !/public\s+void\s+Kitap/.test(clean)) return { ok: true, msg: "Harika! Kurucu metottan void kaldırıldı. ✓" };
        return { ok: false, msg: "Hata: public Kitap(String b) şeklinde void olmadan tanımlayın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: KURUCU İSİMLENDİRME",
      title: "2. Soru: Kurucu İsim Kuralı",
      prompt: "Yandaki kod parçasında kurucu metodun adı sınıf adıyla (Banka) aynı yazılmamış gibi, bunu düzeltebilir misin?",
      presetCode: "class Banka {\n    int bakiye;\n    public init(int b) {\n        this.bakiye = b;\n    }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public Banka(int b) {", "this.bakiye = b;", "class Banka {"],
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
      prompt: "Yandaki kod parçasında sifre değişkenini sınıf dışına tamamen gizlemek için 'private' belirteci gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "class Hesap {\n    public String sifre;\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["private String sifre;", "private ", "class Hesap {"],
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
      prompt: "Yandaki kod parçasında sayacın tüm nesneler için tek ve ortak olması adına 'static' tanımlanması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "class Oyuncu {\n    public int toplamOyuncu = 0;\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public static int toplamOyuncu = 0;", "static ", "public static int "],
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
      prompt: "Yandaki kod parçasında parametresiz varsayılan bir kurucu (public Kisi()) eksik kalmış gibi, bunu ekleyebilir misin?",
      presetCode: "class Kisi {\n    String isim;\n    public Kisi(String isim) { this.isim = isim; }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public Kisi() { this.isim = \"Bilinmiyor\"; }", "public Kisi() {}", "class Kisi {"],
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
      prompt: "Yandaki kod parçasında isim döndüren getIsim metodunun dönüş tipinde (String) bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "class Kullanici {\n    private String isim = \"Can\";\n    public void getIsim() {\n        return isim;\n    }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public String getIsim() {\n        return isim;\n    }", "public String getIsim()", "return isim;"],
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
      prompt: "Yandaki kod parçasında yaşın sadece pozitif değerlerde atanması için if kontrolü eksik gibi, bunu düzeltebilir misin?",
      presetCode: "class Uye {\n    private int yas;\n    public void setYas(int y) {\n        this.yas = y;\n    }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["if (y > 0) { this.yas = y; }", "public void setYas(int y) {", "this.yas = y;"],
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
      prompt: "Yandaki kod parçasında Scanner sınıfını kullanabilmek için en üste 'import' bildirimi eklenmesi gerekiyor gibi, bunu ekleyebilir misin?",
      presetCode: "public class AnaProgram {\n    Scanner input = new Scanner(System.in);\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["import java.util.Scanner;", "Scanner input", "public class AnaProgram {"],
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
      prompt: "Yandaki kod parçasında gizli (private) hiz alanına getHiz() metoduyla erişilmesi gerekirken doğrudan alan yazılmış gibi, bunu düzeltebilir misin?",
      presetCode: "class Motor {\n    private int hiz = 80;\n    public int getHiz() { return hiz; }\n}\nMotor m = new Motor();\nSystem.out.println(m.hiz);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["System.out.println(m.getHiz());", "m.getHiz()", "Motor m = new Motor();"],
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
      prompt: "Yandaki kod parçasında boolean değişkenler için Java standardı olan 'is' öneki (isAktif()) unutulmuş gibi, bunu düzeltebilir misin?",
      presetCode: "class Hesap {\n    private boolean aktif = true;\n    public boolean getAktif() { return aktif; }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public boolean isAktif() { return aktif; }", "isAktif()", "private boolean aktif = true;"],
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
      prompt: "Yandaki kod parçasında sınıftan miras alırken inherits yerine 'extends' anahtar kelimesi kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "class Arac { int tekerlek = 4; }\nclass Kamyon inherits Arac { }\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["class Kamyon extends Arac { }", "extends Arac", "class Arac { int tekerlek = 4; }"],
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
      prompt: "Yandaki kod parçasında üst sınıfın kurucusunu çağırırken parent yerine 'super()' yazılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "class Kisi {\n    Kisi(String ad) { System.out.println(ad); }\n}\nclass Ogrenci extends Kisi {\n    Ogrenci(String ad) {\n        parent(ad);\n    }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["super(ad);", "Ogrenci(String ad) {", "class Ogrenci extends Kisi {"],
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
      prompt: "Yandaki kod parçasında üst sınıftan gelen metodun ezildiğini belirten @Override anotasyonu unutulmuş gibi, bunu ekleyebilir misin?",
      presetCode: "class Kus {\n    void sesCikar() { System.out.println(\"Cik\"); }\n}\nclass Karga extends Kus {\n    void sesCikar() { System.out.println(\"Gak\"); }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["@Override\n    void sesCikar() {", "@Override", "void sesCikar() {"],
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
      prompt: "Yandaki kod parçasında üst sınıf referansıyla (Sekil s) alt sınıf nesnesi türetmede bir hata var gibi, bunu düzeltebilir misin?",
      presetCode: "class Sekil { }\nclass Daire extends Sekil { }\nDaire d = new Sekil();\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["Sekil s = new Daire();", "new Daire()", "class Daire extends Sekil { }"],
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
      prompt: "Yandaki kod parçasında metodun alt sınıflarca ezilmesini engellemek için 'final' anahtar kelimesi gerekiyor gibi, bunu ekleyebilir misin?",
      presetCode: "class Guvenlik {\n    public void sifrele() { System.out.println(\"AES\"); }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public final void sifrele() {", "final ", "public final void "],
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
      prompt: "Yandaki kod parçasında gövdesiz metot içeren sınıfın başına 'abstract' anahtar kelimesi yazılması gerekiyor gibi, bunu ekleyebilir misin?",
      presetCode: "class Hayvan {\n    abstract void sesCikar();\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["abstract class Hayvan {", "abstract void sesCikar();", "abstract class "],
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
      prompt: "Yandaki kod parçasında arayüzü (interface) sınıfa uygularken extends yerine 'implements' yazılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "interface Ucabilir { void uc(); }\nclass Ucak extends Ucabilir {\n    public void uc() { System.out.println(\"Uçuyor\"); }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["class Ucak implements Ucabilir {", "implements Ucabilir", "interface Ucabilir { void uc(); }"],
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
      prompt: "Yandaki kod parçasında arayüzden gelen metodun sınıfta doldurulurken başına 'public' yazılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "interface Cizilebilir { void ciz(); }\nclass Kare implements Cizilebilir {\n    void ciz() { System.out.println(\"Kare\"); }\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["public void ciz() { System.out.println(\"Kare\"); }", "public void ciz()", "public "],
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
      prompt: "Yandaki kod parçasında birden fazla arayüz uygulanırken 'and' yerine virgül (,) kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "interface Yazici { void yaz(); }\ninterface Tarayici { void tara(); }\nclass CokFonksiyonlu implements Yazici and Tarayici { }\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["class CokFonksiyonlu implements Yazici, Tarayici {", "implements Yazici, Tarayici", "public void yaz() {}"],
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
      prompt: "Yandaki kod parçasında enum tanımlanırken 'class' kelimesinin kaldırılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "enum class Durum {\n    BEKLEMEDE, ONAYLANDI, IPTAL\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["enum Durum {", "BEKLEMEDE, ONAYLANDI, IPTAL", "enum Durum {\n    BEKLEMEDE, ONAYLANDI, IPTAL\n}"],
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
      prompt: "Yandaki kod parçasında ArrayList içinde ilkel tip 'int' yerine Wrapper sınıfı 'Integer' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import java.util.ArrayList;\nArrayList<int> sayilar = new ArrayList<>();\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["ArrayList<Integer> sayilar = new ArrayList<>();", "ArrayList<Integer>", "new ArrayList<>()"],
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
      prompt: "Yandaki kod parçasında listeden eleman okurken köşeli parantez yerine .get(0) metodunun çağrılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import java.util.ArrayList;\nArrayList<String> isimler = new ArrayList<>();\nisimler.add(\"Bengi\");\nSystem.out.println(isimler[0]);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["System.out.println(isimler.get(0));", "isimler.get(0)", "isimler.add(\"Bengi\");"],
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
      prompt: "Yandaki kod parçasında HashMap'e veri eklerken 'add' yerine .put() metodunun kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import java.util.HashMap;\nHashMap<String, Integer> notlar = new HashMap<>();\nnotlar.add(\"Matematik\", 95);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["notlar.put(\"Matematik\", 95);", "notlar.put(", "new HashMap<>()"],
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
      prompt: "Yandaki kod parçasında listeden eleman silerken 'delete' yerine .remove(0) kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import java.util.ArrayList;\nArrayList<String> diller = new ArrayList<>();\ndiller.add(\"Java\");\ndiller.delete(0);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["diller.remove(0);", "diller.remove", "diller.add(\"Java\");"],
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
      prompt: "Yandaki kod parçasında HashSet kümesine eleman eklerken 'put' yerine .add() metodunun kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "import java.util.HashSet;\nHashSet<Integer> tekiller = new HashSet<>();\ntekiller.put(5);\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["tekiller.add(5);", "tekiller.add", "HashSet<Integer>"],
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
      prompt: "Yandaki kod parçasında sıfıra bölme işleminin programı çökertmemesi için try-catch bloğuna alınması gerekiyor gibi, bunu ekleyebilir misin?",
      presetCode: "int a = 10, b = 0;\nint bolum = a / b;\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["try {", "} catch (ArithmeticException e) {", "System.out.println(\"Hata Oluştu\");"],
      solution: "try {\n    int a = 10, b = 0;\n    int bolum = a / b;\n    System.out.println(bolum);\n} catch (ArithmeticException e) {\n    System.out.println(\"Hata Oluştu\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/try\s*\{[\s\S]*\}\s*catch\s*\(\s*(ArithmeticException|Exception)\s+\w+\s*\)/.test(clean)) return { ok: true, msg: "Harika! try-catch ile ArithmeticException yakalandı. ✓" };
        return { ok: false, msg: 'Hata: try { ... } catch (ArithmeticException e) { System.out.println("Hata Oluştu"); } kurun.' };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: NUMBERFORMATEXCEPTION",
      title: "2. Soru: Sayı Dönüşüm Hatası (NumberFormatException)",
      prompt: "Yandaki kod parçasında metni sayıya çevirme hatasını yakalamak için catch bloğuna 'NumberFormatException' yazılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "try {\n    int sayi = Integer.parseInt(\"abc\");\n} catch (NullPointerException e) {\n    System.out.println(\"Geçersiz Sayı\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["catch (NumberFormatException e) {", "System.out.println(\"Geçersiz Sayı\");", "Integer.parseInt(\"abc\")"],
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
      prompt: "Yandaki kod parçasında her durumda çalışan garanti blok için 'last' yerine 'finally' yazılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "try {\n    int x = 5;\n} catch (Exception e) {\n    System.out.println(\"Hata\");\n}\nlast {\n    System.out.println(\"Tamamlandı\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["finally {\n    System.out.println(\"Tamamlandı\");\n}", "finally {", "System.out.println(\"Tamamlandı\");"],
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
      prompt: "Yandaki kod parçasında Java'da manuel hata fırlatırken 'raise' yerine 'throw new' kullanılması gerekiyor gibi, bunu düzeltebilir misin?",
      presetCode: "int yas = -1;\nif (yas < 0) {\n    raise new IllegalArgumentException(\"Yaş negatif olamaz\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["throw new IllegalArgumentException(\"Yaş negatif olamaz\");", "throw new ", "if (yas < 0) {"],
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
      prompt: "Yandaki kod parçasında dosya yazma işlemi bittikten sonra verilerin diske kaydedilmesi için yazar.close() çağrısı eksik kalmış gibi, bunu ekleyebilir misin?",
      presetCode: "import java.io.FileWriter;\nimport java.io.IOException;\n\ntry {\n    FileWriter yazar = new FileWriter(\"not.txt\");\n    yazar.write(\"Java 100\");\n} catch (IOException e) {\n    System.out.println(\"Dosya Hatası\");\n}\n// Doğru Kod Parçası:\n",
      filename: "Main.java",
      lang: "Java 21",
      quickKeys: ["yazar.close();", "yazar.write(\"Java 100\");\n    yazar.close();", "FileWriter yazar = new FileWriter(\"not.txt\");"],
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
  const curLang = LANGUAGES_DB.find(l => l.id === state.selectedLangId) || LANGUAGES_DB[0];
  const topicId = state.selectedNodeId || `${curLang.id}_1` || 'python_1';

  // 1. Üst Navigasyon & Ekmek Kırıntısı
  const breadcrumbEl = document.getElementById('game-breadcrumb');
  if (breadcrumbEl) {
    breadcrumbEl.textContent = `${curLang.name} / ${challenge.moduleSubtitle || challenge.title}`;
  }

  // 2. Sol Panel: Görev Bilgileri
  const badgeEl = document.getElementById('task-badge');
  const diffEl = document.getElementById('task-difficulty');
  const titleEl = document.getElementById('task-title') || document.getElementById('coding-topic-title');
  const descEl = document.getElementById('task-desc') || document.getElementById('challenge-prompt');

  if (badgeEl) badgeEl.textContent = `Görev #${challenge.stepNum}`;
  if (diffEl) {
    diffEl.textContent = challenge.stepNum <= 2 ? 'Başlangıç' : (challenge.stepNum <= 4 ? 'Orta Düzey' : 'İleri Seviye');
  }
  if (titleEl) titleEl.textContent = challenge.title ? challenge.title.replace(/^[0-9]+\.\s*Soru:\s*/i, '') : '';
  if (descEl) descEl.innerHTML = challenge.prompt;

  // Snippet Accordion'ı yeni adıma geçildiğinde kapat
  const snippetDetails = document.querySelector('.snippets-accordion');
  if (snippetDetails) {
    snippetDetails.removeAttribute('open');
  }

  // 3. Sol Panel: Snippet Hapları (Tıkla ve Editöre Ekle)
  const snippetsContainer = document.getElementById('quick-snippets-container') || document.getElementById('quick-keys-bar');
  if (snippetsContainer) {
    snippetsContainer.innerHTML = '';
    const keys = challenge.quickKeys || [];
    keys.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'snippet-chip';
      btn.type = 'button';
      btn.textContent = k.trim() || 'Tab';
      btn.addEventListener('click', () => {
        insertTextAtCursor(dom.codeInput, k);
      });
      snippetsContainer.appendChild(btn);
    });
  }

  // 4. Sol Panel: Dinamik Dil / Konu Teorisi & Kuralları (HTML, CSS ve Bootstrap için gizlenir)
  const theoryBoxEl = document.querySelector('.theory-box');
  const isWebFrontend = curLang.id === 'html' || curLang.id === 'css' || curLang.id === 'bootstrap';
  if (theoryBoxEl) {
    theoryBoxEl.style.display = isWebFrontend ? 'none' : 'block';
  }

  const theoryListEl = document.getElementById('theory-list');
  if (theoryListEl && !isWebFrontend) {
    theoryListEl.innerHTML = '';
    const reviewData = TOPIC_REVIEWS_DB[topicId] || TOPIC_REVIEWS_DB.python_1;
    const rules = (reviewData && reviewData.syntaxRules && reviewData.syntaxRules.length > 0)
      ? reviewData.syntaxRules
      : [
          `${curLang.name} sözdizim kurallarına uygun temiz kod yazın.`,
          `Hatalı yazımları düzelterek 'Kodu Çalıştır' butonuna basın.`
        ];

    rules.slice(0, 3).forEach(r => {
      const li = document.createElement('li');
      li.innerHTML = r;
      theoryListEl.appendChild(li);
    });
  }

  // 5. Sağ Panel: Editör Dosya Başlığı & Dil Rozeti
  const filenameEl = document.getElementById('editor-filename') || document.getElementById('ide-filename');
  const langTagEl = document.getElementById('editor-lang-tag');
  if (filenameEl) filenameEl.textContent = challenge.filename || (curLang.id === 'java' ? 'Main.java' : 'main.py');
  if (langTagEl) langTagEl.textContent = challenge.lang || curLang.name;

  // 6. Sağ Panel: Başlangıç Kodunu Editöre Yükle (Varsayılan olarak dolu gelsin)
  if (dom.codeInput) {
    dom.codeInput.value = challenge.presetCode || '';
  }

  // 7. Satır Numaralarını Güncelle
  updateLineNumbers();
}

function insertTextAtCursor(input, text) {
  if (!input) return;
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
  const lineNumEl = document.getElementById('line-numbers') || document.getElementById('ide-line-numbers');
  if (!lineNumEl || !dom.codeInput) return;
  const lines = dom.codeInput.value ? dom.codeInput.value.split('\n').length : 1;
  const count = Math.max(lines, 4);
  lineNumEl.innerHTML = Array.from({ length: count }, (_, i) => i + 1).join('<br>');
}


// Editördeki yorum satırından sonra kullanıcının yazdığı gerçek çözümü ayıklayan yardımcı fonksiyon
function extractUserSolution(rawCode) {
  if (!rawCode) return '';
  const markerRegex = /(?:\/\/|#)\s*(?:Doğru\s*kod\s*parçası|Kodunu\s*aşağıya\s*doğru\s*şekilde\s*yaz|Doğru\s*kod|Çözüm)\s*:?/i;
  const match = rawCode.search(markerRegex);
  if (match !== -1) {
    const afterMarker = rawCode.substring(match);
    const newlineIndex = afterMarker.indexOf('\n');
    if (newlineIndex !== -1) {
      const actualCode = afterMarker.substring(newlineIndex + 1).trim();
      if (actualCode.length > 0) {
        return actualCode;
      }
    }
  }
  return rawCode.trim();
}

function runCurrentCode() {
  const challenge = currentChallengesList[currentChallengeIndex] || currentChallengesList[0];
  const userCode = dom.codeInput.value;
  const userSolution = extractUserSolution(userCode);

  logToTerminal(`⚡ <strong>Testler Çalıştırılıyor (${challenge.filename})...</strong>`, 'info');

  // Öncelikli olarak sadece kullanıcının yazdığı çözüm parçasını doğrula
  let result = challenge.validator(userSolution);
  if (!result || !result.ok) {
    const fallbackResult = challenge.validator(userCode);
    if (fallbackResult && fallbackResult.ok) {
      result = fallbackResult;
    }
  }

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
  if (dom.statXp) dom.statXp.textContent = `${state.xp || 0} XP`;
  if (dom.statHarvest) dom.statHarvest.textContent = `${state.harvestCount || 0} Görev`;

  let rankName = 'Çırak';
  if (state.xp >= 1500) {
    rankName = 'Kıdemli';
  } else if (state.xp >= 600) {
    rankName = 'Yazılımcı';
  }

  if (dom.statMastery) {
    dom.statMastery.textContent = rankName;
  }

  // Profil Dropdown İçindeki İstatistikleri Güncelle
  const dropXp = document.getElementById('dropdown-stat-xp');
  const dropMastery = document.getElementById('dropdown-stat-mastery');
  const dropTasks = document.getElementById('dropdown-stat-tasks');
  const dropCity = document.getElementById('dropdown-stat-city');

  if (dropXp) dropXp.textContent = `${state.xp || 0} XP`;
  if (dropMastery) dropMastery.textContent = rankName;
  if (dropTasks) dropTasks.textContent = `${state.harvestCount || 0} Görev`;

  if (dropCity) {
    const curTopics = getLanguageTopics(state.selectedLangId);
    const doneCount = curTopics.filter(t => t.status === 'done').length;
    let phaseName = '1. Seviye';
    if (doneCount >= 14) phaseName = '7. Seviye (Mega)';
    else if (doneCount >= 12) phaseName = '6. Seviye (Liman)';
    else if (doneCount >= 9) phaseName = '5. Seviye (Ticaret)';
    else if (doneCount >= 6) phaseName = '4. Seviye (Kültür)';
    else if (doneCount >= 3) phaseName = '3. Seviye (Kasaba)';
    else if (doneCount >= 1) phaseName = '2. Seviye (Yerleşim)';
    dropCity.textContent = phaseName;
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

const API_BASE_URL = 'https://coding-game-backend-ux08.onrender.com/api';

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
    if (!username || !email || !password) {
      return { ok: false, msg: 'Lütfen tüm alanları doldurunuz.' };
    }
    if (password.length < 6) {
      return { ok: false, msg: 'Şifre en az 6 karakter olmalıdır.' };
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanUsername = username.trim();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: cleanUsername, email: cleanEmail, password }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      if (!data.ok) {
        return { ok: false, msg: data.msg || 'Kayıt başarısız.' };
      }

      this.setSession(data.token, data.user);
      this.syncCurrentLocalProgress();
      return { ok: true, msg: 'Kayıt başarılı! Hoş geldin ' + cleanUsername + ' 🎉', user: data.user, isCloud: true };
    } catch (err) {
      console.warn('Bulut API gecikmeli, yerel modda başlatılıyor:', err.message);

      const localUser = {
        id: 'user_' + Date.now(),
        username: cleanUsername,
        email: cleanEmail,
        avatar: '🧑‍🌾',
        totalXp: state.xp || 0
      };
      const localToken = 'jwt_' + btoa(cleanEmail) + '_' + Date.now();

      const localAccounts = JSON.parse(localStorage.getItem('codegame_local_users') || '{}');
      localAccounts[cleanEmail] = { ...localUser, password };
      localStorage.setItem('codegame_local_users', JSON.stringify(localAccounts));

      this.setSession(localToken, localUser);

      // Arka planda sunucu uyandığında senkronize et
      setTimeout(() => {
        fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: cleanUsername, email: cleanEmail, password })
        }).then(r => r.json()).then(d => {
          if (d.ok && d.token) this.setSession(d.token, d.user);
        }).catch(() => {});
      }, 3000);

      return {
        ok: true,
        msg: 'Hesap oluşturuldu! Hoş geldin ' + cleanUsername + ' 🚀',
        user: localUser,
        isCloud: false
      };
    }
  },

  async login(email, password) {
    if (!email || !password) {
      return { ok: false, msg: 'Lütfen e-posta ve şifrenizi giriniz.' };
    }

    const cleanEmail = email.trim().toLowerCase();

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const data = await res.json();
      if (!data.ok) {
        return { ok: false, msg: data.msg || 'Geçersiz e-posta veya şifre.' };
      }

      this.setSession(data.token, data.user);
      this.loadCloudProgress();
      return { ok: true, msg: `Giriş başarılı! Hoş geldin, ${data.user.username} 🚀`, user: data.user, isCloud: true };
    } catch (err) {
      console.warn('Bulut API gecikmeli, yerel hesap kontrol ediliyor:', err.message);

      const localAccounts = JSON.parse(localStorage.getItem('codegame_local_users') || '{}');
      const existing = localAccounts[cleanEmail];

      if (existing && existing.password === password) {
        const localToken = 'jwt_' + btoa(cleanEmail) + '_' + Date.now();
        this.setSession(localToken, existing);
        return { ok: true, msg: `Giriş başarılı! Hoş geldin, ${existing.username} 🚀`, user: existing, isCloud: false };
      }

      const generatedUsername = cleanEmail.split('@')[0] || 'Geliştirici';
      const fallbackUser = {
        id: 'user_' + Date.now(),
        username: generatedUsername,
        email: cleanEmail,
        avatar: '🧑‍🌾',
        totalXp: state.xp || 0
      };
      const fallbackToken = 'jwt_' + btoa(cleanEmail) + '_' + Date.now();

      localAccounts[cleanEmail] = { ...fallbackUser, password };
      localStorage.setItem('codegame_local_users', JSON.stringify(localAccounts));

      this.setSession(fallbackToken, fallbackUser);

      // Arka planda sunucuya kaydetmeyi dene
      setTimeout(() => {
        fetch(`${API_BASE_URL}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: generatedUsername, email: cleanEmail, password })
        }).then(r => r.json()).then(d => {
          if (d.ok && d.token) this.setSession(d.token, d.user);
        }).catch(() => {});
      }, 3000);

      return {
        ok: true,
        msg: `Giriş başarılı! Hoş geldin, ${generatedUsername} 🚀`,
        user: fallbackUser,
        isCloud: false
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
    if (typeof switchView === 'function') {
      switchView('languages');
    }
    if (typeof logToTerminal === 'function') {
      logToTerminal('🚪 Oturum kapatıldı. Misafir moduna geçildi.', 'info');
    }
  },

  async verifyAndFetchProfile() {
    if (!this.token) return;
    if (this.token.startsWith('local_jwt_')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/auth/me`, {
        headers: { 'Authorization': `Bearer ${this.token}` }
      });
      if (res.status === 200) {
        const data = await res.json();
        if (data.ok && data.user) {
          this.user = data.user;
          localStorage.setItem('codegame_user', JSON.stringify(data.user));
          this.updateHeaderUI();
        }
      }
    } catch (e) {
      console.warn('Sunucuya ulaşılamadı, yerel oturum korunuyor.');
    }
  },

  async syncCurrentLocalProgress(langId = state.selectedLangId) {
    if (!this.token || this.token.startsWith('local_jwt_')) return;
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
    if (!this.token || this.token.startsWith('local_jwt_')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/progress`, {
        headers: { 'Authorization': `Bearer ${this.token}` }
      });
      if (!res.ok) return;
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
    const dropdownUsername = document.getElementById('dropdown-username');
    const dropdownEmail = document.getElementById('dropdown-email');
    const dropdownAvatar = document.getElementById('dropdown-user-avatar');
    const profileDropdown = document.getElementById('user-profile-dropdown');

    if (this.isLoggedIn()) {
      if (btnOpenAuth) btnOpenAuth.style.display = 'none';
      if (userProfileCard) userProfileCard.style.display = 'flex';
      if (headerUsername) headerUsername.textContent = this.user.username || 'Kullanıcı';
      if (headerAvatar) headerAvatar.textContent = this.user.avatar || '🧑‍🌾';
      if (dropdownUsername) dropdownUsername.textContent = this.user.username || 'Kullanıcı';
      if (dropdownEmail) dropdownEmail.textContent = this.user.email || 'kullanici@codefarm.com';
      if (dropdownAvatar) dropdownAvatar.textContent = this.user.avatar || '🧑‍🌾';
    } else {
      if (btnOpenAuth) btnOpenAuth.style.display = 'flex';
      if (userProfileCard) userProfileCard.style.display = 'none';
      if (profileDropdown) profileDropdown.style.display = 'none';
    }
  }
};

dom.navBrand.addEventListener('click', () => switchView('languages'));
if (dom.navBtnHome) dom.navBtnHome.addEventListener('click', () => switchView('languages'));
if (dom.navBtnRoadmap) dom.navBtnRoadmap.addEventListener('click', () => switchView('roadmap'));
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

if (dom.btnSolution) {
  dom.btnSolution.addEventListener('click', () => {
    const challenge = currentChallengesList[currentChallengeIndex] || currentChallengesList[0];
    if (challenge && challenge.solution) {
      dom.codeInput.value = challenge.solution;
      updateLineNumbers();
      logToTerminal(`🔍 <strong>Çözüm Yüklendi:</strong> Editöre doğru çözüm aktarıldı. Şimdi 'Kodu Çalıştır' butonuna basabilirsiniz.`, 'hint');
      sfx.playPop();
    }
  });
}

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

  // 3. Tab Tuşu (Snippet Genişletme & 4 Boşluk Girinti)
  if (e.key === 'Tab') {
    e.preventDefault();
    const textBefore = val.substring(0, start);

    // Java 'sout' veya 'sysout' Snippet'i -> System.out.println();
    const soutMatch = textBefore.match(/(?:sysout|sout)$/i);
    if (soutMatch) {
      const wordLen = soutMatch[0].length;
      const replaceStart = start - wordLen;
      const snippet = 'System.out.println();';
      input.value = val.substring(0, replaceStart) + snippet + val.substring(end);
      // İmleci parantezin içine konumlandır: System.out.println(|);
      const cursorPosition = replaceStart + snippet.length - 2;
      input.selectionStart = input.selectionEnd = cursorPosition;
      updateLineNumbers();
      sfx.playPop();
      return;
    }

    // Java 'psvm' Snippet'i -> public static void main(String[] args) { ... }
    const psvmMatch = textBefore.match(/psvm$/i);
    if (psvmMatch) {
      const wordLen = psvmMatch[0].length;
      const replaceStart = start - wordLen;
      const snippet = 'public static void main(String[] args) {\n    \n}';
      input.value = val.substring(0, replaceStart) + snippet + val.substring(end);
      const cursorPosition = replaceStart + 'public static void main(String[] args) {\n    '.length;
      input.selectionStart = input.selectionEnd = cursorPosition;
      updateLineNumbers();
      sfx.playPop();
      return;
    }

    // Python 'pr' Snippet'i -> print()
    if (state.selectedLangId === 'python') {
      const prMatch = textBefore.match(/(?:pr)$/i);
      if (prMatch) {
        const wordLen = prMatch[0].length;
        const replaceStart = start - wordLen;
        const snippet = 'print()';
        input.value = val.substring(0, replaceStart) + snippet + val.substring(end);
        const cursorPosition = replaceStart + snippet.length - 1;
        input.selectionStart = input.selectionEnd = cursorPosition;
        updateLineNumbers();
        sfx.playPop();
        return;
      }
    }

    // Normal Tab Girintisi (4 Boşluk)
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

if (dom.btnSoundToggle) {
  dom.btnSoundToggle.addEventListener('click', () => {
    sfx.enabled = !sfx.enabled;
    dom.btnSoundToggle.textContent = sfx.enabled ? '🔊' : '🔇';
    dom.btnSoundToggle.title = sfx.enabled ? 'Sesi Kapat' : 'Sesi Aç';
  });
}

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

const btnCloseReview = document.getElementById('btn-close-review-modal');
if (btnCloseReview) {
  btnCloseReview.addEventListener('click', () => {
    closeTopicReviewModal();
    sfx.playPop();
  });
}

const btnDismissReview = document.getElementById('btn-dismiss-review');
if (btnDismissReview) {
  btnDismissReview.addEventListener('click', () => {
    closeTopicReviewModal();
    sfx.playPop();
  });
}

const topicReviewModal = document.getElementById('review-modal') || document.getElementById('topic-review-modal');
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
  document.body.classList.add('modal-open');
  sfx.playPop();
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
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
  btnOpenAuth.addEventListener('click', () => {
    authTrigger = 'navbar';
    openAuthModal('login');
  });
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

// Profil Dropdown Aç/Kapat
const userProfileCardEl = document.getElementById('user-profile-card');
const userProfileDropdownEl = document.getElementById('user-profile-dropdown');

if (userProfileCardEl && userProfileDropdownEl) {
  userProfileCardEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = userProfileDropdownEl.style.display === 'none' || !userProfileDropdownEl.style.display;
    userProfileDropdownEl.style.display = isHidden ? 'block' : 'none';
    userProfileCardEl.classList.toggle('dropdown-open', isHidden);
    if (isHidden) {
      updateGlobalStats();
      sfx.playPop();
    }
  });

  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('click', (e) => {
      if (!userProfileDropdownEl.contains(e.target) && !userProfileCardEl.contains(e.target)) {
        userProfileDropdownEl.style.display = 'none';
        userProfileCardEl.classList.remove('dropdown-open');
      }
    });
  }
}

const btnDropdownSync = document.getElementById('btn-dropdown-sync');
if (btnDropdownSync) {
  btnDropdownSync.addEventListener('click', async () => {
    btnDropdownSync.disabled = true;
    btnDropdownSync.innerHTML = '<span>⏳ Senkronize Ediliyor...</span>';
    await authManager.syncCurrentLocalProgress();
    setTimeout(() => {
      btnDropdownSync.disabled = false;
      btnDropdownSync.innerHTML = '<span>🔄 Bulut İlerlemeyi Eşitle</span>';
    }, 1500);
  });
}

const btnDropdownLogout = document.getElementById('btn-dropdown-logout');
if (btnDropdownLogout) {
  btnDropdownLogout.addEventListener('click', () => {
    if (userProfileDropdownEl) userProfileDropdownEl.style.display = 'none';
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
        switchView('languages');
        if (typeof logToTerminal === 'function') {
          logToTerminal(`🌟 <strong>Hoş geldin ${result.user.username}!</strong> İlerlemelerin MongoDB bulutuna kaydediliyor.`, 'success');
        }
      }, 700);
    } else {
      showAuthAlert(result.msg || 'Bir hata oluştu.', 'error');
    }
  });
}

// Başlangıçta Auth Durumunu Başlat ve Dilleri Render Et
function initApp() {
  // CSS, JS ve Bootstrap Müfredat Verilerini Ana Veritabanına Entegre Et
  if (typeof CSS_TOPIC_REVIEWS !== 'undefined' && typeof TOPIC_REVIEWS_DB !== 'undefined') {
    Object.assign(TOPIC_REVIEWS_DB, CSS_TOPIC_REVIEWS);
  }
  if (typeof CSS_CHALLENGES !== 'undefined' && typeof CHALLENGES_DATABASE !== 'undefined') {
    Object.assign(CHALLENGES_DATABASE, CSS_CHALLENGES);
  }
  if (typeof JS_TOPIC_REVIEWS !== 'undefined' && typeof TOPIC_REVIEWS_DB !== 'undefined') {
    Object.assign(TOPIC_REVIEWS_DB, JS_TOPIC_REVIEWS);
  }
  if (typeof JS_CHALLENGES !== 'undefined' && typeof CHALLENGES_DATABASE !== 'undefined') {
    Object.assign(CHALLENGES_DATABASE, JS_CHALLENGES);
  }
  if (typeof BS_TOPIC_REVIEWS !== 'undefined' && typeof TOPIC_REVIEWS_DB !== 'undefined') {
    Object.assign(TOPIC_REVIEWS_DB, BS_TOPIC_REVIEWS);
  }
  if (typeof BS_CHALLENGES !== 'undefined' && typeof CHALLENGES_DATABASE !== 'undefined') {
    Object.assign(CHALLENGES_DATABASE, BS_CHALLENGES);
  }
  if (typeof SQL_TOPIC_REVIEWS !== 'undefined' && typeof TOPIC_REVIEWS_DB !== 'undefined') {
    Object.assign(TOPIC_REVIEWS_DB, SQL_TOPIC_REVIEWS);
  }
  if (typeof SQL_CHALLENGES !== 'undefined' && typeof CHALLENGES_DATABASE !== 'undefined') {
    Object.assign(CHALLENGES_DATABASE, SQL_CHALLENGES);
  }
  if (typeof COURSE_TOPICS_DB !== 'undefined') {
    if (COURSE_TOPICS_DB.javascript) COURSE_TOPICS_DB.js = COURSE_TOPICS_DB.javascript;
    if (COURSE_TOPICS_DB.bootstrap) COURSE_TOPICS_DB.bs = COURSE_TOPICS_DB.bootstrap;
  }

  if (typeof authManager !== 'undefined') {
    authManager.init();
  }
  renderLanguages();
  updateGlobalStats();

  // Render Backend'i arka planda sessizce uyandır (Cold start azaltıcı)
  try {
    fetch(`${API_BASE_URL}/health`).catch(() => {});
  } catch (e) {}
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
}

