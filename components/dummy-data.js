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
    images: [require("../images/image1.png")],
    weight: 1025,
    height: 550,
    length: 1500,
    location: "Dogburg",
    description: "A happy doggy dog",
  },
  {
    id: 1,
    name: "Daisy2",
    breeds: ["Mixed"],
    conditions: [],
    gender: "Female",
    birthDate: {
      day: 3,
      month: 4,
      year: 2005,
    },
    images: [require("../images/image1.png")],
    weight: 1025,
    height: 550,
    length: 1500,
    location: "Dogburg",
    description: "A happy doggy dog",
  },
  {
    id: 2,
    name: "Gustav",
    breeds: ["Bulldog"],
    conditions: [],
    gender: "Female",
    birthDate: {
      day: 3,
      month: 4,
      year: 2003,
    },
    images: [require("../images/image1.png")],
    weight: 1025,
    height: 550,
    length: 1500,
    location: "Dogburg",
    description: "A happy doggy dog",
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

export { data, conditions, breeds };
