import React from 'react'

const Dados = (props) => {
  return (
    <div>
        <h1>{props.dados.nome}</h1>
        <p>R$: {props.dados.preco}</p>
        <img src={props.dados.fotos[0].src} alt={props.dados.fotos[0].titulo} />
    </div>
  )
}

export default Dados