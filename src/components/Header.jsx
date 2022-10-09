import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../login/firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useHistory } from "react-router-dom"

const Header = () => {

  const [user, loading, error] = useAuthState(auth)
  const [name, setName] = useState("")
  const navigate = useHistory()

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid))
      const doc = await getDocs(q)
      const data = doc.docs[0].data()
      setName(data.name)
    } catch (err) {
      alert("dashboard - An error occured while fetching user data")
      logout()
      console.error(err)
    }
  };

  function User() {
    return <Nav.Item>Welcome {name} <Nav.Link onClick={logout}>LOGOUT</Nav.Link></Nav.Item>
  }
  function Guest() {
    return <Nav.Link href="/login"><i className="fas fa-user"></i>Sign In</Nav.Link>
  }

  const UserCheck = (props) => {
    const loggedIn = props.isLoggedIn
    if (loggedIn) {
      return <User />
    } else return <Guest />
  }

  useEffect(() => {
    if (loading) return
    if (!user) {
      return navigate.replace("/login")
    }
    fetchUserName()
  }, [user, loading])

  return (
    <Navbar bg="light" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Virtual Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/cart"><i className="fas fa-shopping-cart"></i>
                Cart</Nav.Link>
            </Nav.Item>
            {<UserCheck isLoggedIn={user} />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default Header