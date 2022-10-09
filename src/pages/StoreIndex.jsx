import { React, useEffect, useState } from 'react'
import { Link, Route, Switch, useHistory } from "react-router-dom"
import { Card, Row, Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import ProductsDisplayPage from "../pages/ProductsDisplayPage"

const StoreIndex = (props) => {
  // saves store _id to id var.
  const id = props.match.params.id
  const navigate = useHistory()

  // sets product URL and state
  const productURL = `https://warm-fortress-13531.herokuapp.com/store/${id}/product`
  const STORE_URL = `https://warm-fortress-13531.herokuapp.com/store/${id}`
  // const productURL = `http://localhost:4000/store/${id}/product`
  // const STORE_URL = `http://localhost:4000/store/${id}`
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

  // delete Product
  const deleteProduct = async (id) => {
    const confirmed = window.confirm("**WARNING** \r\nThis will delete your product. \r\nAre you sure you want to delete?")
    if (confirmed){
      await fetch(productURL + "/" + id, {
        method: "DELETE"
      })
      getProductList()
    }
  }

  // delete store
  const deleteStore = async () =>{
    const confirmed = window.confirm("***WARNING*** \r\nDELETING A STORE REMOVES ALL OF ITS PRODUCTS \r\nARE YOU SURE YOU WANT TO DELETE?")
    if (confirmed){
      await fetch(STORE_URL, {
        method: "DELETE"
      })
      navigate.replace("/home")
    }
  }

  // sets form state
  const [newForm, setNewForm] = useState({
    productName: "",
    productDescription: "",
    productImage: "",
    creator: "",
    price: "",
    qty: "",
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
      price: "",
      qty: "",
    })
  }

  useEffect(() => {
    getProductList()
  }, [])

  // This code doesn't work, and will fail to reload the page. 
  // const stores = props.store
  // const foundStore = stores.find(s => s._id === id)

  const loaded = () => {
    return productList.map((product) => (
      <Card className='p-3 rounded displayCard' key={product._id}>
        <Link className='link' to={`/store/${id}/product/${product._id}`}>
          <Card.Img src={product.productImage} variant='top' />
          <Card.Body>
            <Card.Title as='h3'>
              <strong>{product.productName}</strong>
            </Card.Title>
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
        <Col>
          <Switch>
            {/* product details page */}
            <Route path="/store/:storeId/product/:prodId" render={(rp) => (
              <ProductsDisplayPage
                productList={productList}
                deleteProduct={deleteProduct}
                storeId={id}
                {...rp} />
            )} />
          </Switch>
        </Col>
        <Col align="end">
          <Link className='link' to={`/home`} >
            <Button className='submit' variant='light'>BACK</Button>
          </Link>
          <Button className="submit" variant='light' onClick={deleteStore}>DELETE STORE</Button>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={4} >
        {productList ? loaded() : loading()}
      </Row>
      <Row>
        <Col className="m-3 py-3 text-center">
          <form className='form' onSubmit={handleSubmit}>
            <fieldset>
              <legend className='legend'>CREATE A NEW PRODUCT</legend>
              <input
                className='inputField'
                type="text"
                value={newForm.productName}
                name="productName"
                placeholder="Product Name"
                onChange={handleChange}
              />
              <input
                className='inputField'
                type="text"
                value={newForm.productDescription}
                name="productDescription"
                placeholder="Product Description"
                onChange={handleChange}
              />
              <input
                className='inputField'
                type="text"
                value={newForm.productImage}
                name="productImage"
                placeholder="Product Image URL"
                onChange={handleChange}
              />
              <input
                className='inputField'
                type="text"
                value={newForm.creator}
                name="creator"
                placeholder="Author/Creator"
                onChange={handleChange}
              />
              <input
                className='inputField'
                type="number"
                value={newForm.price}
                name="price"
                placeholder='$ Price (numbers only)'
                onChange={handleChange}
              />
              <input
                className='inputField'
                type="number"
                value={newForm.qty}
                name="qty"
                placeholder='Product Quantity'
                onChange={handleChange}
              />
              <input className='submit' type="submit" value="Create a new product" />
            </fieldset>
          </form>
        </Col>
      </Row>
    </div>
  )
}



export default StoreIndex