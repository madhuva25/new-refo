import { COLORS } from "../data/portfolioData";

function Contact() {
    const ContactLink = ({ href, ariaLabel, iconPath }) => (
        <a href={href} target="_blank" rel="noopener noreferrer" className={`contact-link text-[#a0aec0] ${COLORS.hoverAccent} transition duration-300 transform hover:scale-110`} aria-label={ariaLabel}>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                {/* SVG paths are simplified here for the three icons */}
                {iconPath === 'email' && <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7" />}
                {iconPath === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.366-4-3.235-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>}
                {iconPath === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.803 8.207 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.342.723-4.04-1.609-4.04-1.609-.547-1.385-1.332-1.754-1.332-1.754-1.092-.746.083-.728.083-.728 1.205.084 1.838 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.493.998.108-.775.419-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-.972.115-3.18 0 0 1-.322 3.3.123 2.9-.847 6.2-.847 9.1 0 2.296-.445 3.296-.123 3.296-.123.655 2.208.25 2.877.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.609-2.805 5.624-5.475 5.92-.43.37-.82 1.1-.82 2.22 0 1.606-.015 2.897-.015 3.288 0 .319.22.69.825.575C19.565 21.788 23 17.284 23 12c0-6.627-5.373-12-12-12z"/>}
            </svg>
        </a>
    );

    return (
        <section id="contact" className="px-6 lg:px-12 py-16 border-t border-[#2d3748]">
            <h3 className="text-4xl font-bold text-center mb-10">Let's Connect</h3>
            <div className="flex flex-col items-center space-y-6">
                <p className="text-xl text-[#a0aec0] max-w-2xl text-center">
                    I'm currently seeking opportunities in Software Engineering. Feel free to reach out to discuss potential roles or collaboration!
                </p>
                <div className="flex space-x-6">
                    <ContactLink 
                        href="mailto:lgmsandakalum@gmail.com" 
                        ariaLabel="Email Madhuranga" 
                        iconPath="email"
                    />
                    <ContactLink 
                        href="https://linkedin.com/in/madhuranga-gamage-b7b700216" 
                        ariaLabel="LinkedIn Profile" 
                        iconPath="linkedin"
                    />
                    <ContactLink 
                        href="https://github.com/madhuva25" 
                        ariaLabel="GitHub Profile" 
                        iconPath="github"
                    />
                </div>
            </div>
        </section>
    );
}

export default Contact