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
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>Stores List</h1>
            {props.store ? loaded() : loading()}

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