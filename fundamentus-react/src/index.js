import ReactDOM from 'react-dom'
import React from 'react'

import './index.css'
import FirstComponent from './components/basics/FirstComponent'
import ComponentWithParams from './components/basics/ComponentWithParams'

ReactDOM.render(
  <div>
    <FirstComponent />,
    <ComponentWithParams title='Nemoo' subtitle='Bulbassauro' />
  </div>,
  document.getElementById('root')
)