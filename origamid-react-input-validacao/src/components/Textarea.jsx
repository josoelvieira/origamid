import React, {useState} from 'react'

const Textarea = () => {
    const [textarea, setTextarea] = useState('')
  return (
    <div>
        <textarea 
        value={textarea} 
        onChange={({target}) => setTextarea(target.value)} rows="10"
        />
        {textarea}
    </div>
  )
}

export default Textarea