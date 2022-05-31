import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    function handleClick() {
        console.log('Login')
        navigate('/sobre')
    }

  return (
    <div>
        <h2>Login</h2>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login