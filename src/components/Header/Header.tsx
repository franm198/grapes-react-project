
import { Link } from 'react-router-dom';
import GrapesBrand from '../../assets/web-logo.png'
import './Header.scss'
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let headerClasses = ['header'];
  if (scrolled) {
    headerClasses.push('scrolled');
  }

  return (
    <div className={headerClasses.join(' ')}>
      <div className='title-container'>
        <img className='web-logo' src={GrapesBrand} alt="Logo" />
        <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wines">Wine Library</Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Header;