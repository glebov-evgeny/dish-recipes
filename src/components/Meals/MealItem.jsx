import {Link} from "react-router-dom";

function MealItem(props){
    const {strMeal, strMealThumb, idMeal} = props;

    return (
      <Link to={`/meal/${idMeal}`} className="meals__item">
        <div className="meals__item-img">
          <img src={strMealThumb} alt={strMeal}/>         
        </div>
        <div className="meals__item-content">
            <p className="meals__item-title">{strMeal}</p>

        </div>
        <div className="meals__item-action">
            <div className="meals__item-btn">Watch meal</div>
        </div>
      </Link>
    )
}

export {MealItem}