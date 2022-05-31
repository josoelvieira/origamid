import React from 'react'

const Modal = (props) => {
    if(props.modal === true) {
  return (
    <div><p>Esse e um modal</p>
    <button onClick={() => props.setModal(false)}>x</button></div>
  )}
  return null
}

export default Modal