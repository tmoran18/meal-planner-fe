import { useContext, useState } from 'react'
import MealContext from '../../context/meal/mealContext'
import ShoppingContext from '../../context/shopping/shoppingContext'
import { Box } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import { Fade } from '@chakra-ui/react'
import {
  AddIcon,
  DeleteIcon,
  ViewIcon,
  EditIcon,
  MinusIcon,
} from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'
import Modal from '../Modal/Modal'
import Meal from '../Meal/Meal'

const MealCardOverlay = (props) => {
  const mealContext = useContext(MealContext)
  const shoppingContext = useContext(ShoppingContext)
  const {
    setCurrentMeal,
    clearCurrentMeal,
    deleteMeal,
    setSelectedForShopping,
    clearSelectedForShopping,
  } = mealContext
  const { addMealToShopping, removeMealFromShopping } = shoppingContext

  const [overlayOpacity, setoverlayOpacity] = useState('0.00')
  const [isHover, setIsHover] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  let history = useHistory()

  const onHover = (e) => {
    if (e.type === 'mouseenter') {
      setoverlayOpacity('0.65')
      setIsHover(true)
    } else if (e.type === 'mouseleave') {
      setoverlayOpacity('0.0')
      setIsHover(false)
    }
  }

  // View a meal
  const onView = () => {
    onOpen(isOpen)
    setIsHover(false)
  }

  // Edit Meal
  const onEdit = () => {
    setCurrentMeal(props)
    history.push('/edit-meal')
  }

  // Delete Meal
  const onDelete = () => {
    deleteMeal(props._id, props.imageID)
    clearCurrentMeal()
  }

  // Add Meal to Shopping
  const addToShop = (meal) => {
    addMealToShopping(meal)
    // This adds a selected property to the meal for shopping
    const selectedMeal = Object.assign({}, meal, { shoppingSelected: true })
    setSelectedForShopping(selectedMeal)
  }

  // Remove Meal from Shopping
  const removeFromShop = (meal) => {
    removeMealFromShopping(meal._id)
    const unselectedMeal = Object.assign({}, meal, { shoppingSelected: false })
    clearSelectedForShopping(unselectedMeal)
  }

  return (
    <Box onMouseEnter={onHover} onMouseLeave={onHover}>
      <Fade in={isHover}>
        <Box
          position='absolute'
          opacity={overlayOpacity}
          bg='gray.600'
          w='100%'
          h='100%'
          cursor='pointer'
        ></Box>
        {props.shoppingSelected ? (
          <MinusIcon
            onClick={() => removeFromShop(props)}
            position='absolute'
            color='white'
            w={24}
            h={24}
            cursor='pointer'
            top='85px'
            left='112px'
          />
        ) : (
          <AddIcon
            onClick={() => addToShop(props)}
            position='absolute'
            color='white'
            w={24}
            h={24}
            cursor='pointer'
            top='30%'
            left={{ base: '30%', md: '35%' }}
          />
        )}

        {/* Top right icons Box */}
        <Box
          width={16}
          position='absolute'
          right={2}
          top={2}
          display='flex'
          justifyContent='space-between'
        >
          <ViewIcon
            onClick={onView}
            cursor='pointer'
            color='white'
            w={4}
            h={4}
          />
          <EditIcon
            onClick={onEdit}
            cursor='pointer'
            color='white'
            w={4}
            h={4}
          />
          <DeleteIcon
            onClick={onDelete}
            cursor='pointer'
            color='white'
            w={4}
            h={4}
          />
        </Box>
      </Fade>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        modalTitle={props.name}
        size='full'
      >
        <Meal {...props} />
      </Modal>
    </Box>
  )
}

export default MealCardOverlay
