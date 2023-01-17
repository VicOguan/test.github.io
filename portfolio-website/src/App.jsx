import React from 'react'
import NavBar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
const App = () => {
  return (
   <>
    <Home />
    <NavBar />
    <Skills />
    <About />
    <Footer />
   </>
  )
}

export default App