//import images
import headerYellow from '../assets/flyer/headerYellow.png'
import headerBlue from '../assets/flyer/headerBlue.png'
import headerGreen from '../assets/flyer/headerGreen.png'
import headerBrown from '../assets/flyer/headerBrown.png'
import headerGrey from '../assets/flyer/headerGrey.png'
import bodyYellow from '../assets/flyer/bodyYellow.png'
import bodyBlue from '../assets/flyer/bodyBlue.png'
import bodyGreen from '../assets/flyer/bodyGreen.png'
import bodyBrown from '../assets/flyer/bodyBrown.png'
import bodyGrey from '../assets/flyer/bodyGrey.png'

// create a object wit images and text for a flyers
export const Flyers = [
    {
        header: headerYellow,
        body: bodyYellow,
        text: `Plastic: eg. yogurt cup, toothbrush.
        Metal: eg. can, pot
        Drink packaging`,
        style: 'flyer-yellow'
    },
    {
        header: headerBlue,
        body: bodyBlue,
        text: `Paper:
        newspapers, cardboard, book, brochure, paper packaging`,
        style: 'flyer-blue'
    },
    {
        header: headerGreen,
        body: bodyGreen,
        text: `Glass container without : wine bottle, oil bottle, jar`,
        style: 'flyer-green'
    },
    {
        header: headerGrey,
        body: bodyGrey,
        text: `Hygiene products, used sponge, diaper, wallpaper, broken dish, clothing`,
        style: 'flyer-grey'
    },
    {
        header: headerBrown,
        body: bodyBrown,
        text: `Leftovers: cooked fruits and vegetables, tea and coffee
        Flowers, garden waste `,
        style: 'flyer-brown'
    },

]

export default { Flyers }