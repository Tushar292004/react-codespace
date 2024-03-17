import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-yellow-700 p-4 text-black rounded-xl mb-4'>TailWind Test</h1>
      <Card userName="Sheela" btnText="click here" />
      <Card userName="Mohini" />
    </>
  )
}

export default App
