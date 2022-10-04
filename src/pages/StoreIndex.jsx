import React from 'react'
import { Link } from "react-router-dom"
import ProductCard from '../components/ProductCard'

const StoreIndex = () => {
  return (
    <div>
      <h2>Store Index page</h2>
      <ProductCard/>
      <Link to="/store/:id/products/:id">Link to item details page</Link>
    </div>

  )
}

export default StoreIndex