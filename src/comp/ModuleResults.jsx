import React from "react";
import { MODULE_GRADES, calculateGPA, COLORS } from "../data/portfolioData";

function ModulesResults() {
  const gpa = calculateGPA(MODULE_GRADES);

  // Group modules by semester
  const groupedModules = MODULE_GRADES.reduce((acc, module) => {
    if (!acc[module.semester]) {
      acc[module.semester] = [];
    }
    acc[module.semester].push(module);
    return acc;
  }, {});

  return (
    <section className="px-6 lg:px-12 py-16 text-white min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">
        Academic Performance
      </h2>

      <div className={`${COLORS.cardBg} p-8 rounded-xl shadow-xl`}>
        <p className="text-[#a0aec0] text-lg mb-4 text-center">
          Below are your detailed module grades grouped by semester.
        </p>

        {/* GPA Display */}
        <div className="text-center mb-6">
          <span className="text-2xl font-semibold text-[#4299e1]">
            Current GPA: {gpa}
          </span>
        </div>

        {/* Module List (Grouped by Semester) */}
        <div className="space-y-6">
          {Object.entries(groupedModules).map(([semester, modules]) => (
            <div key={semester} className={`${COLORS.highlightBg} p-6 rounded-lg`}>
              <h3 className="text-xl font-semibold text-[#4299e1] mb-4">
                {semester}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {modules.map((module, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 bg-[#2d3748] rounded-md"
                  >
                    <span className="text-[#a0aec0]">{module.module}</span>
                    <span
                      className={`font-semibold ${
                        module.grade === "A" || module.grade === "A-"
                          ? "text-green-400"
                          : module.grade === "B+" || module.grade === "B"
                          ? "text-blue-400"
                          : module.grade === "B-" || module.grade === "C+"
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    >
                      {module.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModulesResults;
