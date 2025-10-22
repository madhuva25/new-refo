import React from 'react'
import { COLORS } from '../data/portfolioData';
import { SLIIT_CERTIFICATION_DATA } from '../data/portfolioData';
import certificatePdf from '../assets/Madhuranga Sandakalum liyana gamage - 2024-10-11.pdf'


function Courses() {
  return (
    <section id="certifications" className="px-6 lg:px-12 py-16 border-t border-[#2d3748]">
        <h3 className="text-4xl font-bold text-center mb-10">Professional Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SLIIT AI/ML Certificate Card */}
            <div className={`md:col-span-2 ${COLORS.cardBg} p-6 rounded-xl shadow-xl border-l-4 border-[#4299e1]`}>
                <h4 className={`text-3xl font-bold ${COLORS.accentBlue} mb-2`}>{SLIIT_CERTIFICATION_DATA.title}</h4>
                <p className="text-xl font-medium text-white mb-1">{SLIIT_CERTIFICATION_DATA.issuer}</p>
                <p className="text-[#a0aec0] text-sm mb-4">{SLIIT_CERTIFICATION_DATA.date} | ID: {SLIIT_CERTIFICATION_DATA.id}</p>
                
                <p className="text-[#a0aec0] mb-4">{SLIIT_CERTIFICATION_DATA.description}</p>
                
                <h5 className="text-lg font-semibold text-white mb-2 border-t border-[#344054] pt-3">Key Focus Areas:</h5>
                <div className="flex flex-wrap gap-2">
                    {SLIIT_CERTIFICATION_DATA.focus.map((item) => (
                         <span key={item} className="px-3 py-1 bg-green-800/40 text-green-400 rounded-full text-xs font-medium shadow-md">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* Certificate PDF Preview */}
            <div className={`md:col-span-1 ${COLORS.highlightBg} p-6 rounded-xl shadow-xl flex flex-col`}>
                <h5 className="text-white font-semibold mb-3">Certificate (PDF)</h5>
                <div className="relative w-full h-80 rounded-md overflow-hidden border border-[#344054] bg-[#1f2733]">
                    <iframe src={certificatePdf} title="Certificate PDF" className="w-full h-full" />
                </div>
                <a href={certificatePdf} target="_blank" rel="noopener noreferrer" className="mt-3 text-sm text-[#4299e1] hover:underline">Open in new tab</a>
            </div>
        </div>
        
        {/* You can add other certifications here if you have them */}
        <div className={`mt-8 ${COLORS.cardBg} p-4 rounded-xl shadow-xl`}>
            <h5 className="text-lg font-semibold text-white mb-2">Other Certifications</h5>
            <p className="text-[#a0aec0] text-sm">Full-Stack Web Development - University of Moratuwa</p>
        </div>
    </section>
);
}

export default Courses