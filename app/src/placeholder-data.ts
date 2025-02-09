const users = [
  {
    id: "3958dc9e-752f-4377-85e9-fec4b6a7832a",
    name: "User",
    email: "user@nextmail.com",
    password: "123456",
  },
];

const recipes = [
  {
    user_id: users[0].id,
    title: "Lasagna",
    summary:
      "Lasagna made with a slow cooked ragu and a béchamel sauce. Makes 8-10 servings.",
    prep_time: 20,
    cooking_time: 120,
    difficulty: "Medium",
    recipe_link: "",
  },
  {
    user_id: users[0].id,
    title: "Cottage Pie",
    summary: "Makes 6 servings.",
    prep_time: 45,
    cooking_time: 60,
    difficulty: "Medium",
    recipe_link: "",
  },
  {
    user_id: users[0].id,
    title: "Chicken Pasta Bake",
    summary: "Easy family recipe. Makes 6 servings.",
    prep_time: 20,
    cooking_time: 45,
    difficulty: "Easy",
    recipe_link: "",
  },
];

export { users, recipes };
