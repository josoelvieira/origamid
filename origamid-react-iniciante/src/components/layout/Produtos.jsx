import React from 'react'
import Button from '../form/Button';
import Produto from './Produto'



const Produtos = (props) => {
  
    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ];
  return (
    <ul>
        {produtos.map(produto => ( <><Produto key={produto.nome} {...produto}/>
          <Button nome="Comprar"/></>))}
    </ul>
  )
}

export default Produtos