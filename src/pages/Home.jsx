
import { useState } from 'react'
import { Link } from "react-router-dom"
import StoreCard from '../components/StoreCard'

const Store = (props) => {
    const loaded = () => {
        return props.stores.map(store => (
          <div key={store._id}>
            <Link to={`/store/${store._id}/product`}>
                <h1>{store.storeName}</h1>
            </Link>
          </div>  
        ))
        
    }
    return (
        <div>
            <h1>Mall Index Page</h1>
            <div> store card div
                <Link to="/store/:id/product/"> link to store page</Link>
                <StoreCard />
            </div>
        </div>

    )
}

export default Store