import React from 'react'
import Cart from './Cart.jsx'
import { Route, Switch } from "react-router-dom"

function Landing(props){

  return(
    <main>
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </main>
  )
}

export default Landing