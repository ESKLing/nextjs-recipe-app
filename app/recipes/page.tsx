import { fetchRecipes } from "../src/data";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const recipes = await fetchRecipes();
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="flex mb-5 justify-end">
        <Link
          href="/recipes/create"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          Add Recipe
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
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
                    src="/dinner.jpg"
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
                  className="font-medium text-lg text-purple-800 hover:text-purple-900 transition duration-500 ease-in-out inline-block mb-2"
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
