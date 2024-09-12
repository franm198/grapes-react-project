import './App.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import WineCardCont from './containers/WineCardCont/WineCardCont';
import Wines from './data/Types/Wines';
import { useState , useEffect } from 'react';


function App() {
  const [wines, setWines] = useState<Wines[]>([]);
  const getWines=() => {
    fetch("https://api.sampleapis.com/wines/reds")
  .then((res) => res.json())
  .then((data) =>setWines(data));
  }
  useEffect(() => {
    getWines()
  }, [])
  console.log(wines)

  return (
    <>
     <Header />
     <main>
      <Navigation />
      <WineCardCont data={wines} />
     </main>
     </>
  )

}
export default App
