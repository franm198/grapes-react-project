import './Navigation.scss'
import Buttons from '../Buttons/Buttons'
// import Vegan from '../../assets/vegan.png'
// import Vegetarian from '../../assets/vegetarian.png'
// import GlutenFree from '../../assets/gf.png'
// import DairyFree from '../../assets/df.png'


const Navigation = () => {
  return (
    <nav className='navigation-display'>
        <h2 className='navigation-display__header'>Filters</h2>
        <div className='side-panel__button-container'>
            <h2 className='navigation-display__button-header'>Region</h2>
            <div className='nav-button-container'>
                <Buttons label="America"/>
                <Buttons label="South Africa"/>
                <Buttons label="Dinner"/>
                <Buttons label="Snack"/>
            </div>
            <h2 className='navigation-display__button-header'>Rating</h2>
            <div className='nav-button-container'>
                <Buttons label="1 Star"/>
                <Buttons label="2 Star"/>
                <Buttons label="3 Star"/>
                <Buttons label="4 Star"/>
                <Buttons label="5 Star"/>
            </div>
            <h2 className='navigation-display__button-header'>Dietaries</h2>
            <div className='nav-button-container'>
                <Buttons label="Vegan"/>
                <Buttons label="Vegetarian"/>
                <Buttons label="Gluten Free"/>
                <Buttons label="Dairy Free"/>
            </div>
        </div>
   </nav>   
  )
}

export default Navigation
