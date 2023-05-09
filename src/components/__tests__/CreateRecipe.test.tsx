import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CreateRecipe from '../CreateRecipe';

describe('CreateRecipe', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should save input values to local storage', () => {
    render(<CreateRecipe />);

    const nameInput = screen.getByLabelText('Name');
    const recipeInput = screen.getByLabelText('Recipe');
    const costInput = screen.getByLabelText('Cost');
    const submitButton = screen.getByText('Create');

    fireEvent.change(nameInput, { target: { value: 'Test Recipe' } });
    fireEvent.change(recipeInput, { target: { value: 'This is a test recipe' } });
    fireEvent.change(costInput, { target: { value: '1000' } });
    fireEvent.click(submitButton);

    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    expect(storedRecipes).toHaveLength(1);
    expect(storedRecipes[0]).toMatchObject({
      name: 'Test Recipe',
      recipe: 'This is a test recipe',
      cost: 1000,
    });
  });
});