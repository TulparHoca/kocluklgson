// src/data/avatars.ts
    
export interface Avatar {
  id: string;
  name: string;
  image: string;
  unlockMethod: 'purchase' | 'achievement' | 'default';
  price?: number;
  achievementId?: string;
}

export const avatars: Avatar[] = [
  {
    "id": "default",
    "name": "Varsayılan",
    "image": "/avatars/default.png",
    "unlockMethod": "default"
  },
  {
    "id": "jessie",
    "name": "Jessie",
    "image": "/avatars/jessie.png",
    "unlockMethod": "purchase",
    "price": 150
  },
  {
    "id": "bull",
    "name": "Bull",
    "image": "/avatars/bull.png",
    "unlockMethod": "achievement",
    "achievementId": "daily-quiz-champ"
  },
  {
    "id": "nita",
    "name": "Nita",
    "image": "/avatars/nita.png",
    "unlockMethod": "achievement",
    "achievementId": "streak-7"
  },
  {
    "id": "colt",
    "name": "Colt",
    "image": "/avatars/colt.png",
    "unlockMethod": "achievement",
    "achievementId": "streak-15"
  },
  {
    "id": "shelly",
    "name": "Shelly",
    "image": "/avatars/shelly.png",
    "unlockMethod": "achievement",
    "achievementId": "streak-30"
  },
  {
    "id": "buzz",
    "name": "Buzz",
    "image": "/avatars/buzz.png",
    "unlockMethod": "achievement",
    "achievementId": "500-questions"
  },
  {
    "id": "gandalf",
    "name": "Gandalf",
    "image": "/avatars/gandalf.png",
    "unlockMethod": "purchase",
    "price": 200
  },
  {
    "id": "darth",
    "name": "Darth",
    "image": "/avatars/darth.png",
    "unlockMethod": "purchase",
    "price": 200
  },
  {
    "id": "superman",
    "name": "Superman",
    "image": "/avatars/superman.png",
    "unlockMethod": "purchase",
    "price": 200
  },
  {
    "id": "scarecrow",
    "name": "Korkuluk",
    "image": "/avatars/scarecrow.png",
    "unlockMethod": "achievement",
    "achievementId": "daily-quiz-10"
  },
  {
    "id": "vampir",
    "name": "Vampir",
    "image": "/avatars/vampir.png",
    "unlockMethod": "achievement",
    "achievementId": "streak-10"
  },
  {
    "id": "were",
    "name": "Kurt Adam",
    "image": "/avatars/were.png",
    "unlockMethod": "achievement",
    "achievementId": "english-speaker"
  },
  {
    "id": "santa",
    "name": "Noel Baba",
    "image": "/avatars/santa.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "rudolf",
    "name": "Rudolf",
    "image": "/avatars/rudolf.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "elf",
    "name": "Elf",
    "image": "/avatars/elf.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "dev",
    "name": "Dev",
    "image": "/avatars/dev.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "harry",
    "name": "Harry Potter",
    "image": "/avatars/harry.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "halloween",
    "name": "Halloween",
    "image": "/avatars/halloween.png",
    "unlockMethod": "achievement",
    "achievementId": "streak-3"
  },
  {
    "id": "mumya",
    "name": "Mumya",
    "image": "/avatars/mumya.png",
    "unlockMethod": "achievement",
    "achievementId": "daily-quiz-15"
  },
  {
    "id": "gamer",
    "name": "Gamer",
    "image": "/avatars/gamer.png",
    "unlockMethod": "achievement",
    "achievementId": "daily-quiz-20"
  },
  {
    "id": "racer",
    "name": "Yarışçı",
    "image": "/avatars/racer.png",
    "unlockMethod": "achievement",
    "achievementId": "daily-quiz-25"
  },
  {
    "id": "scientist",
    "name": "Bilim Adamı",
    "image": "/avatars/scientist.png",
    "unlockMethod": "achievement",
    "achievementId": "250-questions"
  },
  {
    "id": "zengin",
    "name": "Zengin",
    "image": "/avatars/zengin.png",
    "unlockMethod": "purchase",
    "price": 225
  },
  {
    "id": "baby",
    "name": "Bebek",
    "image": "/avatars/baby.png",
    "unlockMethod": "purchase",
    "price": 225
  },
  {
    "id": "queen",
    "name": "Kraliçe",
    "image": "/avatars/queen.png",
    "unlockMethod": "achievement",
    "achievementId": "daily-quiz-30"
  },
  {
    "id": "skater",
    "name": "Kaykaycı",
    "image": "/avatars/skater.png",
    "unlockMethod": "achievement",
    "achievementId": "streak-20"
  },
  {
    "id": "singer",
    "name": "Şarkıcı",
    "image": "/avatars/singer.png",
    "unlockMethod": "achievement",
    "achievementId": "religion-scholar"
  },
  {
    "id": "warrior",
    "name": "Savaşçı",
    "image": "/avatars/warrior.png",
    "unlockMethod": "purchase",
    "price": 225
  },
  {
    "id": "rapper",
    "name": "Rapper",
    "image": "/avatars/rapper.png",
    "unlockMethod": "achievement",
    "achievementId": "ten-questions"
  },
  {
    "id": "chef",
    "name": "Şef",
    "image": "/avatars/chef.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "detective",
    "name": "Dedektif",
    "image": "/avatars/detective.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "doctor",
    "name": "Doktor",
    "image": "/avatars/doctor.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "firefighter",
    "name": "İtfaiyeci",
    "image": "/avatars/firefighter.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "pirate",
    "name": "Korsan",
    "image": "/avatars/pirate.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "wizard",
    "name": "Büyücü",
    "image": "/avatars/wizard.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "astronaut",
    "name": "Astronot",
    "image": "/avatars/astronaut.png",
    "unlockMethod": "achievement",
    "achievementId": "fifty-questions"
  },
  {
    "id": "beauty",
    "name": "Güzel",
    "image": "/avatars/beauty.png",
    "unlockMethod": "purchase",
    "price": 150
  },
  {
    "id": "captain",
    "name": "Kaptan Amerika",
    "image": "/avatars/captain.png",
    "unlockMethod": "achievement",
    "achievementId": "first-question"
  },
  {
    "id": "catboy",
    "name": "CatBoy",
    "image": "/avatars/cat.png",
    "unlockMethod": "achievement",
    "achievementId": "math-novice"
  },
  {
    "id": "crblackking",
    "name": "Blue King",
    "image": "/avatars/bk.png",
    "unlockMethod": "achievement",
    "achievementId": "hundred-questions"
  },
  {
    "id": "crazy",
    "name": "Çılgın",
    "image": "/avatars/crazy.png",
    "unlockMethod": "achievement",
    "achievementId": "science-explorer"
  },
  {
    "id": "gecko",
    "name": "Kertenkele",
    "image": "/avatars/gecko.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "ghostspider",
    "name": "Hayalet Örümcek",
    "image": "/avatars/ghost.png",
    "unlockMethod": "purchase",
    "price": 225
  },
  {
    "id": "harleyquinn",
    "name": "Harley Quinn",
    "image": "/avatars/harley.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "joker",
    "name": "Joker",
    "image": "/avatars/joker.png",
    "unlockMethod": "purchase",
    "price": 225
  },
  {
    "id": "owlette",
    "name": "Owlette",
    "image": "/avatars/owlette.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "okcu",
    "name": "Okçu Kraliçe",
    "image": "/avatars/ok.png",
    "unlockMethod": "purchase",
    "price": 200
  },
  {
    "id": "red king",
    "name": "Red King",
    "image": "/avatars/rk.png",
    "unlockMethod": "purchase",
    "price": 175
  },
  {
    "id": "crow",
    "name": "Crow",
    "image": "/avatars/crow.png",
    "unlockMethod": "achievement",
    "achievementId": "math-novice"
  },
  {
    "id": "sponge bob",
    "name": "Sponge Bob",
    "image": "/avatars/sponge.png",
    "unlockMethod": "achievement",
    "achievementId": "first-question"
  },
  {
    "id": "el primo",
    "name": "El Primo",
    "image": "/avatars/elprimo.png",
    "unlockMethod": "achievement",
    "achievementId": "science-explorer"
  },
  {
    "id": "mortis",
    "name": "Mortis",
    "image": "/avatars/mortis.png",
    "unlockMethod": "achievement",
    "achievementId": "turkish-master"
  },
  {
    "id": "po",
    "name": "KungFu Panda",
    "image": "/avatars/po.png",
    "unlockMethod": "achievement",
    "achievementId": "fifty-questions"
  },
  // BAŞARIM GEREKSİNİMİNDEN SATIN ALMAYA GEÇEN AVATARLAR
  {
    "id": "shrek",
    "name": "Shrek",
    "image": "/avatars/shrek.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "spiderman",
    "name": "Spiderman",
    "image": "/avatars/spiderman.png",
    "unlockMethod": "purchase",
    "price": 250
  },
  {
    "id": "batman",
    "name": "Batman",
    "image": "/avatars/batman.png",
    "unlockMethod": "purchase",
    "price": 300
  },
  {
    "id": "robot",
    "name": "Robot",
    "image": "/avatars/robot.png",
    "unlockMethod": "purchase",
    "price": 200
  },
  {
    "id": "deadpool",
    "name": "Deadpool",
    "image": "/avatars/deadpool.png",
    "unlockMethod": "purchase",
    "price": 300
  },
  {
    "id": "blackpanther",
    "name": "Kara Panter",
    "image": "/avatars/Black.png",
    "unlockMethod": "purchase",
    "price": 300
  },
  {
    "id": "pilot",
    "name": "Pilot",
    "image": "/avatars/pilot.png",
    "unlockMethod": "purchase",
    "price": 225
  }
];