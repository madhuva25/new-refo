import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './comp/Home'
import About from './comp/About'
import Navbar from './comp/Navbar'
import Skills from './comp/Skills'
import Project from './comp/Project'
import Courses from './comp/Courses'
//import Header from './comp/Header'
import Contact from './comp/Contact'
import Footer from './comp/Footer'
import Education from './comp/Education'
import ModuleResults from './comp/ModuleResults'

function App() {
  const [count, setCount] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (

    <>
      <Navbar/>
    <div className="bg-[#1a202c] text-white font-sans min-h-screen">
  
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"></main>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/moduleResults" element={<ModuleResults/>} />
        <Route path="/courses" element={<Courses/>} />
        {/* Fallback: render Home for any unknown path (helps on GitHub Pages) */}
        <Route path='*' element={<Home/>} />
        

     </Routes>
     <Footer/>
     </div>
     
    </>
  )
}

export default App
