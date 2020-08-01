import React, { useState } from 'react'
import IndirectSon from './IndirectSon'

function IndirectFather (props) {
  /* STATE
    const [a, b] = [value, function]
  */

  const [name, setName] = useState('???')
  const [age, setAge] = useState(0)
  const [isGoodPlayer, setIsGoodPlayer] = useState(false)

  function showInformations (name, age, isGoodPlayer) {
    setName(name)
    setAge(age)
    setIsGoodPlayer(isGoodPlayer)
  }

  return (
    <div>
      <div>
        <span>{name} </span>
        <span><strong>{age}</strong></span>
        <span> {isGoodPlayer ? 'Verdadeiro' : 'Falso'}</span>
      </div>
      <IndirectSon whenClick={showInformations} />
    </div>
  )
}

export default IndirectFather
