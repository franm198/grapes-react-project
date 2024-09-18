import './Navigation.scss'; 
import SearchBox from '../SearchBox/SearchBox';
import { useState, useEffect } from 'react';
import Wines from '../../data/Types/Wines';

type NavigationProps = {
  getYearFromButton: (buttonYear: number) => void;
  wines: Wines[];
  setFilteredWines: (filteredWines: Wines[]) => void;
  filteredWines: Wines[];
  setWines: (wines:Wines[]) => void;
  whiteWine : Wines[];
  redWine: Wines[];
  sparklingWine: Wines[];
  regions: string[];
  handleRegionFilter: (country: string) => void;
};

const Navigation: React.FC<NavigationProps> = ({ getYearFromButton, wines, setFilteredWines, setWines, whiteWine, redWine, sparklingWine, regions, filteredWines,
  handleRegionFilter }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');

  const filterWines = () => {
    let filtered = filteredWines.length > 0 ? filteredWines : wines;

    if (searchTerm) {
      filtered = filtered.filter(
        (wine) =>
          wine.wine.toLowerCase().includes(searchTerm.toLowerCase()) ||
          wine.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredWines(filtered);
  };
  
  useEffect(() => {
    filterWines();

  }, [searchTerm]);

  const handleFilterRedWines = () => {
    setFilteredWines(redWine);
  }

  const handleFilterSparklingWines = () => {
    setFilteredWines(sparklingWine);
  }

  const handleFilterWhiteWines = () => {
    setFilteredWines(whiteWine);
  }

  const randomizeWine = () => {
    if (wines.length > 0) {
      const randomIndex = Math.floor(Math.random() * wines.length);
      const randomWine = wines[randomIndex];
      setFilteredWines([randomWine]);
    }
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilteredWines(wines); 
  };

  const handleRegionButtonClick = (country: string) => {
    setSelectedRegion(country);
    handleRegionFilter(country);
  };

  return (
    <nav className='navigation-display'>
      <h2 className='navigation-display__header'>Refine your Wine</h2>
      <p className='navigation-display__sub-heading'>
        Be the envy of all your friends at your next dinner party. Impress them with a boteil de vin they've never heard of.
      </p>
      <p className='navigation-display__sub-heading'>
        Select your vintage, search by name or region.
      </p>
      <div className='side-panel__button-container'>
        <div className='nav-button-container'>
          <SearchBox
            label=" "
            placeholder="Search by name or region..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h2 className='navigation-display__button-header'>Wine Type</h2>
        <div className='nav-button-container__type'>
          <button className='other-buttons' onClick={() => handleFilterRedWines()}>Red</button>
          <button className='other-buttons' onClick={() => handleFilterWhiteWines()}>White</button>
          <button className='other-buttons' onClick={() => handleFilterSparklingWines()}>Sparkling</button>
        </div>

        <h2 className='navigation-display__button-header'>Vintage</h2>
        <div className='nav-button-container__year'>
          <button className='year-button' onClick={() => getYearFromButton(1970)}>1970s</button>
          <button className='year-button' onClick={() => getYearFromButton(1980)}>1980s</button>
          <button className='year-button' onClick={() => getYearFromButton(1990)}>1990s</button>
          <button className='year-button' onClick={() => getYearFromButton(2000)}>2000s</button>
          <button className='year-button' onClick={() => getYearFromButton(2010)}>2010s</button>
          <button className='year-button' onClick={() => getYearFromButton(2020)}>2020s</button>
        </div>

        <h2 className='navigation-display__button-header'>Country</h2>
        <div className='nav-button-container__region'>
          {regions.map((country) => (
            <button
              key={country}
              className={`other-buttons ${selectedRegion === country ? 'selected' : ''}`}
              onClick={() => handleRegionButtonClick(country)}
            >
              {country}
            </button>
          ))}
        </div>

        <div className='nav-button-container__lower'>
          <button className='other-buttons' onClick={randomizeWine}>Find me something new!</button>
        </div>

        <div className='nav-button-container__lower'>
          <button className='other-buttons' onClick={resetFilters}>Show me everything now</button>
        </div>
      </div>
    </nav>   
  );
};

export default Navigation;