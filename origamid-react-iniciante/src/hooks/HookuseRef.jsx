import React, { useRef } from 'react'
import { useState } from 'react';

const HookuseRef = () => {
    const [ carrinho, setCarrinho ] = useState(0);
    const [notificacao, setNotificacao] = useState(null);
    const timeOutRef = useRef();

    const [comentarios, setComentarios] = useState([])
    const [input, setInput] = useState('')
    const inputElement = useRef()

    function handleClick() {
        setComentarios([...comentarios, input])
        setInput('')
        inputElement.current.focus()
    }


    function handleCarrinho() {
        setCarrinho(carrinho + 1)
        setNotificacao('Produto adicionado ao carrinho')


        clearTimeout(timeOutRef.current)
        timeOutRef.current = setTimeout(() => {
              setNotificacao(null)
        }, 2000)
    }
  return (
    <div>
        <h1>useRef</h1>
        <ul>
            {comentarios.map((comentario) => (<li key={comentario}>{comentario}</li>))}
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button style={{margin:'5px 0'}} onClick={handleClick}>Enviar</button>
            <hr />
            <p>{notificacao}</p>
            <button onClick={handleCarrinho}>Adicionar ao Carinho {carrinho}</button>
        </ul>
    </div>
  )
}

export default HookuseRef