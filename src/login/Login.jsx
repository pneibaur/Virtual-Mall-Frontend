import React, { useEffect, useState } from 'react'
import { Link, useHistory } from "react-router-dom"
import { auth, signInWithGoogle, logInWithEmailAndPassword } from "./firebase.js"
import { useAuthState } from "react-firebase-hooks/auth"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const navigate = useHistory()

    useEffect(() => {
        if (loading) return
        if (user) {
            navigate.replace("/")
        }
        if (error) {
            console.log("from Login.jsx: Oops, there's an error: ", error)
        }
    }, [user, loading])

    return (
        <div className='loginDiv' >
            <div className="login">
                <br />
                <strong>LOGIN TO YOUR EXISTING ACCOUNT</strong>
                <input
                    type="text"
                    className="loginText loginItem"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address" />
                <input
                    type="password"
                    className="loginText loginItem"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                <button className="loginBtn loginItem" onClick={() => logInWithEmailAndPassword(email, password)}>
                    LOGIN
                </button>
                <div className=" loginItem">
                    Forgot password? <Link to="/reset">Click here to reset</Link>
                </div>
                <hr />
                <strong>OR</strong>
                <button className="loginBtn loginGoogle loginItem" onClick={signInWithGoogle}>
                    <img className="loginIcon" src="https://i.imgur.com/rH23FXe.png" alt="Google-Icon" />    LOGIN WITH GOOGLE
                </button>
                <hr />
                <div className=" loginItem">
                    Don't have an account?
                </div>
                <div className="">
                    <Link className="link" to="/register">
                        <button className="loginBtn loginItem">REGISTER NEW USER</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login