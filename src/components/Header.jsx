<<<<<<< Updated upstream
import React from 'react'
=======
import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../login/firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useHistory, Link } from "react-router-dom"
>>>>>>> Stashed changes

const Header = () => {
  return (
<<<<<<< Updated upstream
    <nav>HEADER NAVBAR</nav>
  )
=======
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Virtual Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Link className="link" to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            </Nav.Item>
            {<UserCheck isLoggedIn={user} />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
>>>>>>> Stashed changes
}

export default Header