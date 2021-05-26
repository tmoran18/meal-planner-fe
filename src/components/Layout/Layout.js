import TopNav from '../TopNav/TopNav'
import SideNav from '../SideNav/SideNav'
import Alerts from '../Alerts/Alerts'

import { Flex } from '@chakra-ui/layout'

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <Alerts />
      <SideNav />
      <Flex
        wrap='wrap'
        justifyContent='center'
        p={{
          base: '50px 10px',
          sm: '50px 10px',
          md: '80px',
        }}
        m={{
          base: '80px 0 0 80px',
          sm: '80px 0 0 80px',
          md: '80px 0 0 300px',
          lg: '80px 0 0 300px',
          xl: '80px 0 0 300px',
        }}
      >
        {children}
      </Flex>
    </>
  )
}

export default Layout
//m='80px 0 0 80px'
