import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume ATS Screener",
      description: "Advanced AI-powered screening system that extracts skills, calculates professional scores (out of 100), and provides actionable HR insights from PDF resumes. Built for scalability.",
      tech: ["React", "Spring Boot", "MongoDB", "AI/NLP"],
      featured: true,
      github: "https://github.com/Harsh936132/resume-ats-project"
    },
    {
      title: "College Dashboard",
      description: "A comprehensive administrative interface for academic management, featuring real-time statistics, department tracking, and responsive student management flows.",
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      featured: false,
      github: "https://github.com/Harsh936132/college-dashboard"
    },
    {
      title: "Stellar Crowdfunding DApp",
      description: "Implemented a multi-wallet crowdfunding application on the Stellar Testnet using Soroban smart contracts. Handles real-time event tracking and blockchain constraints.",
      tech: ["React", "Soroban", "Stellar SDK", "Tailwind"],
      featured: false,
      github: "https://github.com/Harsh936132/stellar-dapp"
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(59, 130, 246, 0.02)' }}>
      <div className="container">
        <h2 className="section-title">Selected <span className="gradient-text">Work</span></h2>
        
        <div style={{ display: 'grid', gap: '3rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} className={`glass-card desktop-padding`} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'flex-start',
              padding: project.featured ? '3rem' : '2rem',
              border: project.featured ? '1px solid var(--accent-primary)' : '1px solid var(--glass-border)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {project.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--accent-primary)',
                  color: '#000',
                  padding: '0.3rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  zIndex: 2
                }}>
                  FEATURED PROJECT
                </div>
              )}

              <div style={{ flex: 1, width: '100%' }}>
                <h3 style={{ fontSize: project.featured ? '2.5rem' : '1.8rem', marginBottom: '1rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.6' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2rem' }}>
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} style={{ 
                      color: 'var(--accent-secondary)', 
                      background: 'rgba(59, 130, 246, 0.1)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '8px',
                      fontWeight: '600', 
                      fontSize: '0.85rem' 
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" className="outline-btn" style={{ 
                    padding: '0.6rem 1.2rem', 
                    borderRadius: '50px', 
                    fontSize: '0.9rem',
                    border: '1px solid var(--text-secondary)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'var(--transition-smooth)'
                  }}>
                    <FaGithub size={18} /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
