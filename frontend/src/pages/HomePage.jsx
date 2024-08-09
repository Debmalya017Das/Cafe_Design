import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bur from './burger.jpg';
import jc from './juice.jpg';
import SectionSeparator from '../components/SectionSeparator'
// import social from './social.jpg'

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ bottom: '30px' }}>
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 from-30% to-bg-gray-50 to-70% overflow-x-hidden"> {/* Added overflow-x-hidden */}
      <div className="relative">
        <Slider {...settings}>
          <div>
            <div className="relative h-[35rem] w-full"> {/* Added w-full */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                style={{
                  backgroundImage: `url(https://www.cafecoffeeday.com/sites/default/files/1920x760%20%281%29.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
          <div>
            <div className="relative h-[35rem] w-full"> {/* Added w-full */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${bur})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
          <div>
            <div className="relative h-[35rem] w-full"> {/* Added w-full */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${jc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </div>
        </Slider>
      </div>



      {/* Rest of your component remains the same */}
      <div className="container mx-auto px-4 py-16 lg:px-24">
        <h2 className="text-5xl font-great-vibes text-amber-950 font-bold text-center mb-12">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110 duration-300">
            <img src="https://png.pngtree.com/png-vector/20220915/ourmid/pngtree-coffee-bean-icon-vector-png-image_6174527.png" alt="Original coffee" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold font-montserrat mb-2">Original coffee</h3>
            <p className="text-gray-600 font-montserrat">Cras convallis purus vestibulum turpis tempus euismod.</p>
            </div>
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110  duration-300">
            <img src="https://png.pngtree.com/png-vector/20190529/ourmid/pngtree-coffee-cup-icon-png-image_1117236.jpg" alt="23 coffees to choose" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-montserrat">23 coffees to choose</h3>
            <p className="text-gray-600 font-montserrat">Morbi porttitor dignissim leo, eget bibendum diam.</p>
            </div>
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110 duration-300">
            <img src="https://w7.pngwing.com/pngs/673/594/png-transparent-itunes-computer-icons-podcast-logos-music-text-logo-music-download-thumbnail.png" alt="Pleasant ambient" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-montserrat">Pleasant ambient</h3>
            <p className="text-gray-600 font-montserrat">Aliquam erat volutpat. Nam egestas, diam vitae vehicula vehicula.</p>
            </div>
            <div className="bg-amber-50 shadow-lg rounded-lg p-6 text-center hover:scale-110 duration-300">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc2Nbgnav63sByCuBjLR8qUpc8RIKa_s3iJg&s" alt="Pleasant ambient" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 font-montserrat">Pleasant ambient</h3>
            <p className="text-gray-600 font-montserrat">Cras convallis purus vestibulum turpis tempus euismod.</p>
            </div>
        </div>
    </div>
      
    <SectionSeparator/>
      <div className={`bg-gradient-to-t from-amber-100 to-bg-amber-50 py-10`}>
         <div className="container mx-auto px-4 ">
          <h2 className="text-5xl font-bold text-center font-great-vibes text-amber-950 mb-12">Explore the Café</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:mx-24">
            <img src="https://t3.ftcdn.net/jpg/07/48/64/80/240_F_748648005_ZTYI1TUm8cywVP8yDK4Tp3V2DZw78ArL.jpg" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg hover:scale-105 duration-300" />
            <img src="https://t4.ftcdn.net/jpg/07/70/09/07/240_F_770090756_f1ikTYymHO2d04ySuUNNh4r1vXvONNnA.jpg" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg hover:scale-105 duration-300" />
            <img src="https://t4.ftcdn.net/jpg/05/59/19/99/240_F_559199909_ZbXHYo3MAhBwg293cbk1J2m3zPAkVhWv.jpg" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg hover:scale-105 duration-300" />
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg hover:bg-red-600 transition duration-300">Explore Menu</button>
          </div>
        </div>
                {/* <SectionSeparator/> */}
      </div>

    </div>
  
  );
};

export default HomePage;