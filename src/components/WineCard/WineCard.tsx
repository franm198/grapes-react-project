import './WineCard.scss'


const WineCard = () => {
  return (
    <div className='wine-card'>
      <div className='wine-card__image-container'>
        <img src="https://images.vivino.com/thumbs/Yt464jw0QS-ugF7ZQEbE2Q_pb_x300.png" alt="" />
      </div>
      <h3 className='wine-card__wine-title'></h3>
      <div className='wine-info'>
        <h4 className='wine-card__header'>Winery:</h4>
        <p className='wine-card__body-text'>Catena Zapata</p>
        <h4 className='wine-card__header'>Location:</h4>
        <p className='wine-card__body-text'>Argentina</p>
        <h4 className='wine-card__header'>Rating</h4>
        <p className='wine-card__body-text'>4.9</p>
      </div>
    </div>
  )
}

export default WineCard
