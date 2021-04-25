import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from './context/auth/authContext'
import MealState from './context/meal/MealState'
import IngredientState from './context/ingredient/IngredientState'
import AlertState from './context/alert/AlertState'
import setAuthToken from './utils/setAuthToken'

import PrivateRoute from './components/routing/PrivateRoute'
import Meals from './components/pages/meals'
import CreateIngredient from './components/pages/create-ingredient'
import CreateMeal from './components/pages/create-meal'
import EditIngredient from './components/pages/edit-ingredient'
import Ingredients from './components/pages/ingredients'
import Login from './components/pages/login'
import Register from './components/pages/register'
import ShoppingList from './components/pages/shopping-list'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  const authContext = useContext(AuthContext)
  const { isAuthenticated, loading, token } = authContext
  return (
    <AlertState>
      <MealState>
        <IngredientState>
          <Router>
            <Switch>
              <PrivateRoute
                exact
                path='/'
                component={Meals}
                isAuthenticated={isAuthenticated}
                loading={loading}
                token={token}
              />
              <PrivateRoute
                exact
                path='/create-ingredient'
                component={CreateIngredient}
              />
              <PrivateRoute
                exact
                path='/create-meal'
                component={CreateMeal}
                loading={loading}
                token={token}
              />
              <PrivateRoute
                exact
                path='/edit-ingredient'
                component={EditIngredient}
                loading={loading}
                token={token}
              />
              <PrivateRoute
                exact
                path='/ingredients'
                component={Ingredients}
                loading={loading}
                token={token}
              />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute
                exact
                path='/shopping-list'
                component={ShoppingList}
                loading={loading}
                token={token}
              />
            </Switch>
          </Router>
        </IngredientState>
      </MealState>
    </AlertState>
  )
}

export default App
