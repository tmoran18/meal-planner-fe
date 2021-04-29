import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import AuthState from './context/auth/AuthState'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './utils/theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthState>
        <App />
      </AuthState>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
