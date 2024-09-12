import Wines from '../../data/Types/Wines'
import './WineCard.scss'

type WineCardProps={
  wines: Wines;
}

const WineCard = ({wines}: WineCardProps) => {
  return (
    <div className='wine-card'>
      <div className='wine-card__image-container'>
        <img src={wines.image} alt="" />
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
      </div>
    </div>
  )
}

export default WineCard
