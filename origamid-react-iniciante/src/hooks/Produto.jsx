import React from 'react'
import { useEffect } from 'react';

const Produtos = () => {

  useEffect(() => {
  function handleScrool(e) {
    console.log(e)
  }
  window.addEventListener("scroll", handleScrool);
  return () => {
    window.removeEventListener("scroll", handleScrool);
  }
}, [])

  return (
    <div style={{height:"200vh"}}>Produtos</div>
  )
}

export default Produtos