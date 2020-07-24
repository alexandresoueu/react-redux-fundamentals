import React from 'react'

import './index.css'
import FirstComponent from './components/basics/FirstComponent'
import ComponentWithParams from './components/basics/ComponentWithParams'
import Random from './components/basics/Random'

function App(props) {
  return (
    <div id="app">
      <FirstComponent />,
      <ComponentWithParams title='Nemoo' subtitle='Bulbassauro' />,
      <Random min={1} max={60} />
    </div>
  )
}

export default App