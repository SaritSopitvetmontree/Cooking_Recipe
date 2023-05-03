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

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipes();
        setRecipes(response);
      } catch (error) {
        //TODO handle error
      }
    };

    fetchRecipes();
  }, []);

  const handleRowClick = (recipe: any) => {
    setSelectedRecipe(recipe);
  };

  return (
    <Container>
      <Typography variant="h4" mb={2}>
        Recipe list
      </Typography>
      <Typography variant="subtitle1" mb={3}>
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
                <TableCell>{recipe.createAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </Container>
  );
};

export default RecipeList;