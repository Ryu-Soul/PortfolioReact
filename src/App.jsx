import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import ProjetNina from './pages/ProjetNina.jsx'

function App() {
  return (
    <div className='page'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProjetNina" element={<ProjetNina />} />
    </Routes>
    </div>
    
  )
}

export default App