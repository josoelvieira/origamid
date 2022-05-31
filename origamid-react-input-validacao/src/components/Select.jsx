import React from 'react'

const Select = () => {
    const [select, setSelect] = React.useState('')
  return (
    <form>
        <select value={select} onChange={({target}) => setSelect(target.value)} name="" id="">
            <option disable value="">Selecione</option>
        <option value="Notebook">Notebook</option>
        <option value="Smartphone">Smartphone</option>
        <option value="Tablet">Tablet</option>
        </select>
        {select}
    </form>
  )
}

export default Select