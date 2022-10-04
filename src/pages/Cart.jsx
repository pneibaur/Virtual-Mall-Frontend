import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Cart(props){
    const [cart, setCart] = useState(null)

    const URL = "https://warm-fortress-13531.herokuapp.com/cart"
  
    const getCart = async () => {
      const response = await fetch(URL)
      const data = await response.json()
      setCart(data)
    }
  
    const createCart = async(cart)=>{
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(cart)
      })
      getCart()
    }
    useEffect(() =>{
      getCart(); 
    }, [])
    return(
      <div>
        <h1>cart page</h1>
        <Link to="/" ><h3>to landing page</h3></Link>
      </div>
    )
}

export default Cart