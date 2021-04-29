import { Image } from '@chakra-ui/image'
import { Box, Text } from '@chakra-ui/layout'

const MealCard = ({ name, secondary_name, image_URL }) => {
  return (
    <Box m='20px' textAlign='center' boxShadow='lg' w='350px'>
      <Image src={image_URL} alt={`${name} with ${secondary_name}`} />
      <Box p='10px' color='gray.500'>
        <Text fontSize='xl' fontWeight='500'>
          {name}
        </Text>
        <Text fontWeight='300'>{`with ${secondary_name}`}</Text>
      </Box>
    </Box>
  )
}

export default MealCard
