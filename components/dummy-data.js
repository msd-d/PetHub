const users = [
  {
    username: "admin",
    password: "admin",
    phone: "88888888",
    email: "admin@pethub.com",
    location: "Odense",
    saved: [],
  },
  {
    username: "test",
    password: "test",
    phone: "12345678",
    email: "test@pethub.com",
    location: "Test City",
    saved: [0, 2],
  },
];

const data = [
  {
    id: 0,
    postedBy: "admin",
    name: "Daisy",
    breeds: ["Golden reciever", "Husky"],
    conditions: [],
    gender: "Female",
    // https://stackoverflow.com/questions/22354899/what-is-the-best-way-to-store-a-date-time-in-json
    birthDate: "2002-04-03T13:37:27+00:00",
    images: [
      "https://nationaltoday.com/wp-content/uploads/2020/02/national-golden-retriever-day-640x514.jpg",
      "https://www.vets4pets.com/siteassets/dental-webheaders-dog---oct-20.jpg?w=585&scale=down",
      "https://onettechnologiesindia.com/img/8b4b8d33789eb38f8343f9a8103c950a.jpg",
      "https://www.hdnicewallpapers.com/Walls/Big/Dog/Dog_Face_HD_Wallpaper.jpg",
      "https://d.newsweek.com/en/full/1618956/dog.jpg",
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2020_30/3398773/dog-treats-kr-2x1-tease-200721.jpg",
    ],
    weight: 1025,
    height: 550,
    length: 1500,
    location: "Dogburg",
    description: "A happy doggy dog",
  },
  {
    id: 1,
    postedBy: "admin",
    name: "Harry",
    breeds: ["Corgi"],
    conditions: [],
    gender: "Male",
    birthDate: "2015-04-20T13:37:27+00:00",
    images: [
      "https://i.barkpost.com/wp-content/uploads/2019/06/corgi-by-the-beach-again.jpg?q=70&fit=crop&crop=entropy&w=808&h=500",
    ],
    weight: 1025,
    height: 550,
    length: 1500,
    location: "Dogburg",
    description:
      "A small dog with a big temper! Likes the usual stuff walks, playing and water.",
  },
  {
    id: 2,
    postedBy: "admin",
    name: "Tuffy",
    breeds: ["Chartreux"],
    conditions: [],
    gender: "Female",
    birthDate: "2010-05-12T13:37:27+00:00",
    images: ["https://petkeen.com/wp-content/uploads/2021/05/Chartreux.jpeg"],
    weight: 3625,
    height: 550,
    length: 1000,
    location: "Sonderborg",
    description:
      "A calm cat with a dog-like personality. It likes to hunt so you wouldn't have problems with pests again!",
  },
];

const conditions = [
  // this is the parent or 'item'
  {
    name: "Conditions",
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: "Arthritis",
        id: 1,
      },
      {
        name: "Cancer",
        id: 2,
      },
      {
        name: "Diabetes Militus",
        id: 3,
      },
      {
        name: "Epilepsy",
        id: 4,
      },
      {
        name: "Gastric Dilation Volvulus",
        id: 5,
      },
      {
        name: "Hypothyroidism",
        id: 6,
      },
    ],
  },
];

const breeds = [
  // this is the parent or 'item'
  {
    name: "Dogs",
    id: 0,
    // these are the children or 'sub items'
    children: [
      {
        name: "Golden Retriever",
        id: 1,
      },
      {
        name: "Akita",
        id: 2,
      },
      {
        name: "Chihuahua",
        id: 3,
      },
      {
        name: "Husky",
        id: 4,
      },
      {
        name: "Bulldog",
        id: 5,
      },
      {
        name: "Corgi",
        id: 6,
      },
    ],
  },
  {
    name: "Cats",
    id: 1,
    children: [
      {
        id: 0,
        name: "Abyssinian",
      },
      {
        id: 1,
        name: "Aegean",
      },
      {
        id: 2,
        name: "American Bobtail",
      },
      {
        id: 3,
        name: "American Curl",
      },
      {
        id: 4,
        name: "American Ringtail",
      },
      {
        id: 5,
        name: "American Shorthair",
      },
      {
        id: 6,
        name: "American Wirehair",
      },
      {
        id: 7,
        name: "Aphrodite Giant",
      },
      {
        id: 8,
        name: "Arabian Mau",
      },
      {
        id: 9,
        name: "Asian",
      },
      {
        id: 10,
        name: "Asian Semi-longhair",
      },
      {
        id: 11,
        name: "Australian Mist",
      },
      {
        id: 12,
        name: "Balinese",
      },
      {
        id: 13,
        name: "Bambino",
      },
      {
        id: 14,
        name: "Bengal",
      },
      {
        id: 15,
        name: "Birman",
      },
      {
        id: 16,
        name: "Bombay",
      },
      {
        id: 17,
        name: "Brazilian Shorthair",
      },
      {
        id: 18,
        name: "British Longhair",
      },
      {
        id: 19,
        name: "British Shorthair",
      },
      {
        id: 20,
        name: "Burmese",
      },
      {
        id: 21,
        name: "Burmilla",
      },
      {
        id: 22,
        name: "California Spangled",
      },
      {
        id: 23,
        name: "Chantilly-Tiffany",
      },
      {
        id: 24,
        name: "Chartreux",
      },
      {
        id: 25,
        name: "Chausie",
      },
      {
        id: 26,
        name: "Colorpoint Shorthair",
      },
      {
        id: 27,
        name: "Cornish Rex",
      },
      {
        id: 28,
        name: "Cymric, Manx Longhair or Long-haired Manx",
      },
      {
        id: 29,
        name: "Cyprus",
      },
      {
        id: 30,
        name: "Devon Rex",
      },
      {
        id: 31,
        name: "Don Sphynx",
      },
      {
        id: 32,
        name: "Dragon Li",
      },
      {
        id: 33,
        name: "Dwelf",
      },
      {
        id: 34,
        name: "Egyptian Mau",
      },
      {
        id: 35,
        name: "European Shorthair",
      },
      {
        id: 36,
        name: "Exotic Shorthair",
      },
      {
        id: 37,
        name: "Foldex",
      },
      {
        id: 38,
        name: "German Rex",
      },
      {
        id: 39,
        name: "Havana Brown",
      },
      {
        id: 40,
        name: "Highlander",
      },
      {
        id: 41,
        name: "Himalayan",
      },
      {
        id: 42,
        name: "Japanese Bobtail",
      },
      {
        id: 43,
        name: "Javanese",
      },
      {
        id: 44,
        name: "Kanaani",
      },
      {
        id: 45,
        name: "Khao Manee",
      },
      {
        id: 46,
        name: "Kinkalow",
      },
      {
        id: 47,
        name: "Korat",
      },
      {
        id: 48,
        name: "Korean Bobtail",
      },
      {
        id: 49,
        name: "Korn Ja",
      },
      {
        id: 50,
        name: "Kurilian Bobtail",
      },
      {
        id: 51,
        name: "Lambkin",
      },
      {
        id: 52,
        name: "LaPerm",
      },
      {
        id: 53,
        name: "Lykoi",
      },
      {
        id: 54,
        name: "Maine Coon",
      },
      {
        id: 55,
        name: "Manx",
      },
      {
        id: 56,
        name: "Mekong Bobtail",
      },
      {
        id: 57,
        name: "Minskin",
      },
      {
        id: 58,
        name: "Napoleon",
      },
      {
        id: 59,
        name: "Munchkin",
      },
      {
        id: 60,
        name: "Nebelung",
      },
      {
        id: 61,
        name: "Norwegian Forest Cat",
      },
      {
        id: 62,
        name: "Ocicat",
      },
      {
        id: 63,
        name: "Ojos Azules",
      },
      {
        id: 64,
        name: "Oregon Rex",
      },
      {
        id: 65,
        name: "Oriental Bicolor",
      },
      {
        id: 66,
        name: "Oriental Longhair",
      },
      {
        id: 67,
        name: "Oriental Shorthair",
      },
      {
        id: 68,
        name: "Persian (modern)",
      },
      {
        id: 69,
        name: "Persian (traditional)",
      },
      {
        id: 70,
        name: "Peterbald",
      },
      {
        id: 71,
        name: "Pixie-bob",
      },
      {
        id: 72,
        name: "Ragamuffin",
      },
      {
        id: 73,
        name: "Ragdoll",
      },
      {
        id: 74,
        name: "Raas",
      },
      {
        id: 75,
        name: "Russian Blue",
      },
      {
        id: 76,
        name: "Russian White, Russian Black and Russian Tabby",
      },
      {
        id: 77,
        name: "Sam Sawet",
      },
      {
        id: 78,
        name: "Savannah",
      },
      {
        id: 79,
        name: "Scottish Fold",
      },
      {
        id: 80,
        name: "Selkirk Rex",
      },
      {
        id: 81,
        name: "Serengeti",
      },
      {
        id: 82,
        name: "Serrade Petit",
      },
      {
        id: 83,
        name: "Siamese (modern)",
      },
      {
        id: 84,
        name: "Siberian Forest Cat",
      },
      {
        id: 85,
        name: "Neva Masquerade",
      },
      {
        id: 86,
        name: "Singapura",
      },
      {
        id: 87,
        name: "Snowshoe",
      },
      {
        id: 88,
        name: "Sokoke",
      },
      {
        id: 89,
        name: "Somali",
      },
      {
        id: 90,
        name: "Sphynx",
      },
      {
        id: 91,
        name: "Suphalak",
      },
      {
        id: 92,
        name: "Thai",
      },
      {
        id: 93,
        name: "Wichien Maat",
      },
      {
        id: 94,
        name: "Thai Lilac",
      },
      {
        id: 95,
        name: "Tonkinese",
      },
      {
        id: 96,
        name: "Toyger",
      },
      {
        id: 97,
        name: "Turkish Angora",
      },
      {
        id: 98,
        name: "Turkish Van",
      },
      {
        id: 99,
        name: "Turkish Vankedisi",
      },
      {
        id: 100,
        name: "Ukrainian Levkoy",
      },
      {
        id: 101,
        name: "York Chocolate",
      },
    ],
  },
];

export { users, data, conditions, breeds };
