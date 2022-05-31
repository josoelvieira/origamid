import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Produto1 = ({produto}) => {
    const [dados, setDados] = useState(null)

    useEffect(() => {
        if(produto !== null) 
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then(response => response.json())
        .then(json => setDados(json))

    },[produto])

    if(dados === null) return null
  return (

    <div>
        <h1>Produto</h1>
        <p>{dados.nome}</p>
        <p>R$ {dados.preco}</p>
    </div>
  )
}

export default Produto1