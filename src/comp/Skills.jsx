// src/components/Skills.jsx
import React from 'react';
import { SKILLS_DATA, COLORS } from '../data/portfolioData';
import { SkillTag } from './Tags';

const Skills = () => (
    <section id="skills" className=" px-6 lg:px-12 py-16 border-t border-[#2d3748]">
    <h3 className="text-4xl font-bold text-center mb-10">Technical Toolkit</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS_DATA.map((skillGroup) => (
            <div key={skillGroup.title} className={`${COLORS.cardBg} p-6 rounded-xl shadow-xl`}>
                <h4 className={`text-2xl font-semibold mb-4 ${COLORS.accentBlue} border-b border-[#344054] pb-2`}>{skillGroup.title}</h4>
                <div className="flex flex-wrap gap-2">
                    {skillGroup.list.map((skill) => (
                        <SkillTag key={skill}>{skill}</SkillTag>
                    ))}
                </div>
            </div>
        ))}
    </div>
</section>
);

export default Skills;
