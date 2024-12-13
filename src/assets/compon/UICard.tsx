
import { Box, Card, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'



interface FeatureProps {
    title: string;
    desc: string;
    [key: string]: any; 
  }
  
  function Feature({ title, desc, ...rest }: FeatureProps) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

  
const UICard = () => {
  return (
    <>
<Stack spacing="1px" direction='row'>
  <Feature
    title='LLM-QR'
    desc='we test ur Program for are goods'
  />
</Stack>
  
    </>
  )
}

export default UICard