import React from 'react'

import './Card.css'

export default (props) => {

  const color = {
    backgroundColor: props.color || 'blueviolet',
    borderColor: props.color || 'blueviolet'
  }

  return (
    <div className="Card" style={color}> 
      <div className="title">
        {props.title} 
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )  
}