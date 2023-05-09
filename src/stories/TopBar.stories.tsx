import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import TopBar from '../components/TopBar';

export default {
  title: 'Components/TopBar',
  component: TopBar,
} as Meta;

const Template: StoryFn = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {};