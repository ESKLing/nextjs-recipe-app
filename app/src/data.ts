import { sql } from "@vercel/postgres";
import { Recipe } from "./definitions";

export const fetchRecipes = async () => {
  try {
    const data = await sql<Recipe>`SELECT * FROM recipes`;
    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch recipes data.");
  }
};
