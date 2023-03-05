import { Link, useLocation } from "react-router-dom";
import meal from "../../assets/meal.svg";
import DetailPage, { InfoSection, TitleSection } from "./Style";

const Details = () => {

  const {
    state: { recipe },
  } = useLocation();
  console.log(recipe);
  return (
    <DetailPage>

      <TitleSection>
        <h1>{recipe.label}</h1>
        <img src={meal} alt="detail" />
      </TitleSection>
      <InfoSection>
        <div className="nutrients">
          <h3>Nutrients</h3>
          <ul>
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
        <div className="recipe-img">
          <img src={recipe.image} alt="recipe" />
        </div>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredientLines.map((item, i) => (
              <li key={i + 1}>{item}</li>
            ))}
          </ul>
          <Link to={recipe.url} target="_blank">
            Details
          </Link>
        </div>
      </InfoSection>
    </DetailPage>
  );
};

export default Details;
