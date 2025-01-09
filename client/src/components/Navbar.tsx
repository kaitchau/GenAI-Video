import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <div className="text-2xl font-bold">
        <Link to="/">LOGO placement</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-orange-500 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-orange-500 transition duration-300">About</Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-orange-500 transition duration-300">Services</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-orange-500 transition duration-300">Contact</Link>
        </li>
      </ul>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search..." className="p-2 rounded" />
        <Link to="/profile" className="hover:text-orange-500 transition duration-300">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;