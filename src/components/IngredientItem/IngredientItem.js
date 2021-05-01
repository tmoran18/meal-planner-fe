import { useContext } from 'react'
import styles from './index.module.css'
import IngredientContext from '../../context/ingredient/ingredientContext'
import { useHistory } from 'react-router-dom'
import { Box } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/layout'
import { Text } from '@chakra-ui/layout'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/hooks'
import Modal from '../Modal/Modal'
import { Button } from '@chakra-ui/button'
import EditIngredient from '../EditIngredient/EditIngredient'

const IngredientItem = ({ ingredient, index }) => {
  const ingredientContext = useContext(IngredientContext)
  const {
    deleteIngredient,
    setCurrentIngredient,
    clearCurrentIngredient,
  } = ingredientContext
  let history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { name, _id } = ingredient

  const itemColorStyle = () => {
    // if the index is even make this color
    if (index % 2 === 0) {
      return 'gray.100'
    } else {
      return ''
    }
  }

  // Delete Ingredient
  const onDelete = () => {
    deleteIngredient(_id)
    clearCurrentIngredient()
  }

  const onEdit = () => {
    setCurrentIngredient(ingredient)
    onOpen(isOpen)
  }

  return (
    <Box bg={itemColorStyle}>
      <Flex
        border='0.5px solid'
        borderColor='gray.300'
        minW='521px'
        p={2}
        justifyContent='space-between'
      >
        <Text>{name}</Text>
        <Box>
          <EditIcon cursor='pointer' onClick={onEdit} mr={3} />
          <DeleteIcon cursor='pointer' onClick={onDelete} />
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} onOpen={onOpen} modalTitle='Edit Ingredient' modalButtonText='Update Ingredient'>
        <EditIngredient />
      </Modal>
    </Box>
  )
}

export default IngredientItem
