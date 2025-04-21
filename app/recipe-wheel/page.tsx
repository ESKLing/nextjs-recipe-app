import { Wheel } from "../ui/wheel";
import { fetchRecipes } from "../src/data";

const Page = async () => {
  const recipes = await fetchRecipes();
  const recipeNames = recipes.map((obj) => obj.title);
  return (
    <div className="flex mt-5 justify-center">
      <Wheel recipes={recipeNames} />
    </div>
  );
};

export default Page;
