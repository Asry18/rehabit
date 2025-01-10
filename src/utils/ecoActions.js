// src/utils/ecoActions.js

// Define a list of eco-friendly challenges
export const ecoActions = [
    "Spend a day without single-use plastics.",
    "Plant a tree or donate to a tree-planting organization.",
    "Reduce water usage by 20% today.",
    "Walk or bike instead of driving for short trips.",
    "Switch off unnecessary lights and save energy.",
    "Start composting kitchen scraps.",
    "Pick up litter in your neighborhood or a nearby park.",
    "Donate unused items to a local charity.",
    "Use reusable shopping bags for your groceries.",
    "Learn about local recycling guidelines and follow them."
];

// Function to get a random eco challenge
export const getRandomEcoAction = () => {
    return ecoActions[Math.floor(Math.random() * ecoActions.length)];
};