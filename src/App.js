import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart.jsx";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home.jsx";
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

  const createApp = async (data) => {
    // make post request to create app
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(data),
    });
    // update list of apps
    getApp();
  };

  useEffect(() => {
    getApp();
  }, []);

  return (
    <div className="App">
      <Header />
      <Container>
        <h1 className="text-center py-3">Virtual Mall</h1>

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
            <Home store={app} createStore={createApp} />
          </Route>
          {/* store page */}
          <Route
            path="/store/:id/product"
            render={(rp) => <StoreIndex store={app} getApp={getApp} {...rp} />}
          />
          {/* product details page */}
          <Route path="/product/:id">
            <ProductsDisplayPage />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
