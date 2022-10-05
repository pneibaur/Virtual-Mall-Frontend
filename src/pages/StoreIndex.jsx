import {React, useState} from 'react'
import { Link } from "react-router-dom"
import ProductCard from '../components/ProductCard'

const StoreIndex = (props) => {
  console.log(props)
const id = props.match.params.id
const store = props.store
const stores = store.find(s => s._id === id)
console.log(stores)

  return (
    <div>
      <h2>Store Index page</h2>
    <h1>{stores.storeName}</h1>
      <ProductCard/>
      <Link to="/product/:id">Link to item details page</Link>
    </div>

  )
}



export default StoreIndex