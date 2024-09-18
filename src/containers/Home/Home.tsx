import "./Home.scss";
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();

  const navigateToWineLibrary = () => {
    navigate('./wines');
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Welcome to Grapes.</h1>
      <p className="homepage-subtitle">Up your dinner party game by offering the finest selections of wines.</p>
      
      <button className="homepage-button" onClick={navigateToWineLibrary}>
        Visit our collection
      </button>
    </div>
  )
}

export default Home
