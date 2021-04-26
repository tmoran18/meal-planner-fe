import axios from 'axios'

// Token is set globally so Axios can use the current token in its header
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.defaults.headers.common['x-auth-token']
  }
}

export default setAuthToken
