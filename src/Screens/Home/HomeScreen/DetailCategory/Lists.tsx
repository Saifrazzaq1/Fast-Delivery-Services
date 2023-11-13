import Assets from "../../../../Assets";

const topData = [
    { id: '1', image: Assets.Filter, text: 'Filter' },
    { id: '2', image: Assets.Cook, text: 'Cuisines' },
    { id: '3', image: Assets.search, text: 'Search' },
];

const restaurantData = [
    {
        id: '1',
        image: Assets.Pick,
        name: 'Osha Emirati Gourmet',
        time: 'within 22 mins',
        cuisine: 'Emirati, Arabic, Grills',
        rating: '4.2 (100+)',
        price: 'AED 6.00',
    },
    {
        id: '2',
        image: Assets.Pick1,
        name: 'Osha Emirati Gourmet',
        time: 'within 22 mins',
        cuisine: 'Emirati, Arabic, Grills',
        rating: '4.2 (100+)',
        price: 'AED 6.00',
    }
];

const ChefChoice = [
    {
        id: '1',
        image: Assets.Pick1,
        name: 'Adana Chicken',
        time: 'within 22 mins',
        cuisine: 'Osha Emirati Gourmet',
        price: 'AED 6.00',
    },
    {
        id: '2',
        image: Assets.Pick,
        name: 'Emirati, Arabic, Grills',
        time: 'within 22 mins',
        cuisine: 'Osha Emirati Gourmet',
        price: 'AED 6.00',
    }
];

const restaurants = [
    // {
    //     name: "Osha Emirati Gourmet",
    //     cuisine: "Emirati, Arabic, Grills",
    //     rating: "4.2 (100+)",
    //     deliveryTime: "22",
    //     price: "AED 6.00",
    //     discount: "25% Off selected item",
    //     image: Assets.Allo,
    // },
    // {
    //     name: "Osha Emirati Gourmet",
    //     cuisine: "Emirati, Arabic, Grills",
    //     rating: "4.2 (100+)",
    //     deliveryTime: "22",
    //     price: "AED 6.00",
    //     discount: "25% Off selected item",
    //     image: Assets.Barbar,
    // },
    // {
    //     name: "Osha Emirati Gourmet",
    //     cuisine: "Emirati, Arabic, Grills",
    //     rating: "4.2 (100+)",
    //     deliveryTime: "22",
    //     price: "AED 6.00",
    //     discount: "25% Off selected item",
    //     image: Assets.Sandwich,
    // },
    {   id:1,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Texes,
    },
    {    id:2,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Hut,
    },
    {    id:3,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.Paracon,
    },
    {    id:4,
        name: "Osha Emirati Gourmet",
        cuisine: "Emirati, Arabic, Grills",
        rating: "4.2 (100+)",
        deliveryTime: "22",
        price: "AED 6.00",
        discount: "25% Off selected item",
        image: Assets.HotGrill,
    },
    // Add more restaurant data objects here for the other four items
];

export {restaurantData, topData, restaurants, ChefChoice };