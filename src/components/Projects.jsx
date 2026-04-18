import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "AI Resume ATS Screener",
      description: "Advanced AI-powered screening system that extracts skills, calculates professional scores (out of 100), and provides actionable HR insights from PDF resumes.",
      tech: ["React", "Spring Boot", "MongoDB", "AI/NLP"],
      featured: true,
      link: "#"
    },
    {
      title: "College Dashboard",
      description: "A comprehensive administrative interface for academic management, featuring real-time statistics, department tracking, and responsive student management flows.",
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      featured: false,
      link: "#"
    },
    {
      title: "Employee Management System",
      description: "Scalable backend solution with RESTful APIs, layered architecture, and secure database integration for corporate resource handling.",
      tech: ["Java", "Spring Boot", "Hibernate", "MySQL"],
      featured: false,
      link: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding" style={{ background: 'rgba(59, 130, 246, 0.02)' }}>
      <div className="container">
        <h2 className="section-title">Selected <span className="gradient-text">Work</span></h2>
        
        <div style={{ display: 'grid', gap: '3rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} className={`glass-card desktop-padding ${project.featured ? 'desktop-row' : ''}`} style={{
              display: 'flex',
              flexDirection: project.featured ? 'row' : 'column',
              gap: '2.5rem',
              alignItems: 'center',
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
                  fontWeight: '700'
                }}>
                  FEATURED PROJECT
                </div>
              )}

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: project.featured ? '2.5rem' : '1.5rem', marginBottom: '1.2rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} style={{ color: 'var(--accent-secondary)', fontWeight: '600', fontSize: '0.9rem' }}>#{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={project.link} className="glass-card" style={{ padding: '0.6rem 1.5rem', borderRadius: '50px', fontSize: '0.9rem' }}>
                    View Details
                  </a>
                </div>
              </div>

              {project.featured && (
                <div style={{ 
                  flex: 1, 
                  height: '300px', 
                  background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.1), rgba(59, 130, 246, 0.1))',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px dashed var(--accent-primary)'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '4rem' }}>📄</span>
                    <h4 style={{ marginTop: '1rem', color: 'var(--accent-primary)' }}>AI Powered Analysis</h4>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
