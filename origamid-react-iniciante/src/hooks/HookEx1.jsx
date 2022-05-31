import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Produto1 from './Produto1';

const HookEx1 = () => {
    const [produto, setProduto] = useState(null)

    useEffect(() => {
        const produtoLocal = window.localStorage.getItem('produto')
        if(produtoLocal !== null) { setProduto(produtoLocal) }
    }, [])

    useEffect(() => {
        if(produto !== null) {
        window.localStorage.setItem("produto", produto)
    }},[produto])

    function handleClick(e) {
        setProduto(e.target.innerText)
    }

  return (
    <div>
        <h1>useEffect exercicio</h1>
        <h2>Preferencia: {produto}</h2>
        <button style={{margin:"5px"}} onClick={handleClick}>Notebook</button>
        <button style={{margin:"5px"}} onClick={handleClick}>Smartphone</button>
        <Produto1 produto={produto}/>
    </div>
  )
}

export default HookEx1