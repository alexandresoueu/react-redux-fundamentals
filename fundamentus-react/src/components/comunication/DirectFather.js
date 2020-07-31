import React from 'react'
import DirectSon from './DirectSon'

function DirectFather (props) {
  return (
    <div>
      <DirectSon name='Nemo' age={33} goodPlayer={true} />
      <DirectSon name='Dori' age={15} goodPlayer={false} />
      <DirectSon name='Marlin' age={11} />
    </div>
  )
}

export default DirectFather
