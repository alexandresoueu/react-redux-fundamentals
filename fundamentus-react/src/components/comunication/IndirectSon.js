import React from 'react'

function IndirectSon (props) {
  return (
    <div>
      <div>SON</div>
      <button onClick={e => props.whenClick('Julius', 44, true)} > Informations</button>
    </div>
  )
}

export default IndirectSon
