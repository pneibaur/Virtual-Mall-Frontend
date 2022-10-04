import {React, useState} from 'react'
import { Link } from "react-router-dom"
import ProductCard from '../components/ProductCard'

const StoreIndex = (props) => {
  const [store, setStore] = useState(null)

  // STORE DATABASE
  const URL = "https://warm-fortress-13531.herokuapp.com/store/"

  // Grabs store data from url
  const getStore = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setStore(data);
  };
  return (
    <div>
      <h2>Store Index page</h2>
      <ProductCard/>
      <Link to="/product/:id">Link to item details page</Link>
    </div>

  )
}

export default StoreIndex