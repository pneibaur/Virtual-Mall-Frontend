import { React, useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { Card, Row, Col } from "react-bootstrap"
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

  // create new product
  const createProduct = async (data) => {
    await fetch(productURL, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data)
    })
    getProductList()
    // props.history.push(`/store/${id}/product`)
    // window.location.reload(false)
  }

  // sets form state
  const [newForm, setNewForm] = useState({
    productName: "",
    productDescription: "",
    productImage: "",
    creator: "",
    price: 0,
    qty: 0,
  })

  //  handle any form changes
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

  // handle the submit form
  const handleSubmit = (event) => {
    event.preventDefault()
    createProduct(newForm)
    setNewForm({
      productName: "",
      productDescription: "",
      productImage: "",
      creator: "",
      price: 0,
      qty: 0,
    })
  }

  useEffect(() => {
    getProductList()
  }, [])

  // filters all stores and matches to current store. 
  // THIS PIECE OF SHIT CODE COST ME 8 HOURS OF MY LIFE
  // const stores = props.store
  // const foundStore = stores.find(s => s._id === id)

  const loaded = () => {
    return productList.map((product) => (
      <Card className='p-3 rounded col-3' key={product._id}>
        <Link className='link' to={`#`}>
          <Card.Img src={product.productImage} variant='top' />
          <Card.Body>
            <Card.Title as='h3'>
              <strong>{product.productName}</strong>
            </Card.Title>

            <Card.Text as="div">
              {product.productDescription}
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
      <Row>
        {productList ? loaded() : loading()}
      </Row>
      <Row>
        <Col className="m-3 py-3 col-12 text-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newForm.productName}
              name="productName"
              placeholder="Product Name"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.productDescription}
              name="productDescription"
              placeholder="Product Description"
              onChange={handleChange}
            />
            <input
              type="text"
              value={newForm.productImage}
              name="productImage"
              placeholder="Product Image URL"
              onChange={handleChange}
            />
            <input
              type="number"
              value={newForm.price}
              name="price"
              placeholder='$ (numbers only)'
              onChange={handleChange}
            />
            <input
              type="number"
              value={newForm.qty}
              name="qty"
              placeholder='Product Quantity'
              onChange={handleChange}
            />
            <input type="submit" value="Create a new product" />
          </form>
        </Col>
      </Row>
    </div>
  )
}



export default StoreIndex