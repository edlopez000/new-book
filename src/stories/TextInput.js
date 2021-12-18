import React from 'react';
import { InputGroup, InputRightElement, Input, Box } from '@chakra-ui/react';

const TextInput = ({ insideText }) => {
  return (
    <Box>
      <InputGroup>
        <Input placeholder={insideText} />
      </InputGroup>
    </Box>
  );
};

export default TextInput;
