import React from 'react'

import './index.css'
import FirstComponent from './components/basics/FirstComponent'
import ComponentWithParams from './components/basics/ComponentWithParams'

function App(props) {
  return (
    <div id="app">
      <FirstComponent />,
      <ComponentWithParams title='Nemoo' subtitle='Bulbassauro' />
    </div>
  )
}

export default App