import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (<nav className="relative fixed top-0 w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-opacity-5 text-white p-4 flex justify-between items-center z-50 shadow-2xl backdrop-blur-lg">
      <div className="absolute inset-0 z-0">
        <div className="bubble absolute"></div>
        <div className="bubble absolute"></div>
        <div className="bubble absolute"></div>
        <div className="bubble absolute"></div>
      </div>

      {/* Logo Section */}
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-400">
        <Link to="/">LOGO</Link>
      </div>

      {/* Navbar Links */}
      <ul className="flex space-x-8 z-10">
        <li>
          <Link to="/" className="tech-nav-link">Home</Link>
        </li>
        <li>
          <Link to="/about" className="tech-nav-link">About</Link>
        </li>
        <li>
          <Link to="/services" className="tech-nav-link">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="tech-nav-link">Contact</Link>
        </li>
      </ul>

      {/* Search and Profile Section */}
      <div className="flex items-center space-x-6 z-10">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-2 border-gray-600 text-white p-2 rounded-lg focus:outline-none focus:border-cyan-500 transition duration-300"
        />
        <Link to="/profile" className="tech-nav-link">Profile</Link>
      </div>
      

    

    </nav>
  );
};

export default Navbar;
