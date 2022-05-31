import React, { useState } from 'react'

const Radio = () => {
    const [radio, setRadio] = useState('')

    function handleChange(e) {
        setRadio(e.target.value)
    }
  return (

        <form >
            {radio}
            <label>
                <input type="radio" 
                value="Notebook" onChange={handleChange} name='produto'
                />Notebook
            </label>
            <label>
                <input type="radio"
                value="Desktop" onChange={handleChange} name='produto'
                />Desktop
            </label>
        </form>
  )
}

export default Radio