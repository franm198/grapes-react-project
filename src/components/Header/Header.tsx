
import LemonBrand from '../../assets/web-logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='title-container'>
        <img className='web-logo' src={LemonBrand} />
        <h1>Grapes.</h1>
    </div>
  )
}

export default Header
