import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Atoms/Text Input',
  component: TextInput,
};

const Template = (args) => <TextInput {...args} />;

export const ConcertSearch = Template.bind({});
ConcertSearch.args = { placeholderText: 'Search your concert' };
