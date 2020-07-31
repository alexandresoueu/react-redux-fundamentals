import React from 'react'

function DirectSon (props) {
  return (
    <div>
      <span>{props.name} </span>
      <span><strong>{props.age} </strong></span>
      <span>{props.goodPlayer ? 'True' : 'False'}</span>
    </div>
  )
}

export default DirectSon
