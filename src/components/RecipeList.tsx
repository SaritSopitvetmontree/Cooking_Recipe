import React, { useEffect, useState } from 'react';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from '@mui/material';
import { getRecipes } from '../api/recipesApi';
import RecipeDetails from './RecipeDetails';

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState(Array());
  const [createdRecipes, setCreatedRecipes] = useState(Array());
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


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

    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    setCreatedRecipes(storedRecipes);
  }, []);

  const handleRowClick = (recipe: any) => {
    setSelectedRecipe(recipe);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setSelectedRecipe(null);
  };
  
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container>
      <Typography variant="h4" pb={1} pt={4}>
        Recipe list
      </Typography>
      <Typography variant="subtitle1" pb={4}>
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
          {recipes
            .concat(createdRecipes)
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((recipe: any) => (
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
        <TablePagination
          component="div"
          count={recipes.concat(createdRecipes).length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
        />
      </TableContainer>
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
      {error}
    </Container>
  );
};

export default RecipeList;
