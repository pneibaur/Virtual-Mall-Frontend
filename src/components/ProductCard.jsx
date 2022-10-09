import React from 'react'
import { Card } from 'react-bootstrap'

const ProductCard = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top'/>
        </a>
    <Card.Body>
      <a href={`/product/${product._id}`}>
        <Card.Title as ='div'>
          <strong>{product.name}</strong>
        </Card.Title>
      </a>

      <Card.Text as="div">
        <div className='my-3'>
          Add Text Here
        </div>
      </Card.Text>

      <Card.Text as="h3">
        Add Text Here
      </Card.Text>
    </Card.Body>
    </Card>
  )
}

export default ProductCard