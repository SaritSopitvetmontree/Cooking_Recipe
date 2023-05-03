import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

interface Recipe {
  id: number;
  name: string;
  recipe: string;
  cost: number;
  difficulty: string;
  createAt: string;
}

interface RecipeDetailsProps {
  recipe: Recipe | null;
}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({ recipe }) => {
  if (!recipe) {
    return (
      <Box>
        <Typography variant="h6">No recipe selected</Typography>
      </Box>
    );
  }

  return (
    <Box mt={3}>
      <Typography variant="h5">{recipe.name}</Typography>
      <Paper>
        <Box p={2}>
          <Typography variant="subtitle1">
            <strong>Cost:</strong> {recipe.cost}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Difficulty:</strong> {recipe.difficulty}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Created At:</strong> {recipe.createAt}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RecipeDetails;