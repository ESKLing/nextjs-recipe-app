import { fetchRecipes } from "../src/data";

const Page = async () => {
  const recipes = await fetchRecipes();
  return (
    <div>
      <h1>Recipes</h1>
      <div className="bg-white px-6">
        {recipes.map((recipe, i) => {
          return (
            <div
              key={recipe.id}
              className="flex flex-row items-center justify-between py-4"
            >
              <div className="flex items-center">
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {recipe.title}
                  </p>
                  <p className="text-sm text-gray-500 sm:block">
                    {recipe.summary}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
