import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bur from './burger.jpg'
import jc  from './juice.jpg'

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
    )
  };

  return (
    <div className="bg-white">
      <div className="relative">
        <Slider {...settings}>
          <div>
            <div className="relative h-[35rem]">
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                style={{ backgroundImage: `url(https://www.cafecoffeeday.com/sites/default/files/1920x760%20%281%29.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-[35rem]">
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                style={{ backgroundImage: `url(${bur})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </div>
            </div>
          </div>
          <div>
            <div className="relative h-[35rem]">
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                style={{ backgroundImage: `url(${jc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* Rest of your component remains the same */}
      <div className="container mx-auto px-4 py-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/path-to-icon1.png" alt="Original coffee" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Original coffee</h3>
            <p className="text-gray-600">Cras convallis purus vestibulum turpis tempus euismod.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/path-to-icon2.png" alt="23 coffees to choose" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">23 coffees to choose</h3>
            <p className="text-gray-600">Morbi porttitor dignissim leo, eget bibendum diam.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/path-to-icon3.png" alt="Pleasant ambient" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pleasant ambient</h3>
            <p className="text-gray-600">Aliquam erat volutpat. Nam egestas, diam vitae vehicula vehicula.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img src="/path-to-icon4.png" alt="Pleasant ambient" className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pleasant ambient</h3>
            <p className="text-gray-600">Cras convallis purus vestibulum turpis tempus euismod.</p>
            </div>
        </div>
    </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">See what our restaurant looks like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img src="/path-to-gallery-image1.jpg" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg" />
            <img src="/path-to-gallery-image2.jpg" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg" />
            <img src="/path-to-gallery-image3.jpg" alt="Restaurant interior" className="w-full h-64 object-cover rounded-lg" />
          </div>
          <div className="text-center mt-8">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full text-lg hover:bg-red-600 transition duration-300">See gallery</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;