import React from 'react'
import Cart from './Cart.jsx'
import { Route, Switch, Link } from "react-router-dom"
import Store from './Store'
import StoreIndex from '../components/StoreIndex.jsx'


function Landing(props){

  return(
    <main>
      <h3>LANDING PAGE</h3>
      <Link to="/store"><h5>link to enter mall</h5></Link>
      <Link to="/cart"><h5>link to cart</h5></Link>
      <Switch>
        <Route exact path="/">
          <StoreIndex />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/store/:id">
          <Store />
        </Route>
      </Switch>
    </main>
  )
}

export default Landing