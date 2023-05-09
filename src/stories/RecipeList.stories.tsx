import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import RecipeList from '../components/RecipeList';

export default {
  title: 'Components/RecipeList',
  component: RecipeList,
} as Meta;

const Template: StoryFn = (args) => <RecipeList {...args} />;

export const Default = Template.bind({});
Default.args = {};