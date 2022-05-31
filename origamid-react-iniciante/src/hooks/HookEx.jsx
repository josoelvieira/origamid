import React from 'react'
import { useState } from 'react';
import Dados from './Dados';

const HookEx = (props) => {
    const [dados, setDados] = useState(null)
    const [loading, setLoading] = useState(null)

    async function handleClick(e) {
      setLoading(true)
        const reponse = await fetch(`https:ranekapi.origamid.dev/json/api/produto/${e.target.innerText}`)
        const json = await reponse.json()
        setDados(json)
      setLoading(false)
        
    }
  return (
    <div><h1>Excercico useSate</h1>
    <button style={{margin:"5px"}} onClick={handleClick}>notebook</button>
    <button style={{margin:"5px"}} onClick={handleClick}>smartPhone</button>
    <button style={{margin:"5px"}} onClick={handleClick}>tablet</button>
    {loading && <p>Carregando...</p>}
    {!loading && dados && <Dados dados={dados}/>}
    </div>
  )
}

export default HookEx