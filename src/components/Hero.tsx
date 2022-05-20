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
      bgSize='200%'
      filter='opacity(0.9) grayscale(80%) '
      h={{ base: '100vh', lg: 'inherit' }}
    >
      <Image src='CHATTER_WHITE_TR.png' w='60%' />
    </GridItem>
  );
};

export default Hero;
