// =========================================================================
// 🎨 CSS3 MÜFREDATI: 16 HIZLI TEORİ KARTI & 80 İNTERAKTİF KODLAMA GÖREVİ
// (W3Schools CSS & Enes Bayram Web Geliştirme Ders 21-44 Müfredatı)
// =========================================================================

const CSS_TOPIC_REVIEWS = {
  "css_1": {
    "title": "CSS'e Giriş & Ekleme Yöntemleri",
    "readTime": "2 dk okuma",
    "rewardText": "🏡 Giriş Çiftliği & Su Kuyusu",
    "logic": "CSS (Cascading Style Sheets), HTML elemanlarının görsel tasarımını, renklerini, boyutlarını ve sayfa düzenini kontrol eden stil dilidir.",
    "syntaxRules": [
      "<code>secici { ozellik: deger; }</code> : Temel CSS kural bloğu sözdizimi.",
      "<code>&lt;link rel=\"stylesheet\" href=\"style.css\"&gt;</code> : Harici (External) CSS bağlama standardı.",
      "<code>&lt;style&gt; ... &lt;/style&gt;</code> : HTML &lt;head&gt; içine yazılan dahili (Internal) CSS.",
      "<code>style=\"color: red;\"</code> : HTML etiketine doğrudan yazılan satır içi (Inline) CSS."
    ],
    "pitfalls": [
      "⚠️ Her CSS kuralının sonuna noktalı virgül (<code>;</code>) koymayı unutmayın.",
      "⚠️ Satır içi (Inline) CSS yönetimi zordur ve temiz kod standartlarına uymaz; harici CSS tercih edilmelidir.",
      "⚠️ Özellik ile değer arasında iki nokta (<code>:</code>) bulunmalıdır."
    ],
    "exampleCode": "/* Harici style.css dosyası */\nh1 {\n  color: #2563eb;\n  text-align: center;\n}"
  },
  "css_2": {
    "title": "CSS Seçicileri & Öncelik Sırası",
    "readTime": "3 dk okuma",
    "rewardText": "💡 Şehir Elektrik Şebekesi",
    "logic": "CSS'te stillerin hangi HTML elemanlarına uygulanacağını belirlemek için etiket, sınıf (.class), ID (#id), torun ve evrensel (*) seçiciler kullanılır.",
    "syntaxRules": [
      "<code>p { }</code> : Tüm &lt;p&gt; etiketlerini hedefler (Etiket Seçici).",
      "<code>.kart { }</code> : class=\"kart\" olan tüm elemanları hedefler (Sınıf Seçici).",
      "<code>#ana-baslik { }</code> : id=\"ana-baslik\" olan tekil elemanı hedefler (ID Seçici).",
      "<code>h1, h2, p { }</code> : Birden fazla seçiciye aynı anda stil verir (Grup Seçici).",
      "<code>div > p { }</code> : div'in doğrudan çocuğu olan p etiketlerini hedefler (Çocuk Seçici)."
    ],
    "pitfalls": [
      "⚠️ ID seçiciler (#) sınıflardan (.) daha yüksek önceliğe (specificity) sahiptir.",
      "⚠️ Bir sayfada aynı ID sadece bir kez kullanılmalıdır; tekrar eden stiller için sınıf (.) kullanılmalıdır.",
      "⚠️ <code>!important</code> diğer tüm kuralları ezer ancak kod bakımını zorlaştırdığı için çok nadir kullanılmalıdır."
    ],
    "exampleCode": "/* Sınıf ve ID Seçicileri */\n.kutu {\n  background-color: #f1f5f9;\n}\n\n#ozel-buton {\n  color: #ffffff;\n  background-color: #2563eb;\n}"
  },
  "css_3": {
    "title": "Renkler & Arka Planlar (Colors & BG)",
    "readTime": "2 dk okuma",
    "rewardText": "🚰 Su Arıtma & Çeşmeler",
    "logic": "Metin ve arayüz elemanlarının renklerini belirlemek, arka plan rengi veya görseli atamak için kullanılır.",
    "syntaxRules": [
      "<code>color: #1e293b;</code> : Metin rengini belirler (HEX, RGB, İsim).",
      "<code>background-color: rgba(37, 99, 235, 0.5);</code> : Yarı saydam arka plan rengi.",
      "<code>background-image: url('resim.jpg');</code> : Arka plana resim ekler.",
      "<code>background-size: cover;</code> : Resmi alanı tamamen kaplayacak şekilde ölçekler.",
      "<code>background-repeat: no-repeat;</code> : Arka plan görselinin tekrarlanmasını engeller."
    ],
    "pitfalls": [
      "⚠️ <code>color</code> metin rengini değiştirirken, <code>background-color</code> kutunun zeminini boyar.",
      "⚠️ <code>rgba(r, g, b, alpha)</code> içindeki alpha değeri 0 ile 1 arasında şeffaflık belirtir.",
      "⚠️ Resim yollarında (url) dosya adını ve uzantısını doğru yazmaya dikkat edin."
    ],
    "exampleCode": ".banner {\n  background-color: #0f172a;\n  background-image: url('bg.jpg');\n  background-size: cover;\n  background-position: center;\n  color: #ffffff;\n}"
  },
  "css_4": {
    "title": "Tipografi & Metin Biçimlendirme",
    "readTime": "2 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Botanik Bahçe",
    "logic": "Okunabilirliği ve görsel estetiği artırmak için yazı tipi ailesi, boyutu, kalınlığı ve hizalaması yönetilir.",
    "syntaxRules": [
      "<code>font-family: 'Inter', sans-serif;</code> : Yazı tipi ailesini ve yedek fontu belirler.",
      "<code>font-size: 16px; / 1.2rem;</code> : Yazı boyutunu ayarlar.",
      "<code>font-weight: 700; / bold;</code> : Yazı kalınlığını belirler (100 - 900).",
      "<code>text-align: center;</code> : Metni yatayda sola, ortaya veya sağa hizalar.",
      "<code>line-height: 1.6;</code> : Satırlar arasındaki dikey boşluğu ayarlar.",
      "<code>text-decoration: none;</code> : Linklerin altındaki varsayılan çizgiyi kaldırır."
    ],
    "pitfalls": [
      "⚠️ Özel font kullanırken aralarda boşluk varsa font adını tırnak içine alın (örn: <code>'Open Sans'</code>).",
      "⚠️ <code>rem</code> ve <code>em</code> göreceli birimleridir; <code>px</code> ise sabit piksel birimidir.",
      "⚠️ Aşırı küçük yazı boyutları mobilde okunabilirliği (accessibility) bozar."
    ],
    "exampleCode": "p {\n  font-family: 'Segoe UI', Tahoma, sans-serif;\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #334155;\n  text-align: justify;\n}"
  },
  "css_5": {
    "title": "Kutu Modeli (Box Model Mimarisi)",
    "readTime": "3 dk okuma",
    "rewardText": "🏢 Modern Rezidanslar & İş Kuleleri",
    "logic": "CSS'teki her HTML elemanı dikdörtgen bir kutudur. İçerik (content), iç boşluk (padding), kenarlık (border) ve dış boşluktan (margin) oluşur.",
    "syntaxRules": [
      "<code>padding: 16px;</code> : İçeriğin etrafındaki iç boşluk.",
      "<code>margin: 20px auto;</code> : Kutunun dışındaki boşluk (auto yatayda ortalar).",
      "<code>border: 1px solid #cbd5e1;</code> : Kutunun etrafını çevreleyen kenarlık.",
      "<code>box-sizing: border-box;</code> : Padding ve border'ı toplam genişliğe dahil eder (Altın Kural)."
    ],
    "pitfalls": [
      "⚠️ <code>box-sizing: border-box</code> kullanılmazsa eklenen padding kutuyu dışa doğru büyüterek sayfa düzenini patlatır.",
      "⚠️ Dikey margin'ler üst üste geldiğinde birleşir (Margin Collapse).",
      "⚠️ Satır içi (inline) elemanlara dikey margin ve padding tam olarak uygulanamaz."
    ],
    "exampleCode": "* {\n  box-sizing: border-box;\n}\n\n.kart {\n  width: 300px;\n  padding: 24px;\n  margin: 16px auto;\n  border: 1px solid #e2e8f0;\n}"
  },
  "css_6": {
    "title": "Kenarlıklar, Köşeler & Gölgeler",
    "readTime": "2 dk okuma",
    "rewardText": "🎬 Sinema & Kültür Merkezi",
    "logic": "Elemanların sınırlarını belirginleştirmek, köşelerini yumuşatmak ve derinlik (elevation) hissi katmak için kullanılır.",
    "syntaxRules": [
      "<code>border: 2px solid #3b82f6;</code> : Kalınlık, stil ve renk kısayolu.",
      "<code>border-radius: 8px;</code> : Köşeleri yuvarlatır (50% tam daire yapar).",
      "<code>box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);</code> : Kutuya x, y, bulanıklık ve renk gölgesi ekler.",
      "<code>text-shadow: 1px 1px 2px #000000;</code> : Metne gölge efekti verir."
    ],
    "pitfalls": [
      "⚠️ <code>border-style</code> (solid, dashed, dotted) belirtilmezse kenarlık ekranda görünmez.",
      "⚠️ Aşırı sert ve koyu gölgeler arayüzü kalitesiz gösterir; yumuşak rgba gölgeleri tercih edin.",
      "⚠️ Tam yuvarlak avatar için elemanın genişlik ve yüksekliği eşit olmalı ve <code>border-radius: 50%</code> verilmelidir."
    ],
    "exampleCode": ".buton {\n  border: none;\n  border-radius: 9999px;\n  padding: 12px 24px;\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n}"
  },
  "css_7": {
    "title": "Görüntüleme & Boyutlandırma",
    "readTime": "3 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Elemanların blok mu yoksa satır içi mi davranacağını, maksimum boyutlarını ve taşma (overflow) durumlarını kontrol eder.",
    "syntaxRules": [
      "<code>display: block;</code> : Yeni satırdan başlar ve tam genişlik kaplar (div, p).",
      "<code>display: inline-block;</code> : Yan yana dizilir ama width/height/padding alabilir.",
      "<code>display: none;</code> : Elemanı DOM'dan kaldırmış gibi tamamen gizler ve yer tutmaz.",
      "<code>visibility: hidden;</code> : Elemanı görünmez yapar ama kapladığı boşluğu korur.",
      "<code>overflow: hidden; / auto;</code> : Kutu dışına taşan içerikleri keser veya kaydırma çubuğu ekler."
    ],
    "pitfalls": [
      "⚠️ <code>display: inline</code> olan elemanlara (span, a) <code>width</code> ve <code>height</code> verilemez.",
      "⚠️ <code>display: none</code> ile <code>visibility: hidden</code> arasındaki yer kaplama farkını unutmayın.",
      "⚠️ <code>max-width: 100%</code> görsellerin ekrandan taşmasını engelleyen temel responsive kuralıdır."
    ],
    "exampleCode": ".modal-gizli {\n  display: none;\n}\n\n.metin-kutusu {\n  max-width: 600px;\n  overflow-y: auto;\n}"
  },
  "css_8": {
    "title": "Konumlandırma & Katmanlar (Position)",
    "readTime": "3 dk okuma",
    "rewardText": "🏛️ Yönetim Sarayı & Belediye",
    "logic": "Elemanları normal sayfa akışından çıkararak istenilen koordinatlara sabitlemek veya katmanlandırmak (z-index) için kullanılır.",
    "syntaxRules": [
      "<code>position: relative;</code> : Elemanın kendi orijinal konumuna göre ötelenmesini sağlar; altındaki absolute için referanstır.",
      "<code>position: absolute;</code> : En yakın relative atasına göre top/right/bottom/left ile konumlanır.",
      "<code>position: fixed;</code> : Tarayıcı penceresine sabitlenir, sayfa kaysa bile yerinde kalır (Örn: Sabit Navbar).",
      "<code>position: sticky;</code> : Sayfa kaydırılırken belirli bir noktaya gelince sabitlenir.",
      "<code>z-index: 10;</code> : Katman sırasını belirler (Yüksek olan önde görünür)."
    ],
    "pitfalls": [
      "⚠️ <code>z-index</code> sadece <code>position</code> değeri (relative, absolute, fixed, sticky) olan elemanlarda çalışır.",
      "⚠️ <code>position: absolute</code> verilen bir elemanın doğru yerde durması için ebeveynine <code>position: relative</code> verilmelidir.",
      "⚠️ Sabit (fixed) header'lar sayfa içeriğinin üzerini kapatabilir; body'e üstten padding verilmelidir."
    ],
    "exampleCode": ".kart {\n  position: relative;\n}\n\n.rozet {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  z-index: 5;\n}"
  },
  "css_9": {
    "title": "Sahte Sınıflar & Sahte Elemanlar",
    "readTime": "2 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Kullanıcı etkileşim durumlarına (:hover, :focus) veya elemanların belirli parçalarına (::before, ::after) stil vermek için kullanılır.",
    "syntaxRules": [
      "<code>button:hover { }</code> : Fare düğmenin üzerine geldiğinde tetiklenir.",
      "<code>input:focus { }</code> : Giriş alanına tıklandığında/odaklanıldığında çalışır.",
      "<code>li:first-child / li:last-child</code> : İlk veya son liste elemanını hedefler.",
      "<code>li:nth-child(even / 2n)</code> : Çift numaralı elemanları seçer (Zebra tablo efekti).",
      "<code>.baslik::before { content: '★'; }</code> : Elemanın başına dekoratif içerik ekler."
    ],
    "pitfalls": [
      "⚠️ <code>::before</code> ve <code>::after</code> kullanırken mutlaka <code>content: \"\";</code> tanımlanmalıdır, aksi halde görünmezler.",
      "⚠️ Sahte sınıflar tek iki nokta (<code>:hover</code>), sahte elemanlar standart olarak çift iki nokta (<code>::before</code>) ile yazılır.",
      "⚠️ Link durumları sırasıyla yazılmalıdır: <code>:link, :visited, :hover, :active</code> (LoVe HAte kuralı)."
    ],
    "exampleCode": ".kart:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 20px rgba(0,0,0,0.15);\n}\n\n.etiket::before {\n  content: '🏷️ ';\n}"
  },
  "css_10": {
    "title": "Gradyanlar & Görsel Efektler",
    "readTime": "2 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "Düz renkler yerine çoklu renk geçişleri (gradyan) ve modern CSS filtreleri (bulanıklık, parlaklık) ile zengin görseller oluşturur.",
    "syntaxRules": [
      "<code>background: linear-gradient(135deg, #3b82f6, #9333ea);</code> : Açılı doğrusal renk geçişi.",
      "<code>background: radial-gradient(circle, #fde047, #f97316);</code> : Merkezden dışa dairesel renk geçişi.",
      "<code>opacity: 0.8;</code> : Tüm elemanın ve içeriğinin şeffaflık seviyesi.",
      "<code>filter: blur(4px);</code> : Görsele bulanıklık filtresi uygular.",
      "<code>filter: grayscale(100%);</code> : Görseli siyah-beyaza dönüştürür."
    ],
    "pitfalls": [
      "⚠️ <code>opacity</code> elemanın içindeki yazıları da şeffaf yapar; sadece arka planı şeffaf yapmak için <code>rgba()</code> kullanın.",
      "⚠️ Gradyanlar <code>background-color</code> değil, <code>background</code> veya <code>background-image</code> özelliğine atanır.",
      "⚠️ Açıyı belirtirken <code>to right</code> veya <code>90deg</code> formatına dikkat edin."
    ],
    "exampleCode": ".modern-kart {\n  background: linear-gradient(to right, #4f46e5, #06b6d4);\n  color: #ffffff;\n  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.2));\n}"
  },
  "css_11": {
    "title": "2D Dönüşümler & Geçişler (Transitions)",
    "readTime": "3 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Raylar",
    "logic": "Elemanları döndürmek, büyütmek veya ötelemek ve bu değişiklikleri anlık yerine yumuşak bir animasyon geçişiyle gerçekleştirmek için kullanılır.",
    "syntaxRules": [
      "<code>transform: translate(x, y);</code> : Elemanı x ve y ekseninde kaydırır.",
      "<code>transform: scale(1.1);</code> : Elemanı %10 oranında büyütür.",
      "<code>transform: rotate(45deg);</code> : Elemanı 45 derece döndürür.",
      "<code>transition: all 0.3s ease;</code> : Tüm stil değişimlerini 0.3 saniyede yumuşakça uygular.",
      "<code>transition: background-color 0.2s, transform 0.3s;</code> : Özel özellik geçişleri."
    ],
    "pitfalls": [
      "⚠️ <code>transition</code> özelliği <code>:hover</code> içine değil, elemanın **ana kuralına** yazılmalıdır ki fare çekildiğinde de yumuşak dönsün.",
      "⚠️ <code>transform</code> sayfa akışındaki diğer elemanların yerini bozmaz, sadece görsel olarak öteler.",
      "⚠️ Çok fazla <code>all</code> geçişi performansı etkileyebilir, sadece değişen özellikleri belirtmek daha iyidir."
    ],
    "exampleCode": ".btn-animasyon {\n  transition: transform 0.2s ease, background-color 0.2s ease;\n}\n\n.btn-animasyon:hover {\n  transform: translateY(-2px) scale(1.05);\n  background-color: #1d4ed8;\n}"
  },
  "css_12": {
    "title": "CSS Animasyonları & @keyframes",
    "readTime": "3 dk okuma",
    "rewardText": "📡 5G Telekom & Uydu Kulesi",
    "logic": "Kullanıcı etkileşimi olmadan kendi kendine sonsuz veya belirli sayıda çalışan karmaşık zaman çizelgeli animasyonlar üretir.",
    "syntaxRules": [
      "<code>@keyframes kayma { 0% { opacity: 0; } 100% { opacity: 1; } }</code> : Animasyon adımlarını tanımlar.",
      "<code>animation-name: kayma;</code> : Kullanılacak keyframes adını bağlar.",
      "<code>animation-duration: 2s;</code> : Animasyonun bir turunun süresi.",
      "<code>animation-iteration-count: infinite;</code> : Animasyonun sonsuza dek dönmesini sağlar.",
      "<code>animation: donme 1.5s linear infinite;</code> : Animasyon kısayol tanımı."
    ],
    "pitfalls": [
      "⚠️ <code>@keyframes</code> adı ile <code>animation-name</code> birebir aynı yazılmalıdır (büyük/küçük harf duyarlı).",
      "⚠️ <code>animation-duration</code> belirtilmezse süre 0s sayılır ve animasyon çalışmaz.",
      "⚠️ Sayfada aşırı miktarda karmaşık animasyon çalıştırmak mobil cihazlarda pil tüketimini artırır."
    ],
    "exampleCode": "@keyframes nabiz {\n  0% { transform: scale(1); }\n  50% { transform: scale(1.1); }\n  100% { transform: scale(1); }\n}\n\n.kalp {\n  animation: nabiz 1s ease-in-out infinite;\n}"
  },
  "css_13": {
    "title": "Flexbox ile Esnek Tek Boyutlu Düzen",
    "readTime": "3 dk okuma",
    "rewardText": "🚢 Uluslararası Liman & Konteynerler",
    "logic": "Elemanları tek bir eksende (yatay veya dikey) esnek şekilde hizalamak, dağıtmak ve dikeyde kolayca ortalamak için kullanılır.",
    "syntaxRules": [
      "<code>display: flex;</code> : Kapsayıcıyı Flex Container yapar.",
      "<code>justify-content: center / space-between;</code> : Ana eksende (yatay) hizalama ve dağıtma.",
      "<code>align-items: center;</code> : Çapraz eksende (dikey) mükemmel ortalama.",
      "<code>flex-direction: column / row;</code> : Ekseni dikey sütuna veya yatay satıra çevirir.",
      "<code>gap: 16px;</code> : Flex elemanları arasındaki boşluk (margin vermeye gerek kalmaz).",
      "<code>flex-wrap: wrap;</code> : Sığmayan elemanların alt satıra geçmesini sağlar."
    ],
    "pitfalls": [
      "⚠️ <code>justify-content</code> ve <code>align-items</code> kapsayıcıya (parent) verilir, içerideki çocuklara değil.",
      "⚠️ <code>flex-direction: column</code> yapıldığında <code>justify-content</code> dikey, <code>align-items</code> yatay ekseni yönetir.",
      "⚠️ Flexbox tek boyutlu (satır veya sütun) düzenler için idealdir; karmaşık ızgaralar için CSS Grid kullanılır."
    ],
    "exampleCode": ".navbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 32px;\n  gap: 12px;\n}"
  },
  "css_14": {
    "title": "CSS Grid ile İki Boyutlu Izgara",
    "readTime": "3 dk okuma",
    "rewardText": "🏦 Merkez Bankası & Finans Merkezi",
    "logic": "Sayfayı hem satırlar hem de sütunlar halinde iki boyutlu bir ızgara matrisine bölerek karmaşık düzenleri yönetir.",
    "syntaxRules": [
      "<code>display: grid;</code> : Kapsayıcıyı Grid Container yapar.",
      "<code>grid-template-columns: 1fr 1fr 1fr;</code> : 3 eşit sütunlu ızgara oluşturur.",
      "<code>grid-template-columns: repeat(3, 1fr);</code> : Tekrarlanan sütun tanımlama kısayolu.",
      "<code>gap: 20px;</code> : Izgara hücreleri arasındaki satır ve sütun boşluğu.",
      "<code>grid-column: span 2;</code> : Bir elemanın 2 sütun genişliğinde yer kaplamasını sağlar."
    ],
    "pitfalls": [
      "⚠️ <code>fr</code> (Fractional Unit) Grid'e özel kesirli boş alan paylaştırma birimidir.",
      "⚠️ <code>repeat(auto-fit, minmax(250px, 1fr))</code> medya sorgusu yazmadan otomatik responsive kart ızgarası üretir.",
      "⚠️ Flexbox tek eksen, Grid çift eksen (satır + sütun) odaklıdır."
    ],
    "exampleCode": ".galeri {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.one-cikan {\n  grid-column: span 2;\n}"
  },
  "css_15": {
    "title": "Responsive Tasarım & Medya Sorguları",
    "readTime": "3 dk okuma",
    "rewardText": "🏛️ Hükümet Sarayı & Kongre Merkezi",
    "logic": "Web sayfalarının masaüstü, tablet ve cep telefonu gibi farklı ekran genişliklerine kusursuz uyum sağlamasını (Responsive) mümkün kılar.",
    "syntaxRules": [
      "<code>@media (max-width: 768px) { }</code> : Ekran genişliği 768px ve altı olduğunda geçerli olan stiller.",
      "<code>@media (min-width: 1024px) { }</code> : Ekran genişliği 1024px ve üzeri masaüstü stilleri.",
      "<code>max-width: 100%; height: auto;</code> : Görsellerin mobilde taşmasını önleyen kural.",
      "<code>flex-direction: column;</code> : Mobilde yan yana kartları alt alta sıralama."
    ],
    "pitfalls": [
      "⚠️ HTML &lt;head&gt; içinde <code>&lt;meta name=\"viewport\"&gt;</code> etiketi yoksa medya sorguları mobilde düzgün çalışmaz.",
      "⚠️ Mobil öncelikli (Mobile-First) yaklaşımda önce taban mobil stiller yazılır, sonra <code>min-width</code> ile masaüstüne genişletilir.",
      "⚠️ Aşırı fazla breakpoint kullanmak kodun bakımını zorlaştırır; standart (768px, 1024px) noktaları seçin."
    ],
    "exampleCode": "/* Masaüstü 3 Sütun */\n.kart-grubu {\n  display: flex;\n  gap: 20px;\n}\n\n/* Tablet & Mobil: Alt alta geçiş */\n@media (max-width: 768px) {\n  .kart-grubu {\n    flex-direction: column;\n  }\n}"
  },
  "css_16": {
    "title": "CSS Değişkenleri & Kapsamlı Proje",
    "readTime": "3 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Roket Üssü",
    "logic": "CSS Custom Properties ile kurumsal renkleri ve tema değerlerini merkezi değişkenlerde tutup projenin her yerinde dinamik olarak kullanma.",
    "syntaxRules": [
      "<code>:root { --ana-renk: #2563eb; --bosluk: 16px; }</code> : Global CSS değişkenleri tanımlama.",
      "<code>color: var(--ana-renk);</code> : Tanımlı değişkeni çağırma.",
      "<code>width: calc(100% - 40px);</code> : CSS içinde dinamik matematiksel hesaplama.",
      "<code>font-size: clamp(1rem, 2.5vw, 2rem);</code> : Ekran boyutuna göre akışkan tipografi."
    ],
    "pitfalls": [
      "⚠️ Değişken isimleri mutlaka iki tire (<code>--</code>) ile başlamalıdır.",
      "⚠️ <code>calc()</code> fonksiyonunda toplama (+) ve çıkarma (-) operatörlerinin iki yanında mutlaka boşluk bırakılmalıdır (örn: <code>calc(100% - 20px)</code>).",
      "⚠️ Değişkenler karanlık mod (Dark Mode) gibi tema geçişlerinde tek satırla renk değiştirmeyi inanılmaz kolaylaştırır."
    ],
    "exampleCode": ":root {\n  --primary: #6366f1;\n  --radius: 12px;\n}\n\n.kart {\n  border-radius: var(--radius);\n  background-color: var(--primary);\n  padding: calc(1rem + 4px);\n}"
  }
};

const CSS_CHALLENGES = {
  css_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: CSS SÖZDİZİMİ",
      title: "1. Soru: Başlık Rengini Mavi Yapma",
      prompt: "<code>h1</code> başlığının yazı rengini (<code>color</code>) mavi (<code>blue</code>) yapacak CSS kuralını yazabilir misin?",
      presetCode: "/* h1 rengini blue yap: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["h1 {", "color: blue;", "}"],
      hint: "h1 {\n  color: blue;\n}",
      solution: "h1 {\n  color: blue;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/h1\s*\{\s*color\s*:\s*blue\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! h1 rengi mavi olarak ayarlandı. ✓" };
        return { ok: false, msg: "Hata: 'h1 { color: blue; }' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: PARAGRAF HİZALAMA",
      title: "2. Soru: Paragrafları Ortala",
      prompt: "<code>p</code> etiketlerinin metin hizalamasını (<code>text-align</code>) ortaya (<code>center</code>) alabilir misin?",
      presetCode: "/* p metinlerini ortaya hizala: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["p {", "text-align: center;", "}"],
      hint: "p {\n  text-align: center;\n}",
      solution: "p {\n  text-align: center;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/p\s*\{\s*text-align\s*:\s*center\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Harika! Paragraflar merkeze hizalandı. ✓" };
        return { ok: false, msg: "Hata: 'p { text-align: center; }' kuralını tanımlayın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: HARİCİ CSS BAĞLANTISI",
      title: "3. Soru: Harici CSS Dosyasını Bağlama",
      prompt: "HTML sayfasının <code>&lt;head&gt;</code> bölümüne <code>style.css</code> dosyasını bağlayan <code>&lt;link&gt;</code> etiketini ekleyebilir misin?",
      presetCode: "<head>\n  <title>Sayfam</title>\n  <!-- CSS dosyasını bağla: -->\n</head>",
      filename: "index.html",
      lang: "HTML/CSS",
      quickKeys: ["<link rel=\"stylesheet\" href=\"style.css\">", "rel=\"stylesheet\"", "href=\"style.css\""],
      hint: "<link rel=\"stylesheet\" href=\"style.css\">",
      solution: "<head>\n  <title>Sayfam</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/i.test(clean) ||
            /<link\s+[^>]*href=["']style\.css["'][^>]*rel=["']stylesheet["'][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Harici CSS dosyası doğru bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <link rel=\"stylesheet\" href=\"style.css\"> etiketini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: DAHİLİ (INTERNAL) CSS",
      title: "4. Soru: Dahili Style Etiketi",
      prompt: "Aşağıdaki HTML head bloğuna <code>&lt;style&gt;</code> etiketi açıp içinde <code>body { background-color: yellow; }</code> kuralını tanımlayabilir misin?",
      presetCode: "<head>\n  <!-- Dahili CSS stil bloğunu ekle: -->\n</head>",
      filename: "index.html",
      lang: "HTML/CSS",
      quickKeys: ["<style>", "body { background-color: yellow; }", "</style>"],
      hint: "<style>\n  body {\n    background-color: yellow;\n  }\n</style>",
      solution: "<head>\n  <style>\n    body {\n      background-color: yellow;\n    }\n  </style>\n</head>",
      validator: (code) => {
        const clean = code.trim();
        if (/<style>[\s\S]*body\s*\{\s*background-color\s*:\s*yellow\s*;?\s*\}[\s\S]*<\/style>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Dahili CSS stili başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <style> içinde body { background-color: yellow; } yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: SATIR İÇİ (INLINE) CSS",
      title: "5. Soru: Inline Style Özelliği",
      prompt: "Aşağıdaki <code>&lt;h2&gt;</code> etiketine <code>style=\"color: red;\"</code> satır içi stilini ekleyebilir misin?",
      presetCode: "<!-- h2 etiketine style ekle: -->\n<h2>Önemli Duyuru</h2>",
      filename: "index.html",
      lang: "HTML/CSS",
      quickKeys: ["<h2 style=\"color: red;\">Önemli Duyuru</h2>", "style=\"color: red;\""],
      hint: "<h2 style=\"color: red;\">Önemli Duyuru</h2>",
      solution: "<h2 style=\"color: red;\">Önemli Duyuru</h2>",
      validator: (code) => {
        const clean = code.trim();
        if (/<h2\s+[^>]*style=["']color\s*:\s*red;?["'][^>]*>[\s\S]*<\/h2>/i.test(clean)) {
          return { ok: true, msg: "Harika! Satır içi (inline) stil uygulandı. 1. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: <h2 style=\"color: red;\">Önemli Duyuru</h2> şeklinde yazın." };
      }
    }
  ],

  css_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: SINIF (CLASS) SEÇİCİ",
      title: "1. Soru: Sınıf Seçicisi Tanımlama",
      prompt: "<code>.kart</code> sınıfına sahip elemanların arka plan rengini <code>background-color: white;</code> yapabilir misin?",
      presetCode: "/* .kart sınıfını stillendir: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: [".kart {", "background-color: white;", "}"],
      hint: ".kart {\n  background-color: white;\n}",
      solution: ".kart {\n  background-color: white;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kart\s*\{\s*background-color\s*:\s*white\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! Sınıf seçici doğru yazıldı. ✓" };
        return { ok: false, msg: "Hata: '.kart { background-color: white; }' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: ID SEÇİCİ (#)",
      title: "2. Soru: ID Seçicisi ile Özel Stil",
      prompt: "<code>#baslik</code> ID'sine sahip elemanın yazı rengini <code>color: darkblue;</code> yapabilir misin?",
      presetCode: "/* #baslik ID seçicisini yaz: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["#baslik {", "color: darkblue;", "}"],
      hint: "#baslik {\n  color: darkblue;\n}",
      solution: "#baslik {\n  color: darkblue;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/#baslik\s*\{\s*color\s*:\s*darkblue\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Harika! ID seçici (#) başarıyla uygulandı. ✓" };
        return { ok: false, msg: "Hata: '#baslik { color: darkblue; }' kuralını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: EVRENSEL SEÇİCİ (*)",
      title: "3. Soru: Evrensel Seçici (*)",
      prompt: "Tüm sayfadaki elemanları sıfırlamak için evrensel seçici <code>*</code> ile <code>margin: 0;</code> kuralını tanımlayabilir misin?",
      presetCode: "/* Evrensel seçici ile margin sıfırla: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["* {", "margin: 0;", "}"],
      hint: "* {\n  margin: 0;\n}",
      solution: "* {\n  margin: 0;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\*\s*\{\s*margin\s*:\s*0\s*;?\s*\}/.test(clean)) return { ok: true, msg: "Mükemmel! Evrensel (*) seçici kuralı yazıldı. ✓" };
        return { ok: false, msg: "Hata: '* { margin: 0; }' kuralını tanımlayın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: GRUP SEÇİCİ (,)",
      title: "4. Soru: Grup Seçicisi ile Ortak Stil",
      prompt: "<code>h1</code>, <code>h2</code> ve <code>h3</code> başlıklarına virgülle gruplayarak <code>color: navy;</code> stilini verebilir misin?",
      presetCode: "/* h1, h2, h3 başlıklarını grupla: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["h1, h2, h3 {", "color: navy;", "}"],
      hint: "h1, h2, h3 {\n  color: navy;\n}",
      solution: "h1, h2, h3 {\n  color: navy;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/h1\s*,\s*h2\s*,\s*h3\s*\{\s*color\s*:\s*navy\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! Grup seçici (,) doğru uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'h1, h2, h3 { color: navy; }' kuralını yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: TORUN (DESCENDANT) SEÇİCİ",
      title: "5. Soru: Torun Seçicisi (div p)",
      prompt: "Sadece <code>.kutu</code> sınıfının içindeki <code>p</code> paragraflarına <code>color: gray;</code> stilini uygulayabilir misin?",
      presetCode: "/* .kutu içindeki p etiketlerini seç: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: [".kutu p {", "color: gray;", "}"],
      hint: ".kutu p {\n  color: gray;\n}",
      solution: ".kutu p {\n  color: gray;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kutu\s+p\s*\{\s*color\s*:\s*gray\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Harika! Torun seçici doğru tanımlandı. 2. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: '.kutu p { color: gray; }' kuralını yazın." };
      }
    }
  ],

  css_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: HEX VE RGB RENKLER",
      title: "1. Soru: HEX Kodu ile Renk Verme",
      prompt: "<code>h1</code> başlığına HEX koduyla <code>color: #2563eb;</code> stilini atayabilir misin?",
      presetCode: "h1 {\n  /* HEX renk kodunu ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["color: #2563eb;", "#2563eb"],
      hint: "h1 {\n  color: #2563eb;\n}",
      solution: "h1 {\n  color: #2563eb;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/h1\s*\{[\s\S]*color\s*:\s*#2563eb\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! HEX renk kodu başarıyla atandı. ✓" };
        return { ok: false, msg: "Hata: 'color: #2563eb;' kuralını h1 içine ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: ARKA PLAN RENGİ",
      title: "2. Soru: Arka Plan Rengi (background-color)",
      prompt: "<code>body</code> etiketine <code>background-color: #f8fafc;</code> arka plan rengini verebilir misin?",
      presetCode: "body {\n  /* Arka plan rengini belirle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background-color: #f8fafc;", "#f8fafc"],
      hint: "body {\n  background-color: #f8fafc;\n}",
      solution: "body {\n  background-color: #f8fafc;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/body\s*\{[\s\S]*background-color\s*:\s*#f8fafc\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! body arka plan rengi ayarlandı. ✓" };
        return { ok: false, msg: "Hata: 'background-color: #f8fafc;' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: RGBA ŞEFFAFLIK",
      title: "3. Soru: RGBA ile Yarı Saydam Renk",
      prompt: "<code>.overlay</code> sınıfına %50 şeffaf siyah arka plan için <code>background-color: rgba(0, 0, 0, 0.5);</code> atayabilir misin?",
      presetCode: ".overlay {\n  /* RGBA arka planı ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background-color: rgba(0, 0, 0, 0.5);", "rgba(0, 0, 0, 0.5)"],
      hint: ".overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n}",
      solution: ".overlay {\n  background-color: rgba(0, 0, 0, 0.5);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.overlay\s*\{[\s\S]*background-color\s*:\s*rgba\s*\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0?\.5\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! rgba() şeffaf renk uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'background-color: rgba(0, 0, 0, 0.5);' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: ARKA PLAN GÖRSELİ",
      title: "4. Soru: Arka Plana Resim Ekleme",
      prompt: "<code>.hero</code> bölümüne <code>background-image: url('arkaplan.jpg');</code> görselini ekleyebilir misin?",
      presetCode: ".hero {\n  /* Arka plan görseli ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background-image: url('arkaplan.jpg');", "url('arkaplan.jpg')"],
      hint: ".hero {\n  background-image: url('arkaplan.jpg');\n}",
      solution: ".hero {\n  background-image: url('arkaplan.jpg');\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.hero\s*\{[\s\S]*background-image\s*:\s*url\s*\(\s*['"]?arkaplan\.jpg['"]?\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! background-image başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'background-image: url(\"arkaplan.jpg\");' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: BACKGROUND SIZE & REPEAT",
      title: "5. Soru: Görseli Kaplama & Tekrarı Önleme",
      prompt: "<code>.banner</code> sınıfına <code>background-size: cover;</code> ve <code>background-repeat: no-repeat;</code> özelliklerini ekleyebilir misin?",
      presetCode: ".banner {\n  background-image: url('manzara.jpg');\n  /* cover ve no-repeat ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background-size: cover;", "background-repeat: no-repeat;"],
      hint: ".banner {\n  background-image: url('manzara.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}",
      solution: ".banner {\n  background-image: url('manzara.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasCover = /background-size\s*:\s*cover/i.test(clean);
        const hasNoRepeat = /background-repeat\s*:\s*no-repeat/i.test(clean);
        if (hasCover && hasNoRepeat) return { ok: true, msg: "Harika! Arka plan görseli optimize edildi. 3. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: Hem 'background-size: cover;' hem de 'background-repeat: no-repeat;' ekleyin." };
      }
    }
  ],

  css_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: YAZI TİPİ AİLESİ (FONT-FAMILY)",
      title: "1. Soru: Font Ailesi Belirleme",
      prompt: "<code>body</code> fontunu <code>font-family: Arial, sans-serif;</code> olarak ayarlayabilir misin?",
      presetCode: "body {\n  /* Arial fontunu tanımla: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["font-family: Arial, sans-serif;", "Arial, sans-serif"],
      hint: "body {\n  font-family: Arial, sans-serif;\n}",
      solution: "body {\n  font-family: Arial, sans-serif;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/body\s*\{[\s\S]*font-family\s*:\s*Arial\s*,\s*sans-serif\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! font-family doğru tanımlandı. ✓" };
        return { ok: false, msg: "Hata: 'font-family: Arial, sans-serif;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: YAZI BOYUTU (FONT-SIZE)",
      title: "2. Soru: Başlık Boyutu Ayarlama",
      prompt: "<code>.buyuk-baslik</code> sınıfına <code>font-size: 2rem;</code> yazı boyutu atayabilir misin?",
      presetCode: ".buyuk-baslik {\n  /* 2rem font boyutu ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["font-size: 2rem;", "2rem"],
      hint: ".buyuk-baslik {\n  font-size: 2rem;\n}",
      solution: ".buyuk-baslik {\n  font-size: 2rem;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.buyuk-baslik\s*\{[\s\S]*font-size\s*:\s*2rem\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! font-size: 2rem uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'font-size: 2rem;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: YAZI KALINLIĞI (FONT-WEIGHT)",
      title: "3. Soru: Kalın Yazı (Bold)",
      prompt: "<code>.vurgulu</code> sınıfının yazı kalınlığını <code>font-weight: bold;</code> (veya <code>700</code>) yapabilir misin?",
      presetCode: ".vurgulu {\n  /* Kalın yazı tipini ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["font-weight: bold;", "font-weight: 700;"],
      hint: ".vurgulu {\n  font-weight: bold;\n}",
      solution: ".vurgulu {\n  font-weight: bold;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.vurgulu\s*\{[\s\S]*font-weight\s*:\s*(bold|700)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! font-weight doğru ayarlandı. ✓" };
        return { ok: false, msg: "Hata: 'font-weight: bold;' veya '700' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: SATIR YÜKSEKLİĞİ (LINE-HEIGHT)",
      title: "4. Soru: Satır Arası Boşluk",
      prompt: "<code>p</code> paragraflarına rahat okunabilirlik için <code>line-height: 1.6;</code> ekleyebilir misin?",
      presetCode: "p {\n  /* Satır yüksekliği ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["line-height: 1.6;", "1.6"],
      hint: "p {\n  line-height: 1.6;\n}",
      solution: "p {\n  line-height: 1.6;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/p\s*\{[\s\S]*line-height\s*:\s*1\.6\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! line-height: 1.6 başarıyla eklendi. ✓" };
        return { ok: false, msg: "Hata: 'line-height: 1.6;' kuralını yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: LİNK ÇİZGİSİNİ KALDIRMA",
      title: "5. Soru: text-decoration ile Alt Çizgiyi Kaldırma",
      prompt: "<code>a</code> bağlantı etiketlerinin altındaki varsayılan çizgiyi kaldırmak için <code>text-decoration: none;</code> atayabilir misin?",
      presetCode: "a {\n  /* Alt çizgiyi kaldır: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["text-decoration: none;", "none"],
      hint: "a {\n  text-decoration: none;\n}",
      solution: "a {\n  text-decoration: none;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/a\s*\{[\s\S]*text-decoration\s*:\s*none\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! Link alt çizgisi kaldırıldı. 4. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'text-decoration: none;' kuralını ekleyin." };
      }
    }
  ],

  css_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: İÇ BOŞLUK (PADDING)",
      title: "1. Soru: Kutuya İç Boşluk Ekleme",
      prompt: "<code>.kart</code> sınıfına her yönden <code>padding: 20px;</code> iç boşluk ekleyebilir misin?",
      presetCode: ".kart {\n  /* İç boşluğu ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["padding: 20px;", "20px"],
      hint: ".kart {\n  padding: 20px;\n}",
      solution: ".kart {\n  padding: 20px;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kart\s*\{[\s\S]*padding\s*:\s*20px\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! padding: 20px uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'padding: 20px;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: DIŞ BOŞLUK (MARGIN)",
      title: "2. Soru: Dış Boşluk ile Ayırma",
      prompt: "<code>.bolum</code> sınıfına alt kısımdan <code>margin-bottom: 30px;</code> dış boşluğu atayabilir misin?",
      presetCode: ".bolum {\n  /* Alt dış boşluğu ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["margin-bottom: 30px;", "30px"],
      hint: ".bolum {\n  margin-bottom: 30px;\n}",
      solution: ".bolum {\n  margin-bottom: 30px;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.bolum\s*\{[\s\S]*margin-bottom\s*:\s*30px\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! margin-bottom: 30px uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'margin-bottom: 30px;' kuralını tanımlayın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: MARGIN AUTO İLE ORTALAMA",
      title: "3. Soru: Blok Elemanı Ortala",
      prompt: "300px genişliğindeki <code>.kutu</code> elemanını yatayda ortalamak için <code>margin: 0 auto;</code> yazabilir misin?",
      presetCode: ".kutu {\n  width: 300px;\n  /* margin ile yatayda ortala: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["margin: 0 auto;", "margin: auto;"],
      hint: ".kutu {\n  width: 300px;\n  margin: 0 auto;\n}",
      solution: ".kutu {\n  width: 300px;\n  margin: 0 auto;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kutu\s*\{[\s\S]*margin\s*:\s*(0\s+auto|auto)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! margin auto ile yatay ortalama sağlandı. ✓" };
        return { ok: false, msg: "Hata: 'margin: 0 auto;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: KENARLIK (BORDER)",
      title: "4. Soru: Kenarlık Tanımlama",
      prompt: "<code>.cerceve</code> sınıfına <code>border: 2px solid #94a3b8;</code> kenarlığı atayabilir misin?",
      presetCode: ".cerceve {\n  /* 2px gri düz kenarlık ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["border: 2px solid #94a3b8;", "2px solid #94a3b8"],
      hint: ".cerceve {\n  border: 2px solid #94a3b8;\n}",
      solution: ".cerceve {\n  border: 2px solid #94a3b8;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.cerceve\s*\{[\s\S]*border\s*:\s*2px\s+solid\s+#94a3b8\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! border kuralı doğru tanımlandı. ✓" };
        return { ok: false, msg: "Hata: 'border: 2px solid #94a3b8;' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: BOX-SIZING ALTIN KURALI",
      title: "5. Soru: box-sizing: border-box",
      prompt: "Evrensel seçici <code>*</code> içine <code>box-sizing: border-box;</code> kuralını ekleyebilir misin?",
      presetCode: "* {\n  /* Kutu modelini border-box yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["box-sizing: border-box;", "border-box"],
      hint: "* {\n  box-sizing: border-box;\n}",
      solution: "* {\n  box-sizing: border-box;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\*\s*\{[\s\S]*box-sizing\s*:\s*border-box\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! box-sizing: border-box kuralı tanımlandı. 5. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: '* { box-sizing: border-box; }' kuralını yazın." };
      }
    }
  ],

  css_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KÖŞELERİ YUVARLATMA",
      title: "1. Soru: border-radius ile Yuvarlatma",
      prompt: "<code>.buton</code> sınıfına <code>border-radius: 8px;</code> köşe yuvarlaklığı atayabilir misin?",
      presetCode: ".buton {\n  /* 8px köşe yuvarlaklığı ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["border-radius: 8px;", "8px"],
      hint: ".buton {\n  border-radius: 8px;\n}",
      solution: ".buton {\n  border-radius: 8px;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.buton\s*\{[\s\S]*border-radius\s*:\s*8px\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! border-radius: 8px uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'border-radius: 8px;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: TAM DAİRE YAPMA",
      title: "2. Soru: Daire Avatar (%50 Radius)",
      prompt: "<code>.avatar</code> sınıfına tam daire olması için <code>border-radius: 50%;</code> atayabilir misin?",
      presetCode: ".avatar {\n  width: 100px;\n  height: 100px;\n  /* Tam daire yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["border-radius: 50%;", "50%"],
      hint: ".avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}",
      solution: ".avatar {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.avatar\s*\{[\s\S]*border-radius\s*:\s*50%\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! %50 radius ile daire avatar oluşturuldu. ✓" };
        return { ok: false, msg: "Hata: 'border-radius: 50%;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KUTU GÖLGESİ (BOX-SHADOW)",
      title: "3. Soru: Kart Gölgesi Ekleme",
      prompt: "<code>.kart</code> sınıfına <code>box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);</code> gölgesini atayabilir misin?",
      presetCode: ".kart {\n  /* box-shadow gölgesi ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);", "box-shadow:"],
      hint: ".kart {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}",
      solution: ".kart {\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kart\s*\{[\s\S]*box-shadow\s*:\s*0\s+4px\s+6px\s+rgba\s*\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0?\.1\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! box-shadow derinlik kattı. ✓" };
        }
        return { ok: false, msg: "Hata: 'box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);' ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: METİN GÖLGESİ (TEXT-SHADOW)",
      title: "4. Soru: Başlığa Metin Gölgesi",
      prompt: "<code>.parlak-baslik</code> sınıfına <code>text-shadow: 2px 2px 4px #000000;</code> gölgesini verebilir misin?",
      presetCode: ".parlak-baslik {\n  /* text-shadow uygula: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["text-shadow: 2px 2px 4px #000000;", "2px 2px 4px #000000"],
      hint: ".parlak-baslik {\n  text-shadow: 2px 2px 4px #000000;\n}",
      solution: ".parlak-baslik {\n  text-shadow: 2px 2px 4px #000000;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.parlak-baslik\s*\{[\s\S]*text-shadow\s*:\s*2px\s+2px\s+4px\s+#000000\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! text-shadow uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'text-shadow: 2px 2px 4px #000000;' kuralını yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: OUTLINE (DIŞ ÇİZGİ)",
      title: "5. Soru: Outline ile Dış Hat",
      prompt: "<code>button:focus</code> durumuna <code>outline: 2px solid blue;</code> ekleyebilir misin?",
      presetCode: "button:focus {\n  /* 2px mavi outline ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["outline: 2px solid blue;", "outline: none;"],
      hint: "button:focus {\n  outline: 2px solid blue;\n}",
      solution: "button:focus {\n  outline: 2px solid blue;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/button:focus\s*\{[\s\S]*outline\s*:\s*2px\s+solid\s+blue\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! Focus outline eklendi. 6. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'outline: 2px solid blue;' kuralını yazın." };
      }
    }
  ],

  css_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DISPLAY BLOCK",
      title: "1. Soru: Inline Elemanı Block Yapma",
      prompt: "Normalde inline olan <code>a</code> linklerini tam satır kaplaması için <code>display: block;</code> yapabilir misin?",
      presetCode: ".menu-link {\n  /* display: block ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["display: block;", "block"],
      hint: ".menu-link {\n  display: block;\n}",
      solution: ".menu-link {\n  display: block;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.menu-link\s*\{[\s\S]*display\s*:\s*block\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! display: block uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'display: block;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DISPLAY INLINE-BLOCK",
      title: "2. Soru: Yan Yana ve Boyutlandırılabilir",
      prompt: "<code>.etiket</code> sınıfına hem yan yana durması hem de width/height alabilmesi için <code>display: inline-block;</code> verebilir misin?",
      presetCode: ".etiket {\n  /* inline-block yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["display: inline-block;", "inline-block"],
      hint: ".etiket {\n  display: inline-block;\n}",
      solution: ".etiket {\n  display: inline-block;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.etiket\s*\{[\s\S]*display\s*:\s*inline-block\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! display: inline-block uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'display: inline-block;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: ELEMAN GİZLEME (DISPLAY NONE)",
      title: "3. Soru: Elemanı Gizleme",
      prompt: "<code>.gizli</code> sınıfına sahip elemanları tamamen gizlemek için <code>display: none;</code> atayabilir misin?",
      presetCode: ".gizli {\n  /* Elemanı gizle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["display: none;", "none"],
      hint: ".gizli {\n  display: none;\n}",
      solution: ".gizli {\n  display: none;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.gizli\s*\{[\s\S]*display\s*:\s*none\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! display: none ile eleman gizlendi. ✓" };
        return { ok: false, msg: "Hata: 'display: none;' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: MAKSİMUM GENİŞLİK (MAX-WIDTH)",
      title: "4. Soru: Responsive Konteyner",
      prompt: "<code>.kapsayici</code> sınıfına maksimum 1200px genişlik için <code>max-width: 1200px;</code> verebilir misin?",
      presetCode: ".kapsayici {\n  width: 100%;\n  /* max-width sınırını koy: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["max-width: 1200px;", "1200px"],
      hint: ".kapsayici {\n  width: 100%;\n  max-width: 1200px;\n}",
      solution: ".kapsayici {\n  width: 100%;\n  max-width: 1200px;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kapsayici\s*\{[\s\S]*max-width\s*:\s*1200px\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! max-width: 1200px uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'max-width: 1200px;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: TAŞMA YÖNETİMİ (OVERFLOW)",
      title: "5. Soru: overflow: hidden ile Taşmayı Kesme",
      prompt: "<code>.kart</code> sınıfına dışarı taşan elemanları kesmek için <code>overflow: hidden;</code> ekleyebilir misin?",
      presetCode: ".kart {\n  border-radius: 16px;\n  /* Taşmayı engelle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["overflow: hidden;", "overflow: auto;"],
      hint: ".kart {\n  border-radius: 16px;\n  overflow: hidden;\n}",
      solution: ".kart {\n  border-radius: 16px;\n  overflow: hidden;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kart\s*\{[\s\S]*overflow\s*:\s*hidden\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! overflow: hidden uygulandı. 7. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'overflow: hidden;' kuralını ekleyin." };
      }
    }
  ],

  css_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: POSITION RELATIVE",
      title: "1. Soru: Göreceli Konumlandırma",
      prompt: "<code>.ana-kutu</code> sınıfına <code>position: relative;</code> atayabilir misin?",
      presetCode: ".ana-kutu {\n  /* position: relative yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["position: relative;", "relative"],
      hint: ".ana-kutu {\n  position: relative;\n}",
      solution: ".ana-kutu {\n  position: relative;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.ana-kutu\s*\{[\s\S]*position\s*:\s*relative\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! position: relative atandı. ✓" };
        return { ok: false, msg: "Hata: 'position: relative;' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: POSITION ABSOLUTE",
      title: "2. Soru: Mutlak Konumlandırma",
      prompt: "<code>.kapat-butonu</code> sınıfına <code>position: absolute;</code> ve <code>top: 10px; right: 10px;</code> koordinatlarını atayabilir misin?",
      presetCode: ".kapat-butonu {\n  /* absolute yap ve sağ üste sabitle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["position: absolute;", "top: 10px;", "right: 10px;"],
      hint: ".kapat-butonu {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}",
      solution: ".kapat-butonu {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasAbs = /position\s*:\s*absolute/i.test(clean);
        const hasTop = /top\s*:\s*10px/i.test(clean);
        const hasRight = /right\s*:\s*10px/i.test(clean);
        if (hasAbs && hasTop && hasRight) return { ok: true, msg: "Harika! position: absolute doğru uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'position: absolute; top: 10px; right: 10px;' kurallarını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: POSITION FIXED (SABİT NAVBAR)",
      title: "3. Soru: Sabit Üst Menü (Fixed Navbar)",
      prompt: "<code>.navbar</code> sınıfını ekranın en üstüne sabitlemek için <code>position: fixed; top: 0; left: 0;</code> yapabilir misin?",
      presetCode: ".navbar {\n  width: 100%;\n  /* En üste sabitle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["position: fixed;", "top: 0;", "left: 0;"],
      hint: ".navbar {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}",
      solution: ".navbar {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasFixed = /position\s*:\s*fixed/i.test(clean);
        const hasTop = /top\s*:\s*0/i.test(clean);
        if (hasFixed && hasTop) return { ok: true, msg: "Mükemmel! position: fixed ile sabit menü kuruldu. ✓" };
        return { ok: false, msg: "Hata: 'position: fixed; top: 0; left: 0;' özelliklerini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: POSITION STICKY",
      title: "4. Soru: Yapışkan Eleman (Sticky)",
      prompt: "<code>.yan-menu</code> sınıfına <code>position: sticky; top: 20px;</code> yapışkan stilini ekleyebilir misin?",
      presetCode: ".yan-menu {\n  /* sticky yap ve top: 20px ver: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["position: sticky;", "top: 20px;"],
      hint: ".yan-menu {\n  position: sticky;\n  top: 20px;\n}",
      solution: ".yan-menu {\n  position: sticky;\n  top: 20px;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.yan-menu\s*\{[\s\S]*position\s*:\s*sticky\s*;?[\s\S]*top\s*:\s*20px\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! position: sticky uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'position: sticky; top: 20px;' kuralını tanımlayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: KATMAN YÖNETİMİ (Z-INDEX)",
      title: "5. Soru: z-index ile Katman Önceliği",
      prompt: "<code>.modal</code> sınıfının en önde görünmesi için <code>z-index: 100;</code> atayabilir misin?",
      presetCode: ".modal {\n  position: fixed;\n  /* z-index: 100 ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["z-index: 100;", "100"],
      hint: ".modal {\n  position: fixed;\n  z-index: 100;\n}",
      solution: ".modal {\n  position: fixed;\n  z-index: 100;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.modal\s*\{[\s\S]*z-index\s*:\s*100\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! z-index: 100 uygulandı. 8. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'z-index: 100;' kuralını ekleyin." };
      }
    }
  ],

  css_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: HOVER DURUMU",
      title: "1. Soru: Buton Üzerine Gelindiğinde (Hover)",
      prompt: "<code>button:hover</code> durumunda arka plan rengini <code>background-color: darkblue;</code> yapabilir misin?",
      presetCode: "/* button hover kuralını yaz: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["button:hover {", "background-color: darkblue;", "}"],
      hint: "button:hover {\n  background-color: darkblue;\n}",
      solution: "button:hover {\n  background-color: darkblue;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/button:hover\s*\{\s*background-color\s*:\s*darkblue\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! :hover efekti doğru yazıldı. ✓" };
        return { ok: false, msg: "Hata: 'button:hover { background-color: darkblue; }' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: FOCUS DURUMU",
      title: "2. Soru: Input Odaklanma (Focus)",
      prompt: "<code>input:focus</code> durumunda kenarlık rengini <code>border-color: blue;</code> yapabilir misin?",
      presetCode: "/* input focus kuralını yaz: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["input:focus {", "border-color: blue;", "}"],
      hint: "input:focus {\n  border-color: blue;\n}",
      solution: "input:focus {\n  border-color: blue;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/input:focus\s*\{\s*border-color\s*:\s*blue\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Harika! :focus kenarlık rengi uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'input:focus { border-color: blue; }' kuralını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: FIRST-CHILD VE LAST-CHILD",
      title: "3. Soru: İlk Liste Elemanını Seçme",
      prompt: "<code>li:first-child</code> seçicisine <code>font-weight: bold;</code> atayabilir misin?",
      presetCode: "/* İlk liste elemanını kalın yap: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["li:first-child {", "font-weight: bold;", "}"],
      hint: "li:first-child {\n  font-weight: bold;\n}",
      solution: "li:first-child {\n  font-weight: bold;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/li:first-child\s*\{\s*font-weight\s*:\s*(bold|700)\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! :first-child başarıyla uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'li:first-child { font-weight: bold; }' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: NTH-CHILD ILE ZEBRA DESENİ",
      title: "4. Soru: Çift Numaralı Satırlar (nth-child)",
      prompt: "Tablonun çift satırları için <code>tr:nth-child(even)</code> kuralına <code>background-color: #f1f5f9;</code> atayabilir misin?",
      presetCode: "/* Çift satırlara arka plan ata: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["tr:nth-child(even) {", "background-color: #f1f5f9;", "}"],
      hint: "tr:nth-child(even) {\n  background-color: #f1f5f9;\n}",
      solution: "tr:nth-child(even) {\n  background-color: #f1f5f9;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/tr:nth-child\s*\(\s*even\s*\)\s*\{\s*background-color\s*:\s*#f1f5f9\s*;?\s*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! :nth-child(even) zebra deseni oluşturuldu. ✓" };
        return { ok: false, msg: "Hata: 'tr:nth-child(even) { background-color: #f1f5f9; }' kuralını yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: SAHTE ELEMAN (::BEFORE)",
      title: "5. Soru: ::before ile İkon Ekleme",
      prompt: "<code>.uyari::before</code> sahte elemanına <code>content: '⚠️ ';</code> atayabilir misin?",
      presetCode: ".uyari::before {\n  /* content özelliğini ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["content: '⚠️ ';", "content: \"⚠️ \";"],
      hint: ".uyari::before {\n  content: '⚠️ ';\n}",
      solution: ".uyari::before {\n  content: '⚠️ ';\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.uyari::?before\s*\{[\s\S]*content\s*:\s*['"]⚠️\s*['"]\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! ::before sahte elemanı eklendi. 9. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: '.uyari::before { content: \"⚠️ \"; }' kuralını yazın." };
      }
    }
  ],

  css_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: LINEAR GRADIENT",
      title: "1. Soru: Doğrusal Renk Geçişi",
      prompt: "<code>.gradyan-kutu</code> sınıfına <code>background: linear-gradient(to right, red, yellow);</code> geçişini atayabilir misin?",
      presetCode: ".gradyan-kutu {\n  /* linear-gradient uygula: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background: linear-gradient(to right, red, yellow);", "linear-gradient"],
      hint: ".gradyan-kutu {\n  background: linear-gradient(to right, red, yellow);\n}",
      solution: ".gradyan-kutu {\n  background: linear-gradient(to right, red, yellow);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.gradyan-kutu\s*\{[\s\S]*background(-image)?\s*:\s*linear-gradient\s*\(\s*to\s+right\s*,\s*red\s*,\s*yellow\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! linear-gradient renk geçişi oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: 'background: linear-gradient(to right, red, yellow);' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: RADIAL GRADIENT",
      title: "2. Soru: Dairesel Renk Geçişi",
      prompt: "<code>.daire-gradyan</code> sınıfına <code>background: radial-gradient(circle, blue, black);</code> atayabilir misin?",
      presetCode: ".daire-gradyan {\n  /* radial-gradient uygula: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background: radial-gradient(circle, blue, black);", "radial-gradient"],
      hint: ".daire-gradyan {\n  background: radial-gradient(circle, blue, black);\n}",
      solution: ".daire-gradyan {\n  background: radial-gradient(circle, blue, black);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.daire-gradyan\s*\{[\s\S]*background(-image)?\s*:\s*radial-gradient\s*\(\s*circle\s*,\s*blue\s*,\s*black\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! radial-gradient dairesel geçiş uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'background: radial-gradient(circle, blue, black);' kuralını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: OPACITY ŞEFFAFLIK",
      title: "3. Soru: Eleman Şeffaflığı",
      prompt: "<code>.soluk-kart</code> sınıfına %70 görünürlük için <code>opacity: 0.7;</code> atayabilir misin?",
      presetCode: ".soluk-kart {\n  /* opacity: 0.7 ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["opacity: 0.7;", "0.7"],
      hint: ".soluk-kart {\n  opacity: 0.7;\n}",
      solution: ".soluk-kart {\n  opacity: 0.7;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.soluk-kart\s*\{[\s\S]*opacity\s*:\s*0?\.7\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! opacity: 0.7 uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'opacity: 0.7;' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: CURSOR POINTER",
      title: "4. Soru: Tıklanabilir İmleç",
      prompt: "<code>.tiklanabilir</code> sınıfına üzerine gelindiğinde el işareti çıkması için <code>cursor: pointer;</code> atayabilir misin?",
      presetCode: ".tiklanabilir {\n  /* cursor: pointer yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["cursor: pointer;", "pointer"],
      hint: ".tiklanabilir {\n  cursor: pointer;\n}",
      solution: ".tiklanabilir {\n  cursor: pointer;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.tiklanabilir\s*\{[\s\S]*cursor\s*:\s*pointer\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! cursor: pointer uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'cursor: pointer;' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: FILTER BLUR",
      title: "5. Soru: Bulanıklık Filtresi",
      prompt: "<code>.arka-plan</code> sınıfına <code>filter: blur(5px);</code> filtresini ekleyebilir misin?",
      presetCode: ".arka-plan {\n  /* blur filtresi uygula: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["filter: blur(5px);", "blur(5px)"],
      hint: ".arka-plan {\n  filter: blur(5px);\n}",
      solution: ".arka-plan {\n  filter: blur(5px);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.arka-plan\s*\{[\s\S]*filter\s*:\s*blur\s*\(\s*5px\s*\)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! filter: blur uygulandı. 10. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'filter: blur(5px);' kuralını yazın." };
      }
    }
  ],

  css_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: TRANSFORM TRANSLATE",
      title: "1. Soru: Elemanı Kaydırma (Translate)",
      prompt: "<code>.kayan-kutu</code> sınıfına x ekseninde 50px öteleme için <code>transform: translateX(50px);</code> atayabilir misin?",
      presetCode: ".kayan-kutu {\n  /* translateX uygula: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["transform: translateX(50px);", "translateX(50px)"],
      hint: ".kayan-kutu {\n  transform: translateX(50px);\n}",
      solution: ".kayan-kutu {\n  transform: translateX(50px);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kayan-kutu\s*\{[\s\S]*transform\s*:\s*translateX\s*\(\s*50px\s*\)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! transform: translateX uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'transform: translateX(50px);' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: TRANSFORM SCALE (ÖLÇEKLENDİRME)",
      title: "2. Soru: Elemanı Büyütme (Scale)",
      prompt: "<code>.kart:hover</code> durumuna %10 büyüme için <code>transform: scale(1.1);</code> atayabilir misin?",
      presetCode: ".kart:hover {\n  /* scale(1.1) uygula: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["transform: scale(1.1);", "scale(1.1)"],
      hint: ".kart:hover {\n  transform: scale(1.1);\n}",
      solution: ".kart:hover {\n  transform: scale(1.1);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kart:hover\s*\{[\s\S]*transform\s*:\s*scale\s*\(\s*1\.1\s*\)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! transform: scale(1.1) uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'transform: scale(1.1);' kuralını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: TRANSFORM ROTATE (DÖNDÜRME)",
      title: "3. Soru: Elemanı Döndürme (Rotate)",
      prompt: "<code>.ikon</code> sınıfına 45 derece dönmesi için <code>transform: rotate(45deg);</code> verebilir misin?",
      presetCode: ".ikon {\n  /* 45 derece döndür: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["transform: rotate(45deg);", "rotate(45deg)"],
      hint: ".ikon {\n  transform: rotate(45deg);\n}",
      solution: ".ikon {\n  transform: rotate(45deg);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.ikon\s*\{[\s\S]*transform\s*:\s*rotate\s*\(\s*45deg\s*\)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! transform: rotate(45deg) uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'transform: rotate(45deg);' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: TRANSITION GEÇİŞ SÜRESİ",
      title: "4. Soru: Yumuşak Geçiş (Transition)",
      prompt: "<code>.buton</code> sınıfına tüm değişimlerin 0.3 saniyede yumuşak olması için <code>transition: all 0.3s ease;</code> atayabilir misin?",
      presetCode: ".buton {\n  /* transition özelliğini ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["transition: all 0.3s ease;", "all 0.3s ease"],
      hint: ".buton {\n  transition: all 0.3s ease;\n}",
      solution: ".buton {\n  transition: all 0.3s ease;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.buton\s*\{[\s\S]*transition\s*:\s*all\s+0?\.3s(\s+ease)?\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! transition: all 0.3s ease uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'transition: all 0.3s ease;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: MİKRO ETKİLEŞİM",
      title: "5. Soru: Hover Buton Animasyonu",
      prompt: "Aşağıdaki buton hover olduğunda yukarı 3px kayması için <code>transform: translateY(-3px);</code> ekleyebilir misin?",
      presetCode: ".btn-kart:hover {\n  /* Yukarı 3px kaydır: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["transform: translateY(-3px);", "translateY(-3px)"],
      hint: ".btn-kart:hover {\n  transform: translateY(-3px);\n}",
      solution: ".btn-kart:hover {\n  transform: translateY(-3px);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.btn-kart:hover\s*\{[\s\S]*transform\s*:\s*translateY\s*\(\s*-3px\s*\)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! Mikro hover etkileşimi tamamlandı. 11. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'transform: translateY(-3px);' kuralını yazın." };
      }
    }
  ],

  css_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: KEYFRAMES TANIMI",
      title: "1. Soru: @keyframes Bloğu Oluşturma",
      prompt: "<code>@keyframes belirme { from { opacity: 0; } to { opacity: 1; } }</code> animasyon kuralını tanımlayabilir misin?",
      presetCode: "/* @keyframes belirme kuralını yaz: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["@keyframes belirme {", "from { opacity: 0; }", "to { opacity: 1; }", "}"],
      hint: "@keyframes belirme {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}",
      solution: "@keyframes belirme {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/@keyframes\s+belirme\s*\{[\s\S]*from\s*\{\s*opacity\s*:\s*0\s*;?\s*\}[\s\S]*to\s*\{\s*opacity\s*:\s*1\s*;?\s*\}[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! @keyframes belirme başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: '@keyframes belirme { from { opacity: 0; } to { opacity: 1; } }' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ANIMASYON ADI & SÜRESİ",
      title: "2. Soru: Animasyonu Elemana Bağlama",
      prompt: "<code>.kutu</code> sınıfına <code>animation-name: belirme;</code> ve <code>animation-duration: 2s;</code> özelliklerini ekleyebilir misin?",
      presetCode: ".kutu {\n  /* animasyon adı ve süresini ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["animation-name: belirme;", "animation-duration: 2s;"],
      hint: ".kutu {\n  animation-name: belirme;\n  animation-duration: 2s;\n}",
      solution: ".kutu {\n  animation-name: belirme;\n  animation-duration: 2s;\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasName = /animation-name\s*:\s*belirme/i.test(clean);
        const hasDur = /animation-duration\s*:\s*2s/i.test(clean);
        if (hasName && hasDur) return { ok: true, msg: "Harika! Animasyon elemana bağlandı. ✓" };
        return { ok: false, msg: "Hata: 'animation-name: belirme; animation-duration: 2s;' özelliklerini ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: SONSUZ DÖNGÜ (INFINITE)",
      title: "3. Soru: Sonsuz Animasyon",
      prompt: "<code>.yukleyici</code> sınıfına <code>animation-iteration-count: infinite;</code> atayabilir misin?",
      presetCode: ".yukleyici {\n  animation-name: donme;\n  animation-duration: 1s;\n  /* Sonsuz tekrar ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["animation-iteration-count: infinite;", "infinite"],
      hint: ".yukleyici {\n  animation-name: donme;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}",
      solution: ".yukleyici {\n  animation-name: donme;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.yukleyici\s*\{[\s\S]*animation-iteration-count\s*:\s*infinite\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! animation-iteration-count: infinite uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'animation-iteration-count: infinite;' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: YÜZDELİ KEYFRAMES ADIMLARI",
      title: "4. Soru: 0%, 50%, 100% Adımları",
      prompt: "<code>@keyframes yanıp-sonme { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }</code> kuralını yazabilir misin?",
      presetCode: "/* @keyframes yanıp-sonme kuralını yaz: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["@keyframes yanıp-sonme {", "0% { opacity: 1; }", "50% { opacity: 0; }", "100% { opacity: 1; }", "}"],
      hint: "@keyframes yanıp-sonme {\n  0% { opacity: 1; }\n  50% { opacity: 0; }\n  100% { opacity: 1; }\n}",
      solution: "@keyframes yanıp-sonme {\n  0% { opacity: 1; }\n  50% { opacity: 0; }\n  100% { opacity: 1; }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/@keyframes\s+yanıp-sonme\s*\{[\s\S]*0%\s*\{\s*opacity\s*:\s*1\s*;?\s*\}[\s\S]*50%\s*\{\s*opacity\s*:\s*0\s*;?\s*\}[\s\S]*100%\s*\{\s*opacity\s*:\s*1\s*;?\s*\}[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Çok adımlı keyframes başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 0%, 50% ve 100% adımlarını opacity değerleriyle yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ANIMATION KISAYOLU",
      title: "5. Soru: animation Shorthand",
      prompt: "<code>.donen-ikon</code> sınıfına kısayol ile <code>animation: donme 2s linear infinite;</code> atayabilir misin?",
      presetCode: ".donen-ikon {\n  /* Tek satırda animation kısayolu ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["animation: donme 2s linear infinite;", "donme 2s linear infinite"],
      hint: ".donen-ikon {\n  animation: donme 2s linear infinite;\n}",
      solution: ".donen-ikon {\n  animation: donme 2s linear infinite;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.donen-ikon\s*\{[\s\S]*animation\s*:\s*donme\s+2s\s+linear\s+infinite\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! animation kısayolu uygulandı. 12. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'animation: donme 2s linear infinite;' kuralını yazın." };
      }
    }
  ],

  css_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: DISPLAY FLEX",
      title: "1. Soru: Flex Container Başlatma",
      prompt: "<code>.kapsayici</code> sınıfına elemanları esnek düzenlemek için <code>display: flex;</code> atayabilir misin?",
      presetCode: ".kapsayici {\n  /* display: flex yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["display: flex;", "flex"],
      hint: ".kapsayici {\n  display: flex;\n}",
      solution: ".kapsayici {\n  display: flex;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kapsayici\s*\{[\s\S]*display\s*:\s*flex\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! display: flex tanımlandı. ✓" };
        return { ok: false, msg: "Hata: 'display: flex;' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: JUSTIFY-CONTENT",
      title: "2. Soru: Yatayda İki Uca Yayma (Space-Between)",
      prompt: "<code>.navbar</code> sınıfında logo ve menüyü iki zıt köşeye ayırmak için <code>justify-content: space-between;</code> atayabilir misin?",
      presetCode: ".navbar {\n  display: flex;\n  /* İki uca yay: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["justify-content: space-between;", "space-between"],
      hint: ".navbar {\n  display: flex;\n  justify-content: space-between;\n}",
      solution: ".navbar {\n  display: flex;\n  justify-content: space-between;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.navbar\s*\{[\s\S]*justify-content\s*:\s*space-between\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! justify-content: space-between uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'justify-content: space-between;' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: ALIGN-ITEMS İLE DİKEY ORTALAMA",
      title: "3. Soru: Dikeyde Kusursuz Ortalama",
      prompt: "<code>.kart-iceriği</code> sınıfına dikeyde ortalamak için <code>align-items: center;</code> ekleyebilir misin?",
      presetCode: ".kart-iceriği {\n  display: flex;\n  /* Dikeyde ortala: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["align-items: center;", "center"],
      hint: ".kart-iceriği {\n  display: flex;\n  align-items: center;\n}",
      solution: ".kart-iceriği {\n  display: flex;\n  align-items: center;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kart-iceriği\s*\{[\s\S]*align-items\s*:\s*center\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! align-items: center ile dikey ortalama sağlandı. ✓" };
        return { ok: false, msg: "Hata: 'align-items: center;' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: GAP İLE ELEMAN ARASI BOŞLUK",
      title: "4. Soru: Flex Elemanları Arası Boşluk",
      prompt: "<code>.buton-grubu</code> sınıfına elemanlar arasına 16px boşluk vermek için <code>gap: 16px;</code> atayabilir misin?",
      presetCode: ".buton-grubu {\n  display: flex;\n  /* gap: 16px ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["gap: 16px;", "16px"],
      hint: ".buton-grubu {\n  display: flex;\n  gap: 16px;\n}",
      solution: ".buton-grubu {\n  display: flex;\n  gap: 16px;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.buton-grubu\s*\{[\s\S]*gap\s*:\s*16px\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! gap: 16px boşluğu eklendi. ✓" };
        return { ok: false, msg: "Hata: 'gap: 16px;' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: FLEX-DIRECTION VE WRAP",
      title: "5. Soru: Dikey Sütun Sıralaması (column)",
      prompt: "<code>.sidebar</code> sınıfındaki flex elemanlarını alt alta dizmek için <code>flex-direction: column;</code> atayabilir misin?",
      presetCode: ".sidebar {\n  display: flex;\n  /* flex-direction column yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["flex-direction: column;", "column"],
      hint: ".sidebar {\n  display: flex;\n  flex-direction: column;\n}",
      solution: ".sidebar {\n  display: flex;\n  flex-direction: column;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.sidebar\s*\{[\s\S]*flex-direction\s*:\s*column\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! flex-direction: column uygulandı. 13. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'flex-direction: column;' kuralını yazın." };
      }
    }
  ],

  css_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: DISPLAY GRID",
      title: "1. Soru: Grid Container Başlatma",
      prompt: "<code>.izgara</code> sınıfına <code>display: grid;</code> atayabilir misin?",
      presetCode: ".izgara {\n  /* display: grid yap: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["display: grid;", "grid"],
      hint: ".izgara {\n  display: grid;\n}",
      solution: ".izgara {\n  display: grid;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.izgara\s*\{[\s\S]*display\s*:\s*grid\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! display: grid tanımlandı. ✓" };
        return { ok: false, msg: "Hata: 'display: grid;' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: GRID-TEMPLATE-COLUMNS",
      title: "2. Soru: 3 Eşit Sütunlu Izgara (1fr)",
      prompt: "<code>.kart-izgara</code> sınıfına 3 eşit sütun oluşturmak için <code>grid-template-columns: 1fr 1fr 1fr;</code> (veya <code>repeat(3, 1fr)</code>) atayabilir misin?",
      presetCode: ".kart-izgara {\n  display: grid;\n  /* 3 eşit sütun tanımla: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["grid-template-columns: repeat(3, 1fr);", "grid-template-columns: 1fr 1fr 1fr;"],
      hint: ".kart-izgara {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}",
      solution: ".kart-izgara {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kart-izgara\s*\{[\s\S]*grid-template-columns\s*:\s*(repeat\s*\(\s*3\s*,\s*1fr\s*\)|1fr\s+1fr\s+1fr)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! 3 sütunlu Grid ızgarası kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: 'grid-template-columns: repeat(3, 1fr);' kuralını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: GRID GAP",
      title: "3. Soru: Grid Boşluğu (Gap)",
      prompt: "<code>.galeri</code> sınıfına satır ve sütunlar arasında 20px boşluk için <code>gap: 20px;</code> atayabilir misin?",
      presetCode: ".galeri {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  /* gap: 20px ekle: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["gap: 20px;", "20px"],
      hint: ".galeri {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}",
      solution: ".galeri {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.galeri\s*\{[\s\S]*gap\s*:\s*20px\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! gap: 20px uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'gap: 20px;' özelliğini ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: GRID-COLUMN SPAN",
      title: "4. Soru: İki Sütun Kaplama (Span 2)",
      prompt: "<code>.one-cikan-kart</code> elemanının 2 sütun genişliğinde yer kaplaması için <code>grid-column: span 2;</code> atayabilir misin?",
      presetCode: ".one-cikan-kart {\n  /* 2 sütun kapla: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["grid-column: span 2;", "span 2"],
      hint: ".one-cikan-kart {\n  grid-column: span 2;\n}",
      solution: ".one-cikan-kart {\n  grid-column: span 2;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.one-cikan-kart\s*\{[\s\S]*grid-column\s*:\s*span\s+2\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! grid-column: span 2 uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'grid-column: span 2;' kuralını yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: OTOMATİK RESPONSIVE GRID",
      title: "5. Soru: repeat(auto-fit, minmax(...))",
      prompt: "<code>.otomatik-izgara</code> sınıfına <code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code> kuralını ekleyebilir misin?",
      presetCode: ".otomatik-izgara {\n  display: grid;\n  /* auto-fit minmax kuralını yaz: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));", "repeat(auto-fit, minmax(200px, 1fr))"],
      hint: ".otomatik-izgara {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}",
      solution: ".otomatik-izgara {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.otomatik-izgara\s*\{[\s\S]*grid-template-columns\s*:\s*repeat\s*\(\s*auto-fit\s*,\s*minmax\s*\(\s*200px\s*,\s*1fr\s*\)\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! Otomatik duyarlı CSS Grid mimarisi kuruldu. 14. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));' kuralını yazın." };
      }
    }
  ],

  css_15: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 15: MEDYA SORGUSU (@MEDIA)",
      title: "1. Soru: 768px Mobil Medya Sorgusu",
      prompt: "Ekran genişliği 768px ve altı olduğunda <code>body { background-color: lightgray; }</code> yapacak medya sorgusunu yazabilir misin?",
      presetCode: "/* @media (max-width: 768px) sorgusunu yaz: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["@media (max-width: 768px) {", "body { background-color: lightgray; }", "}"],
      hint: "@media (max-width: 768px) {\n  body {\n    background-color: lightgray;\n  }\n}",
      solution: "@media (max-width: 768px) {\n  body {\n    background-color: lightgray;\n  }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*body\s*\{\s*background-color\s*:\s*lightgray\s*;?\s*\}[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 768px Medya sorgusu doğru yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: '@media (max-width: 768px) { body { background-color: lightgray; } }' kuralını yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 15: MOBİLDE FLEX SÜTUNA ÇEVİRME",
      title: "2. Soru: Mobilde Kartları Alt Alta Dizme",
      prompt: "Medya sorgusu içinde <code>.kart-kapsayici</code> sınıfının <code>flex-direction: column;</code> olmasını sağlayabilir misin?",
      presetCode: "@media (max-width: 768px) {\n  .kart-kapsayici {\n    /* flex-direction column yap: */\n  }\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["flex-direction: column;", "column"],
      hint: "@media (max-width: 768px) {\n  .kart-kapsayici {\n    flex-direction: column;\n  }\n}",
      solution: "@media (max-width: 768px) {\n  .kart-kapsayici {\n    flex-direction: column;\n  }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*\.kart-kapsayici\s*\{[\s\S]*flex-direction\s*:\s*column\s*;?[\s\S]*\}[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! Mobilde flex-direction: column uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'flex-direction: column;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 15: MOBİLDE ELEMAN GİZLEME",
      title: "3. Soru: Mobilde Yan Menüyü Gizle",
      prompt: "768px altında <code>.sidebar</code> sınıfını gizlemek için <code>display: none;</code> atayabilir misin?",
      presetCode: "@media (max-width: 768px) {\n  .sidebar {\n    /* Mobilde gizle: */\n  }\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["display: none;", "none"],
      hint: "@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n}",
      solution: "@media (max-width: 768px) {\n  .sidebar {\n    display: none;\n  }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/@media\s*\(\s*max-width\s*:\s*768px\s*\)\s*\{[\s\S]*\.sidebar\s*\{[\s\S]*display\s*:\s*none\s*;?[\s\S]*\}[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Mobilde sidebar gizlendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'display: none;' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 15: RESPONSIVE GÖRSELLER",
      title: "4. Soru: max-width: 100% Görsel Kuralı",
      prompt: "Tüm <code>img</code> etiketlerinin kapsayıcı dışına taşmaması için <code>max-width: 100%; height: auto;</code> kuralını ekleyebilir misin?",
      presetCode: "img {\n  /* Responsive resim kuralı: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["max-width: 100%;", "height: auto;"],
      hint: "img {\n  max-width: 100%;\n  height: auto;\n}",
      solution: "img {\n  max-width: 100%;\n  height: auto;\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasMaxWidth = /max-width\s*:\s*100%/i.test(clean);
        const hasHeight = /height\s*:\s*auto/i.test(clean);
        if (hasMaxWidth && hasHeight) return { ok: true, msg: "Tebrikler! img responsive kuralı doğru yazıldı. ✓" };
        return { ok: false, msg: "Hata: 'max-width: 100%; height: auto;' kurallarını ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 15: MASAÜSTÜ MEDYA SORGUSU (MIN-WIDTH)",
      title: "5. Soru: 1024px Masaüstü Sorgusu (min-width)",
      prompt: "Genişliği 1024px ve üzeri olan ekranlar için <code>@media (min-width: 1024px) { .izgara { grid-template-columns: repeat(4, 1fr); } }</code> kuralını yazabilir misin?",
      presetCode: "/* min-width 1024px sorgusunu yaz: */\n",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["@media (min-width: 1024px) {", ".izgara { grid-template-columns: repeat(4, 1fr); }", "}"],
      hint: "@media (min-width: 1024px) {\n  .izgara {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}",
      solution: "@media (min-width: 1024px) {\n  .izgara {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/@media\s*\(\s*min-width\s*:\s*1024px\s*\)\s*\{[\s\S]*\.izgara\s*\{[\s\S]*grid-template-columns\s*:\s*repeat\s*\(\s*4\s*,\s*1fr\s*\)\s*;?[\s\S]*\}[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! min-width: 1024px masaüstü kuralı uygulandı. 15. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: '@media (min-width: 1024px) { .izgara { grid-template-columns: repeat(4, 1fr); } }' kuralını yazın." };
      }
    }
  ],

  css_16: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 16: CSS DEĞİŞKENİ TANIMLAMA (:ROOT)",
      title: "1. Soru: :root içinde Değişken Tanımlama",
      prompt: "<code>:root</code> sahte sınıfı içinde <code>--ana-renk: #6366f1;</code> değişkenini tanımlayabilir misin?",
      presetCode: ":root {\n  /* --ana-renk değişkenini tanımla: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["--ana-renk: #6366f1;", "--ana-renk:"],
      hint: ":root {\n  --ana-renk: #6366f1;\n}",
      solution: ":root {\n  --ana-renk: #6366f1;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/:root\s*\{[\s\S]*--ana-renk\s*:\s*#6366f1\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Tebrikler! :root değişkeni başarıyla tanımlandı. ✓" };
        return { ok: false, msg: "Hata: '--ana-renk: #6366f1;' değişkenini ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 16: VAR() İLE DEĞİŞKENİ KULLANMA",
      title: "2. Soru: var(--ana-renk) Kullanımı",
      prompt: "<code>.buton</code> sınıfının arka plan rengine <code>background-color: var(--ana-renk);</code> atayabilir misin?",
      presetCode: ".buton {\n  /* var() ile değişkeni kullan: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background-color: var(--ana-renk);", "var(--ana-renk)"],
      hint: ".buton {\n  background-color: var(--ana-renk);\n}",
      solution: ".buton {\n  background-color: var(--ana-renk);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.buton\s*\{[\s\S]*background-color\s*:\s*var\s*\(\s*--ana-renk\s*\)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Harika! var(--ana-renk) başarıyla çağrıldı. ✓" };
        return { ok: false, msg: "Hata: 'background-color: var(--ana-renk);' kuralını yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 16: CALC() İLE DİNAMİK HESAPLAMA",
      title: "3. Soru: calc(100% - 40px)",
      prompt: "<code>.kutu</code> genişliğini tam ekrandan 40px çıkaracak şekilde <code>width: calc(100% - 40px);</code> yapabilir misin?",
      presetCode: ".kutu {\n  /* calc() ile genişlik hesapla: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["width: calc(100% - 40px);", "calc(100% - 40px)"],
      hint: ".kutu {\n  width: calc(100% - 40px);\n}",
      solution: ".kutu {\n  width: calc(100% - 40px);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\.kutu\s*\{[\s\S]*width\s*:\s*calc\s*\(\s*100%\s*-\s*40px\s*\)\s*;?[\s\S]*\}/i.test(clean)) return { ok: true, msg: "Mükemmel! calc() dinamik matematiksel işlemi uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'width: calc(100% - 40px);' kuralını yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 16: KAPSAMLI KART BİLEŞENİ",
      title: "4. Soru: Modern UI Kart Tasarımı",
      prompt: "<code>.proje-karti</code> sınıfına <code>background: white; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);</code> özelliklerini ekleyebilir misin?",
      presetCode: ".proje-karti {\n  /* Modern kart stillerini ata: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["background: white;", "border-radius: 12px;", "padding: 24px;", "box-shadow: 0 4px 6px rgba(0,0,0,0.05);"],
      hint: ".proje-karti {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n}",
      solution: ".proje-karti {\n  background: white;\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.05);\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasRadius = /border-radius\s*:\s*12px/i.test(clean);
        const hasPadding = /padding\s*:\s*24px/i.test(clean);
        const hasShadow = /box-shadow/i.test(clean);
        if (hasRadius && hasPadding && hasShadow) return { ok: true, msg: "Tebrikler! Modern kart bileşeni hazırlandı. ✓" };
        return { ok: false, msg: "Hata: border-radius: 12px, padding: 24px ve box-shadow özelliklerini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 16: CSS FİNAL PROJESİ",
      title: "5. Soru: Eksiksiz Responsive Buton Tasarımı",
      prompt: "<code>.btn-proje</code> sınıfına <code>display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 8px; transition: all 0.2s ease; cursor: pointer;</code> ekleyebilir misin?",
      presetCode: ".btn-proje {\n  /* Profesyonel buton kuralını tamamla: */\n}",
      filename: "style.css",
      lang: "CSS3",
      quickKeys: ["display: inline-flex;", "align-items: center;", "justify-content: center;", "gap: 8px;", "border-radius: 8px;", "cursor: pointer;"],
      hint: ".btn-proje {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}",
      solution: ".btn-proje {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasFlex = /display\s*:\s*(inline-flex|flex)/i.test(clean);
        const hasAlign = /align-items\s*:\s*center/i.test(clean);
        const hasRadius = /border-radius\s*:\s*8px/i.test(clean);
        const hasPointer = /cursor\s*:\s*pointer/i.test(clean);
        if (hasFlex && hasAlign && hasRadius && hasPointer) {
          return { ok: true, msg: "Mükemmel! CSS3 Müfredatının tüm modülleri ve alıştırmaları başarıyla tamamlandı! 🏆🚀" };
        }
        return { ok: false, msg: "Hata: display: inline-flex, align-items: center, border-radius: 8px ve cursor: pointer özelliklerini ekleyin." };
      }
    }
  ]
};

// Aliases for review cards and challenges
for (let i = 1; i <= 16; i++) {
  if (CSS_TOPIC_REVIEWS[`css_${i}`]) {
    CSS_TOPIC_REVIEWS[`c${i}`] = CSS_TOPIC_REVIEWS[`css_${i}`];
    CSS_TOPIC_REVIEWS[`css${i}`] = CSS_TOPIC_REVIEWS[`css_${i}`];
  }
  if (CSS_CHALLENGES[`css_${i}`]) {
    CSS_CHALLENGES[`c${i}`] = CSS_CHALLENGES[`css_${i}`];
    CSS_CHALLENGES[`css${i}`] = CSS_CHALLENGES[`css_${i}`];
  }
}
