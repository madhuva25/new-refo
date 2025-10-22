// src/data/portfolioData.js

// =============================
// Skills Data
// =============================
export const SKILLS_DATA = [
  {
    title: "Frontend & Core",
    list: [
      "React.js",
      "JavaScript",
      "HTML & CSS",
      "Bootstrap",
      "OOP",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Backend & Database",
    list: ["Java", "Spring Boot", "Node.js / Express.js", "Python", "MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    list: ["Git / GitHub", "REST APIs / Postman", "Docker", "Flutter / Dart", "TensorFlow / Pandas", "JWT / Spring Security"],
  },
];

// =============================
// Projects Data
// =============================
export const PROJECTS_DATA = [
  {
    title: "E-Commerce Web Application",
    type: "MERN Stack | Solo Project",
    description: "A fully functional online store developed from scratch.",
    bullets: [
      "Implemented secure user authentication (login/logout).",
      "Developed a dynamic product catalog with filtering and search.",
      "Built responsive UI using **React.js**.",
      "Used **MongoDB** and **Node.js/Express.js** for backend.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/madhuva25/E-comerce-web-site-practice.git",
  },
  {
    title: "Dynamic Website with Client Support",
    type: "React.js + Node.js | Team Project",
    description: "A collaborative project featuring responsive UI and client support.",
    bullets: [
      "Integrated **RESTful APIs** for seamless data flow.",
      "Focused on responsive UI using React.",
      "Used Git/GitHub for version control.",
    ],
    tech: ["React.js", "Node.js", "REST APIs"],
    github: "https://github.com/madhuva25/wernix_web.git",
  },
  {
    title: "Mobile Learning App (Solo Learn Clone)",
    type: "Flutter | Group Project",
    description: "A mobile app with certificate-based learning modules.",
    bullets: [
      "Built using **Flutter** and **Dart**.",
      "Implemented progress tracking features.",
      "Contributed to UI/UX design and mobile logic.",
    ],
    tech: ["Flutter", "Dart", "Mobile Development"],
    github: "https://github.com/kkinethmini/MAD-Final-Project.git",
  },
];

// =============================
// Module Grades + GPA
// =============================
export const MODULE_GRADES = [
  // Year 1 Semester 1
  { module: "Introduction to Computer Science", grade: "A-", semester: "Y1S1" },
  { module: "Programming in C", grade: "B+", semester: "Y1S1" },
  { module: "Mathematics for Computing", grade: "B-", semester: "Y1S1" },
  { module: "Database Management Systems", grade: "B-", semester: "Y1S1" },
  { module: "Introduction to Sustainability Development", grade: "B+", semester: "Y1S1" },
  { module: "English for Communication Skills", grade: "C+", semester: "Y1S1" },
  //{ module: "Professional Development", grade: "A", semester: "Y1S1" },

  // Year 1 Semester 2
  { module: "Computer Networks", grade: "A-", semester: "Y1S2" },
  { module: "Systems Analysis and Design", grade: "B+", semester: "Y1S2" },
  { module: "Development of Enterprise Applications I", grade: "A-", semester: "Y1S2" },
  { module: "Foundations of Information Systems", grade: "B-", semester: "Y1S2" },
  { module: "Statistics for Computing", grade: "X", semester: "Y1S2" },

  // Year 2 Semester 1
  { module: "Web Application Development", grade: "A-", semester: "Y2S1" },
  { module: "Computer Architecture", grade: "B-", semester: "Y2S1" },
  { module: "Algorithms and Data Structures", grade: "B", semester: "Y2S1" },
  { module: "Data Communications and Networks", grade: "B-", semester: "Y2S1" },
  { module: "Object Oriented Programming with Java", grade: "A-", semester: "Y2S1" },

  // Year 2 Semester 2
  { module: "Business Process Management", grade: "B", semester: "Y2S2" },
  { module: "Business Studies", grade: "B-", semester: "Y2S2" },
  { module: "Enterprise Systems", grade: "A-", semester: "Y2S2" },
  { module: "Introduction to Software Engineering", grade: "B", semester: "Y2S2" },
  { module: "Human Computer Interaction", grade: "B", semester: "Y2S2" },

  // Year 3 Semester 1
  //{ module: "Recovery Strategy", grade: "B", semester: "Y3S1" },
  { module: "Advanced Database Management Systems", grade: "B", semester: "Y3S1" },
  { module: "Information Assurance and Security", grade: "B-", semester: "Y3S1" },
  { module: "IT Project Management", grade: "B+", semester: "Y3S1" },
  { module: "Mobile Application Development", grade: "A-", semester: "Y3S1" },
  { module: "Software Quality Assurance", grade: "B", semester: "Y3S1" },
];

// =============================
// GPA POINTS MAP + CALCULATOR
// =============================
const GPA_POINTS = {
  "A": 4.0,
  "A-": 3.7,
  "B+": 3.3,
  "B": 3.0,
  "B-": 2.7,
  "C+": 2.3,
};

export function calculateGPA(modules) {
  let totalPoints = 0;
  let gradedModulesCount = 0;

  modules.forEach((module) => {
    const points = GPA_POINTS[module.grade] || 0;
    if (points > 0) {
      totalPoints += points;
      gradedModulesCount++;
    }
  });

  if (gradedModulesCount === 0) return "N/A";

  return (totalPoints / gradedModulesCount).toFixed(2);
}

// =============================
// Colors
// =============================
export const COLORS = {
  primaryDark: "bg-[#1a202c]",
  cardBg: "bg-[#2d3748]",
  accentBlue: "text-[#4299e1]",
  secondaryLight: "text-[#a0aec0]",
  highlightBg: "bg-[#344054]",
  hoverAccent: "hover:text-[#4299e1]",
};

// Data for the new Certifications component
export const SLIIT_CERTIFICATION_DATA = {
  title: "AI/ML Engineer - Stage 1",
  issuer: "SLIIT University",
  date: "Issued: October 11, 2024",
  id: "ocklywcuqp",
  focus: [
      "Fundamentals of AI and Machine Learning",
      "Python for Data Science (Pandas, NumPy)",
      "Deep Learning concepts and applications (TensorFlow)",
      "Supervised and Unsupervised Learning techniques",
      "Model Evaluation and Hyperparameter Tuning",
  ],
  description: "Comprehensive foundational training covering the core concepts and practical skills required for entry-level AI/ML roles, focusing heavily on hands-on implementation using Python libraries.",
};


