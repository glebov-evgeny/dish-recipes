import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Preloader } from "../components/Preloader/Preloader";

import { getFilteredCategory } from "../api";
import { MealList } from "../components/Meals/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className="back__btn" onClick={goBack}>
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}
export { Category };
