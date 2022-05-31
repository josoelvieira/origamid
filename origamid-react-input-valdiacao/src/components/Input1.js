import React from 'react'
import { useState } from 'react';

const Input1 = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e){
        e.prevetDafult()
  }
  return (
    <div>
      <form  className="form" action="" onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
        <input 
        type="text" 
        id="nome" 
        onclick={nome} 
        name="nome"
        onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input 
        type="email"
        id="email"
        onClick={email} 
        name="email"
        onChange={(e) => setEmail(e.target.value)}/>
        <button>Enviar</button>
        </form>
    </div>
  )
}

export default Input1
