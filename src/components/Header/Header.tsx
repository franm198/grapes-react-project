
import LemonBrand from '../../assets/web-logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='title-container'>
        <img src={LemonBrand} />
        <h1>Lemons.</h1>
    </div>
  )
}

export default Header
