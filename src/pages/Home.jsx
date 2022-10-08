import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Card, Row, Col } from 'react-bootstrap'

const Store = (props) => {

    const getStores = props.getApp

    // state to hold formData
    const [newForm, setNewForm] = useState({
        storeName: "",
        storeLogo: "",
        storeDescription: "",
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
            storeDescription: ""
        })
    }

    useEffect(() =>{
        getStores()
    }, [])

    const loaded = () => {
        return props.store.map((store) => (
            <Card className='p-3 rounded displayCard' sm={12} key={store._id}>
                <Link className='link' to={`/store/${store._id}/product`}>
                    <Card.Img src={store.storeLogo} variant='top' />
                    <Card.Body>
                        <Card.Title as='h3'>
                            <strong>{store.storeName}</strong>
                        </Card.Title>

                        <Card.Text as="div">
                            <div className='my-3'>
                                {store.storeDescription}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        ))
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <Row>
                <Col className='text-center'>
                    <h1>STORES</h1>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={4} >
                {props.store ? loaded() : loading()}
            </Row>

            <Row>
                <Col className='m-3 py-3 text-center'>
                    <form className='form' onSubmit={handleSubmit}>
                        <fieldset>
                            <legend className='legend'>CREATE A NEW STORE</legend>
                            <input
                                className='inputField'
                                type="text"
                                value={newForm.storeName}
                                name="storeName"
                                placeholder="Store Name"
                                onChange={handleChange}
                            />
                            <input
                                className='inputField'
                                type="text"
                                value={newForm.storeDescription}
                                name="storeDescription"
                                placeholder='Brief Description'
                                onChange={handleChange}
                            />
                            <input
                                className='inputField'
                                type="text"
                                value={newForm.storeLogo}
                                name="storeLogo"
                                placeholder="Store Logo"
                                onChange={handleChange}
                            />
                            <input className='submit' type="submit" value="Create a new Store" />
                        </fieldset>
                    </form>
                </Col>
            </Row>
        </div>
    )
}

export default Store