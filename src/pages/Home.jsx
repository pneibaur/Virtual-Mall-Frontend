
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
    }

    const loading = () => {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h1>Stores List</h1>
            {props.store ? loaded() : loading()}
        </div>
    )
}

export default Store