import { fetchRecipes } from "../src/data";
import Image from "next/image";

const Page = async () => {
  const recipes = await fetchRecipes();
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {recipes.map((recipe) => {
          return (
            <div
              key={recipe.id}
              className="rounded overflow-hidden shadow-lg flex flex-col"
            >
              <div className="relative">
                <a href="#">
                  <Image
                    src="/dinner.png"
                    width={1000}
                    height={760}
                    className="hidden md:block"
                    alt="Dinner"
                  />
                  <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                </a>
              </div>
              <div className="px-6 py-4 mb-auto">
                <a
                  href="#"
                  className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
                >
                  {recipe.title}
                </a>
                <p className="text-gray-500 text-sm">{recipe.summary}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
