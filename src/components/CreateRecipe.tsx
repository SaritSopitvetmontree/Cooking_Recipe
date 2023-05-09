import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { createRecipe, getRecipes } from '../api/recipesApi';

const CreateRecipe: React.FC = () => {
  const [name, setName] = useState('');
  const [recipe, setRecipe] = useState('');
  const [cost, setCost] = useState(0);
  const [difficulty, setDifficulty] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let currentRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    let id: number = currentRecipes.length > 0 ? Math.max(...currentRecipes.map((recipe: any) => recipe.id)) + 1 : 4;
    const newRecipe = { id, name, recipe, cost, difficulty, createAt: new Date().toISOString() };

    localStorage.setItem('recipes', JSON.stringify([...currentRecipes, newRecipe]));

    setName('');
    setRecipe('');
    setCost(0);
    setDifficulty('');
  };

  return (
    <Container>
      <Typography variant="h4" mb={1} mt={4}>
        Create recipe
      </Typography>
      <Typography variant="subtitle1" mb={4}>
        Home / Create recipe
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Recipe"
          value={recipe}
          onChange={(e) => setRecipe(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Cost"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Difficulty</InputLabel>
          <Select value={difficulty} onChange={(e) => setDifficulty(e.target.value as string)}>
            <MenuItem value="Easy">Easy</MenuItem>
            <MenuItem value="Normal">Normal</MenuItem>
            <MenuItem value="Hard">Hard</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default CreateRecipe;
