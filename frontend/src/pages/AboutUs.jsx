import SectionSeparator from '../components/SectionSeparator';
import banner from './images/banner.jpg'
const AboutUs = () => {
  return (
    <>
    <div className="relative h-[31rem] w-20/21">
         <div className="absolute inset-0 bg-black bg-opacity-50 rounded-b-[25px]" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover',  backgroundPosition: 'center', }}/>
    </div>
    <div className="bg-gradient-to-b from-blue-200 to-bg-gray-50 overflow-x-hidden min-h-screen pt-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-great-vibes text-indigo-900 text-center mb-8 ">
          Our Journey
        </h1>

        <div className=" shadow-lg rounded-[25px] p-8 mb-12 bg-amber-50">
          <p className="text-lg text-gray-700 mb-6 font-montserrat">
            Step into Swan... a café and crêperie transported straight from a Paris sidewalk with an air of bonhomie, a look of South Bank chic, waiters in Breton stripes and the pièce de résistance: amazing crêpes, as thin as a French mademoiselle, as full bodied as a mythological Leda with a flick of cream, a wink of cinnamon and an oh là là of chocolate. For the guilty and gluten-free, there are sinfully good-for-you savoury buckwheat-based galettes and sexy salads. And to accentuate it all: exclusively blended teas with names like French Kiss, Paris Je T`aime, Teint de Pêche and Royal Rouge; steeped in the perfume of Paris, sipped with the promise of `encore``... you`ll be back for more.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-montserrat text-indigo-900 mb-4 font-montserrat ">Location</h2>
              <p className="text-gray-700 mb-2 font-montserrat">Cape Town`s East City Precinct, design district & historical town centre</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-montserrat">View map</a>
            </div>
            <div>
              <h2 className="text-2xl font-montserrat text-indigo-900 mb-4 ">Specialities</h2>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Sweet crêpes</li>
                <li>Savoury galettes</li>
                <li>Brunch all day</li>
                <li>Swan Café exclusive tea blends</li>
                <li>Artisanal coffee</li>
              </ul>
              <a href="#" className="text-indigo-600 hover:text-indigo-800">View menu</a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          <div className="bg-amber-50 rounded-[25px] shadow-lg p-6 hover:scale-105 duration-300">
            <h2 className="text-2xl font-montserrat text-indigo-900 mb-4">Contact us</h2>
            <p className="text-gray-700 mb-2">Reservations: Please WhatsApp 123 456 7890</p>
            <p className="text-gray-700 mb-2">For more than 10 people: Please email</p>
            <a href="mailto:contact@swancafe.co.za" className="text-indigo-600 hover:text-indigo-800">contact@swancafe.co.za</a>
          </div>

          <div className="bg-amber-50 rounded-[25px] hover:scale-105 duration-300 shadow-lg  p-6">
            <h2 className="text-2xl  font-montserrat text-indigo-900 mb-4">Opening Hours</h2>
            <p className="text-gray-700 mb-2">Mon to Sat: 8:30 to 16:00</p>
            <p className="text-gray-700">Sunday and public holidays: 9:00 to 14:00</p>
          </div>

          <div className="bg-amber-50  rounded-[25px] hover:scale-105 duration-300 shadow-lg  p-6">
            <h2 className="text-2xl  font-montserrat text-indigo-900 mb-4">Find Us</h2>
            <p className="text-gray-700">Corner Buitenkant & Barrack Street, Zonnebloem, Cape Town</p>
          </div>

          <div className="bg-amber-50  rounded-[25px] hover:scale-105 duration-300 shadow-lg  p-6">
            <h2 className="text-2xl  font-montserrat text-indigo-900 mb-4">Private Functions & Shoots</h2>
            <p className="text-gray-700 mb-2">Give us a tinkle and we`ll make your occasion special!</p>
            <p className="text-gray-700 mb-2">Hire out our venue for special occasions or shoots.</p>
            <a href="mailto:contact@swancafe.co.za" className="text-indigo-600 hover:text-indigo-800">contact@swancafe.co.za</a>
          </div>
        </div>
      </div>

      <SectionSeparator/>
    </div>
    </>
    
  );
};

export default AboutUs;