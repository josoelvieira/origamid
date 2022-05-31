import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'


const Home = () => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <meta name="CVL developer" description="CVL developer desenvolvendo com amor e react" />
      </Helmet>
      <h1>Home</h1>
      <p>Esta e a home</p>
      <span><Link to="produto/notebook">Notebook</Link></span> | <span><Link to="produto/smartphone">Smartphone</Link></span>
      
    </div>
  )
}

export default Home
