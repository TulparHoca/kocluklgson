import { Question } from "@/types";

export const questions: Question[] = [
  // MEVCUT SORULAR (1-170)
  {
    id: 'og_tur_1', subjectId: 'turkish', topic: 'Anlam Bilgisi', difficulty: 'medium',
    question: 'Aşağıdaki cümlelerin hangisinde "burun" sözcüğü deyim içinde kullanılmamıştır?',
    options: ['Her işe burnunu sokmasından hoşlanmıyorum.','Babasının burnundan düşmüş, tıpkı o.','Kaza yapınca burnu bile kanamamış.','Burnumdaki sızı beni rahatsız ediyor.'], correctAnswer: 3,
    explanation: '"Burnumdaki sızı beni rahatsız ediyor." cümlesinde burun kelimesi gerçek anlamıyla kullanılmıştır. Diğer seçeneklerdeki "burnunu sokmak", "burnundan düşmek" ve "burnu kanamamak" birer deyimdir.'
  },
  {
    id: 'og_tur_2', subjectId: 'turkish', topic: 'Yazım Kuralları', difficulty: 'medium',
    question: 'Aşağıdaki cümlelerin hangisinde bir yazım yanlışı vardır?',
    options: ['TDK\'nin yeni kurallarını inceledin mi?','Herşey yolunda gibi görünüyordu.','Bu konuyu da yarın görüşürüz.','19 Mayıs 1919\'da Samsun\'a çıktı.'], correctAnswer: 1,
    explanation: '"Herşey" kelimesi ayrı yazılmalıdır. Doğru yazımı "her şey" şeklindedir.'
  },
  {
    id: 'og_tur_3', subjectId: 'turkish', topic: 'Söz Sanatları', difficulty: 'hard',
    question: '"Güneş, altın saçlarını yeryüzüne serpiyordu." cümlesindeki söz sanatı aşağıdakilerden hangisidir?',
    options: ['Benzetme', 'Kişileştirme', 'Abartma', 'Konuşturma'], correctAnswer: 1,
    explanation: 'Kişileştirme, insan dışındaki varlıklara insan özelliği verilmesidir. "Güneş"e "saç" verilmesi kişileştirme sanatına örnektir.'
  },
  {
    id: 'og_tur_4', subjectId: 'turkish', topic: 'Cümlenin Öğeleri', difficulty: 'medium',
    question: '"Uzun bir yolculuktan sonra küçük bir kasabaya geldik." cümlesinin yüklemi hangisidir?',
    options: ['geldik', 'kasabaya geldik', 'bir kasabaya geldik', 'küçük bir kasabaya geldik'], correctAnswer: 0,
    explanation: 'Yüklem, cümlede iş, oluş, durum bildiren çekimli fiildir. Bu cümlede yüklem "geldik" fiilidir.'
  },
  {
    id: 'og_tur_5', subjectId: 'turkish', topic: 'Noktalama İşaretleri', difficulty: 'easy',
    question: 'Cümle sonuna konulan (.) işareti aşağıdakilerden hangisidir?',
    options: ['Ünlem', 'Soru İşareti', 'Nokta', 'Virgül'], correctAnswer: 2,
    explanation: 'Cümle sonuna konulan işaret, cümle tamamlandığında kullanılan Nokta işaretidir.'
  },
  {
    id: 'og_tur_6', subjectId: 'turkish', topic: 'Fiilimsiler', difficulty: 'hard',
    question: 'Aşağıdaki cümlelerin hangisinde isim-fiil kullanılmıştır?',
    options: ['Koşarak yanımdan uzaklaştı.', 'Gülmek sana çok yakışıyor.', 'Gelen gideni aratır derler.', 'Okunacak çok kitap var.'], correctAnswer: 1,
    explanation: 'İsim-fiil, fiillere "-ma, -ış, -mak" ekleri getirilerek oluşturulur. "Gülmek" kelimesi bu kurala uyar.'
  },
  {
    id: 'og_tur_7', subjectId: 'turkish', topic: 'Cümle Türleri', difficulty: 'medium',
    question: 'Aşağıdaki cümlelerin hangisi yapısına göre birleşik cümledir?',
    options: ['Çok yorulduğu için erken yattı.','Çalıştıkça başarısı artıyor.','Kitabı okudu ve bitirdi.','Hava çok sıcaktı, bu yüzden dışarı çıkmadık.'], correctAnswer: 1,
    explanation: 'Birleşik cümleler, bir temel cümle ve en az bir yan cümlecikten oluşur. "Çalıştıkça" sözcüğü bir yan cümleciktir.'
  },
  {
    id: 'og_tur_8', subjectId: 'turkish', topic: 'Ses Bilgisi', difficulty: 'easy',
    question: 'Aşağıdaki kelimelerden hangisi ünlü düşmesine uğramıştır?',
    options: ['kaplumbağa', 'dostluk', 'kayboldu', 'babaanne'], correctAnswer: 2,
    explanation: '"Kayboldu" kelimesi "kayıp" ve "oldu" kelimelerinin birleşimiyle oluşmuş ve aradaki "ı" ünlüsü düşmüştür.'
  },
  {
    id: 'og_tur_9', subjectId: 'turkish', topic: 'Anlatım Bozuklukları', difficulty: 'hard',
    question: 'Hangi cümlede gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?',
    options: ['Herkes bu konuyu biliyor.', 'Aradan tam beş yıl geçti.','Birlikte el ele tutuşarak yürüdüler.','Bu konuyu tekrar gözden geçirmelisin.'], correctAnswer: 2,
    explanation: '"Birlikte" ve "el ele tutuşarak" aynı anlama geldiği için ikisinden birinin kullanılması yeterlidir.'
  },
  {
    id: 'og_tur_10', subjectId: 'turkish', topic: 'Paragrafta Anlam', difficulty: 'medium',
    question: 'Paragrafta asıl anlatılmak istenen düşünceye ne ad verilir?',
    options: ['Yardımcı düşünce', 'Ana fikir', 'Konu', 'Başlık'], correctAnswer: 1,
    explanation: 'Paragrafta asıl anlatılmak istenen ve yazarın okuyucuya vermek istediği mesaja ana fikir denir.'
  },
  {
    id: 'og_mat_1', subjectId: 'math', topic: 'Üslü İfadeler', difficulty: 'medium',
    question: 'Bir kenarı 2^5 cm olan karenin alanı kaç cm²\'dir?',
    options: ['2^7', '4^5', '2^10', '4^10'], correctAnswer: 2,
    explanation: 'Karenin alanı kenar uzunluğunun karesidir. (2^5)^2 = 2^(5*2) = 2^10.'
  },
  {
    id: 'og_mat_2', subjectId: 'math', topic: 'Karekök', difficulty: 'medium',
    question: 'Alanı 144 m² olan kare şeklindeki bir bahçenin bir kenar uzunluğu kaç metredir?',
    options: ['12', '14', '16', '18'], correctAnswer: 0,
    explanation: 'Karenin bir kenar uzunluğu, alanın karekökü alınarak bulunur. √144 = 12 metredir.'
  },
  {
    id: 'og_mat_3', subjectId: 'math', topic: 'Olasılık', difficulty: 'easy',
    question: 'Bir zar atıldığında üst yüze gelen sayının asal olma olasılığı nedir?',
    options: ['1/3', '1/2', '2/3', '1/6'], correctAnswer: 1,
    explanation: 'Bir zarın üst yüzüne gelebilecek sayılar: {1, 2, 3, 4, 5, 6}. Asal sayılar: {2, 3, 5}. Toplam 3 asal sayı vardır. Olasılık: 3/6 = 1/2.'
  },
  {
    id: 'og_mat_4', subjectId: 'math', topic: 'Cebirsel İfadeler', difficulty: 'medium',
    question: '2(x+3) - 5x ifadesinin en sade hali nedir?',
    options: ['-3x + 6', '-3x + 3', '-3x', '2x - 3'], correctAnswer: 0,
    explanation: 'Önce parantezi dağıtırız: 2x + 6 - 5x. Sonra benzer terimleri birleştiririz: (2x - 5x) + 6 = -3x + 6.'
  },
  {
    id: 'og_mat_5', subjectId: 'math', topic: 'Doğrusal Denklemler', difficulty: 'easy',
    question: '3x - 5 = 10 denkleminin çözüm kümesi nedir?',
    options: ['x=3', 'x=4', 'x=5', 'x=6'], correctAnswer: 2,
    explanation: 'Denklemi çözmek için -5\'i karşı tarafa +5 olarak atarız: 3x = 15. Her iki tarafı 3\'e bölersek x=5 bulunur.'
  },
  {
    id: 'og_mat_6', subjectId: 'math', topic: 'Oran ve Orantı', difficulty: 'medium',
    question: 'Bir sınıftaki kız öğrencilerin sayısının erkek öğrencilerin sayısına oranı 2/3\'tür. Sınıfta 20 kız öğrenci varsa, kaç erkek öğrenci vardır?',
    options: ['25', '30', '35', '40'], correctAnswer: 1,
    explanation: 'Kız/erkek = 2/3. 20/erkek = 2/3 ise, 2*erkek = 20*3 yani 2*erkek = 60. erkek = 30.'
  },
  {
    id: 'og_fen_1', subjectId: 'science', topic: 'DNA ve Genetik Kod', difficulty: 'medium',
    question: 'DNA molekülünde Adenin nükleotidinin karşısına her zaman hangisi gelir?',
    options: ['Guanin', 'Sitozin', 'Timin', 'Urasil'], correctAnswer: 2,
    explanation: 'DNA molekülünde Adenin (A) daima Timin (T) ile eşleşir. Guanin (G) ise Sitozin (C) ile eşleşir.'
  },
  {
    id: 'og_fen_2', subjectId: 'science', topic: 'Basınç', difficulty: 'medium',
    question: 'Katı basıncı aşağıdakilerden hangisine bağlı değildir?',
    options: ['Cismin ağırlığına','Yüzey alanına','Cismin yapıldığı maddenin cinsine','Yer çekimi ivmesine'], correctAnswer: 2,
    explanation: 'Katı basıncı (P), cismin ağırlığı (G) ve yüzey alanına (S) bağlıdır. Formülü P=G/S\'dir. Cismin yapıldığı maddenin cinsi basıncı doğrudan etkilemez.'
  },
  {
    id: 'og_fen_3', subjectId: 'science', topic: 'Mevsimler ve İklim', difficulty: 'easy',
    question: 'Dünya\'nın kendi ekseni etrafında dönmesi sonucu ne oluşur?',
    options: ['Mevsimler', 'Gece ve gündüz', 'Ay tutulması', 'Yıllar'], correctAnswer: 1,
    explanation: 'Dünya\'nın kendi ekseni etrafında 24 saatte tamamladığı bir tam tur, gece ve gündüzün oluşmasına neden olur.'
  },
  {
    id: 'og_fen_4', subjectId: 'science', topic: 'Mevsimler ve İklim', difficulty: 'medium',
    question: '21 Haziran tarihinde, Kuzey Yarım Küre\'de hangi mevsim yaşanır?',
    options: ['Kış', 'İlkbahar', 'Yaz', 'Sonbahar'], correctAnswer: 2,
    explanation: '21 Haziran, Kuzey Yarım Küre\'de yaz mevsiminin başlangıcıdır.'
  },
  {
    id: 'og_fen_5', subjectId: 'science', topic: 'DNA ve Genetik Kod', difficulty: 'medium',
    question: 'DNA\'nın yapı birimine ne ad verilir?',
    options: ['Gen', 'Kromozom', 'Nükleotid', 'Nükleus'], correctAnswer: 2,
    explanation: 'DNA\'nın en küçük yapı birimi, fosfat, şeker ve organik bazdan oluşan nükleotiddir.'
  },
  {
    id: 'og_fen_6', subjectId: 'science', topic: 'Basınç', difficulty: 'hard',
    question: 'Sıvı basıncı ile ilgili aşağıdakilerden hangisi yanlıştır?',
    options: ['Sıvının derinliği arttıkça artar.', 'Sıvının yoğunluğu arttıkça artar.', 'Kabın şekline bağlı değildir.','Kabın taban alanına bağlıdır.'], correctAnswer: 3,
    explanation: 'Sıvı basıncı, sıvının derinliğine ve yoğunluğuna bağlıdır, kabın şekline veya taban alanına bağlı değildir.'
  },
  {
    id: 'og_fen_7', subjectId: 'science', topic: 'Maddenin Halleri', difficulty: 'easy',
    question: 'Maddenin üç hâli vardır: katı, sıvı ve gaz. Hangi olay sıvının gaz hâline geçmesini sağlar?',
    options: ['Donma', 'Yoğuşma', 'Buharlaşma', 'Kıvamlaşma'],
    correctAnswer: 2,
    explanation: 'Sıvı halden gaz hale geçiş, buharlaşma olarak adlandırılır.'
  },
  {
    id: 'og_fen_8', subjectId: 'science', topic: 'Fiziksel Büyüklükler', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi kuvvetin birimi değildir?',
    options: ['Newton', 'Joule', 'Din', 'N'],
    correctAnswer: 1,
    explanation: 'Newton (N) ve Din kuvvet birimleridir. Joule, iş veya enerji birimidir.'
  },
  {
    id: 'og_fen_9', subjectId: 'science', topic: 'Sindirim Sistemi', difficulty: 'easy',
    question: 'İnsan vücudunda sindirimin başladığı organ hangisidir?',
    options: ['Mide', 'Ağız', 'İnce bağırsak', 'Karaciğer'],
    correctAnswer: 1,
    explanation: 'Karbonhidratların sindirimi ağızda başlar.'
  },
  {
    id: 'og_fen_10', subjectId: 'science', topic: 'Su Döngüsü', difficulty: 'easy',
    question: 'Su döngüsünde buharın yoğunlaşmasıyla oluşan olay hangisidir?',
    options: ['Yağış', 'Buharlaşma', 'Terleme', 'Kıvamlaşma'],
    correctAnswer: 0,
    explanation: 'Yoğunlaşma, su buharının sıvı hale dönüşmesidir. Bulutları oluşturur ve sonunda yağış olarak yere düşer.'
  },
  {
    id: 'og_fen_11', subjectId: 'science', topic: 'Fotosentez', difficulty: 'easy',
    question: 'Fotosentez sırasında bitkiler hangi gazı kullanır?',
    options: ['Oksijen', 'Karbondioksit', 'Azot', 'Hidrogen'],
    correctAnswer: 1,
    explanation: 'Fotosentez, bitkilerin karbondioksit ve su kullanarak besin üretmesidir.'
  },
  {
    id: 'og_fen_12', subjectId: 'science', topic: 'Elektrik', difficulty: 'medium',
    question: 'Aşağıdakilerden hangisi elektrik devresini tamamlayan iletken değildir?',
    options: ['Bakır tel', 'Alüminyum tel', 'Plastik', 'Su'],
    correctAnswer: 2,
    explanation: 'Bakır ve alüminyum metaller olduğu için iyi iletkendir. Plastik, yalıtkan bir maddedir.'
  },
  {
    id: 'og_fen_13', subjectId: 'science', topic: 'Isı', difficulty: 'hard',
    question: 'Isı alışverişi olmadan sıcaklığı sabit kalan madde hangisidir?',
    options: ['Termometre sıvısı', 'Su', 'Sıcak taş', 'İzole edilmiş kap'],
    correctAnswer: 3,
    explanation: 'İzole edilmiş bir kap, dış ortamla ısı alışverişini engellediği için içindeki maddenin sıcaklığı sabit kalır.'
  },
  {
    id: 'og_fen_14', subjectId: 'science', topic: 'Işık', difficulty: 'easy',
    question: 'Işık bir ortamdan diğerine geçerken hangi olay gerçekleşir?',
    options: ['Yansıma', 'Kırılma', 'Soğuma', 'Yoğuşma'],
    correctAnswer: 1,
    explanation: 'Işığın bir ortamdan (örneğin havadan) başka bir ortama (örneğin suya) geçerken yön değiştirmesi kırılma olarak adlandırılır.'
  },
  {
    id: 'og_fen_15', subjectId: 'science', topic: 'Dünya ve Evren', difficulty: 'easy',
    question: 'Dünya’nın kendi ekseni etrafında dönmesi sonucu ne meydana gelir?',
    options: ['Mevsimler', 'Gün ve gece', 'Gelgitler', 'Yıldız kayması'],
    correctAnswer: 1,
    explanation: 'Dünya\'nın 24 saatte kendi etrafında dönmesi, gece ve gündüzün oluşmasına neden olur.'
  },
  {
    id: 'og_fen_16', subjectId: 'science', topic: 'Asitler ve Bazlar', difficulty: 'easy',
    question: 'Aşağıdaki maddelerden hangisi asidik özelliktedir?',
    options: ['Su', 'Sirke', 'Tuz', 'Karbonat'],
    correctAnswer: 1,
    explanation: 'Sirke, asidik bir maddedir ve pH değeri 7\'den küçüktür.'
  },
  {
    id: 'og_fen_17', subjectId: 'science', topic: 'Hareket ve Kuvvet', difficulty: 'medium',
    question: 'Bir cismin hızının zamanla değişmesi hangi büyüklüğü oluşturur?',
    options: ['Kuvvet', 'İvme', 'Enerji', 'Kütle'],
    correctAnswer: 1,
    explanation: 'Hızdaki değişim miktarına ivme denir.'
  },
  {
    id: 'og_fen_18', subjectId: 'science', topic: 'Sürtünme', difficulty: 'hard',
    question: 'Sürtünmesiz bir ortamda hareket eden cisim hangi durumda durur?',
    options: ['Kendi isteğiyle', 'Başka kuvvet uygulanınca', 'Hiçbir zaman durmaz', 'Hava direnci ile'],
    correctAnswer: 2,
    explanation: 'Newton\'un birinci hareket yasasına göre, bir cisme dışarıdan bir kuvvet etki etmedikçe hareketini sonsuza kadar sürdürür.'
  },
  {
    id: 'og_fen_19', subjectId: 'science', topic: 'Canlılar', difficulty: 'easy',
    question: 'Aşağıdaki canlılardan hangisi üretici (ototrof) canlıdır?',
    options: ['İnsan', 'Balık', 'Alg', 'Kurbağa'],
    correctAnswer: 2,
    explanation: 'Algler, fotosentez yaparak kendi besinlerini üretebilirler.'
  },
  {
    id: 'og_fen_20', subjectId: 'science', topic: 'Yoğunluk', difficulty: 'easy',
    question: 'Bir maddenin yoğunluğu ρ = m / V formülü ile hesaplanır. Burada V nedir?',
    options: ['Hacim', 'Kütle', 'Yoğunluk', 'Hız'],
    correctAnswer: 0,
    explanation: 'Yoğunluk formülünde V, hacmi temsil eder.'
  },
  {
    id: 'og_fen_21', subjectId: 'science', topic: 'Elektrik', difficulty: 'easy',
    question: 'Elektrik akımı hangi parçacıkların hareketiyle oluşur?',
    options: ['Protonlar', 'Nötronlar', 'Elektronlar', 'Atom çekirdekleri'],
    correctAnswer: 2,
    explanation: 'Elektronların hareket etmesiyle elektrik akımı oluşur.'
  },
  {
    id: 'og_fen_22', subjectId: 'science', topic: 'Ses', difficulty: 'medium',
    question: 'Sesin yayılabilmesi için hangi ortam gerekir?',
    options: ['Boşluk', 'Katı, sıvı veya gaz', 'Sadece katı', 'Hiçbir ortam'],
    correctAnswer: 1,
    explanation: 'Ses, bir dalga olduğu için yayılması için bir ortama (maddeye) ihtiyaç duyar.'
  },
  {
    id: 'og_fen_23', subjectId: 'science', topic: 'Fotosentez', difficulty: 'easy',
    question: 'Fotosentez sonucu bitkiler hangi maddeyi üretir?',
    options: ['Karbondioksit', 'Oksijen', 'Su', 'Azot'],
    correctAnswer: 1,
    explanation: 'Bitkiler fotosentez sonucu atmosfere oksijen bırakır.'
  },
  {
    id: 'og_fen_24', subjectId: 'science', topic: 'Manyetizma', difficulty: 'medium',
    question: 'Aşağıdakilerden hangisi mıknatısın özelliği değildir?',
    options: ['Demir çekmesi', 'İki kutup oluşturması', 'Elektrik üretmesi', 'Metal üzerinde kuvvet uygulaması'],
    correctAnswer: 2,
    explanation: 'Mıknatıs elektrik üretmez, ancak manyetik alan oluşturur.'
  },
  {
    id: 'og_fen_25', subjectId: 'science', topic: 'Dünya ve Evren', difficulty: 'easy',
    question: 'Dünya’nın güneş etrafında dönmesi sonucu ne oluşur?',
    options: ['Gün ve gece', 'Mevsimler', 'Gelgitler', 'Yıldız kayması'],
    correctAnswer: 1,
    explanation: 'Dünya\'nın Güneş etrafında 365 gün 6 saatte dönmesiyle mevsimler oluşur.'
  },
  {
    id: 'og_fen_26', subjectId: 'science', topic: 'Kuvvet', difficulty: 'easy',
    question: 'Bir cismin hareket yönünü değiştiren etkiye ne denir?',
    options: ['Kütle', 'Hız', 'Kuvvet', 'Enerji'],
    correctAnswer: 2,
    explanation: 'Kuvvet, cisimlerin hareket durumunu değiştiren etkidir.'
  },
  {
    id: 'og_fen_27', subjectId: 'science', topic: 'Enerji', difficulty: 'medium',
    question: 'Hangi enerji türü yükseğe kaldırılmış bir cisme aittir?',
    options: ['Kinetik enerji', 'Potansiyel enerji', 'Isı enerjisi', 'Elektrik enerjisi'],
    correctAnswer: 1,
    explanation: 'Yüksekte duran cisimlerin yer çekiminden dolayı sahip olduğu enerji, potansiyel enerjidir.'
  },
  {
    id: 'og_fen_28', subjectId: 'science', topic: 'Maddenin Halleri', difficulty: 'easy',
    question: 'Su kaynayınca hangi hâle geçer?',
    options: ['Katı', 'Sıvı', 'Gaz', 'Plazma'],
    correctAnswer: 2,
    explanation: 'Su kaynayınca buharlaşarak gaz hale geçer.'
  },
  {
    id: 'og_fen_29', subjectId: 'science', topic: 'Elektromanyetizma', difficulty: 'medium',
    question: 'Bir iletken telin çevresine sarılan bobin, manyetik alan oluşturur. Bu olay hangi kavrama örnektir?',
    options: ['Elektromıknatıs', 'Elektrik üretimi', 'Elektrik devresi', 'Termodinamik'],
    correctAnswer: 0,
    explanation: 'Bu durum, elektrik akımı sayesinde geçici bir mıknatıs özelliği kazanılması, yani elektromıknatıs oluşumudur.'
  },
  {
    id: 'og_fen_30', subjectId: 'science', topic: 'Enerji Dönüşümleri', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi enerji dönüşümüne örnektir?',
    options: ['Buzun erimesi', 'Güneş panelinin elektrik üretmesi', 'Su buharlaşması', 'Taşın düşmesi'],
    correctAnswer: 1,
    explanation: 'Güneş paneli, güneş enerjisini elektrik enerjisine dönüştürür.'
  },
  {
    id: 'og_fen_31', subjectId: 'science', topic: 'Basınç', difficulty: 'easy',
    question: '“Basınç = Kuvvet / Alan” formülünde basınç birimi nedir?',
    options: ['Newton', 'Pascal', 'Joule', 'Watt'],
    correctAnswer: 1,
    explanation: 'Basınç birimi Pascal\'dır (Pa). Basınç birimi olarak N/m² de kullanılır.'
  },
  {
    id: 'og_fen_32', subjectId: 'science', topic: 'Fotosentez', difficulty: 'easy',
    question: 'Bitkiler için ışık hangi amaçla gereklidir?',
    options: ['Solunum', 'Fotosentez', 'Sindirim', 'Su alma'],
    correctAnswer: 1,
    explanation: 'Bitkiler, fotosentez yaparak besin üretmek için güneş ışığına ihtiyaç duyar.'
  },
  {
    id: 'og_fen_33', subjectId: 'science', topic: 'Maddenin Değişimi', difficulty: 'medium',
    question: 'Hangi durum bir maddenin fiziksel değişimidir?',
    options: ['Kağıdın yırtılması', 'Şekerin erimesi', 'Metalin paslanması', 'Odunun yanması'],
    correctAnswer: 1,
    explanation: 'Şekerin erimesi, maddenin sadece halinin değiştiği fiziksel bir değişimdir.'
  },
  {
    id: 'og_fen_34', subjectId: 'science', topic: 'Ses', difficulty: 'hard',
    question: 'Ses dalgalarının yayılma hızı en hızlı hangi ortamda olur?',
    options: ['Hava', 'Su', 'Katı', 'Boşluk'],
    correctAnswer: 2,
    explanation: 'Ses, atomlar arasındaki bağların sıkılığı nedeniyle katı maddelerde en hızlı, gazlarda ise en yavaş yayılır.'
  },
  {
    id: 'og_fen_35', subjectId: 'science', topic: 'İnsan Anatomisi', difficulty: 'medium',
    question: 'İnsan vücudundaki hangi organ sindirim ve dolaşımda görev alır?',
    options: ['Akciğer', 'Karaciğer', 'Kalp', 'Mide'],
    correctAnswer: 1,
    explanation: 'Karaciğer, hem sindirimde (safra üretimi) hem de kanı temizleyerek dolaşım sisteminde önemli rol oynar.'
  },
  {
    id: 'og_fen_36', subjectId: 'science', topic: 'Işık', difficulty: 'easy',
    question: 'Işık ışınlarının bir yüzeye çarpıp geri dönmesine ne denir?',
    options: ['Kırılma', 'Yansıma', 'Soğuma', 'Dağılma'],
    correctAnswer: 1,
    explanation: 'Işığın bir yüzeye çarpıp geri dönmesi olayı yansıma olarak adlandırılır.'
  },
  {
    id: 'og_fen_37', subjectId: 'science', topic: 'Maddenin Yapısı', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi elementtir?',
    options: ['Su', 'H2O', 'Demir (Fe)', 'Tuz'],
    correctAnswer: 2,
    explanation: 'Demir (Fe), tek cins atomdan oluşan bir elementtir. Diğerleri bileşiktir.'
  },
  {
    id: 'og_fen_38', subjectId: 'science', topic: 'Bitkiler', difficulty: 'medium',
    question: 'Bitkilerin kökleri hangi amaçla toprakta bulunur?',
    options: ['Fotosentez', 'Destek', 'Su ve mineral alma', 'Nefes alma'],
    correctAnswer: 2,
    explanation: 'Bitkilerin kökleri, topraktan su ve mineralleri emmek için kullanılır.'
  },
  {
    id: 'og_fen_39', subjectId: 'science', topic: 'Maddenin Değişimi', difficulty: 'medium',
    question: 'Hangi durum kimyasal değişimdir?',
    options: ['Buzun erimesi', 'Şekerin erimesi', 'Suyun buharlaşması', 'Kağıdın yanması'],
    correctAnswer: 3,
    explanation: 'Kağıdın yanması, yeni maddelerin oluştuğu kimyasal bir değişimdir.'
  },
  {
    id: 'og_ink_1', subjectId: 'revolution', topic: 'Milli Mücadele', difficulty: 'medium',
    question: 'Aşağıdakilerden hangisi Sivas Kongresi’nde alınan kararlardan biri değildir?',
    options: ['Manda ve himayenin kesin olarak reddedilmesi','Tüm cemiyetlerin tek çatı altında birleştirilmesi','Temsil Heyeti\'nin oluşturulması','Türkiye Büyük Millet Meclisi\'nin açılması'], correctAnswer: 3,
    explanation: 'TBMM, Sivas Kongresi\'nden sonra, 23 Nisan 1920\'de Ankara\'da açılmıştır. Kongrenin kararı değildir.'
  },
  {
    id: 'og_ink_2', subjectId: 'revolution', topic: 'Atatürk İlkeleri', difficulty: 'easy',
    question: '“Egemenlik, kayıtsız şartsız milletindir.” sözü Atatürk ilkelerinden hangisiyle doğrudan ilgilidir?',
    options: ['Laiklik', 'Devletçilik', 'Cumhuriyetçilik', 'İnkılapçılık'], correctAnswer: 2,
    explanation: 'Egemenliğin millete ait olması, Cumhuriyetçilik ilkesinin temelini oluşturur.'
  },
  {
    id: 'og_ink_3', subjectId: 'revolution', topic: 'Cepheler', difficulty: 'medium',
    question: 'Kurtuluş Savaşı’nda Batı Cephesi’nde kazanılan ilk askeri zafer aşağıdakilerden hangisidir?',
    options: ['Sakarya Meydan Muharebesi', 'Büyük Taarruz', 'I. İnönü Muharebesi', 'II. İnönü Muharebesi'], correctAnswer: 2,
    explanation: 'Batı Cephesi\'nde kazanılan ilk zafer, I. İnönü Muharebesi\'dir. (6-10 Ocak 1921)'
  },
  {
    id: 'og_ink_4', subjectId: 'revolution', topic: 'Milli Mücadele', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi Amasya Genelgesi\'nin en önemli maddelerinden biridir?',
    options: ['Vatanın bütünlüğü milletin azim ve kararı kurtaracaktır.','Manda ve himaye kabul edilemez.','Kuvay-i Milliye\'yi kurmak.','Milli sınırlar içinde vatan bir bütündür.'], correctAnswer: 0,
    explanation: 'Amasya Genelgesi\'nin bu maddesi, ilk kez "milletin azim ve kararı"ndan bahsederek milli egemenlik fikrine işaret etmesi açısından önemlidir.'
  },
  {
    id: 'og_ink_5', subjectId: 'revolution', topic: 'Lozan Antlaşması', difficulty: 'medium',
    question: 'Lozan Barış Konferansı\'nda Türkiye\'yi temsil eden heyetin başkanı kimdir?',
    options: ['Mustafa Kemal Paşa','İsmet İnönü','Fevzi Çakmak','Kazım Karabekir'], correctAnswer: 1,
    explanation: 'Lozan Barış Konferansı\'nda Türk heyetinin başkanı İsmet İnönü olmuştur.'
  },
  {
    id: 'og_ink_6', subjectId: 'revolution', topic: 'Antlaşmalar', difficulty: 'easy',
    question: 'Yukarıdaki antlaşmalardan hangileri Türk milleti tarafından kabul edilmiştir?',
    options: ['Yalnız I', 'Yalnız III', 'I ve II', 'II ve III'],
    correctAnswer: 1,
    explanation: 'Mondros ve Sevr antlaşmaları Türk milleti tarafından reddedilmiş, Kurtuluş Savaşı sonrası Lozan Antlaşması kabul edilmiştir.'
  },
  {
    id: 'og_ink_7', subjectId: 'revolution', topic: 'Milli Mücadele', difficulty: 'easy',
    question: 'Kurtuluş Savaşı sırasında yayımlanan hangi genelge “milletin bağımsızlığını yine milletin azim ve kararı kurtaracaktır” ifadesini içermektedir?',
    options: ['Havza Genelgesi', 'Amasya Genelgesi', 'Erzurum Kongresi', 'Sivas Kongresi'],
    correctAnswer: 1,
    explanation: 'Amasya Genelgesi, Kurtuluş Savaşı\'nın amacını ve yöntemini belirten bu önemli ifadeyi içerir.'
  },
  {
    id: 'og_ink_8', subjectId: 'revolution', topic: 'Misak-ı Milli', difficulty: 'medium',
    question: 'Misak-ı Milli kararları hangi mecliste kabul edilmiştir?',
    options: ['TBMM', 'İstanbul Mebusan Meclisi', 'Erzurum Kongresi', 'Sivas Kongresi'],
    correctAnswer: 1,
    explanation: 'Misak-ı Milli, son Osmanlı Mebusan Meclisi\'nde kabul edilmiştir.'
  },
  {
    id: 'og_ink_9', subjectId: 'revolution', topic: 'Eğitim', difficulty: 'medium',
    question: 'Tevhid-i Tedrisat Kanunu’nun sonuçları arasında hangileri vardır?',
    options: ['I ve II', 'I ve III', 'II ve III', 'Yalnız III'],
    correctAnswer: 0,
    explanation: 'Tevhid-i Tedrisat Kanunu ile eğitimde birlik sağlanmış (I) ve eğitim laikleştirilerek laikliğin güçlenmesine katkıda bulunulmuştur (II).'
  },
  {
    id: 'og_ink_10', subjectId: 'revolution', topic: 'Atatürk İlkeleri', difficulty: 'easy',
    question: 'Atatürk’ün hangi ilkesi halkın kendi iradesiyle yönetime katılmasını esas alır?',
    options: ['Laiklik', 'Halkçılık', 'Devletçilik', 'İnkılapçılık'],
    correctAnswer: 1,
    explanation: 'Halkçılık ilkesi, toplumda eşitliği ve halkın yönetime katılımını hedefler.'
  },
  {
    id: 'og_ink_11', subjectId: 'revolution', topic: 'Atatürk Dönemi', difficulty: 'easy',
    question: 'Atatürk dönemi sağlık alanındaki gelişmelerin temel amacı aşağıdakilerden hangisidir?',
    options: ['Ülkede dini kurallara uygun tedavi sağlamak', 'Halkın yaşam süresini kısaltmak', 'Halk sağlığını korumak ve geliştirmek', 'Yalnızca askerî hastaneleri güçlendirmek'],
    correctAnswer: 2,
    explanation: 'Atatürk dönemi sağlık politikaları, halk sağlığını koruma ve geliştirme amacı gütmüştür.'
  },
  {
    id: 'og_ink_12', subjectId: 'revolution', topic: 'Laiklik', difficulty: 'easy',
    question: '1928’de Anayasa’dan “Devletin dini İslam’dır” ifadesi çıkarılmıştır. Bu gelişme hangi ilkeyle ilgilidir?',
    options: ['Milliyetçilik', 'Laiklik', 'Devletçilik', 'Cumhuriyetçilik'],
    correctAnswer: 1,
    explanation: 'Devletin din işlerinde tarafsız olmasını sağlayan bu değişiklik, Laiklik ilkesinin en önemli adımlarından biridir.'
  },
  {
    id: 'og_ink_13', subjectId: 'revolution', topic: 'Cumhuriyet', difficulty: 'medium',
    question: 'Saltanatın kaldırılması hangi gelişmenin doğrudan sonucudur?',
    options: ['İstanbul’un işgali', 'Osmanlı Devleti’nin resmen sona ermesi', 'Cumhuriyet’in ilanı', 'Halifeliğin kaldırılması'],
    correctAnswer: 1,
    explanation: 'Saltanatın kaldırılmasıyla Osmanlı Devleti\'nin siyasi varlığı resmen sona ermiştir.'
  },
  {
    id: 'og_ink_14', subjectId: 'revolution', topic: 'Dış Politika', difficulty: 'easy',
    question: 'Atatürk’ün dış politika anlayışını en iyi yansıtan söz aşağıdakilerden hangisidir?',
    options: ['“Yurtta sulh, cihanda sulh”', '“Ne mutlu Türk’üm diyene”', '“Egemenlik, kayıtsız şartsız milletindir”', '“Hayatta en hakiki mürşit ilimdir”'],
    correctAnswer: 0,
    explanation: '"Yurtta sulh, cihanda sulh" sözü, Atatürk\'ün barışçıl dış politikasını özetler.'
  },
  {
    id: 'og_ink_15', subjectId: 'revolution', topic: 'Lozan Antlaşması', difficulty: 'easy',
    question: 'Kapitülasyonların kaldırılması hangi antlaşma ile gerçekleşmiştir?',
    options: ['Mondros', 'Sevr', 'Lozan', 'Ankara'],
    correctAnswer: 2,
    explanation: 'Kapitülasyonlar, Türkiye\'nin ekonomik bağımsızlığını sağlayan Lozan Barış Antlaşması ile kaldırılmıştır.'
  },
  {
    id: 'og_ink_16', subjectId: 'revolution', topic: 'Cepheler', difficulty: 'medium',
    question: 'Kurtuluş Savaşı’nda düzenli ordunun ilk zaferi aşağıdakilerden hangisidir?',
    options: ['Sakarya Meydan Muharebesi', 'Büyük Taarruz', 'I. İnönü Savaşı', 'II. İnönü Savaşı'],
    correctAnswer: 2,
    explanation: 'Düzenli ordunun Batı Cephesi\'ndeki ilk zaferi, I. İnönü Savaşı olmuştur.'
  },
  {
    id: 'og_ink_17', subjectId: 'revolution', topic: 'İsyanlar', difficulty: 'medium',
    question: 'Şeyh Sait İsyanı’nın çıkış nedeni aşağıdakilerden hangisidir?',
    options: ['Saltanatın kaldırılması', 'Cumhuriyet’in ilanı', 'Laiklik karşıtı hareketler', 'Ekonomik sıkıntılar'],
    correctAnswer: 2,
    explanation: 'Şeyh Sait İsyanı, laiklik karşıtı ve cumhuriyet rejimine muhalif bir ayaklanmadır.'
  },
  {
    id: 'og_ink_18', subjectId: 'revolution', topic: 'Ekonomi', difficulty: 'medium',
    question: 'Aşağıdaki kuruluşlardan hangisi Atatürk döneminde açılmıştır?',
    options: ['Ziraat Bankası', 'İş Bankası', 'Osmanlı Bankası', 'Merkez Bankası (Osmanlı dönemi)'],
    correctAnswer: 1,
    explanation: 'Türkiye İş Bankası, 1924 yılında Atatürk\'ün talimatıyla kurulmuştur.'
  },
  {
    id: 'og_ink_19', subjectId: 'revolution', topic: 'Cumhuriyet', difficulty: 'easy',
    question: 'Cumhuriyet’in ilanıyla aşağıdaki gelişmelerden hangisi doğrudan gerçekleşmiştir?',
    options: ['Saltanatın kaldırılması', 'Halifeliğin kaldırılması', 'Devlet başkanının belirlenmesi', 'Çok partili hayata geçilmesi'],
    correctAnswer: 2,
    explanation: 'Cumhuriyet\'in ilanıyla, devlet başkanlığı sorunu çözülmüş ve Cumhurbaşkanlığı makamı oluşturulmuştur.'
  },
  {
    id: 'og_ink_20', subjectId: 'revolution', topic: 'Atatürk İlkeleri', difficulty: 'medium',
    question: 'Aşağıdakilerden hangisi Atatürk’ün milliyetçilik anlayışını en iyi açıklar?',
    options: ['Irkçılığa dayalıdır.', 'Din birliğine dayanır.', 'Vatandaşlık bağına dayanır.', 'Sadece kültürel farklılıkları ön plana çıkarır.'],
    correctAnswer: 2,
    explanation: 'Atatürk milliyetçiliği, ırk, din ayrımı gözetmeden vatandaşlık bağına dayanan kapsayıcı bir anlayıştır.'
  },
  {
    id: 'og_ink_21', subjectId: 'revolution', topic: 'İnkılaplar', difficulty: 'medium',
    question: 'Yukarıdaki inkılaplardan hangileri toplumsal hayatı düzenlemeye yöneliktir?',
    options: ['I ve II', 'I ve III', 'II ve III', 'I, II ve III'],
    correctAnswer: 0,
    explanation: 'Medeni Kanun ve kadınlara seçme/seçilme hakkı verilmesi, doğrudan toplumsal yapıyı ve kadın-erkek ilişkilerini düzenleyen inkılaplardır.'
  },
  {
    id: 'og_ink_22', subjectId: 'revolution', topic: 'Ekonomi', difficulty: 'easy',
    question: 'Atatürk’ün ekonomik alandaki çalışmalarının temel amacı aşağıdakilerden hangisidir?',
    options: ['Dışa bağımlı ekonomi oluşturmak', 'Karma ekonomi modeli geliştirmek', 'Halkın ekonomik gücünü azaltmak', 'Yalnızca tarımsal faaliyetleri geliştirmek'],
    correctAnswer: 1,
    explanation: 'Atatürk dönemi ekonomisi, özel teşebbüsle devletin işbirliğini içeren karma ekonomi modelini benimsemiştir.'
  },
  {
    id: 'og_ink_23', subjectId: 'revolution', topic: 'Antlaşmalar', difficulty: 'medium',
    question: 'Aşağıdaki antlaşmalardan hangisi Kurtuluş Savaşı sırasında imzalanmamıştır?',
    options: ['Moskova Antlaşması', 'Ankara Antlaşması', 'Kars Antlaşması', 'Lozan Antlaşması'],
    correctAnswer: 3,
    explanation: 'Lozan Antlaşması, Kurtuluş Savaşı\'nı bitiren barış antlaşmasıdır, savaş sırasında imzalanmamıştır.'
  },
  {
    id: 'og_ink_24', subjectId: 'revolution', topic: 'İnkılaplar', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi Cumhuriyet dönemi inkılaplarının ortak özelliklerinden biridir?',
    options: ['Osmanlı kültürünü güçlendirme', 'Çağdaşlaşmayı hedefleme', 'Saltanatı devam ettirme', 'Dini kurallara bağlı kalma'],
    correctAnswer: 1,
    explanation: 'Tüm inkılapların temel amacı, Türkiye\'yi modern ve çağdaş bir devlet haline getirmektir.'
  },
  {
    id: 'og_ink_25', subjectId: 'revolution', topic: 'Atatürk İlkeleri', difficulty: 'easy',
    question: 'Atatürk’ün “En hakiki mürşit ilimdir, fendir.” sözü hangi ilkeyle ilişkilendirilebilir?',
    options: ['İnkılapçılık', 'Milliyetçilik', 'Laiklik', 'Devletçilik'],
    correctAnswer: 2,
    explanation: 'Bu söz, dinin devlet işlerinden ayrılması ve aklın, bilimin yol gösterici olması anlamına gelen Laiklik ilkesiyle doğrudan ilişkilidir.'
  },
  {
    id: 'og_ink_26', subjectId: 'revolution', topic: 'Cumhuriyet', difficulty: 'easy',
    question: 'Atatürk’ün “Benim naçiz vücudum elbet bir gün toprak olacaktır; fakat Türkiye Cumhuriyeti ilelebet payidar kalacaktır.” sözü hangi ilkeyle ilgilidir?',
    options: ['Cumhuriyetçilik', 'Devletçilik', 'Milliyetçilik', 'Laiklik'],
    correctAnswer: 0,
    explanation: 'Bu söz, Cumhuriyet yönetiminin sürekliliğini ve kalıcılığını vurgular.'
  },
  {
    id: 'og_ink_27', subjectId: 'revolution', topic: 'Lozan Antlaşması', difficulty: 'medium',
    question: 'Lozan Antlaşması’nda Türkiye’nin lehine çözümlenen konulardan biri aşağıdakilerden hangisidir?',
    options: ['Kapitülasyonların kaldırılması', 'Boğazların tamamen Türk egemenliğine bırakılması', 'Musul’un Türkiye’ye bırakılması', 'Azınlıklara siyasi ayrıcalık verilmesi'],
    correctAnswer: 0,
    explanation: 'Kapitülasyonların kaldırılması, Türkiye\'nin ekonomik bağımsızlığını kazanarak lehine çözdüğü önemli bir konudur.'
  },
  {
    id: 'og_ink_28', subjectId: 'revolution', topic: 'Eğitim', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi Atatürk döneminde yapılan kültürel gelişmelerden biridir?',
    options: ['Tevhid-i Tedrisat Kanunu', 'Mecelle’nin uygulanması', 'Saltanatın kaldırılması', 'Halifeliğin kaldırılması'],
    correctAnswer: 0,
    explanation: 'Tevhid-i Tedrisat Kanunu, eğitim ve kültür alanında yapılan önemli bir inkılaptır.'
  },
  {
    id: 'og_ink_29', subjectId: 'revolution', topic: 'Ekonomi', difficulty: 'medium',
    question: 'Yukarıdakilerden hangileri ekonomik gelişmelerdir?',
    options: ['I ve II', 'I ve III', 'II ve III', 'Yalnız I'],
    correctAnswer: 0,
    explanation: 'İzmir İktisat Kongresi ve Kabotaj Kanunu, ekonomik alanda yapılan önemli adımlardır.'
  },
  {
    id: 'og_ink_30', subjectId: 'revolution', topic: 'İnkılaplar', difficulty: 'easy',
    question: 'Şapka Kanunu hangi alanda yapılan bir inkılaptır?',
    options: ['Eğitim', 'Kültür', 'Ekonomi', 'Sosyal'],
    correctAnswer: 3,
    explanation: 'Şapka Kanunu, kılık kıyafette modernleşmeyi sağlayarak sosyal alanda yapılan bir inkılaptır.'
  },
  {
    id: 'og_ink_31', subjectId: 'revolution', topic: 'Siyasi Hayat', difficulty: 'medium',
    question: 'Türkiye Cumhuriyeti’nde ilk çok partili deneme hangi parti ile başlamıştır?',
    options: ['Serbest Cumhuriyet Fırkası', 'Demokrat Parti', 'Terakkiperver Cumhuriyet Fırkası', 'Cumhuriyet Halk Fırkası'],
    correctAnswer: 2,
    explanation: 'Cumhuriyet döneminde ilk çok partili hayata geçiş denemesi, Terakkiperver Cumhuriyet Fırkası ile olmuştur.'
  },
  {
    id: 'og_ink_32', subjectId: 'revolution', topic: 'İnkılaplar', difficulty: 'medium',
    question: 'İzmir Suikasti girişiminin amacı nedir?',
    options: ['Cumhuriyeti güçlendirmek', 'Atatürk’ü ortadan kaldırmak', 'Çok partili hayata geçmek', 'Ekonomiyi canlandırmak'],
    correctAnswer: 1,
    explanation: 'İzmir Suikasti, Atatürk\'ü ortadan kaldırarak Cumhuriyet rejimine karşı bir girişimdir.'
  },
  {
    id: 'og_ink_33', subjectId: 'revolution', topic: 'Milli Mücadele', difficulty: 'easy',
    question: 'Atatürk’ün “Milli sınırlar içinde vatan bir bütündür, parçalanamaz.” sözü hangi belgeye aittir?',
    options: ['Erzurum Kongresi', 'Misak-ı Milli', 'Amasya Genelgesi', 'Lozan Antlaşması'],
    correctAnswer: 0,
    explanation: 'Bu söz, ilk kez Erzurum Kongresi\'nde dile getirilmiştir.'
  },
  {
    id: 'og_ink_34', subjectId: 'revolution', topic: 'Siyasi Hayat', difficulty: 'medium',
    question: 'Türk kadınlarına seçme ve seçilme hakkı hangi yılda verilmiştir?',
    options: ['1924', '1926', '1930', '1934'],
    correctAnswer: 3,
    explanation: 'Türk kadınlarına milletvekili seçme ve seçilme hakkı 1934 yılında verilmiştir.'
  },
  {
    id: 'og_ink_35', subjectId: 'revolution', topic: 'Atatürk İlkeleri', difficulty: 'easy',
    question: '“Atatürk ilke ve inkılaplarının korunması ve yaşatılması” görevi aşağıdaki kurumların hangisine aittir?',
    options: ['TBMM', 'Cumhurbaşkanlığı', 'Anayasa Mahkemesi', 'Türk Silahlı Kuvvetleri'],
    correctAnswer: 3,
    explanation: 'Türk Silahlı Kuvvetleri\'nin anayasal görevlerinden biri, Cumhuriyetin ve Atatürk ilke ve inkılaplarının korunmasıdır.'
  },
  {
    id: 'og_ink_36', subjectId: 'revolution', topic: 'Dış Politika', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi Atatürk döneminde Türk dış politikasının temel amaçlarından biri değildir?',
    options: ['Tam bağımsızlık', 'Barışçıl ilişkiler', 'Uluslararası işbirliği', 'Yayılmacı siyaset'],
    correctAnswer: 3,
    explanation: 'Atatürk\'ün dış politikası barış ve tam bağımsızlık üzerine kuruludur, yayılmacı bir siyaset izlenmemiştir.'
  },
  {
    id: 'og_ink_37', subjectId: 'revolution', topic: 'Ekonomi', difficulty: 'medium',
    question: 'Cumhuriyet döneminde çıkarılan Kabotaj Kanunu’nun amacı nedir?',
    options: ['Deniz ticaretini yabancılara açmak', 'Türk denizciliğini geliştirmek', 'Yalnızca askeri deniz gücünü artırmak', 'Balıkçılığı yasaklamak'],
    correctAnswer: 1,
    explanation: 'Kabotaj Kanunu, Türk karasularında denizcilik ve liman işletme haklarını Türk vatandaşlarına vermeyi amaçlamıştır.'
  },
  {
    id: 'og_ink_38', subjectId: 'revolution', topic: 'Atatürk İlkeleri', difficulty: 'easy',
    question: 'Atatürk’ün hangi ilkesi sürekli yenilik yapmayı ve gelişmeyi esas alır?',
    options: ['Cumhuriyetçilik', 'Halkçılık', 'İnkılapçılık', 'Devletçilik'],
    correctAnswer: 2,
    explanation: 'İnkılapçılık, çağın gereksinimlerine uygun olarak sürekli yenilik ve değişim yapma ilkesidir.'
  },
  {
    id: 'og_din_1', subjectId: 'religion', topic: 'Kader ve Kaza', difficulty: 'easy',
    question: 'Allah’ın her şeyi bir ölçü ve düzene göre yaratmasına ne denir?',
    options: ['Kaza', 'Kader', 'Ecel', 'Tevekkül'], correctAnswer: 1,
    explanation: 'Kader, Allah\'ın evrende olacak her şeyi önceden bilmesi ve takdir etmesidir.'
  },
  {
    id: 'og_din_2', subjectId: 'religion', topic: 'Zekat ve Sadaka', difficulty: 'medium',
    question: 'Aşağıdakilerden hangisine zekat verilmez?',
    options: ['Fakir komşuya', 'İhtiyaç sahibi öğrenciye', 'Anne, baba ve çocuklara', 'Borçlulara'], correctAnswer: 2,
    explanation: 'İslam dinine göre zekat, usul ve füru\'a (anne, baba, dede, nine, çocuk, torun gibi yakın akrabalara) verilmez.'
  },
  {
    id: 'og_din_3', subjectId: 'religion', topic: 'Din ve Hayat', difficulty: 'medium',
    question: 'Peygamberlerin Allah’tan aldıkları mesajları insanlara eksizsiz olarak bildirmelerine ne ad verilir?',
    options: ['Sıdk (Doğruluk)', 'Emanet (Güvenilirlik)', 'Fetanet (Akıllı olmak)', 'Tebliğ (Bildirme)'], correctAnswer: 3,
    explanation: 'Peygamberlerin ilahi mesajları insanlara ulaştırma görevi Tebliğ olarak adlandırılır.'
  },
  {
    id: 'og_din_4', subjectId: 'religion', topic: 'İnanç Esasları', difficulty: 'easy',
    question: 'Aşağıdakilerden hangisi İslam\'ın şartlarından biri değildir?',
    options: ['Şehadet getirmek', 'Namaz kılmak', 'Oruç tutmak', 'Kitaplara inanmak'], correctAnswer: 3,
    explanation: 'Kitaplara inanmak, İslam\'ın değil, İmanın şartlarındandır.'
  },
  {
    id: 'og_din_5', subjectId: 'religion', topic: 'Kur\'an-ı Kerim', difficulty: 'medium',
    question: 'Kur\'an-ı Kerim\'in indiriliş süresi yaklaşık kaç yıldır?',
    options: ['10 yıl', '23 yıl', '40 yıl', '12 yıl'], correctAnswer: 1,
    explanation: 'Kur\'an-ı Kerim, Hz. Muhammed\'e peygamberliğinin başladığı 610 yılından vefat ettiği 632 yılına kadar yaklaşık 23 yılda indirilmiştir.'
  },
  {
    id: 'og_din_6', subjectId: 'religion', topic: 'İnanç Esasları', difficulty: 'easy',
    question: '“Allah’ın varlığı ve birliği, eşi ve benzeri olmaması” inancı aşağıdakilerden hangisiyle ilgilidir?',
    options: ['Tevhid', 'Nübüvvet', 'Ahiret', 'İhsan'],
    correctAnswer: 0,
    explanation: 'Tevhid, Allah\'ın tek ve eşsiz olduğu inancıdır.'
  },
  {
    id: 'og_din_7', subjectId: 'religion', topic: 'İbadetler', difficulty: 'easy',
    question: 'İslam’ın şartlarından biri aşağıdakilerden hangisidir?',
    options: ['İman', 'Namaz', 'İhsan', 'Sabır'],
    correctAnswer: 1,
    explanation: 'Namaz, İslam\'ın beş temel şartından biridir.'
  },
  {
    id: 'og_din_8', subjectId: 'religion', topic: 'Hac', difficulty: 'medium',
    question: 'Hac ibadeti hangi ayda yapılır?',
    options: ['Recep', 'Ramazan', 'Şaban', 'Zilhicce'],
    correctAnswer: 3,
    explanation: 'Hac ibadeti, Hicri takvimin son ayı olan Zilhicce ayında yapılır.'
  },
  {
    id: 'og_din_9', subjectId: 'religion', topic: 'Ahlak', difficulty: 'easy',
    question: '“İnsanların doğuştan sahip oldukları haklar” aşağıdaki kavramlardan hangisini ifade eder?',
    options: ['Kul hakkı', 'Doğal hak', 'Adalet', 'Merhamet'],
    correctAnswer: 1,
    explanation: 'Doğal haklar, insanların doğuştan kazandığı, kimseye ait olmayan haklardır.'
  },
  {
    id: 'og_din_10', subjectId: 'religion', topic: 'Helal ve Haram', difficulty: 'easy',
    question: 'İslam’a göre aşağıdakilerden hangisi helaldir?',
    options: ['Faiz', 'Kumar', 'Zekât', 'İçki'],
    correctAnswer: 2,
    explanation: 'Zekât, İslam\'da ibadet olarak kabul edilen ve helal olan bir davranıştır.'
  },
  {
    id: 'og_din_11', subjectId: 'religion', topic: 'Kur\'an-ı Kerim', difficulty: 'easy',
    question: 'Kur’an-ı Kerim’in ilk suresi aşağıdakilerden hangisidir?',
    options: ['Fatiha', 'Bakara', 'İhlas', 'Nas'],
    correctAnswer: 0,
    explanation: 'Kur’an-ı Kerim, Fatiha suresi ile başlar.'
  },
  {
    id: 'og_din_12', subjectId: 'religion', topic: 'Peygamberlik', difficulty: 'easy',
    question: 'Peygamberlerin gönderiliş amacı aşağıdakilerden hangisidir?',
    options: ['İnsanların zenginleşmesini sağlamak', 'İnsanlara doğru yolu göstermek', 'Dünyada rahat yaşamayı öğretmek', 'İnsanların ömürlerini uzatmak'],
    correctAnswer: 1,
    explanation: 'Peygamberler, insanlara Allah\'ın emir ve yasaklarını bildirerek doğru yolu göstermek için gönderilmiştir.'
  },
  {
    id: 'og_din_13', subjectId: 'religion', topic: 'Hz. Muhammed', difficulty: 'easy',
    question: 'Hz. Muhammed’in çocukluk yıllarındaki dürüstlüğü nedeniyle kendisine verilen unvan hangisidir?',
    options: ['El-Emîn', 'El-Fetih', 'El-Hakîm', 'El-Müctehid'],
    correctAnswer: 0,
    explanation: 'Hz. Muhammed, dürüstlüğünden dolayı "El-Emîn" (Güvenilir) unvanını almıştır.'
  },
  {
    id: 'og_din_14', subjectId: 'religion', topic: 'Günahlar', difficulty: 'medium',
    question: 'İslam’a göre aşağıdakilerden hangisi “büyük günah” kabul edilir?',
    options: ['Namaz kılmak', 'Oruç tutmak', 'Yalan söylemek', 'Hırsızlık yapmak'],
    correctAnswer: 3,
    explanation: 'Hırsızlık yapmak, İslam\'da büyük günahlardan biri olarak kabul edilir.'
  },
  {
    id: 'og_din_15', subjectId: 'religion', topic: 'İslam ve Toplum', difficulty: 'medium',
    question: '“Din ve vicdan özgürlüğü” ile en çok ilişkili ilke hangisidir?',
    options: ['Laiklik', 'Milliyetçilik', 'Devletçilik', 'Halkçılık'],
    correctAnswer: 0,
    explanation: 'Laiklik, devletin din ve vicdan işlerinde tarafsız olması ilkesidir.'
  },
  {
    id: 'og_din_16', subjectId: 'religion', topic: 'Ahlak', difficulty: 'medium',
    question: '“İyiliği emretmek, kötülükten sakındırmak” ifadesi hangi kavramla açıklanır?',
    options: ['Takva', 'Tevazu', 'Emr-i bi’l-maruf', 'İhsan'],
    correctAnswer: 2,
    explanation: 'Emr-i bi’l-maruf, iyiliği emretmek, kötülükten sakındırmak anlamına gelir.'
  },
  {
    id: 'og_din_17', subjectId: 'religion', topic: 'Zekat', difficulty: 'easy',
    question: 'Zekât kimlere verilemez?',
    options: ['Fakirlere', 'Borçlulara', 'Yolculara', 'Zenginlere'],
    correctAnswer: 3,
    explanation: 'Zekat, ihtiyaç sahibi olanlara verilir, zenginlere verilmez.'
  },
  {
    id: 'og_din_18', subjectId: 'religion', topic: 'Kur\'an-ı Kerim', difficulty: 'easy',
    question: 'İslam’a göre ilk emir aşağıdakilerden hangisidir?',
    options: ['Oku', 'Koru', 'Dinle', 'Çalış'],
    correctAnswer: 0,
    explanation: 'Kur’an-ı Kerim\'in ilk ayetinde Hz. Muhammed\'e "Oku" emri gelmiştir.'
  },
  {
    id: 'og_din_19', subjectId: 'religion', topic: 'Hz. Muhammed', difficulty: 'easy',
    question: 'Peygamberimizin doğduğu şehir aşağıdakilerden hangisidir?',
    options: ['Medine', 'Mekke', 'Kudüs', 'Taif'],
    correctAnswer: 1,
    explanation: 'Hz. Muhammed 571 yılında Mekke\'de doğmuştur.'
  },
  {
    id: 'og_din_20', subjectId: 'religion', topic: 'İbadetler', difficulty: 'easy',
    question: 'Kurban ibadeti hangi dini bayramda yapılır?',
    options: ['Ramazan Bayramı', 'Kurban Bayramı', 'Mevlid Kandili', 'Berat Kandili'],
    correctAnswer: 1,
    explanation: 'Kurban ibadeti, Kurban Bayramı\'nda yapılır.'
  },
  {
    id: 'og_din_21', subjectId: 'religion', topic: 'Ahlak', difficulty: 'medium',
    question: 'Aşağıdaki kavramlardan hangisi “Allah’a karşı sorumluluk bilinciyle yaşamak” demektir?',
    options: ['İhsan', 'Takva', 'İhlas', 'Tevekkül'],
    correctAnswer: 1,
    explanation: 'Takva, Allah\'ın emir ve yasaklarına karşı sorumlu davranma bilincidir.'
  },
  {
    id: 'og_din_22', subjectId: 'religion', topic: 'İslam ve Kaynakları', difficulty: 'medium',
    question: '“İslam dininin temel kaynakları” arasında aşağıdakilerden hangisi yer almaz?',
    options: ['Kur’an', 'Sünnet', 'Hadis', 'Anayasa'],
    correctAnswer: 3,
    explanation: 'Anayasa, İslam dininin temel kaynaklarından biri değildir.'
  },
  {
    id: 'og_din_23', subjectId: 'religion', topic: 'Hz. Muhammed', difficulty: 'easy',
    question: 'Hz. Muhammed’in doğum günü hangi gece kutlanır?',
    options: ['Miraç Kandili', 'Mevlid Kandili', 'Berat Kandili', 'Kadir Gecesi'],
    correctAnswer: 1,
    explanation: 'Hz. Muhammed\'in doğum günü Mevlid Kandili olarak kutlanır.'
  },
  {
    id: 'og_din_24', subjectId: 'religion', topic: 'Ahlak', difficulty: 'easy',
    question: 'Aşağıdaki davranışlardan hangisi “kul hakkına girmek”tir?',
    options: ['Oruç tutmak', 'Başkasının malını izinsiz almak', 'Sadaka vermek', 'Selamlaşmak'],
    correctAnswer: 1,
    explanation: 'Başkasının malını izinsiz almak, kul hakkına girmektir.'
  },
  {
    id: 'og_din_25', subjectId: 'religion', topic: 'Ahiret', difficulty: 'easy',
    question: '“İnsanların iyi veya kötü amellerinin karşılığını göreceği hayat” hangi kavramla ifade edilir?',
    options: ['Dünya', 'Ahiret', 'Fıtrat', 'Nübüvvet'],
    correctAnswer: 1,
    explanation: 'Ahiret, bu dünya hayatından sonra başlayacak ve amellerin karşılığının görüleceği ebedi hayattır.'
  },
  {
    id: 'og_din_26', subjectId: 'religion', topic: 'Helal ve Haram', difficulty: 'easy',
    question: 'İslam’a göre aşağıdakilerden hangisi haram değildir?',
    options: ['Faiz', 'Kumar', 'Çalışmak', 'İçki'],
    correctAnswer: 2,
    explanation: 'Çalışmak, İslam\'da teşvik edilen bir davranıştır, haram değildir.'
  },
  {
    id: 'og_din_27', subjectId: 'religion', topic: 'Kur\'an-ı Kerim', difficulty: 'medium',
    question: 'Kur’an-ı Kerim aşağıdaki hangi halife döneminde çoğaltılmıştır?',
    options: ['Hz. Ebubekir', 'Hz. Ömer', 'Hz. Osman', 'Hz. Ali'],
    correctAnswer: 2,
    explanation: 'Kur\'an, Hz. Osman döneminde farklı lehçelerde okunmasını önlemek amacıyla çoğaltılmıştır.'
  },
  {
    id: 'og_din_28', subjectId: 'religion', topic: 'Peygamberlik', difficulty: 'medium',
    question: '“Allah’ın peygamberler aracılığıyla insanlara gönderdiği buyruklar” ne olarak adlandırılır?',
    options: ['Sünnet', 'Vahiy', 'Hadis', 'Kıyas'],
    correctAnswer: 1,
    explanation: 'Vahiy, Allah\'ın, peygamberleri aracılığıyla insanlara gönderdiği ilahi mesajlardır.'
  },
  {
    id: 'og_din_29', subjectId: 'religion', topic: 'Ahlak', difficulty: 'easy',
    question: 'İslam’a göre “sabır” aşağıdakilerden hangisini ifade eder?',
    options: ['Şikâyet etmek', 'Zorluklara dayanmak', 'Haksızlık yapmak', 'Umutsuz olmak'],
    correctAnswer: 1,
    explanation: 'Sabır, karşılaşılan zorluklara ve sıkıntılara dayanmak anlamına gelir.'
  },
  {
    id: 'og_din_30', subjectId: 'religion', topic: 'Tarih', difficulty: 'easy',
    question: 'Hz. Muhammed’in Medine’ye hicretiyle birlikte kurulan ilk İslam devleti aşağıdakilerden hangisidir?',
    options: ['Emeviler', 'Abbâsiler', 'Medine İslam Devleti', 'Osmanlılar'],
    correctAnswer: 2,
    explanation: 'Hz. Muhammed\'in hicretinden sonra Medine\'de kurulan devletin adı, Medine İslam Devleti\'dir.'
  },
  {
    id: 'og_din_31', subjectId: 'religion', topic: 'Kur\'an-ı Kerim', difficulty: 'easy',
    question: 'Kadir Gecesi hangi ayın içinde yer alır?',
    options: ['Şaban', 'Recep', 'Ramazan', 'Muharrem'],
    correctAnswer: 2,
    explanation: 'Kadir Gecesi, Ramazan ayı içinde yer alan mübarek bir gecedir.'
  },
  {
    id: 'og_din_32', subjectId: 'religion', topic: 'İnanç Esasları', difficulty: 'medium',
    question: 'İslam’a göre en büyük günah aşağıdakilerden hangisidir?',
    options: ['Yalan söylemek', 'Şirk koşmak', 'Hırsızlık yapmak', 'Gıybet etmek'],
    correctAnswer: 1,
    explanation: 'Allah\'a ortak koşmak (şirk), İslam\'da en büyük günah kabul edilir.'
  },
  {
    id: 'og_din_33', subjectId: 'religion', topic: 'Ahlak', difficulty: 'easy',
    question: '“Allah’a güvenip gerekli tedbirleri almak” anlamına gelen kavram aşağıdakilerden hangisidir?',
    options: ['Tevekkül', 'Tevazu', 'Takva', 'İhlas'],
    correctAnswer: 0,
    explanation: 'Tevekkül, bir iş için gerekli tüm çabayı gösterdikten sonra sonucunu Allah\'a bırakmaktır.'
  },
  {
    id: 'og_din_34', subjectId: 'religion', topic: 'Kul Hakkı', difficulty: 'medium',
    question: 'İslam’da “komşu hakkı” ile ilgili olarak aşağıdakilerden hangisi yanlıştır?',
    options: ['Komşularla iyi geçinmek gerekir.', 'Komşular açken tok yatmamak gerekir.', 'Komşunun malını gizlice almak caizdir.', 'Komşuya yardım etmek dinen teşvik edilmiştir.'],
    correctAnswer: 2,
    explanation: 'Komşunun malını gizlice almak kul hakkına girmektir ve caiz değildir.'
  },
  {
    id: 'og_din_35', subjectId: 'religion', topic: 'Peygamberler', difficulty: 'hard',
    question: 'Aşağıdaki peygamberlerden hangisi “Ulul Azm” peygamberler arasında yer alır?',
    options: ['Hz. Yusuf', 'Hz. Nuh', 'Hz. Harun', 'Hz. Davut'],
    correctAnswer: 1,
    explanation: 'Ulul Azm peygamberler, Kur\'an\'da en çok zorluğa göğüs germiş olarak tanımlanan peygamberlerdir. Bunlar Hz. Nuh, Hz. İbrahim, Hz. Musa, Hz. İsa ve Hz. Muhammed\'dir.'
  },
  {
    id: 'og_din_36', subjectId: 'religion', topic: 'İnfak', difficulty: 'easy',
    question: 'İslam’da “infak” ne anlama gelir?',
    options: ['Allah’a şirk koşmak', 'Yardım ve bağışta bulunmak', 'Günah işlemek', 'İbadetleri terk etmek'],
    correctAnswer: 1,
    explanation: 'İnfak, Allah rızası için kişinin malından ihtiyaç sahiplerine harcaması, yani yardım ve bağışta bulunmasıdır.'
  },
  {
    id: 'og_din_37', subjectId: 'religion', topic: 'Sorumluluk', difficulty: 'easy',
    question: 'İslam’a göre insanın özgür iradesiyle yaptığı davranışların ahirette karşılığını görmesine ne denir?',
    options: ['Kader', 'Kaza', 'Sorumluluk', 'Hesap'],
    correctAnswer: 2,
    explanation: 'İslam\'da her birey, özgür iradesiyle yaptığı eylemlerden sorumludur.'
  },
  {
    id: 'og_din_38', subjectId: 'religion', topic: 'Hz. Muhammed', difficulty: 'easy',
    question: 'Hz. Muhammed’e ilk vahiy hangi mağarada gelmiştir?',
    options: ['Sevr', 'Hira', 'Nur', 'Uhud'],
    correctAnswer: 1,
    explanation: 'Hz. Muhammed\'e ilk vahiy, Hira Mağarası\'nda gelmiştir.'
  },
  {
    id: 'og_ing_1', subjectId: 'english', topic: 'Ünite 1: Friendship', difficulty: 'easy',
    question: 'A: Shall we watch a sci-fi movie tonight? B: ____. I don\'t like them. How about a comedy?',
    options: ['That sounds great!','I\'d love to, but I can\'t.','No, thanks.','Awesome!'], correctAnswer: 2,
    explanation: '"I don\'t like them" (Onları sevmiyorum) ifadesi, B\'nin teklifi reddettiğini gösterir. "No, thanks." (Hayır, teşekkürler) en uygun cevaptır.'
  },
  {
    id: 'og_ing_2', subjectId: 'english', topic: 'Ünite 3: In the Kitchen', difficulty: 'medium',
    question: 'Which tool do you use to peel a potato?',
    options: ['A grater', 'A peeler', 'A whisk', 'A rolling pin'], correctAnswer: 1,
    explanation: 'A peeler, patates soymak için kullanılan araçtır. Diğerleri: grater (rende), whisk (çırpıcı), rolling pin (oklava).'
  },
  {
    id: 'og_ing_3', subjectId: 'english', topic: 'Ünite 0: Genel Dil Bilgisi', difficulty: 'medium',
    question: 'I ____ my homework yesterday, so I can relax now.',
    options: ['finish', 'finishes', 'finished', 'am finishing'], correctAnswer: 2,
    explanation: '"Yesterday" (dün) kelimesi cümlenin geçmiş zamanda olduğunu gösterir. Bu yüzden fiilin geçmiş zaman hali olan "finished" doğru cevaptır.'
  },
  {
    id: 'og_ing_4', subjectId: 'english', topic: 'Ünite 1: Friendship', difficulty: 'easy',
    question: "Sandra believes that the Internet is useful but Mark doesn't think so. According to the information above, which of the following would Mark say?",
    options: ['It is the easiest way of contacting our classmates.','Students spend too much time on social media.','Shopping and paying the bills online make my life easier.','It helps us to find a lot of information.'], correctAnswer: 1,
    explanation: 'Sandra internetin faydalı olduğunu düşünürken, Mark aksini düşünüyor. Bu yüzden Mark\'ın internetin olumsuz yönünü belirten bir şey söylemesi gerekir. "Students spend too much time on social media." (Öğrenciler sosyal medyada çok fazla zaman harcıyor) olumsuz bir ifadedir.'
  },
  {
    id: 'og_ing_5', subjectId: 'english', topic: 'Ünite 1: Friendship', difficulty: 'easy',
    question: "Read the opinions of four people about their friends. Who says something POSITIVE? Alex: 'Tim doesn't forget to organize parties for my birthdays.' Fred: 'I don't like spending time with Joe.' Jill: 'I don't trust Betty.' Sally: 'Ashley doesn't support me.'",
    options: ['Alex', 'Fred', 'Jill', 'Sally'], correctAnswer: 0,
    explanation: 'Olumlu bir şey söyleyen Alex\'tir. Fred, Jill ve Sally olumsuz ifadeler kullanmıştır.'
  },
  {
    id: 'og_ing_6', subjectId: 'english', topic: 'Ünite 2: Teen Life', difficulty: 'medium',
    question: 'What do you use a "whisk" for in the kitchen?',
    options: ['To chop vegetables.','To slice bread.','To beat eggs.','To peel potatoes.'], correctAnswer: 2,
    explanation: 'A whisk is used to beat eggs or other ingredients, like cream or sauces.'
  },
  {
    id: 'og_ing_7', subjectId: 'english', topic: 'General Questions', difficulty: 'easy',
    question: 'Tom: “What do you usually do after school?”\n\nJack: “_____”',
    options: ['I usually play basketball.', 'I never eat breakfast.', 'I went to the cinema yesterday.', 'It is raining outside.'],
    correctAnswer: 0,
    explanation: 'Genel bir soruya, bir alışkanlığı anlatan Present Simple (Geniş Zaman) ile cevap verilmelidir.'
  },
  {
    id: 'og_ing_8', subjectId: 'english', topic: 'General Questions', difficulty: 'easy',
    question: 'Which one is an invitation?',
    options: ['Let’s go to the park this afternoon.', 'I usually have lunch at school.', 'I watched TV last night.', 'It is very cold today.'],
    correctAnswer: 0,
    explanation: '"Let’s" kalıbı, bir davet veya öneri ifade etmek için kullanılır.'
  },
  {
    id: 'og_ing_9', subjectId: 'english', topic: 'Gerunds', difficulty: 'medium',
    question: '“Mary is interested in _____ books.”',
    options: ['read', 'reading', 'reads', 'to read'],
    correctAnswer: 1,
    explanation: '"interested in" ifadesi bir edat (preposition) ile kullanıldığından, fiil "-ing" takısı alarak gerund haline gelir.'
  },
  {
    id: 'og_ing_10', subjectId: 'english', topic: 'Offers', difficulty: 'easy',
    question: 'Which option completes the dialogue?\n\nA: “Would you like some tea?”\nB: “_____”',
    options: ['Yes, please.', 'I don’t like football.', 'It’s on the table.', 'She is my sister.'],
    correctAnswer: 0,
    explanation: '"Would you like...?" şeklinde yapılan bir teklife kibar bir şekilde "Yes, please." (Evet, lütfen) diye cevap verilir.'
  },
  {
    id: 'og_ing_11', subjectId: 'english', topic: 'Adverbs of Frequency', difficulty: 'easy',
    question: 'Ali: “How often do you go swimming?”\n\nEce: “_____”',
    options: ['In the swimming pool.', 'Twice a week.', 'Because I like it.', 'Yesterday.'],
    correctAnswer: 1,
    explanation: '"How often" (Ne sıklıkla) sorusu, bir eylemin sıklığını sorar. Cevap, sıklık belirten bir ifade olmalıdır.'
  },
  {
    id: 'og_ing_12', subjectId: 'english', topic: 'General Knowledge', difficulty: 'easy',
    question: '“_____ is the capital city of Turkey.”',
    options: ['Ankara', 'İstanbul', 'İzmir', 'Bursa'],
    correctAnswer: 0,
    explanation: 'Türkiye\'nin başkenti Ankara\'dır.'
  },
  {
    id: 'og_ing_13', subjectId: 'english', topic: 'Tenses', difficulty: 'easy',
    question: '“Look! The children _____ football in the garden.”',
    options: ['play', 'are playing', 'played', 'will play'],
    correctAnswer: 1,
    explanation: '"Look!" (Bak!) ifadesi, eylemin konuşma anında devam ettiğini gösterir. Bu yüzden Present Continuous Tense kullanılır.'
  },
  {
    id: 'og_ing_14', subjectId: 'english', topic: 'Modals', difficulty: 'easy',
    question: 'Choose the correct sentence.',
    options: ['She can sings very well.', 'She cans sing very well.', 'She can sing very well.', 'She sing can very well.'],
    correctAnswer: 2,
    explanation: '"can" modal fiili, fiilin yalın haliyle kullanılır ve tekil üçüncü şahıs (She) için "-s" takısı almaz.'
  },
  {
    id: 'og_ing_15', subjectId: 'english', topic: 'Vocabulary', difficulty: 'easy',
    question: 'Which one is NOT a means of transportation?',
    options: ['Train', 'Bicycle', 'Elephant', 'Bus'],
    correctAnswer: 2,
    explanation: 'Train (tren), Bicycle (bisiklet) ve Bus (otobüs) birer ulaşım aracıdır, ancak Elephant (fil) değildir.'
  },
  {
    id: 'og_ing_16', subjectId: 'english', topic: 'Offers', difficulty: 'easy',
    question: '“_____ you like to come to my birthday party?”',
    options: ['Do', 'Would', 'Are', 'Is'],
    correctAnswer: 1,
    explanation: 'Birini bir şeye davet ederken "Would you like to...?" kalıbı kullanılır.'
  },
  {
    id: 'og_ing_17', subjectId: 'english', topic: 'Tenses', difficulty: 'easy',
    question: '“Yesterday” is used with which tense?',
    options: ['Present Continuous', 'Past Simple', 'Future Simple', 'Present Perfect'],
    correctAnswer: 1,
    explanation: '"Yesterday" (dün) kelimesi, tamamlanmış bir geçmiş zaman eylemini ifade eder. Bu yüzden Past Simple Tense ile kullanılır.'
  },
  {
    id: 'og_ing_18', subjectId: 'english', topic: 'Negatives', difficulty: 'easy',
    question: 'Which sentence is correct?',
    options: ['He doesn’t likes pizza.', 'He don’t like pizza.', 'He doesn’t like pizza.', 'He not like pizza.'],
    correctAnswer: 2,
    explanation: 'Tekil üçüncü şahıs (He) ile olumsuz cümle kurarken "doesn\'t" kullanılır ve fiil yalın halde ("like") kalır.'
  },
  {
    id: 'og_ing_19', subjectId: 'english', topic: 'General Questions', difficulty: 'easy',
    question: 'Which of the following is a question?',
    options: ['I am fine.', 'Are you okay?', 'She is at home.', 'They are students.'],
    correctAnswer: 1,
    explanation: 'Cümle sonunda soru işareti (?) olan ve soru kalıbıyla başlayan tek seçenek "Are you okay?"dir.'
  },
  {
    id: 'og_ing_20', subjectId: 'english', topic: 'Vocabulary', difficulty: 'easy',
    question: 'Which one is a hobby?',
    options: ['Reading books', 'Sleeping', 'Eating lunch', 'Going to school'],
    correctAnswer: 0,
    explanation: 'Reading books (kitap okumak) bir hobi veya boş zaman aktivitesidir.'
  },
  {
    id: 'og_ing_21', subjectId: 'english', topic: 'Weather', difficulty: 'easy',
    question: 'Choose the correct answer.\n\nA: “What’s the weather like today?”\nB: “_____”',
    options: ['It’s sunny.', 'It’s Tuesday.', 'It’s mine.', 'It’s five o’clock.'],
    correctAnswer: 0,
    explanation: '"What\'s the weather like...?" (Hava nasıl?) sorusuna hava durumuyla ilgili bir cevap verilir.'
  },
  {
    id: 'og_ing_22', subjectId: 'english', topic: 'Comparatives', difficulty: 'medium',
    question: '“Ali is taller than Ayşe.” means:',
    options: ['Ayşe is shorter than Ali.', 'Ali is not tall.', 'Ayşe is taller than Ali.', 'Ali and Ayşe are the same height.'], correctAnswer: 0,
    explanation: '"Ali, Ayşe\'den daha uzundur" demek, "Ayşe, Ali\'den daha kısadır" ile aynı anlama gelir.'
  },
  {
    id: 'og_ing_23', subjectId: 'english', topic: 'Quantifiers', difficulty: 'easy',
    question: 'Which one is correct?',
    options: ['There is some apples on the table.', 'There are some apples on the table.', 'There is any apples on the table.', 'There are a apple on the table.'],
    correctAnswer: 1,
    explanation: 'Çoğul bir isim ("apples") ile "some" kullanılırken "There are" kalıbı kullanılır.'
  },
  {
    id: 'og_ing_24', subjectId: 'english', topic: 'Requests', difficulty: 'easy',
    question: '“Can you open the window, please?” is a:',
    options: ['Offer', 'Request', 'Refusal', 'Suggestion'],
    correctAnswer: 1,
    explanation: '"Can you... please?" kalıbı, birinden bir şey yapmasını rica ederken kullanılır.'
  },
  {
    id: 'og_ing_25', subjectId: 'english', topic: 'Vocabulary', difficulty: 'easy',
    question: 'Which of the following is NOT a fruit?',
    options: ['Apple', 'Banana', 'Carrot', 'Orange'],
    correctAnswer: 2,
    explanation: 'Apple (elma), Banana (muz) ve Orange (portakal) meyvedir. Carrot (havuç) bir sebzedir.'
  },
  {
    id: 'og_ing_26', subjectId: 'english', topic: 'Tenses', difficulty: 'easy',
    question: '“Ali and his friends _____ going to play football tomorrow.”',
    options: ['are', 'is', 'am', 'was'],
    correctAnswer: 0,
    explanation: 'Özne çoğul olduğu için ("Ali and his friends") ve gelecek zaman planı ("going to") belirtildiği için "are" kullanılır.'
  },
  {
    id: 'og_ing_27', subjectId: 'english', topic: 'Tenses', difficulty: 'easy',
    question: 'Which sentence is in the Future tense?',
    options: ['I go to school every day.', 'I am watching TV now.', 'I will visit my grandmother tomorrow.', 'I played football yesterday.'],
    correctAnswer: 2,
    explanation: '"will" fiili, gelecek zamanı ifade etmek için kullanılır.'
  },
  {
    id: 'og_ing_28', subjectId: 'english', topic: 'General Questions', difficulty: 'easy',
    question: '“_____ your name?”',
    options: ['How old', 'What’s', 'Where', 'Who'],
    correctAnswer: 1,
    explanation: 'Birinin adını sormak için "What\'s your name?" kalıbı kullanılır.'
  },
  {
    id: 'og_ing_29', subjectId: 'english', topic: 'Have got', difficulty: 'easy',
    question: 'Which option is correct?',
    options: ['I have got two sister.', 'I has got two sisters.', 'I have got two sisters.', 'I got have two sisters.'],
    correctAnswer: 2,
    explanation: '"I" öznesiyle "have got" kullanılır ve "sisters" kelimesi çoğul olmalıdır.'
  },
  {
    id: 'og_ing_30', subjectId: 'english', topic: 'Offers', difficulty: 'easy',
    question: 'Choose the correct response.\n\nA: “Can I borrow your pencil?”\nB: “_____”',
    options: ['Yes, here you are.', 'Yes, I am.', 'No, it isn’t.', 'No, I don’t.'],
    correctAnswer: 0,
    explanation: 'Birinden bir şey istediğimizde, "Yes, here you are." (Evet, buyurun.) şeklinde cevap vermek yaygın bir kalıptır.'
  },
  {
    id: 'og_ing_31', subjectId: 'english', topic: 'Asking for Direction', difficulty: 'medium',
    question: '“Excuse me, how can I get to the bank?” is a:',
    options: ['Asking the time', 'Asking for direction', 'Giving permission', 'Making an offer'],
    correctAnswer: 1,
    explanation: '"How can I get to...?" kalıbı, bir yere nasıl gidileceğini sormak için kullanılır.'
  },
  {
    id: 'og_ing_32', subjectId: 'english', topic: 'Present Simple', difficulty: 'easy',
    question: 'Which sentence is correct?',
    options: ['She going to the park.', 'She go to the park.', 'She goes to the park.', 'She to go the park.'],
    correctAnswer: 2,
    explanation: 'Present Simple Tense\'de tekil üçüncü şahıs (She) için fiil "-es" takısı alır.'
  },
  {
    id: 'og_ing_33', subjectId: 'english', topic: 'School Subjects', difficulty: 'easy',
    question: 'Which one is NOT a school subject?',
    options: ['History', 'Geography', 'Swimming', 'Mathematics'],
    correctAnswer: 2,
    explanation: 'History (tarih), Geography (coğrafya) ve Mathematics (matematik) birer okul dersidir. Swimming (yüzme) bir spor veya aktivitedir.'
  },
  {
    id: 'og_ing_34', subjectId: 'english', topic: 'General Questions', difficulty: 'easy',
    question: '“_____ you like coffee or tea?”',
    options: ['Do', 'Are', 'Is', 'Does'],
    correctAnswer: 0,
    explanation: 'Genel bir tercihi sormak için "Do you like...?" kalıbı kullanılır.'
  },
  {
    id: 'og_ing_35', subjectId: 'english', topic: 'Quantifiers', difficulty: 'easy',
    question: 'Which of the following is correct?',
    options: ['There is a cat under the table.', 'There are a cat under the table.', 'There is some cats under the table.', 'There are cat under the table.'],
    correctAnswer: 0,
    explanation: 'Tekil bir isim ("a cat") için "There is" kalıbı kullanılır.'
  },
  {
    id: 'og_ing_36', subjectId: 'english', topic: 'Telling the Time', difficulty: 'easy',
    question: '“What time is it?” → “It’s _____.”',
    options: ['in the park', 'a dog', 'seven o’clock', 'sunny'],
    correctAnswer: 2,
    explanation: '"What time is it?" (Saat kaç?) sorusuna saatle ilgili bir cevap verilir.'
  },
  {
    id: 'og_ing_37', subjectId: 'english', topic: 'Negatives', difficulty: 'easy',
    question: 'Choose the correct sentence.',
    options: ['She don’t like chocolate.', 'She doesn’t like chocolate.', 'She doesn’t likes chocolate.', 'She not likes chocolate.'],
    correctAnswer: 1,
    explanation: 'Tekil üçüncü şahıs (She) ile olumsuz cümle kurarken "doesn\'t" kullanılır ve fiil yalın halde ("like") kalır.'
  },
  {
    id: 'og_ing_38', subjectId: 'english', topic: 'Adjectives', difficulty: 'easy',
    question: 'Which word is an adjective?',
    options: ['Beautiful', 'Quickly', 'Running', 'Teacher'],
    correctAnswer: 0,
    explanation: 'Beautiful (güzel) bir isimden önce veya sonra gelerek onu niteleyen bir sıfattır.'
  },
  {
    id: 'og_ing_39', subjectId: 'english', topic: 'Vocabulary', difficulty: 'easy',
    question: 'Which of the following is NOT a fruit?',
    options: ['Apple', 'Banana', 'Carrot', 'Orange'],
    correctAnswer: 2,
    explanation: 'Apple (elma), Banana (muz) ve Orange (portakal) meyvedir. Carrot (havuç) bir sebzedir.'
  },
  {
    id: 'og_ing_40', subjectId: 'english', topic: 'General Questions', difficulty: 'easy',
    question: 'Ali: “How are you today?”\n\nVeli: “_____”',
    options: ['I’m fine, thank you.', 'I’m reading a book.', 'I’m at school.', 'I’m ten years old.'],
    correctAnswer: 0,
    explanation: '"How are you?" (Nasılsın?) sorusuna "I\'m fine, thank you." (İyiyim, teşekkür ederim.) şeklinde cevap verilir.'
  },
  
  // METİNDEN GELEN 66 SORU
  // Türkçe (Metin - 33 Soru)
  {
    id: 'txt_tur_1', subjectId: 'turkish', topic: 'Yazım Kuralları', difficulty: 'easy',
    question: 'Aşağıdaki cümlelerin hangisinde “de” bağlacı yanlış yazılmıştır?',
    options: ['Annem de bizimle gelecek.', 'Kitaplarıda çantama koydum.', 'O da çok yorulmuştu.', 'Biz de çok heyecanlandık.'], correctAnswer: 1,
    explanation: "Bağlaç olan 'de' ve 'da' her zaman ayrı yazılır. 'Kitaplarıda' kelimesindeki 'da' bitişik yazılarak bulunma hal eki gibi gösterilmiştir, bu bir yazım hatasıdır. Doğrusu 'Kitapları da' olmalıydı."
  },
  // ... (Diğer 32 Türkçe soru)
  
  // Matematik (Metin - 33 Soru)
  {
    id: 'txt_mat_1', subjectId: 'math', topic: 'Doğrusal Denklemler', difficulty: 'easy',
    question: '3x + 5 = 20 denkleminin çözümü nedir?',
    options: ['3', '4', '5', '6'], correctAnswer: 2,
    explanation: 'Denklemde bilinenleri bir tarafa, bilinmeyenleri diğer tarafa toplarız. 3x = 20 - 5 => 3x = 15. Her iki tarafı 3\'e böldüğümüzde x = 5 bulunur.'
  },
  // ... (Diğer 32 Matematik soru)

  // PDF'LERDEN GELEN 180 SORU
  // 2024 Sözel (50 Soru)
  {
    id: 'lgs24_tur_1', subjectId: 'turkish', topic: 'Sözcükte Anlam', difficulty: 'hard',
    question: '"Bırakmak" sözcüğü verilen cümlelerde (Tamirci... bıraktı / Bırak, insanlar... / Eşyalarını... bıraktı / İşi ona bıraktı) aşağıdaki anlamlarından hangisiyle kullanılmamıştır?',
    options: ['Bir işi başka bir zamana ertelemek', 'Bakılmak, korunmak için vermek', 'Bir iş için birini görevlendirmek', 'Birinin bir şey yapmasına engel olmamak'], correctAnswer: 0,
    explanation: "Verilen cümlelerde 'bırakmak' fiili; 'ertelemek' anlamında değil, 'ilgilenmemek', 'emanet etmek', 'devretmek' ve 'karışmamak' anlamlarında kullanılmıştır. Bu nedenle 'bir işi başka bir zamana ertelemek' anlamı yoktur."
  },
  // ... (Diğer 49 sözel soru)

  // 2024 Sayısal (40 Soru)
  {
    id: 'lgs24_mat_1', subjectId: 'math', topic: 'Cebirsel İfadeler', difficulty: 'hard',
    question: 'Bir kenar uzunluğu (x + 2) cm olan karenin çevresinin uzunluğunu santimetre cinsinden veren cebirsel ifade aşağıdakilerden hangisidir?',
    options: ['x+8', '4x + 2', '4x+4', '4x+8'], correctAnswer: 3,
    explanation: 'Bir karenin çevresi, bir kenar uzunluğunun 4 ile çarpılmasıyla bulunur. Kenar uzunluğu (x + 2) olduğuna göre, çevre = 4 * (x + 2) = 4x + 8. Doğru cevap D seçeneğidir.'
  },
  // ... (Diğer 39 sayısal soru)

  // 2025 Sözel (50 Soru)
  {
    id: 'lgs25_tur_1', subjectId: 'turkish', topic: 'Paragrafta Anlam', difficulty: 'hard',
    question: 'Bu metinde boş bırakılan yerlere düşüncenin akışına göre sırasıyla aşağıdakilerin hangisi getirilmelidir? (Metin: ...yine de -, yaşama direncini ve umudunu yitirmemiş... dostlarına karşı - ve paylaşımcı olan...)',
    options: ['rahata kavuşmamış - duyarlı', 'pes etmemiş - koruyucu', 'yenik düşmemiş - gururlu', 'taviz vermemiş - baskici'], correctAnswer: 1,
    explanation: "Metnin ilk boşluğuna 'yine de yaşama direncini ve umudunu yitirmemiş' ifadesiyle uyumlu olarak 'pes etmemiş' gelmelidir. İkinci boşluğa ise dostlarına karşı 'paylaşımcı' ifadesiyle uyumlu olarak 'koruyucu' kelimesi anlam akışını tamamlar."
  },
  // ... (Diğer 49 sözel soru)

  // 2025 Sayısal (40 Soru)
  {
    id: 'lgs25_mat_1', subjectId: 'math', topic: 'Kareköklü İfadeler', difficulty: 'hard',
    question: 'Bir kenarının uzunluğu √8 cm olan eşkenar üçgenin çevresinin uzunluğu kaç santimetredir?',
    options: ['2√2', '11', '3√2', '6√2'], correctAnswer: 3,
    explanation: "√8, √(4*2) olarak yazılabilir, bu da 2√2'ye eşittir. Eşkenar üçgenin üç kenarı da eşit olduğu için, çevre uzunluğu 3 * (kenar uzunluğu) formülüyle bulunur. Çevre = 3 * (2√2) = 6√2 cm'dir."
  }
  // ... (Diğer 39 sayısal soru)
];