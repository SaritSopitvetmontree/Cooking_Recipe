import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CreateRecipe from '../components/CreateRecipe';

export default {
  title: 'Components/CreateRecipe',
  component: CreateRecipe,
} as Meta;

const Template: StoryFn = (args) => <CreateRecipe {...args} />;

export const Default = Template.bind({});
Default.args = {};