import React from 'react'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button'

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
          <br />
          <h4>This feature is being worked on, but thanks for checking out this page!</h4>
          <br />
          <Link className='link' to="/" >
            <Button className='submit' variant='light'>
              <h3>BACK</h3>
            </Button>
          </Link>
        </Col>
      </Row>
      <hr />
    </div>
  )
}

export default Cart