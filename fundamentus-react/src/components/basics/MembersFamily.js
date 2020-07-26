import React from 'react'

function MembersFamily(props) {
  return (
    <div>
      {props.name} <strong>{props.surname}</strong>
    </div>
  )
}

export default MembersFamily