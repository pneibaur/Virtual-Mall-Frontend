<<<<<<< HEAD

import React from 'react'
import { Link } from "react-router-dom"

const Store = (props) => {
    console.log("this is props ")
    console.log(props)

    const loaded = () => {
        return props.store.map((store)=> (
                <div key={store._id} className="storeFront">
                    <h1>{store.storeName}</h1>
                    <Link to={`/store/${store._id}/product`} >Go to store</Link>
                </div>
            ))
=======
import { React, useState } from 'react'
import { Link } from "react-router-dom"

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
        return props.store.map((store) => (
            <div key={store._id} className="storeFront">
                <h1>{store.storeName}</h1>
                <Link to={`/store/${store._id}/product`} >Go to store</Link>
            </div>
        ))
>>>>>>> a952e5fda68362f741390c57cc620321805a2a43
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>Stores List</h1>
            {props.store ? loaded() : loading()}
<<<<<<< HEAD
=======

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
>>>>>>> a952e5fda68362f741390c57cc620321805a2a43
        </div>
    )
}

export default Store