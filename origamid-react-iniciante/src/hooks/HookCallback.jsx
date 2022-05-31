import React, { useCallback } from 'react'
import { useState } from 'react';

const HookCallback = () => {
    const [contar, setContar] = useState(0)

    const handleClick = useCallback(() => { 
        setContar((contar) => contar + 1)
    }, [])
  return (
    <div>
        <h1>useCallback</h1>
        <span>{contar}</span>
        <div>
        <button onClick={handleClick}>Inc</button>
        </div>
    </div>
  )
}

export default HookCallback