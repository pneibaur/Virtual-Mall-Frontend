import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Home from "./pages/Home.jsx"
import ProductsDisplayPage from "./pages/ProductsDisplayPage.jsx";
import StoreIndex from "./pages/StoreIndex.jsx";

function App() {
  const [app, setApp] = useState(null);

  const URL = "https://warm-fortress-13531.herokuapp.com/store/";

  const getApp = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setApp(data);
  };
  //
  useEffect(() => {
    getApp();
  }, []);

  return (
    <div className="App">
      <Header/>
      <Container>
      <h1 className='text-center py-3'>Virtual Mall</h1>
      </Container>
      <Switch>
        {/* Landing page */}
        <Route exact path="/">
          <Landing />
        </Route>
        {/* Cart page */}
        <Route path="/cart">
          <Cart />
        </Route>
        {/* "mallfront" home page */}
        <Route path="/home">
          <Home store={app} />
        </Route>
        {/* store page */}
        <Route path="/store/:id/product/">
          <StoreIndex />
        </Route>
        {/* product details page */}
        <Route path="/product/:id">
          <ProductsDisplayPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}
// landing, mallfront,       storefront,            product details
// "/"       "/store"     "/store/:id/product" "/store/:id/product/:id"

export default App;