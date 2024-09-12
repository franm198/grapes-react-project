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
            <h2 className='navigation-display__button-header'>Meal Type</h2>
            <div className='nav-button-container'>
                <Buttons label="Breakfast"/>
                <Buttons label="Lunch"/>
                <Buttons label="Dinner"/>
                <Buttons label="Snack"/>
            </div>
            <h2 className='navigation-display__button-header'>Nutrition</h2>
            <div className='nav-button-container'>
                <Buttons label="Under 500 Cals"/>
                <Buttons label="Under 800 Cals"/>
                <Buttons label="Under 1000 Cals"/>
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
