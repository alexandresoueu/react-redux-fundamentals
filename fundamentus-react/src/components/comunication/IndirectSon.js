import React from 'react'

function IndirectSon (props) {
  const randomAge = () => parseInt(Math.random() * (20)) + 50
  const randomGoodPlayer = () => Math.random() > 0.5

  return (
    <div>
      <div>SON</div>
      <button onClick={e => props.whenClick('Julius', randomAge(), randomGoodPlayer())}> Informations</button>
    </div>
  )
}

export default IndirectSon
