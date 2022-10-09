import React from 'react'
import { Card, Row, Col, Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { Link } from 'react-router-dom'

const ProductsDisplayPage = (props) => {
  const id = props.match.params.prodId
  const prodList = props.productList
  const foundProduct = prodList.find(p => p._id === id)

  const removeProduct = () => {
    props.deleteProduct(foundProduct._id)
    props.history.push(`/store/${props.storeId}/product`)
  }

  return (
    <Container>
      <Row xs={1} className='justify-content-md-center'>
        <Col>
          <Card className='rounded p-3 productDisplay' >
            <Card.Img src={foundProduct.productImage} variant='top' />
            <Card.Body className='text-center'>
              <Card.Title as='h3'>
                <strong>{foundProduct.productName}</strong>
              </Card.Title>

              <Card.Text as="div">
                Description: {foundProduct.productDescription}
              </Card.Text>

              <Card.Text as="div">
                {foundProduct.creator}
              </Card.Text>
              <Card.Text as="div">
                Price: ${foundProduct.price}
              </Card.Text>
              <Card.Text as="div">
                In Stock: {foundProduct.qty}
              </Card.Text>
              <Button className='rounded btn' variant='success'>ADD TO CART</Button>
              <Button className='rounded btn' onClick={removeProduct} variant='danger'>DELETE</Button>
              <Link to={`/store/${id}/product`} >
                <Button className='rounded btn' variant='outline-dark'>EXIT VIEWER</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </Container>
  )
}

export default ProductsDisplayPage