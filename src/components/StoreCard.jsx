import React from 'react'
import { Card } from 'react-bootstrap'

const StoreCard = ({ store }) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/store/${store._id}/product`}>
          <Card.Img src={store.image} variant='top'/>
        </a>
    <Card.Body>
      <a href={`/store/${store._id}/product`}>
        <Card.Title as ='div'>
          <strong>{store.storeName}</strong>
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

export default StoreCard