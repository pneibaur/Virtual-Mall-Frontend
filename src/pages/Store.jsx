import React from 'react'
import { Link } from "react-router-dom"

const Store = () => {
    return (
        <div>
            <h1>STORE INDEX PAGE</h1>
            <Link to="/store/:id"> link to individual store page</Link>
        </div>

    )
}

export default Store