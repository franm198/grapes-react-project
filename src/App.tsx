import './App.scss'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
// import Vegan from './assets/vegan.png';
import Buttons from './components/Buttons/Buttons'
import RecipeCard from './components/RecipeCard/RecipeCard'

function App() {
  

  return (
    <>
     <Header />
     <main>
      <Navigation />
     <RecipeCard/>
     </main>
     </>
  )
}

export default App
