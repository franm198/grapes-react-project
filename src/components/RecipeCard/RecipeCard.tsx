import './RecipeCard.scss'


const RecipeCard = () => {
  return (
    <div className='recipe-card'>
      <div className='recipe-card__image-container'>
        <img src="https://img.spoonacular.com/recipes/664147-312x231.jpg" alt="" />
      </div>
      <h3 className='recipe-card__recipe=title'>Carbonara</h3>
      <div className='recipe-info'>
        <h4 className='recipe-card__header'>Cook Time:</h4>
        <p className='recipe-card__body-text'>45 Mins</p>
        <h4 className='recipe-card__header'>Portions:</h4>
        <p className='recipe-card__body-text'>2</p>
      </div>
    </div>
  )
}

export default RecipeCard
