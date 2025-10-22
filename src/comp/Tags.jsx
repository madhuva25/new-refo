// src/components/Tags.jsx
import React from 'react';
import { COLORS } from '../data/portfolioData';

export const SkillTag = ({ children }) => (
  <span className={`px-4 py-2 ${COLORS.highlightBg} ${COLORS.accentBlue} rounded-full text-sm font-medium shadow-md`}>
    {children}
  </span>
);

export const TechStackTag = ({ children }) => (
  <span className="px-3 py-1 bg-[#4299e1]/20 text-[#4299e1] rounded-lg text-xs font-semibold">
    {children}
  </span>
);

export const ProjectLinkButton = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 bg-[#4299e1] text-[#1a202c] font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
  >
    {children}
  </a>
);
