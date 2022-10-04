import React from 'react'
import { Link } from "react-router-dom"
import StoreCard from '../components/StoreCard'

const Store = () => {
    return (
        <div>
            <h1>Mall Index Page</h1>
            <div> store card div
                <Link to="/store/:id"> link to store page</Link>
                <StoreCard />
            </div>
        </div>

    )
}

export default Store