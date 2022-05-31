import React, { useState } from 'react'

const Checkbox = () => {
    const [termos, setTermos] = useState(false)

    function handleChange(e) {
        setTermos(e.target.checked)
    }
  return (
    <div>
        <form >
            {termos && <p>Você concorda com os termos</p>}
            <label>
                <input type="checkbox" 
                value="termos"
                checked={termos}
                onChange={handleChange}/>
                
                Aceito os termos
            </label>
        </form>
    </div>
  )
}

export default Checkbox