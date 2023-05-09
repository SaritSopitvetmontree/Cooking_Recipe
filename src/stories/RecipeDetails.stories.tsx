import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RecipeDetails, { RecipeDetailsProps } from '../components/RecipeDetails';

export default {
  title: 'Components/RecipeDetails',
  component: RecipeDetails,
  argTypes: {
    recipe: {
      control: 'object',
    },
  },
} as Meta;

const Template: StoryFn<RecipeDetailsProps> = (args) => <RecipeDetails {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipe: {
    id: 1,
    name: 'Sample Recipe',
    recipe: 'Sample recipe description',
    cost: 100,
    difficulty: 'Easy',
    createAt: '2023-05-09T00:00:00.000Z',
  },
};

export const NoRecipe = Template.bind({});
NoRecipe.args = {
  recipe: null,
};
