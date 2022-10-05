import React from 'react'
import { Link } from "react-router-dom"
import StoreCard from '../components/StoreCard'
import { Card, Row, Col } from 'react-bootstrap'

const Store = (props) => {
    const loaded = () => { 
        return props.store.map((store)=> (
    
    <Card className='p-3 rounded col-3'>
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
    
            ))
        }
        
        
        // <div key={store._id} className="storeFront">
        //     <h1>{store.storeName}</h1>
        //     <Link to={`/store/${store._id}/product`} >Go to store</Link>
        // </div>
       

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <Row>
            <h1>Stores List</h1>
            {props.store ? loaded() : loading()}
            </Row>
        </div>
    )
}

export default Store