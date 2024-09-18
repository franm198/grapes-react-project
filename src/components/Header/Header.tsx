
import { Link } from 'react-router-dom';
import GrapesBrand from '../../assets/web-logo.png'
import './Header.scss'
import { useState, useEffect } from 'react';

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
            <Link to="./grapes-react-project/">Home</Link>
          </li>
          <li>
            <Link to="./grapes-react-project/wines">Wine Library</Link>
          </li>
          <li>
            <Link to="mailto:grapes@fantasticwine.com">Contact Us</Link>
          </li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Header;