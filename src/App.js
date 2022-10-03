import React from "react";
import { Route, Switch } from "react-router-dom"
import Cart from "./pages/Cart.jsx";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Store from "./pages/Store.jsx"

function App() {
  return (
    <div className="App">
      <h1>Virtual Mall</h1>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/store">
          <Store/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
