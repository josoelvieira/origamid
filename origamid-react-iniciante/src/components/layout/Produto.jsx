import React from 'react'

const Produto = ({nome, propriedades}) => {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid red',
        padding: '20px',
    }
  return (
    <div style={style}>
        <p>{nome}</p>
        <ul>
            {propriedades.map(propriedade => (<li key={nome}>{propriedade}</li>))}
        </ul>

    </div>
  )
}

export default Produto