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
    weight: 2.0,
    height: 30,
    length: 35,
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
    weight: 2.0,
    height: 30,
    length: 35,
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
];

export { users, data, conditions, breeds };
