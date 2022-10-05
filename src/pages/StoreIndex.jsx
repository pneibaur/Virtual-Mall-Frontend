import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Card, Row } from "react-bootstrap"
const StoreIndex = (props) => {
  // saves store _id to id var.
  const id = props.match.params.id
  
  // sets product URL and state
  const productURL = `https://warm-fortress-13531.herokuapp.com/store/${id}/product`
  const [productList, setProductList] = useState(null)
  

  // API call to get all products
  const getProductList = async () => {
    const response = await fetch(productURL)
    const data = await response.json(response)
    setProductList(data)
  }

  useEffect(() => {
    getProductList()
  }, [])

  // filters all store props and matches to current store. 
  const store = props.store
  const stores = store.find(s => s._id === id)

  const loaded = () => {
    return stores.productList.map((product) => (
      <Card className='p-3 rounded col-3' key={product._id}>
        <Link className='link' to={`#`}>
          <Card.Img src={product.productImage} variant='top' />
          <Card.Body>
            <Card.Title as='div'>
              <strong>{product.productName}</strong>
            </Card.Title>

            <Card.Text as="div">
              <div className='my-3'>
                Add Text Here
              </div>
            </Card.Text>

            <Card.Text as="h3">
              Add Text Here
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
      <h1>{stores.storeName}</h1>
      <Row>
        {stores ? loaded() : loading()}
        {/* <ProductCard /> */}
      </Row>
    </div>

  )
}



export default StoreIndex