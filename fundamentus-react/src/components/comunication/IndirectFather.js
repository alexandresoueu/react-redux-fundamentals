import React from 'react'
import IndirectSon from './IndirectSon'

function IndirectFather(props) {
  let name = '???'
  let age = 0
  let isGoodPlayer = false

  function showInformations(nameParam, ageParam, isGoodPlayerParam) {
    name = nameParam
    age = ageParam
    isGoodPlayer = isGoodPlayerParam
    console.log('data:: ', nameParam, ageParam, isGoodPlayerParam)
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span><strong>{age}</strong></span>
        <span>{isGoodPlayer}</span>
      </div>
      <IndirectSon whenClick={showInformations} />
    </div>
  )
}

export default IndirectFather
