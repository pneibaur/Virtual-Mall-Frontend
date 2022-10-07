import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col, Button } from "react-bootstrap"

function Cart(props) {
  const [cart, setCart] = useState(null)

  const URL = "https://warm-fortress-13531.herokuapp.com/cart"

  const getCart = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setCart(data)
  }

  const createCart = async (cart) => {
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(cart)
    })
    getCart()
  }
  useEffect(() => {
    getCart();
  }, [])
  return (
    <div className='cart'>
      <Row>
        <Col className='text-center'>
          <h2>YOUR CART</h2>
          <Button className='submit' variant='light'>
            <Link className='link' to="/" ><h3>BACK</h3></Link>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Cart