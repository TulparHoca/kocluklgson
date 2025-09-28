export const motivationalQuotes = [
  {
    text: "Hayatta en hakiki mürşit ilimdir, fendir.",
    author: "Mustafa Kemal Atatürk"
  },
  {
    text: "Bilgi güçtür, ancak uygulama başarıdır.",
    author: "Anonim"
  },
  {
    text: "Öğrenmeyi bıraktığın gün, öğretmeyi de bırakırsın.",
    author: "John Cotton Dana"
  },
  {
    text: "Başarı, hazırlık fırsatla buluştuğunda doğar.",
    author: "Anonim"
  },
  {
    text: "Tek seferde başarılı olmasan da, her seferinde biraz daha iyileşirsin.",
    author: "Anonim"
  },
  {
    text: "Bilim insanı olmak için yaratılıştan zeki olmak gerekmez, meraklı olmak yeterlidir.",
    author: "Aziz Sancar"
  },
  {
    text: "Okuyun, öğrenin, araştırın. Hiçbir şey kişisel gelişimden daha değerli değildir.",
    author: "Anonim"
  },
  {
    text: "Küçük adımlar büyük yolculukların başlangıcıdır.",
    author: "Anonim"
  },
  {
    text: "Başarısızlık, başarının öğretmenidir.",
    author: "Anonim"
  },
  {
    text: "Her gün biraz daha iyi ol, dün olduğundan.",
    author: "Anonim"
  }
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[randomIndex];
};

export const getDailyQuote = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  return motivationalQuotes[dayOfYear % motivationalQuotes.length];
};