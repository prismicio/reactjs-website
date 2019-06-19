import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <h2>Document not found</h2>
      <p><Link to='/'>Return to homepage</Link></p>
    </div>
  )
}

export default NotFound
