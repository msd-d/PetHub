const users = [
  {
    username: null,
    password: "",
    phone: "",
    email: "",
    location: "",
    saved: [],
  },
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
    weight: "1025",
    height: "550",
    length: "1500",
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
    weight: "1025",
    height: "550",
    length: "1500",
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
    weight: "3625",
    height: "550",
    length: "1000",
    location: "Sonderborg",
    description:
      "A calm cat with a dog-like personality. It likes to hunt so you wouldn't have problems with pests again!",
  },
  {
    id: 3,
    postedBy: "admin",
    name: "Brownie",
    breeds: ["Lionhead"],
    conditions: [],
    gender: "Male",
    birthDate: "2020-09-01T13:00:00+00:00",
    images: [
      "https://raw.githubusercontent.com/wiki/msd-d/PetHub/res/Brownie2.jpg",
      "https://raw.githubusercontent.com/wiki/msd-d/PetHub/res/Brownie1.jpg",
      "https://raw.githubusercontent.com/wiki/msd-d/PetHub/res/Brownie3.jpg",
    ],
    weight: "2.0",
    height: "30",
    length: "35",
    location: "Nyborg",
    description: "A wild animal appeard",
  },
  {
    id: 4,
    postedBy: "admin",
    name: "Diva",
    breeds: ["Lionhead"],
    conditions: [],
    gender: "Female",
    birthDate: "2016-05-01T02:00:00+00:00",
    images: [
      "https://raw.githubusercontent.com/wiki/msd-d/PetHub/res/Diva1.jpg",
      "https://raw.githubusercontent.com/wiki/msd-d/PetHub/res/Diva2.jpg",
      "https://raw.githubusercontent.com/wiki/msd-d/PetHub/res/Diva3.jpg",
    ],
    weight: "2.0",
    height: "30",
    length: "35",
    location: "Nyborg",
    description: "A wild animal appeard",
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
        id: 0,
        name: "Aflatoxicosis",
      },
      {
        id: 1,
        name: "African horse sickness",
      },
      {
        id: 2,
        name: "African swine fever",
      },
      {
        id: 3,
        name: "Akabane disease",
      },
      {
        id: 4,
        name: "Anthrax",
      },
      {
        id: 5,
        name: "Australian bat lyssavirus",
      },
      {
        id: 6,
        name: "Avian influenza",
      },
      {
        id: 7,
        name: "Avian paramyxovirus",
      },
      {
        id: 8,
        name: "Blackhead",
      },
      {
        id: 9,
        name: "Bluetongue",
      },
      {
        id: 10,
        name: "Botulism",
      },
      {
        id: 11,
        name: "Botulism in poultry",
      },
      {
        id: 12,
        name: "Bovine ephemeral fever",
      },
      {
        id: 13,
        name: "Bovine viral diarrhoea virus",
      },
      {
        id: 14,
        name: "Brucellosis",
      },
      {
        id: 15,
        name: "Canine ehrlichiosis",
      },
      {
        id: 16,
        name: "Caprine arthritis encephalitis",
      },
      {
        id: 17,
        name: "Cattle tick",
      },
      {
        id: 18,
        name: "Coccidiosis",
      },
      {
        id: 19,
        name: "Copper deficiency in ruminants",
      },
      {
        id: 20,
        name: "Enzootic bovine leucosis",
      },
      {
        id: 21,
        name: "Equine herpesvirus type 1 (EHV-1)",
      },
      {
        id: 22,
        name: "Equine infectious anaemia",
      },
      {
        id: 23,
        name: "Equine influenza",
      },
      {
        id: 24,
        name: "Equine viral arteritis",
      },
      {
        id: 25,
        name: "External parasites in poultry",
      },
      {
        id: 26,
        name: "Foot-and-mouth disease",
      },
      {
        id: 27,
        name: "Fowl cholera",
      },
      {
        id: 28,
        name: "Fowl pox",
      },
      {
        id: 29,
        name: "Hendra virus",
      },
      {
        id: 30,
        name: "Hydatid disease",
      },
      {
        id: 31,
        name: "Infectious laryngotracheitis",
      },
      {
        id: 32,
        name: "Influenza A in pigs",
      },
      {
        id: 33,
        name: "Intestinal torsion",
      },
      {
        id: 34,
        name: "Japanese encephalitis",
      },
      {
        id: 35,
        name: "Johne's disease",
      },
      {
        id: 36,
        name: "Leptospirosis",
      },
      {
        id: 37,
        name: "Leptospirosis in pigs",
      },
      {
        id: 38,
        name: "Lumpy jaw",
      },
      {
        id: 39,
        name: "Lumpy skin disease",
      },
      {
        id: 40,
        name: "Marek's disease",
      },
      {
        id: 41,
        name: "Melioidosis",
      },
      {
        id: 42,
        name: "Neosporosis",
      },
      {
        id: 43,
        name: "Neurological disease in horses",
      },
      {
        id: 44,
        name: "Newcastle disease",
      },
      {
        id: 45,
        name: "Nipah virus",
      },
      {
        id: 46,
        name: "Ovine brucellosis",
      },
      {
        id: 47,
        name: "Piglet anaemia",
      },
      {
        id: 48,
        name: "Piglet scours",
      },
      {
        id: 49,
        name: "Psittacosis",
      },
      {
        id: 50,
        name: "Rabies due to rabies virus",
      },
      {
        id: 51,
        name: "Salmonella",
      },
      {
        id: 52,
        name: "Screw-worm fly",
      },
      {
        id: 53,
        name: "Spotty liver",
      },
      {
        id: 54,
        name: "Strangles",
      },
      {
        id: 55,
        name: "Swine brucellosis",
      },
      {
        id: 56,
        name: "Tetanus",
      },
      {
        id: 57,
        name: "Transit tetany",
      },
      {
        id: 58,
        name: "Vibriosis (Campylobacteriosis)",
      },
      {
        id: 59,
        name: "Warts on cattle",
      },
      {
        id: 60,
        name: "White spot disease",
      },
      {
        id: 61,
        name: "White-nose syndrome",
      },
      {
        id: 62,
        name: "Wooden tongue",
      },
      {
        id: 63,
        name: "Worm parasites in poultry",
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
        id: 7,
        name: "Abyssinian",
      },
      {
        id: 8,
        name: "Aegean",
      },
      {
        id: 9,
        name: "American Bobtail",
      },
      {
        id: 10,
        name: "American Curl",
      },
      {
        id: 11,
        name: "American Ringtail",
      },
      {
        id: 12,
        name: "American Shorthair",
      },
      {
        id: 13,
        name: "American Wirehair",
      },
      {
        id: 14,
        name: "Aphrodite Giant",
      },
      {
        id: 15,
        name: "Arabian Mau",
      },
      {
        id: 16,
        name: "Asian",
      },
      {
        id: 17,
        name: "Asian Semi-longhair",
      },
      {
        id: 18,
        name: "Australian Mist",
      },
      {
        id: 19,
        name: "Balinese",
      },
      {
        id: 20,
        name: "Bambino",
      },
      {
        id: 21,
        name: "Bengal",
      },
      {
        id: 22,
        name: "Birman",
      },
      {
        id: 23,
        name: "Bombay",
      },
      {
        id: 24,
        name: "Brazilian Shorthair",
      },
      {
        id: 25,
        name: "British Longhair",
      },
      {
        id: 26,
        name: "British Shorthair",
      },
      {
        id: 27,
        name: "Burmese",
      },
      {
        id: 28,
        name: "Burmilla",
      },
      {
        id: 29,
        name: "California Spangled",
      },
      {
        id: 30,
        name: "Chantilly-Tiffany",
      },
      {
        id: 31,
        name: "Chartreux",
      },
      {
        id: 32,
        name: "Chausie",
      },
      {
        id: 33,
        name: "Colorpoint Shorthair",
      },
      {
        id: 34,
        name: "Cornish Rex",
      },
      {
        id: 35,
        name: "Cymric, Manx Longhair or Long-haired Manx",
      },
      {
        id: 36,
        name: "Cyprus",
      },
      {
        id: 37,
        name: "Devon Rex",
      },
      {
        id: 38,
        name: "Don Sphynx",
      },
      {
        id: 39,
        name: "Dragon Li",
      },
      {
        id: 40,
        name: "Dwelf",
      },
      {
        id: 41,
        name: "Egyptian Mau",
      },
      {
        id: 42,
        name: "European Shorthair",
      },
      {
        id: 43,
        name: "Exotic Shorthair",
      },
      {
        id: 44,
        name: "Foldex",
      },
      {
        id: 45,
        name: "German Rex",
      },
      {
        id: 46,
        name: "Havana Brown",
      },
      {
        id: 47,
        name: "Highlander",
      },
      {
        id: 48,
        name: "Himalayan",
      },
      {
        id: 49,
        name: "Japanese Bobtail",
      },
      {
        id: 50,
        name: "Javanese",
      },
      {
        id: 51,
        name: "Kanaani",
      },
      {
        id: 52,
        name: "Khao Manee",
      },
      {
        id: 53,
        name: "Kinkalow",
      },
      {
        id: 54,
        name: "Korat",
      },
      {
        id: 55,
        name: "Korean Bobtail",
      },
      {
        id: 56,
        name: "Korn Ja",
      },
      {
        id: 57,
        name: "Kurilian Bobtail",
      },
      {
        id: 58,
        name: "Lambkin",
      },
      {
        id: 59,
        name: "LaPerm",
      },
      {
        id: 60,
        name: "Lykoi",
      },
      {
        id: 61,
        name: "Maine Coon",
      },
      {
        id: 62,
        name: "Manx",
      },
      {
        id: 63,
        name: "Mekong Bobtail",
      },
      {
        id: 64,
        name: "Minskin",
      },
      {
        id: 65,
        name: "Napoleon",
      },
      {
        id: 66,
        name: "Munchkin",
      },
      {
        id: 67,
        name: "Nebelung",
      },
      {
        id: 68,
        name: "Norwegian Forest Cat",
      },
      {
        id: 69,
        name: "Ocicat",
      },
      {
        id: 70,
        name: "Ojos Azules",
      },
      {
        id: 71,
        name: "Oregon Rex",
      },
      {
        id: 72,
        name: "Oriental Bicolor",
      },
      {
        id: 73,
        name: "Oriental Longhair",
      },
      {
        id: 74,
        name: "Oriental Shorthair",
      },
      {
        id: 75,
        name: "Persian (modern)",
      },
      {
        id: 76,
        name: "Persian (traditional)",
      },
      {
        id: 77,
        name: "Peterbald",
      },
      {
        id: 78,
        name: "Pixie-bob",
      },
      {
        id: 79,
        name: "Ragamuffin",
      },
      {
        id: 80,
        name: "Ragdoll",
      },
      {
        id: 81,
        name: "Raas",
      },
      {
        id: 82,
        name: "Russian Blue",
      },
      {
        id: 83,
        name: "Russian White, Russian Black and Russian Tabby",
      },
      {
        id: 84,
        name: "Sam Sawet",
      },
      {
        id: 85,
        name: "Savannah",
      },
      {
        id: 86,
        name: "Scottish Fold",
      },
      {
        id: 87,
        name: "Selkirk Rex",
      },
      {
        id: 88,
        name: "Serengeti",
      },
      {
        id: 89,
        name: "Serrade Petit",
      },
      {
        id: 90,
        name: "Siamese (modern)",
      },
      {
        id: 91,
        name: "Siberian Forest Cat",
      },
      {
        id: 92,
        name: "Neva Masquerade",
      },
      {
        id: 93,
        name: "Singapura",
      },
      {
        id: 94,
        name: "Snowshoe",
      },
      {
        id: 95,
        name: "Sokoke",
      },
      {
        id: 96,
        name: "Somali",
      },
      {
        id: 97,
        name: "Sphynx",
      },
      {
        id: 98,
        name: "Suphalak",
      },
      {
        id: 99,
        name: "Thai",
      },
      {
        id: 100,
        name: "Wichien Maat",
      },
      {
        id: 101,
        name: "Thai Lilac",
      },
      {
        id: 102,
        name: "Tonkinese",
      },
      {
        id: 103,
        name: "Toyger",
      },
      {
        id: 104,
        name: "Turkish Angora",
      },
      {
        id: 105,
        name: "Turkish Van",
      },
      {
        id: 106,
        name: "Turkish Vankedisi",
      },
      {
        id: 107,
        name: "Ukrainian Levkoy",
      },
      {
        id: 108,
        name: "York Chocolate",
      },
    ],
  },
  {
    name: "Fish",
    id: 2,
    children: [
      {
        id: 109,
        name: "Adolfo's catfish/corydoras",
      },
      {
        id: 110,
        name: "Amazon sailfin catfish",
      },
      {
        id: 111,
        name: "Banded corydoras",
      },
      {
        id: 112,
        name: "Barred-tail corydoras",
      },
      {
        id: 113,
        name: "Barred sorubim",
      },
      {
        id: 114,
        name: "Blackstripe corydoras",
      },
      {
        id: 115,
        name: "Blacktop corydoras",
      },
      {
        id: 116,
        name: "Blue corydoras",
      },
      {
        id: 117,
        name: "Bluespotted corydoras",
      },
      {
        id: 118,
        name: "Bolt catfish",
      },
      {
        id: 119,
        name: "Bristlenose pleco, bushynose pleco",
      },
      {
        id: 120,
        name: "Britski's catfish",
      },
      {
        id: 121,
        name: "Bronze corydoras, Emerald green cory",
      },
      {
        id: 122,
        name: "Caracha",
      },
      {
        id: 123,
        name: "Cascarudo",
      },
      {
        id: 124,
        name: "Common pleco, suckermouth catfish",
      },
      {
        id: 125,
        name: "Corydoras nain",
      },
      {
        id: 126,
        name: "Dwarf corydoras",
      },
      {
        id: 127,
        name: "Ehrhardt's corydoras",
      },
      {
        id: 128,
        name: "Elegant corydoras",
      },
      {
        id: 129,
        name: "Emerald catfish",
      },
      {
        id: 130,
        name: "Evelyn's cory",
      },
      {
        id: 131,
        name: "False network catfish",
      },
      {
        id: 132,
        name: "False spotted catfish",
      },
      {
        id: 133,
        name: "Firewood catfish, (planiceps) shovelnose catfish",
      },
      {
        id: 134,
        name: "Flagtail catfish",
      },
      {
        id: 135,
        name: "Golden dwarf sucker, golden oto",
      },
      {
        id: 136,
        name: "Gold laser cory",
      },
      {
        id: 137,
        name: "Gold nugget pleco",
      },
      {
        id: 138,
        name: "Gold Zebra catfish",
      },
      {
        id: 139,
        name: "Guapore corydoras",
      },
      {
        id: 140,
        name: "Hognosed brochis",
      },
      {
        id: 141,
        name: "Hover over the menu items to see examples of what we can do.",
      },
      {
        id: 142,
        name: "Julii corydoras",
      },
      {
        id: 143,
        name: "Leopard sailfin pleco, clown sailfin pleco",
      },
      {
        id: 144,
        name: "Lima shovelnose catfishLists' section.",
      },
      {
        id: 145,
        name: "Loach catfish",
      },
      {
        id: 146,
        name: "Long nosed arched cory",
      },
      {
        id: 147,
        name: "Loxozonus cory",
      },
      {
        id: 148,
        name: "Masked corydoras, bandit corydoras",
      },
      {
        id: 149,
        name: "Mosaic corydoras, reticulated corydoras",
      },
      {
        id: 150,
        name: "Mosaic corydoras, reticulated corydoras",
      },
      {
        id: 151,
        name: "Ornate Pimelodus",
      },
      {
        id: 152,
        name: "Panaque",
      },
      {
        id: 153,
        name: "Panda corydoras",
      },
      {
        id: 154,
        name: "Pastaza corydoras",
      },
      {
        id: 155,
        name: "Peppered corydoras, salt and pepper catfish",
      },
      {
        id: 156,
        name: "Pineapple pleco, orange cheek pleco",
      },
      {
        id: 157,
        name: "Pink corydoras",
      },
      {
        id: 158,
        name: "Please Enter your List Here.",
      },
      {
        id: 159,
        name: "Pygmy corydoras",
      },
      {
        id: 160,
        name: "Redtail catfish",
      },
      {
        id: 161,
        name: "Sailfin catfish",
      },
      {
        id: 162,
        name: "Sailfin corydoras",
      },
      {
        id: 163,
        name: "Salt and pepper catfish/corydoras",
      },
      {
        id: 164,
        name: "Schwartz's catfish",
      },
      {
        id: 165,
        name: "Sixray corydoras, false corydoras",
      },
      {
        id: 166,
        name: "Spotted corydoras, longnose corydoras",
      },
      {
        id: 167,
        name: "Spotted pimelodus, pictus, pictus catfish",
      },
      {
        id: 168,
        name: "Sterba's corydoras",
      },
      {
        id: 169,
        name: "Sturgeon catfish",
      },
      {
        id: 170,
        name: "Sychr's catfish",
      },
      {
        id: 171,
        name: "Tailspot corydoras",
      },
      {
        id: 172,
        name: "Threestripe corydoras, leopard catfish, false julii cory",
      },
      {
        id: 173,
        name: "Tiger sorubim",
      },
      {
        id: 174,
        name: "Twig catfish",
      },
      {
        id: 175,
        name: "Vulture Catfish, zamurito",
      },
      {
        id: 176,
        name: "We also have some reference lists for you to play with in the 'Reference Brown-point shield skin longirostris",
      },
      {
        id: 177,
        name: "Whiptail catfish",
      },
      {
        id: 178,
        name: "Xingu corydoras",
      },
      {
        id: 179,
        name: "You can sort or clean your list in a variety of ways.",
      },
      {
        id: 180,
        name: "Zebra dwarf sucker, zebra oto",
      },
      {
        id: 181,
        name: "Zebra pleco, L-046",
      },
      {
        id: 182,
        name: "Zebra shovelnose",
      },
    ],
  },
];

export { users, data, conditions, breeds };
