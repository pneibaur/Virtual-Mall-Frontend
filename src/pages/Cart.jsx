import React from 'react'
import { useEffect, useState } from "react"

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
}

export default Cart