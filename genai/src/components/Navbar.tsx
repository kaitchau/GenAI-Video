function Navbar() {
    return (
      <nav style={{ position: 'fixed', top: 0, width: '100%', backgroundColor: '#333', color: '#fff', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ margin: '0 15px' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li style={{ margin: '0 15px' }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
          <li style={{ margin: '0 15px' }}><a href="#services" style={{ color: '#fff', textDecoration: 'none' }}>Services</a></li>
          <li style={{ margin: '0 15px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;