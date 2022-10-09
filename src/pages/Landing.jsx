import React from 'react'
import { Link } from "react-router-dom"
import { Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"


function Landing(props) {

  return (
    <div className='landing'>
      <Row>
        <Col className='text-center'>
          <h1>WELCOMES YOU</h1>
          <br /><br />
          <h3>To the best place for your shopping needs</h3>
        </Col>
      </Row>
      <Row>
        <Col className='text-center'>
          <Link className='link' to="/home">
            <Button className='submit' variant="light">
              <h5>ENTER MALL</h5>
            </Button>
          </Link>
          <Link className='link' to="/cart">
            <Button className='submit' variant='light'>
              <h5>YOUR CART</h5>
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default Landing