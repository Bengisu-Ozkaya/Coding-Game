// =========================================================================
// 🌐 HTML5 MÜFREDATI: 14 HIZLI TEORİ KARTI & 70 İNTERAKTİF CANLI PROJE GÖREVİ
// Proje: "TechNova Dijital Ürün & Web Portfolyo Vitrini"
// Kullanıcı 1. adımdan 70. adıma kadar kendi canlı web projesini adım adım inşa eder.
// =========================================================================

const HTML_COURSE_TOPICS = [
  {
    id: "html_1",
    title: "1. HTML5 Temelleri & Sayfa İskeleti",
    desc: "TechNova web projesinin temel çatı iskeletini (DOCTYPE, html, head, title, body) sıfırdan kur.",
    reward: "🏗️ Proje Temeli & Sayfa İskeleti",
    status: "active",
    xp: 120
  },
  {
    id: "html_2",
    title: "2. Başlıklar & Karşılama Metinleri",
    desc: "Projenin ana başlığı (h1), alt başlığı (h2) ve kendini tanıtan giriş paragrafını (p, strong) ekle.",
    reward: "📢 Kahraman Başlığı & Karşılama Metni",
    status: "locked",
    xp: 140
  },
  {
    id: "html_3",
    title: "3. Bağlantılar & Aksiyon Butonları (Links & Buttons)",
    desc: "Projeleri keşfetme linki (a href), GitHub bağlantısı ve 'Hemen Başla' aksiyon butonunu oluştur.",
    reward: "⚡ Tıklanabilir Linkler & Aksiyon Butonu",
    status: "locked",
    xp: 160
  },
  {
    id: "html_4",
    title: "4. Görseller & Medya Vitrini (Images)",
    desc: "Web projesine vitrin banner görseli (img), logo ve figür alt başlığı (figure, figcaption) ekle.",
    reward: "🖼️ Canlı Vitrin Görseli & Banner",
    status: "locked",
    xp: 180
  },
  {
    id: "html_5",
    title: "5. Yetenek & Teknoloji Listeleri (Lists)",
    desc: "Sırasız yetenek listesi (ul, li), geliştirme adımları (ol) ve gezinme menüsü bağlantılarını inşa et.",
    reward: "📋 Özellikler & Menü Listesi",
    status: "locked",
    xp: 200
  },
  {
    id: "html_6",
    title: "6. Hizmet & Paket Tablosu (Tables)",
    desc: "Hizmet paketlerini ve fiyatlarını listeleyen standart HTML tablosunu (table, tr, th, td) kur.",
    reward: "📊 Fiyatlandırma & Paket Tablosu",
    status: "locked",
    xp: 220
  },
  {
    id: "html_7",
    title: "7. İleri Tablolar (Colspan, Rowspan, Thead & Tbody)",
    desc: "Tabloyu thead, tbody, tfoot bölümlerine ayır; sütun ve satır birleştirme ile zenginleştir.",
    reward: "📈 Profesyonel Veri Tablosu",
    status: "locked",
    xp: 250
  },
  {
    id: "html_8",
    title: "8. Konteyner Düzeni & Kart Mimarisi (Div & Span)",
    desc: "İçerikleri gruplayan kart kutuları (div class='card') ve satır içi durum rozetleri (span) oluştur.",
    reward: "🗂️ Modern Kart Düzeni & Rozetler",
    status: "locked",
    xp: 280
  },
  {
    id: "html_9",
    title: "9. Temel İletişim Formu (Form & Inputs)",
    desc: "Ziyaretçilerden veri toplayan form (form), ad soyad, e-posta, telefon ve onay kutularını bağla.",
    reward: "✉️ Etkileşimli İletişim Formu",
    status: "locked",
    xp: 300
  },
  {
    id: "html_10",
    title: "10. Gelişmiş Form Kontrolleri & Gönder Butonu",
    desc: "Detaylı mesaj alanı (textarea), hizmet seçimi (select, option) ve formu gönder butonunu ekle.",
    reward: "🚀 Form Gönder Butonu & Seçim Alanı",
    status: "locked",
    xp: 320
  },
  {
    id: "html_11",
    title: "11. Semantik HTML5 Mimarisi (Semantic Layout)",
    desc: "Sayfayı header, nav, main, section, article ve footer etiketleriyle kurumsal mimariye taşı.",
    reward: "🏛️ Semantik Sayfa Omurgası",
    status: "locked",
    xp: 350
  },
  {
    id: "html_12",
    title: "12. Multimedya & Gömülü İçerikler (Video, Audio & Iframe)",
    desc: "Proje tanıtım videosu (video controls), arka plan sesi (audio) ve YouTube vitrin oynatıcısı göm.",
    reward: "🎬 Tanıtım Videosu & Canlı Medya",
    status: "locked",
    xp: 380
  },
  {
    id: "html_13",
    title: "13. Head, Meta Etiketleri & SEO Mimarisi",
    desc: "Tarayıcı ve arama motorları için charset, viewport, meta description, favicon ve stil bağla.",
    reward: "🌐 SEO & Mobil Uyumluluk Kalkanı",
    status: "locked",
    xp: 420
  },
  {
    id: "html_14",
    title: "14. Büyük Canlı Proje Lansmanı & Yayın",
    desc: "Tüm parçaları birleştiren eksiksiz TechNova Web Portfolyosunu canlıya al ve sertifikanı kazan!",
    reward: "🏆 Canlı Yayında Web Portfolyosu",
    status: "locked",
    xp: 450
  }
];

const HTML_TOPIC_REVIEWS = {
  html_1: {
    title: "HTML5 Temelleri & Sayfa İskeleti",
    readTime: "2 dk okuma",
    rewardText: "🏗️ Proje Temeli & Sayfa İskeleti",
    logic: "Her modern web projesi standart bir HTML5 doküman iskeleti ile başlar. Tarayıcı belgenin türünü, dilini, teknik başlıklarını (head) ve kullanıcıya gösterilecek içerik gövdesini (body) bu etiketlerle anlar.",
    syntaxRules: [
      "<code>&lt;!DOCTYPE html&gt;</code> : Belgenin modern HTML5 standardında olduğunu belirtir.",
      "<code>&lt;html lang=\"tr\"&gt; ... &lt;/html&gt;</code> : Sayfanın kök elemanı ve birincil dilidir.",
      "<code>&lt;head&gt; ... &lt;/head&gt;</code> : Sekme başlığı, meta veriler ve harici kaynakları barındırır.",
      "<code>&lt;title&gt;Başlık&lt;/title&gt;</code> : Tarayıcı sekmesindeki sayfa başlığıdır.",
      "<code>&lt;body&gt; ... &lt;/body&gt;</code> : Kullanıcının ekranda göreceği tüm görsel içeriğin yuvasıdır."
    ],
    pitfalls: [
      "⚠️ <code>&lt;!DOCTYPE html&gt;</code> dokümanın en ilk satırında, hiçbir boşluk veya etiket olmadan yer almalıdır.",
      "⚠️ Açılan her <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> ve <code>&lt;body&gt;</code> etiketi mutlaka kapatılmalıdır.",
      "⚠️ Görsel elemanlar (h1, p, buton vb.) <code>&lt;head&gt;</code> içine değil, yalnızca <code>&lt;body&gt;</code> içine yazılmalıdır."
    ],
    exampleCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>TechNova Web Vitrini</title>\n</head>\n<body>\n  <!-- Proje içerikleri buraya gelecek -->\n</body>\n</html>"
  },

  html_2: {
    title: "Başlıklar & Karşılama Metinleri",
    readTime: "2 dk okuma",
    rewardText: "📢 Kahraman Başlığı & Karşılama Metni",
    logic: "Ziyaretçiyi karşılayan ana başlıklar (h1-h6) hiyerarşik yapı kurar; paragraflar (p) ve metin vurguları (strong, em) içeriği okunabilir kılar.",
    syntaxRules: [
      "<code>&lt;h1&gt;Ana Başlık&lt;/h1&gt;</code> : Sayfanın en önemli ana başlığı (sayfa başına idealde 1 adet).",
      "<code>&lt;h2&gt;Alt Başlık&lt;/h2&gt;</code> : Bölüm ve modül başlıkları.",
      "<code>&lt;p&gt;Paragraf metni&lt;/p&gt;</code> : Açıklama ve tanıtım metin blokları.",
      "<code>&lt;strong&gt;Kalın&lt;/strong&gt;</code> : Anlamsal olarak önemli ve koyu vurgulanan metin.",
      "<code>&lt;hr&gt;</code> : Bölümler arasına tematik yatay ayırıcı çizgi çeker."
    ],
    pitfalls: [
      "⚠️ SEO performansı ve sayfa netliği için her web sayfasında sadece 1 tane <code>&lt;h1&gt;</code> bulunmalıdır.",
      "⚠️ Başlık boyutunu küçültmek için h etiketi atlanmamalıdır (h1'den hemen h4'e geçilmez; hiyerarşi korunmalıdır).",
      "⚠️ <code>&lt;hr&gt;</code> tekil (self-closing) bir etikettir, kapanış etiketi almaz."
    ],
    exampleCode: "<h1>TechNova Studio</h1>\n<h2>Yaratıcı Web Deneyimleri</h2>\n<p>Modern arayüzler ve <strong>yüksek performanslı</strong> web projeleri geliştiriyoruz.</p>\n<hr>"
  },

  html_3: {
    title: "Bağlantılar & Aksiyon Butonları (Links & Buttons)",
    readTime: "2 dk okuma",
    rewardText: "⚡ Tıklanabilir Linkler & Aksiyon Butonu",
    logic: "Web sayfalarını birbirine bağlayan köprüler (<a>) ve kullanıcının tıklayarak işlem başlatmasını sağlayan butonlar (<button>) etkileşimin temelidir.",
    syntaxRules: [
      "<code>&lt;a href=\"url\"&gt;Metin&lt;/a&gt;</code> : Hedef adrese yönlendiren köprü metni.",
      "<code>target=\"_blank\" rel=\"noopener\"</code> : Linki yeni sekmede güvenle açar.",
      "<code>href=\"#projeler\"</code> : Sayfa içindeki ilgili ID'ye pürüzsüz kaydırma yapar.",
      "<code>href=\"mailto:info@site.com\"</code> : E-posta istemcisini açar.",
      "<code>&lt;button type=\"button\"&gt;Tıkla&lt;/button&gt;</code> : Tıklanabilir aksiyon butonu."
    ],
    pitfalls: [
      "⚠️ <code>href</code> özniteliği yazılmazsa <code>&lt;a&gt;</code> etiketi tıklanabilir bir bağlantı oluşturmaz.",
      "⚠️ Yeni sekmede açılan linklerde güvenlik açığını engellemek için <code>rel=\"noopener\"</code> eklenmelidir.",
      "⚠️ Sayfa içi çapalarda <code>href=\"#bolum\"</code> formatındaki kare (<code>#</code>) işareti unutulmamalıdır."
    ],
    exampleCode: "<a href=\"#projeler\" class=\"btn\">Projelerimi Keşfet</a>\n<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">GitHub</a>\n<button type=\"button\" class=\"btn-cta\">Hemen Başla</button>"
  },

  html_4: {
    title: "Görseller & Medya Vitrini (Images)",
    readTime: "2 dk okuma",
    rewardText: "🖼️ Canlı Vitrin Görseli & Banner",
    logic: "Görseller web sitesinin vitrinidir. <img> etiketi görseli sayfaya bağlar; <figure> ve <figcaption> ile görsel açıklaması semantik olarak zenginleştirilir.",
    syntaxRules: [
      "<code>&lt;img src=\"resim.jpg\" alt=\"Açıklama\"&gt;</code> : Görsel kaynağı ve alternatif metin.",
      "<code>width=\"600\" height=\"350\"</code> : Piksel cinsinden görsel boyutları.",
      "<code>alt=\"...\"</code> : Ekran okuyucular ve görsel yüklenemediğinde görünen erişilebilirlik metni.",
      "<code>&lt;figure&gt; &lt;figcaption&gt;...&lt;/figcaption&gt; &lt;/figure&gt;</code> : Görseli alt yazısıyla gruplar."
    ],
    pitfalls: [
      "⚠️ <code>alt</code> özniteliği asla boş bırakılmamalıdır; SEO ve erişilebilirlik için kritik önemdedir.",
      "⚠️ <code>&lt;img&gt;</code> tekil bir etikettir, <code>&lt;/img&gt;</code> şeklinde kapatılmaz.",
      "⚠️ Dosya uzantılarında büyük-küçük harf duyarlılığına (.jpg, .png) dikkat edilmelidir."
    ],
    exampleCode: "<figure>\n  <img src=\"banner.jpg\" alt=\"TechNova Proje Vitrini\" width=\"600\" height=\"320\">\n  <figcaption>Modern Web Mimarisi ve Tasarım Vitrini</figcaption>\n</figure>"
  },

  html_5: {
    title: "Yetenek & Teknoloji Listeleri (Lists)",
    readTime: "2 dk okuma",
    rewardText: "📋 Özellikler & Menü Listesi",
    logic: "İçerikleri maddeler halinde sunmak, özellik setlerini listelemek ve navigasyon menüleri oluşturmak için <ul>, <ol> ve <dl> listeleri kullanılır.",
    syntaxRules: [
      "<code>&lt;ul&gt; &lt;li&gt;Madde&lt;/li&gt; &lt;/ul&gt;</code> : Madde işaretli sırasız liste.",
      "<code>&lt;ol&gt; &lt;li&gt;Adım&lt;/li&gt; &lt;/ol&gt;</code> : Numaralandırılmış sıralı liste.",
      "<code>&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;</code> : Terim ve tanım ikilileri sunan tanım listesi.",
      "İç içe liste: Bir <code>&lt;li&gt;</code> içerisine yeni bir <code>&lt;ul&gt;</code> eklenerek hiyerarşi kurulur."
    ],
    pitfalls: [
      "⚠️ <code>&lt;ul&gt;</code> veya <code>&lt;ol&gt;</code> etiketinin doğrudan içine sadece <code>&lt;li&gt;</code> yazılabilir.",
      "⚠️ Liste elemanlarının kapanış <code>&lt;/li&gt;</code> etiketlerini unutmak sayfa düzenini bozar.",
      "⚠️ Sayısal adımlar gerektiren rehberlerde <code>&lt;ul&gt;</code> yerine <code>&lt;ol&gt;</code> tercih edilmelidir."
    ],
    exampleCode: "<ul>\n  <li>HTML5 & Semantik Mimari</li>\n  <li>Modern Responsive Tasarım</li>\n  <li>Yüksek Sayfa Hızı</li>\n</ul>"
  },

  html_6: {
    title: "Hizmet & Paket Tablosu (Tables)",
    readTime: "2 dk okuma",
    rewardText: "📊 Fiyatlandırma & Paket Tablosu",
    logic: "Hizmet paketleri, özellik karşılaştırmaları ve istatistikleri düzenli satır ve sütunlar halinde sunmak için HTML tabloları kullanılır.",
    syntaxRules: [
      "<code>&lt;table&gt; ... &lt;/table&gt;</code> : Tablo kapsayıcısı.",
      "<code>&lt;caption&gt;Başlık&lt;/caption&gt;</code> : Tablonun genel başlığı ve açıklaması.",
      "<code>&lt;tr&gt; ... &lt;/tr&gt;</code> : Tablo satırı (Table Row).",
      "<code>&lt;th&gt;Başlık&lt;/th&gt;</code> : Kalın ve ortalı başlık hücresi (Table Header).",
      "<code>&lt;td&gt;Veri&lt;/td&gt;</code> : Standart veri hücresi (Table Data)."
    ],
    pitfalls: [
      "⚠️ Hücreler (th, td) doğrudan tablo içine değil, mutlaka bir satırın (<code>&lt;tr&gt;</code>) içine yazılmalıdır.",
      "⚠️ Her satırdaki toplam hücre sayısının sütun adediyle eşit olmasına dikkat edilmelidir.",
      "⚠️ Tablo sadece tabular veriler için kullanılmalıdır; sayfa düzeni (layout) için div/flexbox tercih edilmelidir."
    ],
    exampleCode: "<table>\n  <caption>Hizmet Paketleri</caption>\n  <tr>\n    <th>Paket</th>\n    <th>Teslimat</th>\n    <th>Fiyat</th>\n  </tr>\n  <tr>\n    <td>Başlangıç</td>\n    <td>3 Gün</td>\n    <td>₺1.500</td>\n  </tr>\n</table>"
  },

  html_7: {
    title: "İleri Tablolar (Colspan, Rowspan, Thead & Tbody)",
    readTime: "3 dk okuma",
    rewardText: "📈 Profesyonel Veri Tablosu",
    logic: "Tabloları kurumsal standartta bölümlere ayırmak (thead, tbody, tfoot) ve hücreleri yatayda (colspan) veya dikeyde (rowspan) birleştirmek için kullanılır.",
    syntaxRules: [
      "<code>&lt;thead&gt; ... &lt;/thead&gt;</code> : Tablo başlık satırını gruplar.",
      "<code>&lt;tbody&gt; ... &lt;/tbody&gt;</code> : Tablonun ana veri gövdesini tutar.",
      "<code>&lt;tfoot&gt; ... &lt;/tfoot&gt;</code> : Tablonun dipnot ve toplam satırını tutar.",
      "<code>colspan=\"2\"</code> : Hücreyi yatayda 2 sütun genişliğinde birleştirir.",
      "<code>rowspan=\"2\"</code> : Hücreyi dikeyde 2 satır yüksekliğinde birleştirir."
    ],
    pitfalls: [
      "⚠️ <code>colspan</code> kullanıldığında birleşen sonraki sütunlardaki <code>&lt;td&gt;</code> etiketleri silinmelidir.",
      "⚠️ <code>thead</code> içinde <code>th</code>, <code>tbody</code> içinde <code>td</code> kullanılması semantik açıdan önerilir.",
      "⚠️ <code>tfoot</code> tablonun en alt satırı olarak sunulur."
    ],
    exampleCode: "<table>\n  <thead>\n    <tr><th>Hizmet</th><th>Kapsam</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Web Geliştirme</td><td>Full Responsive</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td colspan=\"2\">Tüm paketlerde 1 yıl destek dahildir.</td></tr>\n  </tfoot>\n</table>"
  },

  html_8: {
    title: "Konteyner Düzeni & Kart Mimarisi (Div & Span)",
    readTime: "2 dk okuma",
    rewardText: "🗂️ Modern Kart Düzeni & Rozetler",
    logic: "Sayfadaki blokları modüler kartlara ayırmak için blok düzeyli <div>, metin içindeki kelimeleri rozetleştirmek için satır içi <span> konteynerleri kullanılır.",
    syntaxRules: [
      "<code>&lt;div class=\"card\"&gt; ... &lt;/div&gt;</code> : Blok düzeyinde içerik kartı kapsayıcısı.",
      "<code>&lt;span class=\"badge\"&gt;Yeni&lt;/span&gt;</code> : Satır içi stil ve vurgu konteyneri.",
      "<code>id=\"benzersiz-id\"</code> : Sayfada yalnızca 1 kez kullanılan tekil kimlik.",
      "<code>class=\"kart-stili\"</code> : Birden fazla elemana uygulanabilen sınıf adı."
    ],
    pitfalls: [
      "⚠️ <code>&lt;span&gt;</code> içine blok elemanlar (div, p, h1) yerleştirilmemelidir.",
      "⚠️ Aynı <code>id</code> sayfada birden fazla elemana verilmemelidir; tekrar eden yapılar için <code>class</code> kullanılmalıdır.",
      "⚠️ Anlamsal bir HTML5 etiketi (article, section) varken gereksiz yere her yere salt div koymaktan (div çorbası) kaçınılmalıdır."
    ],
    exampleCode: "<div class=\"project-card\" id=\"featured-project\">\n  <span class=\"badge\">POPÜLER</span>\n  <h3>E-Ticaret Vitrini</h3>\n  <p>Yüksek dönüşümlü modern alışveriş arayüzü.</p>\n</div>"
  },

  html_9: {
    title: "Temel İletişim Formu (Form & Inputs)",
    readTime: "3 dk okuma",
    rewardText: "✉️ Etkileşimli İletişim Formu",
    logic: "Ziyaretçilerden ad, e-posta, telefon ve onay verisi toplamak için <form> ve <input> elemanları kullanılır; her input bir <label> ile erişilebilir kılınır.",
    syntaxRules: [
      "<code>&lt;form action=\"/gonder\" method=\"POST\"&gt;</code> : Form kapsayıcısı ve gönderim adresi.",
      "<code>&lt;label for=\"isim\"&gt;Adınız:&lt;/label&gt;</code> : Tıklanabilir etiket tanımı.",
      "<code>&lt;input type=\"text\" id=\"isim\" name=\"isim\" required&gt;</code> : Tek satırlık metin girişi.",
      "<code>&lt;input type=\"email\" id=\"eposta\" name=\"eposta\" placeholder=\"ornek@mail.com\"&gt;</code> : E-posta doğrulayıcılı input.",
      "<code>&lt;input type=\"checkbox\" id=\"onay\" name=\"onay\"&gt;</code> : Onay kutusu."
    ],
    pitfalls: [
      "⚠️ <code>label</code> etiketindeki <code>for</code> değeri ile <code>input</code> etiketindeki <code>id</code> değeri birebir eşleşmelidir.",
      "⚠️ Sunucuya veri aktarımı için her inputun mutlaka bir <code>name</code> özniteliği olmalıdır.",
      "⚠️ Zorunlu alanlar için <code>required</code> anahtar kelimesi unutulmamalıdır."
    ],
    exampleCode: "<form action=\"/iletisim\" method=\"POST\">\n  <label for=\"ad\">Adınız:</label>\n  <input type=\"text\" id=\"ad\" name=\"ad\" required placeholder=\"Adınızı girin\">\n  <label for=\"mail\">E-Posta:</label>\n  <input type=\"email\" id=\"mail\" name=\"mail\" required>\n</form>"
  },

  html_10: {
    title: "Gelişmiş Form Kontrolleri & Gönder Butonu",
    readTime: "2 dk okuma",
    rewardText: "🚀 Form Gönder Butonu & Seçim Alanı",
    logic: "Çok satırlı mesaj alanları (<textarea>), açılır seçim listeleri (<select>), mantıksal gruplar (<fieldset>) ve formu tetikleyen gönder butonu (<button type='submit'>).",
    syntaxRules: [
      "<code>&lt;textarea id=\"mesaj\" name=\"mesaj\" rows=\"4\"&gt;&lt;/textarea&gt;</code> : Çok satırlı metin kutusu.",
      "<code>&lt;select name=\"hizmet\"&gt; &lt;option value=\"web\"&gt;Web&lt;/option&gt; &lt;/select&gt;</code> : Açılır liste.",
      "<code>&lt;fieldset&gt; &lt;legend&gt;Başlık&lt;/legend&gt; ... &lt;/fieldset&gt;</code> : Form alanlarını çerçeveler.",
      "<code>&lt;button type=\"submit\"&gt;Gönder&lt;/button&gt;</code> : Formu sunucuya postalayan buton.",
      "<code>&lt;input type=\"hidden\" name=\"token\" value=\"123\"&gt;</code> : Arka plan teknik verisi."
    ],
    pitfalls: [
      "⚠️ <code>&lt;textarea&gt;</code> tekil değil ikili bir etikettir; <code>&lt;/textarea&gt;</code> ile kapatılmalıdır.",
      "⚠️ Form göndermek için butonun <code>type=\"submit\"</code> olması standarttır.",
      "⚠️ <code>select</code> içindeki <code>option</code> elemanlarına mutlaka <code>value</code> atanmalıdır."
    ],
    exampleCode: "<fieldset>\n  <legend>Proje Talebi</legend>\n  <select name=\"paket\">\n    <option value=\"pro\">Pro Paket</option>\n  </select>\n  <textarea name=\"mesaj\" placeholder=\"Mesajınız...\"></textarea>\n  <button type=\"submit\">Teklif Al</button>\n</fieldset>"
  },

  html_11: {
    title: "Semantik HTML5 Mimarisi (Semantic Layout)",
    readTime: "3 dk okuma",
    rewardText: "🏛️ Semantik Sayfa Omurgası",
    logic: "Web sayfalarını anlamsal bloklara ayırarak hem ekran okuyuculara hem de Google gibi arama motorlarına sayfanın mimarisini anlatır.",
    syntaxRules: [
      "<code>&lt;header&gt; ... &lt;/header&gt;</code> : Site başlığı, logo ve üst alan.",
      "<code>&lt;nav&gt; ... &lt;/nav&gt;</code> : Ana menü ve gezinti linkleri.",
      "<code>&lt;main&gt; ... &lt;/main&gt;</code> : Sayfanın ana, benzersiz içerik gövdesi.",
      "<code>&lt;section&gt; ... &lt;/section&gt;</code> : Tematik konu ve içerik bölümleri.",
      "<code>&lt;article&gt; ... &lt;/article&gt;</code> : Kendi başına anlamlı bağımsız içerik veya kart.",
      "<code>&lt;footer&gt; ... &lt;/footer&gt;</code> : Telif, iletişim ve alt bilgi alanı."
    ],
    pitfalls: [
      "⚠️ Bir sayfada yalnızca bir adet <code>&lt;main&gt;</code> etiketi bulunmalıdır.",
      "⚠️ Her <code>&lt;section&gt;</code> içinde genellikle konuyu belirten bir başlık (h2-h6) yer almalıdır.",
      "⚠️ Yalnızca tasarım için stil vermek amacıyla semantik etiketler rastgele kullanılmamalıdır."
    ],
    exampleCode: "<header>\n  <nav><ul><li><a href=\"#ev\">Anasayfa</a></li></ul></nav>\n</header>\n<main>\n  <section>\n    <h2>Hizmetlerimiz</h2>\n  </section>\n</main>\n<footer>\n  <p>&copy; 2026 TechNova</p>\n</footer>"
  },

  html_12: {
    title: "Multimedya & Gömülü İçerikler (Video, Audio & Iframe)",
    readTime: "2 dk okuma",
    rewardText: "🎬 Tanıtım Videosu & Canlı Medya",
    logic: "Web projelerine video oynatıcıları, podcast veya arka plan sesleri ve harici YouTube / harita içerikleri gömmek için kullanılır.",
    syntaxRules: [
      "<code>&lt;video src=\"video.mp4\" controls width=\"600\"&gt;&lt;/video&gt;</code> : Oynatma kontrollü yerel video.",
      "<code>&lt;source src=\"video.mp4\" type=\"video/mp4\"&gt;</code> : Farklı video formatı alternatifleri.",
      "<code>&lt;audio src=\"ses.mp3\" controls&gt;&lt;/audio&gt;</code> : Ses oynatıcı.",
      "<code>&lt;iframe src=\"url\" title=\"Açıklama\" width=\"560\" height=\"315\"&gt;&lt;/iframe&gt;</code> : Gömülü çerçeve.",
      "<code>&lt;details&gt; &lt;summary&gt;Başlık&lt;/summary&gt; İçerik &lt;/details&gt;</code> : Açılır-kapanır akordiyon kutusu."
    ],
    pitfalls: [
      "⚠️ <code>controls</code> özniteliği eklenmezse kullanıcı videoyu oynatamaz veya sesini ayarlayamaz.",
      "⚠️ <code>iframe</code> etiketlerinde erişilebilirlik ve ekran okuyucular için mutlaka anlamlı bir <code>title</code> verilmelidir.",
      "⚠️ Web tarayıcıları kullanıcı izni olmadan sesli otomatik oynatmaya (autoplay) izin vermez."
    ],
    exampleCode: "<video controls width=\"560\">\n  <source src=\"tanitim.mp4\" type=\"video/mp4\">\n  Tarayıcınız video oynatmayı desteklemiyor.\n</video>\n<iframe src=\"https://www.youtube.com/embed/demo\" title=\"Proje Demosu\"></iframe>"
  },

  html_13: {
    title: "Head, Meta Etiketleri & SEO Mimarisi",
    readTime: "2 dk okuma",
    rewardText: "🌐 SEO & Mobil Uyumluluk Kalkanı",
    logic: "Kullanıcıya doğrudan görünmeyen ancak arama motorları, sosyal medya ve mobil tarayıcılar için sayfanın kimliğini belirleyen meta etiketleri.",
    syntaxRules: [
      "<code>&lt;meta charset=\"UTF-8\"&gt;</code> : Türkçe karakterlerin doğru görünmesini sağlar.",
      "<code>&lt;meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"&gt;</code> : Mobil uyumluluk.",
      "<code>&lt;meta name=\"description\" content=\"Açıklama\"&gt;</code> : Google arama sonuçlarındaki açıklama metni.",
      "<code>&lt;link rel=\"icon\" type=\"image/png\" href=\"favicon.png\"&gt;</code> : Tarayıcı sekme ikonu.",
      "<code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code> : Harici stil dosyasını bağlar."
    ],
    pitfalls: [
      "⚠️ Meta etiketleri mutlaka <code>&lt;head&gt;</code> içinde yer almalıdır, <code>&lt;body&gt;</code> içine yazılmaz.",
      "⚠️ <code>viewport</code> meta etiketi eklenmezse mobil cihazlar sayfayı masaüstü boyutunda küçülterek bozuk gösterir.",
      "⚠️ <code>charset=\"UTF-8\"</code> tanımı head içindeki ilk etiketlerden biri olmalıdır."
    ],
    exampleCode: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"description\" content=\"TechNova yenilikçi dijital web portfolyosu.\">\n  <link rel=\"icon\" href=\"favicon.png\">\n  <link rel=\"stylesheet\" href=\"style.css\">\n  <title>TechNova Web Studio</title>\n</head>"
  },

  html_14: {
    title: "Büyük Canlı Proje Lansmanı & Yayın",
    readTime: "3 dk okuma",
    rewardText: "🏆 Canlı Yayında Web Portfolyosu",
    logic: "Öğrenilen tüm HTML5 standartlarını, semantik iskeleti, formları, tabloları, medyayı ve meta etiketlerini birleştirerek canlı yayına hazır profesyonel bir web vitrini oluşturma.",
    syntaxRules: [
      "Standart HTML5 doküman iskeleti ve head meta ayarları.",
      "Semantik header, nav menüsü ve h1 ana başlığı.",
      "Görsel vitrini (figure/img) ve aksiyon butonları.",
      "Hizmet paket tablosu ve interaktif iletişim formu.",
      "Semantik footer ile telif hakları bildirimi ve kapanış."
    ],
    pitfalls: [
      "⚠️ Tüm açılan etiketlerin hiyerarşik sırada doğru şekilde kapatıldığından emin olun.",
      "⚠️ Kod girintilerini (indentation) temiz ve okunabilir tutun.",
      "⚠️ Sayfada en az bir <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code> ve <code>&lt;footer&gt;</code> bulundurun."
    ],
    exampleCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>TechNova Canlı Proje</title>\n</head>\n<body>\n  <header><h1>TechNova Studio</h1></header>\n  <main><p>Canlı Web Vitrinimiz Yayında!</p></main>\n  <footer><p>&copy; 2026 TechNova</p></footer>\n</body>\n</html>"
  }
};

const HTML_CHALLENGES = {
  html_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1 • ADIM 1/5: DOKÜMAN TÜRÜ",
      title: "1. Görev: HTML5 Doctype Bildirimi",
      prompt: "TechNova web sitemizi kurmaya başlıyoruz! Tarayıcıya bu belgenin modern bir HTML5 dokümanı olduğunu bildiren doküman türü (DOCTYPE) bildirimini yazabilir misin?",
      presetCode: "<!-- 1. Adım: HTML5 Doküman Türü Bildirimini Yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<!DOCTYPE html>", "<!DOCTYPE", "html>", "<", ">"],
      hint: "<!DOCTYPE html>",
      solution: "<!DOCTYPE html>",
      validator: (code) => {
        const clean = code.trim();
        if (/<!DOCTYPE\s+html>/i.test(clean)) {
          return { ok: true, msg: "Harika! HTML5 Doctype bildirimi başarıyla tanımlandı. Sayfa temeli atıldı! ✓" };
        }
        return { ok: false, msg: "Hata: Lütfen en başa <!DOCTYPE html> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1 • ADIM 2/5: KÖK ELEMAN",
      title: "2. Görev: Türkçe Kök Eleman (HTML)",
      prompt: "Tüm web projemizi sarmalayacak olan ve sayfa dilini Türkçe ('tr') olarak belirten kök html etiketini açıp kapatabilir misin?",
      presetCode: "<!DOCTYPE html>\n<!-- lang='tr' özniteliğine sahip html etiketini açın ve kapatın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<html lang=\"tr\">", "</html>", "lang=\"tr\"", "<html", ">"],
      hint: "<!DOCTYPE html>\n<html lang=\"tr\">\n</html>",
      solution: "<!DOCTYPE html>\n<html lang=\"tr\">\n</html>",
      validator: (code) => {
        const clean = code.trim();
        if (/<html\s+lang\s*=\s*["']tr["']\s*>[\s\S]*<\/html>/i.test(clean)) {
          return { ok: true, msg: "Süper! Türkçe dil öznitelikli kök html etiketi oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <html lang=\"tr\"> ... </html> etiketini eksiksiz yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1 • ADIM 3/5: TEKNİK BÖLÜM (HEAD)",
      title: "3. Görev: Head Bölümünü Tanımla",
      prompt: "Sayfamızın teknik başlık ve ayarlarını tutacak olan head etiketini html etiketinin içine yerleştirebilir misin?",
      presetCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <!-- head etiketini buraya ekleyin -->\n</html>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<head>", "</head>", "  <head>\n  </head>"],
      hint: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <head>\n  </head>\n</html>",
      solution: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <head>\n  </head>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        if (/<head\s*>[\s\S]*<\/head\s*>/i.test(clean)) {
          return { ok: true, msg: "Çok iyi! Projemizin teknik <head> alanı başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <head></head> etiketlerini html etiketinin içine ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1 • ADIM 4/5: SEKME BAŞLIĞI (TITLE)",
      title: "4. Görev: Tarayıcı Sekme Başlığı",
      prompt: "Ziyaretçilerin tarayıcı sekmesinde 'TechNova Studio' görmesi için head içine sayfa başlığı etiketini ekleyebilir misin?",
      presetCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <head>\n    <!-- title etiketini buraya ekleyin -->\n  </head>\n</html>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<title>TechNova Studio</title>", "<title>", "</title>", "TechNova Studio"],
      hint: "<head>\n    <title>TechNova Studio</title>\n  </head>",
      solution: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <head>\n    <title>TechNova Studio</title>\n  </head>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        if (/<title\s*>\s*TechNova Studio\s*<\/title\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Sekme başlığı 'TechNova Studio' olarak ayarlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <title>TechNova Studio</title> etiketini head içine ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1 • ADIM 5/5: GÖVDE (BODY) & TAM İSKELET",
      title: "5. Görev: Görsel Gövdeyi Aç ve İskeleti Tamamla",
      prompt: "Tebrikler! Şimdi projemizin kullanıcıya görünecek tüm içeriğini tutacak olan body gövde etiketini head etiketinden hemen sonra ekleyerek ilk temel iskeleti tamamla!",
      presetCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <head>\n    <title>TechNova Studio</title>\n  </head>\n  <!-- body etiketini açıp kapatın -->\n</html>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<body>", "</body>", "  <body>\n  </body>"],
      hint: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <head>\n    <title>TechNova Studio</title>\n  </head>\n  <body>\n  </body>\n</html>",
      solution: "<!DOCTYPE html>\n<html lang=\"tr\">\n  <head>\n    <title>TechNova Studio</title>\n  </head>\n  <body>\n  </body>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        const hasDoc = /<!DOCTYPE\s+html>/i.test(clean);
        const hasHead = /<head\s*>[\s\S]*<\/head\s*>/i.test(clean);
        const hasBody = /<body\s*>[\s\S]*<\/body\s*>/i.test(clean);
        const hasHtml = /<html[^>]*>[\s\S]*<\/html\s*>/i.test(clean);
        if (hasDoc && hasHead && hasBody && hasHtml) {
          return { ok: true, msg: "🎉 TEBRİKLER! Projenin 1. temel iskeletini bizzat kodladın. Şimdi içerik ekleme vakti! ✓" };
        }
        return { ok: false, msg: "Hata: DOCTYPE, html, head ve body etiketlerini eksiksiz şekilde kapatın." };
      }
    }
  ],

  html_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2 • ADIM 1/5: ANA BAŞLIK (H1)",
      title: "1. Görev: Projenin Görkemli Ana Başlığı",
      prompt: "Projemizin en tepesinde yer alacak ana başlığı 'TechNova Web Studio' metniyle body içine ekleyebilir misin?",
      presetCode: "<body>\n  <!-- h1 başlığını buraya ekleyin -->\n</body>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<h1>TechNova Web Studio</h1>", "<h1>", "</h1>", "TechNova Web Studio"],
      hint: "<body>\n  <h1>TechNova Web Studio</h1>\n</body>",
      solution: "<body>\n  <h1>TechNova Web Studio</h1>\n</body>",
      validator: (code) => {
        const clean = code.trim();
        if (/<h1\s*>\s*TechNova Web Studio\s*<\/h1\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Projenin ana başlığı (h1) vitrinde yerini aldı! ✓" };
        }
        return { ok: false, msg: "Hata: <h1>TechNova Web Studio</h1> etiketini ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2 • ADIM 2/5: ALT BAŞLIK (H2)",
      title: "2. Görev: Alt Başlık ile Vizyonunu Belirt",
      prompt: "Ana başlığın hemen altına 'Geleceğin Dijital Deneyimleri' metnini içeren alt başlığı ekleyebilir misin?",
      presetCode: "<body>\n  <h1>TechNova Web Studio</h1>\n  <!-- h2 alt başlığını ekleyin -->\n</body>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<h2>Geleceğin Dijital Deneyimleri</h2>", "<h2>", "</h2>"],
      hint: "<h2>Geleceğin Dijital Deneyimleri</h2>",
      solution: "<body>\n  <h1>TechNova Web Studio</h1>\n  <h2>Geleceğin Dijital Deneyimleri</h2>\n</body>",
      validator: (code) => {
        const clean = code.trim();
        if (/<h2\s*>\s*Geleceğin Dijital Deneyimleri\s*<\/h2\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Hiyerarşik alt başlık (h2) başarıyla yerleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: <h2>Geleceğin Dijital Deneyimleri</h2> etiketini h1'in altına ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2 • ADIM 3/5: TANITIM PARAGRAFI",
      title: "3. Görev: Kendini ve Projeni Tanıtan Paragraf",
      prompt: "Alt başlığın altına 'Modern web teknolojileri ile kullanıcı dostu arayüzler tasarlıyor ve kodluyoruz.' tanıtım paragrafını ekle.",
      presetCode: "<body>\n  <h1>TechNova Web Studio</h1>\n  <h2>Geleceğin Dijital Deneyimleri</h2>\n  <!-- Tanıtım paragrafını buraya ekleyin -->\n</body>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<p>", "</p>", "Modern web teknolojileri ile kullanıcı dostu arayüzler tasarlıyor ve kodluyoruz."],
      hint: "<p>Modern web teknolojileri ile kullanıcı dostu arayüzler tasarlıyor ve kodluyoruz.</p>",
      solution: "<body>\n  <h1>TechNova Web Studio</h1>\n  <h2>Geleceğin Dijital Deneyimleri</h2>\n  <p>Modern web teknolojileri ile kullanıcı dostu arayüzler tasarlıyor ve kodluyoruz.</p>\n</body>",
      validator: (code) => {
        const clean = code.trim();
        if (/<p\s*>[\s\S]*tasarlıyor ve kodluyoruz\.?[\s\S]*<\/p\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Tanıtım paragrafı ekrana geldi, projenin hikayesi oluşuyor. ✓" };
        }
        return { ok: false, msg: "Hata: İstenen <p>...</p> tanıtım paragrafını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2 • ADIM 4/5: GÜÇLÜ VURGU (STRONG & EM)",
      title: "4. Görev: Önemli Kelimeleri Vurgula",
      prompt: "Paragraf içindeki 'Modern' kelimesini güçlü kalın vurguyla (strong), 'arayüzler' kelimesini ise eğik vurguyla (em) çevreleyebilir misin?",
      presetCode: "<p>Modern web teknolojileri ile kullanıcı dostu arayüzler tasarlıyor ve kodluyoruz.</p>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<strong>Modern</strong>", "<em>arayüzler</em>", "<strong>", "</strong>", "<em>", "</em>"],
      hint: "<p><strong>Modern</strong> web teknolojileri ile kullanıcı dostu <em>arayüzler</em> tasarlıyor ve kodluyoruz.</p>",
      solution: "<p><strong>Modern</strong> web teknolojileri ile kullanıcı dostu <em>arayüzler</em> tasarlıyor ve kodluyoruz.</p>",
      validator: (code) => {
        const clean = code.trim();
        const hasStrong = /<strong\s*>\s*Modern\s*<\/strong\s*>/i.test(clean);
        const hasEm = /<em\s*>\s*arayüzler\s*<\/em\s*>/i.test(clean);
        if (hasStrong && hasEm) {
          return { ok: true, msg: "Süper! Metin anlamsal vurgularla çok daha profesyonel hale geldi. ✓" };
        }
        return { ok: false, msg: "Hata: <strong>Modern</strong> ve <em>arayüzler</em> etiketlerini uygulayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2 • ADIM 5/5: TEMATİK AYIRICI (HR)",
      title: "5. Görev: Bölüm Sonuna Ayırıcı Çizgi Çek",
      prompt: "Karşılama bölümünün hemen sonuna tematik yatay ayırıcı çizgi (hr) ekle!",
      presetCode: "<body>\n  <h1>TechNova Web Studio</h1>\n  <h2>Geleceğin Dijital Deneyimleri</h2>\n  <p><strong>Modern</strong> web teknolojileri ile kullanıcı dostu <em>arayüzler</em> tasarlıyor ve kodluyoruz.</p>\n  <!-- hr çizgisini ekleyin -->\n</body>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<hr>", "<hr />"],
      hint: "<hr>",
      solution: "<body>\n  <h1>TechNova Web Studio</h1>\n  <h2>Geleceğin Dijital Deneyimleri</h2>\n  <p><strong>Modern</strong> web teknolojileri ile kullanıcı dostu <em>arayüzler</em> tasarlıyor ve kodluyoruz.</p>\n  <hr>\n</body>",
      validator: (code) => {
        const clean = code.trim();
        if (/<hr\s*\/?>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 2. Modül tamamlandı: Başlıklar ve metinler projeye can verdi! 🚀" };
        }
        return { ok: false, msg: "Hata: Paragrafın sonuna <hr> etiketi ekleyin." };
      }
    }
  ],

  html_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3 • ADIM 1/5: SAYFA İÇİ KÖPRÜ (LINK)",
      title: "1. Görev: Projeleri Keşfet Çapa Linki",
      prompt: "Ziyaretçinin tıkladığında sayfanın projeler kısmına kayması için üzerinde 'Projelerimi Keşfet' yazan çapa bağlantısını ('#projeler') ekleyebilir misin?",
      presetCode: "<!-- Projeler köprü bağlantısını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"#projeler\">Projelerimi Keşfet</a>", "<a href=\"#projeler\">", "</a>", "Projelerimi Keşfet"],
      hint: "<a href=\"#projeler\">Projelerimi Keşfet</a>",
      solution: "<a href=\"#projeler\">Projelerimi Keşfet</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']#projeler["'][^>]*>\s*Projelerimi Keşfet\s*<\/a\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Sayfa içi çapa (#projeler) linki başarıyla bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <a href=\"#projeler\">Projelerimi Keşfet</a> etiketini yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3 • ADIM 2/5: DIŞ GÜVENLİ BAĞLANTI (GITHUB)",
      title: "2. Görev: Yeni Sekmede Açılan GitHub Linki",
      prompt: "Portfolyomuza 'https://github.com' adresine yönlendiren, yeni sekmede güvenle açılan (target='_blank' ve rel='noopener') ve üzerinde 'GitHub Profilim' yazan dış bağlantıyı ekle.",
      presetCode: "<!-- GitHub dış bağlantısını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">GitHub Profilim</a>", "target=\"_blank\"", "rel=\"noopener\""],
      hint: "<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">GitHub Profilim</a>",
      solution: "<a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">GitHub Profilim</a>",
      validator: (code) => {
        const clean = code.trim();
        const hasUrl = /href\s*=\s*["']https?:\/\/github\.com["']/i.test(clean);
        const hasTarget = /target\s*=\s*["']_blank["']/i.test(clean);
        const hasRel = /rel\s*=\s*["'][^"']*noopener[^"']*["']/i.test(clean);
        if (hasUrl && hasTarget && hasRel) {
          return { ok: true, msg: "Mükemmel! Güvenli ve yeni sekmede açılan GitHub bağlantısı hazır! ✓" };
        }
        return { ok: false, msg: "Hata: <a href=\"https://github.com\" target=\"_blank\" rel=\"noopener\">GitHub Profilim</a> şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3 • ADIM 3/5: E-POSTA BAĞLANTISI (MAILTO)",
      title: "3. Görev: Tek Tıkla E-Posta Gönderme Linki",
      prompt: "'iletisim@technova.com' adresine doğrudan e-posta göndermek üzere ayarlanmış ve metni 'Bize Ulaşın' olan bağlantıyı ekle.",
      presetCode: "<!-- Mailto bağlantısını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"mailto:iletisim@technova.com\">Bize Ulaşın</a>", "href=\"mailto:iletisim@technova.com\""],
      hint: "<a href=\"mailto:iletisim@technova.com\">Bize Ulaşın</a>",
      solution: "<a href=\"mailto:iletisim@technova.com\">Bize Ulaşın</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']mailto:iletisim@technova\.com["'][^>]*>\s*Bize Ulaşın\s*<\/a\s*>/i.test(clean)) {
          return { ok: true, msg: "Süper! Mailto tetikleyici linki projeye entegre edildi. ✓" };
        }
        return { ok: false, msg: "Hata: <a href=\"mailto:iletisim@technova.com\">Bize Ulaşın</a> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3 • ADIM 4/5: İNDİRME LİNKİ (DOWNLOAD)",
      title: "4. Görev: Özgeçmiş / CV İndirme Bağlantısı",
      prompt: "'cv.pdf' dosyasını tek tıkla indirmeyi sağlayan ve metni 'CV İndir (PDF)' olan indirme bağlantısını oluşturabilir misin?",
      presetCode: "<!-- download öznitelikli linki ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"cv.pdf\" download>CV İndir (PDF)</a>", "download", "href=\"cv.pdf\""],
      hint: "<a href=\"cv.pdf\" download>CV İndir (PDF)</a>",
      solution: "<a href=\"cv.pdf\" download>CV İndir (PDF)</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']cv\.pdf["'][^>]*\s+download[^>]*>\s*CV İndir \(PDF\)\s*<\/a\s*>/i.test(clean) ||
            /<a\s+[^>]*download[^>]*\s+href\s*=\s*["']cv\.pdf["'][^>]*>\s*CV İndir \(PDF\)\s*<\/a\s*>/i.test(clean)) {
          return { ok: true, msg: "Çok iyi! Dosya indirme (download) linki hazırlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <a href=\"cv.pdf\" download>CV İndir (PDF)</a> etiketini yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3 • ADIM 5/5: AKSİYON BUTONU (BUTTON)",
      title: "5. Görev: İnteraktif 'Hemen Başla' Aksiyon Butonu",
      prompt: "Sayfamıza 'btn-primary' sınıfına sahip, üzerinde 'Hemen Başla 🚀' yazan bir aksiyon butonu ekle!",
      presetCode: "<!-- Aksiyon butonunu buraya ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<button type=\"button\" class=\"btn-primary\">Hemen Başla 🚀</button>", "type=\"button\"", "class=\"btn-primary\""],
      hint: "<button type=\"button\" class=\"btn-primary\">Hemen Başla 🚀</button>",
      solution: "<button type=\"button\" class=\"btn-primary\">Hemen Başla 🚀</button>",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+[^>]*type\s*=\s*["']button["'][^>]*class\s*=\s*["']btn-primary["'][^>]*>[\s\S]*Hemen Başla[\s\S]*<\/button\s*>/i.test(clean) ||
            /<button\s+[^>]*class\s*=\s*["']btn-primary["'][^>]*type\s*=\s*["']button["'][^>]*>[\s\S]*Hemen Başla[\s\S]*<\/button\s*>/i.test(clean)) {
          return { ok: true, msg: "🎉 TEBRİKLER! Projeniz artık tıklanabilir butonlara ve canlı linklere sahip! ✓" };
        }
        return { ok: false, msg: "Hata: <button type=\"button\" class=\"btn-primary\">Hemen Başla 🚀</button> yazın." };
      }
    }
  ],

  html_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4 • ADIM 1/5: VİTRİN GÖRSELİ (IMG)",
      title: "1. Görev: Projenin Ana Vitrin Görseli",
      prompt: "Projemizi görsel olarak canlandıralım! Kaynak yolu 'vitrin.jpg' ve açıklayıcı alternatif metni 'TechNova Proje Vitrini' olan görsel etiketini yazabilir misin?",
      presetCode: "<!-- Vitrin görselini buraya ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\">", "<img src=\"vitrin.jpg\"", "alt=\"TechNova Proje Vitrini\">"],
      hint: "<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\">",
      solution: "<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\">",
      validator: (code) => {
        const clean = code.trim();
        const hasSrc = /src\s*=\s*["']vitrin\.jpg["']/i.test(clean);
        const hasAlt = /alt\s*=\s*["']TechNova Proje Vitrini["']/i.test(clean);
        if (hasSrc && hasAlt && /<img\b/i.test(clean)) {
          return { ok: true, msg: "Harika! Vitrin görseli (img) başarıyla eklendi, sayfa canlandı! ✓" };
        }
        return { ok: false, msg: "Hata: <img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\"> şeklinde tekil img etiketi yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4 • ADIM 2/5: BOYUTLANDIRMA (WIDTH & HEIGHT)",
      title: "2. Görev: Görsel Genişlik ve Yükseklik Ayarı",
      prompt: "Tarayıcının sayfa düzenini sıçratmadan render edebilmesi için görsele 640 piksel genişlik ve 360 piksel yükseklik boyutlarını ata.",
      presetCode: "<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\">",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["width=\"640\"", "height=\"360\"", "<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\" width=\"640\" height=\"360\">"],
      hint: "<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\" width=\"640\" height=\"360\">",
      solution: "<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\" width=\"640\" height=\"360\">",
      validator: (code) => {
        const clean = code.trim();
        const hasW = /width\s*=\s*["']640["']/i.test(clean);
        const hasH = /height\s*=\s*["']360["']/i.test(clean);
        if (hasW && hasH && /<img\b/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Genişlik ve yükseklik piksel değerleri doğru bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: img etiketine width=\"640\" height=\"360\" ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4 • ADIM 3/5: LOGO İKONU",
      title: "3. Görev: Şirket Logo İkonunu Yerleştir",
      prompt: "Header kısmında kullanılmak üzere kaynak dosyası 'logo.png', açıklama metni 'TechNova Logo' olan 64x64 boyutlarında kare logo görselini ekle.",
      presetCode: "<!-- Logo görselini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<img src=\"logo.png\" alt=\"TechNova Logo\" width=\"64\" height=\"64\">", "src=\"logo.png\"", "alt=\"TechNova Logo\""],
      hint: "<img src=\"logo.png\" alt=\"TechNova Logo\" width=\"64\" height=\"64\">",
      solution: "<img src=\"logo.png\" alt=\"TechNova Logo\" width=\"64\" height=\"64\">",
      validator: (code) => {
        const clean = code.trim();
        const hasLogo = /src\s*=\s*["']logo\.png["']/i.test(clean);
        const hasAlt = /alt\s*=\s*["']TechNova Logo["']/i.test(clean);
        if (hasLogo && hasAlt && /<img\b/i.test(clean)) {
          return { ok: true, msg: "Süper! Logo görseli projeye eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <img src=\"logo.png\" alt=\"TechNova Logo\" width=\"64\" height=\"64\"> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4 • ADIM 4/5: SEMANTİK ŞEKİL (FIGURE & FIGCAPTION)",
      title: "4. Görev: Görsel ve Açıklama Bloğu",
      prompt: "Vitrin görselimizi semantik olarak bir figür (figure) bloğuna alıp altına '2026 Yılın En İyi Web Tasarımı' açıklama yazısını (figcaption) ekleyebilir misin?",
      presetCode: "<figure>\n  <img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\" width=\"640\" height=\"360\">\n  <!-- figcaption etiketini ekleyin -->\n</figure>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<figcaption>2026 Yılın En İyi Web Tasarımı</figcaption>", "<figcaption>", "</figcaption>"],
      hint: "<figure>\n  <img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\" width=\"640\" height=\"360\">\n  <figcaption>2026 Yılın En İyi Web Tasarımı</figcaption>\n</figure>",
      solution: "<figure>\n  <img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\" width=\"640\" height=\"360\">\n  <figcaption>2026 Yılın En İyi Web Tasarımı</figcaption>\n</figure>",
      validator: (code) => {
        const clean = code.trim();
        const hasFig = /<figure\s*>[\s\S]*<\/figure\s*>/i.test(clean);
        const hasCap = /<figcaption\s*>\s*2026 Yılın En İyi Web Tasarımı\s*<\/figcaption\s*>/i.test(clean);
        if (hasFig && hasCap) {
          return { ok: true, msg: "Harika! <figure> ve <figcaption> ile semantik medya bloğu oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <figcaption>2026 Yılın En İyi Web Tasarımı</figcaption> etiketini figure içine ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4 • ADIM 5/5: TIKLANABİLİR GÖRSEL (IMAGE LINK)",
      title: "5. Görev: Tıklanabilir Galeri Görseli",
      prompt: "Ziyaretçi görsele tıkladığında büyük galeriyi açması için görseli 'galeri.html' sayfasına yönlendiren bir bağlantı ile sarmala!",
      presetCode: "<img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\">\n<!-- Bu görseli <a href=\"galeri.html\"> içine sarın -->",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<a href=\"galeri.html\">", "</a>", "<a href=\"galeri.html\"><img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\"></a>"],
      hint: "<a href=\"galeri.html\">\n  <img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\">\n</a>",
      solution: "<a href=\"galeri.html\">\n  <img src=\"vitrin.jpg\" alt=\"TechNova Proje Vitrini\">\n</a>",
      validator: (code) => {
        const clean = code.trim();
        if (/<a\s+[^>]*href\s*=\s*["']galeri\.html["'][^>]*>\s*<img\b[\s\S]*<\/a\s*>/i.test(clean)) {
          return { ok: true, msg: "🎉 TEBRİKLER! Medya ve görseller projenin vitrinini büyüleyici kıldı! ✓" };
        }
        return { ok: false, msg: "Hata: Görseli <a href=\"galeri.html\">...</a> içine alın." };
      }
    }
  ],

  html_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5 • ADIM 1/5: SIRASIZ LİSTE (UL & LI)",
      title: "1. Görev: Yetenek ve Teknoloji Maddeleri",
      prompt: "Projemizin güçlü yanlarını listelemek için sırasız bir liste (ul) aç ve içine 'HTML5 & Semantik Mimari' ile 'Yüksek Performans' maddelerini ekle.",
      presetCode: "<!-- Sırasız yetenek listesini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<ul>", "</ul>", "<li>HTML5 & Semantik Mimari</li>", "<li>Yüksek Performans</li>"],
      hint: "<ul>\n  <li>HTML5 & Semantik Mimari</li>\n  <li>Yüksek Performans</li>\n</ul>",
      solution: "<ul>\n  <li>HTML5 & Semantik Mimari</li>\n  <li>Yüksek Performans</li>\n</ul>",
      validator: (code) => {
        const clean = code.trim();
        const hasUl = /<ul\s*>[\s\S]*<\/ul\s*>/i.test(clean);
        const hasLi1 = /<li\s*>[\s\S]*HTML5 & Semantik Mimari[\s\S]*<\/li\s*>/i.test(clean);
        const hasLi2 = /<li\s*>[\s\S]*Yüksek Performans[\s\S]*<\/li\s*>/i.test(clean);
        if (hasUl && hasLi1 && hasLi2) {
          return { ok: true, msg: "Harika! Sırasız özellik listesi (ul, li) oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <ul> içine istenen iki <li> elemanını ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5 • ADIM 2/5: SIRALI LİSTE (OL & LI)",
      title: "2. Görev: Geliştirme Süreci Adımları",
      prompt: "Proje geliştirme aşamalarımızı numaralı olarak listelemek için sıralı bir liste (ol) içinde '1. Planlama & Tasarım' ve '2. Kodlama & Yayın' adımlarını yaz.",
      presetCode: "<!-- Sıralı adımlar listesini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<ol>", "</ol>", "<li>1. Planlama & Tasarım</li>", "<li>2. Kodlama & Yayın</li>"],
      hint: "<ol>\n  <li>1. Planlama & Tasarım</li>\n  <li>2. Kodlama & Yayın</li>\n</ol>",
      solution: "<ol>\n  <li>1. Planlama & Tasarım</li>\n  <li>2. Kodlama & Yayın</li>\n</ol>",
      validator: (code) => {
        const clean = code.trim();
        const hasOl = /<ol\s*>[\s\S]*<\/ol\s*>/i.test(clean);
        const hasLi1 = /<li\s*>[\s\S]*Planlama & Tasarım[\s\S]*<\/li\s*>/i.test(clean);
        const hasLi2 = /<li\s*>[\s\S]*Kodlama & Yayın[\s\S]*<\/li\s*>/i.test(clean);
        if (hasOl && hasLi1 && hasLi2) {
          return { ok: true, msg: "Mükemmel! Sıralı geliştirme adımları (ol) başarıyla numaralandı. ✓" };
        }
        return { ok: false, msg: "Hata: <ol> içine belirtilen iki adımı <li> ile ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5 • ADIM 3/5: NAVİGASYON MENÜSÜ",
      title: "3. Görev: Listeden Web Menüsü Üret",
      prompt: "Menü çubuğumuz için 'nav-menu' sınıfına sahip sırasız liste içinde '#anasayfa' ve '#iletisim' bağlantılarını içeren iki menü elemanı oluştur.",
      presetCode: "<ul class=\"nav-menu\">\n  <!-- Menü linklerini ekleyin -->\n</ul>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<li><a href=\"#anasayfa\">Anasayfa</a></li>", "<li><a href=\"#iletisim\">İletişim</a></li>"],
      hint: "<ul class=\"nav-menu\">\n  <li><a href=\"#anasayfa\">Anasayfa</a></li>\n  <li><a href=\"#iletisim\">İletişim</a></li>\n</ul>",
      solution: "<ul class=\"nav-menu\">\n  <li><a href=\"#anasayfa\">Anasayfa</a></li>\n  <li><a href=\"#iletisim\">İletişim</a></li>\n</ul>",
      validator: (code) => {
        const clean = code.trim();
        const hasHome = /<li\s*>\s*<a\s+[^>]*href\s*=\s*["']#anasayfa["'][^>]*>\s*Anasayfa\s*<\/a\s*>\s*<\/li\s*>/i.test(clean);
        const hasContact = /<li\s*>\s*<a\s+[^>]*href\s*=\s*["']#iletisim["'][^>]*>\s*İletişim\s*<\/a\s*>\s*<\/li\s*>/i.test(clean);
        if (hasHome && hasContact) {
          return { ok: true, msg: "Süper! Liste tabanlı profesyonel menü iskeleti kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: Anasayfa ve İletişim linklerini <li><a>...</a></li> formatında yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5 • ADIM 4/5: TANIM LİSTESİ (DL, DT, DD)",
      title: "4. Görev: Terim ve Tanım Sözlüğü",
      prompt: "Müşterilere terimleri açıklamak için bir tanım listesi (dl) açıp içine 'Frontend' terimini ve 'Kullanıcı arayüzü ve görsel deneyim kodlama.' açıklamasını yaz.",
      presetCode: "<!-- Tanım listesini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<dl>", "</dl>", "<dt>Frontend</dt>", "<dd>Kullanıcı arayüzü ve görsel deneyim kodlama.</dd>"],
      hint: "<dl>\n  <dt>Frontend</dt>\n  <dd>Kullanıcı arayüzü ve görsel deneyim kodlama.</dd>\n</dl>",
      solution: "<dl>\n  <dt>Frontend</dt>\n  <dd>Kullanıcı arayüzü ve görsel deneyim kodlama.</dd>\n</dl>",
      validator: (code) => {
        const clean = code.trim();
        const hasDl = /<dl\s*>[\s\S]*<\/dl\s*>/i.test(clean);
        const hasDt = /<dt\s*>\s*Frontend\s*<\/dt\s*>/i.test(clean);
        const hasDd = /<dd\s*>[\s\S]*Kullanıcı arayüzü[\s\S]*<\/dd\s*>/i.test(clean);
        if (hasDl && hasDt && hasDd) {
          return { ok: true, msg: "Çok iyi! Semantik tanım listesi (<dl>, <dt>, <dd>) projeye eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <dl> içinde <dt>Frontend</dt> ve <dd>...</dd> şeklinde yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5 • ADIM 5/5: İÇ İÇE LİSTE (NESTED LIST)",
      title: "5. Görev: Alt Hizmetleri Barındıran İç İçe Liste",
      prompt: "Sırasız liste içindeki 'Web Çözümleri' maddesinin altına iç içe yeni bir liste açarak 'React Uygulamaları' alt maddesini ekle.",
      presetCode: "<ul>\n  <!-- İç içe listeyi buraya ekleyin -->\n</ul>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<li>Web Çözümleri", "<ul><li>React Uygulamaları</li></ul>", "</li>"],
      hint: "<ul>\n  <li>Web Çözümleri\n    <ul>\n      <li>React Uygulamaları</li>\n    </ul>\n  </li>\n</ul>",
      solution: "<ul>\n  <li>Web Çözümleri\n    <ul>\n      <li>React Uygulamaları</li>\n    </ul>\n  </li>\n</ul>",
      validator: (code) => {
        const clean = code.trim();
        const hasParent = /<li>\s*Web Çözümleri[\s\S]*<\/li>/i.test(clean);
        const hasChild = /<ul>[\s\S]*<li>\s*React Uygulamaları\s*<\/li>[\s\S]*<\/ul>/i.test(clean);
        if (hasParent && hasChild) {
          return { ok: true, msg: "🎉 TEBRİKLER! Tüm liste türlerini projenin navigasyon ve yetenek alanlarına başarıyla entegre ettin! ✓" };
        }
        return { ok: false, msg: "Hata: <li>Web Çözümleri <ul><li>React Uygulamaları</li></ul></li> yapısını kurun." };
      }
    }
  ],

  html_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6 • ADIM 1/5: TABLO ÇATISI & BAŞLIK (CAPTION)",
      title: "1. Görev: Fiyat Tablosu Kapsayıcısı",
      prompt: "Hizmet paketlerimizi sunmak için bir tablo aç ve hemen içine 'Hizmet Paketleri ve Fiyatlandırma' metnini içeren tablo başlığı (caption) ekle.",
      presetCode: "<!-- Table ve caption etiketlerini yazın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<table>", "</table>", "<caption>Hizmet Paketleri ve Fiyatlandırma</caption>"],
      hint: "<table>\n  <caption>Hizmet Paketleri ve Fiyatlandırma</caption>\n</table>",
      solution: "<table>\n  <caption>Hizmet Paketleri ve Fiyatlandırma</caption>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        const hasTable = /<table\s*>[\s\S]*<\/table\s*>/i.test(clean);
        const hasCaption = /<caption\s*>\s*Hizmet Paketleri ve Fiyatlandırma\s*<\/caption\s*>/i.test(clean);
        if (hasTable && hasCaption) {
          return { ok: true, msg: "Harika! Tablo çatısı ve başlık (caption) hazırlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <table> içine <caption>Hizmet Paketleri ve Fiyatlandırma</caption> ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6 • ADIM 2/5: BAŞLIK SATIRI (TR & TH)",
      title: "2. Görev: Tablo Sütun Başlıkları",
      prompt: "Tablomuzun sütun başlıklarını oluşturalım! Bir satır (tr) aç ve içine 'Paket', 'Süre' ve 'Ücret' başlık hücrelerini (th) ekle.",
      presetCode: "<table>\n  <caption>Hizmet Paketleri ve Fiyatlandırma</caption>\n  <!-- tr ve th başlık satırını ekleyin -->\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<tr>", "</tr>", "<th>Paket</th>", "<th>Süre</th>", "<th>Ücret</th>"],
      hint: "<tr>\n    <th>Paket</th>\n    <th>Süre</th>\n    <th>Ücret</th>\n  </tr>",
      solution: "<table>\n  <caption>Hizmet Paketleri ve Fiyatlandırma</caption>\n  <tr>\n    <th>Paket</th>\n    <th>Süre</th>\n    <th>Ücret</th>\n  </tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        const hasTr = /<tr\s*>[\s\S]*<\/tr\s*>/i.test(clean);
        const hasTh1 = /<th\s*>\s*Paket\s*<\/th\s*>/i.test(clean);
        const hasTh2 = /<th\s*>\s*Süre\s*<\/th\s*>/i.test(clean);
        const hasTh3 = /<th\s*>\s*Ücret\s*<\/th\s*>/i.test(clean);
        if (hasTr && hasTh1 && hasTh2 && hasTh3) {
          return { ok: true, msg: "Mükemmel! Tablonun başlık satırı (tr, th) netleşti. ✓" };
        }
        return { ok: false, msg: "Hata: <tr> içine <th>Paket</th>, <th>Süre</th> ve <th>Ücret</th> yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6 • ADIM 3/5: BİRİNCİ VERİ SATIRI (TD)",
      title: "3. Görev: Başlangıç Paketi Satırı",
      prompt: "İlk hizmet paketini tabloya ekleyelim! Yeni bir satır aç ve içine sırasıyla 'Başlangıç', '3 Gün' ve '₺1.500' veri hücrelerini (td) yerleştir.",
      presetCode: "<!-- Başlangıç paketi veri satırını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<tr>", "</tr>", "<td>Başlangıç</td>", "<td>3 Gün</td>", "<td>₺1.500</td>"],
      hint: "<tr>\n  <td>Başlangıç</td>\n  <td>3 Gün</td>\n  <td>₺1.500</td>\n</tr>",
      solution: "<tr>\n  <td>Başlangıç</td>\n  <td>3 Gün</td>\n  <td>₺1.500</td>\n</tr>",
      validator: (code) => {
        const clean = code.trim();
        const hasTd1 = /<td\s*>\s*Başlangıç\s*<\/td\s*>/i.test(clean);
        const hasTd2 = /<td\s*>\s*3 Gün\s*<\/td\s*>/i.test(clean);
        const hasTd3 = /<td\s*>\s*₺?1\.500\s*<\/td\s*>/i.test(clean);
        if (hasTd1 && hasTd2 && hasTd3) {
          return { ok: true, msg: "Süper! İlk fiyat ve hizmet satırı tabloya başarıyla yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <tr> içine <td>Başlangıç</td>, <td>3 Gün</td>, <td>₺1.500</td> ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6 • ADIM 4/5: İKİNCİ VERİ SATIRI",
      title: "4. Görev: Profesyonel Paket Satırı",
      prompt: "İkinci hizmet paketini ekleyelim! Yeni bir satır içinde sırasıyla 'Pro Portfolyo', '7 Gün' ve '₺3.500' veri hücrelerini oluştur.",
      presetCode: "<!-- Pro paketi veri satırını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<tr>", "</tr>", "<td>Pro Portfolyo</td>", "<td>7 Gün</td>", "<td>₺3.500</td>"],
      hint: "<tr>\n  <td>Pro Portfolyo</td>\n  <td>7 Gün</td>\n  <td>₺3.500</td>\n</tr>",
      solution: "<tr>\n  <td>Pro Portfolyo</td>\n  <td>7 Gün</td>\n  <td>₺3.500</td>\n</tr>",
      validator: (code) => {
        const clean = code.trim();
        const hasTd1 = /<td\s*>\s*Pro Portfolyo\s*<\/td\s*>/i.test(clean);
        const hasTd2 = /<td\s*>\s*7 Gün\s*<\/td\s*>/i.test(clean);
        const hasTd3 = /<td\s*>\s*₺?3\.500\s*<\/td\s*>/i.test(clean);
        if (hasTd1 && hasTd2 && hasTd3) {
          return { ok: true, msg: "Harika! Pro paket satırı da tabloya eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <tr> içine Pro Portfolyo, 7 Gün ve ₺3.500 td hücrelerini yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6 • ADIM 5/5: EKSİKSİZ TABLO YAPISI",
      title: "5. Görev: Fiyat Tablosunu Kapat ve Tamamla",
      prompt: "Şimdi tüm bu yapıyı bir araya getirerek tablo kapanışını kontrol et ve hizmet tablonu tamamla!",
      presetCode: "<table>\n  <caption>Hizmet Paketleri ve Fiyatlandırma</caption>\n  <tr><th>Paket</th><th>Süre</th><th>Ücret</th></tr>\n  <tr><td>Başlangıç</td><td>3 Gün</td><td>₺1.500</td></tr>\n  <tr><td>Pro Portfolyo</td><td>7 Gün</td><td>₺3.500</td></tr>\n<!-- Tablo kapanışını sağlayın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["</table>"],
      hint: "</table>",
      solution: "<table>\n  <caption>Hizmet Paketleri ve Fiyatlandırma</caption>\n  <tr><th>Paket</th><th>Süre</th><th>Ücret</th></tr>\n  <tr><td>Başlangıç</td><td>3 Gün</td><td>₺1.500</td></tr>\n  <tr><td>Pro Portfolyo</td><td>7 Gün</td><td>₺3.500</td></tr>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<table\s*>[\s\S]*<\/table\s*>/i.test(clean) && /<tr>[\s\S]*<td>Pro Portfolyo<\/td>[\s\S]*<\/tr>/i.test(clean)) {
          return { ok: true, msg: "🎉 TEBRİKLER! Canlı web projenin fiyat ve paket tablosu başarıyla inşa edildi! ✓" };
        }
        return { ok: false, msg: "Hata: Tablo etiketlerini eksiksiz kapatın (</table>)." };
      }
    }
  ],

  html_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7 • ADIM 1/5: SEMANTİK THEAD",
      title: "1. Görev: Tablo Başlık Bloğu (Thead)",
      prompt: "Fiyat tablomuzu kurumsal semantik standarda taşıyalım! Başlık satırını tablonun thead bloğu içine alabilir misin?",
      presetCode: "<table>\n  <!-- thead bloğunu buraya ekleyin -->\n  <tr><th>Hizmet</th><th>Özellik</th><th>Fiyat</th></tr>\n</table>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<thead>", "</thead>", "<thead>\n    <tr><th>Hizmet</th><th>Özellik</th><th>Fiyat</th></tr>\n  </thead>"],
      hint: "<thead>\n    <tr><th>Hizmet</th><th>Özellik</th><th>Fiyat</th></tr>\n  </thead>",
      solution: "<table>\n  <thead>\n    <tr><th>Hizmet</th><th>Özellik</th><th>Fiyat</th></tr>\n  </thead>\n</table>",
      validator: (code) => {
        const clean = code.trim();
        if (/<thead\s*>\s*<tr\s*>[\s\S]*<\/tr\s*>\s*<\/thead\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Tablonun semantik başlık bloğu (thead) tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: Başlık satırını <thead>...</thead> içine alın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7 • ADIM 2/5: SEMANTİK TBODY",
      title: "2. Görev: Tablo Veri Gövdesi (Tbody)",
      prompt: "Şimdi veri satırlarını tablonun gövde bloğu (tbody) ile sarmalayarak tablo yapısını oluştur.",
      presetCode: "<!-- tbody etiketlerini veri satırının etrafına ekleyin -->\n<tr><td>E-Ticaret Sitesi</td><td>Full Responsive</td><td>₺4.500</td></tr>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<tbody>", "</tbody>"],
      hint: "<tbody>\n  <tr><td>E-Ticaret Sitesi</td><td>Full Responsive</td><td>₺4.500</td></tr>\n</tbody>",
      solution: "<tbody>\n  <tr><td>E-Ticaret Sitesi</td><td>Full Responsive</td><td>₺4.500</td></tr>\n</tbody>",
      validator: (code) => {
        const clean = code.trim();
        if (/<tbody\s*>\s*<tr\s*>[\s\S]*<\/tr\s*>\s*<\/tbody\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Tablo verileri <tbody> içine taşındı. ✓" };
        }
        return { ok: false, msg: "Hata: Veri satırını <tbody>...</tbody> içine alın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7 • ADIM 3/5: SÜTUN BİRLEŞTİRME (COLSPAN)",
      title: "3. Görev: Bilgi Notu İçin 3 Sütunu Birleştir",
      prompt: "Tablonun tüm genişliğini kaplayan bir duyuru satırı ekleyelim! 3 sütunu tek bir hücrede birleştiren (colspan='3') ve 'Tüm paketlerimizde 1 yıl ücretsiz teknik destek dahildir.' yazan hücreyi oluştur.",
      presetCode: "<tr>\n  <!-- colspan='3' hücresini ekleyin -->\n</tr>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<td colspan=\"3\">Tüm paketlerimizde 1 yıl ücretsiz teknik destek dahildir.</td>", "colspan=\"3\""],
      hint: "<tr>\n  <td colspan=\"3\">Tüm paketlerimizde 1 yıl ücretsiz teknik destek dahildir.</td>\n</tr>",
      solution: "<tr>\n  <td colspan=\"3\">Tüm paketlerimizde 1 yıl ücretsiz teknik destek dahildir.</td>\n</tr>",
      validator: (code) => {
        const clean = code.trim();
        if (/<td\s+[^>]*colspan\s*=\s*["']3["'][^>]*>[\s\S]*ücretsiz teknik destek[\s\S]*<\/td\s*>/i.test(clean)) {
          return { ok: true, msg: "Süper! Sütunlar başarıyla birleştirildi (colspan=\"3\"). ✓" };
        }
        return { ok: false, msg: "Hata: <td colspan=\"3\">Tüm paketlerimizde 1 yıl ücretsiz teknik destek dahildir.</td> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7 • ADIM 4/5: SATIR BİRLEŞTİRME (ROWSPAN)",
      title: "4. Görev: İki Satırı Kapsayan Hizmet Alanı",
      prompt: "Aynı hizmet kategorisini alt alta iki satır boyunca birleştirmek için 2 satırı kaplayan (rowspan='2') 'Web Geliştirme' hücresini oluşturabilir misin?",
      presetCode: "<tr>\n  <!-- rowspan='2' hücresini ekleyin -->\n  <td>React Arayüz</td>\n  <td>₺3.000</td>\n</tr>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<td rowspan=\"2\">Web Geliştirme</td>", "rowspan=\"2\""],
      hint: "<tr>\n  <td rowspan=\"2\">Web Geliştirme</td>\n  <td>React Arayüz</td>\n  <td>₺3.000</td>\n</tr>",
      solution: "<tr>\n  <td rowspan=\"2\">Web Geliştirme</td>\n  <td>React Arayüz</td>\n  <td>₺3.000</td>\n</tr>",
      validator: (code) => {
        const clean = code.trim();
        if (/<td\s+[^>]*rowspan\s*=\s*["']2["'][^>]*>\s*Web Geliştirme\s*<\/td\s*>/i.test(clean)) {
          return { ok: true, msg: "Çok iyi! Dikeyde iki satırı kapsayan rowspan hücresi tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <td rowspan=\"2\">Web Geliştirme</td> hücresini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7 • ADIM 5/5: SEMANTİK DİPNOT (TFOOT)",
      title: "5. Görev: Tablo Alt Bilgi Bloğu (Tfoot)",
      prompt: "Tablonun en altına 3 sütun genişliğinde 'Fiyatlar 2026 yılı için geçerlidir.' bilgisini içeren bir altbilgi (tfoot) satırı kur.",
      presetCode: "<!-- tfoot bloğunu ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<tfoot>", "</tfoot>", "<tr><td colspan=\"3\">Fiyatlar 2026 yılı için geçerlidir.</td></tr>"],
      hint: "<tfoot>\n  <tr>\n    <td colspan=\"3\">Fiyatlar 2026 yılı için geçerlidir.</td>\n  </tr>\n</tfoot>",
      solution: "<tfoot>\n  <tr>\n    <td colspan=\"3\">Fiyatlar 2026 yılı için geçerlidir.</td>\n  </tr>\n</tfoot>",
      validator: (code) => {
        const clean = code.trim();
        const hasTfoot = /<tfoot\s*>[\s\S]*<\/tfoot\s*>/i.test(clean);
        const hasColspan = /colspan\s*=\s*["']3["']/i.test(clean);
        if (hasTfoot && hasColspan) {
          return { ok: true, msg: "🎉 TEBRİKLER! İleri düzey thead, tbody, tfoot, colspan ve rowspan özellikleri projende hayat buldu! ✓" };
        }
        return { ok: false, msg: "Hata: <tfoot><tr><td colspan=\"3\">...</td></tr></tfoot> yapısını yazın." };
      }
    }
  ],

  html_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8 • ADIM 1/5: ANA PROJE KAPSAYICISI (CONTAINER)",
      title: "1. Görev: Sayfa Geneli Kapsayıcı Div",
      prompt: "Tüm web bileşenlerimizi derli toplu tutacak ana taşıyıcıyı oluşturalım! 'container' sınıfına sahip bir div bloğu aç ve kapat.",
      presetCode: "<!-- container div'ini açıp kapatın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<div class=\"container\">", "</div>", "<div class=\"container\">\n</div>"],
      hint: "<div class=\"container\">\n</div>",
      solution: "<div class=\"container\">\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*class\s*=\s*["']container["'][^>]*>[\s\S]*<\/div\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Sayfanın ana taşıyıcı <div> konteyneri kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"container\">...</div> etiketini yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8 • ADIM 2/5: PROJE KARTI (CARD)",
      title: "2. Görev: Öne Çıkan Proje Kartı",
      prompt: "Kapsayıcı içine hem 'project-card' sınıfına hem de 'one-cikan' tekil kimliğine (id) sahip bir div kartı yerleştir.",
      presetCode: "<div class=\"container\">\n  <!-- Proje kartı div'ini ekleyin -->\n</div>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<div class=\"project-card\" id=\"one-cikan\">", "</div>"],
      hint: "<div class=\"project-card\" id=\"one-cikan\">\n  </div>",
      solution: "<div class=\"container\">\n  <div class=\"project-card\" id=\"one-cikan\">\n  </div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const hasClass = /class\s*=\s*["']project-card["']/i.test(clean);
        const hasId = /id\s*=\s*["']one-cikan["']/i.test(clean);
        if (hasClass && hasId && /<div\b[\s\S]*<\/div>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! class ve id öznitelikli proje kartı div'i başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"project-card\" id=\"one-cikan\">...</div> oluşturun." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8 • ADIM 3/5: SATIR İÇİ ROZET (SPAN)",
      title: "3. Görev: Parlayan 'YENİ' Durum Rozeti",
      prompt: "Proje kartının içine 'badge-new' sınıfına sahip ve metni 'YENİ' olan bir satır içi rozet (span) iliştir.",
      presetCode: "<div class=\"project-card\">\n  <!-- span rozetini ekleyin -->\n  <h3>Bulut Depolama Platformu</h3>\n</div>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<span class=\"badge-new\">YENİ</span>", "class=\"badge-new\"", "<span>", "</span>"],
      hint: "<span class=\"badge-new\">YENİ</span>",
      solution: "<div class=\"project-card\">\n  <span class=\"badge-new\">YENİ</span>\n  <h3>Bulut Depolama Platformu</h3>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        if (/<span\s+[^>]*class\s*=\s*["']badge-new["'][^>]*>\s*YENİ\s*<\/span\s*>/i.test(clean)) {
          return { ok: true, msg: "Süper! Satır içi <span> etiketiyle modern bir rozet oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <span class=\"badge-new\">YENİ</span> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8 • ADIM 4/5: IZGARA SATIRI VE SÜTUNLAR",
      title: "4. Görev: Yan Yana İki Sütunlu Kart Alanı",
      prompt: "İki kartı yan yana yerleştirmek için 'row' sınıfına sahip bir div içine iki adet 'col' sınıflı sütun div'i yerleştirebilir misin?",
      presetCode: "<!-- row ve col divlerini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<div class=\"row\">", "<div class=\"col\">Kart 1</div>", "<div class=\"col\">Kart 2</div>", "</div>"],
      hint: "<div class=\"row\">\n  <div class=\"col\">Kart 1</div>\n  <div class=\"col\">Kart 2</div>\n</div>",
      solution: "<div class=\"row\">\n  <div class=\"col\">Kart 1</div>\n  <div class=\"col\">Kart 2</div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const hasRow = /<div\s+[^>]*class\s*=\s*["']row["'][^>]*>/i.test(clean);
        const colCount = (clean.match(/class\s*=\s*["']col["']/gi) || []).length;
        if (hasRow && colCount >= 2) {
          return { ok: true, msg: "Çok iyi! Satır (row) ve sütun (col) ızgara divleri hazırlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"row\"> içine en az iki <div class=\"col\"> ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8 • ADIM 5/5: KART AKSİYON ALANI (CARD FOOTER)",
      title: "5. Görev: Kart Alt Çubuğu ve İncele Butonu",
      prompt: "Proje kartımızın alt kısmına 'card-footer' sınıfına sahip bir div açıp içine 'Projeyi İncele' butonunu ekle!",
      presetCode: "<div class=\"project-card\">\n  <h3>Bulut Depolama Platformu</h3>\n  <!-- card-footer ve butonu buraya ekleyin -->\n</div>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<div class=\"card-footer\">", "<button type=\"button\" class=\"btn-detay\">Projeyi İncele</button>", "</div>"],
      hint: "<div class=\"card-footer\">\n    <button type=\"button\" class=\"btn-detay\">Projeyi İncele</button>\n  </div>",
      solution: "<div class=\"project-card\">\n  <h3>Bulut Depolama Platformu</h3>\n  <div class=\"card-footer\">\n    <button type=\"button\" class=\"btn-detay\">Projeyi İncele</button>\n  </div>\n</div>",
      validator: (code) => {
        const clean = code.trim();
        const hasFooter = /<div\s+[^>]*class\s*=\s*["']card-footer["'][^>]*>/i.test(clean);
        const hasBtn = /<button\s+[^>]*class\s*=\s*["']btn-detay["'][^>]*>[\s\S]*Projeyi İncele[\s\S]*<\/button\s*>/i.test(clean);
        if (hasFooter && hasBtn) {
          return { ok: true, msg: "🎉 TEBRİKLER! Projen artık modern div kartlarına, rozetlere ve şık kutulara sahip! ✓" };
        }
        return { ok: false, msg: "Hata: <div class=\"card-footer\"><button type=\"button\" class=\"btn-detay\">Projeyi İncele</button></div> yazın." };
      }
    }
  ],

  html_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9 • ADIM 1/5: İLETİŞİM FORMU KAPSAYICISI",
      title: "1. Görev: Form Etiketi ve Gönderim Metodu",
      prompt: "Ziyaretçilerin bize mesaj gönderebilmesi için '/iletisim' adresine POST yöntemiyle veri gönderen bir form kapsayıcısı aç.",
      presetCode: "<!-- Form etiketini açıp kapatın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<form action=\"/iletisim\" method=\"POST\">", "</form>", "action=\"/iletisim\"", "method=\"POST\""],
      hint: "<form action=\"/iletisim\" method=\"POST\">\n</form>",
      solution: "<form action=\"/iletisim\" method=\"POST\">\n</form>",
      validator: (code) => {
        const clean = code.trim();
        const hasAction = /action\s*=\s*["']\/iletisim["']/i.test(clean);
        const hasMethod = /method\s*=\s*["']POST["']/i.test(clean);
        if (hasAction && hasMethod && /<form\b[\s\S]*<\/form\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Form kapsayıcısı güvenli POST metoduyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <form action=\"/iletisim\" method=\"POST\">...</form> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9 • ADIM 2/5: AD SOYAD ALANI (LABEL & INPUT)",
      title: "2. Görev: İsim Giriş Kutusu",
      prompt: "Formun içine ziyaretçinin adını almak için 'ad' id'sine bağlı etiket (label) ve doldurulması zorunlu metin giriş kutusu (input) ekle.",
      presetCode: "<form action=\"/iletisim\" method=\"POST\">\n  <!-- Ad Soyad label ve inputunu ekleyin -->\n</form>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<label for=\"ad\">Adınız Soyadınız:</label>", "<input type=\"text\" id=\"ad\" name=\"ad\" required placeholder=\"Adınızı girin\">"],
      hint: "<label for=\"ad\">Adınız Soyadınız:</label>\n  <input type=\"text\" id=\"ad\" name=\"ad\" required placeholder=\"Adınızı girin\">",
      solution: "<form action=\"/iletisim\" method=\"POST\">\n  <label for=\"ad\">Adınız Soyadınız:</label>\n  <input type=\"text\" id=\"ad\" name=\"ad\" required placeholder=\"Adınızı girin\">\n</form>",
      validator: (code) => {
        const clean = code.trim();
        const hasLabel = /<label\s+[^>]*for\s*=\s*["']ad["'][^>]*>/i.test(clean);
        const hasInput = /<input\s+[^>]*type\s*=\s*["']text["'][^>]*id\s*=\s*["']ad["']/i.test(clean) ||
                         /<input\s+[^>]*id\s*=\s*["']ad["'][^>]*type\s*=\s*["']text["']/i.test(clean);
        const hasRequired = /required/i.test(clean);
        if (hasLabel && hasInput && hasRequired) {
          return { ok: true, msg: "Mükemmel! Ad Soyad label ve inputu mükemmel bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: label for=\"ad\" ve input type=\"text\" id=\"ad\" required alanlarını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9 • ADIM 3/5: E-POSTA ALANI (TYPE EMAIL)",
      title: "3. Görev: E-Posta Giriş Kutusu",
      prompt: "Ziyaretçiye geri dönüş yapabilmek için 'email' id'sine bağlı etiket ve zorunlu bir e-posta giriş kutusu ekle.",
      presetCode: "<!-- E-posta label ve inputunu ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<label for=\"email\">E-Posta Adresiniz:</label>", "<input type=\"email\" id=\"email\" name=\"email\" required>"],
      hint: "<label for=\"email\">E-Posta Adresiniz:</label>\n<input type=\"email\" id=\"email\" name=\"email\" required>",
      solution: "<label for=\"email\">E-Posta Adresiniz:</label>\n<input type=\"email\" id=\"email\" name=\"email\" required>",
      validator: (code) => {
        const clean = code.trim();
        const hasLabel = /<label\s+[^>]*for\s*=\s*["']email["'][^>]*>/i.test(clean);
        const hasInput = /<input\s+[^>]*type\s*=\s*["']email["'][^>]*id\s*=\s*["']email["']/i.test(clean) ||
                         /<input\s+[^>]*id\s*=\s*["']email["'][^>]*type\s*=\s*["']email["']/i.test(clean);
        if (hasLabel && hasInput) {
          return { ok: true, msg: "Süper! Tarayıcı doğrulayıcılı e-posta inputu eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <label for=\"email\"> ve <input type=\"email\" id=\"email\" required> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9 • ADIM 4/5: TELEFON NUMARASI ALANI (TYPE TEL)",
      title: "4. Görev: Telefon Numarası Girişi",
      prompt: "Hızlı iletişim için 'telefon' id'sine bağlı etiket ve '0555-555-5555' ipucuna (placeholder) sahip telefon giriş alanı ekle.",
      presetCode: "<!-- Telefon label ve inputunu ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<label for=\"telefon\">Telefon:</label>", "<input type=\"tel\" id=\"telefon\" name=\"telefon\" placeholder=\"0555-555-5555\">"],
      hint: "<label for=\"telefon\">Telefon:</label>\n<input type=\"tel\" id=\"telefon\" name=\"telefon\" placeholder=\"0555-555-5555\">",
      solution: "<label for=\"telefon\">Telefon:</label>\n<input type=\"tel\" id=\"telefon\" name=\"telefon\" placeholder=\"0555-555-5555\">",
      validator: (code) => {
        const clean = code.trim();
        const hasTel = /type\s*=\s*["']tel["']/i.test(clean);
        const hasId = /id\s*=\s*["']telefon["']/i.test(clean);
        if (hasTel && hasId) {
          return { ok: true, msg: "Çok iyi! Telefon inputu başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <label for=\"telefon\"> ve <input type=\"tel\" id=\"telefon\"> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9 • ADIM 5/5: ONAY KUTUSU (CHECKBOX)",
      title: "5. Görev: Aydınlatma Metni Onay Kutusu",
      prompt: "Kullanım şartlarını onaylatmak için zorunlu kılınmış bir onay kutusu (checkbox) ve 'Şartları okudum ve kabul ediyorum' etiketini ekle!",
      presetCode: "<!-- Onay kutusu checkbox'ı ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<label><input type=\"checkbox\" name=\"onay\" required> Şartları okudum ve kabul ediyorum</label>", "type=\"checkbox\"", "name=\"onay\""],
      hint: "<label><input type=\"checkbox\" name=\"onay\" required> Şartları okudum ve kabul ediyorum</label>",
      solution: "<label><input type=\"checkbox\" name=\"onay\" required> Şartları okudum ve kabul ediyorum</label>",
      validator: (code) => {
        const clean = code.trim();
        const hasCheck = /type\s*=\s*["']checkbox["']/i.test(clean);
        const hasReq = /required/i.test(clean);
        if (hasCheck && hasReq) {
          return { ok: true, msg: "🎉 TEBRİKLER! Temel iletişim formunun tüm input alanlarını başarıyla kurdun! ✓" };
        }
        return { ok: false, msg: "Hata: <label><input type=\"checkbox\" name=\"onay\" required> ...</label> yazın." };
      }
    }
  ],

  html_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10 • ADIM 1/5: ÇOK SATIRLI MESAJ KUTUSU (TEXTAREA)",
      title: "1. Görev: Mesaj Alanı (Textarea)",
      prompt: "Ziyaretçilerin projelerini detaylıca anlatabilmeleri için 'mesaj' id'sine bağlı etiket ve 4 satır yüksekliğinde çok satırlı metin alanı (textarea) ekle.",
      presetCode: "<!-- Textarea mesaj alanını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<label for=\"mesaj\">Mesajınız:</label>", "<textarea id=\"mesaj\" name=\"mesaj\" rows=\"4\" placeholder=\"Proje detaylarını yazın...\"></textarea>"],
      hint: "<label for=\"mesaj\">Mesajınız:</label>\n<textarea id=\"mesaj\" name=\"mesaj\" rows=\"4\" placeholder=\"Proje detaylarını yazın...\"></textarea>",
      solution: "<label for=\"mesaj\">Mesajınız:</label>\n<textarea id=\"mesaj\" name=\"mesaj\" rows=\"4\" placeholder=\"Proje detaylarını yazın...\"></textarea>",
      validator: (code) => {
        const clean = code.trim();
        const hasArea = /<textarea\s+[^>]*id\s*=\s*["']mesaj["'][^>]*>[\s\S]*<\/textarea\s*>/i.test(clean);
        if (hasArea) {
          return { ok: true, msg: "Harika! Geniş mesaj kutusu (<textarea>) formumuza eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <textarea id=\"mesaj\" name=\"mesaj\" rows=\"4\"></textarea> şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10 • ADIM 2/5: AÇILIR LİSTE (SELECT & OPTION)",
      title: "2. Görev: Hizmet Seçim Açılır Menüsü",
      prompt: "Müşterinin hizmet türünü seçmesi için 'hizmet' isimli açılır liste (select) açıp içine 'web' ve 'tasarim' değerlerine sahip seçenekleri (option) ekle.",
      presetCode: "<!-- Select ve option elemanlarını ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<select name=\"hizmet\">", "<option value=\"web\">Web Geliştirme</option>", "<option value=\"tasarim\">UI/UX Tasarım</option>", "</select>"],
      hint: "<select name=\"hizmet\">\n  <option value=\"web\">Web Geliştirme</option>\n  <option value=\"tasarim\">UI/UX Tasarım</option>\n</select>",
      solution: "<select name=\"hizmet\">\n  <option value=\"web\">Web Geliştirme</option>\n  <option value=\"tasarim\">UI/UX Tasarım</option>\n</select>",
      validator: (code) => {
        const clean = code.trim();
        const hasSelect = /<select\s+[^>]*name\s*=\s*["']hizmet["'][^>]*>[\s\S]*<\/select\s*>/i.test(clean);
        const hasOpt1 = /<option\s+value\s*=\s*["']web["']\s*>\s*Web Geliştirme\s*<\/option\s*>/i.test(clean);
        const hasOpt2 = /<option\s+value\s*=\s*["']tasarim["']\s*>\s*UI\/UX Tasarım\s*<\/option\s*>/i.test(clean);
        if (hasSelect && hasOpt1 && hasOpt2) {
          return { ok: true, msg: "Mükemmel! Açılır seçim listesi (select, option) tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <select name=\"hizmet\"> içine istenen <option> elemanlarını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10 • ADIM 3/5: FORM GRUPLAMA (FIELDSET & LEGEND)",
      title: "3. Görev: Formu Mantıksal Bölüme Çerçevele",
      prompt: "İletişim alanlarını şık bir çerçeveye almak için form etrafına fieldset ve hemen ilk satırına 'Bize Ulaşın' başlığını (legend) ekle.",
      presetCode: "<!-- fieldset ve legend etiketlerini uygulayın -->\n<form>\n</form>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<fieldset>", "<legend>Bize Ulaşın</legend>", "</fieldset>"],
      hint: "<form>\n  <fieldset>\n    <legend>Bize Ulaşın</legend>\n  </fieldset>\n</form>",
      solution: "<form>\n  <fieldset>\n    <legend>Bize Ulaşın</legend>\n  </fieldset>\n</form>",
      validator: (code) => {
        const clean = code.trim();
        const hasFieldset = /<fieldset\s*>[\s\S]*<\/fieldset\s*>/i.test(clean);
        const hasLegend = /<legend\s*>\s*Bize Ulaşın\s*<\/legend\s*>/i.test(clean);
        if (hasFieldset && hasLegend) {
          return { ok: true, msg: "Süper! Form alanları <fieldset> ve <legend> ile gruplandı. ✓" };
        }
        return { ok: false, msg: "Hata: <fieldset><legend>Bize Ulaşın</legend>...</fieldset> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10 • ADIM 4/5: GİZLİ GÜVENLİK ALANI (INPUT HIDDEN)",
      title: "4. Görev: Arka Plan Proje Form ID'si",
      prompt: "Sunucunun form türünü tanıması için 'form_turu' isimli ve 'portfolyo_v1' değerli gizli bir giriş alanı (hidden input) ekle.",
      presetCode: "<!-- Hidden inputunu ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<input type=\"hidden\" name=\"form_turu\" value=\"portfolyo_v1\">", "type=\"hidden\""],
      hint: "<input type=\"hidden\" name=\"form_turu\" value=\"portfolyo_v1\">",
      solution: "<input type=\"hidden\" name=\"form_turu\" value=\"portfolyo_v1\">",
      validator: (code) => {
        const clean = code.trim();
        const hasHidden = /type\s*=\s*["']hidden["']/i.test(clean);
        const hasName = /name\s*=\s*["']form_turu["']/i.test(clean);
        if (hasHidden && hasName) {
          return { ok: true, msg: "Çok iyi! Gizli güvenlik alanı (type=\"hidden\") eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: <input type=\"hidden\" name=\"form_turu\" value=\"portfolyo_v1\"> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10 • ADIM 5/5: FORMU GÖNDER BUTONU (SUBMIT BUTTON)",
      title: "5. Görev: Formu Gönder Butonu",
      prompt: "Formun kalbi! Ziyaretçinin yazdığı tüm bilgileri sunucuya postalayan ve üzerinde 'Mesajı Gönder 🚀' yazan gönderme butonunu (submit) ekle!",
      presetCode: "<!-- type='submit' olan Gönder butonunu ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<button type=\"submit\" class=\"btn-submit\">Mesajı Gönder 🚀</button>", "type=\"submit\"", "class=\"btn-submit\""],
      hint: "<button type=\"submit\" class=\"btn-submit\">Mesajı Gönder 🚀</button>",
      solution: "<button type=\"submit\" class=\"btn-submit\">Mesajı Gönder 🚀</button>",
      validator: (code) => {
        const clean = code.trim();
        const hasSubmit = /type\s*=\s*["']submit["']/i.test(clean);
        const hasBtn = /<button\b[\s\S]*Mesajı Gönder[\s\S]*<\/button\s*>/i.test(clean);
        if (hasSubmit && hasBtn) {
          return { ok: true, msg: "🎉 TEBRİKLER! Projen artık ziyaretçilerle haberleşebilen eksiksiz bir canlı forma sahip! ✓" };
        }
        return { ok: false, msg: "Hata: <button type=\"submit\" class=\"btn-submit\">Mesajı Gönder 🚀</button> yazın." };
      }
    }
  ],

  html_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11 • ADIM 1/5: SEMANTİK HEADER VE NAV",
      title: "1. Görev: Semantik Başlık ve Menü Çubuğu",
      prompt: "Projemizi kurumsal HTML5 mimarisine dönüştürüyoruz! Sayfanın tepesine içinde navigasyon ve TechNova başlığı barındıran semantik header bloğunu ekleyebilir misin?",
      presetCode: "<!-- header ve nav etiketlerini oluşturun -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<header>", "<nav>", "<h1>TechNova</h1>", "</nav>", "</header>"],
      hint: "<header>\n  <nav>\n    <h1>TechNova</h1>\n  </nav>\n</header>",
      solution: "<header>\n  <nav>\n    <h1>TechNova</h1>\n  </nav>\n</header>",
      validator: (code) => {
        const clean = code.trim();
        const hasHeader = /<header\s*>[\s\S]*<\/header\s*>/i.test(clean);
        const hasNav = /<nav\s*>[\s\S]*<\/nav\s*>/i.test(clean);
        if (hasHeader && hasNav) {
          return { ok: true, msg: "Harika! Semantik <header> ve <nav> mimarisi kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: <header><nav><h1>TechNova</h1></nav></header> yapısını kurun." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11 • ADIM 2/5: ANA GÖVDE (MAIN)",
      title: "2. Görev: Sayfanın Omurgası (Main)",
      prompt: "Sayfanın birincil ve benzersiz ana içeriklerini toplayan main etiketini header bloğundan hemen sonra açıp kapat.",
      presetCode: "<header>\n  <nav><h1>TechNova</h1></nav>\n</header>\n<!-- main etiketini buraya ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<main>", "</main>", "<main>\n</main>"],
      hint: "<main>\n</main>",
      solution: "<header>\n  <nav><h1>TechNova</h1></nav>\n</header>\n<main>\n</main>",
      validator: (code) => {
        const clean = code.trim();
        if (/<main\s*>[\s\S]*<\/main\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Sayfanın ana gövdesi <main> etiketiyle belirlendi. ✓" };
        }
        return { ok: false, msg: "Hata: <main>...</main> etiketini header'dan sonra ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11 • ADIM 3/5: İÇERİK BÖLÜMLERİ (SECTION)",
      title: "3. Görev: Hizmetler Bölümü (Section)",
      prompt: "Main içine 'hizmetler' id'sine ve 'Neler Yapıyoruz?' başlığına sahip bağımsız bir bölüm (section) ekle.",
      presetCode: "<main>\n  <!-- section etiketini buraya ekleyin -->\n</main>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<section id=\"hizmetler\">", "<h2>Neler Yapıyoruz?</h2>", "</section>"],
      hint: "<section id=\"hizmetler\">\n    <h2>Neler Yapıyoruz?</h2>\n  </section>",
      solution: "<main>\n  <section id=\"hizmetler\">\n    <h2>Neler Yapıyoruz?</h2>\n  </section>\n</main>",
      validator: (code) => {
        const clean = code.trim();
        const hasSec = /<section\s+[^>]*id\s*=\s*["']hizmetler["'][^>]*>[\s\S]*<\/section\s*>/i.test(clean);
        const hasH2 = /<h2\s*>\s*Neler Yapıyoruz\??\s*<\/h2\s*>/i.test(clean);
        if (hasSec && hasH2) {
          return { ok: true, msg: "Süper! Semantik <section> alanı başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <section id=\"hizmetler\"><h2>Neler Yapıyoruz?</h2></section> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11 • ADIM 4/5: BAĞIMSIZ PROJE KARTI (ARTICLE)",
      title: "4. Görev: Kendi Başına Anlamlı Makale (Article)",
      prompt: "Bölüm içine kendi başına taşınabilir, başlık ve paragraf içeren 'proje-kutu' sınıfına sahip bir makale (article) bloğu yerleştir.",
      presetCode: "<!-- article etiketini buraya ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<article class=\"proje-kutu\">", "<h3>Oyun Portalı</h3>", "<p>HTML5 tabanlı interaktif oyun platformu.</p>", "</article>"],
      hint: "<article class=\"proje-kutu\">\n  <h3>Oyun Portalı</h3>\n  <p>HTML5 tabanlı interaktif oyun platformu.</p>\n</article>",
      solution: "<article class=\"proje-kutu\">\n  <h3>Oyun Portalı</h3>\n  <p>HTML5 tabanlı interaktif oyun platformu.</p>\n</article>",
      validator: (code) => {
        const clean = code.trim();
        const hasArticle = /<article\s+[^>]*class\s*=\s*["']proje-kutu["'][^>]*>[\s\S]*<\/article\s*>/i.test(clean);
        if (hasArticle) {
          return { ok: true, msg: "Çok iyi! Semantik <article> projenin vitrinine monte edildi. ✓" };
        }
        return { ok: false, msg: "Hata: <article class=\"proje-kutu\"><h3>...</h3><p>...</p></article> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11 • ADIM 5/5: ALT BİLGİ ALANI (FOOTER)",
      title: "5. Görev: Semantik Footer ile Sayfayı Mühürle",
      prompt: "Main kapandıktan hemen sonra sayfa sonuna telif haklarını belirten semantik footer alanını ekle!",
      presetCode: "</main>\n<!-- footer etiketini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<footer>", "<p>&copy; 2026 TechNova Studio. Tüm Hakları Saklıdır.</p>", "</footer>"],
      hint: "<footer>\n  <p>&copy; 2026 TechNova Studio. Tüm Hakları Saklıdır.</p>\n</footer>",
      solution: "</main>\n<footer>\n  <p>&copy; 2026 TechNova Studio. Tüm Hakları Saklıdır.</p>\n</footer>",
      validator: (code) => {
        const clean = code.trim();
        const hasFooter = /<footer\s*>[\s\S]*<\/footer\s*>/i.test(clean);
        const hasCopy = /(&copy;|©)\s*2026 TechNova Studio/i.test(clean);
        if (hasFooter && hasCopy) {
          return { ok: true, msg: "🎉 TEBRİKLER! Projen artık Google ve erişilebilirlik standartlarına tam uyumlu semantik bir omurgaya sahip! ✓" };
        }
        return { ok: false, msg: "Hata: <footer><p>&copy; 2026 TechNova Studio. Tüm Hakları Saklıdır.</p></footer> yazın." };
      }
    }
  ],

  html_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12 • ADIM 1/5: TANITIM VİDEOSU (VIDEO CONTROLS)",
      title: "1. Görev: Yerel Tanıtım Videosu Oynatıcısı",
      prompt: "Ziyaretçilere web projemizin demosunu göstermek için 'demo.mp4' dosyasını oynatan ve kullanıcı kontrollerine sahip video alanını ekle.",
      presetCode: "<!-- video etiketini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<video src=\"demo.mp4\" controls width=\"640\">Tarayıcınız video oynatmayı desteklemiyor.</video>", "controls", "width=\"640\""],
      hint: "<video src=\"demo.mp4\" controls width=\"640\">Tarayıcınız video oynatmayı desteklemiyor.</video>",
      solution: "<video src=\"demo.mp4\" controls width=\"640\">Tarayıcınız video oynatmayı desteklemiyor.</video>",
      validator: (code) => {
        const clean = code.trim();
        const hasVideo = /<video\s+[^>]*src\s*=\s*["']demo\.mp4["'][^>]*controls[^>]*>[\s\S]*<\/video\s*>/i.test(clean) ||
                         /<video\s+[^>]*controls[^>]*src\s*=\s*["']demo\.mp4["'][^>]*>[\s\S]*<\/video\s*>/i.test(clean);
        if (hasVideo) {
          return { ok: true, msg: "Harika! Canlı video oynatıcı alanı (<video controls>) oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: <video src=\"demo.mp4\" controls width=\"640\">...</video> yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12 • ADIM 2/5: ÇOKLU VİDEO KAYNAĞI (SOURCE)",
      title: "2. Görev: Alternatif Video Formatları",
      prompt: "Farklı tarayıcılar için alternatif mp4 ve webm formatları sunan kaynak etiketli (source) video yapısını oluştur.",
      presetCode: "<video controls>\n  <!-- source etiketlerini ekleyin -->\n</video>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<source src=\"demo.mp4\" type=\"video/mp4\">", "<source src=\"demo.webm\" type=\"video/webm\">"],
      hint: "<video controls>\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n  <source src=\"demo.webm\" type=\"video/webm\">\n</video>",
      solution: "<video controls>\n  <source src=\"demo.mp4\" type=\"video/mp4\">\n  <source src=\"demo.webm\" type=\"video/webm\">\n</video>",
      validator: (code) => {
        const clean = code.trim();
        const hasMp4 = /<source\s+[^>]*src\s*=\s*["']demo\.mp4["'][^>]*type\s*=\s*["']video\/mp4["']/i.test(clean);
        const hasWebm = /<source\s+[^>]*src\s*=\s*["']demo\.webm["'][^>]*type\s*=\s*["']video\/webm["']/i.test(clean);
        if (hasMp4 && hasWebm) {
          return { ok: true, msg: "Mükemmel! MP4 ve WebM alternatif kaynakları bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: Video içine <source src=\"demo.mp4\"...> ve <source src=\"demo.webm\"...> ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12 • ADIM 3/5: ARKA PLAN SESİ / PODCAST (AUDIO)",
      title: "3. Görev: Ses Oynatıcı (Audio Controls)",
      prompt: "Ziyaretçilere ses kaydı veya podcast dinletmek için 'tanitim.mp3' dosyasını kontrollerle oynatan ses (audio) bileşenini ekle.",
      presetCode: "<!-- audio etiketini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<audio src=\"tanitim.mp3\" controls></audio>", "<audio", "controls>", "</audio>"],
      hint: "<audio src=\"tanitim.mp3\" controls></audio>",
      solution: "<audio src=\"tanitim.mp3\" controls></audio>",
      validator: (code) => {
        const clean = code.trim();
        if (/<audio\s+[^>]*src\s*=\s*["']tanitim\.mp3["'][^>]*controls[^>]*>[\s\S]*<\/audio\s*>/i.test(clean) ||
            /<audio\s+[^>]*controls[^>]*src\s*=\s*["']tanitim\.mp3["'][^>]*>[\s\S]*<\/audio\s*>/i.test(clean)) {
          return { ok: true, msg: "Süper! Ses oynatıcı (<audio>) başarıyla projeye yerleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: <audio src=\"tanitim.mp3\" controls></audio> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12 • ADIM 4/5: GÖMÜLÜ YOUTUBE VİDEOSU (IFRAME)",
      title: "4. Görev: YouTube Tanıtım Videosu Gömme",
      prompt: "Sayfamıza harici video demomuzu gömmek için belirtilen YouTube adresini yükleyen bir çerçeve (iframe) ekle.",
      presetCode: "<!-- iframe etiketini buraya ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<iframe src=\"https://www.youtube.com/embed/demo\" title=\"TechNova Demosu\" width=\"560\" height=\"315\" allowfullscreen></iframe>", "title=\"TechNova Demosu\"", "width=\"560\"", "height=\"315\""],
      hint: "<iframe src=\"https://www.youtube.com/embed/demo\" title=\"TechNova Demosu\" width=\"560\" height=\"315\" allowfullscreen></iframe>",
      solution: "<iframe src=\"https://www.youtube.com/embed/demo\" title=\"TechNova Demosu\" width=\"560\" height=\"315\" allowfullscreen></iframe>",
      validator: (code) => {
        const clean = code.trim();
        const hasIframe = /<iframe\s+[^>]*src\s*=\s*["']https:\/\/www\.youtube\.com\/embed\/demo["'][^>]*>[\s\S]*<\/iframe\s*>/i.test(clean);
        const hasTitle = /title\s*=\s*["']TechNova Demosu["']/i.test(clean);
        if (hasIframe && hasTitle) {
          return { ok: true, msg: "Çok iyi! YouTube gömülü video alanı erişilebilir title ile bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <iframe src=\"https://www.youtube.com/embed/demo\" title=\"TechNova Demosu\" ...></iframe> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12 • ADIM 5/5: ETKİLEŞİMLİ AÇILIR KUTU (DETAILS & SUMMARY)",
      title: "5. Görev: Sıkça Sorulan Sorular Akordiyonu",
      prompt: "Tıklanınca açılan modern bir S.S.S kutusu oluşturmak için özet başlığı (summary) ve detay metni içeren açılır detay (details) bloğu ekle!",
      presetCode: "<!-- details ve summary etiketini ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<details>", "<summary>Nasıl sipariş verebilirim?</summary>", "<p>İletişim formunu doldurarak anında teklif alabilirsiniz.</p>", "</details>"],
      hint: "<details>\n  <summary>Nasıl sipariş verebilirim?</summary>\n  <p>İletişim formunu doldurarak anında teklif alabilirsiniz.</p>\n</details>",
      solution: "<details>\n  <summary>Nasıl sipariş verebilirim?</summary>\n  <p>İletişim formunu doldurarak anında teklif alabilirsiniz.</p>\n</details>",
      validator: (code) => {
        const clean = code.trim();
        const hasDetails = /<details\s*>[\s\S]*<\/details\s*>/i.test(clean);
        const hasSummary = /<summary\s*>\s*Nasıl sipariş verebilirim\??\s*<\/summary\s*>/i.test(clean);
        if (hasDetails && hasSummary) {
          return { ok: true, msg: "🎉 TEBRİKLER! Projen video, ses, gömülü medya ve interaktif akordiyonlarla donatıldı! ✓" };
        }
        return { ok: false, msg: "Hata: <details><summary>Nasıl sipariş verebilirim?</summary><p>...</p></details> yazın." };
      }
    }
  ],

  html_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13 • ADIM 1/5: KARAKTER KODLAMASI (CHARSET)",
      title: "1. Görev: Türkçe Karakter Desteği",
      prompt: "Web sitemizde Türkçe karakterlerin kusursuz görünmesi için head içine UTF-8 karakter kodlaması meta etiketini ekle.",
      presetCode: "<head>\n  <!-- charset meta etiketini ekleyin -->\n  <title>TechNova Studio</title>\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta charset=\"UTF-8\">", "<meta charset=\"utf-8\">"],
      hint: "<meta charset=\"UTF-8\">",
      solution: "<head>\n  <meta charset=\"UTF-8\">\n  <title>TechNova Studio</title>\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<meta\s+charset\s*=\s*["']UTF-8["']\s*\/?>/i.test(clean)) {
          return { ok: true, msg: "Harika! UTF-8 karakter kodlaması tanımlandı, Türkçe desteği garantilendi. ✓" };
        }
        return { ok: false, msg: "Hata: <meta charset=\"UTF-8\"> etiketini ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13 • ADIM 2/5: MOBİL UYUMLULUK (VIEWPORT)",
      title: "2. Görev: Responsive Mobil Uyumluluk Kalkanı",
      prompt: "Web sayfamızın telefon ve tabletlerde bozulmadan tam ekrana uyum sağlaması için viewport meta etiketini head içine yaz.",
      presetCode: "<head>\n  <meta charset=\"UTF-8\">\n  <!-- viewport etiketini ekleyin -->\n  <title>TechNova Studio</title>\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", "name=\"viewport\"", "content=\"width=device-width, initial-scale=1.0\""],
      hint: "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
      solution: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>TechNova Studio</title>\n</head>",
      validator: (code) => {
        const clean = code.trim();
        const hasViewport = /name\s*=\s*["']viewport["']/i.test(clean);
        const hasContent = /content\s*=\s*["']width=device-width,\s*initial-scale=1\.0["']/i.test(clean);
        if (hasViewport && hasContent) {
          return { ok: true, msg: "Mükemmel! Viewport meta etiketiyle mobil duyarlılık sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13 • ADIM 3/5: GOOGLE ARAMA AÇIKLAMASI (META DESCRIPTION)",
      title: "3. Görev: Arama Motoru SEO Açıklaması",
      prompt: "Google aramalarında projemizin altında çıkacak açıklama metnini (description) belirten meta etiketini ekle.",
      presetCode: "<head>\n  <!-- meta description etiketini ekleyin -->\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta name=\"description\" content=\"TechNova yenilikçi dijital web portfolyosu ve modern arayüzler platformu.\">", "name=\"description\""],
      hint: "<meta name=\"description\" content=\"TechNova yenilikçi dijital web portfolyosu ve modern arayüzler platformu.\">",
      solution: "<head>\n  <meta name=\"description\" content=\"TechNova yenilikçi dijital web portfolyosu ve modern arayüzler platformu.\">\n</head>",
      validator: (code) => {
        const clean = code.trim();
        const hasDesc = /name\s*=\s*["']description["']/i.test(clean);
        const hasContent = /content\s*=\s*["']TechNova yenilikçi dijital web portfolyosu[\s\S]*["']/i.test(clean);
        if (hasDesc && hasContent) {
          return { ok: true, msg: "Süper! SEO meta description etiketi başarıyla yerleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: İstenen <meta name=\"description\" content=\"...\"> etiketini yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13 • ADIM 4/5: TARAYICI SEKME İKONU (FAVICON)",
      title: "4. Görev: Sekme Favicon İkonu Bağlantısı",
      prompt: "Tarayıcı sekmesinde şirket ikonumuzun parlaması için 'favicon.png' görselini bağlayan ikon link etiketini ekle.",
      presetCode: "<head>\n  <!-- favicon linkini ekleyin -->\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<link rel=\"icon\" type=\"image/png\" href=\"favicon.png\">", "rel=\"icon\"", "href=\"favicon.png\""],
      hint: "<link rel=\"icon\" type=\"image/png\" href=\"favicon.png\">",
      solution: "<head>\n  <link rel=\"icon\" type=\"image/png\" href=\"favicon.png\">\n</head>",
      validator: (code) => {
        const clean = code.trim();
        const hasIcon = /rel\s*=\s*["']icon["']/i.test(clean);
        const hasHref = /href\s*=\s*["']favicon\.png["']/i.test(clean);
        if (hasIcon && hasHref && /<link\b/i.test(clean)) {
          return { ok: true, msg: "Çok iyi! Favicon ikonu projeye bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <link rel=\"icon\" type=\"image/png\" href=\"favicon.png\"> yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13 • ADIM 5/5: HARİCİ STİL BAĞLANTISI (STYLESHEET)",
      title: "5. Görev: CSS Stil Dosyasını Bağla",
      prompt: "Projemizi stillendirecek olan 'style.css' dosyasını sayfaya bağlayan link etiketini head içine yerleştir!",
      presetCode: "<head>\n  <meta charset=\"UTF-8\">\n  <title>TechNova Studio</title>\n  <!-- stylesheet linkini ekleyin -->\n</head>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<link rel=\"stylesheet\" href=\"style.css\">", "rel=\"stylesheet\"", "href=\"style.css\""],
      hint: "<link rel=\"stylesheet\" href=\"style.css\">",
      solution: "<head>\n  <meta charset=\"UTF-8\">\n  <title>TechNova Studio</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
      validator: (code) => {
        const clean = code.trim();
        const hasStyle = /rel\s*=\s*["']stylesheet["']/i.test(clean);
        const hasHref = /href\s*=\s*["']style\.css["']/i.test(clean);
        if (hasStyle && hasHref && /<link\b/i.test(clean)) {
          return { ok: true, msg: "🎉 TEBRİKLER! Head, SEO, Favicon ve Stil bağlantılarının tümü tamamlandı! ✓" };
        }
        return { ok: false, msg: "Hata: <link rel=\"stylesheet\" href=\"style.css\"> yazın." };
      }
    }
  ],

  html_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14 • FİNAL 1/5: EKSİKSİZ HEAD MİMARİSİ",
      title: "1. Görev: Final Proje Head Bölümü",
      prompt: "Büyük Final Lansmanı Başlıyor! Projenin profesyonel head alanını kur: İçinde UTF-8 karakter seti, responsive viewport ve 'TechNova | Canlı Web Vitrini' başlığı yer alsın.",
      presetCode: "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <!-- 3 kritik meta ve title etiketini buraya yerleştirin -->\n</head>\n<body>\n</body>\n</html>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<meta charset=\"UTF-8\">", "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">", "<title>TechNova | Canlı Web Vitrini</title>"],
      hint: "<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>TechNova | Canlı Web Vitrini</title>\n</head>",
      solution: "<!DOCTYPE html>\n<html lang=\"tr\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>TechNova | Canlı Web Vitrini</title>\n</head>\n<body>\n</body>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        const hasChar = /<meta\s+charset\s*=\s*["']UTF-8["']/i.test(clean);
        const hasView = /name\s*=\s*["']viewport["']/i.test(clean);
        const hasTitle = /<title\s*>\s*TechNova \| Canlı Web Vitrini\s*<\/title\s*>/i.test(clean);
        if (hasChar && hasView && hasTitle) {
          return { ok: true, msg: "Harika! Final projesinin SEO ve mobil uyumlu Head omurgası hazırlandı! ✓" };
        }
        return { ok: false, msg: "Hata: charset UTF-8, viewport ve <title>TechNova | Canlı Web Vitrini</title> etiketlerini eksiksiz yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14 • FİNAL 2/5: SEMANTİK HEADER VE MENÜ",
      title: "2. Görev: Canlı Header ve Gezinti Menüsü",
      prompt: "Body içine projenin semantik header alanını inşa et: İçinde navigasyon menüsü, site başlığı ile sayfa içi 'Projeler' ve 'İletişim' bağlantıları yer alsın.",
      presetCode: "<body>\n  <!-- header ve nav bloğunu ekleyin -->\n</body>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<header>", "<nav>", "<h1>TechNova Studio</h1>", "<a href=\"#projeler\">Projeler</a>", "<a href=\"#iletisim\">İletişim</a>", "</nav>", "</header>"],
      hint: "<header>\n  <nav>\n    <h1>TechNova Studio</h1>\n    <a href=\"#projeler\">Projeler</a>\n    <a href=\"#iletisim\">İletişim</a>\n  </nav>\n</header>",
      solution: "<header>\n  <nav>\n    <h1>TechNova Studio</h1>\n    <a href=\"#projeler\">Projeler</a>\n    <a href=\"#iletisim\">İletişim</a>\n  </nav>\n</header>",
      validator: (code) => {
        const clean = code.trim();
        const hasHeader = /<header\s*>[\s\S]*<\/header\s*>/i.test(clean);
        const hasNav = /<nav\s*>[\s\S]*<\/nav\s*>/i.test(clean);
        const hasH1 = /<h1>\s*TechNova Studio\s*<\/h1>/i.test(clean);
        if (hasHeader && hasNav && hasH1) {
          return { ok: true, msg: "Mükemmel! Header ve menü navigasyonu başarıyla inşa edildi. ✓" };
        }
        return { ok: false, msg: "Hata: <header><nav><h1>TechNova Studio</h1>... linkleri ekleyin.</nav></header>" };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14 • FİNAL 3/5: VİTRİN GÖRSELİ VE AKSİYON BUTONU",
      title: "3. Görev: Kahraman Bölümü & Aksiyon Butonu",
      prompt: "Main içine 'vitrin' id'li bölümü yerleştir: İçinde vitrin görseli, tanıtım paragrafı ve 'Hemen Başla' aksiyon butonu bulunsun.",
      presetCode: "<main>\n  <!-- vitrin section'ını buraya ekleyin -->\n</main>",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<section id=\"vitrin\">", "<img src=\"vitrin.jpg\" alt=\"TechNova Projeler\" width=\"600\">", "<p>Modern web çözümleri ve yaratıcı arayüzler.</p>", "<button type=\"button\" class=\"btn-cta\">Hemen Başla</button>", "</section>"],
      hint: "<section id=\"vitrin\">\n  <img src=\"vitrin.jpg\" alt=\"TechNova Projeler\" width=\"600\">\n  <p>Modern web çözümleri ve yaratıcı arayüzler.</p>\n  <button type=\"button\" class=\"btn-cta\">Hemen Başla</button>\n</section>",
      solution: "<section id=\"vitrin\">\n  <img src=\"vitrin.jpg\" alt=\"TechNova Projeler\" width=\"600\">\n  <p>Modern web çözümleri ve yaratıcı arayüzler.</p>\n  <button type=\"button\" class=\"btn-cta\">Hemen Başla</button>\n</section>",
      validator: (code) => {
        const clean = code.trim();
        const hasSec = /<section\s+[^>]*id\s*=\s*["']vitrin["'][^>]*>/i.test(clean);
        const hasImg = /<img\s+[^>]*src\s*=\s*["']vitrin\.jpg["']/i.test(clean);
        const hasBtn = /<button\s+[^>]*class\s*=\s*["']btn-cta["'][^>]*>[\s\S]*Hemen Başla[\s\S]*<\/button\s*>/i.test(clean);
        if (hasSec && hasImg && hasBtn) {
          return { ok: true, msg: "Süper! Vitrin görseli, tanıtım metni ve aksiyon butonu yerleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: <section id=\"vitrin\"> içine img, p ve button elemanlarını ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14 • FİNAL 4/5: İLETİŞİM VE TEKLİF FORMU",
      title: "4. Görev: Canlı İletişim Bölümü",
      prompt: "Projemizin mesaj alma alanını oluştur: 'iletisim' id'li bölüm içine isim, e-posta alanları ve gönderme butonu içeren bir iletişim formu ekle.",
      presetCode: "<!-- İletişim section ve formunu ekleyin -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<section id=\"iletisim\">", "<h2>Bize Yazın</h2>", "<form action=\"/gonder\" method=\"POST\">", "<input type=\"text\" name=\"ad\" required placeholder=\"Adınız\">", "<input type=\"email\" name=\"email\" required placeholder=\"E-Postanız\">", "<button type=\"submit\">Gönder</button>", "</form>", "</section>"],
      hint: "<section id=\"iletisim\">\n  <h2>Bize Yazın</h2>\n  <form action=\"/gonder\" method=\"POST\">\n    <input type=\"text\" name=\"ad\" required placeholder=\"Adınız\">\n    <input type=\"email\" name=\"email\" required placeholder=\"E-Postanız\">\n    <button type=\"submit\">Gönder</button>\n  </form>\n</section>",
      solution: "<section id=\"iletisim\">\n  <h2>Bize Yazın</h2>\n  <form action=\"/gonder\" method=\"POST\">\n    <input type=\"text\" name=\"ad\" required placeholder=\"Adınız\">\n    <input type=\"email\" name=\"email\" required placeholder=\"E-Postanız\">\n    <button type=\"submit\">Gönder</button>\n  </form>\n</section>",
      validator: (code) => {
        const clean = code.trim();
        const hasSec = /<section\s+[^>]*id\s*=\s*["']iletisim["'][^>]*>/i.test(clean);
        const hasForm = /<form\s+[^>]*action\s*=\s*["']\/gonder["'][^>]*method\s*=\s*["']POST["']/i.test(clean);
        const hasBtn = /<button\s+[^>]*type\s*=\s*["']submit["'][^>]*>[\s\S]*Gönder[\s\S]*<\/button\s*>/i.test(clean);
        if (hasSec && hasForm && hasBtn) {
          return { ok: true, msg: "Harika! Form bölümü tüm inputlarıyla projeye bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <section id=\"iletisim\"> içinde istenen <form> elemanlarını yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14 • FİNAL 5/5: BÜYÜK CANLI YAYIN VE MÜHÜR",
      title: "5. Görev: Projeyi Footer ile Mühürle ve Canlıya Al!",
      prompt: "Ve Büyük Final! Sayfanın sonuna telif haklarını içeren footer alanını ekle ve ardından body ile html etiketlerini kapatıp projeni canlıya al!",
      presetCode: "</main>\n<!-- footer ekleyin ve body, html kapatın -->\n",
      filename: "index.html",
      lang: "HTML5",
      quickKeys: ["<footer>", "<p>&copy; 2026 TechNova Studio - Tüm Hakları Saklıdır.</p>", "</footer>", "</body>", "</html>"],
      hint: "<footer>\n  <p>&copy; 2026 TechNova Studio - Tüm Hakları Saklıdır.</p>\n</footer>\n</body>\n</html>",
      solution: "<footer>\n  <p>&copy; 2026 TechNova Studio - Tüm Hakları Saklıdır.</p>\n</footer>\n</body>\n</html>",
      validator: (code) => {
        const clean = code.trim();
        const hasFooter = /<footer\s*>[\s\S]*<\/footer\s*>/i.test(clean);
        const hasBody = /<\/body\s*>/i.test(clean);
        const hasHtml = /<\/html\s*>/i.test(clean);
        const hasCopy = /(&copy;|©)\s*2026 TechNova Studio/i.test(clean);
        if (hasFooter && hasBody && hasHtml && hasCopy) {
          return { ok: true, msg: "🏆 TEBRİKLER! HTML5 MÜFREDATININ TÜM MODÜLLERİNİ VE GERÇEK WEB PROJENİ KENDİ ELLERİNLE BİZZAT KODLAYARAK CANLIYA ALDIN! 🚀🎉" };
        }
        return { ok: false, msg: "Hata: <footer><p>&copy; 2026 TechNova Studio - Tüm Hakları Saklıdır.</p></footer> ve ardından </body></html> kapatın." };
      }
    }
  ]
};

// Aliases for review cards and challenges
for (let i = 1; i <= 14; i++) {
  if (HTML_TOPIC_REVIEWS[`html_${i}`]) {
    HTML_TOPIC_REVIEWS[`h${i}`] = HTML_TOPIC_REVIEWS[`html_${i}`];
    HTML_TOPIC_REVIEWS[`html${i}`] = HTML_TOPIC_REVIEWS[`html_${i}`];
  }
  if (HTML_CHALLENGES[`html_${i}`]) {
    HTML_CHALLENGES[`h${i}`] = HTML_CHALLENGES[`html_${i}`];
    HTML_CHALLENGES[`html${i}`] = HTML_CHALLENGES[`html_${i}`];
  }
}





// 📌 JSON Şemasına Uygun 14 Modüllü Standart HTML Soru & Alıştırma Veri Seti
const HTML_EXERCISES_DATA = {
  "technology": "HTML",
  "total_modules": 14,
  "modules": [
    {
      "module_id": 1,
      "module_title": "HTML5 Temelleri & Sayfa İskeleti",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "Modern bir web sayfası için HTML5 doküman tipi (DOCTYPE) bildirimini yazın.",
          "starter_code": "",
          "expected_answer": "<!DOCTYPE html>",
          "hint": "<!DOCTYPE html> bildirimini kullanın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Bir HTML dokümanında teknik meta veriler, sayfa başlığı ve harici kaynak bağlantıları hangi semantik etiket içerisine yazılır?",
          "options": [
            "<meta>",
            "<title>",
            "<header>",
            "<head>"
          ],
          "correct_option_index": 1,
          "hint": "Bu etiket <head> içinde yer alır ve sekme metnini tanımlar."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "Sayfa dilini Türkçe ('tr') olarak tanımlayan açılış html etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<html lang=\"tr\">",
          "hint": "lang=\"tr\" özniteliğini ekleyin."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Aşağıdakilerden hangisi HTML5 standartlarına göre teknik olarak tekil (self-closing / boş) bir etikettir?",
          "options": [
            "<head>",
            "<body>",
            "<main>",
            "<html>"
          ],
          "correct_option_index": 1,
          "hint": "Sayfanın gövdesini temsil eden etiketi seçin."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Tarayıcı sekmesinde görünen sayfa başlığını tanımlayan title etiketini açıp kapatarak 'TechNova' yazın.",
          "starter_code": "",
          "expected_answer": "<head></head>",
          "hint": "<head> ve </head> etiketlerini kullanın."
        }
      ]
    },
    {
      "module_id": 2,
      "module_title": "Başlıklar & Karşılama Metinleri",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "'TechNova Studio' metnini içeren ana başlık (birinci seviye) etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<h1>TechNova Studio</h1>",
          "hint": "<h1> ve </h1> etiketlerini kullanın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "HTML başlık hiyerarşisinde en büyük ve en önemli ana başlık seviyesi hangisidir?",
          "options": [
            "1",
            "3",
            "Sınırsız",
            "Her paragraf için bir tane"
          ],
          "correct_option_index": 0,
          "hint": "Sayfa başına bir ana başlık önerilir."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "'Yaratıcı Web Deneyimleri' metnini içeren alt başlık (ikinci seviye) etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<h2>Yaratıcı Web Deneyimleri</h2>",
          "hint": "<h2> etiketini kullanın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Bir metin parçasını anlamsal olarak güçlü bir şekilde vurgulamak ve varsayılan olarak kalın göstermek için hangi etiket tercih edilir?",
          "options": [
            "<i>",
            "<b>",
            "<strong>",
            "<u>"
          ],
          "correct_option_index": 2,
          "hint": "Strong etiketi anlamsal önem vurgusu katar."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "'Modern web projeleri geliştiriyoruz.' metnini içeren bir paragraf etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<p>Modern web projeleri geliştiriyoruz.</p>",
          "hint": "<p> ve </p> etiketlerini kullanın."
        }
      ]
    },
    {
      "module_id": 3,
      "module_title": "Bağlantılar & Aksiyon Butonları (Links & Buttons)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "'https://github.com' adresine yönlendiren ve üzerinde 'GitHub' yazan bir bağlantı etiketi yazın.",
          "starter_code": "",
          "expected_answer": "<a href=\"https://github.com\">GitHub</a>",
          "hint": "href özniteliğine URL adresini verin."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Bir bağlantının tıklandığında mevcut sayfa yerine tamamen yeni bir tarayıcı sekmesinde açılmasını sağlayan hedef özniteliği hangisidir?",
          "options": [
            "target=\"_blank\"",
            "target=\"_self\"",
            "rel=\"newtab\"",
            "window=\"_blank\""
          ],
          "correct_option_index": 0,
          "hint": "target=\"_blank\" kullanılır."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "Tıklandığında sayfa içindeki 'projeler' id'li bölüme kaydıran ve üzerinde 'Projeler' yazan bağlantı etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<a href=\"#projeler\">Projeler</a>",
          "hint": "ID referansı için başına # koyun."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Kullanıcının e-posta istemcisini doğrudan belirtilen adrese yeni ileti penceresiyle açmak için href özniteliğinde hangi protokol öneki kullanılır?",
          "options": [
            "href=\"mail:info@test.com\"",
            "href=\"mailto:info@test.com\"",
            "href=\"email:info@test.com\"",
            "href=\"send:info@test.com\""
          ],
          "correct_option_index": 1,
          "hint": "mailto: protokolünü seçin."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Üzerinde 'Hemen Başla' yazan standart bir buton etiketi yazın.",
          "starter_code": "",
          "expected_answer": "<button type=\"button\">Hemen Başla</button>",
          "hint": "type=\"button\" özniteliğini kullanın."
        }
      ]
    },
    {
      "module_id": 4,
      "module_title": "Görseller & Medya Vitrini (Images)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "Kaynak dosyası 'banner.jpg' ve alternatif açıklaması 'Proje Vitrini' olan bir görsel etiketi yazın.",
          "starter_code": "",
          "expected_answer": "<img src=\"banner.jpg\" alt=\"Proje Vitrini\">",
          "hint": "src ve alt özniteliklerini tanımlayın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Görselin yüklenememesi durumunda veya ekran okuyucular için açıklayıcı metin sağlamada hangi öznitelik zorunlu bir web standardıdır?",
          "options": [
            "Görsel boyutunu sıkıştırmak için",
            "Görsel yüklenemediğinde veya ekran okuyucularda alternatif metin sağlamak için",
            "Görsele animasyon eklemek için",
            "Görseli sağa yaslamak için"
          ],
          "correct_option_index": 1,
          "hint": "Erişilebilirlik ve SEO için alternatif metin sağlar."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "Görsel kapsayıcısı içinde görsel alt yazısı olarak 'Modern Arayüz Tasarımı' metnini içeren başlık etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<figcaption>Modern Arayüz Tasarımı</figcaption>",
          "hint": "<figcaption> ve </figcaption> etiketlerini kullanın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Görsel, grafik veya kod parçacıklarını anlamsal bir başlık ve açıklama ile birlikte sarmalayan semantik HTML5 etiketi hangisidir?",
          "options": [
            "<picture>",
            "<figure>",
            "<image>",
            "<section>"
          ],
          "correct_option_index": 1,
          "hint": "<figure> etiketi kullanılır."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Genişliği 600, yüksekliği 350 piksel olarak boyutlandırılmış 'vitrin.jpg' görsel etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<img src=\"vitrin.jpg\" width=\"600\" height=\"350\">",
          "hint": "width=\"600\" ve height=\"350\" özniteliklerini ekleyin."
        }
      ]
    },
    {
      "module_id": 5,
      "module_title": "Yetenek & Teknoloji Listeleri (Lists)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "'HTML5' maddesini içeren tek bir liste elemanı etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<li>HTML5</li>",
          "hint": "<li> ve </li> etiketlerini kullanın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Maddeleri numaralı (1, 2, 3...) hiyerarşik bir sırada listelemek için hangi kapsayıcı etiket kullanılır?",
          "options": [
            "<ol>",
            "<ul>",
            "<dl>",
            "<list>"
          ],
          "correct_option_index": 1,
          "hint": "Unordered List (ul) etiketidir."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "İçerisinde tek bir 'Tasarım' maddesi bulunan sıralı bir liste oluşturun.",
          "starter_code": "",
          "expected_answer": "<ol><li>Tasarım</li></ol>",
          "hint": "<ol> içine <li> yerleştirin."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Bir sözlük veya terim-açıklama ikilisi tanımlamak için hangi HTML etiketi çifti kullanılır?",
          "options": [
            "<dt>",
            "<dd>",
            "<dfn>",
            "<li>"
          ],
          "correct_option_index": 0,
          "hint": "Definition Term (dt) etiketidir."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Tanım listesi içinde 'Stil Şablonu' açıklamasını barındıran tanım verisi etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<dd>Stil Şablonu</dd>",
          "hint": "<dd> ve </dd> etiketlerini kullanın."
        }
      ]
    },
    {
      "module_id": 6,
      "module_title": "Hizmet & Paket Tablosu (Tables)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "İçerisinde 'Hizmet' yazan bir tablo başlık hücresi oluşturun.",
          "starter_code": "",
          "expected_answer": "<th>Hizmet</th>",
          "hint": "<th> ve </th> etiketlerini kullanın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Bir HTML tablosunda yeni bir yatay satır başlatmak için hangi etiket kullanılır?",
          "options": [
            "<td>",
            "<th>",
            "<tr>",
            "<row>"
          ],
          "correct_option_index": 2,
          "hint": "Table Row (tr) etiketidir."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "İçerisinde '₺2.500' yazan standart bir tablo veri hücresi oluşturun.",
          "starter_code": "",
          "expected_answer": "<td>₺2.500</td>",
          "hint": "<td> ve </td> etiketlerini kullanın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Tablonun ne hakkında olduğunu açıklayan ve tablonun en üstünde başlık olarak duran etiket hangisidir?",
          "options": [
            "<caption>",
            "<title>",
            "<summary>",
            "<thead>"
          ],
          "correct_option_index": 0,
          "hint": "<caption> etiketidir."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Tablo başlığı olarak 'Fiyatlandırma Tablosu' metnini içeren tablo başlığı etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<caption>Fiyatlandırma Tablosu</caption>",
          "hint": "<caption> etiketini kullanın."
        }
      ]
    },
    {
      "module_id": 7,
      "module_title": "İleri Tablolar (Colspan, Rowspan, Thead & Tbody)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "Yatayda 3 sütun genişliğinde yer kaplayan ve içeriğinde 'Toplam' yazan bir tablo veri hücresi oluşturun.",
          "starter_code": "",
          "expected_answer": "<td colspan=\"3\">Toplam</td>",
          "hint": "colspan=\"3\" özniteliğini kullanın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Bir tablo hücresinin dikey eksende birden fazla satırı kaplamasını sağlayan öznitelik hangisidir?",
          "options": [
            "rowspan",
            "colspan",
            "rowmerge",
            "span"
          ],
          "correct_option_index": 0,
          "hint": "Satır birleştirme için 'rowspan' kullanılır."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "Dikeyde 2 satır boyunca uzanan ve içeriğinde 'Full Paket' yazan bir tablo veri hücresi oluşturun.",
          "starter_code": "",
          "expected_answer": "<td rowspan=\"2\">Full Paket</td>",
          "hint": "rowspan=\"2\" özniteliğini kullanın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "HTML tablolarında sütun başlıklarını barındıran satırları semantik olarak gruplayan etiket hangisidir?",
          "options": [
            "<thead>",
            "<tbody>",
            "<tfoot>",
            "<tr>"
          ],
          "correct_option_index": 1,
          "hint": "Table Body (tbody) etiketidir."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Tablonun dipnot ve özet satırlarını toplayan altbilgi etiketini açıp kapatın.",
          "starter_code": "",
          "expected_answer": "<tfoot></tfoot>",
          "hint": "<tfoot> ve </tfoot> etiketlerini kullanın."
        }
      ]
    },
    {
      "module_id": 8,
      "module_title": "Konteyner Düzeni & Kart Mimarisi (Div & Span)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "'card' sınıfına sahip boş bir div konteyneri oluşturup kapatın.",
          "starter_code": "",
          "expected_answer": "<div class=\"card\"></div>",
          "hint": "<div class=\"card\"></div> yazın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "HTML'de sayfa düzeninde yeni bir satır başlatmadan metin akışı içinde kalan satır içi (inline) genel kapsayıcı etiket hangisidir?",
          "options": [
            "<div>",
            "<span>",
            "<section>",
            "<p>"
          ],
          "correct_option_index": 1,
          "hint": "Satır içi kutu için <span> kullanılır."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "'badge' sınıfına sahip ve içeriğinde 'Yeni' yazan bir satır içi (span) etiketi oluşturun.",
          "starter_code": "",
          "expected_answer": "<span class=\"badge\">Yeni</span>",
          "hint": "<span class=\"badge\">Yeni</span> yazın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Bir HTML belgesinde aynı id ve class kullanımı hakkında hangisi doğrudur?",
          "options": [
            "<div> blok seviyeli (block-level), <span> ise satır içi (inline) bir elemandır.",
            "<div> sadece formlarda, <span> tablolarda kullanılır.",
            "<div> içine metin yazılamaz, <span> içine yazılabilir.",
            "Hiçbir fark yoktur, tamamen aynıdır."
          ],
          "correct_option_index": 0,
          "hint": "Blok ve satır içi eleman ayrımını düşünün."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "'hero' id'sine sahip boş bir div konteyneri oluşturup kapatın.",
          "starter_code": "",
          "expected_answer": "<div id=\"hero\"></div>",
          "hint": "id=\"hero\" özniteliğini verin."
        }
      ]
    },
    {
      "module_id": 9,
      "module_title": "Temel İletişim Formu (Form & Inputs)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "Kullanıcıdan metin almak için zorunlu kılınmış bir giriş kutusu (input) yazın.",
          "starter_code": "",
          "expected_answer": "<input type=\"text\" required>",
          "hint": "type=\"text\" ve required özniteliklerini ekleyin."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Form alanında kullanıcıya ne girmesi gerektiğini silik bir ipucu olarak kutunun içinde gösteren öznitelik hangisidir?",
          "options": [
            "method",
            "action",
            "target",
            "src"
          ],
          "correct_option_index": 1,
          "hint": "Form yönlendirme adresi 'action' özniteliğidir."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "'email' id'li giriş alanına bağlanan ve üzerinde 'E-Posta:' yazan bir etiket (label) yazın.",
          "starter_code": "",
          "expected_answer": "<label for=\"email\">E-Posta:</label>",
          "hint": "for=\"email\" özniteliğini kullanın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Kullanıcının birden çok seçeneği bağımsız olarak işaretleyebilmesini sağlayan giriş türü hangisidir?",
          "options": [
            "type=\"secret\"",
            "type=\"password\"",
            "type=\"hidden\"",
            "type=\"mask\""
          ],
          "correct_option_index": 1,
          "hint": "Parola alanı için 'password' tipi kullanılır."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Varsayılan olarak işaretlenmiş (seçili) bir onay kutusu (checkbox) giriş etiketi yazın.",
          "starter_code": "",
          "expected_answer": "<input type=\"checkbox\" checked>",
          "hint": "type=\"checkbox\" ve checked özniteliklerini ekleyin."
        }
      ]
    },
    {
      "module_id": 10,
      "module_title": "Gelişmiş Form Kontrolleri & Gönder Butonu",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "4 satır yüksekliğine sahip çok satırlı metin alanı (textarea) oluşturup kapatın.",
          "starter_code": "",
          "expected_answer": "<textarea rows=\"4\"></textarea>",
          "hint": "rows=\"4\" özniteliğini ekleyin."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Kullanıcıya açılır bir menüden tek bir seçenek seçtirmek için hangi form etiketi kullanılır?",
          "options": [
            "<input type=\"list\">",
            "<select>",
            "<datalist>",
            "<optionbox>"
          ],
          "correct_option_index": 1,
          "hint": "Açılır liste için <select> kullanılır."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "Açılır liste için değeri 'pro' ve metni 'Pro Paket' olan bir seçenek etiketi oluşturun.",
          "starter_code": "",
          "expected_answer": "<option value=\"pro\">Pro Paket</option>",
          "hint": "value=\"pro\" özniteliğini verin."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Form elemanlarını mantıksal bir çerçeve içine alıp çerçeveye başlık kazandıran etiket çifti hangisidir?",
          "options": [
            "<fieldset>",
            "<group>",
            "<box>",
            "<section>"
          ],
          "correct_option_index": 0,
          "hint": "<fieldset> etiketi kullanılır."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Formu sunucuya gönderme işlevine sahip ve üzerinde 'Teklif Al' yazan bir buton etiketi yazın.",
          "starter_code": "",
          "expected_answer": "<button type=\"submit\">Teklif Al</button>",
          "hint": "type=\"submit\" özniteliğini kullanın."
        }
      ]
    },
    {
      "module_id": 11,
      "module_title": "Semantik HTML5 Mimarisi (Semantic Layout)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "Sayfanın ana gezinti ve menü bağlantılarını barındıran semantik navigasyon etiketini açıp kapatın.",
          "starter_code": "",
          "expected_answer": "<header></header>",
          "hint": "<header> ve </header> etiketlerini yazın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Bir web sayfasında sadece bir kez kullanılan ve sayfanın en temel, benzersiz içeriğini barındıran semantik etiket hangisidir?",
          "options": [
            "<aside>",
            "<section>",
            "<article>",
            "<footer>"
          ],
          "correct_option_index": 0,
          "hint": "Yan içerik için <aside> kullanılır."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "Sayfadan bağımsız olarak tek başına paylaşılabilir bir blog yazısını veya haber içeriğini temsil eden makale etiketini açıp kapatın.",
          "starter_code": "",
          "expected_answer": "<main></main>",
          "hint": "<main> ve </main> etiketlerini kullanın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Sayfanın ana konusuyla dolaylı yoldan ilişkili olan kenar çubuğu (sidebar), reklam veya ek bağlantıları barındıran etiket hangisidir?",
          "options": [
            "<section>",
            "<div>",
            "<article>",
            "<main>"
          ],
          "correct_option_index": 2,
          "hint": "Bağımsız içerikler için <article> kullanılır."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Sayfanın en altındaki telif hakları ve yasal bilgileri barındıran altbilgi etiketini açıp kapatın.",
          "starter_code": "",
          "expected_answer": "<footer>© 2026 TechNova</footer>",
          "hint": "<footer> ve </footer> etiketlerini kullanın."
        }
      ]
    },
    {
      "module_id": 12,
      "module_title": "Multimedya & Gömülü İçerikler (Video, Audio & Iframe)",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "Kaynak dosyası 'video.mp4' olan ve kullanıcı kontrollerine sahip bir video etiketi oluşturun.",
          "starter_code": "",
          "expected_answer": "<video src=\"video.mp4\" controls></video>",
          "hint": "src=\"video.mp4\" ve controls özniteliklerini kullanın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Video ve ses etiketlerinde farklı tarayıcı uyumlulukları için alternatif dosya formatları sunan alt etiket hangisidir?",
          "options": [
            "<embed-page>",
            "<frame>",
            "<iframe>",
            "<webview>"
          ],
          "correct_option_index": 2,
          "hint": "Gömülü çerçeve için <iframe> kullanılır."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "'https://www.youtube.com/embed/demo' adresindeki videoyu sayfaya gömen çerçeve (iframe) etiketini oluşturun.",
          "starter_code": "",
          "expected_answer": "<iframe src=\"https://www.youtube.com/embed/demo\"></iframe>",
          "hint": "src özniteliğine URL verin."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Tıklandığında açılıp kapanabilen akordiyon veya detay kutusu oluşturmak için summary etiketi ile birlikte hangi etiket kullanılır?",
          "options": [
            "<collapse> ve <summary>",
            "<details> ve <summary>",
            "<accordion> ve <item>",
            "<toggle> ve <content>"
          ],
          "correct_option_index": 1,
          "hint": "<details> ve <summary> kullanılır."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "Açılır detay kutusu içinde başlık olarak görünen ve metni 'Sıkça Sorulan Sorular' olan özet başlık etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<summary>Sıkça Sorulan Sorular</summary>",
          "hint": "<summary> ve </summary> etiketlerini kullanın."
        }
      ]
    },
    {
      "module_id": 13,
      "module_title": "Head, Meta Etiketleri & SEO Mimarisi",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "Karakter kodlamasını UTF-8 olarak tanımlayan meta etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<meta charset=\"UTF-8\">",
          "hint": "charset=\"UTF-8\" özniteliğini kullanın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "Web sayfasının mobil cihazlarda ekran genişliğine tam oturmasını ve ölçeklenmesini sağlayan kritik meta etiketi hangisidir?",
          "options": [
            "viewport",
            "responsive",
            "mobile",
            "device-width"
          ],
          "correct_option_index": 0,
          "hint": "Görünüm alanı anlamına gelen 'viewport' seçilmelidir."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "Sayfa açıklamasını 'TechNova Web Portfolyosu' olarak belirten meta etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<meta name=\"description\" content=\"TechNova Web Portfolyosu\">",
          "hint": "name=\"description\" ve content=\"...\" özniteliklerini kullanın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Arama motorlarının sayfayı dizine eklemesini ve bağlantıları takip etmesini sağlayan meta robots içeriği hangisidir?",
          "options": [
            "<style src=\"style.css\">",
            "<link rel=\"stylesheet\" href=\"style.css\">",
            "<script href=\"style.css\">",
            "<css path=\"style.css\">"
          ],
          "correct_option_index": 1,
          "hint": "<link rel=\"stylesheet\" href=\"...\"> etiketi kullanılır."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "'style.css' harici stil şablonunu sayfaya bağlayan link etiketini yazın.",
          "starter_code": "",
          "expected_answer": "<link rel=\"stylesheet\" href=\"style.css\">",
          "hint": "rel=\"stylesheet\" ve href=\"style.css\" özniteliklerini kullanın."
        }
      ]
    },
    {
      "module_id": 14,
      "module_title": "Büyük Canlı Proje Lansmanı & Yayın",
      "exercises": [
        {
          "exercise_id": 1,
          "type": "code_input",
          "question": "HTML5 doküman bildirimi ile Türkçe dil tanımlı html açılış etiketini yan yana yazın.",
          "starter_code": "",
          "expected_answer": "<!DOCTYPE html><html lang=\"tr\">",
          "hint": "<!DOCTYPE html><html lang=\"tr\"> yazın."
        },
        {
          "exercise_id": 2,
          "type": "multiple_choice",
          "question": "İyi tasarlanmış bir HTML5 sayfasında üst bilgi, ana içerik ve alt bilgi hiyerarşisi hangi sırayla dizilmelidir?",
          "options": [
            "<header>, <main>, <footer>",
            "<footer>, <header>, <main>",
            "<aside>, <footer>, <header>",
            "<main>, <header>, <nav>"
          ],
          "correct_option_index": 0,
          "hint": "Üst başlık, ana gövde ve altbilgi sırasını seçin."
        },
        {
          "exercise_id": 3,
          "type": "code_input",
          "question": "'vitrin' id'li bir bölüm (section) etiketi açıp kapatın.",
          "starter_code": "",
          "expected_answer": "<section id=\"vitrin\"></section>",
          "hint": "<section id=\"vitrin\"></section> yazın."
        },
        {
          "exercise_id": 4,
          "type": "multiple_choice",
          "question": "Web erişilebilirliği (a11y) standartlarına göre görme engelli ekran okuyucuları için görsellerde hangi öznitelik mutlaka bulunmalıdır?",
          "options": [
            "W3C",
            "ECMA",
            "MDN",
            "ISO"
          ],
          "correct_option_index": 0,
          "hint": "World Wide Web Consortium (W3C) validator kullanılır."
        },
        {
          "exercise_id": 5,
          "type": "code_input",
          "question": "'iletisim' id'sine sahip ve POST yöntemiyle veri gönderen bir form etiketi açıp kapatın.",
          "starter_code": "",
          "expected_answer": "<form id=\"iletisim\" method=\"POST\"></form>",
          "hint": "id=\"iletisim\" ve method=\"POST\" özniteliklerini kullanın."
        }
      ]
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HTML_COURSE_TOPICS, HTML_TOPIC_REVIEWS, HTML_CHALLENGES, HTML_EXERCISES_DATA };
}
