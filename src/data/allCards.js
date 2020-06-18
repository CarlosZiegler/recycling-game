//import images
import cardYellow from '../assets/yellow.png'
import cardBlue from '../assets/blue.jpg'
import cardBrown from '../assets/brown.png'
import cardGrey from '../assets/grey.png'
import cardGreen from '../assets/green.png'

//create a object with images and category
export const CARDS = [
    {
        category: 'glas',
        image: cardGreen,
    },
    {
        category: 'werkstoffe',
        image: cardYellow,
    },
    {
        category: 'papier',
        image: cardBlue,
    },
    {
        category: 'biogut',
        image: cardBrown,
    },
    {
        category: 'hausmull',
        image: cardGrey,
    },
]

//export object
export default { CARDS }