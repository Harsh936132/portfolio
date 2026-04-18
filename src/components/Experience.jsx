import React from 'react';
import { FaLaptopCode, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Tech Innovations",
      duration: "Dec 2023 - Present",
      description: "Developed and maintained RESTful APIs using Spring Boot. Collaborated with the frontend team to integrate React components.",
      icon: <FaLaptopCode size={24} />
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Jan 2023 - Nov 2023",
      description: "Built scalable web apps for local clients, focusing on SEO best practices, modern UI design, and robust database architectures.",
      icon: <FaBriefcase size={24} />
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Experience</span></h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ 
                background: 'rgba(0, 245, 255, 0.1)', 
                color: 'var(--accent-primary)',
                padding: '1rem',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {exp.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', marginBottom: '0.5rem', fontWeight: '500' }}>{exp.company}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '500' }}>{exp.duration}</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
