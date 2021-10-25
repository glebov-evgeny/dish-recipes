import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getMealById } from "../../api";
import { Preloader } from "../../components/Preloader/Preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({})
    const { id } = useParams();
    const {goBack} = useHistory();
    useEffect(() => {
        getMealById(id).then( (data) => setRecipe(data.meals[0]))
    }, [id])

  return <>
        <button className="back__btn" onClick={goBack}>
        Go back
      </button>
      {!recipe.idMeal ? <Preloader /> : (
            <div className="recipe">

                <div className="recipe__content">
                    <h1 className="recipe__title">{recipe.strMeal}</h1>
                    <p className="recipe__format"><b>Category:</b> {recipe.strCategory}</p>
                    {recipe.strArea ? <p className="recipe__format"><b>Area:</b> {recipe.strArea}</p> : null}
                    <p className="recipe__text">{recipe.strInstructions}</p>
                    <p className="recipe__table-title">Recipe:</p>
                    <table className="recipe__table">
                        <thead>
                            <tr>
                                <th className="recipe__table-item"><b>Ingredient</b></th>
                                <th className="recipe__table-item"><b>Measure</b></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if(key.includes('Ingredient') && recipe[key]){
                                        return (
                                            <tr key={key}>
                                                <td className="recipe__table-text">{recipe[key]}</td>
                                                <td className="recipe__table-text">{
                                                    recipe[`strMeasure${key.slice(13)}`] 
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })
                            }
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div className="recipe__video-mobile recipe__video">
                            <p className="recipe__video-title">Video Recipe:</p>
                            <iframe title={recipe.strMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                        </div>
                    ) : null}
                </div>

                <div className="recipe__aside">
                    <div className="recipe__img">
                        <img src={recipe.strMealThumb} alt="{recipe.strMeal}" />
                    </div>    
                    {recipe.strYoutube ? (
                        <div className="recipe__video">
                            <p className="recipe__video-title">Video Recipe:</p>
                            <iframe title={recipe.strMeal} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                        </div>
                    ) : null}
                </div>          
          </div>
      )}
  </>;
}
export { Recipe };
