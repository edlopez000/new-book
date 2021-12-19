import React from 'react';
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { PropTypes } from 'prop-types';

// Next step is turning the SearchIcon into a prop that can be set when the component is called

const TextInput = ({ placeholderText }) => {
  return (
    <InputGroup>
      <Input placeholder={placeholderText} variant="filled" />
      <InputRightElement children={<SearchIcon />} pointerEvents="none" />
    </InputGroup>
  );
};

TextInput.propTypes = {
  /**
   * Text inside of the Input
   */
  placeholderText: PropTypes.string,
};

TextInput.defaultProps = {
  placeholderText: '',
};

export default TextInput;
