import React from 'react'

import FirstComponent from './components/basics/FirstComponent'
import ComponentWithParams from './components/basics/ComponentWithParams'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import FragmentComponent from './components/basics/FragmentComponent'
import Family from './components/basics/Family'

import './App.css'

function App(props) {
  return (
    <div className="app">
      <FirstComponent />
      <div className="cards">
        <Card title="Components with Children" color="#FF69B4">
          <Family surname="Berrett" />
        </Card>
        <Card title="Component Dad" color="#080">
          <Random min={1} max={60} />
        </Card>
        <Card title="Component with Params">
          <ComponentWithParams title='Nemoo' subtitle='Bulbassauro' score={9.3} />
        </Card>
        <Card title="Component fragment" color="#000">
          <FragmentComponent />
        </Card>
      </div>

    </div>
  )
}

export default App