import React from 'react'

function Random(props) {

  const { min, max } = props
  const random = parseInt(Math.random() * (max - min) + min )

  return (
    <div>
      <h2>Random value:</h2>
      <p><strong>Minimum value: </strong>{min}</p>
      <p><strong>Maximum value: </strong>{max}</p>
      <p><strong>Choose value: </strong>{random}</p>
    </div>
  )
}

export default Random