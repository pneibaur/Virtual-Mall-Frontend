import { React, useState } from 'react'
import { Link } from "react-router-dom"
import { Card, Row, Col } from 'react-bootstrap'

const Store = (props) => {

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

    const loaded = () => {
        return props.store.map((store) => (
            <Card className='p-3 rounded col-3' key={store._id}>
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
                <h1>Stores List</h1>
                {props.store ? loaded() : loading()}
            </Row>

            <Row>
                <Col className='m-3 py-3 col-12 text-center'>
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
                            value={newForm.storeDescription}
                            name="storeDescription"
                            placeholder='Brief Description'
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
                </Col>
            </Row>
        </div>
    )
}

export default Store