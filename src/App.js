import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import {auth} from "./login/firebase.js"
import { useAuthState } from "react-firebase-hooks/auth";
import Cart from "./pages/Cart.jsx";
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Home from "./pages/Home.jsx";
import StoreIndex from "./pages/StoreIndex.jsx";
import Login from "./login/Login.jsx";
import Register from "./login/Register.jsx";
import Reset from "./login/Reset.jsx";

function App() {
  const [app, setApp] = useState(null);
  const [user, loading] = useAuthState(auth)
  const navigate = useHistory()

  const URL = "https://warm-fortress-13531.herokuapp.com/store/";
  // const URL = "http://localhost:4000/store/";

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
    if (loading) return
    if (!user) {
      return navigate.replace("/login")
    }
  }, [loading, user, navigate]);

  return (
    <div className="App">
      <Header />
      <Container>
        <h1 className="mallTitle text-center py-3">Virtual Mall</h1>
        <hr />
        <Switch>
          {/* Landing page */}
          <Route exact path="/">
            <Landing />
          </Route>
          {/* login page */}
          <Route exact path="/login">
            <Login />
          </Route>
          {/* register new user */}
          <Route exact path="/register">
            <Register />
          </Route>
          {/* reset password */}
          <Route exact path="/reset">
            <Reset />
          </Route>
          {/* Cart page */}
          <Route path="/cart">
            <Cart />
          </Route>
          {/* "mallfront" home page */}
          <Route path="/home">
            <Home getApp={getApp} store={app} createStore={createApp} />
          </Route>
          {/* store page */}
          <Route
            path="/store/:id/product"
            render={(rp) => <StoreIndex store={app} getApp={getApp} {...rp} />}
          />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
