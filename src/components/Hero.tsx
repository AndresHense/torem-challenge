import { GridItem, Image } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <GridItem
      display='flex'
      alignItems='center'
      justifyContent='center'
      bgImage='BACKGROUND.jpg'
      bgPosition='center'
      bgSize={{ base: '300%', xl: '200%' }}
      filter='opacity(0.9) grayscale(80%) '
      h={{ base: '60vh', sm: '100vh', lg: 'inherit' }}
    >
      <Image
        src='CHATTER_WHITE_TR.png'
        w={{ base: '90%', sm: '80%', md: '75%', xl: '60%' }}
      />
    </GridItem>
  );
};

export default Hero;
