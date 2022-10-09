import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from "./firebase.js";

function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const history = useHistory()

    const register = () => {
        if (!name) alert("Please enter name")
        registerWithEmailAndPassword(name, email, password)
    };
    useEffect(() => {
        if (loading) return
        if (user) history.replace("/")
    }, [user, loading])
    return (
        <div className="loginDiv">
            <div className="login">
                <br />
                <strong>REGISTER NEW USER</strong>
                <input type="text" className="loginText loginItem" value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" />
                <input type="text" className="loginText loginItem" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail Address" />
                <input type="password" className="loginText loginItem" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button className="loginBtn loginItem" onClick={register}> Register New User</button>
                <hr />
                <div>
                    <strong>OR</strong>
                </div>
                <button className="loginBtn loginItem loginGoogle" onClick={signInWithGoogle}>
                    <img className="loginIcon" src="https://i.imgur.com/rH23FXe.png" alt="Google-Icon" />    New User
                </button>
                <hr />
                <div>
                    Already have an account? <Link to="/login">Login</Link> here!
                </div>
                <br />
            </div>
        </div>
    );
}
export default Register;