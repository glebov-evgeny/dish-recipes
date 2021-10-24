import {MealItem} from '../Meals/MealItem'

function MealList({meals}){
    

    return (      
        
        <div className="meals">
            {meals.map(meal => (
                <MealItem key={meal.idMeal} {...meal} />
            ))}
        </div>
    )
}

export { MealList }