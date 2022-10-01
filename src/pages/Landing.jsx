import React from 'react'
import ArtStore from './ArtStore'
import BookStore from './BookStore'
import MovieStore from './MovieStore'
import SportStore from './SportStore'

const Landing = () => {
  return (
    <div className='landing'>
        <h1>Welcome to Virtual Mall</h1>
        <BookStore/>
        <SportStore/>
        <ArtStore/>
        <MovieStore/>
    </div>
  )
}

export default Landing