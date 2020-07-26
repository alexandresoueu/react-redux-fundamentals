import React, {cloneElement, Children} from 'react'

function Family(props) {
  return (
    <span>
      { 
        // cloneElement(props.children, { ...props })
        Children.map(props.children, child => {
          //console.log('CHILD::', child.props) [Beauden, Jordi, Scott, Aaron]
          return cloneElement(child, {...props})
        })
      }
    </span>
  )
}

export default Family