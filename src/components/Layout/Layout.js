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
      <Flex wrap='wrap' justifyContent='center' p='80px' m='80px 0 0 300px'>
        {children}
      </Flex>
    </>
  )
}

export default Layout
