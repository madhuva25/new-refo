import { Link } from "react-router-dom";
import { COLORS } from "../data/portfolioData";

function Education() {
    return (
        

<section id="education" className="px-6 lg:px-12 py-16 border-t border-[#2d3748]">
      <h3 className="text-4xl font-bold text-center mb-10">Education & Growth</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Card */}
        <div className={`${COLORS.cardBg} p-6 rounded-xl shadow-xl`}>
          <h4 className={`text-2xl font-semibold ${COLORS.accentBlue} mb-3`}>
            BSc Management Information System (Special)
          </h4>
          <p className="text-lg font-medium text-white">NSBM Green University</p>
          <p className="text-[#a0aec0] mt-1">
            Current Grade: 3.13 / 4.00 (Second Class Lower Division)
          </p>
          <p className="text-sm text-[#a0aec0] mt-2">
            Relevant Coursework included: Web Application Development, Object Oriented Programming with Java, Software Architecture, and Data Structures.
          </p>

          {/* "More..." Button */}
          <div className="mt-4">
            <Link
              to="/moduleResults"
              className="inline-block px-5 py-2 bg-[#4299e1] text-[#1a202c] font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              More...
            </Link>
          </div>
        </div>
      
   


                
                {/* Certifications Card */}
                <div className={`${COLORS.cardBg} p-6 rounded-xl shadow-xl`}>
                    <h4 className={`text-2xl font-semibold ${COLORS.accentBlue} mb-3`}>Key Certifications</h4>
                    <ul className="space-y-2 text-[#a0aec0]">
                        {[
                            "Full-Stack Web Development - University of Moratuwa",
                            "Machine Learning - SLIIT University"
                        ].map((cert) => (
                            <li key={cert} className="flex items-center">
                                {/* Certificate Icon SVG */}
                                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.006 12.006 0 0012 21a12.006 12.006 0 008.618-18.016z"></path></svg>
                                {cert}
                            </li>
                        ))}
                    </ul>
                    {/* "More..." Button */}
          <div className="mt-4">
            <Link
              to="/courses"
              className="inline-block px-5 py-2 bg-[#4299e1] text-[#1a202c] font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              More...
            </Link>
          </div>
                </div>

                
            </div>
        </section>
    );
}

export default Education