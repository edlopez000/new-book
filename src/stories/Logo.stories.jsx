import React from 'react';
import Logo from '../stories/Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Basic = Template.bind({});
Basic.args = { color: 'white', fontWeight: 'bold' };
