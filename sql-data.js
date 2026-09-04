// =========================================================================
// 🗄️ SQL (STRUCTURED QUERY LANGUAGE) MÜFREDATI: 14 HIZLI TEORİ KARTI & 70 İNTERAKTİF KODLAMA GÖREVİ
// (W3Schools SQL Tutorial & Video Eğitim Müfredatı)
// =========================================================================

const SQL_TOPIC_REVIEWS = {
  "sql_1": {
    "title": "SQL'e Giriş, SELECT & FROM Sorguları",
    "readTime": "2 dk okuma",
    "rewardText": "🏡 Giriş Çiftliği & Su Kuyusu",
    "logic": "SQL (Structured Query Language), ilişkisel veritabanlarındaki verileri sorgulamak, filtrelemek ve yönetmek için kullanılan evrensel dildir. SELECT komutu veritabanından hangi sütunların okunacağını, FROM ise hangi tablodan çekileceğini belirtir.",
    "syntaxRules": [
      "<code>SELECT * FROM tablo_adi;</code> : Tablodaki tüm sütun ve satırları getirir.",
      "<code>SELECT sutun1, sutun2 FROM tablo_adi;</code> : Yalnızca istenen sütunları getirir.",
      "<code>SELECT DISTINCT sutun FROM tablo_adi;</code> : Tekrar eden (duplicate) kayıtları tekilleştirerek listeler.",
      "<code>-- Yorum satırı</code> : SQL içi açıklama bırakmak için çift tire kullanılır."
    ],
    "pitfalls": [
      "⚠️ SQL komutları (SELECT, FROM) büyük/küçük harfe duyarsızdır (case-insensitive); ancak temiz kod standartları için komutların BÜYÜK HARFLE yazılması önerilir.",
      "⚠️ Performans açısından milyonlarca verisi olan büyük tablolarda gereksiz yere <code>SELECT *</code> kullanmaktan kaçının, sadece ihtiyacınız olan sütunları seçin.",
      "⚠️ Sorgu sonlarına noktalı virgül (<code>;</code>) koymak standart SQL kuralıdır."
    ],
    "exampleCode": "-- Tüm müşterileri tekilleştirerek ülkelerine göre listele\nSELECT DISTINCT ulke FROM musteriler;"
  },
  "sql_2": {
    "title": "WHERE ile Veri Filtreleme & Karşılaştırma",
    "readTime": "2 dk okuma",
    "rewardText": "💡 Şehir Elektrik Şebekesi",
    "logic": "WHERE ifadesi, yalnızca belirli bir şartı veya koşulu sağlayan satırların çekilmesini sağlar. Sayısal ve metinsel veriler üzerinde mantıksal ve matematiksel kıyaslamalar yapar.",
    "syntaxRules": [
      "<code>WHERE sutun = deger</code> : Eşitlik kontrolü.",
      "<code>WHERE fiyat &gt; 100</code> : Büyüktür, küçüktür (<code>&gt;, &lt;, &gt;=, &lt;=</code>) kontrolleri.",
      "<code>WHERE durum != 'Pasif'</code> veya <code>&lt;&gt; 'Pasif'</code> : Eşit değildir kontrolü.",
      "<code>WHERE sehir = 'İstanbul'</code> : Metinsel (String) değerler mutlaka tek tırnak (<code>'...'</code>) içine alınır."
    ],
    "pitfalls": [
      "⚠️ Sayısal değerler tırnak içine alınmaz (<code>WHERE yas &gt; 18</code>); metinler ise daima tek tırnakla yazılır (<code>WHERE ad = 'Ahmet'</code>).",
      "⚠️ WHERE ifadesi daima FROM'dan sonra, ORDER BY'dan önce gelmelidir."
    ],
    "exampleCode": "SELECT ad, soyad, maas \nFROM calisanlar \nWHERE maas >= 25000;"
  },
  "sql_3": {
    "title": "Mantıksal Operatörler (AND, OR, NOT)",
    "readTime": "2 dk okuma",
    "rewardText": "🚰 Su Arıtma & Çeşmeler",
    "logic": "Birden fazla filtreleme koşulunu birleştirmek veya tersini almak için mantıksal operatörler kullanılır. AND tüm şartların sağlanmasını, OR en az birinin sağlanmasını, NOT ise koşulun tersini ister.",
    "syntaxRules": [
      "<code>WHERE kosul1 AND kosul2</code> : İki koşulun da doğru (TRUE) olması gerekir.",
      "<code>WHERE kosul1 OR kosul2</code> : Koşullardan en az birinin doğru olması yeterlidir.",
      "<code>WHERE NOT kosul</code> : Koşulu sağlamayanları listeler.",
      "<code>(kosul1 OR kosul2) AND kosul3</code> : İşlem önceliğini netleştirmek için parantez kullanılır."
    ],
    "pitfalls": [
      "⚠️ SQL'de <code>AND</code> operatörünün işlem önceliği <code>OR</code>'dan yüksektir. Karışıklığı önlemek için mutlaka parantez <code>()</code> kullanın.",
      "⚠️ <code>NOT</code> operatörü genellikle sütun adından önce yazılır (<code>WHERE NOT sehir = 'İzmir'</code>)."
    ],
    "exampleCode": "SELECT * FROM urunler \nWHERE kategori = 'Elektronik' AND (fiyat < 5000 OR stok > 20);"
  },
  "sql_4": {
    "title": "Sıralama (ORDER BY) & Sınırlandırma (LIMIT)",
    "readTime": "2 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Botanik Bahçe",
    "logic": "Sonuç kümesini alfabetik, kronolojik veya sayısal olarak sıralamak için ORDER BY; gelen kayıt sayısını sınırlandırmak için LIMIT (veya SQL Server'da TOP) kullanılır.",
    "syntaxRules": [
      "<code>ORDER BY sutun ASC</code> : Artan sırada (A'dan Z'ye veya küçükten büyüğe - varsayılandır).",
      "<code>ORDER BY sutun DESC</code> : Azalan sırada (Z'den A'ya veya büyükten küçüğe).",
      "<code>ORDER BY sutun1 ASC, sutun2 DESC</code> : Çoklu sütuna göre sıralama.",
      "<code>LIMIT 5</code> : Dönen sonuç kümesinden yalnızca ilk 5 kaydı alır."
    ],
    "pitfalls": [
      "⚠️ <code>ORDER BY</code> ve <code>LIMIT</code> sorgunun en sonuna yazılır. (Sıra: SELECT &gt; FROM &gt; WHERE &gt; ORDER BY &gt; LIMIT).",
      "⚠️ Sayısal sıralamalarda <code>DESC</code> en yüksek değeri en başa getirir."
    ],
    "exampleCode": "-- En yüksek puanlı ilk 3 filmi getir\nSELECT film_adi, puan \nFROM filmler \nORDER BY puan DESC \nLIMIT 3;"
  },
  "sql_5": {
    "title": "Metin Arama & Jokerler (LIKE & Wildcards)",
    "readTime": "2 dk okuma",
    "rewardText": "🏢 Modern Rezidanslar & İş Kuleleri",
    "logic": "Bir metin sütunu içinde belirli bir desen, kelime öbeği veya harf dizilimini aramak için LIKE operatörü ve joker karakterler (%, _) kullanılır.",
    "syntaxRules": [
      "<code>LIKE 'A%'</code> : 'A' harfi ile başlayan kayıtlar.",
      "<code>LIKE '%gmail.com'</code> : 'gmail.com' ile biten kayıtlar.",
      "<code>LIKE '%bilgisayar%'</code> : İçinde 'bilgisayar' kelimesi geçen kayıtlar.",
      "<code>LIKE '_stanbul'</code> : Alt tire (<code>_</code>) tam olarak 1 adet herhangi bir karakteri temsil eder.",
      "<code>NOT LIKE '%test%'</code> : Belirtilen deseni içermeyen kayıtlar."
    ],
    "pitfalls": [
      "⚠️ <code>%</code> sıfır veya daha fazla karakteri, <code>_</code> ise kesinlikle tek bir karakteri temsil eder.",
      "⚠️ PostgreSQL'de büyük/küçük harf duyarsız arama için <code>ILIKE</code> kullanılabilir."
    ],
    "exampleCode": "SELECT ad, email \nFROM musteriler \nWHERE email LIKE '%@hotmail.com';"
  },
  "sql_6": {
    "title": "Küme ve Aralık Operatörleri (IN & BETWEEN)",
    "readTime": "2 dk okuma",
    "rewardText": "🎬 Sinema & Kültür Merkezi",
    "logic": "Bir değerin belirli bir liste içinde olup olmadığını kontrol etmek için IN; iki değer arasında (dahil) olup olmadığını denetlemek için BETWEEN kullanılır.",
    "syntaxRules": [
      "<code>WHERE sehir IN ('İstanbul', 'Ankara', 'İzmir')</code> : Çoklu OR yazmak yerine pratik liste kontrolü.",
      "<code>WHERE fiyat BETWEEN 100 AND 500</code> : 100 ve 500 dahil aralık kontrolü.",
      "<code>WHERE kategori NOT IN ('Gıda', 'Kozmetik')</code> : Belirtilen listenin dışındakiler.",
      "<code>WHERE tarih BETWEEN '2024-01-01' AND '2024-12-31'</code> : Tarih aralığı filtreleme."
    ],
    "pitfalls": [
      "⚠️ <code>BETWEEN</code> operatöründe başlangıç ve bitiş sınır değerleri sonuca dahildir (inclusive).",
      "⚠️ Tarih aralıklarında formatın standart <code>'YYYY-MM-DD'</code> şeklinde yazılması önerilir."
    ],
    "exampleCode": "SELECT urun_adi, fiyat \nFROM urunler \nWHERE fiyat BETWEEN 200 AND 1000 \n  AND kategori IN ('Elektronik', 'Aksesuar');"
  },
  "sql_7": {
    "title": "Boş Değerler (NULL, IS NULL & COALESCE)",
    "readTime": "2 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Veritabanında girilmemiş veya tanımsız veriler NULL olarak saklanır. NULL bir sıfır veya boşluk ('') değildir; 'bilinmeyen değer' anlamına gelir.",
    "syntaxRules": [
      "<code>WHERE telefon IS NULL</code> : Telefonu girilmemiş (boş olan) kayıtları bulur.",
      "<code>WHERE email IS NOT NULL</code> : Email alanı dolu olan kayıtları bulur.",
      "<code>COALESCE(telefon, 'Yok')</code> : Eğer telefon NULL ise yerine 'Yok' yazdırır."
    ],
    "pitfalls": [
      "⚠️ Asla <code>WHERE telefon = NULL</code> yazmayın! SQL'de NULL eşitlikle kıyaslanamaz, daima <code>IS NULL</code> veya <code>IS NOT NULL</code> kullanılır.",
      "⚠️ Toplama fonksiyonları (SUM, AVG) NULL değerleri otomatik olarak görmezden gelir, ancak COUNT(*) tüm satırları sayar."
    ],
    "exampleCode": "SELECT ad, soyad, COALESCE(telefon, 'Numara Yok') AS iletisim \nFROM musteriler \nWHERE adres IS NOT NULL;"
  },
  "sql_8": {
    "title": "Toplama & İstatistik Fonksiyonları (Aggregate)",
    "readTime": "2 dk okuma",
    "rewardText": "🏛️ Yönetim Sarayı & Belediye",
    "logic": "Birden çok satırdaki verileri hesaplayarak tek bir özet değer üreten matematiksel fonksiyonlardır (COUNT, SUM, AVG, MIN, MAX).",
    "syntaxRules": [
      "<code>COUNT(*)</code> veya <code>COUNT(sutun)</code> : Satır sayısını sayar.",
      "<code>SUM(fiyat)</code> : Sayısal sütunun toplamını alır.",
      "<code>AVG(maas)</code> : Sayısal sütunun aritmetik ortalamasını hesaplar.",
      "<code>MIN(fiyat) / MAX(fiyat)</code> : En küçük ve en büyük değeri bulur.",
      "<code>AS takma_ad</code> : Çıkan hesaplama sonucuna anlamlı bir sütun adı verir (Alias)."
    ],
    "pitfalls": [
      "⚠️ <code>COUNT(sutun)</code> sadece NULL olmayan kayıtları sayar, <code>COUNT(*)</code> ise tüm satırları sayar.",
      "⚠️ <code>WHERE</code> içinde doğrudan toplama fonksiyonu kullanılamaz (<code>WHERE maas &gt; AVG(maas)</code> yanlıştır; alt sorgu gerektirir)."
    ],
    "exampleCode": "SELECT \n  COUNT(*) AS toplam_urun,\n  AVG(fiyat) AS ortalama_fiyat,\n  MAX(fiyat) AS en_pahali\nFROM urunler;"
  },
  "sql_9": {
    "title": "Gruplama (GROUP BY) & Grup Filtresi (HAVING)",
    "readTime": "2 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Verileri belirli bir sütuna göre kategorilere/gruplara ayırarak her grup için ayrı ayrı toplam veya ortalama hesaplar. HAVING ise bu gruplanmış sonuçları filtreler.",
    "syntaxRules": [
      "<code>GROUP BY departman</code> : Verileri departmana göre gruplar.",
      "<code>HAVING COUNT(*) &gt; 5</code> : Sadece 5'ten fazla elemanı olan grupları getirir.",
      "<code>WHERE</code> satırları gruplamadan ÖNCE eler; <code>HAVING</code> gruplama yapıldıktan SONRA eler."
    ],
    "pitfalls": [
      "⚠️ SELECT listesindeki toplama fonksiyonu olmayan tüm sütunlar mutlaka <code>GROUP BY</code> ifadesine yazılmalıdır.",
      "⚠️ Toplama fonksiyonlarına (COUNT, SUM, AVG) filtre koymak için <code>WHERE</code> değil <code>HAVING</code> kullanılır."
    ],
    "exampleCode": "SELECT departman, COUNT(*) AS calisan_sayisi, AVG(maas) AS ort_maas \nFROM personeller \nGROUP BY departman \nHAVING COUNT(*) >= 3;"
  },
  "sql_10": {
    "title": "Yeni Kayıt Ekleme (INSERT INTO & VALUES)",
    "readTime": "2 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "Veritabanındaki bir tabloya yeni bir satır veya birden fazla satır eklemek için kullanılır.",
    "syntaxRules": [
      "<code>INSERT INTO tablo (sutun1, sutun2) VALUES (deger1, deger2);</code> : Belirli sütunlara veri ekleme.",
      "<code>INSERT INTO tablo VALUES (d1, d2, d3);</code> : Tüm sütunlara sırasıyla değer ekleme.",
      "<code>VALUES ('A', 10), ('B', 20), ('C', 30);</code> : Çoklu satır (toplu) kayıt ekleme."
    ],
    "pitfalls": [
      "⚠️ Belirtilen sütun sayısı ile VALUES içindeki değer sayısı ve sırası birebir eşleşmelidir.",
      "⚠️ Otomatik artan ID (Auto Increment / Serial) sütunlarına elle değer gönderilmemesi önerilir."
    ],
    "exampleCode": "INSERT INTO musteriler (ad, soyad, sehir) \nVALUES ('Ahmet', 'Yılmaz', 'Ankara');"
  },
  "sql_11": {
    "title": "Veri Güncelleme & Silme (UPDATE, DELETE & TRUNCATE)",
    "readTime": "2 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Raylar",
    "logic": "Tablodaki mevcut verileri güncellemek için UPDATE, satırları silmek için DELETE, tablonun içini tamamen boşaltmak için TRUNCATE kullanılır.",
    "syntaxRules": [
      "<code>UPDATE tablo SET sutun = yeni_deger WHERE id = 1;</code> : Şarta uyan kaydı günceller.",
      "<code>UPDATE tablo SET maas = maas * 1.20, durum = 'Aktif' WHERE dept = 'IT';</code> : Çoklu sütun güncelleme.",
      "<code>DELETE FROM tablo WHERE id = 5;</code> : Belirli satırı siler.",
      "<code>TRUNCATE TABLE tablo_adi;</code> : Tablodaki tüm verileri hızlıca sıfırlar (tablo iskeleti kalır)."
    ],
    "pitfalls": [
      "⚠️ HAYATİ UYARI: <code>UPDATE</code> ve <code>DELETE</code> sorgularında <code>WHERE</code> koşulunu unutursanız TABLODAKİ TÜM KAYITLAR değişir veya silinir!",
      "⚠️ <code>DROP TABLE</code> tabloyu tamamen yok ederken, <code>DELETE</code> ve <code>TRUNCATE</code> sadece satırları temizler."
    ],
    "exampleCode": "-- 10 numaralı ürünün fiyatını güncelle\nUPDATE urunler \nSET fiyat = 450, stok = 15 \nWHERE id = 10;"
  },
  "sql_12": {
    "title": "İlişkisel Tabloları Birleştirme (INNER JOIN)",
    "readTime": "3 dk okuma",
    "rewardText": "📡 5G Telekom & Uydu Kulesi",
    "logic": "İlişkisel veritabanlarında veriler parçalı tablolarda saklanır. INNER JOIN, ortak bir anahtar (Primary Key & Foreign Key) üzerinden iki tabloda da karşılığı olan kesişim kayıtlarını birleştirerek getirir.",
    "syntaxRules": [
      "<code>FROM tabloA INNER JOIN tabloB ON tabloA.id = tabloB.a_id</code> : Eşleşen satırları bağlar.",
      "<code>SELECT s.id, m.ad FROM siparisler s INNER JOIN musteriler m ON s.musteri_id = m.id</code> : Tablo takma adları (Alias).",
      "Birden fazla tabloyu ardışık JOIN'lerle bağlayabilirsiniz."
    ],
    "pitfalls": [
      "⚠️ İki tabloda da aynı isimde sütun varsa (örneğin iki tabloda da <code>id</code> veya <code>ad</code>), sütunun başına mutlaka tablo adı yazılmalıdır (<code>musteriler.ad</code>).",
      "⚠️ <code>ON</code> şartını yanlış bağlarsanız beklenmeyen çapraz eşleşmeler (Cartesian Product) oluşabilir."
    ],
    "exampleCode": "SELECT siparisler.id, musteriler.ad, siparisler.tutar \nFROM siparisler \nINNER JOIN musteriler ON siparisler.musteri_id = musteriler.id;"
  },
  "sql_13": {
    "title": "Gelişmiş Birleştirmeler (LEFT, RIGHT & FULL JOIN)",
    "readTime": "3 dk okuma",
    "rewardText": "🚢 Uluslararası Liman & Konteynerler",
    "logic": "LEFT JOIN sol tablodaki tüm satırları korurken sağ tabloda eşleşmeyenlerin yanına NULL yazar. RIGHT JOIN tam tersini yapar. FULL OUTER JOIN ise iki tablodaki tüm kayıtları getirir.",
    "syntaxRules": [
      "<code>FROM musteriler LEFT JOIN siparisler ON musteriler.id = siparisler.musteri_id</code> : Siparişi olmayan müşterileri de listeler.",
      "<code>WHERE siparisler.id IS NULL</code> : LEFT JOIN ile birleştirip sipariş vermemiş müşterileri tespit etme tekniği.",
      "<code>FULL OUTER JOIN</code> : İki taraftan da hiçbir veriyi kaybetmeden birleştirir."
    ],
    "pitfalls": [
      "⚠️ En çok kullanılan dış birleştirme <code>LEFT JOIN</code>'dir. Analizlerde 'hiç aktivitesi olmayan kullanıcıları' veya 'hiç satılmayan ürünleri' bulmak için kritik rol oynar."
    ],
    "exampleCode": "-- Hiç sipariş vermemiş müşterileri tespit et\nSELECT musteriler.ad, musteriler.email \nFROM musteriler \nLEFT JOIN siparisler ON musteriler.id = siparisler.musteri_id \nWHERE siparisler.id IS NULL;"
  },
  "sql_14": {
    "title": "Tablo Yönetimi & Kısıtlamalar (DDL & Constraints)",
    "readTime": "3 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Roket Üssü",
    "logic": "Veritabanında yeni tablo oluşturmak (CREATE), tablo yapısını değiştirmek (ALTER) ve tablo silmek (DROP) için Veri Tanımlama Dili (DDL) komutları ve kısıtlamalar (Constraints) kullanılır.",
    "syntaxRules": [
      "<code>CREATE TABLE tablo (id INT PRIMARY KEY, ad VARCHAR(50) NOT NULL);</code> : Tablo oluşturma.",
      "<code>PRIMARY KEY</code> : Benzersiz ve boş olamaz (Kimlik).",
      "<code>FOREIGN KEY (ref_id) REFERENCES diger_tablo(id)</code> : İlişki kısıtlaması.",
      "<code>ALTER TABLE tablo ADD sutun_adi INT;</code> : Yeni sütun ekleme.",
      "<code>DROP TABLE IF EXISTS tablo_adi;</code> : Tabloyu veritabanından tamamen kaldırma."
    ],
    "pitfalls": [
      "⚠️ <code>VARCHAR(50)</code> 50 karaktere kadar metin saklar; <code>INT</code> tam sayı, <code>DECIMAL(10,2)</code> para birimleri için kullanılır.",
      "⚠️ İlişkili bir Foreign Key'e bağlı ana tabloyu silmeden önce ilişkili alt kayıtları silmeniz gerekir."
    ],
    "exampleCode": "CREATE TABLE personeller (\n  id INT PRIMARY KEY,\n  ad VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  maas DECIMAL(10,2) DEFAULT 17002.00\n);"
  }
};

const SQL_CHALLENGES = {
  sql_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: SELECT & FROM TEMELLERİ",
      title: "1. Soru: Tüm Kayıtları Listeleme",
      prompt: "<code>kullanicilar</code> tablosundaki tüm sütun ve satırları seçen SQL sorgusunu yazabilir misin?",
      presetCode: "-- Tüm sütunları seç:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT * FROM", "kullanicilar", ";", "SELECT", "FROM"],
      hint: "SELECT * FROM kullanicilar;",
      solution: "SELECT * FROM kullanicilar;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+kullanicilar\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! SELECT * FROM kullanicilar sorgusu başarıyla çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM kullanicilar;' şeklinde yazmalısınız." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: BELİRLİ SÜTUNLARI ÇEKME",
      title: "2. Soru: Belirli Sütunları Seçme",
      prompt: "<code>calisanlar</code> tablosundan yalnızca <code>ad</code> ve <code>soyad</code> sütunlarını getiren sorguyu yazabilir misin?",
      presetCode: "-- Sadece ad ve soyad sütunlarını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT ad, soyad FROM calisanlar;", "ad, soyad", "calisanlar", "SELECT", "FROM"],
      hint: "SELECT ad, soyad FROM calisanlar;",
      solution: "SELECT ad, soyad FROM calisanlar;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+ad\s*,\s*soyad\s+FROM\s+calisanlar\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! İstenen sütunlar başarıyla çekildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT ad, soyad FROM calisanlar;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: TEKRARSIZ KAYITLAR (DISTINCT)",
      title: "3. Soru: Tekrarsız Kayıtları Listeleme",
      prompt: "<code>personeller</code> tablosundaki tekrar eden departmanları tekilleştirerek listelemek için <code>DISTINCT</code> kullanarak <code>departman</code> sütununu seç.",
      presetCode: "-- Tekrarsız departmanları getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT DISTINCT", "departman", "FROM personeller;", "DISTINCT"],
      hint: "SELECT DISTINCT departman FROM personeller;",
      solution: "SELECT DISTINCT departman FROM personeller;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+DISTINCT\s+departman\s+FROM\s+personeller\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! DISTINCT ile tekrarsız veriler listelendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT DISTINCT departman FROM personeller;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: ÇOKLU SÜTUN SEÇİMİ",
      title: "4. Soru: Ürün Bilgilerini Getirme",
      prompt: "<code>urunler</code> tablosundan <code>urun_adi</code> ve <code>fiyat</code> sütunlarını çeken SQL sorgusunu yaz.",
      presetCode: "-- urun_adi ve fiyat sütunlarını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT urun_adi, fiyat FROM urunler;", "urun_adi, fiyat", "urunler"],
      hint: "SELECT urun_adi, fiyat FROM urunler;",
      solution: "SELECT urun_adi, fiyat FROM urunler;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+urun_adi\s*,\s*fiyat\s+FROM\s+urunler\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! Ürün adı ve fiyat sütunları seçildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT urun_adi, fiyat FROM urunler;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: TEKRARSIZ ÜLKE LİSTESİ",
      title: "5. Soru: Tekrarsız Müşteri Ülkeleri",
      prompt: "<code>musteriler</code> tablosundan tekrar eden ülkeleri engelleyerek sadece benzersiz <code>ulke</code> listesini çek.",
      presetCode: "-- Benzersiz ülkeleri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT DISTINCT ulke FROM musteriler;", "DISTINCT ulke", "musteriler"],
      hint: "SELECT DISTINCT ulke FROM musteriler;",
      solution: "SELECT DISTINCT ulke FROM musteriler;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+DISTINCT\s+ulke\s+FROM\s+musteriler\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 1. Modül tamamlandı, ilk bina kilidi açıldı! 🏡✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT DISTINCT ulke FROM musteriler;' yazın." };
      }
    }
  ],

  sql_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: WHERE & SAYISAL KARŞILAŞTIRMA",
      title: "1. Soru: Fiyata Göre Filtreleme",
      prompt: "<code>urunler</code> tablosundan fiyatı 500'den büyük (<code>fiyat &gt; 500</code>) olan tüm sütunları listeleyen sorguyu yaz.",
      presetCode: "-- Fiyatı 500'den büyük ürünleri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE fiyat > 500", "SELECT * FROM urunler", "WHERE", "> 500"],
      hint: "SELECT * FROM urunler WHERE fiyat > 500;",
      solution: "SELECT * FROM urunler WHERE fiyat > 500;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+urunler\s+WHERE\s+fiyat\s*>\s*500\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! Sayısal filtreleme başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM urunler WHERE fiyat > 500;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: METİN FİLTRELEME (STRING)",
      title: "2. Soru: Şehre Göre Filtreleme",
      prompt: "<code>musteriler</code> tablosundan şehri 'İstanbul' olan (<code>sehir = 'İstanbul'</code>) tüm müşterileri getiren sorguyu yaz.",
      presetCode: "-- İstanbul'daki müşterileri listele:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE sehir = 'İstanbul'", "SELECT * FROM musteriler", "'İstanbul'"],
      hint: "SELECT * FROM musteriler WHERE sehir = 'İstanbul';",
      solution: "SELECT * FROM musteriler WHERE sehir = 'İstanbul';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+musteriler\s+WHERE\s+sehir\s*=\s*['"]İstanbul['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Metinsel filtreleme tek tırnakla doğru yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM musteriler WHERE sehir = 'İstanbul';' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: BÜYÜK EŞİTTİR (>=) OPERATÖRÜ",
      title: "3. Soru: Maaş Kriterine Göre Filtre",
      prompt: "<code>calisanlar</code> tablosundan maaşı 25000 veya daha fazla (<code>maas &gt;= 25000</code>) olan çalışanların <code>ad</code> ve <code>maas</code> sütunlarını seç.",
      presetCode: "-- Maaşı >= 25000 olanların ad ve maas bilgisi:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT ad, maas FROM calisanlar", "WHERE maas >= 25000", ";"],
      hint: "SELECT ad, maas FROM calisanlar WHERE maas >= 25000;",
      solution: "SELECT ad, maas FROM calisanlar WHERE maas >= 25000;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+ad\s*,\s*maas\s+FROM\s+calisanlar\s+WHERE\s+maas\s*>=\s*25000\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! >= operatörü doğru kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT ad, maas FROM calisanlar WHERE maas >= 25000;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: EŞİT DEĞİLDİR (!= VEYA <>)",
      title: "4. Soru: İptal Olmayan Siparişler",
      prompt: "<code>siparisler</code> tablosundan durumu 'İptal' olmayan (<code>durum != 'İptal'</code> veya <code>durum &lt;&gt; 'İptal'</code>) tüm siparişleri seç.",
      presetCode: "-- İptal harici siparişleri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE durum != 'İptal'", "WHERE durum <> 'İptal'", "SELECT * FROM siparisler"],
      hint: "SELECT * FROM siparisler WHERE durum != 'İptal';",
      solution: "SELECT * FROM siparisler WHERE durum != 'İptal';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+siparisler\s+WHERE\s+durum\s*(!=|<>)\s*['"]İptal['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! Eşit değildir filtresi başarıyla çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM siparisler WHERE durum != 'İptal';' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: KÜÇÜK EŞİTTİR (<=)",
      title: "5. Soru: Not Ortalaması Şartı",
      prompt: "<code>ogrenciler</code> tablosundan not ortalaması 60 veya altında olan (<code>not_ortalamasi &lt;= 60</code>) tüm kayıtları seç.",
      presetCode: "-- not_ortalamasi <= 60 olan öğrencileri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT * FROM ogrenciler", "WHERE not_ortalamasi <= 60", ";"],
      hint: "SELECT * FROM ogrenciler WHERE not_ortalamasi <= 60;",
      solution: "SELECT * FROM ogrenciler WHERE not_ortalamasi <= 60;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+ogrenciler\s+WHERE\s+not_ortalamasi\s*<=\s*60\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 2. Modül tamamlandı, elektrik şebekesi kuruldu! 💡✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM ogrenciler WHERE not_ortalamasi <= 60;' yazın." };
      }
    }
  ],

  sql_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: AND (VE) OPERATÖRÜ",
      title: "1. Soru: İki Koşulu Birlikte Sağlama",
      prompt: "<code>urunler</code> tablosundan kategorisi 'Elektronik' olan VE stoğu 10'dan büyük olan (<code>kategori = 'Elektronik' AND stok &gt; 10</code>) ürünleri listele.",
      presetCode: "-- Elektronik ve stok > 10 olan ürünler:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE kategori = 'Elektronik' AND stok > 10", "SELECT * FROM urunler", "AND"],
      hint: "SELECT * FROM urunler WHERE kategori = 'Elektronik' AND stok > 10;",
      solution: "SELECT * FROM urunler WHERE kategori = 'Elektronik' AND stok > 10;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+urunler\s+WHERE\s+kategori\s*=\s*['"]Elektronik['"]\s+AND\s+stok\s*>\s*10\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! AND operatörüyle iki koşul başarıyla bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM urunler WHERE kategori = 'Elektronik' AND stok > 10;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: OR (VEYA) OPERATÖRÜ",
      title: "2. Soru: Şehir Seçenekleri (OR)",
      prompt: "<code>musteriler</code> tablosundan şehri 'Ankara' VEYA 'İzmir' olan müşterileri (<code>sehir = 'Ankara' OR sehir = 'İzmir'</code>) getir.",
      presetCode: "-- Ankara veya İzmir'deki müşteriler:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE sehir = 'Ankara' OR sehir = 'İzmir'", "SELECT * FROM musteriler", "OR"],
      hint: "SELECT * FROM musteriler WHERE sehir = 'Ankara' OR sehir = 'İzmir';",
      solution: "SELECT * FROM musteriler WHERE sehir = 'Ankara' OR sehir = 'İzmir';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+musteriler\s+WHERE\s+sehir\s*=\s*['"]Ankara['"]\s+OR\s+sehir\s*=\s*['"]İzmir['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! OR operatörü doğru şekilde kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM musteriler WHERE sehir = 'Ankara' OR sehir = 'İzmir';' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: NOT (DEĞİL) OPERATÖRÜ",
      title: "3. Soru: Koşulun Tersini Alma",
      prompt: "<code>calisanlar</code> tablosundan departmanı 'Muhasebe' olmayan (<code>NOT departman = 'Muhasebe'</code>) çalışanları listele.",
      presetCode: "-- Muhasebe olmayan çalışanlar:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE NOT departman = 'Muhasebe'", "SELECT * FROM calisanlar", "NOT"],
      hint: "SELECT * FROM calisanlar WHERE NOT departman = 'Muhasebe';",
      solution: "SELECT * FROM calisanlar WHERE NOT departman = 'Muhasebe';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+calisanlar\s+WHERE\s+NOT\s+departman\s*=\s*['"]Muhasebe['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! NOT operatörü başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM calisanlar WHERE NOT departman = 'Muhasebe';' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: PARANTEZ & İŞLEM ÖNCELİĞİ",
      title: "4. Soru: Parantezli Karmaşık Koşul",
      prompt: "<code>arabalar</code> tablosundan markası 'Toyota' olan VE (rengi 'Kırmızı' VEYA 'Beyaz' olan) araçları seç: <code>marka = 'Toyota' AND (renk = 'Kırmızı' OR renk = 'Beyaz')</code>.",
      presetCode: "-- Markası Toyota ve rengi kırmızı veya beyaz olanlar:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE marka = 'Toyota' AND (renk = 'Kırmızı' OR renk = 'Beyaz')", "SELECT * FROM arabalar"],
      hint: "SELECT * FROM arabalar WHERE marka = 'Toyota' AND (renk = 'Kırmızı' OR renk = 'Beyaz');",
      solution: "SELECT * FROM arabalar WHERE marka = 'Toyota' AND (renk = 'Kırmızı' OR renk = 'Beyaz');",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+arabalar\s+WHERE\s+marka\s*=\s*['"]Toyota['"]\s+AND\s*\(\s*renk\s*=\s*['"]Kırmızı['"]\s+OR\s+renk\s*=\s*['"]Beyaz['"]\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! Parantezli mantıksal öncelik başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM arabalar WHERE marka = 'Toyota' AND (renk = 'Kırmızı' OR renk = 'Beyaz');' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: AND & NOT BİRLİKTE",
      title: "5. Soru: Kargo ve Teslimat Koşulu",
      prompt: "<code>siparisler</code> tablosundan kargo ücreti 0 olan VE durumu 'Teslim Edildi' olmayan kayıtları seç: <code>kargo_ucreti = 0 AND NOT durum = 'Teslim Edildi'</code>.",
      presetCode: "-- Ücretsiz kargo ve henüz teslim edilmemiş siparişler:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE kargo_ucreti = 0 AND NOT durum = 'Teslim Edildi'", "SELECT * FROM siparisler"],
      hint: "SELECT * FROM siparisler WHERE kargo_ucreti = 0 AND NOT durum = 'Teslim Edildi';",
      solution: "SELECT * FROM siparisler WHERE kargo_ucreti = 0 AND NOT durum = 'Teslim Edildi';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+siparisler\s+WHERE\s+kargo_ucreti\s*=\s*0\s+AND\s+NOT\s+durum\s*=\s*['"]Teslim Edildi['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 3. Modül tamamlandı, su arıtma tesisi açıldı! 🚰✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM siparisler WHERE kargo_ucreti = 0 AND NOT durum = 'Teslim Edildi';' yazın." };
      }
    }
  ],

  sql_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: ARTAN SIRALAMA (ORDER BY ASC)",
      title: "1. Soru: Maaşa Göre Küçükten Büyüğe",
      prompt: "<code>calisanlar</code> tablosundaki tüm kayıtları <code>maas</code> sütununa göre küçükten büyüğe (artan sırada) listeleyen sorguyu yaz.",
      presetCode: "-- Maaşa göre artan sırala:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["ORDER BY maas ASC", "ORDER BY maas", "SELECT * FROM calisanlar"],
      hint: "SELECT * FROM calisanlar ORDER BY maas ASC;",
      solution: "SELECT * FROM calisanlar ORDER BY maas ASC;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+calisanlar\s+ORDER\s+BY\s+maas(\s+ASC)?\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! Artan sıralama başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM calisanlar ORDER BY maas ASC;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: AZALAN SIRALAMA (ORDER BY DESC)",
      title: "2. Soru: En Pahalıdan En Ucuza Sıralama",
      prompt: "<code>urunler</code> tablosunu fiyatı en yüksekten en düşüğe (azalan sırada: <code>ORDER BY fiyat DESC</code>) sıralayan sorguyu yaz.",
      presetCode: "-- Fiyata göre azalan sırala:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["ORDER BY fiyat DESC", "SELECT * FROM urunler", "DESC"],
      hint: "SELECT * FROM urunler ORDER BY fiyat DESC;",
      solution: "SELECT * FROM urunler ORDER BY fiyat DESC;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+urunler\s+ORDER\s+BY\s+fiyat\s+DESC\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! DESC ile azalan sıralama yapıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM urunler ORDER BY fiyat DESC;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: ÇOKLU SÜTUNA GÖRE SIRALAMA",
      title: "3. Soru: Soyad ve Ada Göre Sıralama",
      prompt: "<code>ogrenciler</code> tablosunu önce <code>soyad ASC</code>, ardından <code>ad ASC</code> şeklinde sırala.",
      presetCode: "-- Soyad ve ad sırasına göre listele:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["ORDER BY soyad ASC, ad ASC", "SELECT * FROM ogrenciler", "soyad ASC, ad ASC"],
      hint: "SELECT * FROM ogrenciler ORDER BY soyad ASC, ad ASC;",
      solution: "SELECT * FROM ogrenciler ORDER BY soyad ASC, ad ASC;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+ogrenciler\s+ORDER\s+BY\s+soyad(\s+ASC)?\s*,\s*ad(\s+ASC)?\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! İki sütuna göre hiyerarşik sıralama yapıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM ogrenciler ORDER BY soyad ASC, ad ASC;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: EN YÜKSEK İLK N KAYIT (LIMIT)",
      title: "4. Soru: En Yüksek Puanlı 5 Film",
      prompt: "<code>filmler</code> tablosundan puanı en yüksek ilk 5 filmi getiren sorguyu yaz (<code>ORDER BY puan DESC LIMIT 5</code>).",
      presetCode: "-- En yüksek puanlı ilk 5 filmi getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["ORDER BY puan DESC LIMIT 5", "SELECT * FROM filmler", "LIMIT 5"],
      hint: "SELECT * FROM filmler ORDER BY puan DESC LIMIT 5;",
      solution: "SELECT * FROM filmler ORDER BY puan DESC LIMIT 5;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+filmler\s+ORDER\s+BY\s+puan\s+DESC\s+LIMIT\s+5\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! LIMIT 5 ile ilk 5 kayıt başarıyla çekildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM filmler ORDER BY puan DESC LIMIT 5;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: SON KAYITLAR (LIMIT & DATE)",
      title: "5. Soru: En Son Kaydolan 10 Müşteri",
      prompt: "<code>musteriler</code> tablosundan kayıt tarihine göre en son eklenen 10 müşteriyi seç (<code>ORDER BY kayit_tarihi DESC LIMIT 10</code>).",
      presetCode: "-- Son eklenen 10 müşteriyi getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["ORDER BY kayit_tarihi DESC LIMIT 10", "SELECT * FROM musteriler"],
      hint: "SELECT * FROM musteriler ORDER BY kayit_tarihi DESC LIMIT 10;",
      solution: "SELECT * FROM musteriler ORDER BY kayit_tarihi DESC LIMIT 10;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+musteriler\s+ORDER\s+BY\s+kayit_tarihi\s+DESC\s+LIMIT\s+10\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 4. Modül tamamlandı, şehir parkı yeşillendi! 🌳✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM musteriler ORDER BY kayit_tarihi DESC LIMIT 10;' yazın." };
      }
    }
  ],

  sql_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: BAŞLANGIÇ DESENİ (LIKE 'A%')",
      title: "1. Soru: 'A' ile Başlayan Müşteriler",
      prompt: "<code>musteriler</code> tablosundan adı 'A' harfi ile başlayanları seç (<code>WHERE ad LIKE 'A%'</code>).",
      presetCode: "-- Adı A ile başlayanları getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE ad LIKE 'A%'", "SELECT * FROM musteriler", "LIKE 'A%'"],
      hint: "SELECT * FROM musteriler WHERE ad LIKE 'A%';",
      solution: "SELECT * FROM musteriler WHERE ad LIKE 'A%';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+musteriler\s+WHERE\s+ad\s+LIKE\s+['"]A%['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! 'A%' deseni başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM musteriler WHERE ad LIKE 'A%';' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: METİN İÇİ ARAMA (LIKE '%kelime%')",
      title: "2. Soru: İçinde 'Telefon' Geçen Ürünler",
      prompt: "<code>urunler</code> tablosundan <code>urun_adi</code> içinde 'Telefon' kelimesi geçen ürünleri seç (<code>WHERE urun_adi LIKE '%Telefon%'</code>).",
      presetCode: "-- urun_adi içinde Telefon geçenleri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE urun_adi LIKE '%Telefon%'", "SELECT * FROM urunler"],
      hint: "SELECT * FROM urunler WHERE urun_adi LIKE '%Telefon%';",
      solution: "SELECT * FROM urunler WHERE urun_adi LIKE '%Telefon%';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+urunler\s+WHERE\s+urun_adi\s+LIKE\s+['"]%Telefon%['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! İçerik araması '%Telefon%' ile başarıyla yapıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM urunler WHERE urun_adi LIKE '%Telefon%';' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: BİTİŞ DESENİ (LIKE '%son')",
      title: "3. Soru: Gmail Kullanan Personeller",
      prompt: "<code>personeller</code> tablosundan e-posta adresi '@gmail.com' ile bitenleri listele (<code>WHERE email LIKE '%@gmail.com'</code>).",
      presetCode: "-- @gmail.com ile biten emailler:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE email LIKE '%@gmail.com'", "SELECT * FROM personeller"],
      hint: "SELECT * FROM personeller WHERE email LIKE '%@gmail.com';",
      solution: "SELECT * FROM personeller WHERE email LIKE '%@gmail.com';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+personeller\s+WHERE\s+email\s+LIKE\s+['"]%@gmail\.com['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! Bitiş deseni eşleşmesi sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM personeller WHERE email LIKE '%@gmail.com';' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: TEK KARAKTER JOKERİ (_)",
      title: "4. Soru: Tek Karakter Eşleştirme",
      prompt: "<code>sehirler</code> tablosundan ilk harfi herhangi bir karakter olup gerisi 'stanbul' olan şehirleri seç: <code>WHERE sehir_adi LIKE '_stanbul'</code>.",
      presetCode: "-- _stanbul desenine uyan şehirleri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE sehir_adi LIKE '_stanbul'", "SELECT * FROM sehirler"],
      hint: "SELECT * FROM sehirler WHERE sehir_adi LIKE '_stanbul';",
      solution: "SELECT * FROM sehirler WHERE sehir_adi LIKE '_stanbul';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+sehirler\s+WHERE\s+sehir_adi\s+LIKE\s+['"]_stanbul['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! Alt tire (_) tek karakter jokeri doğru kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM sehirler WHERE sehir_adi LIKE '_stanbul';' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: NOT LIKE OPERATÖRÜ",
      title: "5. Soru: Deseni İçermeyenler",
      prompt: "<code>kitaplar</code> tablosundan başlığında 'Roman' geçmeyen kitapları listele (<code>WHERE baslik NOT LIKE '%Roman%'</code>).",
      presetCode: "-- Başlığında Roman geçmeyen kitapları getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE baslik NOT LIKE '%Roman%'", "SELECT * FROM kitaplar"],
      hint: "SELECT * FROM kitaplar WHERE baslik NOT LIKE '%Roman%';",
      solution: "SELECT * FROM kitaplar WHERE baslik NOT LIKE '%Roman%';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+kitaplar\s+WHERE\s+baslik\s+NOT\s+LIKE\s+['"]%Roman%['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 5. Modül tamamlandı, gökdelenler inşa edildi! 🏢✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM kitaplar WHERE baslik NOT LIKE '%Roman%';' yazın." };
      }
    }
  ],

  sql_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KÜME OPERATÖRÜ (IN)",
      title: "1. Soru: Şehir Listesinde Olanlar",
      prompt: "<code>musteriler</code> tablosundan şehri 'İstanbul', 'Ankara' veya 'İzmir' olanları <code>IN</code> operatörü kullanarak listele.",
      presetCode: "-- İstanbul, Ankara veya İzmir'de olan müşteriler:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE sehir IN ('İstanbul', 'Ankara', 'İzmir')", "SELECT * FROM musteriler"],
      hint: "SELECT * FROM musteriler WHERE sehir IN ('İstanbul', 'Ankara', 'İzmir');",
      solution: "SELECT * FROM musteriler WHERE sehir IN ('İstanbul', 'Ankara', 'İzmir');",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+musteriler\s+WHERE\s+sehir\s+IN\s*\(\s*['"]İstanbul['"]\s*,\s*['"]Ankara['"]\s*,\s*['"]İzmir['"]\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! IN operatörü doğru liste değerleriyle yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM musteriler WHERE sehir IN ('İstanbul', 'Ankara', 'İzmir');' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: SAYISAL ARALIK (BETWEEN)",
      title: "2. Soru: Fiyat Aralığı Filtreleme",
      prompt: "<code>urunler</code> tablosundan fiyatı 100 ile 500 (dahil) arasında olan ürünleri <code>BETWEEN</code> kullanarak seç.",
      presetCode: "-- Fiyatı 100 ile 500 arasında olanlar:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE fiyat BETWEEN 100 AND 500", "SELECT * FROM urunler", "BETWEEN 100 AND 500"],
      hint: "SELECT * FROM urunler WHERE fiyat BETWEEN 100 AND 500;",
      solution: "SELECT * FROM urunler WHERE fiyat BETWEEN 100 AND 500;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+urunler\s+WHERE\s+fiyat\s+BETWEEN\s+100\s+AND\s+500\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! BETWEEN 100 AND 500 aralığı başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM urunler WHERE fiyat BETWEEN 100 AND 500;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: KÜMEDE OLMAYANLAR (NOT IN)",
      title: "3. Soru: Departman Dışındakiler",
      prompt: "<code>calisanlar</code> tablosundan departmanı 'İK' veya 'Pazarlama' olmayanları <code>NOT IN</code> ile getir.",
      presetCode: "-- İK ve Pazarlama harici çalışanlar:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE departman NOT IN ('İK', 'Pazarlama')", "SELECT * FROM calisanlar"],
      hint: "SELECT * FROM calisanlar WHERE departman NOT IN ('İK', 'Pazarlama');",
      solution: "SELECT * FROM calisanlar WHERE departman NOT IN ('İK', 'Pazarlama');",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+calisanlar\s+WHERE\s+departman\s+NOT\s+IN\s*\(\s*['"]İK['"]\s*,\s*['"]Pazarlama['"]\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! NOT IN operatörü doğru liste ile çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM calisanlar WHERE departman NOT IN ('İK', 'Pazarlama');' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: TARİH ARALIĞI (BETWEEN DATES)",
      title: "4. Soru: 2023 Yılı Siparişleri",
      prompt: "<code>siparisler</code> tablosundan '2023-01-01' ile '2023-12-31' tarihleri arasındaki siparişleri seç.",
      presetCode: "-- 2023 yılı siparişlerini getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE siparis_tarihi BETWEEN '2023-01-01' AND '2023-12-31'", "SELECT * FROM siparisler"],
      hint: "SELECT * FROM siparisler WHERE siparis_tarihi BETWEEN '2023-01-01' AND '2023-12-31';",
      solution: "SELECT * FROM siparisler WHERE siparis_tarihi BETWEEN '2023-01-01' AND '2023-12-31';",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+siparisler\s+WHERE\s+siparis_tarihi\s+BETWEEN\s+['"]2023-01-01['"]\s+AND\s+['"]2023-12-31['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! Tarih aralığı BETWEEN ile doğru formatlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM siparisler WHERE siparis_tarihi BETWEEN '2023-01-01' AND '2023-12-31';' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: ARALIK DIŞINDAKİLER (NOT BETWEEN)",
      title: "5. Soru: Yaş Aralığı Dışındakiler",
      prompt: "<code>personeller</code> tablosundan yaşı 20 ile 30 arasında OLMAYAN (<code>NOT BETWEEN 20 AND 30</code>) kayıtları getir.",
      presetCode: "-- Yaşı 20-30 arasında olmayanlar:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE yas NOT BETWEEN 20 AND 30", "SELECT * FROM personeller"],
      hint: "SELECT * FROM personeller WHERE yas NOT BETWEEN 20 AND 30;",
      solution: "SELECT * FROM personeller WHERE yas NOT BETWEEN 20 AND 30;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+personeller\s+WHERE\s+yas\s+NOT\s+BETWEEN\s+20\s+AND\s+30\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 6. Modül tamamlandı, sinema salonu açıldı! 🎬✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM personeller WHERE yas NOT BETWEEN 20 AND 30;' yazın." };
      }
    }
  ],

  sql_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: NULL DEĞER KONTROLÜ (IS NULL)",
      title: "1. Soru: Telefonu Boş Olanlar",
      prompt: "<code>musteriler</code> tablosundan telefon numarası girilmemiş (<code>telefon IS NULL</code>) müşterileri seç.",
      presetCode: "-- Telefonu boş olanları getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE telefon IS NULL", "SELECT * FROM musteriler", "IS NULL"],
      hint: "SELECT * FROM musteriler WHERE telefon IS NULL;",
      solution: "SELECT * FROM musteriler WHERE telefon IS NULL;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+musteriler\s+WHERE\s+telefon\s+IS\s+NULL\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! IS NULL doğru şekilde kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM musteriler WHERE telefon IS NULL;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DOLU DEĞERLER (IS NOT NULL)",
      title: "2. Soru: Primi Olan Çalışanlar",
      prompt: "<code>calisanlar</code> tablosundan prim alanı boş olmayan (<code>prim IS NOT NULL</code>) kayıtları seç.",
      presetCode: "-- Primi olanları listele:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE prim IS NOT NULL", "SELECT * FROM calisanlar", "IS NOT NULL"],
      hint: "SELECT * FROM calisanlar WHERE prim IS NOT NULL;",
      solution: "SELECT * FROM calisanlar WHERE prim IS NOT NULL;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+calisanlar\s+WHERE\s+prim\s+IS\s+NOT\s+NULL\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! IS NOT NULL ile dolu kayıtlar çekildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM calisanlar WHERE prim IS NOT NULL;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: VARSAYILAN DEĞER (COALESCE)",
      title: "3. Soru: NULL Yerine Varsayılan Değer",
      prompt: "<code>kullanicilar</code> tablosundan <code>ad</code> sütununu ve eğer email NULL ise 'Belirtilmedi' yazan <code>COALESCE(email, 'Belirtilmedi') AS iletisim</code> sütununu seç.",
      presetCode: "-- ad ve COALESCE iletisim sütunlarını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT ad, COALESCE(email, 'Belirtilmedi') AS iletisim FROM kullanicilar;", "COALESCE(email, 'Belirtilmedi') AS iletisim"],
      hint: "SELECT ad, COALESCE(email, 'Belirtilmedi') AS iletisim FROM kullanicilar;",
      solution: "SELECT ad, COALESCE(email, 'Belirtilmedi') AS iletisim FROM kullanicilar;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+ad\s*,\s*COALESCE\s*\(\s*email\s*,\s*['"]Belirtilmedi['"]\s*\)\s+AS\s+iletisim\s+FROM\s+kullanicilar\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! COALESCE fonksiyonu başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT ad, COALESCE(email, 'Belirtilmedi') AS iletisim FROM kullanicilar;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: TAKİP NUMARASI BOŞ SİPARİŞLER",
      title: "4. Soru: Kargo Takipsiz Siparişler",
      prompt: "<code>siparisler</code> tablosundan <code>kargo_takip_no IS NULL</code> olan siparişleri listele.",
      presetCode: "-- Kargo takip no boş olanları getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["WHERE kargo_takip_no IS NULL", "SELECT * FROM siparisler"],
      hint: "SELECT * FROM siparisler WHERE kargo_takip_no IS NULL;",
      solution: "SELECT * FROM siparisler WHERE kargo_takip_no IS NULL;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+siparisler\s+WHERE\s+kargo_takip_no\s+IS\s+NULL\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! Takip numarası eksik kayıtlar filtrelendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM siparisler WHERE kargo_takip_no IS NULL;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DENEYİMLİ ADAYLAR",
      title: "5. Soru: Deneyimi Girilmiş Adaylar",
      prompt: "<code>adaylar</code> tablosundan deneyim yılı boş olmayanların (<code>deneyim_yili IS NOT NULL</code>) <code>ad</code> ve <code>soyad</code> bilgilerini seç.",
      presetCode: "-- Deneyimi olan adayların ad ve soyadını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT ad, soyad FROM adaylar", "WHERE deneyim_yili IS NOT NULL", ";"],
      hint: "SELECT ad, soyad FROM adaylar WHERE deneyim_yili IS NOT NULL;",
      solution: "SELECT ad, soyad FROM adaylar WHERE deneyim_yili IS NOT NULL;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+ad\s*,\s*soyad\s+FROM\s+adaylar\s+WHERE\s+deneyim_yili\s+IS\s+NOT\s+NULL\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 7. Modül tamamlandı, lunapark açıldı! 🎡✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT ad, soyad FROM adaylar WHERE deneyim_yili IS NOT NULL;' yazın." };
      }
    }
  ],

  sql_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: SAYMA FONKSİYONU (COUNT)",
      title: "1. Soru: Toplam Kullanıcı Sayısı",
      prompt: "<code>kullanicilar</code> tablosundaki toplam satır sayısını <code>COUNT(*) AS toplam_kullanici</code> olarak hesapla.",
      presetCode: "-- Toplam kullanıcı sayısını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT COUNT(*) AS toplam_kullanici FROM kullanicilar;", "COUNT(*)", "AS toplam_kullanici"],
      hint: "SELECT COUNT(*) AS toplam_kullanici FROM kullanicilar;",
      solution: "SELECT COUNT(*) AS toplam_kullanici FROM kullanicilar;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+COUNT\s*\(\s*\*\s*\)\s+AS\s+toplam_kullanici\s+FROM\s+kullanicilar\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! COUNT(*) toplama fonksiyonu doğru çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT COUNT(*) AS toplam_kullanici FROM kullanicilar;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: TOPLAM DEĞER (SUM)",
      title: "2. Soru: Toplam Maaş Gideri",
      prompt: "<code>calisanlar</code> tablosundaki tüm çalışanların maaş toplamını <code>SUM(maas) AS toplam_maas</code> olarak hesapla.",
      presetCode: "-- Toplam maaş tutarını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT SUM(maas) AS toplam_maas FROM calisanlar;", "SUM(maas)", "AS toplam_maas"],
      hint: "SELECT SUM(maas) AS toplam_maas FROM calisanlar;",
      solution: "SELECT SUM(maas) AS toplam_maas FROM calisanlar;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+SUM\s*\(\s*maas\s*\)\s+AS\s+toplam_maas\s+FROM\s+calisanlar\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! SUM() ile toplam doğru hesaplandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT SUM(maas) AS toplam_maas FROM calisanlar;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: ORTALAMA HESAPLAMA (AVG)",
      title: "3. Soru: Ortalama Ürün Fiyatı",
      prompt: "<code>urunler</code> tablosundaki ürünlerin ortalama fiyatını <code>AVG(fiyat) AS ortalama_fiyat</code> olarak hesapla.",
      presetCode: "-- Ortalama fiyatı getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT AVG(fiyat) AS ortalama_fiyat FROM urunler;", "AVG(fiyat)", "AS ortalama_fiyat"],
      hint: "SELECT AVG(fiyat) AS ortalama_fiyat FROM urunler;",
      solution: "SELECT AVG(fiyat) AS ortalama_fiyat FROM urunler;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+AVG\s*\(\s*fiyat\s*\)\s+AS\s+ortalama_fiyat\s+FROM\s+urunler\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! AVG() ortalama fonksiyonu başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT AVG(fiyat) AS ortalama_fiyat FROM urunler;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: MİNİMUM & MAKSİMUM (MIN, MAX)",
      title: "4. Soru: En Ucuz ve En Pahalı Ürün",
      prompt: "<code>urunler</code> tablosundan en ucuz ve en pahalı fiyatı seç: <code>SELECT MIN(fiyat) AS en_ucuz, MAX(fiyat) AS en_pahali FROM urunler;</code>.",
      presetCode: "-- En ucuz ve en pahalı fiyatı hesapla:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT MIN(fiyat) AS en_ucuz, MAX(fiyat) AS en_pahali FROM urunler;", "MIN(fiyat) AS en_ucuz", "MAX(fiyat) AS en_pahali"],
      hint: "SELECT MIN(fiyat) AS en_ucuz, MAX(fiyat) AS en_pahali FROM urunler;",
      solution: "SELECT MIN(fiyat) AS en_ucuz, MAX(fiyat) AS en_pahali FROM urunler;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+MIN\s*\(\s*fiyat\s*\)\s+AS\s+en_ucuz\s*,\s*MAX\s*\(\s*fiyat\s*\)\s+AS\s+en_pahali\s+FROM\s+urunler\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! MIN ve MAX fonksiyonları birlikte başarıyla çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT MIN(fiyat) AS en_ucuz, MAX(fiyat) AS en_pahali FROM urunler;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: TEKRARSIZ SAYMA (COUNT DISTINCT)",
      title: "5. Soru: Farklı Şehir Sayısı",
      prompt: "<code>musteriler</code> tablosunda kaç farklı şehir olduğunu <code>COUNT(DISTINCT sehir) AS farkli_sehir_sayisi</code> sorgusu ile hesapla.",
      presetCode: "-- Benzersiz şehir sayısını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT COUNT(DISTINCT sehir) AS farkli_sehir_sayisi FROM musteriler;", "COUNT(DISTINCT sehir)"],
      hint: "SELECT COUNT(DISTINCT sehir) AS farkli_sehir_sayisi FROM musteriler;",
      solution: "SELECT COUNT(DISTINCT sehir) AS farkli_sehir_sayisi FROM musteriler;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+COUNT\s*\(\s*DISTINCT\s+sehir\s*\)\s+AS\s+farkli_sehir_sayisi\s+FROM\s+musteriler\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 8. Modül tamamlandı, yönetim sarayı kuruldu! 🏛️✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT COUNT(DISTINCT sehir) AS farkli_sehir_sayisi FROM musteriler;' yazın." };
      }
    }
  ],

  sql_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: KATEGORİ BAZLI GRUPLAMA",
      title: "1. Soru: Departmana Göre Çalışan Sayısı",
      prompt: "<code>personeller</code> tablosundan departmanları gruplayarak her departmandaki kişi sayısını hesapla: <code>SELECT departman, COUNT(*) AS calisan_sayisi FROM personeller GROUP BY departman;</code>.",
      presetCode: "-- Departman bazlı çalışan sayısını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT departman, COUNT(*) AS calisan_sayisi FROM personeller GROUP BY departman;", "GROUP BY departman"],
      hint: "SELECT departman, COUNT(*) AS calisan_sayisi FROM personeller GROUP BY departman;",
      solution: "SELECT departman, COUNT(*) AS calisan_sayisi FROM personeller GROUP BY departman;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+departman\s*,\s*COUNT\s*\(\s*\*\s*\)\s+AS\s+calisan_sayisi\s+FROM\s+personeller\s+GROUP\s+BY\s+departman\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! GROUP BY ile departman gruplaması yapıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT departman, COUNT(*) AS calisan_sayisi FROM personeller GROUP BY departman;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: GRUP ORTALAMASI (GROUP BY AVG)",
      title: "2. Soru: Kategori Bazlı Ortalama Fiyat",
      prompt: "<code>urunler</code> tablosundan her kategorinin ortalama fiyatını getir: <code>SELECT kategori, AVG(fiyat) AS ortalama_fiyat FROM urunler GROUP BY kategori;</code>.",
      presetCode: "-- Kategori bazlı ortalama fiyat:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT kategori, AVG(fiyat) AS ortalama_fiyat FROM urunler GROUP BY kategori;", "GROUP BY kategori"],
      hint: "SELECT kategori, AVG(fiyat) AS ortalama_fiyat FROM urunler GROUP BY kategori;",
      solution: "SELECT kategori, AVG(fiyat) AS ortalama_fiyat FROM urunler GROUP BY kategori;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+kategori\s*,\s*AVG\s*\(\s*fiyat\s*\)\s+AS\s+ortalama_fiyat\s+FROM\s+urunler\s+GROUP\s+BY\s+kategori\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Kategori bazlı ortalama hesaplandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT kategori, AVG(fiyat) AS ortalama_fiyat FROM urunler GROUP BY kategori;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: GRUP FİLTRESİ (HAVING)",
      title: "3. Soru: 5'ten Fazla Müşterisi Olan Şehirler",
      prompt: "<code>musteriler</code> tablosunda müşteri sayısı 5'ten fazla olan şehirleri <code>HAVING COUNT(*) &gt; 5</code> şartı ile filtrele.",
      presetCode: "-- Müşteri sayısı > 5 olan şehirleri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir HAVING COUNT(*) > 5;", "HAVING COUNT(*) > 5"],
      hint: "SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir HAVING COUNT(*) > 5;",
      solution: "SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir HAVING COUNT(*) > 5;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+sehir\s*,\s*COUNT\s*\(\s*\*\s*\)\s+AS\s+musteri_sayisi\s+FROM\s+musteriler\s+GROUP\s+BY\s+sehir\s+HAVING\s+COUNT\s*\(\s*\*\s*\)\s*>\s*5\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! HAVING grup filtresi doğru uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT sehir, COUNT(*) AS musteri_sayisi FROM musteriler GROUP BY sehir HAVING COUNT(*) > 5;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: HAVING İLE TOPLAM ŞARTI",
      title: "4. Soru: Bütçesi 100.000 Üzeri Departmanlar",
      prompt: "<code>calisanlar</code> tablosundan toplam maaş bütçesi 100000 veya üzeri olan departmanları getir: <code>SELECT departman, SUM(maas) AS toplam_butce FROM calisanlar GROUP BY departman HAVING SUM(maas) >= 100000;</code>.",
      presetCode: "-- Toplam maaşı >= 100000 olan departmanlar:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT departman, SUM(maas) AS toplam_butce FROM calisanlar GROUP BY departman HAVING SUM(maas) >= 100000;", "HAVING SUM(maas) >= 100000"],
      hint: "SELECT departman, SUM(maas) AS toplam_butce FROM calisanlar GROUP BY departman HAVING SUM(maas) >= 100000;",
      solution: "SELECT departman, SUM(maas) AS toplam_butce FROM calisanlar GROUP BY departman HAVING SUM(maas) >= 100000;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+departman\s*,\s*SUM\s*\(\s*maas\s*\)\s+AS\s+toplam_butce\s+FROM\s+calisanlar\s+GROUP\s+BY\s+departman\s+HAVING\s+SUM\s*\(\s*maas\s*\)\s*>=\s*100000\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! HAVING SUM(...) filtresi başarıyla çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT departman, SUM(maas) AS toplam_butce FROM calisanlar GROUP BY departman HAVING SUM(maas) >= 100000;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: WHERE VE HAVING BİRLİKTE",
      title: "5. Soru: Stoktaki Ürünler İçin Grup Filtresi",
      prompt: "<code>urunler</code> tablosundan stoğu 0'dan büyük olanları alıp kategorilerine göre grupla ve en az 3 ürünü olanları seç: <code>SELECT kategori, COUNT(*) AS urun_adedi FROM urunler WHERE stok > 0 GROUP BY kategori HAVING COUNT(*) >= 3;</code>.",
      presetCode: "-- WHERE stok > 0 GROUP BY kategori HAVING COUNT(*) >= 3:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT kategori, COUNT(*) AS urun_adedi FROM urunler WHERE stok > 0 GROUP BY kategori HAVING COUNT(*) >= 3;", "WHERE stok > 0", "HAVING COUNT(*) >= 3"],
      hint: "SELECT kategori, COUNT(*) AS urun_adedi FROM urunler WHERE stok > 0 GROUP BY kategori HAVING COUNT(*) >= 3;",
      solution: "SELECT kategori, COUNT(*) AS urun_adedi FROM urunler WHERE stok > 0 GROUP BY kategori HAVING COUNT(*) >= 3;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+kategori\s*,\s*COUNT\s*\(\s*\*\s*\)\s+AS\s+urun_adedi\s+FROM\s+urunler\s+WHERE\s+stok\s*>\s*0\s+GROUP\s+BY\s+kategori\s+HAVING\s+COUNT\s*\(\s*\*\s*\)\s*>=\s*3\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 9. Modül tamamlandı, şehir hastanesi açıldı! 🏥✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT kategori, COUNT(*) AS urun_adedi FROM urunler WHERE stok > 0 GROUP BY kategori HAVING COUNT(*) >= 3;' yazın." };
      }
    }
  ],

  sql_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: YENİ SATIR EKLEME (INSERT INTO)",
      title: "1. Soru: Yeni Müşteri Kaydı",
      prompt: "<code>musteriler</code> tablosuna <code>ad</code>: 'Ahmet', <code>soyad</code>: 'Yılmaz', <code>sehir</code>: 'Ankara' değerleriyle yeni bir kayıt ekle.",
      presetCode: "-- Yeni müşteri ekle:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["INSERT INTO musteriler (ad, soyad, sehir) VALUES ('Ahmet', 'Yılmaz', 'Ankara');", "INSERT INTO", "VALUES"],
      hint: "INSERT INTO musteriler (ad, soyad, sehir) VALUES ('Ahmet', 'Yılmaz', 'Ankara');",
      solution: "INSERT INTO musteriler (ad, soyad, sehir) VALUES ('Ahmet', 'Yılmaz', 'Ankara');",
      validator: (code) => {
        const clean = code.trim();
        if (/^INSERT\s+INTO\s+musteriler\s*\(\s*ad\s*,\s*soyad\s*,\s*sehir\s*\)\s*VALUES\s*\(\s*['"]Ahmet['"]\s*,\s*['"]Yılmaz['"]\s*,\s*['"]Ankara['"]\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! INSERT INTO ile yeni müşteri başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'INSERT INTO musteriler (ad, soyad, sehir) VALUES ('Ahmet', 'Yılmaz', 'Ankara');' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: ÜRÜN EKLEME",
      title: "2. Soru: Yeni Ürün Tanımlama",
      prompt: "<code>urunler</code> tablosuna <code>urun_adi</code>: 'Kablosuz Mouse', <code>fiyat</code>: 450, <code>stok</code>: 25 değerlerini ekle.",
      presetCode: "-- Yeni ürün kaydı:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["INSERT INTO urunler (urun_adi, fiyat, stok) VALUES ('Kablosuz Mouse', 450, 25);", "('Kablosuz Mouse', 450, 25)"],
      hint: "INSERT INTO urunler (urun_adi, fiyat, stok) VALUES ('Kablosuz Mouse', 450, 25);",
      solution: "INSERT INTO urunler (urun_adi, fiyat, stok) VALUES ('Kablosuz Mouse', 450, 25);",
      validator: (code) => {
        const clean = code.trim();
        if (/^INSERT\s+INTO\s+urunler\s*\(\s*urun_adi\s*,\s*fiyat\s*,\s*stok\s*\)\s*VALUES\s*\(\s*['"]Kablosuz Mouse['"]\s*,\s*450\s*,\s*25\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Ürün verisi doğru tiplerle eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'INSERT INTO urunler (urun_adi, fiyat, stok) VALUES ('Kablosuz Mouse', 450, 25);' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: TÜM SÜTUNLARA SIRAYLA EKLEME",
      title: "3. Soru: Tam Değerli Kayıt",
      prompt: "<code>calisanlar</code> tablosuna sırasıyla tüm sütunlar için: <code>1, 'Mehmet', 'Kaya', 32000, 'Yazılım'</code> değerlerini ekle (sütun ismi yazmadan).",
      presetCode: "-- calisanlar tablosuna tüm değerleri ekle:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["INSERT INTO calisanlar VALUES (1, 'Mehmet', 'Kaya', 32000, 'Yazılım');", "INSERT INTO calisanlar VALUES"],
      hint: "INSERT INTO calisanlar VALUES (1, 'Mehmet', 'Kaya', 32000, 'Yazılım');",
      solution: "INSERT INTO calisanlar VALUES (1, 'Mehmet', 'Kaya', 32000, 'Yazılım');",
      validator: (code) => {
        const clean = code.trim();
        if (/^INSERT\s+INTO\s+calisanlar\s+VALUES\s*\(\s*1\s*,\s*['"]Mehmet['"]\s*,\s*['"]Kaya['"]\s*,\s*32000\s*,\s*['"]Yazılım['"]\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! Tüm sütunlar için doğrudan VALUES girişi yapıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'INSERT INTO calisanlar VALUES (1, 'Mehmet', 'Kaya', 32000, 'Yazılım');' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: GÖREV TANIMLAMA",
      title: "4. Soru: Görev Kaydı",
      prompt: "<code>gorevler</code> tablosuna <code>baslik</code>: 'Veritabanı Yedekle', <code>durum</code>: 'Bekliyor' bilgilerini ekle.",
      presetCode: "-- gorevler tablosuna yeni görev ekle:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["INSERT INTO gorevler (baslik, durum) VALUES ('Veritabanı Yedekle', 'Bekliyor');", "INSERT INTO gorevler"],
      hint: "INSERT INTO gorevler (baslik, durum) VALUES ('Veritabanı Yedekle', 'Bekliyor');",
      solution: "INSERT INTO gorevler (baslik, durum) VALUES ('Veritabanı Yedekle', 'Bekliyor');",
      validator: (code) => {
        const clean = code.trim();
        if (/^INSERT\s+INTO\s+gorevler\s*\(\s*baslik\s*,\s*durum\s*\)\s*VALUES\s*\(\s*['"]Veritabanı Yedekle['"]\s*,\s*['"]Bekliyor['"]\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! Görev kaydı başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'INSERT INTO gorevler (baslik, durum) VALUES ('Veritabanı Yedekle', 'Bekliyor');' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: ÇOKLU SATIR EKLEME (BATCH INSERT)",
      title: "5. Soru: Toplu Kategori Ekleme",
      prompt: "<code>kategoriler</code> tablosuna tek sorguda 3 satır ekle: <code>('Elektronik'), ('Mobilya'), ('Giyim')</code>.",
      presetCode: "-- Toplu 3 kategori ekle:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["INSERT INTO kategoriler (kategori_adi) VALUES ('Elektronik'), ('Mobilya'), ('Giyim');", "VALUES ('Elektronik'), ('Mobilya'), ('Giyim')"],
      hint: "INSERT INTO kategoriler (kategori_adi) VALUES ('Elektronik'), ('Mobilya'), ('Giyim');",
      solution: "INSERT INTO kategoriler (kategori_adi) VALUES ('Elektronik'), ('Mobilya'), ('Giyim');",
      validator: (code) => {
        const clean = code.trim();
        if (/^INSERT\s+INTO\s+kategoriler\s*\(\s*kategori_adi\s*\)\s*VALUES\s*\(\s*['"]Elektronik['"]\s*\)\s*,\s*\(\s*['"]Mobilya['"]\s*\)\s*,\s*\(\s*['"]Giyim['"]\s*\)\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 10. Modül tamamlandı, alışveriş merkezi açıldı! 🛍️✓" };
        }
        return { ok: false, msg: "Hata: 'INSERT INTO kategoriler (kategori_adi) VALUES ('Elektronik'), ('Mobilya'), ('Giyim');' yazın." };
      }
    }
  ],

  sql_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: VERİ GÜNCELLEME (UPDATE)",
      title: "1. Soru: Maaş Güncelleme",
      prompt: "<code>calisanlar</code> tablosunda <code>id = 1</code> olan çalışanın maaşını 35000 olarak güncelle: <code>UPDATE calisanlar SET maas = 35000 WHERE id = 1;</code>.",
      presetCode: "-- id = 1 için maas = 35000 güncelle:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["UPDATE calisanlar SET maas = 35000 WHERE id = 1;", "UPDATE", "SET", "WHERE id = 1"],
      hint: "UPDATE calisanlar SET maas = 35000 WHERE id = 1;",
      solution: "UPDATE calisanlar SET maas = 35000 WHERE id = 1;",
      validator: (code) => {
        const clean = code.trim();
        if (/^UPDATE\s+calisanlar\s+SET\s+maas\s*=\s*35000\s+WHERE\s+id\s*=\s*1\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! UPDATE sorgusu WHERE şartıyla güvenle çalıştırıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'UPDATE calisanlar SET maas = 35000 WHERE id = 1;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: ÇOKLU SÜTUN GÜNCELLEME",
      title: "2. Soru: Stok ve Durum Güncellemesi",
      prompt: "<code>urunler</code> tablosunda <code>id = 10</code> olan ürünün stoğunu 0, durumunu 'Tükendi' yap: <code>UPDATE urunler SET stok = 0, durum = 'Tükendi' WHERE id = 10;</code>.",
      presetCode: "-- id = 10 için stok = 0 ve durum = 'Tükendi':\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["UPDATE urunler SET stok = 0, durum = 'Tükendi' WHERE id = 10;", "SET stok = 0, durum = 'Tükendi'"],
      hint: "UPDATE urunler SET stok = 0, durum = 'Tükendi' WHERE id = 10;",
      solution: "UPDATE urunler SET stok = 0, durum = 'Tükendi' WHERE id = 10;",
      validator: (code) => {
        const clean = code.trim();
        if (/^UPDATE\s+urunler\s+SET\s+stok\s*=\s*0\s*,\s*durum\s*=\s*['"]Tükendi['"]\s+WHERE\s+id\s*=\s*10\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! İki sütun aynı anda güncellendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'UPDATE urunler SET stok = 0, durum = 'Tükendi' WHERE id = 10;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: SATIR SİLME (DELETE)",
      title: "3. Soru: Belirli Bir Kaydı Silme",
      prompt: "<code>musteriler</code> tablosundan <code>id = 5</code> olan müşteriyi sil: <code>DELETE FROM musteriler WHERE id = 5;</code>.",
      presetCode: "-- id = 5 müşterisini sil:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["DELETE FROM musteriler WHERE id = 5;", "DELETE FROM", "WHERE id = 5"],
      hint: "DELETE FROM musteriler WHERE id = 5;",
      solution: "DELETE FROM musteriler WHERE id = 5;",
      validator: (code) => {
        const clean = code.trim();
        if (/^DELETE\s+FROM\s+musteriler\s+WHERE\s+id\s*=\s*5\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! DELETE sorgusu WHERE ile güvenli şekilde tamamlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'DELETE FROM musteriler WHERE id = 5;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: KOŞULLU TOPLU SİLME",
      title: "4. Soru: İptal Siparişleri Temizleme",
      prompt: "<code>siparisler</code> tablosundan durumu 'İptal' olan tüm siparişleri sil: <code>DELETE FROM siparisler WHERE durum = 'İptal';</code>.",
      presetCode: "-- İptal durumundaki siparişleri sil:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["DELETE FROM siparisler WHERE durum = 'İptal';", "WHERE durum = 'İptal'"],
      hint: "DELETE FROM siparisler WHERE durum = 'İptal';",
      solution: "DELETE FROM siparisler WHERE durum = 'İptal';",
      validator: (code) => {
        const clean = code.trim();
        if (/^DELETE\s+FROM\s+siparisler\s+WHERE\s+durum\s*=\s*['"]İptal['"]\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! İptal edilen kayıtlar başarıyla silindi. ✓" };
        }
        return { ok: false, msg: "Hata: 'DELETE FROM siparisler WHERE durum = 'İptal';' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: TABLOYU SIFIRLAMA (TRUNCATE)",
      title: "5. Soru: Geçici Logları Hızlıca Temizleme",
      prompt: "<code>gecici_loglar</code> tablosunun içindeki tüm verileri hızlıca sıfırlamak için <code>TRUNCATE TABLE gecici_loglar;</code> komutunu çalıştır.",
      presetCode: "-- gecici_loglar tablosunu sıfırla:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["TRUNCATE TABLE gecici_loglar;", "TRUNCATE TABLE", "gecici_loglar;"],
      hint: "TRUNCATE TABLE gecici_loglar;",
      solution: "TRUNCATE TABLE gecici_loglar;",
      validator: (code) => {
        const clean = code.trim();
        if (/^TRUNCATE(\s+TABLE)?\s+gecici_loglar\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 11. Modül tamamlandı, hızlı tren garı açıldı! 🚄✓" };
        }
        return { ok: false, msg: "Hata: 'TRUNCATE TABLE gecici_loglar;' yazın." };
      }
    }
  ],

  sql_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: İÇ BİRLEŞTİRME (INNER JOIN)",
      title: "1. Soru: Sipariş ve Müşteri Eşleştirme",
      prompt: "<code>siparisler</code> tablosu ile <code>musteriler</code> tablosunu <code>siparisler.musteri_id = musteriler.id</code> şartı ile INNER JOIN yaparak bağla.",
      presetCode: "-- siparisler ve musteriler tablolarını birleştir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT * FROM siparisler INNER JOIN musteriler ON siparisler.musteri_id = musteriler.id;", "INNER JOIN musteriler ON", "siparisler.musteri_id = musteriler.id"],
      hint: "SELECT * FROM siparisler INNER JOIN musteriler ON siparisler.musteri_id = musteriler.id;",
      solution: "SELECT * FROM siparisler INNER JOIN musteriler ON siparisler.musteri_id = musteriler.id;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+\*\s+FROM\s+siparisler\s+INNER\s+JOIN\s+musteriler\s+ON\s+siparisler\.musteri_id\s*=\s*musteriler\.id\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! INNER JOIN ilişkisi başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT * FROM siparisler INNER JOIN musteriler ON siparisler.musteri_id = musteriler.id;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: TABLO TAKMA ADLARI (ALIAS)",
      title: "2. Soru: Kısaltma ile Sütun Seçimi",
      prompt: "<code>siparisler s</code> ve <code>musteriler m</code> takma adlarını kullanarak: <code>SELECT s.id, m.ad, s.tutar FROM siparisler AS s INNER JOIN musteriler AS m ON s.musteri_id = m.id;</code> sorgusunu yaz.",
      presetCode: "-- Tablo aliasları (s ve m) ile sütunları seç:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT s.id, m.ad, s.tutar FROM siparisler AS s INNER JOIN musteriler AS m ON s.musteri_id = m.id;", "AS s INNER JOIN musteriler AS m"],
      hint: "SELECT s.id, m.ad, s.tutar FROM siparisler AS s INNER JOIN musteriler AS m ON s.musteri_id = m.id;",
      solution: "SELECT s.id, m.ad, s.tutar FROM siparisler AS s INNER JOIN musteriler AS m ON s.musteri_id = m.id;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+s\.id\s*,\s*m\.ad\s*,\s*s\.tutar\s+FROM\s+siparisler(\s+AS)?\s+s\s+INNER\s+JOIN\s+musteriler(\s+AS)?\s+m\s+ON\s+s\.musteri_id\s*=\s*m\.id\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Tablo takma adları (Alias) doğru kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT s.id, m.ad, s.tutar FROM siparisler AS s INNER JOIN musteriler AS m ON s.musteri_id = m.id;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ÇALIŞAN VE DEPARTMAN",
      title: "3. Soru: Departman İsimlerini Getirme",
      prompt: "<code>calisanlar</code> ve <code>departmanlar</code> tablolarını birleştirerek <code>calisanlar.ad</code> ve <code>departmanlar.departman_adi</code> sütunlarını seç (<code>ON calisanlar.dept_id = departmanlar.id</code>).",
      presetCode: "-- Çalışan adı ve departman adını getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT calisanlar.ad, departmanlar.departman_adi FROM calisanlar INNER JOIN departmanlar ON calisanlar.dept_id = departmanlar.id;", "calisanlar.dept_id = departmanlar.id"],
      hint: "SELECT calisanlar.ad, departmanlar.departman_adi FROM calisanlar INNER JOIN departmanlar ON calisanlar.dept_id = departmanlar.id;",
      solution: "SELECT calisanlar.ad, departmanlar.departman_adi FROM calisanlar INNER JOIN departmanlar ON calisanlar.dept_id = departmanlar.id;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+calisanlar\.ad\s*,\s*departmanlar\.departman_adi\s+FROM\s+calisanlar\s+INNER\s+JOIN\s+departmanlar\s+ON\s+calisanlar\.dept_id\s*=\s*departmanlar\.id\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! Çalışan ve departman tabloları başarıyla bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT calisanlar.ad, departmanlar.departman_adi FROM calisanlar INNER JOIN departmanlar ON calisanlar.dept_id = departmanlar.id;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: JOIN İLE WHERE FİLTRESİ",
      title: "4. Soru: Fiyatı 100 Üzeri Olan Ürün Kategorileri",
      prompt: "<code>urunler u</code> ve <code>kategoriler k</code> tablolarını bağlayıp <code>u.fiyat &gt; 100</code> olan ürünlerin <code>u.urun_adi</code> ve <code>k.kategori_adi</code> bilgilerini getir.",
      presetCode: "-- Fiyatı 100'den büyük ürünlerin adı ve kategori adı:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT u.urun_adi, k.kategori_adi FROM urunler AS u INNER JOIN kategoriler AS k ON u.kategori_id = k.id WHERE u.fiyat > 100;", "WHERE u.fiyat > 100"],
      hint: "SELECT u.urun_adi, k.kategori_adi FROM urunler AS u INNER JOIN kategoriler AS k ON u.kategori_id = k.id WHERE u.fiyat > 100;",
      solution: "SELECT u.urun_adi, k.kategori_adi FROM urunler AS u INNER JOIN kategoriler AS k ON u.kategori_id = k.id WHERE u.fiyat > 100;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+u\.urun_adi\s*,\s*k\.kategori_adi\s+FROM\s+urunler(\s+AS)?\s+u\s+INNER\s+JOIN\s+kategoriler(\s+AS)?\s+k\s+ON\s+u\.kategori_id\s*=\s*k\.id\s+WHERE\s+u\.fiyat\s*>\s*100\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! JOIN ve WHERE kombinasyonu kusursuz çalıştı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT u.urun_adi, k.kategori_adi FROM urunler AS u INNER JOIN kategoriler AS k ON u.kategori_id = k.id WHERE u.fiyat > 100;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ÜÇ TABLOYU BİRLEŞTİRME",
      title: "5. Soru: Öğrenci, Not ve Ders Birleştirme",
      prompt: "<code>notlar n</code> tablosunu <code>ogrenciler o</code> ve <code>dersler d</code> ile bağlayıp <code>o.ad, d.ders_adi, n.puan</code> sütunlarını seç.",
      presetCode: "-- 3 tabloyu bağla:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT o.ad, d.ders_adi, n.puan FROM notlar AS n INNER JOIN ogrenciler AS o ON n.ogrenci_id = o.id INNER JOIN dersler AS d ON n.ders_id = d.id;", "INNER JOIN dersler AS d ON n.ders_id = d.id"],
      hint: "SELECT o.ad, d.ders_adi, n.puan FROM notlar AS n INNER JOIN ogrenciler AS o ON n.ogrenci_id = o.id INNER JOIN dersler AS d ON n.ders_id = d.id;",
      solution: "SELECT o.ad, d.ders_adi, n.puan FROM notlar AS n INNER JOIN ogrenciler AS o ON n.ogrenci_id = o.id INNER JOIN dersler AS d ON n.ders_id = d.id;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+o\.ad\s*,\s*d\.ders_adi\s*,\s*n\.puan\s+FROM\s+notlar(\s+AS)?\s+n\s+INNER\s+JOIN\s+ogrenciler(\s+AS)?\s+o\s+ON\s+n\.ogrenci_id\s*=\s*o\.id\s+INNER\s+JOIN\s+dersler(\s+AS)?\s+d\s+ON\s+n\.ders_id\s*=\s*d\.id\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 12. Modül tamamlandı, 5G uydu kulesi aktif! 📡✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT o.ad, d.ders_adi, n.puan FROM notlar AS n INNER JOIN ogrenciler AS o ON n.ogrenci_id = o.id INNER JOIN dersler AS d ON n.ders_id = d.id;' yazın." };
      }
    }
  ],

  sql_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: SOL DIŞ BİRLEŞTİRME (LEFT JOIN)",
      title: "1. Soru: Tüm Müşteriler ve Varsa Siparişleri",
      prompt: "<code>musteriler</code> tablosunu sol taraf kabul ederek <code>siparisler</code> tablosuyla <code>LEFT JOIN</code> yap: <code>SELECT musteriler.ad, siparisler.id FROM musteriler LEFT JOIN siparisler ON musteriler.id = siparisler.musteri_id;</code>.",
      presetCode: "-- Tüm müşteriler ve varsa sipariş idleri:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT musteriler.ad, siparisler.id FROM musteriler LEFT JOIN siparisler ON musteriler.id = siparisler.musteri_id;", "LEFT JOIN siparisler ON"],
      hint: "SELECT musteriler.ad, siparisler.id FROM musteriler LEFT JOIN siparisler ON musteriler.id = siparisler.musteri_id;",
      solution: "SELECT musteriler.ad, siparisler.id FROM musteriler LEFT JOIN siparisler ON musteriler.id = siparisler.musteri_id;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+musteriler\.ad\s*,\s*siparisler\.id\s+FROM\s+musteriler\s+LEFT\s+JOIN\s+siparisler\s+ON\s+musteriler\.id\s*=\s*siparisler\.musteri_id\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Harika! LEFT JOIN ile sol tablonun tüm kayıtları korundu. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT musteriler.ad, siparisler.id FROM musteriler LEFT JOIN siparisler ON musteriler.id = siparisler.musteri_id;' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: EŞLEŞMEYENLERİ BULMA (IS NULL)",
      title: "2. Soru: Hiç Siparişi Olmayan Müşteriler",
      prompt: "<code>musteriler m</code> tablosunu <code>siparisler s</code> ile LEFT JOIN yapıp siparişi olmayan müşterileri (<code>WHERE s.id IS NULL</code>) listele.",
      presetCode: "-- Sipariş vermemiş müşterileri getir:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT m.ad FROM musteriler AS m LEFT JOIN siparisler AS s ON m.id = s.musteri_id WHERE s.id IS NULL;", "WHERE s.id IS NULL"],
      hint: "SELECT m.ad FROM musteriler AS m LEFT JOIN siparisler AS s ON m.id = s.musteri_id WHERE s.id IS NULL;",
      solution: "SELECT m.ad FROM musteriler AS m LEFT JOIN siparisler AS s ON m.id = s.musteri_id WHERE s.id IS NULL;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+m\.ad\s+FROM\s+musteriler(\s+AS)?\s+m\s+LEFT\s+JOIN\s+siparisler(\s+AS)?\s+s\s+ON\s+m\.id\s*=\s*s\.musteri_id\s+WHERE\s+s\.id\s+IS\s+NULL\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! LEFT JOIN + IS NULL ile ilişkisiz kayıtlar tespit edildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT m.ad FROM musteriler AS m LEFT JOIN siparisler AS s ON m.id = s.musteri_id WHERE s.id IS NULL;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: SAĞ DIŞ BİRLEŞTİRME (RIGHT JOIN)",
      title: "3. Soru: Sağ Tabloyu Koruma (RIGHT JOIN)",
      prompt: "<code>urunler</code> tablosu ile <code>siparis_detay</code> tablosunu <code>RIGHT JOIN</code> ile bağlayıp <code>urunler.urun_adi</code> ve <code>siparis_detay.adet</code> sütunlarını seç.",
      presetCode: "-- RIGHT JOIN ile urunler ve siparis_detay:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT urunler.urun_adi, siparis_detay.adet FROM urunler RIGHT JOIN siparis_detay ON urunler.id = siparis_detay.urun_id;", "RIGHT JOIN siparis_detay ON"],
      hint: "SELECT urunler.urun_adi, siparis_detay.adet FROM urunler RIGHT JOIN siparis_detay ON urunler.id = siparis_detay.urun_id;",
      solution: "SELECT urunler.urun_adi, siparis_detay.adet FROM urunler RIGHT JOIN siparis_detay ON urunler.id = siparis_detay.urun_id;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+urunler\.urun_adi\s*,\s*siparis_detay\.adet\s+FROM\s+urunler\s+RIGHT\s+JOIN\s+siparis_detay\s+ON\s+urunler\.id\s*=\s*siparis_detay\.urun_id\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! RIGHT JOIN ile sağ tablodaki tüm detaylar alındı. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT urunler.urun_adi, siparis_detay.adet FROM urunler RIGHT JOIN siparis_detay ON urunler.id = siparis_detay.urun_id;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: TAM DIŞ BİRLEŞTİRME (FULL JOIN)",
      title: "4. Soru: İki Tarafı da Koruma",
      prompt: "<code>calisanlar</code> ve <code>projeler</code> tablolarını <code>FULL OUTER JOIN</code> ile bağlayıp <code>calisanlar.ad</code> ve <code>projeler.proje_adi</code> sütunlarını listele.",
      presetCode: "-- FULL OUTER JOIN sorgusu:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT calisanlar.ad, projeler.proje_adi FROM calisanlar FULL OUTER JOIN projeler ON calisanlar.proje_id = projeler.id;", "FULL OUTER JOIN projeler ON"],
      hint: "SELECT calisanlar.ad, projeler.proje_adi FROM calisanlar FULL OUTER JOIN projeler ON calisanlar.proje_id = projeler.id;",
      solution: "SELECT calisanlar.ad, projeler.proje_adi FROM calisanlar FULL OUTER JOIN projeler ON calisanlar.proje_id = projeler.id;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+calisanlar\.ad\s*,\s*projeler\.proje_adi\s+FROM\s+calisanlar\s+FULL(\s+OUTER)?\s+JOIN\s+projeler\s+ON\s+calisanlar\.proje_id\s*=\s*projeler\.id\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! FULL JOIN ile her iki tablodan da eksiksiz veri çekildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT calisanlar.ad, projeler.proje_adi FROM calisanlar FULL OUTER JOIN projeler ON calisanlar.proje_id = projeler.id;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: LEFT JOIN İLE GRUPLAMA",
      title: "5. Soru: Departman Başına Çalışan Sayısı (0 Dahil)",
      prompt: "<code>departmanlar d</code> ve <code>calisanlar c</code> tablolarını LEFT JOIN ile bağlayıp her departmanın adını ve çalışan sayısını gruplayarak hesapla: <code>SELECT d.departman_adi, COUNT(c.id) AS calisan_sayisi FROM departmanlar AS d LEFT JOIN calisanlar AS c ON d.id = c.dept_id GROUP BY d.departman_adi;</code>.",
      presetCode: "-- Departman bazlı çalışan sayısı (boş departmanlar da gelsin):\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["SELECT d.departman_adi, COUNT(c.id) AS calisan_sayisi FROM departmanlar AS d LEFT JOIN calisanlar AS c ON d.id = c.dept_id GROUP BY d.departman_adi;", "COUNT(c.id) AS calisan_sayisi", "GROUP BY d.departman_adi"],
      hint: "SELECT d.departman_adi, COUNT(c.id) AS calisan_sayisi FROM departmanlar AS d LEFT JOIN calisanlar AS c ON d.id = c.dept_id GROUP BY d.departman_adi;",
      solution: "SELECT d.departman_adi, COUNT(c.id) AS calisan_sayisi FROM departmanlar AS d LEFT JOIN calisanlar AS c ON d.id = c.dept_id GROUP BY d.departman_adi;",
      validator: (code) => {
        const clean = code.trim();
        if (/^SELECT\s+d\.departman_adi\s*,\s*COUNT\s*\(\s*c\.id\s*\)\s+AS\s+calisan_sayisi\s+FROM\s+departmanlar(\s+AS)?\s+d\s+LEFT\s+JOIN\s+calisanlar(\s+AS)?\s+c\s+ON\s+d\.id\s*=\s*c\.dept_id\s+GROUP\s+BY\s+d\.departman_adi\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 13. Modül tamamlandı, uluslararası liman açıldı! 🚢✓" };
        }
        return { ok: false, msg: "Hata: 'SELECT d.departman_adi, COUNT(c.id) AS calisan_sayisi FROM departmanlar AS d LEFT JOIN calisanlar AS c ON d.id = c.dept_id GROUP BY d.departman_adi;' yazın." };
      }
    }
  ],

  sql_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: TABLO OLUŞTURMA (CREATE TABLE)",
      title: "1. Soru: personeller Tablosu Oluşturma",
      prompt: "<code>id INT PRIMARY KEY</code>, <code>ad VARCHAR(50) NOT NULL</code> ve <code>maas DECIMAL(10,2)</code> sütunlarına sahip <code>personeller</code> tablosunu oluşturan DDL sorgusunu yaz.",
      presetCode: "-- personeller tablosunu oluştur:\nCREATE TABLE personeller (\n  id INT PRIMARY KEY,\n  ad VARCHAR(50) NOT NULL,\n  maas DECIMAL(10,2)\n);",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["CREATE TABLE personeller", "id INT PRIMARY KEY,", "ad VARCHAR(50) NOT NULL,", "maas DECIMAL(10,2)"],
      hint: "CREATE TABLE personeller (\n  id INT PRIMARY KEY,\n  ad VARCHAR(50) NOT NULL,\n  maas DECIMAL(10,2)\n);",
      solution: "CREATE TABLE personeller (\n  id INT PRIMARY KEY,\n  ad VARCHAR(50) NOT NULL,\n  maas DECIMAL(10,2)\n);",
      validator: (code) => {
        const clean = code.replace(/\s+/g, ' ').trim();
        if (/CREATE\s+TABLE\s+personeller\s*\(\s*id\s+INT\s+PRIMARY\s+KEY\s*,\s*ad\s+VARCHAR\s*\(\s*50\s*\)\s+NOT\s+NULL\s*,\s*maas\s+DECIMAL\s*\(\s*10\s*,\s*2\s*\)\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! CREATE TABLE tablosu kısıtlamalarıyla doğru tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: id INT PRIMARY KEY, ad VARCHAR(50) NOT NULL, maas DECIMAL(10,2) sütunlarını tanımlayın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: YENİ SÜTUN EKLEME (ALTER TABLE)",
      title: "2. Soru: Tabloya Sütun Ekleme",
      prompt: "<code>personeller</code> tablosuna benzersiz bir email alanı eklemek için <code>ALTER TABLE personeller ADD email VARCHAR(100) UNIQUE;</code> sorgusunu yaz.",
      presetCode: "-- personeller tablosuna email sütunu ekle:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["ALTER TABLE personeller ADD email VARCHAR(100) UNIQUE;", "ALTER TABLE personeller ADD", "VARCHAR(100) UNIQUE;"],
      hint: "ALTER TABLE personeller ADD email VARCHAR(100) UNIQUE;",
      solution: "ALTER TABLE personeller ADD email VARCHAR(100) UNIQUE;",
      validator: (code) => {
        const clean = code.trim();
        if (/^ALTER\s+TABLE\s+personeller\s+ADD(\s+COLUMN)?\s+email\s+VARCHAR\s*\(\s*100\s*\)\s+UNIQUE\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! ALTER TABLE ile tabloya yeni sütun başarıyla eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'ALTER TABLE personeller ADD email VARCHAR(100) UNIQUE;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: SÜTUN SİLME (DROP COLUMN)",
      title: "3. Soru: Sütunu Tablodan Kaldırma",
      prompt: "<code>personeller</code> tablosundan <code>maas</code> sütununu silmek için <code>ALTER TABLE personeller DROP COLUMN maas;</code> sorgusunu yaz.",
      presetCode: "-- maas sütununu tablodan kaldır:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["ALTER TABLE personeller DROP COLUMN maas;", "DROP COLUMN maas;"],
      hint: "ALTER TABLE personeller DROP COLUMN maas;",
      solution: "ALTER TABLE personeller DROP COLUMN maas;",
      validator: (code) => {
        const clean = code.trim();
        if (/^ALTER\s+TABLE\s+personeller\s+DROP\s+COLUMN\s+maas\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Süper! Sütun başarıyla tablodan kaldırıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'ALTER TABLE personeller DROP COLUMN maas;' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: TABLOYU SİLME (DROP TABLE)",
      title: "4. Soru: Varsa Tabloyu Silme",
      prompt: "<code>eski_raporlar</code> tablosunu eğer varsa veritabanından tamamen silmek için <code>DROP TABLE IF EXISTS eski_raporlar;</code> sorgusunu yaz.",
      presetCode: "-- eski_raporlar tablosunu sil:\n",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["DROP TABLE IF EXISTS eski_raporlar;", "DROP TABLE IF EXISTS"],
      hint: "DROP TABLE IF EXISTS eski_raporlar;",
      solution: "DROP TABLE IF EXISTS eski_raporlar;",
      validator: (code) => {
        const clean = code.trim();
        if (/^DROP\s+TABLE(\s+IF\s+EXISTS)?\s+eski_raporlar\s*;?$/i.test(clean)) {
          return { ok: true, msg: "Doğru! DROP TABLE komutuyla tablo başarıyla silindi. ✓" };
        }
        return { ok: false, msg: "Hata: 'DROP TABLE IF EXISTS eski_raporlar;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: İLİŞKİLİ TABLO (FOREIGN KEY)",
      title: "5. Soru: Yabancı Anahtarlı Sipariş Tablosu",
      prompt: "<code>musteriler(id)</code> tablosuna bağlı <code>FOREIGN KEY (musteri_id) REFERENCES musteriler(id)</code> ilişkisi olan <code>siparisler</code> tablosunu oluştur.",
      presetCode: "-- Foreign key ilişkili siparisler tablosunu oluştur:\nCREATE TABLE siparisler (\n  id INT PRIMARY KEY,\n  musteri_id INT,\n  tutar DECIMAL(10,2) NOT NULL,\n  FOREIGN KEY (musteri_id) REFERENCES musteriler(id)\n);",
      filename: "sorgu.sql",
      lang: "SQL",
      quickKeys: ["CREATE TABLE siparisler", "FOREIGN KEY (musteri_id) REFERENCES musteriler(id)", "tutar DECIMAL(10,2) NOT NULL,"],
      hint: "CREATE TABLE siparisler (\n  id INT PRIMARY KEY,\n  musteri_id INT,\n  tutar DECIMAL(10,2) NOT NULL,\n  FOREIGN KEY (musteri_id) REFERENCES musteriler(id)\n);",
      solution: "CREATE TABLE siparisler (\n  id INT PRIMARY KEY,\n  musteri_id INT,\n  tutar DECIMAL(10,2) NOT NULL,\n  FOREIGN KEY (musteri_id) REFERENCES musteriler(id)\n);",
      validator: (code) => {
        const clean = code.replace(/\s+/g, ' ').trim();
        if (/CREATE\s+TABLE\s+siparisler\s*\(\s*id\s+INT\s+PRIMARY\s+KEY\s*,\s*musteri_id\s+INT\s*,\s*tutar\s+DECIMAL\s*\(\s*10\s*,\s*2\s*\)\s+NOT\s+NULL\s*,\s*FOREIGN\s+KEY\s*\(\s*musteri_id\s*\)\s+REFERENCES\s+musteriler\s*\(\s*id\s*\)\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Tüm SQL Müfredatını ve 70 Görevi başarıyla tamamladın! 🏆🚀 Teknoloji Vadisi ve Roket Üssü hazır!" };
        }
        return { ok: false, msg: "Hata: Lütfen FOREIGN KEY (musteri_id) REFERENCES musteriler(id) içeren tabloyu oluşturun." };
      }
    }
  ]
};

// Aliases for review cards and challenges
for (let i = 1; i <= 14; i++) {
  if (SQL_TOPIC_REVIEWS[`sql_${i}`]) {
    SQL_TOPIC_REVIEWS[`sql${i}`] = SQL_TOPIC_REVIEWS[`sql_${i}`];
    SQL_TOPIC_REVIEWS[`s${i}`] = SQL_TOPIC_REVIEWS[`sql_${i}`];
  }
  if (SQL_CHALLENGES[`sql_${i}`]) {
    SQL_CHALLENGES[`sql${i}`] = SQL_CHALLENGES[`sql_${i}`];
    SQL_CHALLENGES[`s${i}`] = SQL_CHALLENGES[`sql_${i}`];
  }
}

