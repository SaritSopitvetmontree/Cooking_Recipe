import React, { useEffect, useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { getRecipes } from '../api/recipesApi';
import RecipeDetails from './RecipeDetails';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState(Array());
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipes();
        setRecipes(response);
      } catch (error) {
        setError('Cannot get recipe');
      }
    };

    fetchRecipes();
  }, []);

  const handleRowClick = (recipe: any) => {
    setSelectedRecipe(recipe);
  };

  return (
    <Container>
      <Typography variant="h4" mb={1} mt={4}>
        Recipe list
      </Typography>
      <Typography variant="subtitle1" mb={4}>
        Home / Recipe list
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Difficulty</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recipes.map((recipe: any) => (
              <TableRow
                key={recipe.id}
                onClick={() => handleRowClick(recipe)}
                style={{ cursor: 'pointer' }}
              >
                <TableCell>{recipe.id}</TableCell>
                <TableCell>{recipe.name}</TableCell>
                <TableCell>{recipe.cost}</TableCell>
                <TableCell>{recipe.difficulty}</TableCell>
                <TableCell>{recipe.createAt.substring(0, 10)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      {error}
    </Container>
  );
};

export default RecipeList;
