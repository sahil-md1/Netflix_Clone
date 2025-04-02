import card_img1 from "./card1.jpg";
import card_img2 from "./card2.jpg";
import card_img3 from "./card3.jpg";
import card_img4 from "./card4.jpg";
import card_img5 from "./card5.jpg";
import card_img6 from "./card6.jpg";
import card_img7 from "./card7.jpg";
import card_img8 from "./card8.jpg";
import card_img9 from "./card9.jpg";
import card_img10 from "./card10.jpg";
import card_img11 from "./card11.jpg";
import card_img12 from "./card12.jpg";
import card_img13 from "./card13.jpg";
import card_img14 from "./card14.jpg";

const cards_data =
  // {
  //     image:card_img1,
  //     name:"Kung Fu Panda"
  // },
  // {
  //     image:card_img2,
  //     name:"Squid Game"
  // },
  // {
  //     image:card_img3,
  //     name:"Squid Challange"
  // },
  // {
  //     image:card_img4,
  //     name:"Jawan"
  // },
  // {
  //     image:card_img5,
  //     name:"The Ghost"
  // },
  // {
  //     image:card_img6,
  //     name:"Lucifer"
  // },
  // {
  //     image:card_img7,
  //     name:"The Railway MEN"
  // },
  // {
  //     image:card_img8,
  //     name:"Young Sheldon"
  // },
  // {
  //     image:card_img9,
  //     name:"Sacred Games"
  // },
  // {
  //     image:card_img10,
  //     name:"Adipurush"
  // },
  // {
  //     image:card_img11,
  //     name:"Sukhee"
  // },
  // {
  //     image:card_img12,
  //     name:"Mission Ganj"
  // },
  // {
  //     image:card_img13,
  //     name:"Leo"
  // },
  // {
  //     image:card_img14,
  //     name:"All of Us Are Dead"
  // },
  [
    {
      id: 278,
      adult: false,
      genres: ["Crime", "Drama"],
      title: "The Shawshank Redemption",
      originalTitle: "The Shawshank Redemption",
      releaseDate: "1994-09-23",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
      overview:
        "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      voteAverage: 8.708,
      voteCount: 28029,
      popularity: 41.2793,
      originalLanguage: "en",
    },
    {
      id: 238,
      adult: false,
      genres: ["Crime", "Drama"],
      title: "The Godfather",
      originalTitle: "The Godfather",
      releaseDate: "1972-03-14",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      voteAverage: 8.687,
      voteCount: 21246,
      popularity: 43.2585,
      originalLanguage: "en",
    },
    {
      id: 240,
      adult: false,
      genres: ["Crime", "Drama"],
      title: "The Godfather Part II",
      originalTitle: "The Godfather Part II",
      releaseDate: "1974-12-20",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      overview:
        "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      voteAverage: 8.569,
      voteCount: 12832,
      popularity: 17.6014,
      originalLanguage: "en",
    },
    {
      id: 424,
      adult: false,
      genres: ["Drama", "History", "War"],
      title: "Schindler's List",
      originalTitle: "Schindler's List",
      releaseDate: "1993-12-15",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      overview:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      voteAverage: 8.565,
      voteCount: 16300,
      popularity: 23.3275,
      originalLanguage: "en",
    },
    {
      id: 129,
      adult: false,
      genres: ["Animation", "Family", "Fantasy"],
      title: "Spirited Away",
      originalTitle: "千と千尋の神隠し",
      releaseDate: "2001-07-20",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      overview:
        "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      voteAverage: 8.538,
      voteCount: 16974,
      popularity: 30.1209,
      originalLanguage: "ja",
    },
    {
      id: 19404,
      adult: false,
      genres: ["Comedy", "Drama", "Romance"],
      title: "Dilwale Dulhania Le Jayenge",
      originalTitle: "दिलवाले दुल्हनिया ले जायेंगे",
      releaseDate: "1995-10-20",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
      overview:
        "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      voteAverage: 8.519,
      voteCount: 4473,
      popularity: 6.4455,
      originalLanguage: "hi",
    },
    {
      id: 155,
      adult: false,
      genres: ["Action", "Crime", "Drama", "Thriller"],
      title: "The Dark Knight",
      originalTitle: "The Dark Knight",
      releaseDate: "2008-07-16",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      voteAverage: 8.519,
      voteCount: 33637,
      popularity: 30.945,
      originalLanguage: "en",
    },
    {
      id: 497,
      adult: false,
      genres: ["Crime", "Drama", "Fantasy"],
      title: "The Green Mile",
      originalTitle: "The Green Mile",
      releaseDate: "1999-12-10",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
      overview:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      voteAverage: 8.504,
      voteCount: 17965,
      popularity: 17.3965,
      originalLanguage: "en",
    },
    {
      id: 496243,
      adult: false,
      genres: ["Comedy", "Drama", "Thriller"],
      title: "Parasite",
      originalTitle: "기생충",
      releaseDate: "2019-05-30",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      overview:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      voteAverage: 8.501,
      voteCount: 18875,
      popularity: 25.5293,
      originalLanguage: "ko",
    },
    {
      id: 389,
      adult: false,
      genres: ["Drama"],
      title: "12 Angry Men",
      originalTitle: "12 Angry Men",
      releaseDate: "1957-04-10",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
      overview:
        "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      voteAverage: 8.5,
      voteCount: 9025,
      popularity: 12.3068,
      originalLanguage: "en",
    },
    {
      id: 680,
      adult: false,
      genres: ["Crime", "Thriller"],
      title: "Pulp Fiction",
      originalTitle: "Pulp Fiction",
      releaseDate: "1994-09-10",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      voteAverage: 8.5,
      voteCount: 28505,
      popularity: 24.4272,
      originalLanguage: "en",
    },
    {
      id: 122,
      adult: false,
      genres: ["Action", "Adventure", "Fantasy"],
      title: "The Lord of the Rings: The Return of the King",
      originalTitle: "The Lord of the Rings: The Return of the King",
      releaseDate: "2003-12-17",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      overview:
        "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.​",
      voteAverage: 8.5,
      voteCount: 24907,
      popularity: 28.9655,
      originalLanguage: "en",
    },
    {
      id: 769,
      adult: false,
      genres: ["Crime", "Drama"],
      title: "GoodFellas",
      originalTitle: "GoodFellas",
      releaseDate: "1990-09-12",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      overview:
        "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
      voteAverage: 8.5,
      voteCount: 13237,
      popularity: 15.417,
      originalLanguage: "en",
    },
    {
      id: 346,
      adult: false,
      genres: ["Action", "Drama"],
      title: "Seven Samurai",
      originalTitle: "七人の侍",
      releaseDate: "1954-04-26",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
      overview:
        "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
      voteAverage: 8.5,
      voteCount: 3846,
      popularity: 6.247,
      originalLanguage: "ja",
    },
    {
      id: 372058,
      adult: false,
      genres: ["Animation", "Drama", "Romance"],
      title: "Your Name.",
      originalTitle: "君の名は。",
      releaseDate: "2016-08-26",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/q719jXXEzOoYaps6babgKnONONX.jpg",
      overview:
        "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      voteAverage: 8.484,
      voteCount: 11683,
      popularity: 20.1988,
      originalLanguage: "ja",
    },
    {
      id: 13,
      adult: false,
      genres: ["Comedy", "Drama", "Romance"],
      title: "Forrest Gump",
      originalTitle: "Forrest Gump",
      releaseDate: "1994-06-23",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      overview:
        "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      voteAverage: 8.467,
      voteCount: 28036,
      popularity: 21.1558,
      originalLanguage: "en",
    },
    {
      id: 429,
      adult: false,
      genres: ["Western"],
      title: "The Good, the Bad and the Ugly",
      originalTitle: "Il buono, il brutto, il cattivo",
      releaseDate: "1966-12-22",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      overview:
        "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
      voteAverage: 8.461,
      voteCount: 8901,
      popularity: 13.8326,
      originalLanguage: "it",
    },
    {
      id: 157336,
      adult: false,
      genres: ["Adventure", "Drama", "Science Fiction"],
      title: "Interstellar",
      originalTitle: "Interstellar",
      releaseDate: "2014-11-05",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      overview:
        "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      voteAverage: 8.453,
      voteCount: 36839,
      popularity: 41.6271,
      originalLanguage: "en",
    },
    {
      id: 12477,
      adult: false,
      genres: ["Animation", "Drama", "War"],
      title: "Grave of the Fireflies",
      originalTitle: "火垂るの墓",
      releaseDate: "1988-04-16",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
      overview:
        "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
      voteAverage: 8.45,
      voteCount: 5813,
      popularity: 0.0149,
      originalLanguage: "ja",
    },
    {
      id: 637,
      adult: false,
      genres: ["Comedy", "Drama"],
      title: "Life Is Beautiful",
      originalTitle: "La vita è bella",
      releaseDate: "1997-12-20",
      image:
        "https://tvshow.jbsn.com.br/api/v1/image/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
      overview:
        "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
      voteAverage: 8.448,
      voteCount: 13275,
      popularity: 10.5084,
      originalLanguage: "it",
    },
  ];

export default cards_data;
