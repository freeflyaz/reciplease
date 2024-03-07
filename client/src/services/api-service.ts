import { Recipe, User } from '../zustand/store';
const BASE_URL = 'http://localhost:3000';

export async function register(user: User) {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function login(user: User) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getRecipes<T>(userId: string): Promise<T> {
  try {
    const res = await fetch(`${BASE_URL}/dashboard/${userId}`);
    // Handeling HTTP status code errors
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    // handeling error
    throw error;
  }
}

export async function createRecipe(recipe: Recipe, id: string) {
  try {
    const res = await fetch(`${BASE_URL}/create-recipe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipe, id }),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function toggleFavouritedBy(recipeId: string, userId: string) {
  try {
    const body = { recipeId, userId };
    const res = await fetch(`${BASE_URL}/favourite-recipe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteRecipe(userId: string, recipeId: string) {
  try {
    const res = await fetch(`${BASE_URL}/delete-recipe/${userId}/${recipeId}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
