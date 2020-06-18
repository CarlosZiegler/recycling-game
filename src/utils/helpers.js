export const generateArrayAndRandomize = (someArray) => {
    return someArray.sort(() => Math.random() - 0.5);
};

export default { generateArrayAndRandomize }