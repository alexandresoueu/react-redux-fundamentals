import React from 'react'
import MembersFamily from './MembersFamily'
function Family(props) {
  return (
    <span>
      <MembersFamily name="Beauden" {...props} />
      <MembersFamily name="Jordi" {...props} />
      <MembersFamily name="Scott" {...props} />
    </span>
  )
}

export default Family