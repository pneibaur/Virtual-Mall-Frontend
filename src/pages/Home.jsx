import { React, useState } from 'react'
import { Link } from "react-router-dom"
import StoreCard from '../components/StoreCard'
import { Card, Row, Col } from 'react-bootstrap'

const Store = (props) => {

    // state to hold formData
    const [ newForm, setNewForm ] = useState({
        storeName: "",
        storeLogo: "",
    });

    // handleChange function for form
    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }

    // handle submit function for form
    const handleSubmit = event => {
        event.preventDefault();
        props.createStore(newForm);
        setNewForm({
            storeName: "",
            storeLogo: "",
        })
    }

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

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <Row>
            <h1>Stores List</h1>
            {props.store ? loaded() : loading()}
            </Row>
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.storeName}
                    name="storeName"
                    placeholder="Store Name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.storeLogo}
                    name="storeLogo"
                    placeholder="Store Logo"
                    onChange={handleChange}
                />
                <input type="submit" value="Create a new Store" />
            </form>
        </div>
    )
}

export default Store