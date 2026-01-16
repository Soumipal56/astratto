import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Routes, Route } from 'react-router-dom'
import Services from './pages/Services'
import Work from './pages/Work'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  )
}

export default App