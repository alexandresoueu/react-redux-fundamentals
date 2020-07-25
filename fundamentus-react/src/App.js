import React from 'react'

import './index.css'
import FirstComponent from './components/basics/FirstComponent'
import ComponentWithParams from './components/basics/ComponentWithParams'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

function App(props) {
  return (
    <div id="app">
      <FirstComponent />
      <Card title="Component Dad">
        <Random min={1} max={60} />
      </Card>
      <Card title="Component with Params">
        <ComponentWithParams title='Nemoo' subtitle='Bulbassauro' score={9.3} />
      </Card>
      
    </div>
  )
}

export default App