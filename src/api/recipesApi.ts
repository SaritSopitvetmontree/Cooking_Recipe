export const getRecipes = async (): Promise<any[]> => {
    const response = await fetch('https://virtserver.swaggerhub.com/QunaSys/CookingApp/1.0.0/recipes');
  
    if (!response.ok) {
      throw new Error('Failed to fetch recipes');
    }
  
    const data = await response.json();
    return data;
};

export const createRecipe = async (recipe: {
    name: string;
    recipe: string;
    cost: number;
    difficulty: string;
}): Promise<any> => {
    const response = await fetch('https://virtserver.swaggerhub.com/QunaSys/CookingApp/1.0.0/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });
  
    if (!response.ok) {
      throw new Error('Failed to create a new recipe');
    }
  
    const data = await response.json();
    return data;
};