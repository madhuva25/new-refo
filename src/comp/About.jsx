import React from 'react'
import { COLORS } from '../data/portfolioData'

function About() {
  return (
    <div><section id="about" className="px-6 lg:px-12 py-16 border-t border-[#2d3748]">
    <h3 className="text-4xl font-bold text-center mb-10">About Me</h3>
    <div className={`${COLORS.cardBg} p-8 rounded-xl shadow-2xl`}>
        <p className="text-[#a0aec0] leading-relaxed text-lg">
            As an Aspiring Software Engineer and third-year MIS (Special) undergraduate, I focus on delivering clean, maintainable, and effective software solutions. My expertise spans full-stack development, with a core focus on MERN Stack (React.js, Node.js, Express.js, MongoDB) and **Enterprise Java technologies (Spring Boot, Java EE). I have practical experience in integrating RESTful APIs and implementing secure authentication using JWT and Spring Security. I am passionate about system architecture, continuously learning modern development practices, and solving real-world problems through technology.
        </p>
    </div>
</section></div>
  )
}

export default About
