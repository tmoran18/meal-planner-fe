import { useContext, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthState from './context/auth/AuthState'
import MealState from './context/meal/MealState'
import IngredientState from './context/ingredient/IngredientState'
import AlertState from './context/alert/AlertState'
import Layout from './components/Layout/Layout'
import setAuthToken from './utils/setAuthToken'

import PrivateRoute from './components/routing/PrivateRoute'
import Meals from './pages/meals'
import CreateIngredient from './pages/create-ingredient'
import CreateMeal from './pages/create-meal'
import EditIngredient from './pages/edit-ingredient'
import Ingredients from './pages/ingredients'
import Login from './pages/login'
import Register from './pages/register'
import ShoppingList from './pages/shopping-list'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <MealState>
          <IngredientState>
            <Router>
              <div>
                <Switch>
                  <Layout>
                    <PrivateRoute exact path='/' component={Meals} />
                    <Route
                      exact
                      path='/create-ingredient'
                      component={CreateIngredient}
                    />
                    <Route exact path='/create-meal' component={CreateMeal} />
                    <Route
                      exact
                      path='/edit-ingredient'
                      component={EditIngredient}
                    />
                    <Route exact path='/ingredients' component={Ingredients} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route
                      exact
                      path='/shopping-list'
                      component={ShoppingList}
                    />
                  </Layout>
                </Switch>
              </div>
            </Router>
          </IngredientState>
        </MealState>
      </AlertState>
    </AuthState>
  )
}

export default App
