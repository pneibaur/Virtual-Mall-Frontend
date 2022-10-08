import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";


function Reset() {

    const [email, setEmail] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const navigate = useHistory()

    useEffect(() => {
        if (loading) return
        if (user) navigate.replace("/")
    }, [user, loading])

    return (
        <div className="loginDiv">
            <div className="login">
                <br />
                <input
                    type="text"
                    className="loginText loginItem"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"/>
                <button
                    className="loginBtn loginItem"
                    onClick={() => sendPasswordReset(email)}>
                    Send password reset email
                </button>
                <hr />
                <div>
                    Don't have an account? <Link to="/register">Register</Link> here.
                </div>
                <br />
            </div>
        </div>
    );
}
export default Reset;