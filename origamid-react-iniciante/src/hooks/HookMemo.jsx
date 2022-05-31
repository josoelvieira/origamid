import React, { useMemo } from 'react'
import { useState } from 'react';

function operacaoLenta() {
  let c;
  for(let i= 0; i< 1000000; i++){
    c = i + i/ 10
  }
  return c;
}
const HookMemo = () => {
    const [contar, setContar] = useState(0)
    // const valor = useMemo(() => {
    //   const localItem = window.localStorage.getItem('produto')
    //   console.log('Aconteceu o memo')
    //   return localItem
    // },[])
    const t1 = performance.now()
    const valor = useMemo(() => operacaoLenta(),[])
    console.log(valor)
    console.log(performance.now() - t1)

  return (
    <div>
        <h1>useMemo</h1>

        <span>{contar}</span>
        <div>
        <button style={{marginRight:"5px"}}onClick={() => setContar(contar + 1)}>Inc</button>
        <button onClick={() => setContar(contar - 1)}>Dec</button>


        </div>
    </div>
  )
}

export default HookMemo