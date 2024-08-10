import SectionSeparator from '../components/SectionSeparator'
import food from './images/food.jpg'
import menu from './images/menu.jpg'
import sweet from './images/sweet.jpg'
function Menu() {
  return (
    <div className='container mx-auto px-4 py-8 lg:px-24 bg-amber-100'>
        <h1 className="font-great-vibes text-5xl font-semibold text-center text-amber-950">Menu</h1>
        <div className='grid justify-items-center py-5'>
            <img src={menu} alt="menu"  className='rounded-[15px] justify-self-stretch shadow-lg mb-5'/>
            <SectionSeparator />
            <img src={food} alt="food" className='rounded-[15px] shadow-lg mb-5'/>
            <SectionSeparator />
            <img src={sweet} alt="sweet" className='rounded-[15px] shadow-lg'/>
        </div>
        <div className='grid justify-items-center'>
            <button className='px-6 py-4 m-5 bg-red-500 rounded-[35px] text-white hover:scale-110 duration-300' >Order Now</button>
        </div>
    </div>
  )
}

export default Menu