const BASE_URL = "http://localhost:3000";

export async function register(user) {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function login(user) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getRecipes(userId) {
  try {
    const res = await fetch(`${BASE_URL}/dashboard/${userId}`);
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function createRecipe(recipe, id) {
  try {
    const res = await fetch(`${BASE_URL}/create-recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ recipe, id }),
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function toggleFavouritedBy(recipeId, userId) {
  try {
    const body = { recipeId, userId };
    const res = await fetch(`${BASE_URL}/favourite-recipe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteRecipe(userId, recipeId) {
  try {
    const res = await fetch(`${BASE_URL}/delete-recipe/${userId}/${recipeId}`, {
      method: "DELETE",
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}
