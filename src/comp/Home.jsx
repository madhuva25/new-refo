import React from 'react'
import Navbar from './Navbar'
import { COLORS } from '../data/portfolioData'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import Education from './Education'
import Contact from './Contact'

function Home() {
   
  return (
    
    
    <div>
        
       <section id="hero" className=" px-6 lg:px-12 pt-10 pb-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="md:w-3/5">
            <p className={`${COLORS.accentBlue} text-lg font-medium mb-2`}>Hello, I'm</p>
            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight">
                Madhuranga S.L.G.
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#a0aec0] mt-2 mb-6">
                Aspiring <span className={`${COLORS.accentBlue} text-current`}>Software Engineer</span> | Full-Stack Developer
            </h2>
            <p className="text-[#a0aec0] max-w-xl mx-auto md:mx-0 mb-8 text-lg">
                Third-year MIS (Special) undergraduate with strong hands-on experience in the **MERN Stack, Java, Spring Boot, and robust system architecture**. Passionate about building scalable, clean, and effective software solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
                <a href="#projects" className="px-6 py-3 bg-[#4299e1] text-[#1a202c] font-bold rounded-lg shadow-xl hover:bg-blue-600 transition duration-300 transform hover:scale-[1.02]">
                    View Projects
                </a>
                <a href="mailto:lgmsandakalum@gmail.com" className="px-6 py-3 border border-[#4299e1] text-[#4299e1] font-bold rounded-lg hover:bg-[#4299e1] hover:text-[#1a202c] transition duration-300">
                    Get in Touch
                </a>
            </div>
        </div>
        {/* Profile Placeholder */}
        <div className="md:w-2/5 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 bg-[#2d3748] rounded-full flex items-center justify-center border-4 border-[#4299e1] shadow-2xl">
                <span className="text-xl text-[#a0aec0]">Profile Picture Placeholder</span>
            </div>
        </div>
    </section>
    <About/>
    <Skills/>
    <Project/>
    <Education/>
    <Contact/>
        </div>
  )
}

export default Home