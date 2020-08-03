import React, { useState } from 'react'

import './Mega.css'

const Mega = (props) => {

  const whithoutNumber = (min, max, array) => {
    const random = parseInt(Math.random() * (max - min)) + min
    return array.includes(random) ? 
      whithoutNumber(min, max, array) :
      random
  }

  const generateNumber = (quantity) => {
    const number = Array(quantity)
      .fill(0)
      .reduce((num) => {
        const newNumber = whithoutNumber(1, 60, num)
        return [...num, newNumber]
      }, [])
      .sort((n1, n2) => n1 - n2)
      return number
  }

  
  const [qtt, setQtt] = useState(props.quantity || 6)
  const begin = generateNumber(qtt)
  const [numbers, setNumbers] = useState(begin)

  return (
    <div className='Mega'>
      <h2>Mega</h2>
      <h3>{numbers.join(' ')}</h3>
      <div>
        <label>Quantity: </label>
        <input 
          min='6'
          max='15'
          type='number'
          value={qtt}
          onChange={event => {
            setQtt(+event.target.value)
            setNumbers(generateNumber(+event.target.value))
          }}
        />
      </div>
      <button onClick={event => setNumbers(generateNumber(qtt))}>Generate Numbers</button>
    </div>
  )
}

export default Mega
