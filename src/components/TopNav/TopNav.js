import { useContext, useState } from 'react'
import AuthContext from '../../context/auth/authContext'
import MealContext from '../../context/meal/mealContext'
import { useHistory, Link } from 'react-router-dom'

import { Box, Flex, Heading, Link as ChakraLink } from '@chakra-ui/layout'
import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { useMediaQuery } from '@chakra-ui/media-query'

const TopNav = () => {
  const authContext = useContext(AuthContext)
  const mealContext = useContext(MealContext)
  const [logoSize, setLogoSize] = useState('desktop')
  const [isMobile] = useMediaQuery('(max-width: 765px)')

  const { user, logout, isAuthenicated, loading, token } = authContext
  const { clearMeals } = mealContext

  let history = useHistory()

  const onSignOut = () => {
    logout()
    clearMeals()
    history.push('/login')
  }

  return (
    <Flex
      justify='space-between'
      align='center'
      bg='gray.100'
      position='fixed'
      top='0'
      left='0'
      right='0'
      boxSizing='border-box'
      p='0px 25px'
      borderBottom='2px solid'
      borderColor='gray.300'
      h='80px'
      zIndex='100'
    >
      {!isMobile ? (
        <Heading as='h2' size='lg' color='gray.500' fontWeight='300'>
          MEAL <span style={{ fontWeight: 500 }}>PLANNER</span>
        </Heading>
      ) : (
        <Heading as='h2' size='lg' color='gray.500' fontWeight='300'>
          M<span style={{ fontWeight: 500 }}>P</span>
        </Heading>
      )}

      <Box color='gray.500' fontWeight='500' display='flex' alignItems='center'>
        {user ? (
          <Box display='flex' alignItems='center'>
            <ChakraLink onClick={onSignOut}>Sign Out</ChakraLink>
            <Avatar ml='25px' name={user.name} />
          </Box>
        ) : (
          <Box>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Sign In</Link>
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default TopNav
