import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MealContext from '../../context/meal/mealContext'
import IngredientContext from '../../context/ingredient/ingredientContext'
import AuthContext from '../../context/auth/authContext'
import ShoppingContext from '../../context/shopping/shoppingContext'
import MealCard from '../MealCard/MealCard'
import Layout from '../Layout/Layout'
import {
  Box,
  Flex,
  Spinner,
  Link as ChakraLink,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react'
import Modal from '../Modal/Modal'

const Meals = (props) => {
  const mealContext = useContext(MealContext)
  const ingredientContext = useContext(IngredientContext)
  const authContext = useContext(AuthContext)
  const shoppingContext = useContext(ShoppingContext)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { meals, getMeals, loading } = mealContext
  const { getIngredients } = ingredientContext
  const { shoppingListMeals, clearShoppingList } = shoppingContext

  useEffect(() => {
    authContext.loadUser()
    getMeals()
    getIngredients()
    clearShoppingList()
    //eslint-disable-next-line
  }, [])

  const createShoppingList = () => {
    onOpen(isOpen)
  }

  return (
    <Layout>
      {/* If no meals */}
      {meals !== null && meals.length === 0 && !loading ? (
        <Link to='/create-meal'>
          <ChakraLink color='gray.600'>Please add a meal here</ChakraLink>
        </Link>
      ) : // There are Meals
      meals !== null && !loading ? (
        <Box w='100%' maxW='1080px'>
          <Flex
            width='100%'
            justify='space-between'
            align='center'
            flexDirection={{ base: 'column', lg: 'row' }}
          >
            <Button
              mb={{ base: 8, lg: 0 }}
              ml={{ base: '0', md: '3' }}
              borderRadius='100px'
              onClick={createShoppingList}
            >
              View Shopping List
            </Button>
            <Flex align='center'>
              <Text mr='2' color='gray.500'>
                Meals Selected
              </Text>
              <Box
                borderRadius='100px'
                color='green.700'
                fontWeight='bold'
                px='5'
                py='1'
                mr={{ base: '0', md: '3' }}
                bg='rgba(136, 188, 127, 0.30)'
              >
                {shoppingListMeals.length}
              </Box>
            </Flex>
          </Flex>
          <Flex justify='center' w='100%' maxW='1080px' wrap='wrap'>
            {meals.map((meal) => (
              <MealCard key={meal._id} {...meal} />
            ))}
          </Flex>
        </Box>
      ) : (
        // Loading State
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      )}

      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} size='3xl'>
        <div>
          {shoppingListMeals.length < 1 ? (
            <Box textAlign='center'>You have no meals selected</Box>
          ) : (
            shoppingListMeals.map((meal) =>
              meal.ingredients.map((ingredient) => (
                <div>
                  {ingredient.name}&nbsp;x&nbsp;{ingredient.qty} &nbsp;
                  {ingredient.unit}
                </div>
              ))
            )
          )}
        </div>
      </Modal>
    </Layout>
  )
}

export default Meals
