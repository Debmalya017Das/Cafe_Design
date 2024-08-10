const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 lg:px-24 rounded-t-[25px]">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p>Our Cafe is a popular coffee chain known for its quality beverages and cozy atmosphere.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-red-500">Menu</a></li>
              <li><a href="#" className="hover:text-red-500">Locations</a></li>
              <li><a href="#" className="hover:text-red-500">Franchise</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500">Facebook</a>
              <a href="#" className="hover:text-red-500">Twitter</a>
              <a href="#" className="hover:text-red-500">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white px-4 py-2 rounded w-full mb-2" />
              <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded w-full">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy;Cafe</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;