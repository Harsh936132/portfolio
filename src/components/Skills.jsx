import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "React", "Hibernate", "REST APIs"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git/GitHub", "Maven", "VS Code", "Eclipse"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Toolkit</span></h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card">
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} style={{
                    padding: '0.5rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50px',
                    fontSize: '0.9rem',
                    border: '1px solid var(--glass-border)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
