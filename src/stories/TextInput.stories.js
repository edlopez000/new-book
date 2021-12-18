import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Text Input',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const Search = Template.bind({});
Search.args = { insideText: 'Search your concert' };
