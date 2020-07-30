import React from 'react'
import If, { Else } from './If'

function UserInfo (props) {
  const user = props.user || {}
  return (
    <div>
      <If test={user && user.name}>
        Welcome <strong>{user.name}</strong>
        <Else test={!user || !user.name}>
        Welcome <strong>Gezonelse</strong>
      </Else>
      </If>
      
    </div>
  )
}

export default UserInfo
