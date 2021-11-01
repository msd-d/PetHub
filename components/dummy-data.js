const homeData = [
    {
        id: 1,
        name: "Daisy",
        breed: "Mixed",
        gender: "Female",
        age: 5,
        image: require("../images/image1.png"),
    },
    {
        id: 2,
        name: "Daisy2",
        breed: "Mixed",
        gender: "Female",
        age: 5,
        image: require("../images/image1.png"),
    },
    {
        id: 3,
        name: "Gustav",
        breed: "Alcholic",
        gender: "Female",
        age: 5,
        image: require("../images/image1.png"),
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

export {homeData, conditions, breeds}