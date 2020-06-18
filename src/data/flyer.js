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

export const Flyers = [
    {
        header: headerYellow,
        body: bodyYellow,
        text: `Plastic, for example:
        Yogurt mug
        Toothbrush
        Metals, for example:
        Canned food can
        Cooking pot
        Beverage carton`,
        style: 'flyer-yellow'
    },
    {
        header: headerBlue,
        body: bodyBlue,
        text: `Glass bottles, for example:
        beverages, oil, sauce.
        Glasses, for example:
        Baby food
        Preserved jar`,
        style: 'flyer-blue'
    },
    {
        header: headerGreen,
        body: bodyGreen,
        text: `Newspapers
        Paper packaging
        Brochures
        Cardboard boxes
        Books`,
        style: 'flyer-green'
    },
    {
        header: headerGrey,
        body: bodyGrey,
        text: `Leftovers
        also cooked
        Fruit and vegetable leftovers
        Tea and coffee filters
        Flowers
        Garden waste`,
        style: 'flyer-grey'
    },
    {
        header: headerBrown,
        body: bodyBrown,
        text: `Hygiene products
        Vacuum cleaner bag
        dishes
        Diapers
        Wallpaper`,
        style: 'flyer-brown'
    },

]

export default { Flyers }