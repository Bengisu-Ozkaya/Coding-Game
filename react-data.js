// =========================================================================
// ⚛️ REACT 18 & JSX MÜFREDATI: 14 HIZLI TEORİ KARTI & 70 İNTERAKTİF KODLAMA GÖREVİ
// (W3Schools React Tutorial & Enes Bayram React Eğitimi Ders 3-83 Müfredatı)
// =========================================================================

const REACT_TOPIC_REVIEWS = {
  "react_1": {
    "title": "React'a Giriş, JSX & Vite Mimarisi",
    "readTime": "2 dk okuma",
    "rewardText": "🏡 Giriş Çiftliği & Su Kuyusu",
    "logic": "React, kullanıcı arayüzleri (UI) oluşturmak için geliştirilmiş popüler bir JavaScript kütüphanesidir. JSX (JavaScript XML), JavaScript dosyaları içine HTML benzeri kod yazmayı sağlar.",
    "syntaxRules": [
      "<code>&lt;&gt;...&lt;/&gt;</code> (Fragments) : JSX'te birden fazla eleman tek bir kök etiket veya boş fragment ile sarmalanmalıdır.",
      "<code>className</code> : HTML'deki 'class' özniteliği yerine JSX'te 'className' kullanılır.",
      "<code>{degisken}</code> : JSX içinde süslü parantez ile dinamik JavaScript ifadeleri çalıştırılır.",
      "<code>style={{ color: 'red', fontSize: '18px' }}</code> : Inline CSS stilleri camelCase nesne olarak verilir."
    ],
    "pitfalls": [
      "⚠️ JSX'te kapatılmayan etiketler (örneğin <code>&lt;img&gt;</code> veya <code>&lt;input&gt;</code>) hata verir. Mutlaka <code>&lt;img /&gt;</code> şeklinde self-closing olmalıdır.",
      "⚠️ <code>for</code> özniteliği yerine <code>htmlFor</code> kullanılır."
    ],
    "exampleCode": "function App() {\n  const baslik = \"CodeFarm'a Hoş Geldiniz\";\n  return (\n    <div className=\"kutu\">\n      <h1 style={{ color: '#0891b2' }}>{baslik}</h1>\n      <p>React öğrenmeye başladık!</p>\n    </div>\n  );\n}"
  },
  "react_2": {
    "title": "Component (Bileşen) Mimarisi & Export/Import",
    "readTime": "3 dk okuma",
    "rewardText": "💡 Şehir Elektrik Şebekesi",
    "logic": "React uygulamaları bağımsız ve tekrar kullanılabilir küçük parçalardan (Component) oluşur. Fonksiyonel bileşenler (Functional Components) JSX döndüren standart JS fonksiyonlarıdır.",
    "syntaxRules": [
      "<code>function Header() { return &lt;header&gt;...&lt;/header&gt;; }</code> : Bileşen isimleri MUTLAKA büyük harfle başlamalıdır.",
      "<code>export default Header;</code> : Bileşeni varsayılan olarak dışa aktarma.",
      "<code>import Header from './Header';</code> : Dışa aktarılan bileşeni başka bir dosyada içe aktarma.",
      "<code>&lt;Header /&gt;</code> : Bileşeni bir JSX etiketi gibi çağırma."
    ],
    "pitfalls": [
      "⚠️ Bileşen adı küçük harfle başlarsa (örn. <code>function header()</code>) React onu normal bir HTML etiketi sanar ve çalıştırmaz.",
      "⚠️ Bir component mutlaka tek bir kök eleman veya Fragment <code>&lt;&gt;&lt;/&gt;</code> döndürmelidir."
    ],
    "exampleCode": "// Header.jsx\nexport default function Header() {\n  return <header><h2>Site Başlığı</h2></header>;\n}\n\n// App.jsx\nimport Header from './Header';\nfunction App() {\n  return (\n    <main>\n      <Header />\n      <p>İçerik alanı</p>\n    </main>\n  );\n}"
  },
  "react_3": {
    "title": "Props (Özellikler) & Destructuring",
    "readTime": "3 dk okuma",
    "rewardText": "🚰 Su Arıtma & Çeşmeler",
    "logic": "Props (Properties), üst (Parent) bileşenden alt (Child) bileşene veri aktarmayı sağlar. Props'lar salt okunurdur (read-only), bileşen içinde doğrudan değiştirilemez.",
    "syntaxRules": [
      "<code>&lt;UrunKart baslik=\"Domates\" fiyat={25} /&gt;</code> : Alt bileşene string veya dinamik veri aktarma.",
      "<code>function UrunKart(props) { return &lt;h3&gt;{props.baslik}&lt;/h3&gt;; }</code> : Props nesnesini karşılama.",
      "<code>function UrunKart({ baslik, fiyat }) { ... }</code> : Object Destructuring ile props parçalama.",
      "<code>props.children</code> : Bileşenin açılış ve kapanış etiketleri arasına yazılan iç içeriği yakalar."
    ],
    "pitfalls": [
      "⚠️ Sayı, boolean veya JavaScript dizileri props olarak geçerken tırnak yerine süslü parantez <code>fiyat={50}</code> kullanılır.",
      "⚠️ Child component props değerini asla mutate edemez (<code>props.baslik = 'yeni'</code> yapılamaz)."
    ],
    "exampleCode": "function UrunKart({ baslik, fiyat = 0 }) {\n  return (\n    <div className=\"card\">\n      <h3>{baslik}</h3>\n      <p>Fiyat: {fiyat} TL</p>\n    </div>\n  );\n}"
  },
  "react_4": {
    "title": "State Yönetimi & useState Hook'u",
    "readTime": "3 dk okuma",
    "rewardText": "🌳 Şehir Parkı & Botanik Bahçe",
    "logic": "State, bir bileşenin zamanla değişebilen ve arayüzün (UI) yeniden çizilmesini (re-render) tetikleyen dahili hafızasıdır. useState hook'u ile tanımlanır.",
    "syntaxRules": [
      "<code>import { useState } from 'react';</code> : Hook'u React paketinden dahil etme.",
      "<code>const [sayac, setSayac] = useState(0);</code> : State değişkeni ve güncelleyici fonksiyon oluşturma.",
      "<code>setSayac(sayac + 1);</code> : State değerini yeni veriyle güncelleme.",
      "<code>setSayac(prev =&gt; prev + 1);</code> : Önceki duruma (prevState) bağlı güvenli güncelleme."
    ],
    "pitfalls": [
      "⚠️ State değişkenini doğrudan atamayla değiştiremezsiniz (<code>sayac = 5</code> ÇALIŞMAZ, mutlaka <code>setSayac(5)</code> kullanılmalıdır).",
      "⚠️ Hook'lar yalnızca React bileşenlerinin veya özel hook'ların en üst seviyesinde (top-level) çağrılmalıdır, if veya döngü içinde çağrılamaz."
    ],
    "exampleCode": "import { useState } from 'react';\n\nfunction Sayac() {\n  const [adet, setAdet] = useState(0);\n  return (\n    <div>\n      <p>Toplam Adet: {adet}</p>\n      <button onClick={() => setAdet(adet + 1)}>Artır</button>\n    </div>\n  );\n}"
  },
  "react_5": {
    "title": "Yaşam Döngüsü & useEffect Hook'u",
    "readTime": "3 dk okuma",
    "rewardText": "🏢 Modern Rezidanslar & İş Kuleleri",
    "logic": "useEffect hook'u, bileşenin ekrana basılması (mount), güncellenmesi (update) veya ekrandan kaldırılması (unmount) anlarında yan etkileri (API çağrıları, timer, event dinleyiciler) yönetir.",
    "syntaxRules": [
      "<code>useEffect(() =&gt; { ... }, []);</code> : Boş bağımlılık dizisi ile yalnızca sayfa ilk yüklendiğinde 1 kez çalışır.",
      "<code>useEffect(() =&gt; { ... }, [sayac]);</code> : Belirtilen state (sayac) her değiştiğinde tetiklenir.",
      "<code>return () =&gt; { clearInterval(timer); };</code> : Unmount anında bellek sızıntısını önleyen temizlik (cleanup) fonksiyonu."
    ],
    "pitfalls": [
      "⚠️ Bağımlılık dizisini (<code>[]</code>) unutursanız, useEffect her render işleminde sonsuz döngüye girerek sürekli tetiklenebilir.",
      "⚠️ useEffect içinde doğrudan <code>async () =&gt; {}</code> yazılamaz; içeride asenkron yardımcı fonksiyon tanımlanıp çağrılmalıdır."
    ],
    "exampleCode": "import { useState, useEffect } from 'react';\n\nfunction Saat() {\n  const [saniye, setSaniye] = useState(0);\n  useEffect(() => {\n    const timer = setInterval(() => setSaniye(s => s + 1), 1000);\n    return () => clearInterval(timer);\n  }, []);\n  return <div>Geçen Süre: {saniye} sn</div>;\n}"
  },
  "react_6": {
    "title": "Olay Yönetimi (Event Handling & Form Events)",
    "readTime": "2 dk okuma",
    "rewardText": "🎬 Sinema & Kültür Merkezi",
    "logic": "React'ta olaylar (Events) camelCase yazılır (onClick, onChange, onSubmit) ve JavaScript fonksiyon referansları geçirilir.",
    "syntaxRules": [
      "<code>&lt;button onClick={tiklaFonk}&gt;</code> : Fonksiyon referansını bağlama (parantezsiz).",
      "<code>&lt;button onClick={() =&gt; sil(id)}&gt;</code> : Parametre göndermek için Arrow Function sarmalaması.",
      "<code>e.preventDefault()</code> : Form submit olduğunda sayfanın yenilenmesini engelleme.",
      "<code>e.target.value</code> : Inputa yazılan güncel metin değerini okuma."
    ],
    "pitfalls": [
      "⚠️ <code>onClick={tiklaFonk()}</code> yazarsanız fonksiyon bileşen render edilir edilmez otomatik çalışır! Doğrusu <code>onClick={tiklaFonk}</code> veya <code>onClick={() =&gt; tiklaFonk(id)}</code> olmalıdır."
    ],
    "exampleCode": "function Form() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    alert('Form gönderildi!');\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Kaydet</button>\n    </form>\n  );\n}"
  },
  "react_7": {
    "title": "Koşullu Render Etme (Conditional Rendering)",
    "readTime": "2 dk okuma",
    "rewardText": "🎡 Lunapark & Dönme Dolap",
    "logic": "Belirli bir koşula veya state durumuna göre farklı JSX bileşenleri veya elemanları ekrana çizme yöntemidir.",
    "syntaxRules": [
      "<code>{girisYapildi ? &lt;Profil /&gt; : &lt;GirisYap /&gt;}</code> : Ternary (Üçlü) şart operatörü ile seçim.",
      "<code>{yukleniyor &amp;&amp; &lt;p&gt;Yükleniyor...&lt;/p&gt;}</code> : Mantıksal VE (&&) ile sadece doğruysa gösterme.",
      "<code>if (!veri) return null;</code> : Erken dönüş (Early Return) ile hiçbir şey render etmeme."
    ],
    "pitfalls": [
      "⚠️ Sayısal 0 değeri ile <code>{sayi &amp;&amp; &lt;div /&gt;}</code> yaparsanız ekranda '0' sayısı basılabilir. Güvenli kontrol için <code>{sayi &gt; 0 &amp;&amp; ...}</code> kullanın."
    ],
    "exampleCode": "function Bildirim({ mesajSayisi }) {\n  return (\n    <div>\n      <h2>Mesaj Kutusu</h2>\n      {mesajSayisi > 0 ? (\n        <p>{mesajSayisi} yeni mesajınız var.</p>\n      ) : (\n        <p>Okunmamış mesaj yok.</p>\n      )}\n    </div>\n  );\n}"
  },
  "react_8": {
    "title": "Listeler, Döngüler & Key Mantığı (.map)",
    "readTime": "3 dk okuma",
    "rewardText": "🏛️ Yönetim Sarayı & Belediye",
    "logic": "Dizileri JSX elemanları listesine dönüştürmek için JavaScript <code>.map()</code> metodu kullanılır. React'ın performansı için her liste elemanına benzersiz bir <code>key</code> prop'u verilmelidir.",
    "syntaxRules": [
      "<code>{liste.map(eleman =&gt; &lt;li key={eleman.id}&gt;{eleman.ad}&lt;/li&gt;)}</code> : Liste dönüştürme ve key verme.",
      "<code>key={benzersizId}</code> : Virtual DOM'un hangi elemanın değiştiğini anlaması için zorunlu benzersiz anahtar."
    ],
    "pitfalls": [
      "⚠️ Dizi indeksini (<code>key={index}</code>) anahtar olarak kullanmak liste sıralandığında veya silindiğinde beklenmedik UI hatalarına yol açabilir. Mümkünse benzersiz veritabanı ID'si (<code>item.id</code>) kullanılmalıdır."
    ],
    "exampleCode": "const gorevler = [\n  { id: 101, text: 'Tohum Ek' },\n  { id: 102, text: 'Tarlayı Sula' }\n];\n\nfunction GorevListesi() {\n  return (\n    <ul>\n      {gorevler.map(g => (\n        <li key={g.id}>{g.text}</li>\n      ))}\n    </ul>\n  );\n}"
  },
  "react_9": {
    "title": "Formlar & Kontrollü Bileşenler (Controlled Inputs)",
    "readTime": "3 dk okuma",
    "rewardText": "🏥 Şehir Hastanesi & Acil Servis",
    "logic": "Form girdilerinin (input, textarea, select) değerlerinin React state'i tarafından kontrol edildiği bileşenlere Kontrollü Bileşenler (Controlled Components) denir.",
    "syntaxRules": [
      "<code>&lt;input value={ad} onChange={(e) =&gt; setAd(e.target.value)} /&gt;</code> : State ile çift yönlü veri bağı.",
      "<code>&lt;input type=\"checkbox\" checked={onay} onChange={(e) =&gt; setOnay(e.target.checked)} /&gt;</code> : Checkbox kontrolü.",
      "<code>setForm({ ...form, [e.target.name]: e.target.value })</code> : Tek state ile birden çok input yönetimi."
    ],
    "pitfalls": [
      "⚠️ <code>value</code> prop'u verilip <code>onChange</code> tanımlanmazsa input salt okunur hale gelir ve içine yazı yazılamaz."
    ],
    "exampleCode": "import { useState } from 'react';\n\nfunction UyeFormu() {\n  const [email, setEmail] = useState('');\n  return (\n    <div>\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"E-posta girin\"\n      />\n      <p>Yazılan: {email}</p>\n    </div>\n  );\n}"
  },
  "react_10": {
    "title": "useRef Hook'u & Doğrudan DOM Erişimi",
    "readTime": "2 dk okuma",
    "rewardText": "🛍️ Alışveriş & Ticaret Merkezi",
    "logic": "useRef, yeniden render tetiklemeden bellekte kalıcı bir değer saklamak veya doğrudan bir DOM elemanına (input focus, scroll vb.) erişmek için kullanılır.",
    "syntaxRules": [
      "<code>const inputRef = useRef(null);</code> : Ref nesnesi oluşturma.",
      "<code>&lt;input ref={inputRef} /&gt;</code> : HTML elemanına ref bağlama.",
      "<code>inputRef.current.focus();</code> : DOM elemanına doğrudan odaklanma.",
      "<code>sayacRef.current += 1;</code> : Render tetiklemeden sayaç tutma."
    ],
    "pitfalls": [
      "⚠️ <code>ref.current</code> değeri değiştiğinde bileşen yeniden render EDİLMEZ. UI üzerinde görünmesi gereken dinamik veriler için <code>useState</code> kullanılmalıdır."
    ],
    "exampleCode": "import { useRef } from 'react';\n\nfunction AramaKutusu() {\n  const inputRef = useRef(null);\n  const odaklan = () => {\n    inputRef.current.focus();\n  };\n  return (\n    <div>\n      <input ref={inputRef} type=\"text\" />\n      <button onClick={odaklan}>Odaklan</button>\n    </div>\n  );\n}"
  },
  "react_11": {
    "title": "Context API ile Global State Yönetimi",
    "readTime": "3 dk okuma",
    "rewardText": "🚄 Hızlı Tren Garı & Raylar",
    "logic": "Context API, verileri bileşen ağacında katman katman elle prop olarak aktarmadan (Prop Drilling probleminden kaçınarak) tüm alt bileşenlere doğrudan ulaştırmayı sağlar.",
    "syntaxRules": [
      "<code>const TemaContext = createContext();</code> : Context oluşturma.",
      "<code>&lt;TemaContext.Provider value={tema}&gt;{children}&lt;/TemaContext.Provider&gt;</code> : Veriyi alt bileşenlere dağıtma.",
      "<code>const tema = useContext(TemaContext);</code> : Alt bileşende veriyi tüketme."
    ],
    "pitfalls": [
      "⚠️ Bir bileşen <code>useContext</code> ile veri okuyabilmesi için o context'in <code>&lt;Provider&gt;</code> ağacının içinde yer almalıdır."
    ],
    "exampleCode": "import { createContext, useContext, useState } from 'react';\n\nconst AuthContext = createContext();\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState({ name: 'Bengisu' });\n  return (\n    <AuthContext.Provider value={{ user, setUser }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\nexport function Profil() {\n  const { user } = useContext(AuthContext);\n  return <h3>Kullanıcı: {user.name}</h3>;\n}"
  },
  "react_12": {
    "title": "React Router DOM ile Çoklu Sayfa Yönlendirmesi",
    "readTime": "3 dk okuma",
    "rewardText": "📡 5G Telekom & Uydu Kulesi",
    "logic": "Tek Sayfalı Uygulamalarda (SPA), tarayıcıyı yenilemeden URL yoluna göre farklı sayfaları render etmeyi sağlar.",
    "syntaxRules": [
      "<code>&lt;BrowserRouter&gt; &lt;Routes&gt; &lt;Route path=\"/\" element={&lt;Home /&gt;} /&gt; &lt;/Routes&gt; &lt;/BrowserRouter&gt;</code> : Rota yapılandırması.",
      "<code>&lt;Link to=\"/hakkimizda\"&gt;Hakkımızda&lt;/Link&gt;</code> : Sayfayı yenilemeden rota değiştiren bağlantı etiketi.",
      "<code>const { id } = useParams();</code> : Dinamik rota parametresini (<code>/urun/:id</code>) yakalama.",
      "<code>const navigate = useNavigate(); navigate('/panel');</code> : Programatik yönlendirme."
    ],
    "pitfalls": [
      "⚠️ React Router kullanırken geleneksel <code>&lt;a href=\"/\"&gt;</code> etiketi kullanılırsa sayfa tamamen yeniden yüklenir (SPA avantajı kaybolur). Mutlaka <code>&lt;Link to=\"/\"&gt;</code> kullanılmalıdır."
    ],
    "exampleCode": "import { Routes, Route, Link, useParams } from 'react-router-dom';\n\nfunction UrunDetay() {\n  const { id } = useParams();\n  return <h2>Ürün ID: {id}</h2>;\n}\n\nfunction App() {\n  return (\n    <div>\n      <nav><Link to=\"/urun/42\">42 Nolu Ürün</Link></nav>\n      <Routes>\n        <Route path=\"/urun/:id\" element={<UrunDetay />} />\n      </Routes>\n    </div>\n  );\n}"
  },
  "react_13": {
    "title": "Redux Toolkit ile İleri Seviye Global State",
    "readTime": "3 dk okuma",
    "rewardText": "🚢 Uluslararası Liman & Konteynerler",
    "logic": "Büyük ölçekli uygulamalarda merkezi durum yönetimi (Global State) için modern Redux Toolkit (RTK) standarttır. Store, Slice, Actions ve Reducer mantığıyla çalışır.",
    "syntaxRules": [
      "<code>createSlice({ name, initialState, reducers })</code> : State dilimi ve mutasyon fonksiyonları tanımlama.",
      "<code>configureStore({ reducer: { sepet: sepetReducer } })</code> : Merkezi Redux deposunu (Store) kurma.",
      "<code>const sepet = useSelector(state =&gt; state.sepet.urunler);</code> : Store'dan veri okuma.",
      "<code>const dispatch = useDispatch(); dispatch(urunEkle(yeniUrun));</code> : Aksiyon tetikleme."
    ],
    "pitfalls": [
      "⚠️ Redux Toolkit Immer kütüphanesi kullandığı için reducers içinde doğrudan <code>state.value += 1</code> yazılabilir, ancak klasik Redux'ta state immutable kalmalıdır."
    ],
    "exampleCode": "import { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    increment: (state) => { state.value += 1; },\n    decrement: (state) => { state.value -= 1; }\n  }\n});\n\nexport const { increment, decrement } = counterSlice.actions;\nexport const store = configureStore({ reducer: { counter: counterSlice.reducer } });"
  },
  "react_14": {
    "title": "Custom Hooks, Axios/API & Kapsamlı Proje",
    "readTime": "3 dk okuma",
    "rewardText": "🚀 Teknoloji Vadisi & Roket Üssü",
    "logic": "Tekrarlanan state ve yaşam döngüsü mantıklarını Özel Hook'lar (Custom Hooks) ile soyutlayabilir; Fetch veya Axios ile REST API'lerden asenkron veri çekebilirsiniz.",
    "syntaxRules": [
      "<code>function useFetch(url) { ... return { data, loading, error }; }</code> : 'use' önekiyle başlayan özel hook tanımı.",
      "<code>const res = await axios.get('https://api.site.com/products');</code> : Axios ile HTTP GET isteği.",
      "<code>const { data, loading } = useFetch('/api/users');</code> : Custom hook'u bileşende kullanma."
    ],
    "pitfalls": [
      "⚠️ Özel hook fonksiyon isimleri mutlaka küçük harfli <code>use</code> ile başlamalıdır (örn. <code>useLocalStorage</code>, <code>useAuth</code>). Aksi takdirde React linter kuralları devreye girmez."
    ],
    "exampleCode": "import { useState, useEffect } from 'react';\n\nfunction useSayac(baslangic = 0) {\n  const [sayi, setSayi] = useState(baslangic);\n  const artir = () => setSayi(s => s + 1);\n  const azalt = () => setSayi(s => s - 1);\n  return { sayi, artir, azalt };\n}\n\nexport default function App() {\n  const { sayi, artir } = useSayac(10);\n  return <button onClick={artir}>Sayı: {sayi}</button>;\n}"
  }
};

const REACT_CHALLENGES = {
  react_1: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: JSX VE FRAGMENTS",
      title: "1. Soru: React Fragment Kullanımı",
      prompt: "Aşağıdaki bileşende tek bir kök eleman kuralına uymak için <code>&lt;&gt;</code> ve <code>&lt;/&gt;</code> Fragment etiketlerini kullanabilir misin?",
      presetCode: "export default function App() {\n  return (\n    <!-- Fragment ile sarmala: -->\n    <h1>CodeFarm Çiftliği</h1>\n    <p>React 18 ile modern arayüz geliştirme</p>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["<>", "</>", "<h1>", "</h1>", "<p>", "</p>"],
      hint: "export default function App() {\n  return (\n    <>\n      <h1>CodeFarm Çiftliği</h1>\n      <p>React 18 ile modern arayüz geliştirme</p>\n    </>\n  );\n}",
      solution: "export default function App() {\n  return (\n    <>\n      <h1>CodeFarm Çiftliği</h1>\n      <p>React 18 ile modern arayüz geliştirme</p>\n    </>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<>\s*<h1>CodeFarm Çiftliği<\/h1>\s*<p>React 18 ile modern arayüz geliştirme<\/p>\s*<\/>/i.test(clean) ||
            /<React\.Fragment>\s*<h1>CodeFarm Çiftliği<\/h1>\s*<p>React 18 ile modern arayüz geliştirme<\/p>\s*<\/React\.Fragment>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! React Fragment ile JSX kök kuralı sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: return içinde <h1> ve <p> elemanlarını <> ... </> ile sarmalayın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: JSX CLASSNAME FARKI",
      title: "2. Soru: className ile CSS Sınıfı Ekleme",
      prompt: "JSX'te 'class' yerine <code>className=\"card-box\"</code> kullanılır. div etiketine bu sınıfı ekleyebilir misin?",
      presetCode: "export default function App() {\n  return (\n    <div>\n      <h2>Ürün Kartı</h2>\n    </div>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["className=\"card-box\"", "className=", "\"card-box\""],
      hint: "export default function App() {\n  return (\n    <div className=\"card-box\">\n      <h2>Ürün Kartı</h2>\n    </div>\n  );\n}",
      solution: "export default function App() {\n  return (\n    <div className=\"card-box\">\n      <h2>Ürün Kartı</h2>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+className\s*=\s*["']card-box["']\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! JSX'te className kullanımı başarıyla uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: div etiketine className=\"card-box\" özniteliğini ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: SÜSLÜ PARANTEZ İFADELERİ",
      title: "3. Soru: Dinamik JS Değişkeni Yazdırma",
      prompt: "<code>ciftlikAdi</code> değişkenini h1 etiketi içine süslü parantez <code>{ciftlikAdi}</code> ile yazdırabilir misin?",
      presetCode: "export default function App() {\n  const ciftlikAdi = \"Yeşil Vadi Çiftliği\";\n  return (\n    <div>\n      <h1><!-- ciftlikAdi buraya gelsin --></h1>\n    </div>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["{ciftlikAdi}", "{", "}", "ciftlikAdi"],
      hint: "export default function App() {\n  const ciftlikAdi = \"Yeşil Vadi Çiftliği\";\n  return (\n    <div>\n      <h1>{ciftlikAdi}</h1>\n    </div>\n  );\n}",
      solution: "export default function App() {\n  const ciftlikAdi = \"Yeşil Vadi Çiftliği\";\n  return (\n    <div>\n      <h1>{ciftlikAdi}</h1>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<h1>\s*\{\s*ciftlikAdi\s*\}\s*<\/h1>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Dinamik değişken JSX içine başarıyla yerleştirildi. ✓" };
        }
        return { ok: false, msg: "Hata: <h1>{ciftlikAdi}</h1> şeklinde süslü parantez kullanın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: JSX INLINE STİLLERİ",
      title: "4. Soru: Inline Style Nesnesi Verme",
      prompt: "Paragraf etiketine <code>style={{ color: 'green', fontSize: '20px' }}</code> stil nesnesi ekleyebilir misin?",
      presetCode: "export default function App() {\n  return (\n    <div>\n      <p>Organik Mahsuller</p>\n    </div>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["style={{ color: 'green', fontSize: '20px' }}", "style={{", "}}", "color: 'green'"],
      hint: "export default function App() {\n  return (\n    <div>\n      <p style={{ color: 'green', fontSize: '20px' }}>Organik Mahsuller</p>\n    </div>\n  );\n}",
      solution: "export default function App() {\n  return (\n    <div>\n      <p style={{ color: 'green', fontSize: '20px' }}>Organik Mahsuller</p>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<p\s+style\s*=\s*\{\{\s*color\s*:\s*['"]green['"]\s*,\s*fontSize\s*:\s*['"]20px['"]\s*\}\}\s*>/i.test(clean) ||
            /<p\s+style\s*=\s*\{\{\s*fontSize\s*:\s*['"]20px['"]\s*,\s*color\s*:\s*['"]green['"]\s*\}\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Süper! JSX inline stilleri çift süslü parantez ile uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: <p style={{ color: 'green', fontSize: '20px' }}> formatında yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 1: SELF-CLOSING ETİKET KURALI",
      title: "5. Soru: Kendi Kendini Kapatan Etiketler",
      prompt: "JSX'te img etiketi mutlaka kapatılmalıdır. <code>&lt;img src=\"logo.png\" alt=\"Logo\" /&gt;</code> etiketini yazabilir misin?",
      presetCode: "export default function App() {\n  return (\n    <div>\n      <!-- img etiketini self-closing olarak ekleyin -->\n    </div>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["<img src=\"logo.png\" alt=\"Logo\" />", "src=\"logo.png\"", "alt=\"Logo\"", "/>"],
      hint: "export default function App() {\n  return (\n    <div>\n      <img src=\"logo.png\" alt=\"Logo\" />\n    </div>\n  );\n}",
      solution: "export default function App() {\n  return (\n    <div>\n      <img src=\"logo.png\" alt=\"Logo\" />\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<img\s+[^>]*src\s*=\s*["']logo\.png["'][^>]*alt\s*=\s*["']Logo["'][^>]*\/>/i.test(clean) ||
            /<img\s+[^>]*alt\s*=\s*["']Logo["'][^>]*src\s*=\s*["']logo\.png["'][^>]*\/>/i.test(clean)) {
          return { ok: true, msg: "Harika! 1. Modül başarıyla tamamlandı, Şehrin ilk yapısı yükseliyor! 🏆" };
        }
        return { ok: false, msg: "Hata: <img src=\"logo.png\" alt=\"Logo\" /> şeklinde kapatın." };
      }
    }
  ],

  react_2: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: FONKSİYONEL BİLEŞENLER",
      title: "1. Soru: Header Bileşeni Tanımlama",
      prompt: "Büyük harfle başlayan ve <code>&lt;header&gt;&lt;h1&gt;Çiftlik Portalı&lt;/h1&gt;&lt;/header&gt;</code> döndüren <code>Header</code> fonksiyonel bileşenini yazabilir misin?",
      presetCode: "// Header bileşenini tanımlayın:\nfunction Header() {\n  \n}",
      filename: "Header.jsx",
      lang: "React / JSX",
      quickKeys: ["return (", "<header>", "<h1>Çiftlik Portalı</h1>", "</header>", ");"],
      hint: "function Header() {\n  return (\n    <header>\n      <h1>Çiftlik Portalı</h1>\n    </header>\n  );\n}",
      solution: "function Header() {\n  return (\n    <header>\n      <h1>Çiftlik Portalı</h1>\n    </header>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+Header\s*\(\s*\)\s*\{\s*return\s*\(?\s*<header>\s*<h1>Çiftlik Portalı<\/h1>\s*<\/header>\s*\)?\s*;?\s*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! İlk React fonksiyonel bileşenini oluşturdun. ✓" };
        }
        return { ok: false, msg: "Hata: Header fonksiyonu <header><h1>Çiftlik Portalı</h1></header> döndürmelidir." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: ARROW FUNCTION BİLEŞENİ",
      title: "2. Soru: Ok Fonksiyonu (Arrow Function) ile Bileşen",
      prompt: "<code>const Footer = () =&gt; &lt;footer&gt;&lt;p&gt;Tüm hakları saklıdır.&lt;/p&gt;&lt;/footer&gt;;</code> bileşenini tanımlayabilir misin?",
      presetCode: "// Footer bileşenini Arrow Function ile tanımlayın:\n",
      filename: "Footer.jsx",
      lang: "React / JSX",
      quickKeys: ["const Footer = () => (", "<footer>", "<p>Tüm hakları saklıdır.</p>", "</footer>", ");"],
      hint: "const Footer = () => {\n  return (\n    <footer>\n      <p>Tüm hakları saklıdır.</p>\n    </footer>\n  );\n};",
      solution: "const Footer = () => {\n  return (\n    <footer>\n      <p>Tüm hakları saklıdır.</p>\n    </footer>\n  );\n};",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s+Footer\s*=\s*\(\s*\)\s*=>\s*\{?\s*(?:return\s*)?\(?\s*<footer>\s*<p>Tüm hakları saklıdır\.<\/p>\s*<\/footer>\s*\)?\s*;?\s*\}?/i.test(clean)) {
          return { ok: true, msg: "Harika! Modern Arrow Function bileşeni oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: const Footer = () => <footer><p>Tüm hakları saklıdır.</p></footer> tanımlayın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: EXPORT DEFAULT",
      title: "3. Soru: Bileşeni Dışa Aktarma (Export)",
      prompt: "Header bileşeninin altına <code>export default Header;</code> komutunu ekleyebilir misin?",
      presetCode: "function Header() {\n  return <h2>Başlık</h2>;\n}\n\n// Header'ı default olarak dışa aktar:\n",
      filename: "Header.jsx",
      lang: "React / JSX",
      quickKeys: ["export default Header;", "export default", "Header;"],
      hint: "function Header() {\n  return <h2>Başlık</h2>;\n}\n\nexport default Header;",
      solution: "function Header() {\n  return <h2>Başlık</h2>;\n}\n\nexport default Header;",
      validator: (code) => {
        const clean = code.trim();
        if (/export\s+default\s+Header\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! Bileşen dışa aktarıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'export default Header;' satırını ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: IMPORT KULLANIMI",
      title: "4. Soru: Bileşeni İçe Aktarma (Import)",
      prompt: "<code>Header</code> bileşenini <code>'./Header'</code> dosyasından içe aktaran <code>import Header from './Header';</code> komutunu en üste yazabilir misin?",
      presetCode: "// Header bileşenini import edin:\n\nexport default function App() {\n  return <div>Ana Sayfa</div>;\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["import Header from './Header';", "import Header", "from './Header';"],
      hint: "import Header from './Header';\n\nexport default function App() {\n  return <div>Ana Sayfa</div>;\n}",
      solution: "import Header from './Header';\n\nexport default function App() {\n  return <div>Ana Sayfa</div>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/import\s+Header\s+from\s+['"]\.\/Header['"]\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! Header bileşeni başarıyla içe aktarıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'import Header from \"./Header\";' satırını ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 2: BİLEŞENİ ÇAĞIRMA (NESTING)",
      title: "5. Soru: Alt Bileşeni Render Etme",
      prompt: "App bileşeninin içinde div'in en üstüne <code>&lt;Header /&gt;</code> bileşenini yerleştirebilir misin?",
      presetCode: "import Header from './Header';\n\nexport default function App() {\n  return (\n    <div>\n      <!-- Header bileşenini buraya çağırın -->\n      <main>İçerik</main>\n    </div>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["<Header />", "<Header>", "</Header>"],
      hint: "import Header from './Header';\n\nexport default function App() {\n  return (\n    <div>\n      <Header />\n      <main>İçerik</main>\n    </div>\n  );\n}",
      solution: "import Header from './Header';\n\nexport default function App() {\n  return (\n    <div>\n      <Header />\n      <main>İçerik</main>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<div[^>]*>\s*<Header\s*\/>\s*<main>İçerik<\/main>\s*<\/div>/i.test(clean) ||
            /<div[^>]*>\s*<Header>\s*<\/Header>\s*<main>İçerik<\/main>\s*<\/div>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! 2. Modül tamamlandı, elektrik şebekesi şehre bağlandı! 💡" };
        }
        return { ok: false, msg: "Hata: <main> etiketinin hemen üstüne <Header /> ekleyin." };
      }
    }
  ],

  react_3: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: PROPS GÖNDERME",
      title: "1. Soru: Bileşene Prop Aktarma",
      prompt: "UrunKart bileşenine <code>isim=\"Elma\"</code> ve sayısal <code>fiyat={15}</code> proplarını aktarabilir misin?",
      presetCode: "export default function App() {\n  return (\n    <div>\n      <UrunKart />\n    </div>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["isim=\"Elma\"", "fiyat={15}", "<UrunKart isim=\"Elma\" fiyat={15} />"],
      hint: "export default function App() {\n  return (\n    <div>\n      <UrunKart isim=\"Elma\" fiyat={15} />\n    </div>\n  );\n}",
      solution: "export default function App() {\n  return (\n    <div>\n      <UrunKart isim=\"Elma\" fiyat={15} />\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<UrunKart\s+[^>]*isim\s*=\s*["']Elma["'][^>]*fiyat\s*=\s*\{\s*15\s*\}[^>]*\/>/i.test(clean) ||
            /<UrunKart\s+[^>]*fiyat\s*=\s*\{\s*15\s*\}[^>]*isim\s*=\s*["']Elma["'][^>]*\/>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! String ve sayısal proplar başarıyla aktarıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <UrunKart isim=\"Elma\" fiyat={15} /> şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: PROPS NESNESİNİ OKUMA",
      title: "2. Soru: props.isim Kullanımı",
      prompt: "Bileşenin parametresine <code>props</code> verip h3 içine <code>{props.isim}</code> yazdırabilir misin?",
      presetCode: "function UrunKart(props) {\n  return (\n    <div>\n      <h3><!-- props.isim buraya --></h3>\n    </div>\n  );\n}",
      filename: "UrunKart.jsx",
      lang: "React / JSX",
      quickKeys: ["{props.isim}", "props", "{", "}"],
      hint: "function UrunKart(props) {\n  return (\n    <div>\n      <h3>{props.isim}</h3>\n    </div>\n  );\n}",
      solution: "function UrunKart(props) {\n  return (\n    <div>\n      <h3>{props.isim}</h3>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+UrunKart\s*\(\s*props\s*\)[\s\S]*<h3>\s*\{\s*props\.isim\s*\}\s*<\/h3>/i.test(clean)) {
          return { ok: true, msg: "Harika! props nesnesinden özellik başarıyla okundu. ✓" };
        }
        return { ok: false, msg: "Hata: <h3>{props.isim}</h3> şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: PROPS DESTRUCTURING",
      title: "3. Soru: Obje Parçalama (Destructuring)",
      prompt: "Bileşen parametresinde doğrudan <code>({ isim, fiyat })</code> parçalaması yapıp p içine <code>{fiyat}</code> yazdırabilir misin?",
      presetCode: "function UrunKart({ isim, fiyat }) {\n  return (\n    <div>\n      <h3>{isim}</h3>\n      <p>Fiyat: <!-- fiyat buraya --> TL</p>\n    </div>\n  );\n}",
      filename: "UrunKart.jsx",
      lang: "React / JSX",
      quickKeys: ["{fiyat}", "({ isim, fiyat })"],
      hint: "function UrunKart({ isim, fiyat }) {\n  return (\n    <div>\n      <h3>{isim}</h3>\n      <p>Fiyat: {fiyat} TL</p>\n    </div>\n  );\n}",
      solution: "function UrunKart({ isim, fiyat }) {\n  return (\n    <div>\n      <h3>{isim}</h3>\n      <p>Fiyat: {fiyat} TL</p>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+UrunKart\s*\(\s*\{\s*(?:isim\s*,\s*fiyat|fiyat\s*,\s*isim)\s*\}\s*\)[\s\S]*<p>\s*Fiyat:\s*\{\s*fiyat\s*\}\s*TL\s*<\/p>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Destructuring ile temiz props erişimi sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <p>Fiyat: {fiyat} TL</p> şeklinde yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: DEFAULT PROPS",
      title: "4. Soru: Varsayılan Prop Değeri",
      prompt: "Destructuring yaparken <code>fiyat</code> prop'una varsayılan olarak <code>0</code> değerini (<code>{ isim, fiyat = 0 }</code>) atayabilir misin?",
      presetCode: "function UrunKart({ isim, fiyat = 0 }) {\n  return (\n    <div>\n      <h3>{isim}</h3>\n      <p>{fiyat} TL</p>\n    </div>\n  );\n}",
      filename: "UrunKart.jsx",
      lang: "React / JSX",
      quickKeys: ["fiyat = 0", "{ isim, fiyat = 0 }"],
      hint: "function UrunKart({ isim, fiyat = 0 }) {\n  return (\n    <div>\n      <h3>{isim}</h3>\n      <p>{fiyat} TL</p>\n    </div>\n  );\n}",
      solution: "function UrunKart({ isim, fiyat = 0 }) {\n  return (\n    <div>\n      <h3>{isim}</h3>\n      <p>{fiyat} TL</p>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+UrunKart\s*\(\s*\{[^}]*fiyat\s*=\s*0[^}]*\}\s*\)/i.test(clean)) {
          return { ok: true, msg: "Süper! Varsayılan prop güvenliği sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: parametrede '{ isim, fiyat = 0 }' şeklinde varsayılan değer tanımlayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 3: CHILDREN PROP",
      title: "5. Soru: Kapsayıcı ve children Prop'u",
      prompt: "Kutu bileşenine <code>{ children }</code> prop'unu alıp div'in içine <code>{children}</code> yerleştirebilir misin?",
      presetCode: "function Kutu({ children }) {\n  return (\n    <div className=\"kutu-cerceve\">\n      <!-- children buraya gelecek -->\n    </div>\n  );\n}",
      filename: "Kutu.jsx",
      lang: "React / JSX",
      quickKeys: ["{children}", "({ children })", "<div className=\"kutu-cerceve\">"],
      hint: "function Kutu({ children }) {\n  return (\n    <div className=\"kutu-cerceve\">\n      {children}\n    </div>\n  );\n}",
      solution: "function Kutu({ children }) {\n  return (\n    <div className=\"kutu-cerceve\">\n      {children}\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/function\s+Kutu\s*\(\s*\{\s*children\s*\}\s*\)[\s\S]*<div\s+className\s*=\s*["']kutu-cerceve["']\s*>\s*\{\s*children\s*\}\s*<\/div>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 3. Modül tamamlandı, su arıtma tesisleri inşa edildi! 🚰" };
        }
        return { ok: false, msg: "Hata: div içine '{children}' ekleyin." };
      }
    }
  ],

  react_4: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: USESTATE İÇE AKTARMA",
      title: "1. Soru: useState Hook'unu Dahil Etme",
      prompt: "React paketinden <code>useState</code> hook'unu içe aktaran <code>import { useState } from 'react';</code> satırını yazabilir misin?",
      presetCode: "// useState hook'unu import edin:\n\nexport default function Sayac() {\n  return <div>Sayaç</div>;\n}",
      filename: "Sayac.jsx",
      lang: "React / JSX",
      quickKeys: ["import { useState } from 'react';", "import { useState }", "from 'react';"],
      hint: "import { useState } from 'react';\n\nexport default function Sayac() {\n  return <div>Sayaç</div>;\n}",
      solution: "import { useState } from 'react';\n\nexport default function Sayac() {\n  return <div>Sayaç</div>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/import\s*\{\s*useState\s*\}\s*from\s*['"]react['"]\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! useState hook'u başarıyla içe aktarıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'import { useState } from \"react\";' satırını ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: STATE TANIMLAMA",
      title: "2. Soru: Sayısal State Oluşturma",
      prompt: "Başlangıç değeri 0 olan <code>const [sayac, setSayac] = useState(0);</code> state'ini tanımlayabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function Sayac() {\n  // sayac state'ini tanımlayın:\n  \n  return <h2>Sayaç Değeri: {sayac}</h2>;\n}",
      filename: "Sayac.jsx",
      lang: "React / JSX",
      quickKeys: ["const [sayac, setSayac] = useState(0);", "useState(0);", "const [sayac, setSayac]"],
      hint: "import { useState } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n  return <h2>Sayaç Değeri: {sayac}</h2>;\n}",
      solution: "import { useState } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n  return <h2>Sayaç Değeri: {sayac}</h2>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s*\[\s*sayac\s*,\s*setSayac\s*\]\s*=\s*useState\s*\(\s*0\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! Sayısal state tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'const [sayac, setSayac] = useState(0);' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: STATE GÜNCELLEME",
      title: "3. Soru: Buton ile State Değerini Artırma",
      prompt: "Butona tıklandığında sayacı 1 artıran <code>onClick={() =&gt; setSayac(sayac + 1)}</code> olayını ekleyebilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n  return (\n    <div>\n      <p>Sayı: {sayac}</p>\n      <button>Artır</button>\n    </div>\n  );\n}",
      filename: "Sayac.jsx",
      lang: "React / JSX",
      quickKeys: ["onClick={() => setSayac(sayac + 1)}", "setSayac(sayac + 1)", "onClick={() => setSayac(prev => prev + 1)}"],
      hint: "import { useState } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n  return (\n    <div>\n      <p>Sayı: {sayac}</p>\n      <button onClick={() => setSayac(sayac + 1)}>Artır</button>\n    </div>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n  return (\n    <div>\n      <p>Sayı: {sayac}</p>\n      <button onClick={() => setSayac(sayac + 1)}>Artır</button>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+onClick\s*=\s*\{\s*\(\s*\)\s*=>\s*setSayac\s*\(\s*(?:sayac\s*\+\s*1|prev\s*=>\s*prev\s*\+\s*1|s\s*=>\s*s\s*\+\s*1)\s*\)\s*\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Tıklama ile dinamik state güncellemesi bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: butona onClick={() => setSayac(sayac + 1)} ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: STRING VE METİN STATE'İ",
      title: "4. Soru: Metin State'i Tanımlama",
      prompt: "Başlangıç değeri 'Elma' olan <code>const [meyve, setMeyve] = useState('Elma');</code> state'ini tanımlayabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function MeyveSecici() {\n  // meyve state'ini tanımlayın:\n  \n  return <h3>Seçilen Meyve: {meyve}</h3>;\n}",
      filename: "MeyveSecici.jsx",
      lang: "React / JSX",
      quickKeys: ["const [meyve, setMeyve] = useState('Elma');", "useState('Elma');"],
      hint: "import { useState } from 'react';\n\nexport default function MeyveSecici() {\n  const [meyve, setMeyve] = useState('Elma');\n  return <h3>Seçilen Meyve: {meyve}</h3>;\n}",
      solution: "import { useState } from 'react';\n\nexport default function MeyveSecici() {\n  const [meyve, setMeyve] = useState('Elma');\n  return <h3>Seçilen Meyve: {meyve}</h3>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s*\[\s*meyve\s*,\s*setMeyve\s*\]\s*=\s*useState\s*\(\s*['"]Elma['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! Metin bazlı state tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'const [meyve, setMeyve] = useState(\"Elma\");' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 4: BOOLEAN TOGGLE STATE",
      title: "5. Soru: Boolean Durumunu Tersine Çevirme (Toggle)",
      prompt: "Butona tıklandığında <code>acik</code> state'ini tersine çeviren <code>onClick={() =&gt; setAcik(!acik)}</code> fonksiyonunu yazabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function Modal() {\n  const [acik, setAcik] = useState(false);\n  return (\n    <div>\n      <button>Pencereyi Aç/Kapat</button>\n      {acik && <p>Modal Açık!</p>}\n    </div>\n  );\n}",
      filename: "Modal.jsx",
      lang: "React / JSX",
      quickKeys: ["onClick={() => setAcik(!acik)}", "onClick={() => setAcik(prev => !prev)}"],
      hint: "import { useState } from 'react';\n\nexport default function Modal() {\n  const [acik, setAcik] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setAcik(!acik)}>Pencereyi Aç/Kapat</button>\n      {acik && <p>Modal Açık!</p>}\n    </div>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function Modal() {\n  const [acik, setAcik] = useState(false);\n  return (\n    <div>\n      <button onClick={() => setAcik(!acik)}>Pencereyi Aç/Kapat</button>\n      {acik && <p>Modal Açık!</p>}\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+onClick\s*=\s*\{\s*\(\s*\)\s*=>\s*setAcik\s*\(\s*(?:!acik|prev\s*=>\s*!prev|a\s*=>\s*!a)\s*\)\s*\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 4. Modül tamamlandı, Botanik Bahçe ve Şehir Parkı açıldı! 🌳" };
        }
        return { ok: false, msg: "Hata: butona onClick={() => setAcik(!acik)} ekleyin." };
      }
    }
  ],

  react_5: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: MOUNT VE BOŞ BAĞIMLILIK DİZİSİ",
      title: "1. Soru: Sayfa Açılışında 1 Kez Çalışan useEffect",
      prompt: "Bileşen ilk yüklendiğinde (mount) console.log yazan ve boş bağımlılık dizisi <code>[]</code> olan <code>useEffect</code> bloğunu yazabilir misin?",
      presetCode: "import { useEffect } from 'react';\n\nexport default function App() {\n  // Sayfa açıldığında 1 kez çalışan useEffect:\n  useEffect(() => {\n    console.log(\"Bileşen yüklendi!\");\n  }, []);\n\n  return <h2>Ana Sayfa</h2>;\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["useEffect(() => {", "}, []);", "console.log(\"Bileşen yüklendi!\");"],
      hint: "import { useEffect } from 'react';\n\nexport default function App() {\n  useEffect(() => {\n    console.log(\"Bileşen yüklendi!\");\n  }, []);\n\n  return <h2>Ana Sayfa</h2>;\n}",
      solution: "import { useEffect } from 'react';\n\nexport default function App() {\n  useEffect(() => {\n    console.log(\"Bileşen yüklendi!\");\n  }, []);\n\n  return <h2>Ana Sayfa</h2>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/useEffect\s*\(\s*\(\s*\)\s*=>\s*\{[\s\S]*console\.log\s*\(\s*['"]Bileşen yüklendi!['"]\s*\)\s*;?[\s\S]*\}\s*,\s*\[\s*\]\s*\)/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Mounting aşaması için useEffect başarıyla kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: useEffect(() => { console.log(\"Bileşen yüklendi!\"); }, []); şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: BAĞIMLILIK TAKİBİ (DEPENDENCY)",
      title: "2. Soru: State Değişince Tetiklenen useEffect",
      prompt: "<code>sayac</code> her değiştiğinde çalışması için bağımlılık dizisine <code>[sayac]</code> ekleyebilir misin?",
      presetCode: "import { useState, useEffect } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n\n  useEffect(() => {\n    console.log(\"Sayaç güncellendi:\", sayac);\n  }, [sayac]);\n\n  return <button onClick={() => setSayac(sayac + 1)}>Artır: {sayac}</button>;\n}",
      filename: "Sayac.jsx",
      lang: "React / JSX",
      quickKeys: ["[sayac]", ", [sayac]);"],
      hint: "import { useState, useEffect } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n\n  useEffect(() => {\n    console.log(\"Sayaç güncellendi:\", sayac);\n  }, [sayac]);\n\n  return <button onClick={() => setSayac(sayac + 1)}>Artır: {sayac}</button>;\n}",
      solution: "import { useState, useEffect } from 'react';\n\nexport default function Sayac() {\n  const [sayac, setSayac] = useState(0);\n\n  useEffect(() => {\n    console.log(\"Sayaç güncellendi:\", sayac);\n  }, [sayac]);\n\n  return <button onClick={() => setSayac(sayac + 1)}>Artır: {sayac}</button>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/useEffect\s*\([\s\S]*\}\s*,\s*\[\s*sayac\s*\]\s*\)/i.test(clean)) {
          return { ok: true, msg: "Harika! State bağımlılığı doğru tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: useEffect'in ikinci parametresine [sayac] verin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: CLEANUP TEMİZLEME FONKSİYONU",
      title: "3. Soru: Unmount ve clearInterval Temizliği",
      prompt: "useEffect içinden <code>return () =&gt; clearInterval(timer);</code> temizlik fonksiyonunu döndürebilir misin?",
      presetCode: "import { useEffect } from 'react';\n\nexport default function Timer() {\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log(\"Tik tak\");\n    }, 1000);\n\n    // Temizlik fonksiyonunu döndürün:\n    return () => clearInterval(timer);\n  }, []);\n\n  return <div>Timer Çalışıyor</div>;\n}",
      filename: "Timer.jsx",
      lang: "React / JSX",
      quickKeys: ["return () => clearInterval(timer);", "clearInterval(timer);", "return () =>"],
      hint: "import { useEffect } from 'react';\n\nexport default function Timer() {\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log(\"Tik tak\");\n    }, 1000);\n\n    return () => clearInterval(timer);\n  }, []);\n\n  return <div>Timer Çalışıyor</div>;\n}",
      solution: "import { useEffect } from 'react';\n\nexport default function Timer() {\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log(\"Tik tak\");\n    }, 1000);\n\n    return () => clearInterval(timer);\n  }, []);\n\n  return <div>Timer Çalışıyor</div>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/return\s*\(\s*\)\s*=>\s*clearInterval\s*\(\s*timer\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Bellek sızıntısını engelleyen cleanup fonksiyonu eklendi. ✓" };
        }
        return { ok: false, msg: "Hata: 'return () => clearInterval(timer);' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: DOCUMENT.TITLE GÜNCELLEME",
      title: "4. Soru: Sayfa Başlığını Dinamik Değiştirme",
      prompt: "useEffect içinde <code>document.title = `Sayaç: ${sayac}`;</code> kodunu çalıştırabilir misin?",
      presetCode: "import { useState, useEffect } from 'react';\n\nexport default function BaslikSayac() {\n  const [sayac, setSayac] = useState(0);\n\n  useEffect(() => {\n    // document.title güncelleyin:\n    document.title = `Sayaç: ${sayac}`;\n  }, [sayac]);\n\n  return <div>Başlık Değişiyor</div>;\n}",
      filename: "BaslikSayac.jsx",
      lang: "React / JSX",
      quickKeys: ["document.title = `Sayaç: ${sayac}`;", "document.title =", "`Sayaç: ${sayac}`;"],
      hint: "import { useState, useEffect } from 'react';\n\nexport default function BaslikSayac() {\n  const [sayac, setSayac] = useState(0);\n\n  useEffect(() => {\n    document.title = `Sayaç: ${sayac}`;\n  }, [sayac]);\n\n  return <div>Başlık Değişiyor</div>;\n}",
      solution: "import { useState, useEffect } from 'react';\n\nexport default function BaslikSayac() {\n  const [sayac, setSayac] = useState(0);\n\n  useEffect(() => {\n    document.title = `Sayaç: ${sayac}`;\n  }, [sayac]);\n\n  return <div>Başlık Değişiyor</div>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/document\.title\s*=\s*(?:`Sayaç:\s*\$\{\s*sayac\s*\}`|['"]Sayaç:\s*['"]\s*\+\s*sayac)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! DOM başlığı useEffect ile senkronize edildi. ✓" };
        }
        return { ok: false, msg: "Hata: document.title = `Sayaç: ${sayac}`; yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 5: API SİMÜLASYONU VE FETCH",
      title: "5. Soru: Açılışta Veri Yükleme",
      prompt: "useEffect içinde <code>fetch('/api/tarla').then(res =&gt; res.json()).then(data =&gt; setVeri(data));</code> çağrısını boş bağımlılık dizisiyle yapabilir misin?",
      presetCode: "import { useState, useEffect } from 'react';\n\nexport default function TarlaVerisi() {\n  const [veri, setVeri] = useState(null);\n\n  useEffect(() => {\n    fetch('/api/tarla')\n      .then(res => res.json())\n      .then(data => setVeri(data));\n  }, []);\n\n  return <div>Veri Yüklendi</div>;\n}",
      filename: "TarlaVerisi.jsx",
      lang: "React / JSX",
      quickKeys: ["fetch('/api/tarla')", ".then(res => res.json())", ".then(data => setVeri(data));", "}, []);"],
      hint: "import { useState, useEffect } from 'react';\n\nexport default function TarlaVerisi() {\n  const [veri, setVeri] = useState(null);\n\n  useEffect(() => {\n    fetch('/api/tarla')\n      .then(res => res.json())\n      .then(data => setVeri(data));\n  }, []);\n\n  return <div>Veri Yüklendi</div>;\n}",
      solution: "import { useState, useEffect } from 'react';\n\nexport default function TarlaVerisi() {\n  const [veri, setVeri] = useState(null);\n\n  useEffect(() => {\n    fetch('/api/tarla')\n      .then(res => res.json())\n      .then(data => setVeri(data));\n  }, []);\n\n  return <div>Veri Yüklendi</div>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/fetch\s*\(\s*['"]\/api\/tarla['"]\s*\)[\s\S]*\.then[\s\S]*setVeri\s*\(\s*data\s*\)[\s\S]*\[\s*\]/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 5. Modül tamamlandı, Modern Rezidanslar ve İş Kuleleri yükseldi! 🏢" };
        }
        return { ok: false, msg: "Hata: useEffect içinde fetch çağrısını doğru şekilde tamamlayın." };
      }
    }
  ],

  react_6: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: ONCLICK OLAYI",
      title: "1. Soru: Butona onClick Fonksiyonu Bağlama",
      prompt: "Butona <code>onClick={handleClick}</code> referansını (parantezsiz) bağlayabilir misin?",
      presetCode: "export default function Buton() {\n  const handleClick = () => {\n    alert(\"Tıklandı!\");\n  };\n\n  return <button>Bana Tıkla</button>;\n}",
      filename: "Buton.jsx",
      lang: "React / JSX",
      quickKeys: ["onClick={handleClick}", "onClick=", "{handleClick}"],
      hint: "export default function Buton() {\n  const handleClick = () => {\n    alert(\"Tıklandı!\");\n  };\n\n  return <button onClick={handleClick}>Bana Tıkla</button>;\n}",
      solution: "export default function Buton() {\n  const handleClick = () => {\n    alert(\"Tıklandı!\");\n  };\n\n  return <button onClick={handleClick}>Bana Tıkla</button>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+onClick\s*=\s*\{\s*handleClick\s*\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! onClick olayı doğru bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <button onClick={handleClick}>Bana Tıkla</button> şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: PARAMETRELİ OLAY TETİKLEME",
      title: "2. Soru: Arrow Function ile Parametre Gönderme",
      prompt: "Butona tıklandığında 5 numaralı ID'yi silmek için <code>onClick={() =&gt; urunSil(5)}</code> yazabilir misin?",
      presetCode: "export default function SilButon() {\n  const urunSil = (id) => {\n    console.log(\"Silindi:\", id);\n  };\n\n  return <button>Ürünü Sil</button>;\n}",
      filename: "SilButon.jsx",
      lang: "React / JSX",
      quickKeys: ["onClick={() => urunSil(5)}", "urunSil(5)"],
      hint: "export default function SilButon() {\n  const urunSil = (id) => {\n    console.log(\"Silindi:\", id);\n  };\n\n  return <button onClick={() => urunSil(5)}>Ürünü Sil</button>;\n}",
      solution: "export default function SilButon() {\n  const urunSil = (id) => {\n    console.log(\"Silindi:\", id);\n  };\n\n  return <button onClick={() => urunSil(5)}>Ürünü Sil</button>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+onClick\s*=\s*\{\s*\(\s*\)\s*=>\s*urunSil\s*\(\s*5\s*\)\s*\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Harika! Parametreli olay tetikleyicisi uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: <button onClick={() => urunSil(5)}>Ürünü Sil</button> yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: ONCHANGE İLE METİN YAKALAMA",
      title: "3. Soru: Input Değişikliğini Yakalama",
      prompt: "Inputa yazılan metni almak için <code>onChange={(e) =&gt; setMetin(e.target.value)}</code> olayını ekleyebilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function Arama() {\n  const [metin, setMetin] = useState('');\n  return (\n    <div>\n      <input type=\"text\" placeholder=\"Ara...\" />\n    </div>\n  );\n}",
      filename: "Arama.jsx",
      lang: "React / JSX",
      quickKeys: ["onChange={(e) => setMetin(e.target.value)}", "e.target.value"],
      hint: "import { useState } from 'react';\n\nexport default function Arama() {\n  const [metin, setMetin] = useState('');\n  return (\n    <div>\n      <input type=\"text\" placeholder=\"Ara...\" onChange={(e) => setMetin(e.target.value)} />\n    </div>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function Arama() {\n  const [metin, setMetin] = useState('');\n  return (\n    <div>\n      <input type=\"text\" placeholder=\"Ara...\" onChange={(e) => setMetin(e.target.value)} />\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<input[^>]*onChange\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*setMetin\s*\(\s*e\.target\.value\s*\)\s*\}/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! e.target.value ile girdi değeri yakalandı. ✓" };
        }
        return { ok: false, msg: "Hata: input içine onChange={(e) => setMetin(e.target.value)} ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: FORM SUBMIT VE PREVENTDEFAULT",
      title: "4. Soru: Sayfa Yenilenmesini Engelleme",
      prompt: "Form submit fonksiyonunda sayfanın yeniden yüklenmesini önleyen <code>e.preventDefault();</code> komutunu çağırabilir misin?",
      presetCode: "export default function GirisFormu() {\n  const handleSubmit = (e) => {\n    // Sayfa yenilenmesini engelleyin:\n    e.preventDefault();\n    console.log(\"Gönderildi\");\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Giriş</button>\n    </form>\n  );\n}",
      filename: "GirisFormu.jsx",
      lang: "React / JSX",
      quickKeys: ["e.preventDefault();", "preventDefault()"],
      hint: "export default function GirisFormu() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"Gönderildi\");\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Giriş</button>\n    </form>\n  );\n}",
      solution: "export default function GirisFormu() {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"Gönderildi\");\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <button type=\"submit\">Giriş</button>\n    </form>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/e\.preventDefault\s*\(\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! e.preventDefault() ile SPA davranış korundu. ✓" };
        }
        return { ok: false, msg: "Hata: 'e.preventDefault();' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 6: MOUSE HOVER OLAYLARI",
      title: "5. Soru: onMouseEnter Olayı",
      prompt: "Kutuya fare ile gelindiğinde çalışan <code>onMouseEnter={() =&gt; setVurgulu(true)}</code> olayını ekleyebilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function Kart() {\n  const [vurgulu, setVurgulu] = useState(false);\n  return (\n    <div className={vurgulu ? 'vurgulu-kutu' : 'kutu'}>\n      Kart İçeriği\n    </div>\n  );\n}",
      filename: "Kart.jsx",
      lang: "React / JSX",
      quickKeys: ["onMouseEnter={() => setVurgulu(true)}", "onMouseEnter="],
      hint: "import { useState } from 'react';\n\nexport default function Kart() {\n  const [vurgulu, setVurgulu] = useState(false);\n  return (\n    <div className={vurgulu ? 'vurgulu-kutu' : 'kutu'} onMouseEnter={() => setVurgulu(true)}>\n      Kart İçeriği\n    </div>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function Kart() {\n  const [vurgulu, setVurgulu] = useState(false);\n  return (\n    <div className={vurgulu ? 'vurgulu-kutu' : 'kutu'} onMouseEnter={() => setVurgulu(true)}>\n      Kart İçeriği\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<div[^>]*onMouseEnter\s*=\s*\{\s*\(\s*\)\s*=>\s*setVurgulu\s*\(\s*true\s*\)\s*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 6. Modül tamamlandı, Sinema ve Kültür Merkezi inşa edildi! 🎬" };
        }
        return { ok: false, msg: "Hata: div etiketine onMouseEnter={() => setVurgulu(true)} ekleyin." };
      }
    }
  ],

  react_7: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: MANTIKSAL VE (&&) İLE RENDER",
      title: "1. Soru: && Kısa Devre Operatörü",
      prompt: "<code>girisVar</code> true olduğunda paragrafı göstermek için <code>{girisVar &amp;&amp; &lt;p&gt;Hoş geldin Çiftçi!&lt;/p&gt;}</code> yazabilir misin?",
      presetCode: "export default function Panel({ girisVar }) {\n  return (\n    <div>\n      <!-- girisVar doğruysa göster: -->\n      {girisVar && <p>Hoş geldin Çiftçi!</p>}\n    </div>\n  );\n}",
      filename: "Panel.jsx",
      lang: "React / JSX",
      quickKeys: ["{girisVar && <p>Hoş geldin Çiftçi!</p>}", "{girisVar &&", "}"],
      hint: "export default function Panel({ girisVar }) {\n  return (\n    <div>\n      {girisVar && <p>Hoş geldin Çiftçi!</p>}\n    </div>\n  );\n}",
      solution: "export default function Panel({ girisVar }) {\n  return (\n    <div>\n      {girisVar && <p>Hoş geldin Çiftçi!</p>}\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\{\s*girisVar\s*&&\s*<p>Hoş geldin Çiftçi!<\/p>\s*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! && operatörü ile koşullu render uygulandı. ✓" };
        }
        return { ok: false, msg: "Hata: '{girisVar && <p>Hoş geldin Çiftçi!</p>}' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: TERNARY (? :) OPERATÖRÜ",
      title: "2. Soru: Ternary ile İkili Koşul",
      prompt: "<code>oturum</code> açıksa <code>&lt;button&gt;Çıkış Yap&lt;/button&gt;</code>, değilse <code>&lt;button&gt;Giriş Yap&lt;/button&gt;</code> render eden ternary ifadesini yazabilir misin?",
      presetCode: "export default function Auth({ oturum }) {\n  return (\n    <div>\n      {oturum ? <button>Çıkış Yap</button> : <button>Giriş Yap</button>}\n    </div>\n  );\n}",
      filename: "Auth.jsx",
      lang: "React / JSX",
      quickKeys: ["{oturum ? <button>Çıkış Yap</button> : <button>Giriş Yap</button>}", "?", ":"],
      hint: "export default function Auth({ oturum }) {\n  return (\n    <div>\n      {oturum ? <button>Çıkış Yap</button> : <button>Giriş Yap</button>}\n    </div>\n  );\n}",
      solution: "export default function Auth({ oturum }) {\n  return (\n    <div>\n      {oturum ? <button>Çıkış Yap</button> : <button>Giriş Yap</button>}\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/\{\s*oturum\s*\?\s*<button>Çıkış Yap<\/button>\s*:\s*<button>Giriş Yap<\/button>\s*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! Ternary koşullu render başarıyla yazıldı. ✓" };
        }
        return { ok: false, msg: "Hata: '{oturum ? <button>Çıkış Yap</button> : <button>Giriş Yap</button>}' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: DİNAMİK SINIF ATAMA",
      title: "3. Soru: Koşullu className Atama",
      prompt: "<code>aktif</code> değişkenine göre <code>className={aktif ? 'tab-aktif' : 'tab-pasif'}</code> sınıfını verebilir misin?",
      presetCode: "export default function Tab({ aktif }) {\n  return (\n    <div className={aktif ? 'tab-aktif' : 'tab-pasif'}>\n      Sekme\n    </div>\n  );\n}",
      filename: "Tab.jsx",
      lang: "React / JSX",
      quickKeys: ["className={aktif ? 'tab-aktif' : 'tab-pasif'}", "className={", "}"],
      hint: "export default function Tab({ aktif }) {\n  return (\n    <div className={aktif ? 'tab-aktif' : 'tab-pasif'}>\n      Sekme\n    </div>\n  );\n}",
      solution: "export default function Tab({ aktif }) {\n  return (\n    <div className={aktif ? 'tab-aktif' : 'tab-pasif'}>\n      Sekme\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+className\s*=\s*\{\s*aktif\s*\?\s*['"]tab-aktif['"]\s*:\s*['"]tab-pasif['"]\s*\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Dinamik className koşulu bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: className={aktif ? 'tab-aktif' : 'tab-pasif'} yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: ERKEN DÖNÜŞ (EARLY RETURN)",
      title: "4. Soru: Yükleniyor Durumunda Erken Return",
      prompt: "<code>if (yukleniyor) return &lt;h2&gt;Yükleniyor...&lt;/h2&gt;;</code> erken dönüş satırını ekleyebilir misin?",
      presetCode: "export default function Profil({ yukleniyor, kullanici }) {\n  // yukleniyor true ise erken return yapın:\n  if (yukleniyor) return <h2>Yükleniyor...</h2>;\n\n  return <h2>Hoş geldin {kullanici.ad}</h2>;\n}",
      filename: "Profil.jsx",
      lang: "React / JSX",
      quickKeys: ["if (yukleniyor) return <h2>Yükleniyor...</h2>;", "if (yukleniyor)", "return <h2>Yükleniyor...</h2>;"],
      hint: "export default function Profil({ yukleniyor, kullanici }) {\n  if (yukleniyor) return <h2>Yükleniyor...</h2>;\n\n  return <h2>Hoş geldin {kullanici.ad}</h2>;\n}",
      solution: "export default function Profil({ yukleniyor, kullanici }) {\n  if (yukleniyor) return <h2>Yükleniyor...</h2>;\n\n  return <h2>Hoş geldin {kullanici.ad}</h2>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/if\s*\(\s*yukleniyor\s*\)\s*return\s*\(?\s*<h2>Yükleniyor\.\.\.<\/h2>\s*\)?\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! Early Return ile kod okunabilirliği ve render kontrolü sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'if (yukleniyor) return <h2>Yükleniyor...</h2>;' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 7: BOŞ LİSTE KONTROLÜ",
      title: "5. Soru: Sepet Boş Uyarısı",
      prompt: "<code>urunler.length === 0</code> ise <code>&lt;p&gt;Sepetiniz boş&lt;/p&gt;</code> yazan koşulu tamamlayabilir misin?",
      presetCode: "export default function Sepet({ urunler }) {\n  return (\n    <div>\n      {urunler.length === 0 ? (\n        <p>Sepetiniz boş</p>\n      ) : (\n        <p>{urunler.length} adet ürün var</p>\n      )}\n    </div>\n  );\n}",
      filename: "Sepet.jsx",
      lang: "React / JSX",
      quickKeys: ["urunler.length === 0", "<p>Sepetiniz boş</p>"],
      hint: "export default function Sepet({ urunler }) {\n  return (\n    <div>\n      {urunler.length === 0 ? (\n        <p>Sepetiniz boş</p>\n      ) : (\n        <p>{urunler.length} adet ürün var</p>\n      )}\n    </div>\n  );\n}",
      solution: "export default function Sepet({ urunler }) {\n  return (\n    <div>\n      {urunler.length === 0 ? (\n        <p>Sepetiniz boş</p>\n      ) : (\n        <p>{urunler.length} adet ürün var</p>\n      )}\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/urunler\.length\s*===\s*0\s*\?\s*\(?\s*<p>Sepetiniz boş<\/p>\s*\)?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 7. Modül tamamlandı, Lunapark ve Dönme Dolap kuruldu! 🎡" };
        }
        return { ok: false, msg: "Hata: urunler.length === 0 kontrolünü ekleyin." };
      }
    }
  ],

  react_8: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: ARRAY.MAP İLE LİSTELEME",
      title: "1. Soru: String Dizisini .map ile Dönüştürme",
      prompt: "<code>meyveler</code> dizisini <code>.map((m) =&gt; &lt;li key={m}&gt;{m}&lt;/li&gt;)</code> ile ul içine listeleyebilir misin?",
      presetCode: "export default function MeyveListesi() {\n  const meyveler = [\"Elma\", \"Armut\", \"Çilek\"];\n  return (\n    <ul>\n      {meyveler.map((m) => (\n        <li key={m}>{m}</li>\n      ))}\n    </ul>\n  );\n}",
      filename: "MeyveListesi.jsx",
      lang: "React / JSX",
      quickKeys: ["{meyveler.map((m) => <li key={m}>{m}</li>)}", "key={m}", "<li key={m}>{m}</li>"],
      hint: "export default function MeyveListesi() {\n  const meyveler = [\"Elma\", \"Armut\", \"Çilek\"];\n  return (\n    <ul>\n      {meyveler.map((m) => (\n        <li key={m}>{m}</li>\n      ))}\n    </ul>\n  );\n}",
      solution: "export default function MeyveListesi() {\n  const meyveler = [\"Elma\", \"Armut\", \"Çilek\"];\n  return (\n    <ul>\n      {meyveler.map((m) => (\n        <li key={m}>{m}</li>\n      ))}\n    </ul>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/meyveler\.map\s*\(\s*\(?\s*m\s*\)?\s*=>\s*\(?\s*<li\s+key\s*=\s*\{\s*m\s*\}\s*>\s*\{\s*m\s*\}\s*<\/li>\s*\)?\s*\)/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Dizi elemanları .map ile listelendi. ✓" };
        }
        return { ok: false, msg: "Hata: meyveler.map((m) => <li key={m}>{m}</li>) şeklinde yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: OBJE DİZİSİ VE ID KEY",
      title: "2. Soru: Obje Dizisini Benzersiz Key ile Listeleme",
      prompt: "<code>urunler</code> dizisindeki her ürün için <code>&lt;div key={u.id}&gt;{u.ad}&lt;/div&gt;</code> render edebilir misin?",
      presetCode: "export default function UrunListesi() {\n  const urunler = [\n    { id: 1, ad: \"Traktör Tohumu\" },\n    { id: 2, ad: \"Sulama Hortumu\" }\n  ];\n  return (\n    <div>\n      {urunler.map((u) => (\n        <div key={u.id}>{u.ad}</div>\n      ))}\n    </div>\n  );\n}",
      filename: "UrunListesi.jsx",
      lang: "React / JSX",
      quickKeys: ["{urunler.map((u) => <div key={u.id}>{u.ad}</div>)}", "key={u.id}", "<div key={u.id}>{u.ad}</div>"],
      hint: "export default function UrunListesi() {\n  const urunler = [\n    { id: 1, ad: \"Traktör Tohumu\" },\n    { id: 2, ad: \"Sulama Hortumu\" }\n  ];\n  return (\n    <div>\n      {urunler.map((u) => (\n        <div key={u.id}>{u.ad}</div>\n      ))}\n    </div>\n  );\n}",
      solution: "export default function UrunListesi() {\n  const urunler = [\n    { id: 1, ad: \"Traktör Tohumu\" },\n    { id: 2, ad: \"Sulama Hortumu\" }\n  ];\n  return (\n    <div>\n      {urunler.map((u) => (\n        <div key={u.id}>{u.ad}</div>\n      ))}\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/urunler\.map\s*\(\s*\(?\s*u\s*\)?\s*=>\s*\(?\s*<div\s+key\s*=\s*\{\s*u\.id\s*\}\s*>\s*\{\s*u\.ad\s*\}\s*<\/div>\s*\)?\s*\)/i.test(clean)) {
          return { ok: true, msg: "Harika! Benzersiz id key ile obje listesi render edildi. ✓" };
        }
        return { ok: false, msg: "Hata: urunler.map((u) => <div key={u.id}>{u.ad}</div>) yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: EN DIŞ KAPSAYICIYA KEY VERME",
      title: "3. Soru: Kart Bileşenine Key Ekleme",
      prompt: "Map döngüsünde en dıştaki <code>&lt;div className=\"kart\" key={u.id}&gt;</code> etiketine key ekleyebilir misin?",
      presetCode: "export default function Katalog({ urunler }) {\n  return (\n    <section>\n      {urunler.map((u) => (\n        <div className=\"kart\" key={u.id}>\n          <h3>{u.ad}</h3>\n          <p>{u.fiyat} TL</p>\n        </div>\n      ))}\n    </section>\n  );\n}",
      filename: "Katalog.jsx",
      lang: "React / JSX",
      quickKeys: ["key={u.id}", "<div className=\"kart\" key={u.id}>"],
      hint: "export default function Katalog({ urunler }) {\n  return (\n    <section>\n      {urunler.map((u) => (\n        <div className=\"kart\" key={u.id}>\n          <h3>{u.ad}</h3>\n          <p>{u.fiyat} TL</p>\n        </div>\n      ))}\n    </section>\n  );\n}",
      solution: "export default function Katalog({ urunler }) {\n  return (\n    <section>\n      {urunler.map((u) => (\n        <div className=\"kart\" key={u.id}>\n          <h3>{u.ad}</h3>\n          <p>{u.fiyat} TL</p>\n        </div>\n      ))}\n    </section>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<div\s+[^>]*className\s*=\s*["']kart["'][^>]*key\s*=\s*\{\s*u\.id\s*\}[^>]*>/i.test(clean) ||
            /<div\s+[^>]*key\s*=\s*\{\s*u\.id\s*\}[^>]*className\s*=\s*["']kart["'][^>]*>/i.test(clean)) {
          return { ok: true, msg: "Süper! Key prop'u en dış kök elemana bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <div className=\"kart\" key={u.id}> şeklinde yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: FILTER VE MAP BİRLİKTELİĞİ",
      title: "4. Soru: Filtreleyip Listeleme",
      prompt: "Sadece aktif olanları filtreleyip listelemek için <code>gorevler.filter(g =&gt; g.aktif).map(g =&gt; &lt;li key={g.id}&gt;{g.baslik}&lt;/li&gt;)</code> yazabilir misin?",
      presetCode: "export default function AktifGorevler({ gorevler }) {\n  return (\n    <ul>\n      {gorevler\n        .filter((g) => g.aktif)\n        .map((g) => (\n          <li key={g.id}>{g.baslik}</li>\n        ))}\n    </ul>\n  );\n}",
      filename: "AktifGorevler.jsx",
      lang: "React / JSX",
      quickKeys: [".filter((g) => g.aktif)", ".map((g) => <li key={g.id}>{g.baslik}</li>)"],
      hint: "export default function AktifGorevler({ gorevler }) {\n  return (\n    <ul>\n      {gorevler\n        .filter((g) => g.aktif)\n        .map((g) => (\n          <li key={g.id}>{g.baslik}</li>\n        ))}\n    </ul>\n  );\n}",
      solution: "export default function AktifGorevler({ gorevler }) {\n  return (\n    <ul>\n      {gorevler\n        .filter((g) => g.aktif)\n        .map((g) => (\n          <li key={g.id}>{g.baslik}</li>\n        ))}\n    </ul>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/filter\s*\(\s*\(?\s*g\s*\)?\s*=>\s*g\.aktif\s*\)[\s\S]*map\s*\(\s*\(?\s*g\s*\)?\s*=>\s*\(?\s*<li\s+key\s*=\s*\{\s*g\.id\s*\}\s*>\s*\{\s*g\.baslik\s*\}\s*<\/li>\s*\)?\s*\)/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! .filter().map() zinciri kuruldu. ✓" };
        }
        return { ok: false, msg: "Hata: filter ve map metotlarını doğru bağlayın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 8: DESTRUCTURING İLE MAP",
      title: "5. Soru: Parametrede Destructuring Yaparak Map",
      prompt: "Map içinde <code>({ id, ad }) =&gt; &lt;li key={id}&gt;{ad}&lt;/li&gt;</code> destructuring sözdizimini yazabilir misin?",
      presetCode: "export default function Liste({ kisiler }) {\n  return (\n    <ul>\n      {kisiler.map(({ id, ad }) => (\n        <li key={id}>{ad}</li>\n      ))}\n    </ul>\n  );\n}",
      filename: "Liste.jsx",
      lang: "React / JSX",
      quickKeys: ["{kisiler.map(({ id, ad }) => <li key={id}>{ad}</li>)}", "({ id, ad }) =>"],
      hint: "export default function Liste({ kisiler }) {\n  return (\n    <ul>\n      {kisiler.map(({ id, ad }) => (\n        <li key={id}>{ad}</li>\n      ))}\n    </ul>\n  );\n}",
      solution: "export default function Liste({ kisiler }) {\n  return (\n    <ul>\n      {kisiler.map(({ id, ad }) => (\n        <li key={id}>{ad}</li>\n      ))}\n    </ul>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/kisiler\.map\s*\(\s*\(\s*\{\s*(?:id\s*,\s*ad|ad\s*,\s*id)\s*\}\s*\)\s*=>\s*\(?\s*<li\s+key\s*=\s*\{\s*id\s*\}\s*>\s*\{\s*ad\s*\}\s*<\/li>\s*\)?\s*\)/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 8. Modül tamamlandı, Yönetim Sarayı ve Belediye inşa edildi! 🏛️" };
        }
        return { ok: false, msg: "Hata: kisiler.map(({ id, ad }) => <li key={id}>{ad}</li>) yazın." };
      }
    }
  ],

  react_9: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: KONTROLLÜ METİN INPUTU",
      title: "1. Soru: value ve onChange ile Kontrollü Input",
      prompt: "Inputa <code>value={ad}</code> ve <code>onChange={(e) =&gt; setAd(e.target.value)}</code> ekleyerek kontrollü bileşen yapabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function AdGiris() {\n  const [ad, setAd] = useState('');\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={ad}\n        onChange={(e) => setAd(e.target.value)}\n        placeholder=\"Adınız\"\n      />\n      <p>Girilen: {ad}</p>\n    </div>\n  );\n}",
      filename: "AdGiris.jsx",
      lang: "React / JSX",
      quickKeys: ["value={ad}", "onChange={(e) => setAd(e.target.value)}"],
      hint: "import { useState } from 'react';\n\nexport default function AdGiris() {\n  const [ad, setAd] = useState('');\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={ad}\n        onChange={(e) => setAd(e.target.value)}\n        placeholder=\"Adınız\"\n      />\n      <p>Girilen: {ad}</p>\n    </div>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function AdGiris() {\n  const [ad, setAd] = useState('');\n  return (\n    <div>\n      <input\n        type=\"text\"\n        value={ad}\n        onChange={(e) => setAd(e.target.value)}\n        placeholder=\"Adınız\"\n      />\n      <p>Girilen: {ad}</p>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<input[^>]*value\s*=\s*\{\s*ad\s*\}[^>]*onChange\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*setAd\s*\(\s*e\.target\.value\s*\)\s*\}/i.test(clean) ||
            /<input[^>]*onChange\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*setAd\s*\(\s*e\.target\.value\s*\)\s*\}[^>]*value\s*=\s*\{\s*ad\s*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Çift yönlü kontrollü input bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: input etiketine value={ad} ve onChange={(e) => setAd(e.target.value)} ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: CHECKBOX KONTROLÜ",
      title: "2. Soru: checked ve e.target.checked",
      prompt: "Checkbox için <code>checked={kabul}</code> ve <code>onChange={(e) =&gt; setKabul(e.target.checked)}</code> yazabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function Sozlesme() {\n  const [kabul, setKabul] = useState(false);\n  return (\n    <label>\n      <input\n        type=\"checkbox\"\n        checked={kabul}\n        onChange={(e) => setKabul(e.target.checked)}\n      />\n      Şartları kabul ediyorum\n    </label>\n  );\n}",
      filename: "Sozlesme.jsx",
      lang: "React / JSX",
      quickKeys: ["checked={kabul}", "onChange={(e) => setKabul(e.target.checked)}", "e.target.checked"],
      hint: "import { useState } from 'react';\n\nexport default function Sozlesme() {\n  const [kabul, setKabul] = useState(false);\n  return (\n    <label>\n      <input\n        type=\"checkbox\"\n        checked={kabul}\n        onChange={(e) => setKabul(e.target.checked)}\n      />\n      Şartları kabul ediyorum\n    </label>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function Sozlesme() {\n  const [kabul, setKabul] = useState(false);\n  return (\n    <label>\n      <input\n        type=\"checkbox\"\n        checked={kabul}\n        onChange={(e) => setKabul(e.target.checked)}\n      />\n      Şartları kabul ediyorum\n    </label>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<input[^>]*checked\s*=\s*\{\s*kabul\s*\}[^>]*onChange\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*setKabul\s*\(\s*e\.target\.checked\s*\)\s*\}/i.test(clean) ||
            /<input[^>]*onChange\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*setKabul\s*\(\s*e\.target\.checked\s*\)\s*\}[^>]*checked\s*=\s*\{\s*kabul\s*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! Checkbox checked durumu yönetildi. ✓" };
        }
        return { ok: false, msg: "Hata: input etiketine checked={kabul} ve onChange={(e) => setKabul(e.target.checked)} ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: KONTROLLÜ SELECT SEÇİM KUTUSU",
      title: "3. Soru: Select ve Option Yönetimi",
      prompt: "<code>&lt;select value={sehir} onChange={(e) =&gt; setSehir(e.target.value)}&gt;</code> bileşenini tanımlayabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function SehirSecici() {\n  const [sehir, setSehir] = useState('Ankara');\n  return (\n    <select value={sehir} onChange={(e) => setSehir(e.target.value)}>\n      <option value=\"Ankara\">Ankara</option>\n      <option value=\"İstanbul\">İstanbul</option>\n      <option value=\"İzmir\">İzmir</option>\n    </select>\n  );\n}",
      filename: "SehirSecici.jsx",
      lang: "React / JSX",
      quickKeys: ["value={sehir}", "onChange={(e) => setSehir(e.target.value)}"],
      hint: "import { useState } from 'react';\n\nexport default function SehirSecici() {\n  const [sehir, setSehir] = useState('Ankara');\n  return (\n    <select value={sehir} onChange={(e) => setSehir(e.target.value)}>\n      <option value=\"Ankara\">Ankara</option>\n      <option value=\"İstanbul\">İstanbul</option>\n      <option value=\"İzmir\">İzmir</option>\n    </select>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function SehirSecici() {\n  const [sehir, setSehir] = useState('Ankara');\n  return (\n    <select value={sehir} onChange={(e) => setSehir(e.target.value)}>\n      <option value=\"Ankara\">Ankara</option>\n      <option value=\"İstanbul\">İstanbul</option>\n      <option value=\"İzmir\">İzmir</option>\n    </select>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<select[^>]*value\s*=\s*\{\s*sehir\s*\}[^>]*onChange\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*setSehir\s*\(\s*e\.target\.value\s*\)\s*\}/i.test(clean) ||
            /<select[^>]*onChange\s*=\s*\{\s*\(?\s*e\s*\)?\s*=>\s*setSehir\s*\(\s*e\.target\.value\s*\)\s*\}[^>]*value\s*=\s*\{\s*sehir\s*\}/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Kontrollü select bileşeni bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: select etiketine value={sehir} ve onChange={(e) => setSehir(e.target.value)} ekleyin." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: ÇOKLU INPUT YÖNETİMİ",
      title: "4. Soru: Obje State ile Dinamik Input Güncelleme",
      prompt: "<code>handleChange</code> içinde <code>setForm({ ...form, [e.target.name]: e.target.value });</code> yazabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function CokluForm() {\n  const [form, setForm] = useState({ ad: '', email: '' });\n\n  const handleChange = (e) => {\n    // Dinamik state güncellemesi:\n    setForm({ ...form, [e.target.name]: e.target.value });\n  };\n\n  return (\n    <div>\n      <input name=\"ad\" value={form.ad} onChange={handleChange} />\n      <input name=\"email\" value={form.email} onChange={handleChange} />\n    </div>\n  );\n}",
      filename: "CokluForm.jsx",
      lang: "React / JSX",
      quickKeys: ["setForm({ ...form, [e.target.name]: e.target.value });", "...form", "[e.target.name]: e.target.value"],
      hint: "import { useState } from 'react';\n\nexport default function CokluForm() {\n  const [form, setForm] = useState({ ad: '', email: '' });\n\n  const handleChange = (e) => {\n    setForm({ ...form, [e.target.name]: e.target.value });\n  };\n\n  return (\n    <div>\n      <input name=\"ad\" value={form.ad} onChange={handleChange} />\n      <input name=\"email\" value={form.email} onChange={handleChange} />\n    </div>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function CokluForm() {\n  const [form, setForm] = useState({ ad: '', email: '' });\n\n  const handleChange = (e) => {\n    setForm({ ...form, [e.target.name]: e.target.value });\n  };\n\n  return (\n    <div>\n      <input name=\"ad\" value={form.ad} onChange={handleChange} />\n      <input name=\"email\" value={form.email} onChange={handleChange} />\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/setForm\s*\(\s*\{\s*\.\.\.form\s*,\s*\[\s*e\.target\.name\s*\]\s*:\s*e\.target\.value\s*\}\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! Tek bir handler ile dinamik çoklu form yönetimi sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'setForm({ ...form, [e.target.name]: e.target.value });' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 9: GÖNDERİM SONRASI SIFIRLAMA",
      title: "5. Soru: Form Gönderilince State Sıfırlama",
      prompt: "handleSubmit fonksiyonunun sonunda inputu temizlemek için <code>setMetin('');</code> çağrısını yapabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport default function YorumFormu() {\n  const [metin, setMetin] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"Kayıt:\", metin);\n    // metin state'ini sıfırlayın:\n    setMetin('');\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={metin} onChange={(e) => setMetin(e.target.value)} />\n      <button type=\"submit\">Gönder</button>\n    </form>\n  );\n}",
      filename: "YorumFormu.jsx",
      lang: "React / JSX",
      quickKeys: ["setMetin('');", "setMetin(\"\");"],
      hint: "import { useState } from 'react';\n\nexport default function YorumFormu() {\n  const [metin, setMetin] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"Kayıt:\", metin);\n    setMetin('');\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={metin} onChange={(e) => setMetin(e.target.value)} />\n      <button type=\"submit\">Gönder</button>\n    </form>\n  );\n}",
      solution: "import { useState } from 'react';\n\nexport default function YorumFormu() {\n  const [metin, setMetin] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(\"Kayıt:\", metin);\n    setMetin('');\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input value={metin} onChange={(e) => setMetin(e.target.value)} />\n      <button type=\"submit\">Gönder</button>\n    </form>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/setMetin\s*\(\s*['"]['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 9. Modül tamamlandı, Şehir Hastanesi ve Acil Servis hizmete girdi! 🏥" };
        }
        return { ok: false, msg: "Hata: 'setMetin(\"\");' satırını ekleyin." };
      }
    }
  ],

  react_10: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: USEREF İLE REF OLUŞTURMA",
      title: "1. Soru: useRef Tanımlama",
      prompt: "<code>const inputRef = useRef(null);</code> ref nesnesini tanımlayabilir misin?",
      presetCode: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  // inputRef tanımlayın:\n  const inputRef = useRef(null);\n\n  return <input placeholder=\"Buraya odaklan\" />;\n}",
      filename: "Odaklayici.jsx",
      lang: "React / JSX",
      quickKeys: ["const inputRef = useRef(null);", "useRef(null);"],
      hint: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n  return <input placeholder=\"Buraya odaklan\" />;\n}",
      solution: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n  return <input placeholder=\"Buraya odaklan\" />;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s+inputRef\s*=\s*useRef\s*\(\s*null\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! useRef başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'const inputRef = useRef(null);' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: REF'İ ELEMANA BAĞLAMA",
      title: "2. Soru: ref Prop'u Ekleme",
      prompt: "Input etiketine <code>ref={inputRef}</code> özelliğini bağlayabilir misin?",
      presetCode: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n  return <input ref={inputRef} placeholder=\"Buraya odaklan\" />;\n}",
      filename: "Odaklayici.jsx",
      lang: "React / JSX",
      quickKeys: ["ref={inputRef}", "ref="],
      hint: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n  return <input ref={inputRef} placeholder=\"Buraya odaklan\" />;\n}",
      solution: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n  return <input ref={inputRef} placeholder=\"Buraya odaklan\" />;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<input[^>]*ref\s*=\s*\{\s*inputRef\s*\}/i.test(clean)) {
          return { ok: true, msg: "Harika! Ref DOM elemanına bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: input etiketine ref={inputRef} ekleyin." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: DOĞRUDAN DOM FOCUS",
      title: "3. Soru: inputRef.current.focus() Çağrısı",
      prompt: "odakla fonksiyonu içinde <code>inputRef.current.focus();</code> komutunu yazabilir misin?",
      presetCode: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n\n  const odakla = () => {\n    // inputa odaklan:\n    inputRef.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={odakla}>Odaklan</button>\n    </div>\n  );\n}",
      filename: "Odaklayici.jsx",
      lang: "React / JSX",
      quickKeys: ["inputRef.current.focus();", "inputRef.current", ".focus()"],
      hint: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n\n  const odakla = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={odakla}>Odaklan</button>\n    </div>\n  );\n}",
      solution: "import { useRef } from 'react';\n\nexport default function Odaklayici() {\n  const inputRef = useRef(null);\n\n  const odakla = () => {\n    inputRef.current.focus();\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={odakla}>Odaklan</button>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/inputRef\.current\.focus\s*\(\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Doğrudan DOM focus kontrolü sağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'inputRef.current.focus();' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: REF İLE DEĞER OKUMA",
      title: "4. Soru: inputRef.current.value Okuma",
      prompt: "goster fonksiyonunda <code>alert(inputRef.current.value);</code> ile input değerini ekrana basabilir misin?",
      presetCode: "import { useRef } from 'react';\n\nexport default function DegerOkuyucu() {\n  const inputRef = useRef(null);\n\n  const goster = () => {\n    alert(inputRef.current.value);\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={goster}>Değeri Göster</button>\n    </div>\n  );\n}",
      filename: "DegerOkuyucu.jsx",
      lang: "React / JSX",
      quickKeys: ["alert(inputRef.current.value);", "inputRef.current.value"],
      hint: "import { useRef } from 'react';\n\nexport default function DegerOkuyucu() {\n  const inputRef = useRef(null);\n\n  const goster = () => {\n    alert(inputRef.current.value);\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={goster}>Değeri Göster</button>\n    </div>\n  );\n}",
      solution: "import { useRef } from 'react';\n\nexport default function DegerOkuyucu() {\n  const inputRef = useRef(null);\n\n  const goster = () => {\n    alert(inputRef.current.value);\n  };\n\n  return (\n    <div>\n      <input ref={inputRef} />\n      <button onClick={goster}>Değeri Göster</button>\n    </div>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/alert\s*\(\s*inputRef\.current\.value\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! Ref üzerinden değer okundu. ✓" };
        }
        return { ok: false, msg: "Hata: 'alert(inputRef.current.value);' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 10: RENDER TETİKLEMEYEN SAYAÇ (MUTABLE REF)",
      title: "5. Soru: Render Sayacı Olarak useRef",
      prompt: "useEffect içinde render sayısını re-render tetiklemeden 1 artırmak için <code>renderSayisi.current += 1;</code> yazabilir misin?",
      presetCode: "import { useRef, useEffect } from 'react';\n\nexport default function RenderSayaci() {\n  const renderSayisi = useRef(0);\n\n  useEffect(() => {\n    // renderSayisi'ni 1 artırın:\n    renderSayisi.current += 1;\n  });\n\n  return <div>Render Edildi</div>;\n}",
      filename: "RenderSayaci.jsx",
      lang: "React / JSX",
      quickKeys: ["renderSayisi.current += 1;", "renderSayisi.current++"],
      hint: "import { useRef, useEffect } from 'react';\n\nexport default function RenderSayaci() {\n  const renderSayisi = useRef(0);\n\n  useEffect(() => {\n    renderSayisi.current += 1;\n  });\n\n  return <div>Render Edildi</div>;\n}",
      solution: "import { useRef, useEffect } from 'react';\n\nexport default function RenderSayaci() {\n  const renderSayisi = useRef(0);\n\n  useEffect(() => {\n    renderSayisi.current += 1;\n  });\n\n  return <div>Render Edildi</div>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/renderSayisi\.current\s*(?:\+=\s*1|\+\+)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 10. Modül tamamlandı, Alışveriş ve Ticaret Merkezi tamamlandı! 🛍️" };
        }
        return { ok: false, msg: "Hata: 'renderSayisi.current += 1;' yazın." };
      }
    }
  ],

  react_11: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: CREATECONTEXT İLE CONTEXT OLUŞTURMA",
      title: "1. Soru: Context Nesnesi Oluşturma",
      prompt: "React'tan createContext içe aktarıp <code>export const TemaContext = createContext('light');</code> oluşturabilir misin?",
      presetCode: "import { createContext } from 'react';\n\n// TemaContext oluşturun:\nexport const TemaContext = createContext('light');",
      filename: "TemaContext.jsx",
      lang: "React / JSX",
      quickKeys: ["export const TemaContext = createContext('light');", "createContext('light');"],
      hint: "import { createContext } from 'react';\n\nexport const TemaContext = createContext('light');",
      solution: "import { createContext } from 'react';\n\nexport const TemaContext = createContext('light');",
      validator: (code) => {
        const clean = code.trim();
        if (/export\s+const\s+TemaContext\s*=\s*createContext\s*\(\s*['"]light['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! TemaContext başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: 'export const TemaContext = createContext(\"light\");' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: CONTEXT PROVIDER İLE SARMALAMA",
      title: "2. Soru: Provider ile Değer Dağıtma",
      prompt: "children elemanlarını <code>&lt;TemaContext.Provider value=\"dark\"&gt;{children}&lt;/TemaContext.Provider&gt;</code> ile sarmalayabilir misin?",
      presetCode: "import { TemaContext } from './TemaContext';\n\nexport default function App({ children }) {\n  return (\n    <TemaContext.Provider value=\"dark\">\n      {children}\n    </TemaContext.Provider>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["<TemaContext.Provider value=\"dark\">", "</TemaContext.Provider>", "{children}"],
      hint: "import { TemaContext } from './TemaContext';\n\nexport default function App({ children }) {\n  return (\n    <TemaContext.Provider value=\"dark\">\n      {children}\n    </TemaContext.Provider>\n  );\n}",
      solution: "import { TemaContext } from './TemaContext';\n\nexport default function App({ children }) {\n  return (\n    <TemaContext.Provider value=\"dark\">\n      {children}\n    </TemaContext.Provider>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<TemaContext\.Provider\s+value\s*=\s*["']dark["']\s*>\s*\{\s*children\s*\}\s*<\/TemaContext\.Provider>/i.test(clean)) {
          return { ok: true, msg: "Harika! Context Provider ile alt bileşenlere veri aktarıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <TemaContext.Provider value=\"dark\">{children}</TemaContext.Provider> şeklinde yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: USECONTEXT İLE TÜKETME",
      title: "3. Soru: useContext Hook'u ile Veri Çekme",
      prompt: "Bileşende <code>const tema = useContext(TemaContext);</code> hook'unu kullanarak context değerini okuyabilir misin?",
      presetCode: "import { useContext } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function Buton() {\n  // tema değerini useContext ile okuyun:\n  const tema = useContext(TemaContext);\n\n  return <button className={tema}>Aktif Tema: {tema}</button>;\n}",
      filename: "Buton.jsx",
      lang: "React / JSX",
      quickKeys: ["const tema = useContext(TemaContext);", "useContext(TemaContext);"],
      hint: "import { useContext } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function Buton() {\n  const tema = useContext(TemaContext);\n  return <button className={tema}>Aktif Tema: {tema}</button>;\n}",
      solution: "import { useContext } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function Buton() {\n  const tema = useContext(TemaContext);\n  return <button className={tema}>Aktif Tema: {tema}</button>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s+tema\s*=\s*useContext\s*\(\s*TemaContext\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Prop drilling olmadan doğrudan Context'ten okundu. ✓" };
        }
        return { ok: false, msg: "Hata: 'const tema = useContext(TemaContext);' yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: DİNAMİK STATE VE FONKSİYON AKTARIMI",
      title: "4. Soru: Provider'a State ve Setter Verme",
      prompt: "Provider'ın value değerine <code>value={{ tema, setTema }}</code> objesini aktarabilir misin?",
      presetCode: "import { useState } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function TemaProvider({ children }) {\n  const [tema, setTema] = useState('light');\n  return (\n    <TemaContext.Provider value={{ tema, setTema }}>\n      {children}\n    </TemaContext.Provider>\n  );\n}",
      filename: "TemaProvider.jsx",
      lang: "React / JSX",
      quickKeys: ["value={{ tema, setTema }}", "value={{", "}}"],
      hint: "import { useState } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function TemaProvider({ children }) {\n  const [tema, setTema] = useState('light');\n  return (\n    <TemaContext.Provider value={{ tema, setTema }}>\n      {children}\n    </TemaContext.Provider>\n  );\n}",
      solution: "import { useState } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function TemaProvider({ children }) {\n  const [tema, setTema] = useState('light');\n  return (\n    <TemaContext.Provider value={{ tema, setTema }}>\n      {children}\n    </TemaContext.Provider>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<TemaContext\.Provider\s+value\s*=\s*\{\{\s*(?:tema\s*,\s*setTema|setTema\s*,\s*tema)\s*\}\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Süper! Global state ve güncelleyici fonksiyon Context'e aktarıldı. ✓" };
        }
        return { ok: false, msg: "Hata: value={{ tema, setTema }} nesnesini ekleyin." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 11: CONTEXT STATE GÜNCELLEME",
      title: "5. Soru: Alt Bileşenden Global State Güncelleme",
      prompt: "Butona tıklandığında temayı değiştiren <code>onClick={() =&gt; setTema(tema === 'light' ? 'dark' : 'light')}</code> fonksiyonunu bağlayabilir misin?",
      presetCode: "import { useContext } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function TemaButon() {\n  const { tema, setTema } = useContext(TemaContext);\n  return (\n    <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>\n      Temayı Değiştir ({tema})\n    </button>\n  );\n}",
      filename: "TemaButon.jsx",
      lang: "React / JSX",
      quickKeys: ["onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}", "setTema"],
      hint: "import { useContext } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function TemaButon() {\n  const { tema, setTema } = useContext(TemaContext);\n  return (\n    <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>\n      Temayı Değiştir ({tema})\n    </button>\n  );\n}",
      solution: "import { useContext } from 'react';\nimport { TemaContext } from './TemaContext';\n\nexport default function TemaButon() {\n  const { tema, setTema } = useContext(TemaContext);\n  return (\n    <button onClick={() => setTema(tema === 'light' ? 'dark' : 'light')}>\n      Temayı Değiştir ({tema})\n    </button>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<button\s+onClick\s*=\s*\{\s*\(\s*\)\s*=>\s*setTema\s*\(\s*tema\s*===\s*['"]light['"]\s*\?\s*['"]dark['"]\s*:\s*['"]light['"]\s*\)\s*\}\s*>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 11. Modül tamamlandı, Hızlı Tren Garı ve Raylar döşendi! 🚄" };
        }
        return { ok: false, msg: "Hata: butona onClick={() => setTema(tema === 'light' ? 'dark' : 'light')} ekleyin." };
      }
    }
  ],

  react_12: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: ROUTES VE ROUTE YAPISI",
      title: "1. Soru: Ana Sayfa Rotası Tanımlama",
      prompt: "Routes içine <code>&lt;Route path=\"/\" element={&lt;Home /&gt;} /&gt;</code> rotasını ekleyebilir misin?",
      presetCode: "import { Routes, Route } from 'react-router-dom';\nimport Home from './Home';\n\nexport default function App() {\n  return (\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n    </Routes>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["<Route path=\"/\" element={<Home />} />", "<Route", "path=\"/\"", "element={<Home />} />"],
      hint: "import { Routes, Route } from 'react-router-dom';\nimport Home from './Home';\n\nexport default function App() {\n  return (\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n    </Routes>\n  );\n}",
      solution: "import { Routes, Route } from 'react-router-dom';\nimport Home from './Home';\n\nexport default function App() {\n  return (\n    <Routes>\n      <Route path=\"/\" element={<Home />} />\n    </Routes>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<Route\s+[^>]*path\s*=\s*["']\/["'][^>]*element\s*=\s*\{\s*<Home\s*\/>\s*\}[^>]*\/>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Route rotası başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <Route path=\"/\" element={<Home />} /> satırını ekleyin." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: LINK İLE GEÇİŞ",
      title: "2. Soru: Link Etiketi ile Sayfa Değiştirme",
      prompt: "Sayfa yenilenmeden gitmek için <code>&lt;Link to=\"/hakkimizda\"&gt;Hakkımızda&lt;/Link&gt;</code> bağlantısını yazabilir misin?",
      presetCode: "import { Link } from 'react-router-dom';\n\nexport default function Navbar() {\n  return (\n    <nav>\n      <Link to=\"/hakkimizda\">Hakkımızda</Link>\n    </nav>\n  );\n}",
      filename: "Navbar.jsx",
      lang: "React / JSX",
      quickKeys: ["<Link to=\"/hakkimizda\">Hakkımızda</Link>", "<Link to=\"/hakkimizda\">", "</Link>"],
      hint: "import { Link } from 'react-router-dom';\n\nexport default function Navbar() {\n  return (\n    <nav>\n      <Link to=\"/hakkimizda\">Hakkımızda</Link>\n    </nav>\n  );\n}",
      solution: "import { Link } from 'react-router-dom';\n\nexport default function Navbar() {\n  return (\n    <nav>\n      <Link to=\"/hakkimizda\">Hakkımızda</Link>\n    </nav>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<Link\s+to\s*=\s*["']\/hakkimizda["']\s*>\s*Hakkımızda\s*<\/Link>/i.test(clean)) {
          return { ok: true, msg: "Harika! SPA Link bağlantısı doğru kullanıldı. ✓" };
        }
        return { ok: false, msg: "Hata: <Link to=\"/hakkimizda\">Hakkımızda</Link> yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: DİNAMİK URL ROTASI",
      title: "3. Soru: Dinamik Parametreli Rota (:id)",
      prompt: "Ürün detayları için <code>&lt;Route path=\"/urun/:id\" element={&lt;UrunDetay /&gt;} /&gt;</code> rotasını ekleyebilir misin?",
      presetCode: "import { Routes, Route } from 'react-router-dom';\nimport UrunDetay from './UrunDetay';\n\nexport default function App() {\n  return (\n    <Routes>\n      <Route path=\"/urun/:id\" element={<UrunDetay />} />\n    </Routes>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["<Route path=\"/urun/:id\" element={<UrunDetay />} />", "path=\"/urun/:id\""],
      hint: "import { Routes, Route } from 'react-router-dom';\nimport UrunDetay from './UrunDetay';\n\nexport default function App() {\n  return (\n    <Routes>\n      <Route path=\"/urun/:id\" element={<UrunDetay />} />\n    </Routes>\n  );\n}",
      solution: "import { Routes, Route } from 'react-router-dom';\nimport UrunDetay from './UrunDetay';\n\nexport default function App() {\n  return (\n    <Routes>\n      <Route path=\"/urun/:id\" element={<UrunDetay />} />\n    </Routes>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<Route\s+[^>]*path\s*=\s*["']\/urun\/:id["'][^>]*element\s*=\s*\{\s*<UrunDetay\s*\/>\s*\}[^>]*\/>/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Dinamik URL parametreli rota tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: <Route path=\"/urun/:id\" element={<UrunDetay />} /> yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: USEPARAMS HOOK'U",
      title: "4. Soru: URL Parametresini Yakalama",
      prompt: "<code>const { id } = useParams();</code> hook'u ile URL'deki ürün id'sini alıp h2 içine <code>{id}</code> yazdırabilir misin?",
      presetCode: "import { useParams } from 'react-router-dom';\n\nexport default function UrunDetay() {\n  // id parametresini useParams ile çekin:\n  const { id } = useParams();\n\n  return <h2>Ürün Numarası: {id}</h2>;\n}",
      filename: "UrunDetay.jsx",
      lang: "React / JSX",
      quickKeys: ["const { id } = useParams();", "useParams();", "{id}"],
      hint: "import { useParams } from 'react-router-dom';\n\nexport default function UrunDetay() {\n  const { id } = useParams();\n  return <h2>Ürün Numarası: {id}</h2>;\n}",
      solution: "import { useParams } from 'react-router-dom';\n\nexport default function UrunDetay() {\n  const { id } = useParams();\n  return <h2>Ürün Numarası: {id}</h2>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s*\{\s*id\s*\}\s*=\s*useParams\s*\(\s*\)\s*;?[\s\S]*<h2>\s*Ürün Numarası:\s*\{\s*id\s*\}\s*<\/h2>/i.test(clean)) {
          return { ok: true, msg: "Süper! useParams ile dinamik ID yakalandı. ✓" };
        }
        return { ok: false, msg: "Hata: 'const { id } = useParams();' yazıp <h2>Ürün Numarası: {id}</h2> oluşturun." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 12: USENAVIGATE İLE PROGRAMATİK YÖNLENDİRME",
      title: "5. Soru: Kod ile Sayfa Değiştirme",
      prompt: "<code>const navigate = useNavigate();</code> tanımlayıp butona tıklandığında <code>navigate('/giris')</code> yapabilir misin?",
      presetCode: "import { useNavigate } from 'react-router-dom';\n\nexport default function CikisButon() {\n  const navigate = useNavigate();\n\n  const cikisYap = () => {\n    // /giris sayfasına yönlendirin:\n    navigate('/giris');\n  };\n\n  return <button onClick={cikisYap}>Çıkış Yap</button>;\n}",
      filename: "CikisButon.jsx",
      lang: "React / JSX",
      quickKeys: ["navigate('/giris');", "const navigate = useNavigate();", "useNavigate()"],
      hint: "import { useNavigate } from 'react-router-dom';\n\nexport default function CikisButon() {\n  const navigate = useNavigate();\n\n  const cikisYap = () => {\n    navigate('/giris');\n  };\n\n  return <button onClick={cikisYap}>Çıkış Yap</button>;\n}",
      solution: "import { useNavigate } from 'react-router-dom';\n\nexport default function CikisButon() {\n  const navigate = useNavigate();\n\n  const cikisYap = () => {\n    navigate('/giris');\n  };\n\n  return <button onClick={cikisYap}>Çıkış Yap</button>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/navigate\s*\(\s*['"]\/giris['"]\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 12. Modül tamamlandı, 5G Telekom ve Uydu Kulesi aktif! 📡" };
        }
        return { ok: false, msg: "Hata: 'navigate(\"/giris\");' satırını ekleyin." };
      }
    }
  ],

  react_13: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: CREATESLICE İLE DİLİM OLUŞTURMA",
      title: "1. Soru: Redux Slice Tanımlama",
      prompt: "<code>counterSlice</code> içinde <code>name: 'counter', initialState: { value: 0 }</code> tanımlayabilir misin?",
      presetCode: "import { createSlice } from '@reduxjs/toolkit';\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    artir: (state) => {\n      state.value += 1;\n    }\n  }\n});",
      filename: "counterSlice.js",
      lang: "React / JSX",
      quickKeys: ["name: 'counter',", "initialState: { value: 0 },", "createSlice({"],
      hint: "import { createSlice } from '@reduxjs/toolkit';\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    artir: (state) => {\n      state.value += 1;\n    }\n  }\n});",
      solution: "import { createSlice } from '@reduxjs/toolkit';\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    artir: (state) => {\n      state.value += 1;\n    }\n  }\n});",
      validator: (code) => {
        const clean = code.trim();
        if (/name\s*:\s*['"]counter['"][\s\S]*initialState\s*:\s*\{\s*value\s*:\s*0\s*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Redux Toolkit Slice başarıyla tanımlandı. ✓" };
        }
        return { ok: false, msg: "Hata: name: 'counter', initialState: { value: 0 } tanımlayın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: AKSİYONLARI DIŞA AKTARMA",
      title: "2. Soru: Slice Actions Export Etme",
      prompt: "<code>export const { artir } = counterSlice.actions;</code> satırını ekleyebilir misin?",
      presetCode: "import { createSlice } from '@reduxjs/toolkit';\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: { value: 0 },\n  reducers: {\n    artir: (state) => { state.value += 1; }\n  }\n});\n\n// artir aksiyonunu dışa aktarın:\nexport const { artir } = counterSlice.actions;\nexport default counterSlice.reducer;",
      filename: "counterSlice.js",
      lang: "React / JSX",
      quickKeys: ["export const { artir } = counterSlice.actions;", "counterSlice.actions;"],
      hint: "export const { artir } = counterSlice.actions;",
      solution: "export const { artir } = counterSlice.actions;",
      validator: (code) => {
        const clean = code.trim();
        if (/export\s+const\s*\{\s*artir\s*\}\s*=\s*counterSlice\.actions\s*;?/i.test(clean)) {
          return { ok: true, msg: "Harika! Redux action dışa aktarıldı. ✓" };
        }
        return { ok: false, msg: "Hata: 'export const { artir } = counterSlice.actions;' yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: CONFIGURESTORE İLE STORE KURULUMU",
      title: "3. Soru: Redux Deposu (Store) Yapılandırma",
      prompt: "<code>configureStore({ reducer: { counter: counterReducer } })</code> store nesnesini tanımlayabilir misin?",
      presetCode: "import { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counterSlice';\n\n// Store'u configure edin:\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n});",
      filename: "store.js",
      lang: "React / JSX",
      quickKeys: ["export const store = configureStore({ reducer: { counter: counterReducer } });", "configureStore({"],
      hint: "import { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counterSlice';\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n});",
      solution: "import { configureStore } from '@reduxjs/toolkit';\nimport counterReducer from './counterSlice';\n\nexport const store = configureStore({\n  reducer: {\n    counter: counterReducer\n  }\n});",
      validator: (code) => {
        const clean = code.trim();
        if (/configureStore\s*\(\s*\{\s*reducer\s*:\s*\{\s*counter\s*:\s*counterReducer\s*\}\s*\}\s*\)/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Redux Store başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: configureStore({ reducer: { counter: counterReducer } }) şeklinde yazın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: USE SELECTOR İLE STATE OKUMA",
      title: "4. Soru: useSelector Hook'u",
      prompt: "Redux state'inden counter değerini okumak için <code>const count = useSelector((state) =&gt; state.counter.value);</code> yazabilir misin?",
      presetCode: "import { useSelector } from 'react-redux';\n\nexport default function SayacGosterge() {\n  // count değerini useSelector ile okuyun:\n  const count = useSelector((state) => state.counter.value);\n\n  return <h2>Sayaç: {count}</h2>;\n}",
      filename: "SayacGosterge.jsx",
      lang: "React / JSX",
      quickKeys: ["const count = useSelector((state) => state.counter.value);", "useSelector((state) => state.counter.value)"],
      hint: "import { useSelector } from 'react-redux';\n\nexport default function SayacGosterge() {\n  const count = useSelector((state) => state.counter.value);\n  return <h2>Sayaç: {count}</h2>;\n}",
      solution: "import { useSelector } from 'react-redux';\n\nexport default function SayacGosterge() {\n  const count = useSelector((state) => state.counter.value);\n  return <h2>Sayaç: {count}</h2>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s+count\s*=\s*useSelector\s*\(\s*\(?\s*state\s*\)?\s*=>\s*state\.counter\.value\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! useSelector ile Redux state'i başarıyla okundu. ✓" };
        }
        return { ok: false, msg: "Hata: 'const count = useSelector((state) => state.counter.value);' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 13: USE DISPATCH İLE AKSİYON TETİKLEME",
      title: "5. Soru: useDispatch ve Action Dispatch",
      prompt: "<code>const dispatch = useDispatch();</code> tanımlayıp butona tıklandığında <code>dispatch(artir())</code> tetikleyebilir misin?",
      presetCode: "import { useDispatch } from 'react-redux';\nimport { artir } from './counterSlice';\n\nexport default function ArtirButon() {\n  const dispatch = useDispatch();\n\n  return (\n    <button onClick={() => dispatch(artir())}>\n      1 Artır\n    </button>\n  );\n}",
      filename: "ArtirButon.jsx",
      lang: "React / JSX",
      quickKeys: ["onClick={() => dispatch(artir())}", "dispatch(artir())", "useDispatch()"],
      hint: "import { useDispatch } from 'react-redux';\nimport { artir } from './counterSlice';\n\nexport default function ArtirButon() {\n  const dispatch = useDispatch();\n  return (\n    <button onClick={() => dispatch(artir())}>\n      1 Artır\n    </button>\n  );\n}",
      solution: "import { useDispatch } from 'react-redux';\nimport { artir } from './counterSlice';\n\nexport default function ArtirButon() {\n  const dispatch = useDispatch();\n  return (\n    <button onClick={() => dispatch(artir())}>\n      1 Artır\n    </button>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<button[^>]*onClick\s*=\s*\{\s*\(\s*\)\s*=>\s*dispatch\s*\(\s*artir\s*\(\s*\)\s*\)\s*\}/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! 13. Modül tamamlandı, Uluslararası Liman & Konteyner Terminali inşa edildi! 🚢" };
        }
        return { ok: false, msg: "Hata: butona onClick={() => dispatch(artir())} ekleyin." };
      }
    }
  ],

  react_14: [
    {
      stepNum: 1,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: CUSTOM HOOK OLUŞTURMA",
      title: "1. Soru: Özel useSayac Hook'u",
      prompt: "Başlangıç değeri alan ve <code>{ count, artir }</code> objesi döndüren <code>useSayac</code> custom hook'unu tamamlayabilir misin?",
      presetCode: "import { useState } from 'react';\n\nexport function useSayac(baslangic = 0) {\n  const [count, setCount] = useState(baslangic);\n  const artir = () => setCount((c) => c + 1);\n\n  // { count, artir } döndürün:\n  return { count, artir };\n}",
      filename: "useSayac.js",
      lang: "React / JSX",
      quickKeys: ["return { count, artir };", "export function useSayac(baslangic = 0)"],
      hint: "import { useState } from 'react';\n\nexport function useSayac(baslangic = 0) {\n  const [count, setCount] = useState(baslangic);\n  const artir = () => setCount((c) => c + 1);\n  return { count, artir };\n}",
      solution: "import { useState } from 'react';\n\nexport function useSayac(baslangic = 0) {\n  const [count, setCount] = useState(baslangic);\n  const artir = () => setCount((c) => c + 1);\n  return { count, artir };\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/return\s*\{\s*(?:count\s*,\s*artir|artir\s*,\s*count)\s*\}\s*;?/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! İlk Custom Hook'un başarıyla oluşturuldu. ✓" };
        }
        return { ok: false, msg: "Hata: 'return { count, artir };' yazın." };
      }
    },
    {
      stepNum: 2,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: ASYNC/AWAIT VE AXIOS GET İSTEĞİ",
      title: "2. Soru: Axios ile API'den Veri Çekme",
      prompt: "<code>const res = await axios.get('/api/urunler');</code> çağrısını yapıp <code>setData(res.data);</code> atamasını tamamlayabilir misin?",
      presetCode: "import { useState, useEffect } from 'react';\nimport axios from 'axios';\n\nexport default function UrunGetirici() {\n  const [data, setData] = useState([]);\n\n  useEffect(() => {\n    const veriCek = async () => {\n      const res = await axios.get('/api/urunler');\n      setData(res.data);\n    };\n    veriCek();\n  }, []);\n\n  return <div>Ürün Sayısı: {data.length}</div>;\n}",
      filename: "UrunGetirici.jsx",
      lang: "React / JSX",
      quickKeys: ["const res = await axios.get('/api/urunler');", "setData(res.data);", "await axios.get"],
      hint: "const res = await axios.get('/api/urunler');\n      setData(res.data);",
      solution: "const res = await axios.get('/api/urunler');\n      setData(res.data);",
      validator: (code) => {
        const clean = code.trim();
        if (/await\s+axios\.get\s*\(\s*['"]\/api\/urunler['"]\s*\)[\s\S]*setData\s*\(\s*res\.data\s*\)/i.test(clean)) {
          return { ok: true, msg: "Harika! Axios ile asenkron API isteği bağlandı. ✓" };
        }
        return { ok: false, msg: "Hata: await axios.get('/api/urunler') ve setData(res.data) yazın." };
      }
    },
    {
      stepNum: 3,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: LOADING VE ERROR STATE YÖNETİMİ",
      title: "3. Soru: Yükleniyor ve Hata Durum Kontrolü",
      prompt: "İstek başlamadan önce <code>setLoading(true);</code> ve veri gelince <code>setLoading(false);</code> güncellemelerini ekleyebilir misin?",
      presetCode: "import { useState, useEffect } from 'react';\n\nexport default function VeriKutusu() {\n  const [loading, setLoading] = useState(false);\n  const [items, setItems] = useState([]);\n\n  useEffect(() => {\n    setLoading(true);\n    fetch('/api/liste')\n      .then((r) => r.json())\n      .then((d) => {\n        setItems(d);\n        setLoading(false);\n      });\n  }, []);\n\n  if (loading) return <h3>Yükleniyor...</h3>;\n  return <h3>Yüklendi: {items.length}</h3>;\n}",
      filename: "VeriKutusu.jsx",
      lang: "React / JSX",
      quickKeys: ["setLoading(true);", "setLoading(false);"],
      hint: "setLoading(true);\n    fetch('/api/liste')\n      .then((r) => r.json())\n      .then((d) => {\n        setItems(d);\n        setLoading(false);\n      });",
      solution: "setLoading(true);\n    fetch('/api/liste')\n      .then((r) => r.json())\n      .then((d) => {\n        setItems(d);\n        setLoading(false);\n      });",
      validator: (code) => {
        const clean = code.trim();
        if (/setLoading\s*\(\s*true\s*\)[\s\S]*setLoading\s*\(\s*false\s*\)/i.test(clean)) {
          return { ok: true, msg: "Mükemmel! Loading durumu başarıyla yönetildi. ✓" };
        }
        return { ok: false, msg: "Hata: fetch öncesinde setLoading(true) ve dthen içinde setLoading(false) çağırın." };
      }
    },
    {
      stepNum: 4,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: CUSTOM HOOK KULLANIMI",
      title: "4. Soru: useSayac Hook'unu Bileşende Kullanma",
      prompt: "Bileşen içinde <code>const { count, artir } = useSayac(10);</code> hook'unu çağırabilir misin?",
      presetCode: "import { useSayac } from './useSayac';\n\nexport default function App() {\n  // useSayac hook'unu 10 başlangıç değeriyle çağırın:\n  const { count, artir } = useSayac(10);\n\n  return <button onClick={artir}>Sayı: {count}</button>;\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["const { count, artir } = useSayac(10);", "useSayac(10);"],
      hint: "import { useSayac } from './useSayac';\n\nexport default function App() {\n  const { count, artir } = useSayac(10);\n  return <button onClick={artir}>Sayı: {count}</button>;\n}",
      solution: "import { useSayac } from './useSayac';\n\nexport default function App() {\n  const { count, artir } = useSayac(10);\n  return <button onClick={artir}>Sayı: {count}</button>;\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/const\s*\{\s*(?:count\s*,\s*artir|artir\s*,\s*count)\s*\}\s*=\s*useSayac\s*\(\s*10\s*\)\s*;?/i.test(clean)) {
          return { ok: true, msg: "Süper! Custom Hook bir bileşende başarıyla tüketildi. ✓" };
        }
        return { ok: false, msg: "Hata: 'const { count, artir } = useSayac(10);' yazın." };
      }
    },
    {
      stepNum: 5,
      totalSteps: 5,
      moduleSubtitle: "MODÜL 14: TAM TEŞEKKÜLLÜ REACT MASTER PROJESİ",
      title: "5. Soru: Kapsamlı React Uygulamasını Tamamlama",
      prompt: "Tüm React yetkinliklerini birleştiren final bileşeninde <code>&lt;Dashboard baslik=\"CodeFarm 2026\" /&gt;</code> bileşenini render edebilir misin?",
      presetCode: "import Dashboard from './Dashboard';\n\nexport default function App() {\n  return (\n    <main className=\"app-main\">\n      <Dashboard baslik=\"CodeFarm 2026\" />\n    </main>\n  );\n}",
      filename: "App.jsx",
      lang: "React / JSX",
      quickKeys: ["<Dashboard baslik=\"CodeFarm 2026\" />", "baslik=\"CodeFarm 2026\""],
      hint: "import Dashboard from './Dashboard';\n\nexport default function App() {\n  return (\n    <main className=\"app-main\">\n      <Dashboard baslik=\"CodeFarm 2026\" />\n    </main>\n  );\n}",
      solution: "import Dashboard from './Dashboard';\n\nexport default function App() {\n  return (\n    <main className=\"app-main\">\n      <Dashboard baslik=\"CodeFarm 2026\" />\n    </main>\n  );\n}",
      validator: (code) => {
        const clean = code.trim();
        if (/<Dashboard\s+[^>]*baslik\s*=\s*["']CodeFarm 2026["'][^>]*\/>/i.test(clean) ||
            /<Dashboard\s+[^>]*baslik\s*=\s*["']CodeFarm 2026["'][^>]*>\s*<\/Dashboard>/i.test(clean)) {
          return { ok: true, msg: "Tebrikler! Tüm React Müfredatı başarıyla tamamlandı! Şehrin zirvesinde Teknoloji Vadisi ve Roket Üssü parlıyor! 🏆🚀⚛️" };
        }
        return { ok: false, msg: "Hata: <Dashboard baslik=\"CodeFarm 2026\" /> bileşenini render edin." };
      }
    }
  ]
};

// Aliases for review cards and challenges (react_1..14, react1..14, rc_1..14, rc1..14)
for (let i = 1; i <= 14; i++) {
  if (REACT_TOPIC_REVIEWS[`react_${i}`]) {
    REACT_TOPIC_REVIEWS[`react${i}`] = REACT_TOPIC_REVIEWS[`react_${i}`];
    REACT_TOPIC_REVIEWS[`rc_${i}`] = REACT_TOPIC_REVIEWS[`react_${i}`];
    REACT_TOPIC_REVIEWS[`rc${i}`] = REACT_TOPIC_REVIEWS[`react_${i}`];
  }
  if (REACT_CHALLENGES[`react_${i}`]) {
    REACT_CHALLENGES[`react${i}`] = REACT_CHALLENGES[`react_${i}`];
    REACT_CHALLENGES[`rc_${i}`] = REACT_CHALLENGES[`react_${i}`];
    REACT_CHALLENGES[`rc${i}`] = REACT_CHALLENGES[`react_${i}`];
  }
}

