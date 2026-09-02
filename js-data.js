// =========================================================================
// ⚡ JAVASCRIPT (ES6+) MÜFREDATI: 14 HIZLI TEORİ KARTI & 70 İNTERAKTİF KODLAMA GÖREVİ
// (W3Schools JS & Enes Bayram Web Geliştirme Ders 58-168 Müfredatı)
// =========================================================================

const JS_TOPIC_REVIEWS = {
  "js_1": {
    "title": "JS'e Giriş, Çıktı & Değişkenler",
    "readTime": "2 dk okuma",
    "rewardText": "🏡 Giriş Çiftliği & Su Kuyusu",
    "logic": "JavaScript web sayfalarına dinamizm ve mantık katan betik dilidir. Değişkenler verileri hafızada tutar; console.log() ise geliştirici konsoluna çıktı verir.",
    "syntaxRules": [
      "<code>let yas = 20;</code> : Değeri sonradan değiştirilebilen blok kapsamlı değişken.",
      "<code>const PI = 3.14;</code> : Değeri sonradan değiştirilemeyen sabit (constant).",
      "<code>console.log(deger);</code> : Tarayıcı geliştirici konsoluna çıktı basar.",
      "<code>// Tek satır, /* Çok satır */</code> : Kod içi açıklama satırları."
    ],
    "pitfalls": [
      "⚠️ <code>const</code> ile tanımlanan bir değişkene yeniden atama (<code>PI = 3.15</code>) yapılamaz; TypeError verir.",
      "⚠️ <code>var</code> fonksiyon kapsamlıdır ve 'hoisting' nedeniyle beklenmedik hatalar doğurabilir; modern JS'te <code>let</code> ve <code>const</code> tercih edilir.",
      "⚠️ Değişken isimleri rakamla başlayamaz ve Türkçe özel karakterler içermemelidir."
    ],
    "exampleCode": "let kullaniciAdi = \"Bengi\";\nconst seviye = 1;\nconsole.log(\"Hoş geldin:\", kullaniciAdi);"
  },
  "js_2": {
    "title": "Veri Tipleri, Tip Dönüşümleri & Operatörler",
    "readTime": "3 dk okuma",
    "rewardText": "💡 Şehir Elektrik Şebekesi",
    "logic": "Veri tipleri bellekte tutulan verinin türünü belirtir (String, Number, Boolean vb.). Operatörler ise aritmetik hesaplama ve mantıksal karşılaştırma yapar.",
    "syntaxRules": [
      "<code>typeof deger</code> : Değişkenin veri tipini döndürür (string, number, boolean vb.).",
      "<code>Number(\"123\") / parseInt(\"10\")</code> : Metni sayıya çevirir.",
      "<code>String(50) / sayi.toString()</code> : Sayıyı metne çevirir.",
      "<code>===</code> ve <code>!==</code> : Değer ve veri tipi eşitliğini birlikte kontrol eder (Katı Eşitlik).",
      "<code>&&</code> (VE), <code>||</code> (VEYA), <code>!</code> (DEĞİL) : Mantıksal bağlaçlar."
    ],
    "pitfalls": [
      "⚠️ <code>==</code> tür dönüşümü yaparak karşılaştırır (<code>\"5\" == 5</code> true çıkar). Daima katı eşitlik olan <code>===</code> kullanın!",
      "⚠️ Bir metin ile sayıyı toplarsanız (<code>\"5\" + 2</code>), sonuç <code>\"52\"</code> metni olur.",
      "⚠️ Geçersiz bir sayı dönüşümünde sonuç <code>NaN</code> (Not a Number) çıkar."
    ],
    "exampleCode": "let puan = \"100\";\nlet toplam = Number(puan) + 50; // 150 (number)\nlet ayniMi = (10 === 10);        // true"
  },
  "js_3": {
    "title": "Karar Yapıları (If / Else, Switch & Ternary)",
    "readTime": "2 dk okuma",
    "rewardText": "🚰 Su Arıtma & Çeşmeler",
    "logic": "Programın belirli koşullara göre farklı kod bloklarını çalıştırmasını sağlar.",
    "syntaxRules": [
      "<code>if (kosul) { } else if (diger) { } else { }</code> : Standart koşullu karar mekanizması.",
      "<code>switch (deger) { case 1: break; default: }</code> : Çoklu durum kontrolü.",
      "<code>kosul ? dogruSonuc : yanlisSonuc</code> : Tek satırlık pratik Ternary (üçlü) operatörü."
    ],
    "pitfalls": [
      "⚠️ <code>if</code> parantezinde tek eşittir (<code>if (a = 5)</code>) atama yapar, karşılaştırma için <code>===</code> yazılmalıdır.",
      "⚠️ <code>switch-case</code> yapısında durumların sonuna <code>break;</code> koymayı unutmayın, aksi halde sonraki durumlar da çalışır.",
      "⚠️ JavaScript'te <code>0, \"\", null, undefined, NaN</code> değerleri mantıksal olarak <code>false</code> (falsy) kabul edilir."
    ],
    "exampleCode": "let yas = 18;\nif (yas >= 18) {\n  console.log(\"Giriş serbest\");\n} else {\n  console.log(\"Giriş yasak\");\n}\n\nlet durum = yas >= 18 ? \"Reşit\" : \"Çocuk\";"
  },
  "js_4": {
    "title": "Döngüler (For & While Loops)",
    "readTime": "2 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Botanik Bahçe",
    "logic": "Bir işlemi belirli sayıda veya bir koşul sağlandığı sürece tekrarlamak için kullanılır.",
    "syntaxRules": [
      "<code>for (let i = 0; i &lt; n; i++) { }</code> : Belirlenen adım sayısı kadar döner.",
      "<code>while (kosul) { }</code> : Koşul true olduğu sürece çalışmaya devam eder.",
      "<code>break;</code> : Döngüyü anında sonlandırır ve dışarı çıkar.",
      "<code>continue;</code> : O anki adımı atlar ve bir sonraki adıma geçer."
    ],
    "pitfalls": [
      "⚠️ <code>while</code> döngülerinde sayacı artırmayı unutursanız tarayıcı kilitlenir (Sonsuz Döngü).",
      "⚠️ <code>for</code> içinde döngü sayacını mutlaka <code>let</code> ile tanımlayın (<code>let i = 0</code>).",
      "⚠️ Sıfırdan başlayan döngülerde dizi uzunluğuna kadar giderken <code>&lt;=</code> değil, <code>&lt;</code> kullanılır."
    ],
    "exampleCode": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue; // 3'ü atla\n  console.log(\"Adım:\", i);\n}"
  },
  "js_5": {
    "title": "Fonksiyonlar & Modern Arrow Functions",
    "readTime": "3 dk okuma",
    "rewardText": "🏢 Modern Rezidanslar & İş Kuleleri",
    "logic": "Tekrar kullanılabilir kod blokları oluşturur. Girdi (parametre) alır, işler ve çıktı (return) üretir.",
    "syntaxRules": [
      "<code>function topla(a, b) { return a + b; }</code> : Klasik fonksiyon bildirimi.",
      "<code>const carp = (a, b) => a * b;</code> : Tek satırlık modern ES6 Ok Fonksiyonu (Arrow Function).",
      "<code>function selam(ad = \"Misafir\") { }</code> : Varsayılan (default) parametre değeri.",
      "<code>return sonuc;</code> : Fonksiyonun çalışmasını bitirip çağrıldığı yere değer döner."
    ],
    "pitfalls": [
      "⚠️ <code>return</code> yazılmayan fonksiyonlar varsayılan olarak <code>undefined</code> döner.",
      "⚠️ <code>return</code> satırından sonra yazılan kodlar asla çalıştırılmaz (unreachable code).",
      "⚠️ Arrow fonksiyonlarda süslü parantez <code>{}</code> açılırsa açıkça <code>return</code> yazılmalıdır."
    ],
    "exampleCode": "const karesi = (x) => x * x;\nconsole.log(karesi(5)); // 25\n\nfunction selamVer(isim = \"Kullanıcı\") {\n  return `Merhaba ${isim}!`;\n}"
  },
  "js_6": {
    "title": "Diziler (Arrays) & Temel Metotlar",
    "readTime": "3 dk okuma",
    "rewardText": "🎬 Sinema & Kültür Merkezi",
    "logic": "Birden çok veriyi sıralı bir listede tutar. Sıfırdan başlayan indekslerle elemanlara erişilir.",
    "syntaxRules": [
      "<code>let dizi = [\"Elma\", \"Armut\"];</code> : Köşeli parantezle dizi oluşturma.",
      "<code>dizi.push(eleman)</code> : Dizinin sonuna yeni eleman ekler.",
      "<code>dizi.pop()</code> : Dizinin sonundaki elemanı çıkarır.",
      "<code>dizi.shift() / dizi.unshift(x)</code> : Baştan eleman siler veya başa eleman ekler.",
      "<code>dizi.includes(\"Muz\")</code> : Elemanın dizide var olup olmadığını (true/false) döner.",
      "<code>dizi.length</code> : Toplam eleman sayısını verir."
    ],
    "pitfalls": [
      "⚠️ Dizi indeksleri sıfırdan başlar; son elemanın indeksi <code>dizi.length - 1</code>'dir.",
      "⚠️ <code>pop()</code> ve <code>shift()</code> orijinal diziyi doğrudan değiştirir (mutate eder).",
      "⚠️ Olmayan bir indekse erişmek hata vermez, <code>undefined</code> döner."
    ],
    "exampleCode": "const sehirler = [\"Ankara\", \"İstanbul\"];\nsehirler.push(\"İzmir\");\nconsole.log(sehirler[0]); // 'Ankara'\nconsole.log(sehirler.includes(\"Bursa\")); // false"
  },
  "js_7": {
    "title": "İleri Dizi Metotları (ES6+ Iterators)",
    "readTime": "3 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Dizi elemanlarını döngü kurmadan modern fonksiyonel yöntemlerle dönüştürmek, filtrelemek ve işlemek için kullanılır.",
    "syntaxRules": [
      "<code>dizi.forEach(item => console.log(item))</code> : Her eleman için bir işlem yürütür.",
      "<code>let yeniDizi = dizi.map(x => x * 2)</code> : Her elemanı dönüştürerek aynı uzunlukta yeni dizi üretir.",
      "<code>let filtreli = dizi.filter(x => x > 10)</code> : Koşulu sağlayan elemanlardan yeni dizi süzer.",
      "<code>let bulunan = dizi.find(x => x === 5)</code> : Koşulu sağlayan ilk elemanı döner.",
      "<code>let toplam = dizi.reduce((acc, curr) => acc + curr, 0)</code> : Diziyi tek bir kümülatif değere indirger."
    ],
    "pitfalls": [
      "⚠️ <code>.map()</code> ve <code>.filter()</code> orijinal diziyi bozmaz, yeni bir dizi döner. Bu yüzden sonucu bir değişkene atamalısınız.",
      "⚠️ <code>.forEach()</code> geriye değer dönmez (undefined döner); yeni dizi gerekiyorsa <code>.map()</code> kullanılmalıdır.",
      "⚠️ <code>.find()</code> eleman bulamazsa <code>undefined</code> döner."
    ],
    "exampleCode": "const sayilar = [1, 2, 3, 4, 5];\nconst ciftler = sayilar.filter(n => n % 2 === 0); // [2, 4]\nconst kareler = sayilar.map(n => n * n);          // [1, 4, 9, 16, 25]"
  },
  "js_8": {
    "title": "Nesneler (Objects) & Destructuring",
    "readTime": "3 dk okuma",
    "rewardText": "🏛️ Yönetim Sarayı & Belediye",
    "logic": "Gerçek dünya varlıklarını anahtar-değer (key-value) çiftleriyle modeller.",
    "syntaxRules": [
      "<code>const kisi = { ad: \"Can\", yas: 25 };</code> : Obje tanımlama.",
      "<code>kisi.ad / kisi[\"ad\"]</code> : Özellik değerini okuma.",
      "<code>const { ad, yas } = kisi;</code> : Obje Parçalama (Destructuring).",
      "<code>Object.keys(kisi) / Object.values(kisi)</code> : Anahtarları veya değerleri dizi olarak alır.",
      "<code>this</code> : Metot içinde o anki nesnenin özelliklerine erişir."
    ],
    "pitfalls": [
      "⚠️ <code>const</code> ile tanımlanan nesnenin özellikleri (<code>kisi.ad = \"Ali\"</code>) değiştirilebilir, sadece referansı yeniden atanamaz.",
      "⚠️ Nesnede olmayan bir özelliğe erişildiğinde <code>undefined</code> döner.",
      "⚠️ Arrow fonksiyonlar içinde <code>this</code> nesneye değil, dış kapsama bağlanır; metot tanımlarken standart fonksiyon tercih edilir."
    ],
    "exampleCode": "const araba = {\n  marka: \"Tesla\",\n  model: \"Model 3\",\n  calistir() {\n    return `${this.marka} çalıştı.`;\n  }\n};\nconst { marka } = araba; // 'Tesla'"
  },
  "js_9": {
    "title": "String, Math & Template Literals",
    "readTime": "2 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Metinsel verileri işlemek, dinamik string formatlamak ve rastgele sayı veya yuvarlama işlemleri yapmak için kullanılır.",
    "syntaxRules": [
      "<code>`Merhaba ${ad}, Puan: ${skor + 10}`</code> : Backtick (`` ` ``) ile Template Literal formatlama.",
      "<code>metin.trim()</code> : Metnin başındaki ve sonundaki boşlukları temizler.",
      "<code>metin.toUpperCase() / .toLowerCase()</code> : Harf büyüklüğünü değiştirir.",
      "<code>metin.split(\",\")</code> : Metni belirtilen ayraçtan bölüp dizi yapar.",
      "<code>Math.floor(x) / Math.ceil(x) / Math.round(x)</code> : Aşağı, yukarı veya en yakına yuvarlar.",
      "<code>Math.random()</code> : 0 ile 1 arasında rastgele ondalıklı sayı üretir."
    ],
    "pitfalls": [
      "⚠️ String metotları orijinal metni değiştirmez, yeni bir metin döner.",
      "⚠️ 1 ile 10 arasında rastgele tam sayı üretmek için: <code>Math.floor(Math.random() * 10) + 1</code> formülü kullanılır.",
      "⚠️ Template Literals için standart tırnak (<code>\" '</code>) değil, ters tırnak / backtick (<code>`</code>) kullanılmalıdır."
    ],
    "exampleCode": "let ad = \"  ali veli  \";\nlet temiz = ad.trim().toUpperCase(); // 'ALI VELI'\nlet zar = Math.floor(Math.random() * 6) + 1;"
  },
  "js_10": {
    "title": "DOM Seçicileri & İçerik Yönetimi",
    "readTime": "3 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "JavaScript ile HTML elemanlarını seçmek ve içeriklerini (metin, HTML veya form değerleri) dinamik olarak okuyup değiştirmek için kullanılır.",
    "syntaxRules": [
      "<code>document.getElementById(\"baslik\")</code> : ID'ye göre tekil eleman seçer.",
      "<code>document.querySelector(\".kart\")</code> : CSS seçicisiyle eşleşen ilk elemanı seçer.",
      "<code>document.querySelectorAll(\"p\")</code> : Eşleşen tüm elemanları NodeList (dizi benzeri) olarak seçer.",
      "<code>element.textContent = \"Yeni Metin\";</code> : Güvenli düz metin içeriğini değiştirir.",
      "<code>element.innerHTML = \"&lt;strong&gt;Vurgulu&lt;/strong&gt;\";</code> : HTML etiketleriyle birlikte içerik yazar.",
      "<code>input.value</code> : Form giriş kutusunun güncel değerini okur/yazar."
    ],
    "pitfalls": [
      "⚠️ <code>querySelector</code> kullanırken sınıf için nokta (<code>.kart</code>), ID için kare (<code>#baslik</code>) koymayı unutmayın.",
      "⚠️ Kullanıcıdan gelen kontrolsüz verileri <code>innerHTML</code> ile basmak XSS güvenlik açığı yaratır; güvenli metin için <code>textContent</code> tercih edilmelidir.",
      "⚠️ Eleman bulunamazsa seçici <code>null</code> döner; null bir elemanın özelliğine erişmek hata fırlatır."
    ],
    "exampleCode": "const baslik = document.getElementById(\"ana-baslik\");\nbaslik.textContent = \"JavaScript ile Değiştirildi!\";\n\nconst input = document.querySelector(\"#kullanici-input\");\nconsole.log(input.value);"
  },
  "js_11": {
    "title": "DOM Stil & CSS Sınıfı (classList)",
    "readTime": "2 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Raylar",
    "logic": "Elemanların CSS stillerini doğrudan değiştirmek veya CSS sınıflarını (class) dinamik olarak ekleyip çıkararak temaları yönetmek için kullanılır.",
    "syntaxRules": [
      "<code>element.style.color = \"blue\";</code> : Satır içi stil atar.",
      "<code>element.style.backgroundColor = \"#f8fafc\";</code> : Tireli CSS özellikleri camelCase yazılır.",
      "<code>element.classList.add(\"aktif\")</code> : Elemana yeni CSS sınıfı ekler.",
      "<code>element.classList.remove(\"gizli\")</code> : Elemandan CSS sınıfını siler.",
      "<code>element.classList.toggle(\"karanlik-mod\")</code> : Sınıf varsa siler, yoksa ekler.",
      "<code>element.classList.contains(\"aktif\")</code> : Sınıfın var olup olmadığını (true/false) döner."
    ],
    "pitfalls": [
      "⚠️ JS ile stil verirken <code>background-color</code> yerine camelCase olan <code>backgroundColor</code> yazılmalıdır.",
      "⚠️ <code>classList.add(\"aktif\")</code> yazarken sınıf adının başına nokta (<code>.</code>) koyulmaz!",
      "⚠️ Çok fazla satır içi stil yazmak yerine CSS sınıfları tanımlayıp <code>classList</code> ile yönetmek en iyi uygulamadır (Clean Code)."
    ],
    "exampleCode": "const buton = document.querySelector(\".btn\");\nbuton.classList.add(\"btn-basarili\");\nbuton.classList.toggle(\"aktif\");"
  },
  "js_12": {
    "title": "DOM Olay Dinleyicileri (Event Listeners)",
    "readTime": "3 dk okuma",
    "rewardText": "📡 5G Telekom & Uydu Kulesi",
    "logic": "Kullanıcının sayfadaki tıklama, tuşa basma, form gönderme veya metin yazma gibi etkileşimlerini yakalayıp kod tetiklemek için kullanılır.",
    "syntaxRules": [
      "<code>element.addEventListener(\"click\", (e) => { })</code> : Tıklama olayını dinler.",
      "<code>input.addEventListener(\"input\", (e) => { })</code> : Yazı yazıldıkça anlık tetiklenir.",
      "<code>form.addEventListener(\"submit\", (e) => { e.preventDefault(); })</code> : Sayfanın yenilenmesini engelleyerek formu JS ile yakalar.",
      "<code>e.target</code> : Olayı tetikleyen HTML elemanının kendisini verir."
    ],
    "pitfalls": [
      "⚠️ Form submit olayında <code>e.preventDefault()</code> çağrılmazsa sayfa yenilenir ve tüm JavaScript durumu sıfırlanır.",
      "⚠️ Dinleyici eklerken fonksiyonu çalıştırmayın: <code>addEventListener(\"click\", calistir)</code> doğru, <code>calistir()</code> yanlıştır.",
      "⚠️ Olay adlarında 'on' ön eki kullanılmaz (<code>onclick</code> değil, <code>click</code> yazılır)."
    ],
    "exampleCode": "const btn = document.querySelector(\"#btn-gonder\");\nbtn.addEventListener(\"click\", (e) => {\n  console.log(\"Butona tıklandı!\");\n});"
  },
  "js_13": {
    "title": "Dinamik DOM Eleman Yönetimi (Oluşturma & Silme)",
    "readTime": "3 dk okuma",
    "rewardText": "🚢 Uluslararası Liman & Konteynerler",
    "logic": "Sayfada önceden var olmayan yepyeni HTML etiketlerini JavaScript ile hafızada üretip sayfaya eklemek veya kaldırmak için kullanılır.",
    "syntaxRules": [
      "<code>let yeniLi = document.createElement(\"li\");</code> : Hafızada yeni &lt;li&gt; elemanı üretir.",
      "<code>liste.appendChild(yeniLi);</code> : Elemanı kapsayıcının en sonuna çocuk olarak ekler.",
      "<code>liste.prepend(yeniLi);</code> : Elemanı kapsayıcının en başına ekler.",
      "<code>eleman.remove();</code> : Elemanı sayfadan ve DOM ağacından tamamen siler.",
      "<code>eleman.parentElement</code> : Elemanın bir üst ebeveyn düğümüne erişir."
    ],
    "pitfalls": [
      "⚠️ <code>createElement</code> ile eleman üretildikten sonra <code>appendChild</code> yapılmazsa sayfada görünmez.",
      "⚠️ Silme işlemi için <code>eleman.remove()</code> modern ve doğrudan yöntemdir.",
      "⚠️ Döngü içinde binlerce kez DOM'a tek tek eleman eklemek performansı düşürür."
    ],
    "exampleCode": "const liste = document.querySelector(\"#gorev-listesi\");\nconst li = document.createElement(\"li\");\nli.textContent = \"Yeni Görev Eklendi\";\nli.classList.add(\"gorev-item\");\nliste.appendChild(li);"
  },
  "js_14": {
    "title": "Web Storage & Kapsamlı Proje",
    "readTime": "3 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Roket Üssü",
    "logic": "Verileri kullanıcının tarayıcısında kalıcı olarak saklamak için LocalStorage ve JSON serileştirme mimarisi kullanılır.",
    "syntaxRules": [
      "<code>localStorage.setItem(\"anahtar\", \"deger\")</code> : Veriyi tarayıcı hafızasına kaydeder.",
      "<code>localStorage.getItem(\"anahtar\")</code> : Kayıtlı veriyi okur (Yoksa null döner).",
      "<code>localStorage.removeItem(\"anahtar\") / .clear()</code> : Veriyi siler veya hafızayı temizler.",
      "<code>JSON.stringify(diziObje)</code> : Dizi veya nesneyi metne (String) çevirir.",
      "<code>JSON.parse(metin)</code> : Metni tekrar orijinal dizi/nesne yapısına dönüştürür."
    ],
    "pitfalls": [
      "⚠️ LocalStorage yalnızca <code>string</code> metin depolar; dizi ve objeleri kaydetmeden önce mutlaka <code>JSON.stringify()</code> ile metne çevirmelisiniz.",
      "⚠️ Okurken de <code>JSON.parse()</code> ile tekrar diziye çevirmeyi unutmayın.",
      "⚠️ LocalStorage'da şifre, kredi kartı gibi hassas veriler asla tutulmamalıdır."
    ],
    "exampleCode": "const gorevler = [\"Kod Yaz\", \"Test Et\"];\nlocalStorage.setItem(\"gorevler\", JSON.stringify(gorevler));\n\nconst kayitli = JSON.parse(localStorage.getItem(\"gorevler\")) || [];"
  }
};

const JS_CHALLENGES = {
  js_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: KONSOL ÇIKTISI (CONSOLE.LOG)",
      title: "1. Soru: Konsola Mesaj Yazdırma",
      prompt: "<code>console.log()</code> fonksiyonunu kullanarak ekrana <code>\"Merhaba JavaScript\"</code> yazdırabilir misin?",
      presetCode: "// Konsola Merhaba JavaScript yazdır:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["console.log(\"Merhaba JavaScript\");", "console.log(", "\");"],
      hint: "console.log(\"Merhaba JavaScript\");",
      solution: "console.log(\"Merhaba JavaScript\");",
      validator: (code) => {
        const clean = code.trim();
        if (/console\.log\s*\(\s*['"]Merhaba JavaScript['"]\s*\)\s*;?/i.test(clean)) return { ok: true, msg: "Tebrikler! Konsol çıktısı doğru üretildi. ✓" };
        return { ok: false, msg: "Hata: 'console.log(\"Merhaba JavaScript\");' kodunu yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: LET İLE DEĞİŞKEN TANIMLAMA",
      title: "2. Soru: let ile Değişken Tanımlama",
      prompt: "<code>let</code> anahtar kelimesiyle <code>yas</code> adında bir değişken oluşturup değerini <code>22</code> yapabilir misin?",
      presetCode: "// yas değişkenini let ile tanımla:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let yas = 22;", "let", "yas", "=", "22;"],
      hint: "let yas = 22;",
      solution: "let yas = 22;",
      validator: (code) => {
        const clean = code.trim();
        if (/let\s+yas\s*=\s*22\s*;?/.test(clean)) return { ok: true, msg: "Harika! let ile yas değişkeni tanımlandı. ✓" };
        return { ok: false, msg: "Hata: 'let yas = 22;' şeklinde tanımlayın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: CONST İLE SABİT TANIMLAMA",
      title: "3. Soru: const ile Sabit Tanımlama",
      prompt: "<code>const</code> ile <code>sehir</code> adında bir sabit oluşturup değerine <code>\"İstanbul\"</code> atayabilir misin?",
      presetCode: "// sehir sabitini const ile tanımla:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["const sehir = \"İstanbul\";", "const", "sehir", "=", "\"İstanbul\";"],
      hint: "const sehir = \"İstanbul\";",
      solution: "const sehir = \"İstanbul\";",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s+sehir\s*=\s*['"]İstanbul['"]\s*;?/.test(clean)) return { ok: true, msg: "Mükemmel! const ile sabit değer atandı. ✓" };
        return { ok: false, msg: "Hata: 'const sehir = \"İstanbul\";' şeklinde yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: DEĞİŞKEN DEĞERİNİ GÜNCELLEME",
      title: "4. Soru: Değişken Değerini Güncelleme",
      prompt: "Tanımlanmış olan <code>puan</code> değişkeninin değerini <code>100</code> olarak güncelleyebilir misin?",
      presetCode: "let puan = 50;\n// puan değerini 100 yap:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["puan = 100;", "puan", "=", "100;"],
      hint: "puan = 100;",
      solution: "let puan = 50;\npuan = 100;",
      validator: (code) => {
        const clean = code.trim();
        if (/puan\s*=\s*100\s*;?/.test(clean)) return { ok: true, msg: "Tebrikler! Değişken değeri başarıyla güncellendi. ✓" };
        return { ok: false, msg: "Hata: 'puan = 100;' şeklinde atama yapın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: BİRDEN FAZLA DEĞİŞKEN VE ÇIKTI",
      title: "5. Soru: İki Değişkeni Birlikte Yazdırma",
      prompt: "<code>isim</code> (\"Ali\") ve <code>puan</code> (90) değişkenlerini tanımlayıp <code>console.log(isim, puan)</code> ile yazdırabilir misin?",
      presetCode: "// isim ve puan değişkenlerini tanımla ve yazdır:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let isim = \"Ali\";", "let puan = 90;", "console.log(isim, puan);"],
      hint: "let isim = \"Ali\";\nlet puan = 90;\nconsole.log(isim, puan);",
      solution: "let isim = \"Ali\";\nlet puan = 90;\nconsole.log(isim, puan);",
      validator: (code) => {
        const clean = code.trim();
        const hasIsim = /(?:let|const|var)\s+isim\s*=\s*['"]Ali['"]/i.test(clean);
        const hasPuan = /(?:let|const|var)\s+puan\s*=\s*90/i.test(clean);
        const hasPrint = /console\.log\s*\(\s*isim\s*,\s*puan\s*\)/i.test(clean);
        if (hasIsim && hasPuan && hasPrint) return { ok: true, msg: "Harika! Değişkenler konsola basıldı. 1. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'let isim = \"Ali\"; let puan = 90; console.log(isim, puan);' yazın." };
      }
    }
  ],

  js_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: TYPEOF İLE TİP SORGULAMA",
      title: "1. Soru: Veri Tipini Öğrenme (typeof)",
      prompt: "<code>typeof \"Kodlama\"</code> ifadesini <code>console.log()</code> ile ekrana yazdırabilir misin?",
      presetCode: "// typeof sonucunu yazdır:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["console.log(typeof \"Kodlama\");", "typeof \"Kodlama\""],
      hint: "console.log(typeof \"Kodlama\");",
      solution: "console.log(typeof \"Kodlama\");",
      validator: (code) => {
        const clean = code.trim();
        if (/console\.log\s*\(\s*typeof\s+['"]Kodlama['"]\s*\)\s*;?/i.test(clean)) return { ok: true, msg: "Tebrikler! typeof başarıyla sorgulandı. ✓" };
        return { ok: false, msg: "Hata: 'console.log(typeof \"Kodlama\");' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: TÜR DÖNÜŞÜMÜ (NUMBER)",
      title: "2. Soru: Metni Sayıya Çevirme (Number)",
      prompt: "<code>\"42\"</code> metnini <code>Number(\"42\")</code> fonksiyonuyla sayıya dönüştürüp <code>sayi</code> değişkenine atayabilir misin?",
      presetCode: "// Metni sayıya çevir:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let sayi = Number(\"42\");", "Number(\"42\")"],
      hint: "let sayi = Number(\"42\");",
      solution: "let sayi = Number(\"42\");",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+sayi\s*=\s*Number\s*\(\s*['"]42['"]\s*\)\s*;?/.test(clean)) return { ok: true, msg: "Harika! Number() ile tür dönüşümü yapıldı. ✓" };
        return { ok: false, msg: "Hata: 'let sayi = Number(\"42\");' şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: KATI EŞİTLİK (===)",
      title: "3. Soru: Katı Eşitlik Kontrolü (===)",
      prompt: "<code>5 === 5</code> katı eşitlik sonucunu <code>esitMi</code> değişkenine atayabilir misin?",
      presetCode: "// 5 === 5 sonucunu ata:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let esitMi = 5 === 5;", "5 === 5"],
      hint: "let esitMi = 5 === 5;",
      solution: "let esitMi = 5 === 5;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+esitMi\s*=\s*5\s*===\s*5\s*;?/.test(clean)) return { ok: true, msg: "Mükemmel! Katı eşitlik (===) doğru kullanıldı. ✓" };
        return { ok: false, msg: "Hata: 'let esitMi = 5 === 5;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: MANTIKSAL VE (&&)",
      title: "4. Soru: Mantıksal VE Operatörü (&&)",
      prompt: "<code>yas >= 18 && ehliyetVar === true</code> mantıksal ifadesini <code>surebilirMi</code> değişkenine atayabilir misin?",
      presetCode: "let yas = 20;\nlet ehliyetVar = true;\n// surebilirMi değişkenini tanımla:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let surebilirMi = yas >= 18 && ehliyetVar === true;", "&&"],
      hint: "let surebilirMi = yas >= 18 && ehliyetVar === true;",
      solution: "let yas = 20;\nlet ehliyetVar = true;\nlet surebilirMi = yas >= 18 && ehliyetVar === true;",
      validator: (code) => {
        const clean = code.trim();
        if (/surebilirMi\s*=\s*yas\s*>=\s*18\s*&&\s*(?:ehliyetVar\s*===\s*true|ehliyetVar)/i.test(clean)) return { ok: true, msg: "Tebrikler! Mantıksal VE (&&) uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'let surebilirMi = yas >= 18 && ehliyetVar === true;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: MOD (KALAN) HESAPLAMA",
      title: "5. Soru: Kalanı Bulma (%)",
      prompt: "<code>17 % 5</code> işleminin sonucunu <code>kalan</code> değişkenine atayabilir misin?",
      presetCode: "// 17'nin 5'e bölümünden kalanı bul:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let kalan = 17 % 5;", "17 % 5"],
      hint: "let kalan = 17 % 5;",
      solution: "let kalan = 17 % 5;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+kalan\s*=\s*17\s*%\s*5\s*;?/.test(clean)) return { ok: true, msg: "Harika! % Mod operatörü başarıyla hesaplandı. 2. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'let kalan = 17 % 5;' şeklinde yazın." };
      }
    }
  ],

  js_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: IF KOŞULU",
      title: "1. Soru: if Bloğu ile Pozitif Sayı Kontrolü",
      prompt: "Eğer <code>sayi > 0</code> ise konsola <code>\"Pozitif\"</code> yazdıran bir <code>if</code> bloğu kurabilir misin?",
      presetCode: "let sayi = 10;\n// if kontrolünü yaz:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["if (sayi > 0) {", "console.log(\"Pozitif\");", "}"],
      hint: "if (sayi > 0) {\n  console.log(\"Pozitif\");\n}",
      solution: "let sayi = 10;\nif (sayi > 0) {\n  console.log(\"Pozitif\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*sayi\s*>\s*0\s*\)\s*\{[\s\S]*console\.log\s*\(\s*['"]Pozitif['"]\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! if koşulu doğru yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: if (sayi > 0) { console.log(\"Pozitif\"); } şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: IF / ELSE YAPISI",
      title: "2. Soru: if / else ile Yaş Kontrolü",
      prompt: "<code>yas >= 18</code> ise <code>\"Reşit\"</code>, değilse <code>\"Reşit Değil\"</code> yazdıran if/else bloğunu yazabilir misin?",
      presetCode: "let yas = 16;\n// if / else bloğu kur:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["if (yas >= 18) {", "console.log(\"Reşit\");", "} else {", "console.log(\"Reşit Değil\");", "}"],
      hint: "if (yas >= 18) {\n  console.log(\"Reşit\");\n} else {\n  console.log(\"Reşit Değil\");\n}",
      solution: "let yas = 16;\nif (yas >= 18) {\n  console.log(\"Reşit\");\n} else {\n  console.log(\"Reşit Değil\");\n}",
      validator: (code) => {
        const clean = code.trim();
        const hasIf = /if\s*\(\s*yas\s*>=\s*18\s*\)\s*\{[\s\S]*console\.log\s*\(\s*['"]Reşit['"]\s*\)/i.test(clean);
        const hasElse = /else\s*\{[\s\S]*console\.log\s*\(\s*['"]Reşit Değil['"]\s*\)/i.test(clean);
        if (hasIf && hasElse) return { ok: true, msg: "Harika! if-else yapısı doğru çalıştı. ✓" };
        return { ok: false, msg: "Hata: if (yas >= 18) { ... } else { ... } yapısını kurun." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: ELSE IF SIRALAMASI",
      title: "3. Soru: Çoklu Koşul (else if)",
      prompt: "<code>notu >= 85</code> ise <code>\"Pekiyi\"</code>, <code>notu >= 50</code> ise <code>\"Geçti\"</code> yazdıran <code>else if</code> kuralını ekleyebilir misin?",
      presetCode: "let notu = 75;\nif (notu >= 85) {\n  console.log(\"Pekiyi\");\n} else if (notu >= 50) {\n  // Geçti yazdır:\n}",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["console.log(\"Geçti\");", "\"Geçti\""],
      hint: "if (notu >= 85) {\n  console.log(\"Pekiyi\");\n} else if (notu >= 50) {\n  console.log(\"Geçti\");\n}",
      solution: "let notu = 75;\nif (notu >= 85) {\n  console.log(\"Pekiyi\");\n} else if (notu >= 50) {\n  console.log(\"Geçti\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/else\s+if\s*\(\s*notu\s*>=\s*50\s*\)\s*\{[\s\S]*console\.log\s*\(\s*['"]Geçti['"]\s*\)/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! else if adımı tamamlandı. ✓" };
        }
        return { ok: false, msg: "Hata: else if içine console.log(\"Geçti\"); yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: TERNARY OPERATÖRÜ (? :)",
      title: "4. Soru: Tek Satırda Ternary Karar",
      prompt: "<code>puan >= 50 ? \"Başarılı\" : \"Başarısız\"</code> ternary ifadesini <code>sonuc</code> değişkenine atayabilir misin?",
      presetCode: "let puan = 60;\n// sonuc değişkenine ternary ile ata:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let sonuc = puan >= 50 ? \"Başarılı\" : \"Başarısız\";", "? \"Başarılı\" : \"Başarısız\""],
      hint: "let sonuc = puan >= 50 ? \"Başarılı\" : \"Başarısız\";",
      solution: "let puan = 60;\nlet sonuc = puan >= 50 ? \"Başarılı\" : \"Başarısız\";",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+sonuc\s*=\s*puan\s*>=\s*50\s*\?\s*['"]Başarılı['"]\s*:\s*['"]Başarısız['"]\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Ternary operatörü tek satırda çözüldü. ✓" };
        }
        return { ok: false, msg: "Hata: 'let sonuc = puan >= 50 ? \"Başarılı\" : \"Başarısız\";' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: SWITCH - CASE YAPISI",
      title: "5. Soru: Switch Durum Kontrolü",
      prompt: "<code>switch(gun)</code> içinde <code>case 1: console.log(\"Pazartesi\"); break;</code> durumunu tamamlayabilir misin?",
      presetCode: "let gun = 1;\nswitch (gun) {\n  // case 1 durumunu yaz:\n}",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["case 1:\n  console.log(\"Pazartesi\");\n  break;"],
      hint: "switch (gun) {\n  case 1:\n    console.log(\"Pazartesi\");\n    break;\n}",
      solution: "let gun = 1;\nswitch (gun) {\n  case 1:\n    console.log(\"Pazartesi\");\n    break;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/case\s+1\s*:[\s\S]*console\.log\s*\(\s*['"]Pazartesi['"]\s*\)\s*;?[\s\S]*break\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! switch-case yapısı başarıyla kuruldu. 3. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'case 1: console.log(\"Pazartesi\"); break;' yazın." };
      }
    }
  ],

  js_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: FOR DÖNGÜSÜ",
      title: "1. Soru: 1'den 5'e Kadar Sayma",
      prompt: "<code>for (let i = 1; i <= 5; i++)</code> döngüsüyle her adımda <code>i</code> sayısını <code>console.log(i)</code> ile yazdırabilir misin?",
      presetCode: "// 1'den 5'e for döngüsü kur:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["for (let i = 1; i <= 5; i++) {", "console.log(i);", "}"],
      hint: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
      solution: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/for\s*\(\s*let\s+i\s*=\s*1\s*;\s*i\s*<=\s*5\s*;\s*i\+\+\s*\)\s*\{[\s\S]*console\.log\s*\(\s*i\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! for döngüsü doğru çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'for (let i = 1; i <= 5; i++) { console.log(i); }' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: WHILE DÖNGÜSÜ",
      title: "2. Soru: while ile Sayaç Döngüsü",
      prompt: "<code>sayac < 3</code> olduğu sürece çalışan ve her adımda <code>sayac++</code> artıran bir while döngüsü yazabilir misin?",
      presetCode: "let sayac = 0;\n// while döngüsünü tamamla:\nwhile (sayac < 3) {\n  \n}",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["console.log(sayac);", "sayac++;"],
      hint: "while (sayac < 3) {\n  console.log(sayac);\n  sayac++;\n}",
      solution: "let sayac = 0;\nwhile (sayac < 3) {\n  console.log(sayac);\n  sayac++;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/while\s*\(\s*sayac\s*<\s*3\s*\)\s*\{[\s\S]*sayac\+\+[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! while döngüsü ve sayaç artırımı doğru. ✓" };
        }
        return { ok: false, msg: "Hata: while içinde sayacı artırmak için 'sayac++;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: BREAK İLE DÖNGÜDEN ÇIKMA",
      title: "3. Soru: break ile Döngüyü Kırma",
      prompt: "Döngü içinde <code>if (i === 3) break;</code> kontrolünü ekleyerek döngüyü 3'e ulaştığında sonlandırabilir misin?",
      presetCode: "for (let i = 1; i <= 10; i++) {\n  // i === 3 ise break yap:\n  \n  console.log(i);\n}",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["if (i === 3) break;", "break;"],
      hint: "if (i === 3) break;",
      solution: "for (let i = 1; i <= 10; i++) {\n  if (i === 3) break;\n  console.log(i);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*i\s*===\s*3\s*\)\s*break\s*;?/i.test(clean)) return { ok: true, msg: "Mükemmel! break ile döngüden çıkış sağlandı. ✓" };
        return { ok: false, msg: "Hata: 'if (i === 3) break;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: CONTINUE İLE ADIMI ATLAMA",
      title: "4. Soru: continue ile Adımı Atlama",
      prompt: "Döngüde <code>if (i === 2) continue;</code> yazarak 2 sayısının yazdırılmadan atlanmasını sağlayabilir misin?",
      presetCode: "for (let i = 1; i <= 4; i++) {\n  // i === 2 ise continue yap:\n  \n  console.log(i);\n}",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["if (i === 2) continue;", "continue;"],
      hint: "if (i === 2) continue;",
      solution: "for (let i = 1; i <= 4; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*i\s*===\s*2\s*\)\s*continue\s*;?/i.test(clean)) return { ok: true, msg: "Tebrikler! continue ile adım başarıyla atlandı. ✓" };
        return { ok: false, msg: "Hata: 'if (i === 2) continue;' kuralını ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: DÖNGÜ İLE TOPLAM HESAPLAMA",
      title: "5. Soru: 1'den 5'e Kadar Sayıları Toplama",
      prompt: "<code>toplam</code> değişkenine döngü boyunca <code>toplam += i</code> ekleyerek toplamı hesaplayabilir misin?",
      presetCode: "let toplam = 0;\nfor (let i = 1; i <= 5; i++) {\n  // toplamı güncelle:\n  \n}\nconsole.log(toplam);",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["toplam += i;", "toplam = toplam + i;"],
      hint: "toplam += i;",
      solution: "let toplam = 0;\nfor (let i = 1; i <= 5; i++) {\n  toplam += i;\n}\nconsole.log(toplam);",
      validator: (code) => {
        const clean = code.trim();
        if (/toplam\s*(\+=|\=)\s*(toplam\s*\+\s*)?i\s*;?/i.test(clean)) return { ok: true, msg: "Harika! Döngü kümülatif toplamı hesapladı. 4. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: Döngü içine 'toplam += i;' yazın." };
      }
    }
  ],

  js_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: FONKSİYON TANIMLAMA & ÇAĞIRMA",
      title: "1. Soru: Basit Fonksiyon Tanımlama",
      prompt: "Konsola <code>\"Merhaba Dünya\"</code> yazdıran <code>selamla</code> adında parametresiz bir fonksiyon tanımlayabilir misin?",
      presetCode: "// selamla fonksiyonunu tanımla:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["function selamla() {", "console.log(\"Merhaba Dünya\");", "}"],
      hint: "function selamla() {\n  console.log(\"Merhaba Dünya\");\n}",
      solution: "function selamla() {\n  console.log(\"Merhaba Dünya\");\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+selamla\s*\(\s*\)\s*\{[\s\S]*console\.log\s*\(\s*['"]Merhaba Dünya['"]\s*\)\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Fonksiyon başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'function selamla() { console.log(\"Merhaba Dünya\"); }' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: PARAMETRE VE RETURN",
      title: "2. Soru: Değer Döndüren Toplama Fonksiyonu",
      prompt: "İki parametre (<code>a</code>, <code>b</code>) alıp toplamlarını <code>return a + b;</code> ile dönen <code>topla</code> fonksiyonunu yazabilir misin?",
      presetCode: "// topla fonksiyonunu tanımla:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["function topla(a, b) {", "return a + b;", "}"],
      hint: "function topla(a, b) {\n  return a + b;\n}",
      solution: "function topla(a, b) {\n  return a + b;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+topla\s*\(\s*a\s*,\s*b\s*\)\s*\{[\s\S]*return\s+a\s*\+\s*b\s*;?[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! Parametreli topla fonksiyonu doğru yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'function topla(a, b) { return a + b; }' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: ARROW FUNCTION (OK FONKSİYONU)",
      title: "3. Soru: ES6 Arrow Function Sözdizimi",
      prompt: "Sayının karesini dönen <code>const kareAl = (x) => x * x;</code> arrow fonksiyonunu tanımlayabilir misin?",
      presetCode: "// kareAl arrow fonksiyonunu yaz:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["const kareAl = (x) => x * x;", "const kareAl = x => x * x;"],
      hint: "const kareAl = (x) => x * x;",
      solution: "const kareAl = (x) => x * x;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:const|let|var)\s+kareAl\s*=\s*\(?\s*x\s*\)?\s*=>\s*(?:\{[\s\S]*return\s+x\s*\*\s*x\s*;?[\s\S]*\}|x\s*\*\s*x)/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Arrow function doğru yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'const kareAl = (x) => x * x;' şeklinde tanımlayın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: VARSAYILAN PARAMETRE (DEFAULT PARAMETER)",
      title: "4. Soru: Varsayılan Parametre Atama",
      prompt: "<code>isim</code> parametresine varsayılan olarak <code>\"Misafir\"</code> atayan <code>function hosgeldin(isim = \"Misafir\") { return `Merhaba ${isim}`; }</code> fonksiyonunu yazabilir misin?",
      presetCode: "// Varsayılan parametreli fonksiyonu yaz:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["function hosgeldin(isim = \"Misafir\") {", "return `Merhaba ${isim}`;", "}"],
      hint: "function hosgeldin(isim = \"Misafir\") {\n  return `Merhaba ${isim}`;\n}",
      solution: "function hosgeldin(isim = \"Misafir\") {\n  return `Merhaba ${isim}`;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+hosgeldin\s*\(\s*isim\s*=\s*['"]Misafir['"]\s*\)\s*\{[\s\S]*return[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Varsayılan parametre doğru uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'function hosgeldin(isim = \"Misafir\") { return `Merhaba ${isim}`; }' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: FONKSİYON SONUCUNU DEĞİŞKENE ATAMA",
      title: "5. Soru: Fonksiyon Çağrısı ve Sonuç",
      prompt: "<code>topla(15, 25)</code> fonksiyonunu çağırıp dönen sonucu <code>toplamSonuc</code> değişkenine kaydedebilir misin?",
      presetCode: "function topla(a, b) {\n  return a + b;\n}\n// topla(15, 25) sonucunu toplamSonuc değişkenine ata:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let toplamSonuc = topla(15, 25);", "topla(15, 25)"],
      hint: "let toplamSonuc = topla(15, 25);",
      solution: "function topla(a, b) {\n  return a + b;\n}\nlet toplamSonuc = topla(15, 25);",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+toplamSonuc\s*=\s*topla\s*\(\s*15\s*,\s*25\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! Fonksiyon sonucu değişkene kaydedildi. 5. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'let toplamSonuc = topla(15, 25);' yazın." };
      }
    }
  ],

  js_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: DİZİ OLUŞTURMA & İNDEKSLE ERİŞİM",
      title: "1. Soru: Dizi Oluşturma ve İlk Eleman",
      prompt: "<code>[\"Elma\", \"Muz\", \"Çilek\"]</code> elemanlarını içeren <code>meyveler</code> dizisini oluşturup ilk elemanını (<code>meyveler[0]</code>) konsola yazdırabilir misin?",
      presetCode: "// meyveler dizisini tanımla ve ilk elemanı yazdır:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let meyveler = [\"Elma\", \"Muz\", \"Çilek\"];", "console.log(meyveler[0]);"],
      hint: "let meyveler = [\"Elma\", \"Muz\", \"Çilek\"];\nconsole.log(meyveler[0]);",
      solution: "let meyveler = [\"Elma\", \"Muz\", \"Çilek\"];\nconsole.log(meyveler[0]);",
      validator: (code) => {
        const clean = code.trim();
        const hasArray = /meyveler\s*=\s*\[\s*['"]Elma['"]\s*,\s*['"]Muz['"]\s*,\s*['"]Çilek['"]\s*\]/i.test(clean);
        const hasPrint = /console\.log\s*\(\s*meyveler\[0\]\s*\)/i.test(clean);
        if (hasArray && hasPrint) return { ok: true, msg: "Tebrikler! Dizi ve 0. indeks başarıyla yazdırıldı. ✓" };
        return { ok: false, msg: "Hata: 'let meyveler = [\"Elma\", \"Muz\", \"Çilek\"]; console.log(meyveler[0]);' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: PUSH İLE ELEMAN EKLEME",
      title: "2. Soru: Sona Eleman Ekleme (.push)",
      prompt: "<code>dizi.push(\"Mavi\")</code> metodunu kullanarak diziye <code>\"Mavi\"</code> elemanını ekleyebilir misin?",
      presetCode: "let renkler = [\"Kırmızı\", \"Yeşil\"];\n// Sona Mavi rengini ekle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["renkler.push(\"Mavi\");", "renkler.push(", "\");"],
      hint: "renkler.push(\"Mavi\");",
      solution: "let renkler = [\"Kırmızı\", \"Yeşil\"];\nrenkler.push(\"Mavi\");",
      validator: (code) => {
        const clean = code.trim();
        if (/renkler\.push\s*\(\s*['"]Mavi['"]\s*\)\s*;?/i.test(clean)) return { ok: true, msg: "Harika! push() metodu başarıyla uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'renkler.push(\"Mavi\");' kodunu yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: POP İLE SON ELEMANI ÇIKARMA",
      title: "3. Soru: Son Elemanı Çıkarma (.pop)",
      prompt: "<code>sayilar.pop()</code> metodunu çağırarak dizinin sonundaki elemanı çıkarabilir misin?",
      presetCode: "let sayilar = [10, 20, 30];\n// Son elemanı çıkar:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["sayilar.pop();", "pop()"],
      hint: "sayilar.pop();",
      solution: "let sayilar = [10, 20, 30];\nsayilar.pop();",
      validator: (code) => {
        const clean = code.trim();
        if (/sayilar\.pop\s*\(\s*\)\s*;?/.test(clean)) return { ok: true, msg: "Mükemmel! pop() metodu ile son eleman silindi. ✓" };
        return { ok: false, msg: "Hata: 'sayilar.pop();' kodunu yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: INCLUDES İLE ELEMAN ARAMA",
      title: "4. Soru: Eleman Kontrolü (.includes)",
      prompt: "<code>diller.includes(\"JavaScript\")</code> sonucunu <code>varMi</code> değişkenine atayabilir misin?",
      presetCode: "let diller = [\"HTML\", \"CSS\", \"JavaScript\"];\n// JavaScript var mı sorgula:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let varMi = diller.includes(\"JavaScript\");", "diller.includes(\"JavaScript\")"],
      hint: "let varMi = diller.includes(\"JavaScript\");",
      solution: "let diller = [\"HTML\", \"CSS\", \"JavaScript\"];\nlet varMi = diller.includes(\"JavaScript\");",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+varMi\s*=\s*diller\.includes\s*\(\s*['"]JavaScript['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! includes() doğru kontrol edildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'let varMi = diller.includes(\"JavaScript\");' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: DİZİ UZUNLUĞU (.LENGTH)",
      title: "5. Soru: Dizi Eleman Sayısı (.length)",
      prompt: "<code>ogrenciler.length</code> değerini <code>toplamOgrenci</code> değişkenine atayabilir misin?",
      presetCode: "let ogrenciler = [\"Ali\", \"Ayşe\", \"Mehmet\", \"Zeynep\"];\n// Eleman sayısını ata:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let toplamOgrenci = ogrenciler.length;", "ogrenciler.length"],
      hint: "let toplamOgrenci = ogrenciler.length;",
      solution: "let ogrenciler = [\"Ali\", \"Ayşe\", \"Mehmet\", \"Zeynep\"];\nlet toplamOgrenci = ogrenciler.length;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+toplamOgrenci\s*=\s*ogrenciler\.length\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! .length ile dizi uzunluğu alındı. 6. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'let toplamOgrenci = ogrenciler.length;' yazın." };
      }
    }
  ],

  js_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: FOREACH DÖNGÜSÜ",
      title: "1. Soru: forEach ile Elemanları Yazdırma",
      prompt: "<code>sayilar.forEach(x => console.log(x))</code> ile her elemanı konsola yazdırabilir misin?",
      presetCode: "let sayilar = [10, 20, 30];\n// forEach ile yazdır:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["sayilar.forEach(x => console.log(x));", "forEach"],
      hint: "sayilar.forEach(x => console.log(x));",
      solution: "let sayilar = [10, 20, 30];\nsayilar.forEach(x => console.log(x));",
      validator: (code) => {
        const clean = code.trim();
        if (/sayilar\.forEach\s*\(\s*\(?\s*([a-zA-Z0-9_]+)\s*\)?\s*=>\s*console\.log\s*\(\s*\1\s*\)\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! forEach başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'sayilar.forEach(x => console.log(x));' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: MAP İLE DÖNÜŞTÜRME",
      title: "2. Soru: map ile 2 Katına Çıkarma",
      prompt: "<code>sayilar.map(x => x * 2)</code> ile tüm elemanları 2 ile çarpıp <code>ikiKati</code> değişkenine kaydedebilir misin?",
      presetCode: "let sayilar = [1, 2, 3, 4];\n// map ile 2 katını al:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let ikiKati = sayilar.map(x => x * 2);", "sayilar.map(x => x * 2)"],
      hint: "let ikiKati = sayilar.map(x => x * 2);",
      solution: "let sayilar = [1, 2, 3, 4];\nlet ikiKati = sayilar.map(x => x * 2);",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+ikiKati\s*=\s*sayilar\.map\s*\(\s*\(?\s*([a-zA-Z0-9_]+)\s*\)?\s*=>\s*\1\s*\*\s*2\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! .map() metodu yeni dönüştürülmüş diziyi üretti. ✓" };
        }
        return { ok: false, msg: "Hata: 'let ikiKati = sayilar.map(x => x * 2);' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: FILTER İLE SÜZME",
      title: "3. Soru: filter ile Çift Sayıları Seçme",
      prompt: "<code>sayilar.filter(x => x % 2 === 0)</code> kullanarak sadece çift sayıları <code>ciftler</code> dizisine süzer misin?",
      presetCode: "let sayilar = [1, 2, 3, 4, 5, 6];\n// filter ile çiftleri al:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let ciftler = sayilar.filter(x => x % 2 === 0);", "filter"],
      hint: "let ciftler = sayilar.filter(x => x % 2 === 0);",
      solution: "let sayilar = [1, 2, 3, 4, 5, 6];\nlet ciftler = sayilar.filter(x => x % 2 === 0);",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+ciftler\s*=\s*sayilar\.filter\s*\(\s*\(?\s*([a-zA-Z0-9_]+)\s*\)?\s*=>\s*\1\s*%\s*2\s*===\s*0\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! .filter() ile çift sayılar süzüldü. ✓" };
        }
        return { ok: false, msg: "Hata: 'let ciftler = sayilar.filter(x => x % 2 === 0);' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: FIND İLE İLK ELEMANI BULMA",
      title: "4. Soru: find ile Eleman Arama",
      prompt: "<code>yaslar.find(x => x >= 18)</code> ile 18 ve üzeri olan ilk elemanı <code>yetiskin</code> değişkenine kaydedebilir misin?",
      presetCode: "let yaslar = [12, 15, 19, 22, 14];\n// İlk reşit kişiyi bul:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let yetiskin = yaslar.find(x => x >= 18);", "find"],
      hint: "let yetiskin = yaslar.find(x => x >= 18);",
      solution: "let yaslar = [12, 15, 19, 22, 14];\nlet yetiskin = yaslar.find(x => x >= 18);",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+yetiskin\s*=\s*yaslar\.find\s*\(\s*\(?\s*([a-zA-Z0-9_]+)\s*\)?\s*=>\s*\1\s*>=\s*18\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! .find() ile ilk eşleşen eleman bulundu. ✓" };
        }
        return { ok: false, msg: "Hata: 'let yetiskin = yaslar.find(x => x >= 18);' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: REDUCE İLE KÜMÜLATİF TOPLAM",
      title: "5. Soru: reduce ile Dizi Toplamı",
      prompt: "<code>sayilar.reduce((acc, curr) => acc + curr, 0)</code> ile dizi toplamını <code>toplam</code> değişkenine atayabilir misin?",
      presetCode: "let sayilar = [10, 20, 30, 40];\n// reduce ile toplamı hesapla:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let toplam = sayilar.reduce((acc, curr) => acc + curr, 0);", "reduce"],
      hint: "let toplam = sayilar.reduce((acc, curr) => acc + curr, 0);",
      solution: "let sayilar = [10, 20, 30, 40];\nlet toplam = sayilar.reduce((acc, curr) => acc + curr, 0);",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+toplam\s*=\s*sayilar\.reduce\s*\(\s*\(\s*([a-zA-Z0-9_]+)\s*,\s*([a-zA-Z0-9_]+)\s*\)\s*=>\s*\1\s*\+\s*\2\s*,\s*0\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! .reduce() kümülatif toplamı hesapladı. 7. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'let toplam = sayilar.reduce((acc, curr) => acc + curr, 0);' yazın." };
      }
    }
  ],

  js_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: OBJE (OBJECT) TANIMLAMA",
      title: "1. Soru: Obje Tanımlama & Özellik Erişimi",
      prompt: "<code>{ ad: \"Bengi\", yas: 22 }</code> özelliklerine sahip <code>kullanici</code> objesini oluşturup <code>kullanici.ad</code> değerini konsola yazdırabilir misin?",
      presetCode: "// kullanici objesini oluştur ve adını yazdır:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let kullanici = { ad: \"Bengi\", yas: 22 };", "console.log(kullanici.ad);"],
      hint: "let kullanici = { ad: \"Bengi\", yas: 22 };\nconsole.log(kullanici.ad);",
      solution: "let kullanici = { ad: \"Bengi\", yas: 22 };\nconsole.log(kullanici.ad);",
      validator: (code) => {
        const clean = code.trim();
        const hasObj = /kullanici\s*=\s*\{\s*ad\s*:\s*['"]Bengi['"]\s*,\s*yas\s*:\s*22\s*\}/i.test(clean);
        const hasPrint = /console\.log\s*\(\s*kullanici\.ad\s*\)/i.test(clean);
        if (hasObj && hasPrint) return { ok: true, msg: "Tebrikler! Obje ve özellik erişimi doğru. ✓" };
        return { ok: false, msg: "Hata: 'let kullanici = { ad: \"Bengi\", yas: 22 }; console.log(kullanici.ad);' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: OBJE METODU VE THIS",
      title: "2. Soru: Obje İçinde Metot Tanımlama",
      prompt: "Aşağıdaki arabaya <code>bilgiVer() { return `${this.marka} ${this.model}`; }</code> metodunu ekleyebilir misin?",
      presetCode: "const araba = {\n  marka: \"Toyota\",\n  model: \"Corolla\",\n  // bilgiVer metodunu ekle:\n  \n};",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["bilgiVer() {\n    return `${this.marka} ${this.model}`;\n  }", "this.marka"],
      hint: "bilgiVer() {\n    return `${this.marka} ${this.model}`;\n  }",
      solution: "const araba = {\n  marka: \"Toyota\",\n  model: \"Corolla\",\n  bilgiVer() {\n    return `${this.marka} ${this.model}`;\n  }\n};",
      validator: (code) => {
        const clean = code.trim();
        if (/bilgiVer\s*\(\s*\)\s*\{[\s\S]*return[\s\S]*this\.marka[\s\S]*this\.model[\s\S]*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! Obje metodu ve this anahtarı doğru kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: bilgiVer() metodu içinde return `${this.marka} ${this.model}`; yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: OBJECT DESTRUCTURING (PARÇALAMA)",
      title: "3. Soru: Obje Parçalama (Destructuring)",
      prompt: "<code>const { baslik, yazar } = kitap;</code> sözdizimi ile kitap objesinden <code>baslik</code> ve <code>yazar</code> değişkenlerini çıkarabilir misin?",
      presetCode: "const kitap = { baslik: \"Simyacı\", yazar: \"Paulo Coelho\", sayfa: 184 };\n// Destructuring ile baslik ve yazar'ı çıkar:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["const { baslik, yazar } = kitap;", "{ baslik, yazar }"],
      hint: "const { baslik, yazar } = kitap;",
      solution: "const kitap = { baslik: \"Simyacı\", yazar: \"Paulo Coelho\", sayfa: 184 };\nconst { baslik, yazar } = kitap;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:const|let|var)\s*\{\s*baslik\s*,\s*yazar\s*\}\s*=\s*kitap\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Destructuring ile değişkenler ayrıştırıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'const { baslik, yazar } = kitap;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: OBJECT.KEYS İLE ANAHTARLARI ALMA",
      title: "4. Soru: Obje Anahtarları (Object.keys)",
      prompt: "<code>Object.keys(urun)</code> ile urun objesinin anahtar isimlerini <code>anahtarlar</code> dizisine kaydedebilir misin?",
      presetCode: "const urun = { id: 1, baslik: \"Laptop\", fiyat: 25000 };\n// Anahtarları al:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let anahtarlar = Object.keys(urun);", "Object.keys(urun)"],
      hint: "let anahtarlar = Object.keys(urun);",
      solution: "const urun = { id: 1, baslik: \"Laptop\", fiyat: 25000 };\nlet anahtarlar = Object.keys(urun);",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+anahtarlar\s*=\s*Object\.keys\s*\(\s*urun\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Object.keys() başarıyla alındı. ✓" };
        }
        return { ok: false, msg: "Hata: 'let anahtarlar = Object.keys(urun);' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: SPREAD OPERATÖRÜ İLE BİRLEŞTİRME",
      title: "5. Soru: Obje Kopyalama / Spread ({...obj})",
      prompt: "<code>const guncel = { ...kullanici, rol: \"Admin\" };</code> ile kullanıcıya rol ekleyerek yeni obje üretebilir misin?",
      presetCode: "const kullanici = { ad: \"Deniz\", sehir: \"İzmir\" };\n// Spread ile rol ekle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["const guncel = { ...kullanici, rol: \"Admin\" };", "{ ...kullanici, rol: \"Admin\" }"],
      hint: "const guncel = { ...kullanici, rol: \"Admin\" };",
      solution: "const kullanici = { ad: \"Deniz\", sehir: \"İzmir\" };\nconst guncel = { ...kullanici, rol: \"Admin\" };",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:const|let|var)\s+guncel\s*=\s*\{\s*\.\.\.kullanici\s*,\s*rol\s*:\s*['"]Admin['"]\s*\}\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! Spread operatörü ile obje birleştirildi. 8. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'const guncel = { ...kullanici, rol: \"Admin\" };' yazın." };
      }
    }
  ],

  js_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: TEMPLATE LITERALS",
      title: "1. Soru: Backtick ile String Şablonu",
      prompt: "Backtick (`` ` ``) kullanarak <code>`Merhaba ${ad}, puanın: ${skor}`</code> metnini <code>mesaj</code> değişkenine atayabilir misin?",
      presetCode: "let ad = \"Ece\";\nlet skor = 95;\n// mesaj değişkenini template literal ile oluştur:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let mesaj = `Merhaba ${ad}, puanın: ${skor}`;", "`Merhaba ${ad}, puanın: ${skor}`"],
      hint: "let mesaj = `Merhaba ${ad}, puanın: ${skor}`;",
      solution: "let ad = \"Ece\";\nlet skor = 95;\nlet mesaj = `Merhaba ${ad}, puanın: ${skor}`;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+mesaj\s*=\s*`Merhaba\s+\$\{ad\},\s+puanın:\s+\$\{skor\}`\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Template Literal başarıyla formatlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'let mesaj = `Merhaba ${ad}, puanın: ${skor}`;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: STRING TRIM & TOUPPERCASE",
      title: "2. Soru: Boşluk Temizleme & Büyük Harf",
      prompt: "<code>metin.trim().toUpperCase()</code> zincirini kullanarak sonucu <code>temizMetin</code> değişkenine atayabilir misin?",
      presetCode: "let metin = \"   javascript   \";\n// trim ve toUpperCase uygula:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let temizMetin = metin.trim().toUpperCase();", "metin.trim().toUpperCase()"],
      hint: "let temizMetin = metin.trim().toUpperCase();",
      solution: "let metin = \"   javascript   \";\nlet temizMetin = metin.trim().toUpperCase();",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+temizMetin\s*=\s*metin\.trim\s*\(\s*\)\.toUpperCase\s*\(\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! trim() ve toUpperCase() zincirlendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'let temizMetin = metin.trim().toUpperCase();' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: STRING SPLIT İLE DİZİ YAPMA",
      title: "3. Soru: Metni Bölüp Diziye Çevirme (.split)",
      prompt: "<code>etiketler.split(\",\")</code> ile virgülle ayrılmış metni <code>dizi</code> değişkenine aktarabilir misin?",
      presetCode: "let etiketler = \"html,css,javascript\";\n// split ile virgüllerden böl:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let dizi = etiketler.split(\",\");", "etiketler.split(\",\")"],
      hint: "let dizi = etiketler.split(\",\");",
      solution: "let etiketler = \"html,css,javascript\";\nlet dizi = etiketler.split(\",\");",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+dizi\s*=\s*etiketler\.split\s*\(\s*['"],?['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! .split() ile dizi oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: 'let dizi = etiketler.split(\",\");' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: MATH.FLOOR İLE AŞAĞI YUVARLAMA",
      title: "4. Soru: Sayıyı Aşağı Yuvarlama (Math.floor)",
      prompt: "<code>Math.floor(7.8)</code> sonucunu <code>yuvarlanan</code> değişkenine kaydedebilir misin?",
      presetCode: "// 7.8 sayısını aşağı yuvarla:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let yuvarlanan = Math.floor(7.8);", "Math.floor(7.8)"],
      hint: "let yuvarlanan = Math.floor(7.8);",
      solution: "let yuvarlanan = Math.floor(7.8);",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+yuvarlanan\s*=\s*Math\.floor\s*\(\s*7\.8\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Math.floor() başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'let yuvarlanan = Math.floor(7.8);' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: RASTGELE SAYI ÜRETME",
      title: "5. Soru: 1 ile 10 Arası Rastgele Sayı",
      prompt: "<code>Math.floor(Math.random() * 10) + 1</code> ifadesini <code>rastgele</code> değişkenine atayabilir misin?",
      presetCode: "// 1-10 arası rastgele tam sayı üret:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let rastgele = Math.floor(Math.random() * 10) + 1;", "Math.random()"],
      hint: "let rastgele = Math.floor(Math.random() * 10) + 1;",
      solution: "let rastgele = Math.floor(Math.random() * 10) + 1;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+rastgele\s*=\s*Math\.floor\s*\(\s*Math\.random\s*\(\s*\)\s*\*\s*10\s*\)\s*\+\s*1\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! Rastgele sayı formülü doğru kuruldu. 9. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'let rastgele = Math.floor(Math.random() * 10) + 1;' yazın." };
      }
    }
  ],

  js_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: GETELEMENTBYID SEÇİCİSİ",
      title: "1. Soru: ID ile Eleman Seçme",
      prompt: "<code>document.getElementById(\"ana-baslik\")</code> ile başlık elemanını seçip <code>baslikEl</code> değişkenine atayabilir misin?",
      presetCode: "// ID'si ana-baslik olan elemanı seç:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["const baslikEl = document.getElementById(\"ana-baslik\");", "document.getElementById(\"ana-baslik\")"],
      hint: "const baslikEl = document.getElementById(\"ana-baslik\");",
      solution: "const baslikEl = document.getElementById(\"ana-baslik\");",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+baslikEl\s*=\s*document\.getElementById\s*\(\s*['"]ana-baslik['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! getElementById ile eleman seçildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'const baslikEl = document.getElementById(\"ana-baslik\");' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: QUERYSELECTOR SEÇİCİSİ",
      title: "2. Soru: CSS Sınıfı ile Seçme (querySelector)",
      prompt: "<code>document.querySelector(\".kart-kutusu\")</code> ile sınıfı kart-kutusu olan elemanı seçip <code>kart</code> değişkenine atayabilir misin?",
      presetCode: "// .kart-kutusu sınıfını querySelector ile seç:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["const kart = document.querySelector(\".kart-kutusu\");", "document.querySelector(\".kart-kutusu\")"],
      hint: "const kart = document.querySelector(\".kart-kutusu\");",
      solution: "const kart = document.querySelector(\".kart-kutusu\");",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+kart\s*=\s*document\.querySelector\s*\(\s*['"]\.kart-kutusu['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! querySelector ile sınıf seçildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'const kart = document.querySelector(\".kart-kutusu\");' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: TEXTCONTENT İLE METİN DEĞİŞTİRME",
      title: "3. Soru: textContent ile Metin Güncelleme",
      prompt: "<code>baslik.textContent = \"Yeni Başlık\";</code> atamasıyla başlık metnini güncelleyebilir misin?",
      presetCode: "const baslik = document.getElementById(\"baslik\");\n// Metni Yeni Başlık yap:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["baslik.textContent = \"Yeni Başlık\";", "textContent = \"Yeni Başlık\";"],
      hint: "baslik.textContent = \"Yeni Başlık\";",
      solution: "const baslik = document.getElementById(\"baslik\");\nbaslik.textContent = \"Yeni Başlık\";",
      validator: (code) => {
        const clean = code.trim();
        if (/baslik\.textContent\s*=\s*['"]Yeni Başlık['"]\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! textContent ile içerik değiştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'baslik.textContent = \"Yeni Başlık\";' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: INNERHTML İLE HTML YAZMA",
      title: "4. Soru: innerHTML ile Etiketli İçerik",
      prompt: "<code>kutu.innerHTML = \"&lt;strong&gt;Önemli&lt;/strong&gt;\";</code> kodunu yazarak HTML etiketli içerik ekleyebilir misin?",
      presetCode: "const kutu = document.querySelector(\".kutu\");\n// innerHTML ile <strong>Önemli</strong> ekle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["kutu.innerHTML = \"<strong>Önemli</strong>\";", "innerHTML"],
      hint: "kutu.innerHTML = \"<strong>Önemli</strong>\";",
      solution: "const kutu = document.querySelector(\".kutu\");\nkutu.innerHTML = \"<strong>Önemli</strong>\";",
      validator: (code) => {
        const clean = code.trim();
        if (/kutu\.innerHTML\s*=\s*['"]<strong>Önemli<\/strong>['"]\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! innerHTML ile HTML formatında içerik yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'kutu.innerHTML = \"<strong>Önemli</strong>\";' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: INPUT VALUE DEĞERİNİ OKUMA",
      title: "5. Soru: Form Input Değerini Okuma (.value)",
      prompt: "<code>kullaniciInput.value</code> değerini <code>girilenMetin</code> değişkenine atayabilir misin?",
      presetCode: "const kullaniciInput = document.getElementById(\"ad-input\");\n// Input değerini değişkene aktar:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let girilenMetin = kullaniciInput.value;", "kullaniciInput.value"],
      hint: "let girilenMetin = kullaniciInput.value;",
      solution: "const kullaniciInput = document.getElementById(\"ad-input\");\nlet girilenMetin = kullaniciInput.value;",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+girilenMetin\s*=\s*kullaniciInput\.value\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! input.value başarıyla okundu. 10. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'let girilenMetin = kullaniciInput.value;' yazın." };
      }
    }
  ],

  js_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: ELEMENT.STYLE İLE RENK DEĞİŞTİRME",
      title: "1. Soru: Doğrudan Stil Verme (element.style)",
      prompt: "<code>kutu.style.color = \"red\";</code> kodunu yazarak yazı rengini kırmızı yapabilir misin?",
      presetCode: "const kutu = document.querySelector(\".kutu\");\n// Yazı rengini red yap:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["kutu.style.color = \"red\";", "style.color"],
      hint: "kutu.style.color = \"red\";",
      solution: "const kutu = document.querySelector(\".kutu\");\nkutu.style.color = \"red\";",
      validator: (code) => {
        const clean = code.trim();
        if (/kutu\.style\.color\s*=\s*['"]red['"]\s*;?/i.test(clean)) return { ok: true, msg: "Tebrikler! element.style.color atandı. ✓" };
        return { ok: false, msg: "Hata: 'kutu.style.color = \"red\";' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: CAMELCASE STİL (BACKGROUNDCOLOR)",
      title: "2. Soru: Arka Plan Rengi (backgroundColor)",
      prompt: "<code>kutu.style.backgroundColor = \"yellow\";</code> ile kutunun zemin rengini sarı yapabilir misin?",
      presetCode: "const kutu = document.querySelector(\".kutu\");\n// Arka planı yellow yap:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["kutu.style.backgroundColor = \"yellow\";", "backgroundColor"],
      hint: "kutu.style.backgroundColor = \"yellow\";",
      solution: "const kutu = document.querySelector(\".kutu\");\nkutu.style.backgroundColor = \"yellow\";",
      validator: (code) => {
        const clean = code.trim();
        if (/kutu\.style\.backgroundColor\s*=\s*['"]yellow['"]\s*;?/i.test(clean)) return { ok: true, msg: "Harika! camelCase backgroundColor özelliği uygulandı. ✓" };
        return { ok: false, msg: "Hata: 'kutu.style.backgroundColor = \"yellow\";' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: CLASSLIST.ADD İLE SINIF EKLEME",
      title: "3. Soru: Sınıf Ekleme (classList.add)",
      prompt: "<code>buton.classList.add(\"aktif\");</code> kodunu yazarak butona <code>aktif</code> sınıfını ekleyebilir misin?",
      presetCode: "const buton = document.querySelector(\".btn\");\n// aktif sınıfını ekle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["buton.classList.add(\"aktif\");", "classList.add(\"aktif\")"],
      hint: "buton.classList.add(\"aktif\");",
      solution: "const buton = document.querySelector(\".btn\");\nbuton.classList.add(\"aktif\");",
      validator: (code) => {
        const clean = code.trim();
        if (/buton\.classList\.add\s*\(\s*['"]aktif['"]\s*\)\s*;?/i.test(clean)) return { ok: true, msg: "Mükemmel! classList.add(\"aktif\") çalıştırıldı. ✓" };
        return { ok: false, msg: "Hata: 'buton.classList.add(\"aktif\");' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: CLASSLIST.REMOVE İLE SINIF SİLME",
      title: "4. Soru: Sınıf Çıkarma (classList.remove)",
      prompt: "<code>modal.classList.remove(\"gizli\");</code> kodunu yazarak <code>gizli</code> sınıfını kaldırabilir misin?",
      presetCode: "const modal = document.getElementById(\"modal\");\n// gizli sınıfını kaldır:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["modal.classList.remove(\"gizli\");", "classList.remove(\"gizli\")"],
      hint: "modal.classList.remove(\"gizli\");",
      solution: "const modal = document.getElementById(\"modal\");\nmodal.classList.remove(\"gizli\");",
      validator: (code) => {
        const clean = code.trim();
        if (/modal\.classList\.remove\s*\(\s*['"]gizli['"]\s*\)\s*;?/i.test(clean)) return { ok: true, msg: "Tebrikler! classList.remove(\"gizli\") kaldırıldı. ✓" };
        return { ok: false, msg: "Hata: 'modal.classList.remove(\"gizli\");' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: CLASSLIST.TOGGLE (AÇ / KAPA)",
      title: "5. Soru: Sınıf Aç/Kapa (classList.toggle)",
      prompt: "<code>kart.classList.toggle(\"secili\");</code> metodu ile <code>secili</code> sınıfını toggle yapabilir misin?",
      presetCode: "const kart = document.querySelector(\".kart\");\n// secili sınıfını toggle yap:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["kart.classList.toggle(\"secili\");", "classList.toggle(\"secili\")"],
      hint: "kart.classList.toggle(\"secili\");",
      solution: "const kart = document.querySelector(\".kart\");\nkart.classList.toggle(\"secili\");",
      validator: (code) => {
        const clean = code.trim();
        if (/kart\.classList\.toggle\s*\(\s*['"]secili['"]\s*\)\s*;?/i.test(clean)) return { ok: true, msg: "Harika! classList.toggle tamamlandı. 11. Modül Tamamlandı! 🏆" };
        return { ok: false, msg: "Hata: 'kart.classList.toggle(\"secili\");' yazın." };
      }
    }
  ],

  js_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: CLICK OLAYI (ADDEVENTLISTENER)",
      title: "1. Soru: Buton Tıklama Olayı (click)",
      prompt: "<code>buton.addEventListener(\"click\", () => { console.log(\"Tıklandı!\"); });</code> dinleyicisini ekleyebilir misin?",
      presetCode: "const buton = document.getElementById(\"btn-kaydet\");\n// click dinleyicisi ekle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["buton.addEventListener(\"click\", () => {", "console.log(\"Tıklandı!\");", "});"],
      hint: "buton.addEventListener(\"click\", () => {\n  console.log(\"Tıklandı!\");\n});",
      solution: "const buton = document.getElementById(\"btn-kaydet\");\nbuton.addEventListener(\"click\", () => {\n  console.log(\"Tıklandı!\");\n});",
      validator: (code) => {
        const clean = code.trim();
        if (/buton\.addEventListener\s*\(\s*['"]click['"]\s*,\s*(?:\(\s*\)|[a-zA-Z0-9_]+)?\s*=>\s*\{[\s\S]*console\.log\s*\(\s*['"]Tıklandı!['"]\s*\)\s*;?[\s\S]*\}\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! addEventListener click olayı bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'buton.addEventListener(\"click\", () => { console.log(\"Tıklandı!\"); });' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: FORM SUBMIT VE PREVENTDEFAULT",
      title: "2. Soru: Sayfa Yenilenmesini Engelleme (e.preventDefault)",
      prompt: "Form submit olayında <code>e.preventDefault();</code> çağırarak sayfanın yenilenmesini engelleyebilir misin?",
      presetCode: "const form = document.querySelector(\"#login-form\");\nform.addEventListener(\"submit\", (e) => {\n  // Sayfa yenilenmesini engelle:\n  \n});",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["e.preventDefault();", "preventDefault()"],
      hint: "e.preventDefault();",
      solution: "const form = document.querySelector(\"#login-form\");\nform.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n});",
      validator: (code) => {
        const clean = code.trim();
        if (/e\.preventDefault\s*\(\s*\)\s*;?/.test(clean)) return { ok: true, msg: "Harika! e.preventDefault() formu korumaya aldı. ✓" };
        return { ok: false, msg: "Hata: 'e.preventDefault();' satırını ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: INPUT OLAYI DİNLEME",
      title: "3. Soru: Anlık Metin Yazımı (input)",
      prompt: "<code>inputEl.addEventListener(\"input\", (e) => { console.log(e.target.value); });</code> ile anlık yazılan metni konsola basabilir misin?",
      presetCode: "const inputEl = document.getElementById(\"arama\");\n// input olayını dinle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["inputEl.addEventListener(\"input\", (e) => {", "console.log(e.target.value);", "});"],
      hint: "inputEl.addEventListener(\"input\", (e) => {\n  console.log(e.target.value);\n});",
      solution: "const inputEl = document.getElementById(\"arama\");\ninputEl.addEventListener(\"input\", (e) => {\n  console.log(e.target.value);\n});",
      validator: (code) => {
        const clean = code.trim();
        if (/inputEl\.addEventListener\s*\(\s*['"]input['"]\s*,\s*\(?\s*e\s*\)?\s*=>\s*\{[\s\S]*console\.log\s*\(\s*e\.target\.value\s*\)\s*;?[\s\S]*\}\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! input olayı anlık olarak yakalandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'inputEl.addEventListener(\"input\", (e) => { console.log(e.target.value); });' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: E.TARGET İLE TIKLANAN ELEMAN",
      title: "4. Soru: Tıklanan Elemanı Yakalama (e.target)",
      prompt: "Olay fonksiyonu içinde <code>e.target.classList.add(\"secildi\");</code> kodunu yazabilir misin?",
      presetCode: "document.addEventListener(\"click\", (e) => {\n  // Tıklanan elemana secildi sınıfı ver:\n  \n});",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["e.target.classList.add(\"secildi\");", "e.target"],
      hint: "e.target.classList.add(\"secildi\");",
      solution: "document.addEventListener(\"click\", (e) => {\n  e.target.classList.add(\"secildi\");\n});",
      validator: (code) => {
        const clean = code.trim();
        if (/e\.target\.classList\.add\s*\(\s*['"]secildi['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! e.target başarıyla kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'e.target.classList.add(\"secildi\");' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: KEYDOWN İLE TUŞ YAKALAMA",
      title: "5. Soru: Enter Tuşunu Yakalama (keydown)",
      prompt: "<code>if (e.key === \"Enter\") console.log(\"Enter basıldı\");</code> kontrolünü keydown içine ekleyebilir misin?",
      presetCode: "document.addEventListener(\"keydown\", (e) => {\n  // Enter tuşunu kontrol et:\n  \n});",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["if (e.key === \"Enter\") {", "console.log(\"Enter basıldı\");", "}"],
      hint: "if (e.key === \"Enter\") {\n    console.log(\"Enter basıldı\");\n  }",
      solution: "document.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Enter\") {\n    console.log(\"Enter basıldı\");\n  }\n});",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*e\.key\s*===\s*['"]Enter['"]\s*\)[\s\S]*console\.log\s*\(\s*['"]Enter basıldı['"]\s*\)/i.test(clean)) {
          return { ok: true, msg: "Harika! keydown Enter olayı yakalandı. 12. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'if (e.key === \"Enter\") { console.log(\"Enter basıldı\"); }' yazın." };
      }
    }
  ],

  js_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: CREATEELEMENT İLE ELEMAN ÜRETME",
      title: "1. Soru: Yeni Eleman Oluşturma (createElement)",
      prompt: "<code>document.createElement(\"li\")</code> ile yeni bir liste elemanı üretip <code>yeniLi</code> değişkenine atayabilir misin?",
      presetCode: "// yeni li elemanı üret:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["const yeniLi = document.createElement(\"li\");", "document.createElement(\"li\")"],
      hint: "const yeniLi = document.createElement(\"li\");",
      solution: "const yeniLi = document.createElement(\"li\");",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+yeniLi\s*=\s*document\.createElement\s*\(\s*['"]li['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! createElement(\"li\") hafızada üretildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'const yeniLi = document.createElement(\"li\");' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: APPENDCHILD İLE SAYFAYA EKLEME",
      title: "2. Soru: Elemanı Sayfaya Ekleme (appendChild)",
      prompt: "<code>liste.appendChild(yeniLi);</code> metodunu kullanarak üretilen elemanı listeye ekleyebilir misin?",
      presetCode: "const liste = document.getElementById(\"liste\");\nconst yeniLi = document.createElement(\"li\");\nyeniLi.textContent = \"Yeni Madde\";\n// yeniLi'yi listeye ekle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["liste.appendChild(yeniLi);", "appendChild(yeniLi)"],
      hint: "liste.appendChild(yeniLi);",
      solution: "const liste = document.getElementById(\"liste\");\nconst yeniLi = document.createElement(\"li\");\nyeniLi.textContent = \"Yeni Madde\";\nliste.appendChild(yeniLi);",
      validator: (code) => {
        const clean = code.trim();
        if (/liste\.appendChild\s*\(\s*yeniLi\s*\)\s*;?/.test(clean)) return { ok: true, msg: "Harika! appendChild ile eleman DOM'a eklendi. ✓" };
        return { ok: false, msg: "Hata: 'liste.appendChild(yeniLi);' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: REMOVE İLE ELEMAN SİLME",
      title: "3. Soru: Elemanı Silme (.remove)",
      prompt: "<code>eleman.remove();</code> kodunu yazarak hedef elemanı sayfadan kaldırabilir misin?",
      presetCode: "const eleman = document.getElementById(\"silinecek\");\n// elemanı sil:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["eleman.remove();", "remove()"],
      hint: "eleman.remove();",
      solution: "const eleman = document.getElementById(\"silinecek\");\neleman.remove();",
      validator: (code) => {
        const clean = code.trim();
        if (/eleman\.remove\s*\(\s*\)\s*;?/.test(clean)) return { ok: true, msg: "Mükemmel! .remove() ile eleman DOM'dan silindi. ✓" };
        return { ok: false, msg: "Hata: 'eleman.remove();' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: PREPEND İLE EN BAŞA EKLEME",
      title: "4. Soru: En Başa Eleman Ekleme (prepend)",
      prompt: "<code>kapsayici.prepend(yeniKutu);</code> ile elemanı listenin en başına ekleyebilir misin?",
      presetCode: "const kapsayici = document.querySelector(\".kapsayici\");\nconst yeniKutu = document.createElement(\"div\");\n// en başa ekle:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["kapsayici.prepend(yeniKutu);", "prepend(yeniKutu)"],
      hint: "kapsayici.prepend(yeniKutu);",
      solution: "const kapsayici = document.querySelector(\".kapsayici\");\nconst yeniKutu = document.createElement(\"div\");\nkapsayici.prepend(yeniKutu);",
      validator: (code) => {
        const clean = code.trim();
        if (/kapsayici\.prepend\s*\(\s*yeniKutu\s*\)\s*;?/.test(clean)) return { ok: true, msg: "Tebrikler! prepend ile en başa eklendi. ✓" };
        return { ok: false, msg: "Hata: 'kapsayici.prepend(yeniKutu);' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: PARENTELEMENT İLE EBEVEYNİ SİLME",
      title: "5. Soru: Butonun Bulunduğu Satırı Silme",
      prompt: "<code>e.target.parentElement.remove();</code> kodunu yazarak tıklanan butonun kapsayıcı satırını silebilir misin?",
      presetCode: "function satirSil(e) {\n  // ebeveyni sil:\n  \n}",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["e.target.parentElement.remove();", "parentElement.remove()"],
      hint: "e.target.parentElement.remove();",
      solution: "function satirSil(e) {\n  e.target.parentElement.remove();\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/e\.target\.parentElement\.remove\s*\(\s*\)\s*;?/.test(clean)) {
          return { ok: true, msg: "Harika! Dinamik eleman silme tamamlandı. 13. Modül Tamamlandı! 🏆" };
        }
        return { ok: false, msg: "Hata: 'e.target.parentElement.remove();' yazın." };
      }
    }
  ],

  js_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: LOCALSTORAGE SETITEM",
      title: "1. Soru: Tarayıcıya Veri Kaydetme (setItem)",
      prompt: "<code>localStorage.setItem(\"kullaniciAdi\", \"Bengi\");</code> koduyla veriyi kalıcı olarak kaydedebilir misin?",
      presetCode: "// localStorage'a kullaniciAdi kaydet:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["localStorage.setItem(\"kullaniciAdi\", \"Bengi\");", "setItem"],
      hint: "localStorage.setItem(\"kullaniciAdi\", \"Bengi\");",
      solution: "localStorage.setItem(\"kullaniciAdi\", \"Bengi\");",
      validator: (code) => {
        const clean = code.trim();
        if (/localStorage\.setItem\s*\(\s*['"]kullaniciAdi['"]\s*,\s*['"]Bengi['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! localStorage.setItem başarıyla çalıştırıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'localStorage.setItem(\"kullaniciAdi\", \"Bengi\");' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: LOCALSTORAGE GETITEM",
      title: "2. Soru: Kayıtlı Veriyi Okuma (getItem)",
      prompt: "<code>localStorage.getItem(\"kullaniciAdi\")</code> değerini <code>kayitliKullanici</code> değişkenine aktarabilir misin?",
      presetCode: "// Kayıtlı kullanıcı adını oku:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let kayitliKullanici = localStorage.getItem(\"kullaniciAdi\");", "getItem"],
      hint: "let kayitliKullanici = localStorage.getItem(\"kullaniciAdi\");",
      solution: "let kayitliKullanici = localStorage.getItem(\"kullaniciAdi\");",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+kayitliKullanici\s*=\s*localStorage\.getItem\s*\(\s*['"]kullaniciAdi['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! localStorage.getItem ile veri okundu. ✓" };
        }
        return { ok: false, msg: "Hata: 'let kayitliKullanici = localStorage.getItem(\"kullaniciAdi\");' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: JSON.STRINGIFY İLE DİZİYİ METNE ÇEVİRME",
      title: "3. Soru: Diziyi JSON Metnine Çevirme",
      prompt: "<code>JSON.stringify(gorevler)</code> sonucunu <code>localStorage.setItem(\"gorevler\", ...)</code> ile kaydedebilir misin?",
      presetCode: "const gorevler = [\"Kod Yaz\", \"Test Et\"];\n// JSON.stringify ile localStorage'a kaydet:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["localStorage.setItem(\"gorevler\", JSON.stringify(gorevler));", "JSON.stringify(gorevler)"],
      hint: "localStorage.setItem(\"gorevler\", JSON.stringify(gorevler));",
      solution: "const gorevler = [\"Kod Yaz\", \"Test Et\"];\nlocalStorage.setItem(\"gorevler\", JSON.stringify(gorevler));",
      validator: (code) => {
        const clean = code.trim();
        if (/localStorage\.setItem\s*\(\s*['"]gorevler['"]\s*,\s*JSON\.stringify\s*\(\s*gorevler\s*\)\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Dizi JSON metnine çevrilip kaydedildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'localStorage.setItem(\"gorevler\", JSON.stringify(gorevler));' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: JSON.PARSE İLE GERİ DÖNÜŞTÜRME",
      title: "4. Soru: JSON Metnini Diziye Çevirme (parse)",
      prompt: "<code>JSON.parse(localStorage.getItem(\"gorevler\"))</code> ifadesini <code>liste</code> değişkenine atayabilir misin?",
      presetCode: "// JSON.parse ile kayıtlı listeyi geri oku:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["let liste = JSON.parse(localStorage.getItem(\"gorevler\"));", "JSON.parse"],
      hint: "let liste = JSON.parse(localStorage.getItem(\"gorevler\"));",
      solution: "let liste = JSON.parse(localStorage.getItem(\"gorevler\"));",
      validator: (code) => {
        const clean = code.trim();
        if (/(?:let|const|var)\s+liste\s*=\s*JSON\.parse\s*\(\s*localStorage\.getItem\s*\(\s*['"]gorevler['"]\s*\)\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! JSON.parse ile orijinal diziye dönüştürüldü. ✓" };
        }
        return { ok: false, msg: "Hata: 'let liste = JSON.parse(localStorage.getItem(\"gorevler\"));' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: REMOVEITEM & LOCALSTORAGE TEMİZLEME",
      title: "5. Soru: Kaydı Silme (removeItem)",
      prompt: "<code>localStorage.removeItem(\"kullaniciAdi\");</code> kodunu yazarak kaydı hafızadan silebilir misin?",
      presetCode: "// kullaniciAdi kaydını sil:\n",
      filename: "app.js",
      lang: "JavaScript ES6",
      quickKeys: ["localStorage.removeItem(\"kullaniciAdi\");", "removeItem"],
      hint: "localStorage.removeItem(\"kullaniciAdi\");",
      solution: "localStorage.removeItem(\"kullaniciAdi\");",
      validator: (code) => {
        const clean = code.trim();
        if (/localStorage\.removeItem\s*\(\s*['"]kullaniciAdi['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Tüm JavaScript Müfredatı başarıyla tamamlandı! 🏆🚀" };
        }
        return { ok: false, msg: "Hata: 'localStorage.removeItem(\"kullaniciAdi\");' yazın." };
      }
    }
  ]
};

// Aliases for review cards and challenges
for (let i = 1; i <= 14; i++) {
  if (JS_TOPIC_REVIEWS[`js_${i}`]) {
    JS_TOPIC_REVIEWS[`js${i}`] = JS_TOPIC_REVIEWS[`js_${i}`];
    JS_TOPIC_REVIEWS[`javascript_${i}`] = JS_TOPIC_REVIEWS[`js_${i}`];
    JS_TOPIC_REVIEWS[`javascript${i}`] = JS_TOPIC_REVIEWS[`js_${i}`];
  }
  if (JS_CHALLENGES[`js_${i}`]) {
    JS_CHALLENGES[`js${i}`] = JS_CHALLENGES[`js_${i}`];
    JS_CHALLENGES[`javascript_${i}`] = JS_CHALLENGES[`js_${i}`];
    JS_CHALLENGES[`javascript${i}`] = JS_CHALLENGES[`js_${i}`];
  }
}

