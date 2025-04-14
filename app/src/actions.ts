"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchUsers } from "./data";

const FormSchema = z.object({
  title: z.string(),
  summary: z.string(),
  prepTime: z.coerce.number(),
  cookingTime: z.coerce.number(),
  difficulty: z.string(),
  link: z.string().optional(),
});

export const createRecipe = async (formData: FormData) => {
  const users = await fetchUsers();
  const firstUserId = users[0].id;
  const { title, summary, prepTime, cookingTime, difficulty, link } =
    FormSchema.parse({
      title: formData.get("title"),
      summary: formData.get("summary"),
      prepTime: formData.get("prep-time"),
      cookingTime: formData.get("cooking-time"),
      difficulty: formData.get("difficulty"),
      link: formData.get("link"),
    });

  await sql`
        INSERT INTO recipes (user_id, title, summary, prep_time, cooking_time, difficulty, recipe_link)
        VALUES (${firstUserId}, ${title}, ${summary}, ${prepTime}, ${cookingTime}, ${difficulty}, ${link})
    `;

  revalidatePath("/recipes");
  redirect("/recipes");
};
