import React from 'react'

import FirstComponent from './components/basics/FirstComponent'
import ComponentWithParams from './components/basics/ComponentWithParams'
import Random from './components/basics/Random'
import Card from './components/layout/Card'
import FragmentComponent from './components/basics/FragmentComponent'
import Family from './components/basics/Family'
import MembersFamily from './components/basics/MembersFamily'

import './App.css'
import StudentList from './components/repetition/StudentList'
import ProductsList from './components/repetition/ProductsList'
import PairOrOdd from './components/conditional/PairOrOdd'
import UserInfo from './components/conditional/UserInfo'
import DirectFather from './components/comunication/DirectFather'
import IndirectFather from './components/comunication/IndirectFather'
import Input from './components/form/Input'
import Mega from './components/Mega/Mega'

function App(props) {
  return (
    <div className='app'>
      <FirstComponent />
      <div className='cards'>
        <Card title='Mega da Massa' color='green'>
          <Mega quantity={7} />
        </Card>
        <Card title='Controlled Components' color='blue'>
          <Input />
        </Card>
        <Card title='Indirect Comunication' color='darkred'>
          <IndirectFather />
        </Card>
        <Card title='Direct Comunication' color='darkgrey'>
          <DirectFather />
        </Card>
        <Card title='Conditional' color='royalblue'>
          <PairOrOdd number={20} />
          <UserInfo user={{ name: 'Jarito' }} />
          <UserInfo user={{ email: 'Jarito@jaja.com' }} />
        </Card>
        <Card title='Products Store' color='purple' >
          <ProductsList />
        </Card>
        <Card title='Students Score' color='#097'>
          <StudentList />
        </Card>
        <Card title='Components with Children' color='#FF69B4'>
          <Family surname='Berrett'>
            <MembersFamily name='Beauden' />
            <MembersFamily name='Jordi' />
            <MembersFamily name='Scott' />
          </Family>
          <Family surname='Smith'>
            <MembersFamily name='Aaron' />
          </Family>
        </Card>
        <Card title='Component Dad' color='#080'>
          <Random min={1} max={60} />
        </Card>
        <Card title='Component with Params'>
          <ComponentWithParams title='Nemoo' subtitle='Bulbassauro' score={9.3} />
        </Card>
        <Card title='Component fragment' color='#000'>
          <FragmentComponent />
        </Card>
      </div>

    </div>
  )
}

export default App
