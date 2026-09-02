// =========================================================================
// 🅱️ BOOTSTRAP 5 MÜFREDATI: 12 HIZLI TEORİ KARTI & 60 İNTERAKTİF KODLAMA GÖREVİ
// (W3Schools Bootstrap 5 & Enes Bayram Web Geliştirme Ders 45-57 Müfredatı)
// =========================================================================

const BS_TOPIC_REVIEWS = {
  "bs_1": {
    "title": "Bootstrap 5'e Giriş & CDN Kurulumu",
    "readTime": "2 dk okuma",
    "rewardText": "🏡 Giriş Çiftliği & Su Kuyusu",
    "logic": "Bootstrap, modern ve duyarlı (responsive) web sayfalarını sıfırdan CSS yazmadan hızlıca inşa etmeyi sağlayan en popüler CSS kütüphanesidir.",
    "syntaxRules": [
      "<code>&lt;link rel=\"stylesheet\" href=\"https://.../bootstrap.min.css\"&gt;</code> : CDN ile CSS dahil etme.",
      "<code>.container</code> : Sayfanın ortasında responsive sabit genişlikli bir alan açar.",
      "<code>.container-fluid</code> : Ekranın tüm genişliğini (%100) kaplayan akışkan bir kapsayıcı oluşturur."
    ],
    "pitfalls": [
      "⚠️ Grid sisteminin taşmaması ve doğru çalışması için tüm satır ve sütunlar mutlaka bir <code>.container</code> veya <code>.container-fluid</code> içinde olmalıdır.",
      "⚠️ Bootstrap 5'te jQuery bağımlılığı tamamen kaldırılmıştır, saf JavaScript (Vanilla JS) ile çalışır."
    ],
    "exampleCode": "<div class=\"container\">\n  <h1>Bootstrap 5 Başladı!</h1>\n</div>"
  },
  "bs_2": {
    "title": "Grid Sistemi & Responsive Izgara",
    "readTime": "3 dk okuma",
    "rewardText": "💡 Şehir Elektrik Şebekesi",
    "logic": "Bootstrap 12 sütunlu esnek bir ızgara (Grid) sistemine sahiptir. Ekran boyutuna göre (col-sm, col-md, col-lg, col-xl) sütun sayıları ayarlanır.",
    "syntaxRules": [
      "<code>.row</code> : Sütunları yatayda tutan satır kapsayıcısıdır (flexbox temelli).",
      "<code>.col-12 .col-md-6</code> : Mobilde tam genişlik (12 birim), tablette yan yana 2 sütun (6 birim).",
      "<code>.col-lg-4</code> : Masaüstünde yan yana 3 eşit sütun (4 + 4 + 4 = 12 birim).",
      "<code>.col</code> : Genişliği belirtilmeden otomatik eşit dağılan sütun."
    ],
    "pitfalls": [
      "⚠️ Bir satırdaki (<code>.row</code>) sütunların toplamı 12'yi geçerse fazla sütun otomatik olarak bir alt satıra kayar.",
      "⚠️ <code>.col</code> sınıfları doğrudan <code>.row</code>'un ilk çocuk elemanı olmalıdır."
    ],
    "exampleCode": "<div class=\"row\">\n  <div class=\"col-12 col-md-6 col-lg-4\">1. Kolon</div>\n  <div class=\"col-12 col-md-6 col-lg-4\">2. Kolon</div>\n  <div class=\"col-12 col-md-6 col-lg-4\">3. Kolon</div>\n</div>"
  },
  "bs_3": {
    "title": "Tipografi, Renkler & Arka Planlar",
    "readTime": "2 dk okuma",
    "rewardText": "🚰 Su Arıtma & Çeşmeler",
    "logic": "Başlık boyutlarını, vurgulu metinleri ve kurumsal renk temasını (primary, success, danger vb.) hazır yardımcı sınıflarla kontrol eder.",
    "syntaxRules": [
      "<code>.display-1 ... .display-6</code> : Normal başlıklardan çok daha büyük ve gösterişli afiş başlıkları.",
      "<code>.lead</code> : Paragrafı daha büyük ve dikkat çekici bir giriş metnine dönüştürür.",
      "<code>.text-primary / .text-success / .text-danger</code> : Mavi, yeşil, kırmızı yazı renkleri.",
      "<code>.bg-dark / .bg-light / .bg-primary</code> : Arka plan zemin renkleri.",
      "<code>.text-center / .text-end</code> : Metin hizalama sınıfları."
    ],
    "pitfalls": [
      "⚠️ Koyu renkli bir arka planda (<code>.bg-dark</code>) yazı rengini mutlaka <code>.text-white</code> veya <code>.text-light</code> yaparak okunabilirliği korumalısınız."
    ],
    "exampleCode": "<h1 class=\"display-4 text-primary text-center\">Geliştirici Portalı</h1>\n<p class=\"lead text-muted\">Bootstrap 5 ile modern arayüz tasarımı.</p>"
  },
  "bs_4": {
    "title": "Boşluklar (Spacing), Kenarlıklar & Gölgeler",
    "readTime": "2 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Botanik Bahçe",
    "logic": "Elemanlar arasına boşluk koymak (Margin & Padding), köşeleri yuvarlamak ve 3D gölgeler eklemek için CSS yazmadan sınıflar kullanılır.",
    "syntaxRules": [
      "<code>.m-3 / .p-4</code> : Margin ve Padding (0'dan 5'e kadar seviyeli).",
      "<code>.mt-3 / .mb-4 / .py-2 / .mx-auto</code> : Üst, alt, dikey ve yatayda ortalama boşlukları.",
      "<code>.border / .border-0</code> : Kenarlık ekler veya kaldırır.",
      "<code>.rounded / .rounded-pill / .rounded-circle</code> : Köşeleri hafif, hap şeklinde veya tam yuvarlak yapar.",
      "<code>.shadow / .shadow-sm / .shadow-lg</code> : Kart ve kutulara derinlikli gölge ekler."
    ],
    "pitfalls": [
      "⚠️ Blok elemanları yatayda ortalamak için <code>.mx-auto</code> kullanılır, ancak elemanın genişliği (<code>w-50</code> gibi) tanımlı olmalıdır."
    ],
    "exampleCode": "<div class=\"p-4 mb-3 bg-white border rounded shadow mx-auto\">\n  <p class=\"m-0\">Gölgeli ve kenarlıklı kutu.</p>\n</div>"
  },
  "bs_5": {
    "title": "Butonlar, Buton Grupları & Rozetler",
    "readTime": "2 dk okuma",
    "rewardText": "🏢 Modern Rezidanslar & İş Kuleleri",
    "logic": "Tıklanabilir butonları stillendirmek, çerçeveli butonlar (outline) yapmak ve bildirim rozetleri (badge) oluşturmak için kullanılır.",
    "syntaxRules": [
      "<code>.btn .btn-primary</code> : Ana mavi dolgulu buton.",
      "<code>.btn .btn-outline-success</code> : İçi boş, kenarlığı yeşil modern şeffaf buton.",
      "<code>.btn-lg / .btn-sm</code> : Büyük ve küçük buton boyutları.",
      "<code>.btn-group</code> : Butonları birbirine bitişik tek bir grup halinde toplar.",
      "<code>.badge .bg-danger</code> : Bildirim sayısı veya etiket rozetleri."
    ],
    "pitfalls": [
      "⚠️ <code>.btn</code> ana sınıfını yazmadan tek başına <code>.btn-primary</code> yazarsanız butonun temel padding ve border-radius stilleri yüklenmez."
    ],
    "exampleCode": "<button class=\"btn btn-primary\">\n  Mesajlar <span class=\"badge bg-danger\">4</span>\n</button>\n<button class=\"btn btn-outline-secondary\">İptal</button>"
  },
  "bs_6": {
    "title": "Uyarılar (Alerts), İlerleme & Spinnerlar",
    "readTime": "2 dk okuma",
    "rewardText": "🎬 Sinema & Kültür Merkezi",
    "logic": "Kullanıcıya başarılı/hatalı işlem bildirimleri vermek, yükleniyor çarkı veya dolum çubuğu göstermek için kullanılır.",
    "syntaxRules": [
      "<code>.alert .alert-success</code> : Yeşil renkli başarı uyarı kutusu.",
      "<code>.alert-dismissible .fade .show</code> : Kapatma çarpısı (btn-close) bulunan dinamik uyarı.",
      "<code>.progress &gt; .progress-bar</code> : İlerleme çubuğu kapsayıcısı ve dolan iç çubuk.",
      "<code>.spinner-border / .spinner-grow</code> : Dönen yükleniyor animasyonu."
    ],
    "pitfalls": [
      "⚠️ <code>.progress-bar</code>'ın doluluk oranını CSS stiliyle <code>style=\"width: 75%\"</code> olarak belirtmeyi unutmayın."
    ],
    "exampleCode": "<div class=\"alert alert-success alert-dismissible fade show\">\n  İşlem başarıyla tamamlandı!\n  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n</div>"
  },
  "bs_7": {
    "title": "Tablolar & Liste Grupları",
    "readTime": "2 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Verileri çizgili, üzerine gelince vurgulanan modern tablolarda veya liste öğelerinde sergilemek için kullanılır.",
    "syntaxRules": [
      "<code>.table</code> : Standart temiz Bootstrap tablosu.",
      "<code>.table-striped</code> : Satırları bir açık bir koyu çizgili yapar (zebra efekti).",
      "<code>.table-hover</code> : Fare üzerine geldiğinde satırı vurgular.",
      "<code>.table-responsive</code> : Küçük ekranlarda tablonun yatay kaydırılabilmesini sağlar.",
      "<code>.list-group &gt; .list-group-item</code> : Dikey temiz liste bileşeni."
    ],
    "pitfalls": [
      "⚠️ Mobil uyum için <code>&lt;table&gt;</code> etiketini <code>&lt;div class=\"table-responsive\"&gt;</code> içine sarmak en iyi yaklaşımdır."
    ],
    "exampleCode": "<div class=\"table-responsive\">\n  <table class=\"table table-striped table-hover\">\n    <thead><tr><th>#</th><th>İsim</th></tr></thead>\n    <tbody><tr><td>1</td><td>Ali</td></tr></tbody>\n  </table>\n</div>"
  },
  "bs_8": {
    "title": "Kart Bileşeni Mimarisi (Cards)",
    "readTime": "3 dk okuma",
    "rewardText": "🏛️ Yönetim Sarayı & Belediye",
    "logic": "Ürünler, blog yazıları ve kullanıcı profilleri için başlık, görsel, açıklama ve buton barındıran en çok kullanılan UI bileşenidir.",
    "syntaxRules": [
      "<code>.card</code> : Ana kart dış çerçevesi.",
      "<code>.card-img-top</code> : Kartın en üstüne oturan responsive görsel.",
      "<code>.card-body</code> : Kartın iç dolgulu ana gövdesi.",
      "<code>.card-title / .card-text</code> : Başlık ve açıklama paragrafı.",
      "<code>.card-header / .card-footer</code> : Üst başlık veya alt buton şeridi."
    ],
    "pitfalls": [
      "⚠️ Görselin kartın kenarlarına tam oturması için <code>.card-img-top</code> sınıfı kullanılmalıdır."
    ],
    "exampleCode": "<div class=\"card shadow-sm\" style=\"width: 18rem;\">\n  <img src=\"resim.jpg\" class=\"card-img-top\" alt=\"Ürün\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Kurs Başlığı</h5>\n    <p class=\"card-text\">Bootstrap 5 ile modern kartlar.</p>\n    <a href=\"#\" class=\"btn btn-primary\">İncele</a>\n  </div>\n</div>"
  },
  "bs_9": {
    "title": "Form Kontrolleri & Girdiler (Forms)",
    "readTime": "3 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Form girişlerini (input, select, textarea, checkbox) %100 genişlikte ve odaklanma efektli modern tasarımlara dönüştürür.",
    "syntaxRules": [
      "<code>.form-control</code> : Input ve textarea giriş kutuları için ana sınıf.",
      "<code>.form-label</code> : Form etiketleri için boşluklu etiket sınıfı.",
      "<code>.form-select</code> : Aşağı açılır seçim kutuları (&lt;select&gt;).",
      "<code>.form-check &gt; .form-check-input</code> : Checkbox ve Radio butonları.",
      "<code>.input-group &gt; .input-group-text</code> : Input'un başına veya sonuna ikon/simge ekleme."
    ],
    "pitfalls": [
      "⚠️ Checkbox ve radio butonlarında <code>.form-control</code> değil, <code>.form-check-input</code> kullanılır."
    ],
    "exampleCode": "<div class=\"mb-3\">\n  <label class=\"form-label\">E-posta Adresi</label>\n  <input type=\"email\" class=\"form-control\" placeholder=\"ad@site.com\">\n</div>"
  },
  "bs_10": {
    "title": "Navigasyon & Menü Çubuğu (Navbar)",
    "readTime": "3 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "Sayfanın en üstünde mobilde hamburger menüye dönüşen responsive gezinti çubuğu oluşturur.",
    "syntaxRules": [
      "<code>.navbar .navbar-expand-lg .navbar-dark .bg-dark</code> : Koyu temalı masaüstünde açılan menü çubuğu.",
      "<code>.navbar-brand</code> : Logo veya site adı bağlantısı.",
      "<code>.navbar-toggler</code> : Mobilde açılıp kapanmayı sağlayan hamburger menü butonu.",
      "<code>.navbar-nav &gt; .nav-item &gt; .nav-link</code> : Menü link öğeleri."
    ],
    "pitfalls": [
      "⚠️ Mobilde menünün açılması için <code>navbar-toggler</code> butonunda <code>data-bs-toggle=\"collapse\"</code> ve <code>data-bs-target=\"#menuId\"</code> tanımlı olmalıdır."
    ],
    "exampleCode": "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"#\">Logo</a>\n    <div class=\"navbar-nav\">\n      <a class=\"nav-link active\" href=\"#\">Anasayfa</a>\n    </div>\n  </div>\n</nav>"
  },
  "bs_11": {
    "title": "Açılır Pencereler & Etkileşim (Modal)",
    "readTime": "3 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Raylar",
    "logic": "Kullanıcı butona bastığında sayfanın üzerine açılan diyalog/onay pencereleri (Modal) ve akordeon içerikler (Collapse) oluşturur.",
    "syntaxRules": [
      "<code>data-bs-toggle=\"modal\" data-bs-target=\"#ornekModal\"</code> : Modalı açan tetikleyici buton özellikleri.",
      "<code>.modal .fade &gt; .modal-dialog &gt; .modal-content</code> : Modal iskelet hiyerarşisi.",
      "<code>.modal-header, .modal-body, .modal-footer</code> : Modalın başlık, gövde ve alt buton bölümleri.",
      "<code>data-bs-dismiss=\"modal\"</code> : Modalı kapatan buton niteliği."
    ],
    "pitfalls": [
      "⚠️ Butondaki <code>data-bs-target=\"#modalID\"</code> ile modalın <code>id=\"modalID\"</code> değeri birebir eşleşmelidir, aksi halde pencere açılmaz."
    ],
    "exampleCode": "<button class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#uyariModal\">Aç</button>\n<div class=\"modal fade\" id=\"uyariModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">İşlemi onaylıyor musunuz?</div>\n    </div>\n  </div>\n</div>"
  },
  "bs_12": {
    "title": "Kapsamlı Landing Page Projesi",
    "readTime": "3 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Roket Üssü",
    "logic": "Tüm Bootstrap 5 bileşenlerini (Navbar, Hero Section, 3'lü Grid Kartları, Form ve Footer) harmanlayarak modern bir açılış sayfası inşa edilir.",
    "syntaxRules": [
      "<code>.py-5 / .text-center</code> : Bölümler arası geniş dikey nefes alma boşlukları.",
      "<code>.row .g-4</code> : Grid kartları arasına düzenli dikey ve yatay boşluk (gap) bırakma.",
      "<code>.d-flex .justify-content-between</code> : Flexbox ile iki yana yaslama."
    ],
    "pitfalls": [
      "⚠️ Profesyonel bir Bootstrap projesinde sınıfların sırası düzenli olmalı (Grid &gt; Spacing &gt; Renkler &gt; Tipografi)."
    ],
    "exampleCode": "<header class=\"py-5 bg-light text-center\">\n  <h1 class=\"display-5 fw-bold\">Modern Web Geliştirme</h1>\n  <button class=\"btn btn-primary btn-lg mt-3\">Hemen Başla</button>\n</header>"
  }
};

const BS_CHALLENGES = {
  bs_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: BOOTSTRAP CONTAINER KAPSAYICI",
      title: "1. Soru: Sabit Genişlikli .container",
      prompt: "Bir <code>&lt;div&gt;</code> etiketine <code>container</code> sınıfı ekleyip içine <code>&lt;h1&gt;Hoş Geldiniz&lt;/h1&gt;</code> yazabilir misin?",
      presetCode: "<!-- container sınıfı ekle: -->\n<div>\n  <h1>Hoş Geldiniz</h1>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"container\"", "container", "<div class=\"container\">"],
      hint: "<div class=\"container\">\n  <h1>Hoş Geldiniz</h1>\n</div>",
      solution: "<div class=\"container\">\n  <h1>Hoş Geldiniz</h1>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*container[^'"]*['"]\s*>[\s\S]*<h1>Hoş Geldiniz<\/h1>[\s\S]*<\/div>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! .container sınıfı başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"container\"> içine <h1>Hoş Geldiniz</h1> ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: CONTAINER-FLUID TAM GENİŞLİK",
      title: "2. Soru: Tam Genişlikli .container-fluid",
      prompt: "Ekranın %100'ünü kaplaması için div etiketine <code>class=\"container-fluid\"</code> sınıfını verebilir misin?",
      presetCode: "<!-- container-fluid sınıfı ver: -->\n<div>\n  <p>Tam genişlikli akışkan alan</p>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"container-fluid\"", "container-fluid"],
      hint: "<div class=\"container-fluid\">\n  <p>Tam genişlikli akışkan alan</p>\n</div>",
      solution: "<div class=\"container-fluid\">\n  <p>Tam genişlikli akışkan alan</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*container-fluid[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! container-fluid tam genişlik sağladı. ✓" };
        }
        return { ok: false, msg: "Hata: div etiketine class=\"container-fluid\" ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: CDN CSS BAĞLANTISI",
      title: "3. Soru: Bootstrap CDN Linki",
      prompt: "<code>&lt;link rel=\"stylesheet\" href=\"bootstrap.min.css\"&gt;</code> etiketini yazarak CSS dosyasını bağlayabilir misin?",
      presetCode: "<!-- Bootstrap CSS bağlantısını kur: -->\n",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<link rel=\"stylesheet\" href=\"bootstrap.min.css\">", "bootstrap.min.css"],
      hint: "<link rel=\"stylesheet\" href=\"bootstrap.min.css\">",
      solution: "<link rel=\"stylesheet\" href=\"bootstrap.min.css\">",
      validator: (code) => {
        const clean = code.trim();
        if (/<link\s+[^>]*href\s*=\s*['"][^'"]*bootstrap(?:\.min)?\.css['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Bootstrap CSS linki bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <link rel=\"stylesheet\" href=\"bootstrap.min.css\"> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: METİN MERKEZLEME (TEXT-CENTER)",
      title: "4. Soru: Başlığı Ortala (.text-center)",
      prompt: "<code>&lt;h2&gt;</code> etiketine <code>class=\"text-center\"</code> sınıfını ekleyerek metni ortalayabilir misin?",
      presetCode: "<!-- text-center sınıfı ekle: -->\n<h2>Bootstrap Şehri</h2>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"text-center\"", "text-center"],
      hint: "<h2 class=\"text-center\">Bootstrap Şehri</h2>",
      solution: "<h2 class=\"text-center\">Bootstrap Şehri</h2>",
      validator: (code) => {
        const clean = code.trim();
        if (/<h2\s+class\s*=\s*['"][^'"]*text-center[^'"]*['"]\s*>Bootstrap Şehri<\/h2>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! text-center sınıfı uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: <h2 class=\"text-center\">Bootstrap Şehri</h2> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: KAPSAYICI VE İÇERİK BİLEŞİMİ",
      title: "5. Soru: Container İçinde Paragraf",
      prompt: "<code>&lt;div class=\"container text-center\"&gt;&lt;p&gt;Hazırız!&lt;/p&gt;&lt;/div&gt;</code> yapısını oluşturabilir misin?",
      presetCode: "<!-- container ve text-center sınıflı div kur: -->\n",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<div class=\"container text-center\">", "<p>Hazırız!</p>", "</div>"],
      hint: "<div class=\"container text-center\">\n  <p>Hazırız!</p>\n</div>",
      solution: "<div class=\"container text-center\">\n  <p>Hazırız!</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const hasDiv = /<div\s+class\s*=\s*['"][^'"]*container[^'"]*text-center[^'"]*['"][^>]*>[\s\S]*<p>Hazırız!<\/p>[\s\S]*<\/div>/i.test(clean) ||
                        /<div\s+class\s*=\s*['"][^'"]*text-center[^'"]*container[^'"]*['"][^>]*>[\s\S]*<p>Hazırız!<\/p>[\s\S]*<\/div>/i.test(clean);
        if (hasDiv) return { ok: true, msg: "Harika! 1. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: <div class=\"container text-center\"><p>Hazırız!</p></div> yazın." };
      }
    }
  ],

  bs_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: GRID SATIRI (.ROW)",
      title: "1. Soru: Satır Kapsayıcısı (.row)",
      prompt: "Sütunları barındırması için <code>&lt;div class=\"row\"&gt;&lt;/div&gt;</code> satırı açabilir misin?",
      presetCode: "<!-- row sınıfını ekle: -->\n<div class=\"container\">\n  <div>\n    <div class=\"col\">Kolon</div>\n  </div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"row\"", "row"],
      hint: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">Kolon</div>\n  </div>\n</div>",
      solution: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">Kolon</div>\n  </div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*row[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! .row satırı oluşturuldu. ✓" };
        return { ok: false, msg: "Hata: div etiketine class=\"row\" ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: İKİ EŞİT SÜTUN (COL-6)",
      title: "2. Soru: 2 Eşit Sütun (.col-6)",
      prompt: "Yan yana 2 eşit sütun oluşturmak için iki div'e de <code>class=\"col-6\"</code> sınıfı verebilir misin?",
      presetCode: "<div class=\"row\">\n  <!-- 2 adet col-6 div'i oluştur: -->\n  <div>Sol</div>\n  <div>Sağ</div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"col-6\"", "col-6"],
      hint: "<div class=\"row\">\n  <div class=\"col-6\">Sol</div>\n  <div class=\"col-6\">Sağ</div>\n</div>",
      solution: "<div class=\"row\">\n  <div class=\"col-6\">Sol</div>\n  <div class=\"col-6\">Sağ</div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const matches = clean.match(/class\s*=\s*['"][^'"]*col-6[^'"]*['"]/g);
        if (matches && matches.length >= 2) return { ok: true, msg: "Harika! 2 adet col-6 sütunu eklendi (6+6=12). ✓" };
        return { ok: false, msg: "Hata: İki div'e de class=\"col-6\" ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: ÜÇ EŞİT SÜTUN (COL-MD-4)",
      title: "3. Soru: Orta Ekranlarda 3 Sütun (.col-md-4)",
      prompt: "Tablette ve masaüstünde yan yana 3 sütun için div'e <code>class=\"col-md-4\"</code> sınıfını ekleyebilir misin?",
      presetCode: "<!-- col-md-4 sınıfını ver: -->\n<div>1. Kart</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"col-md-4\"", "col-md-4"],
      hint: "<div class=\"col-md-4\">1. Kart</div>",
      solution: "<div class=\"col-md-4\">1. Kart</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*col-md-4[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Mükemmel! col-md-4 sütunu oluşturuldu. ✓" };
        return { ok: false, msg: "Hata: div'e class=\"col-md-4\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: MOBİL VE MASAÜSTÜ DUYARLILIK",
      title: "4. Soru: col-12 ve col-lg-6 Duyarlılığı",
      prompt: "Mobilde tam genişlik (12 birim), geniş ekranda yarı genişlik (6 birim) için <code>class=\"col-12 col-lg-6\"</code> yazabilir misin?",
      presetCode: "<!-- col-12 col-lg-6 sınıflarını ekle: -->\n<div>İçerik Alanı</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"col-12 col-lg-6\"", "col-12 col-lg-6"],
      hint: "<div class=\"col-12 col-lg-6\">İçerik Alanı</div>",
      solution: "<div class=\"col-12 col-lg-6\">İçerik Alanı</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*col-12[^'"]*col-lg-6[^'"]*['"]\s*>/i.test(clean) ||
            /<div\s+class\s*=\s*['"][^'"]*col-lg-6[^'"]*col-12[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Responsive breakpoint sınıfları doğru bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: class=\"col-12 col-lg-6\" sınıflarını ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: SÜTUNLAR ARASI BOŞLUK (GAP / G-3)",
      title: "5. Soru: Izgara Boşluğu (.g-3)",
      prompt: "<code>.row</code> div'ine <code>class=\"row g-3\"</code> ekleyerek sütunlar arasına otomatik boşluk bırakabilir misin?",
      presetCode: "<!-- row div'ine g-3 sınıfı ekle: -->\n<div class=\"row\">\n  <div class=\"col-6\">Kutu 1</div>\n  <div class=\"col-6\">Kutu 2</div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"row g-3\"", "g-3"],
      hint: "<div class=\"row g-3\">\n  <div class=\"col-6\">Kutu 1</div>\n  <div class=\"col-6\">Kutu 2</div>\n</div>",
      solution: "<div class=\"row g-3\">\n  <div class=\"col-6\">Kutu 1</div>\n  <div class=\"col-6\">Kutu 2</div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*row[^'"]*g-3[^'"]*['"]\s*>/i.test(clean) ||
            /<div\s+class\s*=\s*['"][^'"]*g-3[^'"]*row[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! row g-3 ile ızgara boşlukları ayarlandı. 2. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: class=\"row g-3\" şeklinde yazın." };
      }
    }
  ],

  bs_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: DISPLAY BAŞLIK",
      title: "1. Soru: Gösterişli Başlık (.display-4)",
      prompt: "<code>&lt;h1&gt;</code> etiketine <code>class=\"display-4\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- display-4 sınıfı ekle: -->\n<h1>Büyük Başlık</h1>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"display-4\"", "display-4"],
      hint: "<h1 class=\"display-4\">Büyük Başlık</h1>",
      solution: "<h1 class=\"display-4\">Büyük Başlık</h1>",
      validator: (code) => {
        const clean = code.trim();
        if (/<h1\s+class\s*=\s*['"][^'"]*display-4[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! display-4 başlığı uygulandı. ✓" };
        return { ok: false, msg: "Hata: <h1 class=\"display-4\">Büyük Başlık</h1> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: VURGULU PARAGRAF (.LEAD)",
      title: "2. Soru: Giriş Metni (.lead)",
      prompt: "<code>&lt;p&gt;</code> etiketine <code>class=\"lead\"</code> sınıfı ekleyerek öne çıkan bir açıklama metni yapabilir misin?",
      presetCode: "<!-- lead sınıfı ekle: -->\n<p>Bootstrap 5 ile modern web arayüzü tasarlıyoruz.</p>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"lead\"", "lead"],
      hint: "<p class=\"lead\">Bootstrap 5 ile modern web arayüzü tasarlıyoruz.</p>",
      solution: "<p class=\"lead\">Bootstrap 5 ile modern web arayüzü tasarlıyoruz.</p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<p\s+class\s*=\s*['"][^'"]*lead[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Harika! lead paragrafı eklendi. ✓" };
        return { ok: false, msg: "Hata: <p class=\"lead\">...</p> şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: METİN RENKLERİ (.TEXT-PRIMARY)",
      title: "3. Soru: Mavi Yazı Rengi (.text-primary)",
      prompt: "Paragrafın yazı rengini mavi yapmak için <code>class=\"text-primary\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- text-primary sınıfı ekle: -->\n<p>Mavi renkli metin</p>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"text-primary\"", "text-primary"],
      hint: "<p class=\"text-primary\">Mavi renkli metin</p>",
      solution: "<p class=\"text-primary\">Mavi renkli metin</p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<p\s+class\s*=\s*['"][^'"]*text-primary[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Mükemmel! text-primary rengi uygulandı. ✓" };
        return { ok: false, msg: "Hata: <p class=\"text-primary\">...</p> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: KOYU ARKA PLAN (.BG-DARK)",
      title: "4. Soru: Koyu Zemin & Beyaz Yazı",
      prompt: "Div etiketine koyu zemin ve beyaz yazı için <code>class=\"bg-dark text-white\"</code> sınıflarını verebilir misin?",
      presetCode: "<!-- bg-dark text-white ekle: -->\n<div>\n  <h3>Karanlık Panel</h3>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"bg-dark text-white\"", "bg-dark text-white"],
      hint: "<div class=\"bg-dark text-white\">\n  <h3>Karanlık Panel</h3>\n</div>",
      solution: "<div class=\"bg-dark text-white\">\n  <h3>Karanlık Panel</h3>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*bg-dark[^'"]*text-white[^'"]*['"]\s*>/i.test(clean) ||
            /<div\s+class\s*=\s*['"][^'"]*text-white[^'"]*bg-dark[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! bg-dark ve text-white başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: class=\"bg-dark text-white\" yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: SAĞA YASLAMA (.TEXT-END)",
      title: "5. Soru: Metni Sağa Yaslama (.text-end)",
      prompt: "<code>&lt;p&gt;</code> etiketine <code>class=\"text-end text-success\"</code> ekleyerek yeşil ve sağa yaslı yapabilir misin?",
      presetCode: "<!-- text-end text-success ekle: -->\n<p>Onaylandı (Sağda)</p>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"text-end text-success\"", "text-end text-success"],
      hint: "<p class=\"text-end text-success\">Onaylandı (Sağda)</p>",
      solution: "<p class=\"text-end text-success\">Onaylandı (Sağda)</p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<p\s+class\s*=\s*['"][^'"]*text-end[^'"]*text-success[^'"]*['"]\s*>/i.test(clean) ||
            /<p\s+class\s*=\s*['"][^'"]*text-success[^'"]*text-end[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! text-end ve text-success uygulandı. 3. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: class=\"text-end text-success\" ekleyin." };
      }
    }
  ],

  bs_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: İÇ BOŞLUK (PADDING / P-4)",
      title: "1. Soru: İç Boşluk Ekleme (.p-4)",
      prompt: "Div etiketine dört taraftan iç boşluk vermek için <code>class=\"p-4 bg-light\"</code> ekleyebilir misin?",
      presetCode: "<!-- p-4 bg-light ekle: -->\n<div>\n  <p>İç dolgulu kutu</p>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"p-4 bg-light\"", "p-4 bg-light"],
      hint: "<div class=\"p-4 bg-light\">\n  <p>İç dolgulu kutu</p>\n</div>",
      solution: "<div class=\"p-4 bg-light\">\n  <p>İç dolgulu kutu</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*p-4[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! p-4 iç boşluğu uygulandı. ✓" };
        return { ok: false, msg: "Hata: div'e class=\"p-4 bg-light\" ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: ALT DIŞ BOŞLUK (MARGIN-BOTTOM / MB-3)",
      title: "2. Soru: Alt Dış Boşluk (.mb-3)",
      prompt: "Başlığın altına boşluk bırakmak için <code>class=\"mb-3\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- mb-3 sınıfı ekle: -->\n<h3>Bölüm Başlığı</h3>\n<p>İçerik paragrafı</p>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"mb-3\"", "mb-3"],
      hint: "<h3 class=\"mb-3\">Bölüm Başlığı</h3>\n<p>İçerik paragrafı</p>",
      solution: "<h3 class=\"mb-3\">Bölüm Başlığı</h3>\n<p>İçerik paragrafı</p>",
      validator: (code) => {
        const clean = code.trim();
        if (/<h3\s+class\s*=\s*['"][^'"]*mb-3[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Harika! mb-3 alt boşluğu uygulandı. ✓" };
        return { ok: false, msg: "Hata: h3 etiketine class=\"mb-3\" ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: KENARLIK VE YUVARLAK KÖŞE",
      title: "3. Soru: Kenarlık & Yuvarlak Köşeler",
      prompt: "Div etiketine <code>class=\"border rounded p-3\"</code> sınıflarını ekleyebilir misin?",
      presetCode: "<!-- border rounded p-3 ekle: -->\n<div>\n  <p>Çerçeveli kutu</p>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"border rounded p-3\"", "border rounded p-3"],
      hint: "<div class=\"border rounded p-3\">\n  <p>Çerçeveli kutu</p>\n</div>",
      solution: "<div class=\"border rounded p-3\">\n  <p>Çerçeveli kutu</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*border[^'"]*rounded[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! border ve rounded sınıfları uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: class=\"border rounded p-3\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: GÖLGE EFEKTİ (.SHADOW)",
      title: "4. Soru: Kutu Gölgesi (.shadow)",
      prompt: "Kutuya şık bir derinlik gölgesi vermek için <code>class=\"shadow p-3 bg-white\"</code> ekleyebilir misin?",
      presetCode: "<!-- shadow p-3 bg-white ekle: -->\n<div>\n  <p>Gölgeli Kutu</p>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"shadow p-3 bg-white\"", "shadow"],
      hint: "<div class=\"shadow p-3 bg-white\">\n  <p>Gölgeli Kutu</p>\n</div>",
      solution: "<div class=\"shadow p-3 bg-white\">\n  <p>Gölgeli Kutu</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*shadow[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! .shadow gölge efekti uygulandı. ✓" };
        return { ok: false, msg: "Hata: class=\"shadow p-3 bg-white\" yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: YUVARLAK RESİM (.ROUNDED-CIRCLE)",
      title: "5. Soru: Daire Profil Resmi (.rounded-circle)",
      prompt: "<code>&lt;img&gt;</code> etiketine <code>class=\"rounded-circle shadow-sm\"</code> sınıflarını ekleyebilir misin?",
      presetCode: "<!-- rounded-circle shadow-sm ekle: -->\n<img src=\"avatar.png\" alt=\"Profil\">",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"rounded-circle shadow-sm\"", "rounded-circle"],
      hint: "<img src=\"avatar.png\" class=\"rounded-circle shadow-sm\" alt=\"Profil\">",
      solution: "<img src=\"avatar.png\" class=\"rounded-circle shadow-sm\" alt=\"Profil\">",
      validator: (code) => {
        const clean = code.trim();
        if (/<img\s+[^>]*class\s*=\s*['"][^'"]*rounded-circle[^'"]*['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Harika! rounded-circle uygulandı. 4. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: img etiketine class=\"rounded-circle shadow-sm\" ekleyin." };
      }
    }
  ],

  bs_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: ANA BUTON (.BTN-PRIMARY)",
      title: "1. Soru: Mavi Ana Buton (.btn .btn-primary)",
      prompt: "<code>&lt;button&gt;</code> etiketine <code>class=\"btn btn-primary\"</code> sınıflarını ekleyebilir misin?",
      presetCode: "<!-- btn btn-primary ekle: -->\n<button>Giriş Yap</button>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"btn btn-primary\"", "btn btn-primary"],
      hint: "<button class=\"btn btn-primary\">Giriş Yap</button>",
      solution: "<button class=\"btn btn-primary\">Giriş Yap</button>",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+class\s*=\s*['"][^'"]*btn\s+btn-primary[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! btn btn-primary uygulandı. ✓" };
        return { ok: false, msg: "Hata: <button class=\"btn btn-primary\">Giriş Yap</button> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: ÇERÇEVELİ BUTON (.BTN-OUTLINE-SUCCESS)",
      title: "2. Soru: Şeffaf Çerçeveli Buton (Outline)",
      prompt: "Yeşil kenarlıklı şeffaf buton için <code>class=\"btn btn-outline-success\"</code> ekleyebilir misin?",
      presetCode: "<!-- btn btn-outline-success ekle: -->\n<button>Kaydet</button>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"btn btn-outline-success\"", "btn-outline-success"],
      hint: "<button class=\"btn btn-outline-success\">Kaydet</button>",
      solution: "<button class=\"btn btn-outline-success\">Kaydet</button>",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+class\s*=\s*['"][^'"]*btn\s+btn-outline-success[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Harika! btn-outline-success uygulandı. ✓" };
        return { ok: false, msg: "Hata: <button class=\"btn btn-outline-success\">Kaydet</button> yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: BÜYÜK BUTON BOYUTU (.BTN-LG)",
      title: "3. Soru: Büyük Boy Buton (.btn-lg)",
      prompt: "Butona <code>class=\"btn btn-danger btn-lg\"</code> sınıflarını vererek büyük kırmızı bir buton yapabilir misin?",
      presetCode: "<!-- btn btn-danger btn-lg ekle: -->\n<button>Sil</button>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"btn btn-danger btn-lg\"", "btn-lg"],
      hint: "<button class=\"btn btn-danger btn-lg\">Sil</button>",
      solution: "<button class=\"btn btn-danger btn-lg\">Sil</button>",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+class\s*=\s*['"][^'"]*btn-danger[^'"]*btn-lg[^'"]*['"]\s*>/i.test(clean) ||
            /<button\s+class\s*=\s*['"][^'"]*btn-lg[^'"]*btn-danger[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! btn-lg boyutu uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: class=\"btn btn-danger btn-lg\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: BUTON GRUBU (.BTN-GROUP)",
      title: "4. Soru: Bitişik Butonlar (.btn-group)",
      prompt: "İki butonu kapsayan div etiketine <code>class=\"btn-group\"</code> sınıfını ekleyebilir misin?",
      presetCode: "<!-- btn-group sınıfı ekle: -->\n<div>\n  <button class=\"btn btn-primary\">Sol</button>\n  <button class=\"btn btn-primary\">Sağ</button>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"btn-group\"", "btn-group"],
      hint: "<div class=\"btn-group\">\n  <button class=\"btn btn-primary\">Sol</button>\n  <button class=\"btn btn-primary\">Sağ</button>\n</div>",
      solution: "<div class=\"btn-group\">\n  <button class=\"btn btn-primary\">Sol</button>\n  <button class=\"btn btn-primary\">Sağ</button>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*btn-group[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! btn-group grubu kuruldu. ✓" };
        return { ok: false, msg: "Hata: div etiketine class=\"btn-group\" ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: BİLDİRİM ROZETİ (BADGE)",
      title: "5. Soru: Kırmızı Bildirim Rozeti (.badge)",
      prompt: "Buton içindeki <code>&lt;span&gt;</code> etiketine <code>class=\"badge bg-danger\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<button class=\"btn btn-primary\">\n  Bildirimler <span>3</span>\n</button>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"badge bg-danger\"", "badge bg-danger"],
      hint: "<button class=\"btn btn-primary\">\n  Bildirimler <span class=\"badge bg-danger\">3</span>\n</button>",
      solution: "<button class=\"btn btn-primary\">\n  Bildirimler <span class=\"badge bg-danger\">3</span>\n</button>",
      validator: (code) => {
        const clean = code.trim();
        if (/<span\s+class\s*=\s*['"][^'"]*badge[^'"]*bg-danger[^'"]*['"]\s*>3<\/span>/i.test(clean)) {
          return { ok: true, msg: "Harika! badge bg-danger rozeti eklendi. 5. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: <span class=\"badge bg-danger\">3</span> yazın." };
      }
    }
  ],

  bs_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: BAŞARI UYARI KUTUSU (.ALERT-SUCCESS)",
      title: "1. Soru: Başarı Uyarısı (.alert .alert-success)",
      prompt: "Div etiketine <code>class=\"alert alert-success\"</code> sınıflarını ekleyebilir misin?",
      presetCode: "<!-- alert alert-success ekle: -->\n<div>\n  Tebrikler, siparişiniz alındı!\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"alert alert-success\"", "alert alert-success"],
      hint: "<div class=\"alert alert-success\">\n  Tebrikler, siparişiniz alındı!\n</div>",
      solution: "<div class=\"alert alert-success\">\n  Tebrikler, siparişiniz alındı!\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*alert\s+alert-success[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! alert-success uygulandı. ✓" };
        return { ok: false, msg: "Hata: class=\"alert alert-success\" ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KAPATILABİLİR UYARI (BTN-CLOSE)",
      title: "2. Soru: Kapatma Butonlu Uyarı (.btn-close)",
      prompt: "Uyarı kutusu içine kapatma butonu olarak <code>&lt;button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"&gt;&lt;/button&gt;</code> ekleyebilir misin?",
      presetCode: "<div class=\"alert alert-warning alert-dismissible fade show\">\n  Dikkat! Lütfen formu kontrol edin.\n  <!-- btn-close butonunu ekle: -->\n  \n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>", "btn-close"],
      hint: "<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>",
      solution: "<div class=\"alert alert-warning alert-dismissible fade show\">\n  Dikkat! Lütfen formu kontrol edin.\n  <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<button[^>]*class\s*=\s*['"][^'"]*btn-close[^'"]*['"][^>]*data-bs-dismiss\s*=\s*['"]alert['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Kapatma butonu doğru eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\"></button> ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: İLERLEME ÇUBUĞU (.PROGRESS-BAR)",
      title: "3. Soru: %70 Doluluklu İlerleme Çubuğu",
      prompt: "İçteki div'e <code>class=\"progress-bar\" style=\"width: 70%\"</code> ekleyebilir misin?",
      presetCode: "<div class=\"progress\">\n  <!-- progress-bar ve style ekle: -->\n  <div></div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"progress-bar\" style=\"width: 70%\"", "progress-bar"],
      hint: "<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 70%\"></div>\n</div>",
      solution: "<div class=\"progress\">\n  <div class=\"progress-bar\" style=\"width: 70%\"></div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*class\s*=\s*['"][^'"]*progress-bar[^'"]*['"][^>]*style\s*=\s*['"][^'"]*width:\s*70%[^'"]*['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! progress-bar genişliği %70 olarak ayarlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"progress-bar\" style=\"width: 70%\"></div> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: ÇİZGİLİ İLERLEME (STRIPED & ANIMATED)",
      title: "4. Soru: Çizgili & Hareketli Çubuk",
      prompt: "İlerleme çubuğuna <code>class=\"progress-bar progress-bar-striped progress-bar-animated\"</code> sınıflarını ekleyebilir misin?",
      presetCode: "<div class=\"progress\">\n  <div style=\"width: 50%\"></div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"progress-bar progress-bar-striped progress-bar-animated\"", "progress-bar-striped"],
      hint: "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" style=\"width: 50%\"></div>\n</div>",
      solution: "<div class=\"progress\">\n  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" style=\"width: 50%\"></div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*class\s*=\s*['"][^'"]*progress-bar-striped[^'"]*['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Çizgili animasyonlu bar eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: progress-bar-striped sınıfını ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: YÜKLENİYOR ÇARKI (.SPINNER-BORDER)",
      title: "5. Soru: Dönen Yükleme Spinnerı",
      prompt: "<code>&lt;div class=\"spinner-border text-primary\"&gt;&lt;/div&gt;</code> etiketini yazarak dönen yükleniyor simgesi ekleyebilir misin?",
      presetCode: "<!-- spinner-border text-primary ekle: -->\n",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<div class=\"spinner-border text-primary\"></div>", "spinner-border"],
      hint: "<div class=\"spinner-border text-primary\"></div>",
      solution: "<div class=\"spinner-border text-primary\"></div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*spinner-border[^'"]*text-primary[^'"]*['"]\s*><\/div>/i.test(clean) ||
            /<div\s+class\s*=\s*['"][^'"]*text-primary[^'"]*spinner-border[^'"]*['"]\s*><\/div>/i.test(clean)) {
          return { ok: true, msg: "Harika! spinner-border başarıyla eklendi. 6. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: <div class=\"spinner-border text-primary\"></div> yazın." };
      }
    }
  ],

  bs_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: TEMEL TABLO (.TABLE)",
      title: "1. Soru: Bootstrap Tablosu (.table)",
      prompt: "<code>&lt;table&gt;</code> etiketine <code>class=\"table\"</code> sınıfını ekleyebilir misin?",
      presetCode: "<!-- table sınıfı ekle: -->\n<table>\n  <tr><th>İsim</th><th>Puan</th></tr>\n  <tr><td>Ali</td><td>95</td></tr>\n</table>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"table\"", "table"],
      hint: "<table class=\"table\">\n  <tr><th>İsim</th><th>Puan</th></tr>\n  <tr><td>Ali</td><td>95</td></tr>\n</table>",
      solution: "<table class=\"table\">\n  <tr><th>İsim</th><th>Puan</th></tr>\n  <tr><td>Ali</td><td>95</td></tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<table\s+class\s*=\s*['"][^'"]*table[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! table sınıfı uygulandı. ✓" };
        return { ok: false, msg: "Hata: <table class=\"table\"> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: ÇİZGİLİ TABLO (.TABLE-STRIPED)",
      title: "2. Soru: Zebra Çizgili Tablo (.table-striped)",
      prompt: "Tabloya <code>class=\"table table-striped\"</code> sınıflarını ekleyebilir misin?",
      presetCode: "<!-- table table-striped ekle: -->\n<table>\n  <tr><td>Satır 1</td></tr>\n  <tr><td>Satır 2</td></tr>\n</table>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"table table-striped\"", "table-striped"],
      hint: "<table class=\"table table-striped\">\n  <tr><td>Satır 1</td></tr>\n  <tr><td>Satır 2</td></tr>\n</table>",
      solution: "<table class=\"table table-striped\">\n  <tr><td>Satır 1</td></tr>\n  <tr><td>Satır 2</td></tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<table\s+class\s*=\s*['"][^'"]*table-striped[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Harika! table-striped çizgileri eklendi. ✓" };
        return { ok: false, msg: "Hata: class=\"table table-striped\" yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: HOVER EFEKTLİ TABLO (.TABLE-HOVER)",
      title: "3. Soru: Vurgulu Tablo (.table-hover)",
      prompt: "Tabloya fareyle üzerine gelindiğinde satırı vurgulayan <code>class=\"table table-hover\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- table table-hover ekle: -->\n<table>\n  <tr><td>Üzerime gel</td></tr>\n</table>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"table table-hover\"", "table-hover"],
      hint: "<table class=\"table table-hover\">\n  <tr><td>Üzerime gel</td></tr>\n</table>",
      solution: "<table class=\"table table-hover\">\n  <tr><td>Üzerime gel</td></tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<table\s+class\s*=\s*['"][^'"]*table-hover[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Mükemmel! table-hover sınıfı uygulandı. ✓" };
        return { ok: false, msg: "Hata: class=\"table table-hover\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: LİSTE GRUBU (.LIST-GROUP)",
      title: "4. Soru: Temiz Liste (.list-group)",
      prompt: "<code>&lt;ul&gt;</code> etiketine <code>class=\"list-group\"</code> ve <code>&lt;li&gt;</code>'ye <code>class=\"list-group-item\"</code> ekleyebilir misin?",
      presetCode: "<!-- list-group ve list-group-item ekle: -->\n<ul>\n  <li>1. Görev</li>\n</ul>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"list-group\"", "class=\"list-group-item\""],
      hint: "<ul class=\"list-group\">\n  <li class=\"list-group-item\">1. Görev</li>\n</ul>",
      solution: "<ul class=\"list-group\">\n  <li class=\"list-group-item\">1. Görev</li>\n</ul>",
      validator: (code) => {
        const clean = code.trim();
        const hasUl = /<ul\s+class\s*=\s*['"][^'"]*list-group[^'"]*['"]\s*>/i.test(clean);
        const hasLi = /<li\s+class\s*=\s*['"][^'"]*list-group-item[^'"]*['"]\s*>/i.test(clean);
        if (hasUl && hasLi) return { ok: true, msg: "Tebrikler! list-group listesi oluşturuldu. ✓" };
        return { ok: false, msg: "Hata: ul'ye list-group, li'ye list-group-item ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: AKTİF LİSTE ELEMANI (.ACTIVE)",
      title: "5. Soru: Aktif Liste Maddesi (.active)",
      prompt: "İlk liste maddesine <code>class=\"list-group-item active\"</code> ekleyebilir misin?",
      presetCode: "<ul class=\"list-group\">\n  <!-- active sınıfı ekle: -->\n  <li class=\"list-group-item\">Seçili Madde</li>\n</ul>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"list-group-item active\"", "active"],
      hint: "<ul class=\"list-group\">\n  <li class=\"list-group-item active\">Seçili Madde</li>\n</ul>",
      solution: "<ul class=\"list-group\">\n  <li class=\"list-group-item active\">Seçili Madde</li>\n</ul>",
      validator: (code) => {
        const clean = code.trim();
        if (/<li\s+class\s*=\s*['"][^'"]*list-group-item\s+active[^'"]*['"]\s*>/i.test(clean) ||
            /<li\s+class\s*=\s*['"][^'"]*active\s+list-group-item[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! list-group-item active uygulandı. 7. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: class=\"list-group-item active\" yazın." };
      }
    }
  ],

  bs_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: KART İSKELETİ (.CARD)",
      title: "1. Soru: Temel Kart Çerçevesi (.card)",
      prompt: "Div etiketine <code>class=\"card\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- card sınıfı ekle: -->\n<div>\n  <p>Kart İçeriği</p>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"card\"", "card"],
      hint: "<div class=\"card\">\n  <p>Kart İçeriği</p>\n</div>",
      solution: "<div class=\"card\">\n  <p>Kart İçeriği</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*card[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! card sınıfı eklendi. ✓" };
        return { ok: false, msg: "Hata: <div class=\"card\"> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: KART GÖVDESİ (.CARD-BODY)",
      title: "2. Soru: Kart Gövdesi (.card-body)",
      prompt: "Kartın içindeki div'e <code>class=\"card-body\"</code> sınıfını ekleyebilir misin?",
      presetCode: "<div class=\"card\">\n  <!-- card-body sınıfı ekle: -->\n  <div>\n    <h5>Başlık</h5>\n  </div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"card-body\"", "card-body"],
      hint: "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5>Başlık</h5>\n  </div>\n</div>",
      solution: "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5>Başlık</h5>\n  </div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*card-body[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Harika! card-body gövdesi eklendi. ✓" };
        return { ok: false, msg: "Hata: div'e class=\"card-body\" ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: KART BAŞLIĞI VE METNİ",
      title: "3. Soru: .card-title ve .card-text",
      prompt: "Başlığa <code>class=\"card-title\"</code>, paragrafa <code>class=\"card-text\"</code> ekleyebilir misin?",
      presetCode: "<div class=\"card-body\">\n  <h5>Ürün Adı</h5>\n  <p>Ürün açıklaması burada yer alır.</p>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"card-title\"", "class=\"card-text\""],
      hint: "<div class=\"card-body\">\n  <h5 class=\"card-title\">Ürün Adı</h5>\n  <p class=\"card-text\">Ürün açıklaması burada yer alır.</p>\n</div>",
      solution: "<div class=\"card-body\">\n  <h5 class=\"card-title\">Ürün Adı</h5>\n  <p class=\"card-text\">Ürün açıklaması burada yer alır.</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const hasTitle = /<h5\s+class\s*=\s*['"][^'"]*card-title[^'"]*['"]\s*>/i.test(clean);
        const hasText = /<p\s+class\s*=\s*['"][^'"]*card-text[^'"]*['"]\s*>/i.test(clean);
        if (hasTitle && hasText) return { ok: true, msg: "Mükemmel! card-title ve card-text uygulandı. ✓" };
        return { ok: false, msg: "Hata: h5'e card-title, p'ye card-text ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: KART ÜST RESMİ (.CARD-IMG-TOP)",
      title: "4. Soru: Kart Resmi (.card-img-top)",
      prompt: "<code>&lt;img&gt;</code> etiketine <code>class=\"card-img-top\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<div class=\"card\">\n  <!-- card-img-top sınıfı ekle: -->\n  <img src=\"resim.jpg\" alt=\"Kapak\">\n  <div class=\"card-body\"></div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"card-img-top\"", "card-img-top"],
      hint: "<div class=\"card\">\n  <img src=\"resim.jpg\" class=\"card-img-top\" alt=\"Kapak\">\n  <div class=\"card-body\"></div>\n</div>",
      solution: "<div class=\"card\">\n  <img src=\"resim.jpg\" class=\"card-img-top\" alt=\"Kapak\">\n  <div class=\"card-body\"></div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<img\s+[^>]*class\s*=\s*['"][^'"]*card-img-top[^'"]*['"][^>]*>/i.test(clean)) return { ok: true, msg: "Tebrikler! card-img-top sınıfı bağlandı. ✓" };
        return { ok: false, msg: "Hata: img etiketine class=\"card-img-top\" ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: KART ALT ŞERİDİ (.CARD-FOOTER)",
      title: "5. Soru: Kart Alt Bilgisi (.card-footer)",
      prompt: "Kartın en altına <code>&lt;div class=\"card-footer text-muted\"&gt;2 gün önce&lt;/div&gt;</code> ekleyebilir misin?",
      presetCode: "<div class=\"card\">\n  <div class=\"card-body\">Gövde</div>\n  <!-- card-footer ekle: -->\n  \n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<div class=\"card-footer text-muted\">2 gün önce</div>", "card-footer"],
      hint: "<div class=\"card-footer text-muted\">2 gün önce</div>",
      solution: "<div class=\"card\">\n  <div class=\"card-body\">Gövde</div>\n  <div class=\"card-footer text-muted\">2 gün önce</div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*card-footer[^'"]*['"]\s*>2 gün önce<\/div>/i.test(clean)) {
          return { ok: true, msg: "Harika! card-footer başarıyla tamamlandı. 8. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: <div class=\"card-footer text-muted\">2 gün önce</div> ekleyin." };
      }
    }
  ],

  bs_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: FORM INPUT (.FORM-CONTROL)",
      title: "1. Soru: Form Giriş Kutusu (.form-control)",
      prompt: "<code>&lt;input&gt;</code> etiketine <code>class=\"form-control\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- form-control sınıfı ekle: -->\n<input type=\"text\" placeholder=\"Adınız\">",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"form-control\"", "form-control"],
      hint: "<input type=\"text\" class=\"form-control\" placeholder=\"Adınız\">",
      solution: "<input type=\"text\" class=\"form-control\" placeholder=\"Adınız\">",
      validator: (code) => {
        const clean = code.trim();
        if (/<input\s+[^>]*class\s*=\s*['"][^'"]*form-control[^'"]*['"][^>]*>/i.test(clean)) return { ok: true, msg: "Tebrikler! form-control uygulandı. ✓" };
        return { ok: false, msg: "Hata: <input type=\"text\" class=\"form-control\" placeholder=\"Adınız\"> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: FORM ETİKETİ (.FORM-LABEL)",
      title: "2. Soru: Form Etiketi (.form-label)",
      prompt: "<code>&lt;label&gt;</code> etiketine <code>class=\"form-label\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- form-label sınıfı ekle: -->\n<label>E-posta Adresi</label>\n<input type=\"email\" class=\"form-control\">",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"form-label\"", "form-label"],
      hint: "<label class=\"form-label\">E-posta Adresi</label>\n<input type=\"email\" class=\"form-control\">",
      solution: "<label class=\"form-label\">E-posta Adresi</label>\n<input type=\"email\" class=\"form-control\">",
      validator: (code) => {
        const clean = code.trim();
        if (/<label\s+class\s*=\s*['"][^'"]*form-label[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Harika! form-label sınıfı eklendi. ✓" };
        return { ok: false, msg: "Hata: label etiketine class=\"form-label\" ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: AÇILIR SEÇİM KUTUSU (.FORM-SELECT)",
      title: "3. Soru: Seçim Menüsü (.form-select)",
      prompt: "<code>&lt;select&gt;</code> etiketine <code>class=\"form-select\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<!-- form-select sınıfı ekle: -->\n<select>\n  <option selected>Şehir Seçiniz</option>\n  <option value=\"1\">İstanbul</option>\n</select>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"form-select\"", "form-select"],
      hint: "<select class=\"form-select\">\n  <option selected>Şehir Seçiniz</option>\n  <option value=\"1\">İstanbul</option>\n</select>",
      solution: "<select class=\"form-select\">\n  <option selected>Şehir Seçiniz</option>\n  <option value=\"1\">İstanbul</option>\n</select>",
      validator: (code) => {
        const clean = code.trim();
        if (/<select\s+class\s*=\s*['"][^'"]*form-select[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Mükemmel! form-select uygulandı. ✓" };
        return { ok: false, msg: "Hata: select etiketine class=\"form-select\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: CHECKBOX (.FORM-CHECK-INPUT)",
      title: "4. Soru: Onay Kutusu (.form-check-input)",
      prompt: "Checkbox etiketine <code>class=\"form-check-input\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<div class=\"form-check\">\n  <!-- form-check-input ekle: -->\n  <input type=\"checkbox\">\n  <label class=\"form-check-label\">Beni Hatırla</label>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"form-check-input\"", "form-check-input"],
      hint: "<div class=\"form-check\">\n  <input type=\"checkbox\" class=\"form-check-input\">\n  <label class=\"form-check-label\">Beni Hatırla</label>\n</div>",
      solution: "<div class=\"form-check\">\n  <input type=\"checkbox\" class=\"form-check-input\">\n  <label class=\"form-check-label\">Beni Hatırla</label>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<input\s+[^>]*class\s*=\s*['"][^'"]*form-check-input[^'"]*['"][^>]*>/i.test(clean)) return { ok: true, msg: "Tebrikler! form-check-input eklendi. ✓" };
        return { ok: false, msg: "Hata: input'a class=\"form-check-input\" ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: GİRİŞ GRUBU (.INPUT-GROUP)",
      title: "5. Soru: İkonlu Giriş Grubu (.input-group)",
      prompt: "Div'e <code>class=\"input-group\"</code> ve içteki span'e <code>class=\"input-group-text\"</code> ekleyebilir misin?",
      presetCode: "<!-- input-group ve input-group-text ekle: -->\n<div>\n  <span>@</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Kullanıcı Adı\">\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"input-group\"", "class=\"input-group-text\""],
      hint: "<div class=\"input-group\">\n  <span class=\"input-group-text\">@</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Kullanıcı Adı\">\n</div>",
      solution: "<div class=\"input-group\">\n  <span class=\"input-group-text\">@</span>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Kullanıcı Adı\">\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const hasGroup = /<div\s+class\s*=\s*['"][^'"]*input-group[^'"]*['"]\s*>/i.test(clean);
        const hasText = /<span\s+class\s*=\s*['"][^'"]*input-group-text[^'"]*['"]\s*>/i.test(clean);
        if (hasGroup && hasText) return { ok: true, msg: "Harika! input-group tamamlandı. 9. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: div'e input-group, span'e input-group-text ekleyin." };
      }
    }
  ],

  bs_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: NAVBAR ÇERÇEVESİ",
      title: "1. Soru: Navbar İskeleti (.navbar)",
      prompt: "<code>&lt;nav&gt;</code> etiketine <code>class=\"navbar navbar-expand-lg navbar-dark bg-dark\"</code> sınıflarını ekleyebilir misin?",
      presetCode: "<!-- navbar sınıflarını ekle: -->\n<nav>\n  <div class=\"container\"></div>\n</nav>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"navbar navbar-expand-lg navbar-dark bg-dark\"", "navbar-expand-lg"],
      hint: "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\"></div>\n</nav>",
      solution: "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\"></div>\n</nav>",
      validator: (code) => {
        const clean = code.trim();
        if (/<nav\s+class\s*=\s*['"][^'"]*navbar[^'"]*navbar-expand-lg[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Tebrikler! navbar iskeleti kuruldu. ✓" };
        return { ok: false, msg: "Hata: nav etiketine class=\"navbar navbar-expand-lg navbar-dark bg-dark\" ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: MARKA / LOGO (.NAVBAR-BRAND)",
      title: "2. Soru: Logo Linki (.navbar-brand)",
      prompt: "<code>&lt;a&gt;</code> etiketine <code>class=\"navbar-brand\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<nav class=\"navbar navbar-light bg-light\">\n  <!-- navbar-brand ekle: -->\n  <a href=\"#\">WebSitem</a>\n</nav>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"navbar-brand\"", "navbar-brand"],
      hint: "<nav class=\"navbar navbar-light bg-light\">\n  <a href=\"#\" class=\"navbar-brand\">WebSitem</a>\n</nav>",
      solution: "<nav class=\"navbar navbar-light bg-light\">\n  <a href=\"#\" class=\"navbar-brand\">WebSitem</a>\n</nav>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*class\s*=\s*['"][^'"]*navbar-brand[^'"]*['"][^>]*>WebSitem<\/a>/i.test(clean)) return { ok: true, msg: "Harika! navbar-brand uygulandı. ✓" };
        return { ok: false, msg: "Hata: <a href=\"#\" class=\"navbar-brand\">WebSitem</a> yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: MENÜ LİNKLERİ (.NAVBAR-NAV & .NAV-LINK)",
      title: "3. Soru: Menü Linkleri (.nav-link)",
      prompt: "Link etiketine <code>class=\"nav-link\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<div class=\"navbar-nav\">\n  <!-- nav-link ekle: -->\n  <a href=\"#\">Hakkımızda</a>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"nav-link\"", "nav-link"],
      hint: "<div class=\"navbar-nav\">\n  <a href=\"#\" class=\"nav-link\">Hakkımızda</a>\n</div>",
      solution: "<div class=\"navbar-nav\">\n  <a href=\"#\" class=\"nav-link\">Hakkımızda</a>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*class\s*=\s*['"][^'"]*nav-link[^'"]*['"][^>]*>/i.test(clean)) return { ok: true, msg: "Mükemmel! nav-link sınıfı eklendi. ✓" };
        return { ok: false, msg: "Hata: a etiketine class=\"nav-link\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: AKTİF MENÜ ELEMANI (.ACTIVE)",
      title: "4. Soru: Aktif Sayfa Linki (.active)",
      prompt: "Linke <code>class=\"nav-link active\"</code> ekleyerek aktif olduğunu belirtebilir misin?",
      presetCode: "<div class=\"navbar-nav\">\n  <a href=\"#\">Anasayfa</a>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"nav-link active\"", "nav-link active"],
      hint: "<div class=\"navbar-nav\">\n  <a href=\"#\" class=\"nav-link active\">Anasayfa</a>\n</div>",
      solution: "<div class=\"navbar-nav\">\n  <a href=\"#\" class=\"nav-link active\">Anasayfa</a>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*class\s*=\s*['"][^'"]*nav-link\s+active[^'"]*['"][^>]*>/i.test(clean) ||
            /<a\s+[^>]*class\s*=\s*['"][^'"]*active\s+nav-link[^'"]*['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! nav-link active uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: class=\"nav-link active\" yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: HAMBURGER MENÜ BUTONU",
      title: "5. Soru: Hamburger Buton İkonu (.navbar-toggler-icon)",
      prompt: "Butonun içine <code>&lt;span class=\"navbar-toggler-icon\"&gt;&lt;/span&gt;</code> ekleyebilir misin?",
      presetCode: "<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#anaMenu\">\n  <!-- navbar-toggler-icon ekle: -->\n  \n</button>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<span class=\"navbar-toggler-icon\"></span>", "navbar-toggler-icon"],
      hint: "<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#anaMenu\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>",
      solution: "<button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#anaMenu\">\n  <span class=\"navbar-toggler-icon\"></span>\n</button>",
      validator: (code) => {
        const clean = code.trim();
        if (/<span\s+class\s*=\s*['"][^'"]*navbar-toggler-icon[^'"]*['"]\s*><\/span>/i.test(clean)) {
          return { ok: true, msg: "Harika! navbar-toggler-icon eklendi. 10. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: <span class=\"navbar-toggler-icon\"></span> ekleyin." };
      }
    }
  ],

  bs_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: MODAL AÇMA BUTONU",
      title: "1. Soru: Modalı Açan Buton (data-bs-toggle)",
      prompt: "Butona <code>data-bs-toggle=\"modal\" data-bs-target=\"#ornekModal\"</code> niteliklerini ekleyebilir misin?",
      presetCode: "<!-- data-bs-toggle ve data-bs-target ekle: -->\n<button class=\"btn btn-primary\">\n  Modalı Aç\n</button>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["data-bs-toggle=\"modal\" data-bs-target=\"#ornekModal\"", "data-bs-toggle=\"modal\""],
      hint: "<button class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#ornekModal\">\n  Modalı Aç\n</button>",
      solution: "<button class=\"btn btn-primary\" data-bs-toggle=\"modal\" data-bs-target=\"#ornekModal\">\n  Modalı Aç\n</button>",
      validator: (code) => {
        const clean = code.trim();
        const hasToggle = /data-bs-toggle\s*=\s*['"]modal['"]/i.test(clean);
        const hasTarget = /data-bs-target\s*=\s*['"]#ornekModal['"]/i.test(clean);
        if (hasToggle && hasTarget) return { ok: true, msg: "Tebrikler! Modal tetikleyici buton bağlandı. ✓" };
        return { ok: false, msg: "Hata: data-bs-toggle=\"modal\" data-bs-target=\"#ornekModal\" ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: MODAL DIŞ İSKELETİ (.MODAL .FADE)",
      title: "2. Soru: Modal Kapsayıcısı (.modal .fade)",
      prompt: "Div'e <code>class=\"modal fade\" id=\"ornekModal\"</code> tanımlayabilir misin?",
      presetCode: "<!-- modal fade ve id ekle: -->\n<div>\n  <div class=\"modal-dialog\"></div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"modal fade\" id=\"ornekModal\"", "modal fade"],
      hint: "<div class=\"modal fade\" id=\"ornekModal\">\n  <div class=\"modal-dialog\"></div>\n</div>",
      solution: "<div class=\"modal fade\" id=\"ornekModal\">\n  <div class=\"modal-dialog\"></div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*class\s*=\s*['"][^'"]*modal\s+fade[^'"]*['"][^>]*id\s*=\s*['"]ornekModal['"][^>]*>/i.test(clean) ||
            /<div\s+[^>]*id\s*=\s*['"]ornekModal['"][^>]*class\s*=\s*['"][^'"]*modal\s+fade[^'"]*['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Modal fade iskeleti doğru oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"modal fade\" id=\"ornekModal\"> şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: MODAL GÖVDESİ (.MODAL-BODY)",
      title: "3. Soru: Modal İçeriği (.modal-body)",
      prompt: "Div'e <code>class=\"modal-body\"</code> sınıfı ekleyebilir misin?",
      presetCode: "<div class=\"modal-content\">\n  <!-- modal-body ekle: -->\n  <div>\n    <p>Bu bir modal pencere içeriğidir.</p>\n  </div>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"modal-body\"", "modal-body"],
      hint: "<div class=\"modal-content\">\n  <div class=\"modal-body\">\n    <p>Bu bir modal pencere içeriğidir.</p>\n  </div>\n</div>",
      solution: "<div class=\"modal-content\">\n  <div class=\"modal-body\">\n    <p>Bu bir modal pencere içeriğidir.</p>\n  </div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*modal-body[^'"]*['"]\s*>/i.test(clean)) return { ok: true, msg: "Mükemmel! modal-body eklendi. ✓" };
        return { ok: false, msg: "Hata: div'e class=\"modal-body\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: MODAL KAPATMA (DATA-BS-DISMISS)",
      title: "4. Soru: Modal Kapatma Butonu",
      prompt: "Butona <code>data-bs-dismiss=\"modal\"</code> ekleyerek modalı kapatmasını sağlayabilir misin?",
      presetCode: "<div class=\"modal-footer\">\n  <!-- data-bs-dismiss=\"modal\" ekle: -->\n  <button class=\"btn btn-secondary\">Kapat</button>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["data-bs-dismiss=\"modal\"", "btn btn-secondary"],
      hint: "<div class=\"modal-footer\">\n  <button class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Kapat</button>\n</div>",
      solution: "<div class=\"modal-footer\">\n  <button class=\"btn btn-secondary\" data-bs-dismiss=\"modal\">Kapat</button>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+[^>]*data-bs-dismiss\s*=\s*['"]modal['"][^>]*>Kapat<\/button>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! data-bs-dismiss=\"modal\" kapatma özelliği bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: butona data-bs-dismiss=\"modal\" ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: AKORDEON AÇILIR ALAN (.COLLAPSE)",
      title: "5. Soru: Açılır-Kapanır Alan (.collapse)",
      prompt: "Div etiketine <code>class=\"collapse\" id=\"detayPanel\"</code> ekleyebilir misin?",
      presetCode: "<!-- collapse ve id ekle: -->\n<div>\n  <p>Gizli detay metni</p>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"collapse\" id=\"detayPanel\"", "collapse"],
      hint: "<div class=\"collapse\" id=\"detayPanel\">\n  <p>Gizli detay metni</p>\n</div>",
      solution: "<div class=\"collapse\" id=\"detayPanel\">\n  <p>Gizli detay metni</p>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*class\s*=\s*['"][^'"]*collapse[^'"]*['"][^>]*id\s*=\s*['"]detayPanel['"][^>]*>/i.test(clean) ||
            /<div\s+[^>]*id\s*=\s*['"]detayPanel['"][^>]*class\s*=\s*['"][^'"]*collapse[^'"]*['"][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Harika! collapse alanı oluşturuldu. 11. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: <div class=\"collapse\" id=\"detayPanel\"> yazın." };
      }
    }
  ],

  bs_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: HERO BÖLÜMÜ (HERO SECTION)",
      title: "1. Soru: Hero Başlık Bölümü (.py-5 .bg-light)",
      prompt: "Hero alanı için <code>&lt;header class=\"py-5 bg-light text-center\"&gt;&lt;h1 class=\"display-5 fw-bold\"&gt;Geleceğin Kodları&lt;/h1&gt;&lt;/header&gt;</code> yapısını kurabilir misin?",
      presetCode: "<!-- Hero header kur: -->\n",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<header class=\"py-5 bg-light text-center\">", "<h1 class=\"display-5 fw-bold\">Geleceğin Kodları</h1>", "</header>"],
      hint: "<header class=\"py-5 bg-light text-center\">\n  <h1 class=\"display-5 fw-bold\">Geleceğin Kodları</h1>\n</header>",
      solution: "<header class=\"py-5 bg-light text-center\">\n  <h1 class=\"display-5 fw-bold\">Geleceğin Kodları</h1>\n</header>",
      validator: (code) => {
        const clean = code.trim();
        if (/<header\s+class\s*=\s*['"][^'"]*py-5[^'"]*['"]\s*>[\s\S]*<h1\s+class\s*=\s*['"][^'"]*display-5[^'"]*['"]\s*>Geleceğin Kodları<\/h1>[\s\S]*<\/header>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Hero bölümü başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <header class=\"py-5 bg-light text-center\"><h1 class=\"display-5 fw-bold\">Geleceğin Kodları</h1></header> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: 3'LÜ KART IZGARASI (ROW G-4)",
      title: "2. Soru: 3'lü Kart Düzeni (.row .g-4)",
      prompt: "<code>&lt;div class=\"row g-4\"&gt;&lt;/div&gt;</code> içine 3 adet <code>&lt;div class=\"col-md-4\"&gt;Kart&lt;/div&gt;</code> ekleyebilir misin?",
      presetCode: "<div class=\"container py-4\">\n  <!-- row g-4 ve 3 adet col-md-4 ekle: -->\n  \n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<div class=\"row g-4\">", "<div class=\"col-md-4\">Kart 1</div>", "</div>"],
      hint: "<div class=\"row g-4\">\n  <div class=\"col-md-4\">Kart 1</div>\n  <div class=\"col-md-4\">Kart 2</div>\n  <div class=\"col-md-4\">Kart 3</div>\n</div>",
      solution: "<div class=\"container py-4\">\n  <div class=\"row g-4\">\n    <div class=\"col-md-4\">Kart 1</div>\n    <div class=\"col-md-4\">Kart 2</div>\n    <div class=\"col-md-4\">Kart 3</div>\n  </div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const hasRow = /<div\s+class\s*=\s*['"][^'"]*row[^'"]*g-4[^'"]*['"]\s*>/i.test(clean);
        const matches = clean.match(/col-md-4/g);
        if (hasRow && matches && matches.length >= 3) return { ok: true, msg: "Harika! 3'lü responsive ızgara kartları eklendi. ✓" };
        return { ok: false, msg: "Hata: <div class=\"row g-4\"> içine 3 adet class=\"col-md-4\" ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: İLETİŞİM FORMU KAPSAYICISI",
      title: "3. Soru: Ortalanmış Form Kutusu",
      prompt: "Formu ortalamak için <code>&lt;div class=\"col-md-6 mx-auto p-4 border rounded shadow-sm\"&gt;&lt;/div&gt;</code> yapısını yazabilir misin?",
      presetCode: "<!-- col-md-6 mx-auto p-4 border rounded shadow-sm ekle: -->\n<div>\n  <form><button class=\"btn btn-primary\">Gönder</button></form>\n</div>",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["class=\"col-md-6 mx-auto p-4 border rounded shadow-sm\"", "col-md-6 mx-auto"],
      hint: "<div class=\"col-md-6 mx-auto p-4 border rounded shadow-sm\">\n  <form><button class=\"btn btn-primary\">Gönder</button></form>\n</div>",
      solution: "<div class=\"col-md-6 mx-auto p-4 border rounded shadow-sm\">\n  <form><button class=\"btn btn-primary\">Gönder</button></form>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*col-md-6[^'"]*mx-auto[^'"]*['"]\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Ortalanmış form alanı oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: class=\"col-md-6 mx-auto p-4 border rounded shadow-sm\" ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: MODERN FOOTER BÖLÜMÜ",
      title: "4. Soru: Sayfa Altlığı (.bg-dark .text-white)",
      prompt: "Sayfa altına <code>&lt;footer class=\"py-4 bg-dark text-white text-center\"&gt;&lt;p class=\"m-0\"&gt;© 2026 Kod Çiftliği&lt;/p&gt;&lt;/footer&gt;</code> ekleyebilir misin?",
      presetCode: "<!-- Footer bileşenini kur: -->\n",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<footer class=\"py-4 bg-dark text-white text-center\">", "<p class=\"m-0\">© 2026 Kod Çiftliği</p>", "</footer>"],
      hint: "<footer class=\"py-4 bg-dark text-white text-center\">\n  <p class=\"m-0\">© 2026 Kod Çiftliği</p>\n</footer>",
      solution: "<footer class=\"py-4 bg-dark text-white text-center\">\n  <p class=\"m-0\">© 2026 Kod Çiftliği</p>\n</footer>",
      validator: (code) => {
        const clean = code.trim();
        if (/<footer\s+class\s*=\s*['"][^'"]*bg-dark[^'"]*text-white[^'"]*['"]\s*>[\s\S]*<p[^>]*>© 2026 Kod Çiftliği<\/p>[\s\S]*<\/footer>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Footer alanı başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <footer class=\"py-4 bg-dark text-white text-center\"><p class=\"m-0\">© 2026 Kod Çiftliği</p></footer> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: TAM PROJE BİRLEŞİMİ & CALL TO ACTION",
      title: "5. Soru: Harekete Geçirici Buton (CTA)",
      prompt: "<code>&lt;div class=\"text-center my-4\"&gt;&lt;a href=\"#\" class=\"btn btn-success btn-lg shadow\"&gt;🚀 Projeye Başla&lt;/a&gt;&lt;/div&gt;</code> yapısını yazabilir misin?",
      presetCode: "<!-- CTA buton bloğunu kur: -->\n",
      filename: "index.html",
      lang: "HTML / Bootstrap 5",
      quickKeys: ["<div class=\"text-center my-4\">", "<a href=\"#\" class=\"btn btn-success btn-lg shadow\">🚀 Projeye Başla</a>", "</div>"],
      hint: "<div class=\"text-center my-4\">\n  <a href=\"#\" class=\"btn btn-success btn-lg shadow\">🚀 Projeye Başla</a>\n</div>",
      solution: "<div class=\"text-center my-4\">\n  <a href=\"#\" class=\"btn btn-success btn-lg shadow\">🚀 Projeye Başla</a>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+class\s*=\s*['"][^'"]*text-center[^'"]*['"]\s*>[\s\S]*<a\s+[^>]*class\s*=\s*['"][^'"]*btn-success[^'"]*btn-lg[^'"]*['"][^>]*>[\s\S]*Projeye Başla[\s\S]*<\/a>[\s\S]*<\/div>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Tüm Bootstrap 5 Müfredatı başarıyla tamamlandı! 🏆🚀" };
        }
        return { ok: false, msg: "Hata: <div class=\"text-center my-4\"><a href=\"#\" class=\"btn btn-success btn-lg shadow\">🚀 Projeye Başla</a></div> yazın." };
      }
    }
  ]
};

// Aliases for review cards and challenges
for (let i = 1; i <= 12; i++) {
  if (BS_TOPIC_REVIEWS[`bs_${i}`]) {
    BS_TOPIC_REVIEWS[`bs${i}`] = BS_TOPIC_REVIEWS[`bs_${i}`];
    BS_TOPIC_REVIEWS[`bootstrap_${i}`] = BS_TOPIC_REVIEWS[`bs_${i}`];
    BS_TOPIC_REVIEWS[`bootstrap${i}`] = BS_TOPIC_REVIEWS[`bs_${i}`];
  }
  if (BS_CHALLENGES[`bs_${i}`]) {
    BS_CHALLENGES[`bs${i}`] = BS_CHALLENGES[`bs_${i}`];
    BS_CHALLENGES[`bootstrap_${i}`] = BS_CHALLENGES[`bs_${i}`];
    BS_CHALLENGES[`bootstrap${i}`] = BS_CHALLENGES[`bs_${i}`];
  }
}

