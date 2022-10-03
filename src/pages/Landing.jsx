import React from 'react'
import Store from './Store.jsx'
import Cart from './Cart.jsx'

const Landing = () => {
  return (
    <div className='landing'>
        <h1>Welcome to Virtual Mall</h1>
        <Store />
        <Cart />
    </div>
  )
}

export default Landing