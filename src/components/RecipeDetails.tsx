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

export interface RecipeDetailsProps {
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
      <Paper>
        <Box p={2}>
          <Typography variant="caption">Name</Typography>
          <Typography variant="body1" mb={1}>
            {recipe.name}
          </Typography>

          <Typography variant="caption">Recipe</Typography>
          <Typography variant="body1" mb={1}>
            {recipe.recipe}
          </Typography>

          <Typography variant="caption">Cost</Typography>
          <Typography variant="body1" mb={1}>
            Yen {recipe.cost}
          </Typography>

          <Typography variant="caption">Difficulty</Typography>
          <Typography variant="body1">{recipe.difficulty}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default RecipeDetails;
