import React from 'react';
import { InputGroup, InputRightElement, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const TextInput = ({ insideText }) => {
  return (
    <InputGroup>
      <Input placeholder={insideText} variant="filled" />
      <InputRightElement children={<SearchIcon />} pointerEvents="none" />
    </InputGroup>
  );
};

export default TextInput;
