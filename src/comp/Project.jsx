import React from 'react'
import { ProjectLinkButton, TechStackTag } from './Tags'
import { COLORS, PROJECTS_DATA } from '../data/portfolioData'

function Project() {
  return (
    <section id="projects" className=" px-6 lg:px-12 py-16 border-t border-[#2d3748]">
    <h3 className="text-4xl font-bold text-center mb-12">Featured Projects</h3>
    <div className="space-y-12">
        {PROJECTS_DATA.map((project) => (
            <article key={project.title} className={`${COLORS.cardBg} p-6 md:p-8 rounded-xl shadow-2xl hover:shadow-[#4299e1]/20 transition duration-300 border border-[#2d3748] hover:border-[#4299e1]/50`}>
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <h4 className={`text-3xl font-bold ${COLORS.accentBlue}`}>{project.title}</h4>
                    <span className="mt-2 md:mt-0 text-lg font-medium text-[#a0aec0]">{project.type}</span>
                </div>
                <p className="text-[#a0aec0] mb-4">{project.description}</p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-[#a0aec0]">
                    {project.bullets.map((bullet, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                    {project.tech.map((techItem) => (
                        <TechStackTag key={techItem}>{techItem}</TechStackTag>
                    ))}
                    <ProjectLinkButton href={project.github}>
                        View on GitHub
                    </ProjectLinkButton>
                </div>
            </article>
        ))}
    </div>
</section>
  )
}

export default Project