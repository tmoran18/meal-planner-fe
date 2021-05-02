import { useState } from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'
import MealCardOverlay from '../MealCardOverlay/MealCardOverlay'

const MealCard = ({
  _id,
  name,
  secondary_name,
  image_URL,
  ingredients,
  shoppingSelected,
}) => {
  const isSelected = () => {
    if (!shoppingSelected) {
      return ''
    } else {
      return 'rgba(136, 188, 127, 0.30)'
    }
  }

  return (
    <Box
      position='relative'
      m='20px'
      textAlign='center'
      boxShadow='lg'
      minW='320px'
      maxW='320px'
      bg={isSelected}
      border={isSelected}
    >
      <MealCardOverlay
        _id={_id}
        name={name}
        secondary_name={secondary_name}
        image_URL={image_URL}
        ingredients={ingredients}
        shoppingSelected={shoppingSelected}
      />
      <Image src={image_URL} alt={`${name} with ${secondary_name}`} />
      <Box p='10px' color='gray.500'>
        <Text fontSize='xl' fontWeight='500'>
          {name}
        </Text>
        <Text fontWeight='300'>{`${secondary_name}`}</Text>
      </Box>
    </Box>
  )
}

export default MealCard
