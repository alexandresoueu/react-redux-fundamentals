import React from 'react'

function ComponentWithParams(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
    </div>
  )
}

export default ComponentWithParams