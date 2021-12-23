import React from 'react';
import { Text, Box, HStack, Icon } from '@chakra-ui/react';
import { SiMusicbrainz } from 'react-icons/si';

const Logo = () => {
  return (
    <Box>
      <HStack>
        <Icon as={SiMusicbrainz} color="white" />
        <Text color="white" fontWeight="bold">
          ConcertBrain
        </Text>
      </HStack>
    </Box>
  );
};

export default Logo;
