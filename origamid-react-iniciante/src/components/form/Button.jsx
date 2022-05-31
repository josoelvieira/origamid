import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button onClick={() => props.setModal(true)}>{props.nome}</button>
    </div>
  )
}

export default Button
