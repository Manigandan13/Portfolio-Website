import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import FloatingSkills from './components/FloatingSkills'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero />
        <Certificates/>
        <Projects/>
        <FloatingSkills/>
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
