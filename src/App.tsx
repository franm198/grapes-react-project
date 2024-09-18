import './App.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import WineCardCont from './containers/WineCardCont/WineCardCont';
import { useState, useEffect } from 'react';
import Wines from './data/Types/Wines';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Footer from './components/Footer/Footer';

const App = () => {
  const [wines, setWines] = useState<Wines[]>([]);
  const [filteredWines, setFilteredWines] = useState<Wines[]>([]);
  const [, setYear] = useState<number>(2024);
  const [redWine, setRedWine] = useState<Wines[]>([]);
  const [whiteWine, setWhiteWine] = useState<Wines[]>([]);
  const [sparklingWine, setSparklingWine] = useState<Wines[]>([]);
  // const [regions, setRegions] = useState<string[]>([]);
  const [countries] = useState<string[]>(['France', 'Italy', 'Spain', 'South Africa', 'United States']);


  const shuffleArray = (array: Wines[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };


  const getWines = async () => {
    try {
      const redResponse = await fetch("https://api.sampleapis.com/wines/reds");
      const redWines = await redResponse.json();
  
      const whiteResponse = await fetch("https://api.sampleapis.com/wines/whites");
      const whiteWines = await whiteResponse.json();
  
      const sparklingResponse = await fetch("https://api.sampleapis.com/wines/sparkling");
      const sparklingWines = await sparklingResponse.json();

      const limitedRedWines = redWines.slice(0, 50);  
      const limitedWhiteWines = whiteWines.slice(0, 50);  
      const limitedSparklingWines = sparklingWines.slice(0, 50);  

      setRedWine(limitedRedWines);
      setWhiteWine(limitedWhiteWines);
      setSparklingWine(limitedSparklingWines);
  
      const combinedWines = [
        ...limitedRedWines,
        ...limitedWhiteWines,
        ...limitedSparklingWines
      ];
  
      setWines(combinedWines);
      setFilteredWines(combinedWines);


       const shuffledWines = shuffleArray(combinedWines);

       setWines(shuffledWines);
       setFilteredWines(shuffledWines);
 
  
    } catch (error) {
      console.error("Failed to fetch wines:", error);
    }
  };

  useEffect(() => {
    getWines();
  }, []);

  const filterByYear = (wineArray: Wines[], year: number) => {
    return wineArray.filter(wine => {
      const yearInWine = Number(wine.wine.split(" ").pop());
      return !isNaN(yearInWine) && yearInWine >= year && yearInWine <= year + 9;
    });
  };


  const getYearFromButton = (year: number) => {
    setYear(year);
    setFilteredWines(filterByYear(wines, year));
  };

  const handleRegionFilter = (country: string) => {
    const filtered = wines.filter(wine => wine.location.includes(country));
    setFilteredWines(filtered);
  };

  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path="/grapes-react-project/" element={<Home />} />
          <Route
            path="/grapes-react-project/wines"
            element={
              <>
                <main>
                <Navigation 
                    getYearFromButton={getYearFromButton}
                    wines={wines}
                    setFilteredWines={setFilteredWines}
                    setWines={setWines}
                    whiteWine={whiteWine}
                    redWine={redWine}
                    sparklingWine={sparklingWine}
                    regions={countries}
                    handleRegionFilter={handleRegionFilter} filteredWines={[]} />
                <WineCardCont data={filteredWines} />
                </main>
              </>
            }
          />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
};

export default App;