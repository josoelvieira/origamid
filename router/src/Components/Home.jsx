import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Esta e a home</p>
      <span><Link to="produto/notebook">Notebook</Link></span> | <span><Link to="produto/smartphone">Smartphone</Link></span>
    </div>
  )
}

export default Home
