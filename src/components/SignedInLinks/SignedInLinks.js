import { Link } from 'react-router-dom'
import { useBreakpointValue } from '@chakra-ui/react'
import { Box, VStack } from '@chakra-ui/layout'
import IconEditMeal from '../Icons/IconEditMeal'
import IconMeals from '../Icons/IconMeals'
import IconIngredients from '../Icons/IconIngredients'
import IconEditIngredient from '../Icons/IconEditIngredient'

const SignedInLinks = () => {
  const mobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box>
      {!mobile ? (
        <VStack
          align='flex-start'
          px='6'
          py='8'
          spacing='6'
          color='gray.500'
          fontWeight='500'
        >
          <Link to='/'>Meals</Link>
          <Link to='/create-meal'>Create Meal</Link>
          <Link to='/ingredients'>Ingredients</Link>
          <Link to='/create-ingredient'>Create Ingredient</Link>
        </VStack>
      ) : (
        <VStack align='flex-start' px='4' py='8' spacing='8'>
          <Link to='/'>
            <IconMeals />
          </Link>
          <Link to='/create-meal'>
            <IconEditMeal />
          </Link>
          <Link to='/ingredients'>
            <IconIngredients />
          </Link>
          <Link to='/create-ingredient'>
            <IconEditIngredient />
          </Link>
        </VStack>
      )}
    </Box>
  )
}

export default SignedInLinks
