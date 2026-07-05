import { useState } from 'react'
import { Header } from '../Components/Header'
import {Dashboard} from '../Components/Dashboard/Dashboard'
import { Body } from '../Components/Body'
import iconRestart from '../src/assets/icon-restart.svg'
import './App.css'

function App() {
   return(
    <>
      <Header></Header>
      <Dashboard></Dashboard>
      <Body></Body>
      <button>Restart Test <img src={iconRestart} alt="" /> </button>
    </>
   )
}

export default App
