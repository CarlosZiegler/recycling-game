export const generateArrayAndRandomize = (someArray) => {
    someArray.sort(() => Math.random() - 0.5);
    return someArray;
};

export default { generateArrayAndRandomize }