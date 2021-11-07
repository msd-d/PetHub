const users = [
  {
    username: "admin",
    password: "admin",
    phone: 88888888,
    email: "admin@pethub.com",
    location: "Odense",
  },
  {
    username: "test",
    password: "test",
    phone: 12345678,
    email: "test@pethub.com",
    location: "Test City",
  },
];

const data = [
  {
    id: 0,
    name: "Daisy",
    breeds: ["Golden reciever", "Husky"],
    conditions: [],
    gender: "Female",
    birthDate: {
      day: 3,
      month: 4,
      year: 2002,
    },
    images: [
      "https://nationaltoday.com/wp-content/uploads/2020/02/national-golden-retriever-day-640x514.jpg",
    ],
    weight: 1025,
    height: 550,
    length: 1500,
    location: "Dogburg",
    description: "A happy doggy dog",
  },
  {
    id: 1,
    name: "Harry",
    breeds: ["Corgi"],
    conditions: [],
    gender: "Male",
    birthDate: {
      day: 20,
      month: 4,
      year: 2015,
    },
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
    name: "Tuffy",
    breeds: ["Chartreux"],
    conditions: [],
    gender: "Female",
    birthDate: {
      day: 12,
      month: 5,
      year: 2010,
    },
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
];

export { users, data, conditions, breeds };
