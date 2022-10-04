import {React, useState} from 'react'
import { Link } from "react-router-dom"
import ProductCard from '../components/ProductCard'



const StoreIndex = (props) => {
const id = props.match.params.id
const stores = props.store
const store = store.find(s => s._id === id)
  return (
    <div>
      <h2>Store Index page</h2>
          {store.storeLogo}
    <h1>{store.storeName}</h1>
      <ProductCard/>
      <Link to="/product/:id">Link to item details page</Link>
    </div>

  )
}

export default StoreIndex