import React from 'react'
import If from './If'

function UserInfo (props) {
  const user = props.user || {}
  return (
    <div>
      <If test={user && user.name}>
        Welcome <strong>{user.name}</strong>
      </If>
      <If test={!user || !user.name}>
        Welcome <strong>Tchuko</strong>
      </If>
    </div>
  )
}

export default UserInfo
