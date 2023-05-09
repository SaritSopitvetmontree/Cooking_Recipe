import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SideBar from '../components/SideBar';

export default {
  title: 'Components/SideBar',
  component: SideBar,
} as Meta;

const Template: StoryFn = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {};