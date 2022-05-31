import React from 'react'

const Radio = ({options, value, setValue, ...props}) => {
  return (
    <>
    {options.map((option) => (<label key={option} htmlFor="">
        <input type="radio" value={option} checked={value === option} onChange={({target}) => setValue(target.value)} {...props}/>{option}
        
    </label>))}
    
    
    </>
  )
}

export default Radio