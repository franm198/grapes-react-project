import Wines from '../../data/Types/Wines';
import './WineCard.scss';
import { useState, useEffect } from 'react';

type WineCardProps = {
  wines: Wines;
};


const WineCard: React.FC<WineCardProps> = ({ wines }) => {
  const [randomPrice, setRandomPrice] = useState<number>(0);

  useEffect(() => {
    const minPrice = 10;
    const maxPrice = 1000;
    const generatedPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    setRandomPrice(generatedPrice);
  }, []);
  return (
    <div className='wine-card'>
      <div className='wine-card__image-container'>
        <img src={wines.image} alt={wines.wine} />
      </div>
      <h3 className='wine-card__wine-title'>{wines.wine}</h3>
      <div className='wine-info'>
        <div className='wine-info__pair'>
          <h4 className='wine-card__header'>Winery:</h4>
          <p className='wine-card__body-text'>{wines.winery}</p>
        </div>
        <div className='wine-info__pair'>
          <h4 className='wine-card__header'>Location:</h4>
          <p className='wine-card__body-text'>{wines.location}</p>
        </div>
        <div className='wine-info__pair'>
          <h4 className='wine-card__header'>Rating</h4>
          <p className='wine-card__body-text'>{wines.rating.average}</p>
        </div>
        
        <div className="wine-card__overlay">
          <button className="add-to-favourites-btn">Save Me For Later</button>
        </div>
        <div className="wine-price">
          <p>£{randomPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default WineCard;