import { useContext, useState } from 'react'
import MealContext from '../../context/meal/mealContext'
import { Box } from '@chakra-ui/layout'
import { useDisclosure } from '@chakra-ui/react'
import { Fade } from '@chakra-ui/react'
import { AddIcon, DeleteIcon, ViewIcon, EditIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'

const MealCardOverlay = (props) => {
  const mealContext = useContext(MealContext)
  const { setCurrentMeal, clearCurrentMeal, deleteMeal } = mealContext
  const [overlayOpacity, setoverlayOpacity] = useState('0.00')
  const { isOpen, onToggle } = useDisclosure()
  let history = useHistory()

  const onHover = (e) => {
    if (e.type === 'mouseenter') {
      setoverlayOpacity('0.65')
      onToggle()
    } else if (e.type === 'mouseleave') {
      setoverlayOpacity('0.0')
      onToggle()
    }
  }

  // Edit Meal
  const onEdit = () => {
    setCurrentMeal(props)
    history.push('/edit-meal')
  }

  // Delete Meal
  const onDelete = () => {
    deleteMeal(props._id)
    clearCurrentMeal()
  }

  return (
    <Box onMouseEnter={onHover} onMouseLeave={onHover}>
      <Fade in={isOpen}>
        <Box
          position='absolute'
          opacity={overlayOpacity}
          bg='gray.600'
          w='100%'
          h='100%'
          cursor='pointer'
        ></Box>
        <AddIcon
          onClick={() => alert('icon pressed')}
          position='absolute'
          color='white'
          w={24}
          h={24}
          cursor='pointer'
          top='85px'
          left='112px'
        />
        {/* Top right icons Box */}
        <Box
          width={16}
          position='absolute'
          right={2}
          top={2}
          display='flex'
          justifyContent='space-between'
        >
          <ViewIcon cursor='pointer' color='white' w={4} h={4} />
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
    </Box>
  )
}

export default MealCardOverlay
