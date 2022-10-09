import React, { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../login/firebase.js";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useHistory, Link } from "react-router-dom"

const Header = () => {

  const [user, loading] = useAuthState(auth)
  const [name, setName] = useState("")
  const navigate = useHistory()
  const firstName = name.split(" ")[0]

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

  function UserGreet() {
    if (user) return <Nav.Item>Welcome {firstName}</Nav.Item>
  }
  
  function LoginLogout() {
    if (user) {
      return <Nav.Item onClick={logout}><Link className='link'>LOGOUT</Link></Nav.Item>
    } else return <Nav.Item><Link className='link' to="/login">LOGIN</Link></Nav.Item>
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
        <Navbar.Brand><Link className='link' to={`/`} >Virtual Mall</Link></Navbar.Brand>
        {<UserGreet/>}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item className="navList">
              <Link className="link" to="/cart">
                <i className="fas fa-shopping-cart"></i> Cart
              </Link>
            </Nav.Item>
            {<LoginLogout/>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default Header