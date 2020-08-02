import React, {useState} from 'react'

import './Input.css'

const Input = (props) => {
  const [value, setValue] = useState('Digita ai bulba....')

  const whenChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className="Input" >
      <h2>{value}</h2>
    <input value={value} onChange={whenChange} />
    <input value={value} readyOnly />
    <input value={undefined} />
    </div>
  )
}

export default Input
