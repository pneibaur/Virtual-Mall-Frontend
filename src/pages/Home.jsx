import React from 'react'
import { Link, Switch, Route } from "react-router-dom"
import StoreIndex from './StoreIndex'

const Store = (props) => {
    console.log("this is props ")
    console.log(props)
    // this will be receiving props from app.js, and I can map out the different stores from here. 
    const loaded = () => {
        return props.store.map((store) => {
            <div className="storefront" key={store._id}>
                <Link to={`/store/${store._id}/product/`}>
                    <h2>{store.storeName}</h2>
                    <img src={store.storeLogo} alt={store.storeName} />
                </Link>
            </div>
        })
    }
    const loading = () => {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h1>Mall Index Page</h1>
            {/* temporary link: will be deleted later */}
            <Link to="/store/:id/product/">to store page</Link>
            {/* below is commented out until app.js makes a successful api call. */}
            {/* {props.store ? loaded() : loading()} */}
        </div>
    )
}

export default Store