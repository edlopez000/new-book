import React from 'react';
import { Text, Box, HStack, Icon } from '@chakra-ui/react';
import { SiMusicbrainz } from 'react-icons/si';
import { PropTypes } from 'prop-types';

const Logo = (color, fontWeight) => {
  return (
    <Box>
      <HStack>
        <Icon as={SiMusicbrainz} color={color} />
        <Text color={color} fontWeight={fontWeight}>
          ConcertBrain
        </Text>
      </HStack>
    </Box>
  );
};

Logo.propTypes = {
  /*
   * Color that the text and logo will be
   */
  color: PropTypes.string,
  /*
   * Weight of the font
   */
  fontWeight: PropTypes.string,
};

Logo.defaultProps = {
  color: 'white',
  fontWeight: 'bold',
};

export default Logo;
