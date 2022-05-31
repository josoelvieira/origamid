import React, { useState } from 'react'
const coresArray = ['vermelho', 'azul', 'verde', 'amarelo', 'preto', 'branco'];
const CheckboxEx = () => {
    
    const [cores, setCores] = useState([]);

    function handleChange({ target }) {
        if (target.checked) {
            setCores([...cores, target.value]);
        } else {
            setCores(
                cores.filter((cor) => cor !== target.value)
            );
        }
    }
  return (
    <div>
        <h2>Checkbox Exercicios</h2>
        <form action="">
            {coresArray.map((cor) => (
            <label key={cor}>
                <input
                type="checkbox"
                value={cor}
                checked={cores.includes(cor)}
                onChange={handleChange}
                />{cor}
                </label>
        ))}
        </form>
        
    </div>
  )
}

export default CheckboxEx