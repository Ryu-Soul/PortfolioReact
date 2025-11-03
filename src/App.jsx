import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import ProjetNina from './pages/ProjetNina.jsx'
import ProjetEvents from './pages/724Events.jsx'

function App() {
  return (
    <div className='page'>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProjetNina" element={<ProjetNina />} />
      <Route path="/724Events" element={<ProjetEvents />} />
    </Routes>
    </div>
    
  )
}

export default App