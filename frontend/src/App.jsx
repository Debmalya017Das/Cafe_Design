import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Menu from './pages/Menu';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/menu" element={<Menu/>} />
            {/* Add more routes for other pages */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;