import { useContext } from 'react'
import SignedInLinks from '../SignedInLinks/SignedInLinks'
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks'
import AuthContext from '../../context/auth/authContext'
import { Box } from '@chakra-ui/layout'
import IconEditMeal from '../Icons/IconEditMeal'

const SideNav = () => {
  const authContext = useContext(AuthContext)

  const { isAuthenicated, loading, token } = authContext

  return (
    <Box
      as='nav'
      bg='gray.100'
      position='fixed'
      bottom='0'
      top='80px'
      borderRight='2px solid'
      borderColor='gray.300'
      width={{
        base: '80px',
        sm: '80px',
        md: '200px',
        lg: '200px',
        xl: '200px',
      }}
    >
      {loading && token ? (
        <></>
      ) : isAuthenicated ? (
        <div>
          <SignedInLinks />
        </div>
      ) : (
        <SignedOutLinks />
      )}
    </Box>
  )
}

export default SideNav
