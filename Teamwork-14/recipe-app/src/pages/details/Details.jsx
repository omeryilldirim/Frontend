import { Link, useLocation } from "react-router-dom";
import diet from "../../assets/diet.svg";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();
  console.log(recipe);
  return (
    <div>
      <section>
        <h1>{recipe.label}</h1>
        <img src={diet} alt="detail" width="200px" />
      </section>
      <section>
        <div>
          <ul>
            <p>Nutrients</p>
            <li>
              Calories: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}{" "}
              kcal
            </li>
            <li>Fat : {Math.round(recipe.totalNutrients.FAT.quantity)} g</li>
            <li>
              Carbs : {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
            </li>
            <li>
              Protein : {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
            </li>
            <li>
              Cholesterol : {Math.round(recipe.totalNutrients.CHOLE.quantity)} g
            </li>

          </ul>
        </div>
        <div>
          <img src={recipe.image} alt="recipe" />
        </div>
        <div>
          <ul>
            <p>Ingredients</p>
            {recipe.ingredientLines.map((item, i) => (
              <li key={i + 1}>{item}</li>
            ))}
          </ul>
          <Link to={recipe.url} target="_blank">
            Details
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Details;
