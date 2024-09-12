import RecipeCard from "../../components/RecipeCard/RecipeCard";
import './RecipeCardCont.scss';

type RecipeCardContProps = {
    data: recipes[];
}

const RecipeCardCont = ({data}: RecipeCardContProps)=> {
    
    return (
        <section className='recipe-card-container'/>
        {data.map((recipes: recipes) => {
            return (
                <Link key=()
            )
        })}
    )
}
