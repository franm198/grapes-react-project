import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p>&copy; 2024 Grapes. All rights reserved.</p>
        <div className='footer__links'>
          <a href='mailto:grapes@fantasticwine.com'>Contact us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;