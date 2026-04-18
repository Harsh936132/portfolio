import React from 'react';
import { SiJavascript, SiMysql, SiSpringboot, SiReact, SiHibernate, SiMongodb, SiGithub, SiApachemaven, SiEclipseide } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Java", icon: <FaJava color="#007396" /> }, 
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> }, 
        { name: "SQL", icon: <SiMysql color="#4479A1" /> }
      ]
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Spring Boot", icon: <SiSpringboot color="#6DB33F" /> }, 
        { name: "React", icon: <SiReact color="#61DAFB" /> }, 
        { name: "Hibernate", icon: <SiHibernate color="#59666C" /> }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql color="#4479A1" /> }, 
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git/GitHub", icon: <SiGithub color="#FFF" /> }, 
        { name: "Maven", icon: <SiApachemaven color="#C71A22" /> }, 
        { name: "VS Code", icon: <VscVscode color="#007ACC" /> }, 
        { name: "Eclipse", icon: <SiEclipseide color="#2C2255" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Toolkit</span></h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem' 
        }}>
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)', fontSize: '1.4rem' }}>{cat.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="tech-badge" style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '50px',
                    fontSize: '0.95rem',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                  }}>
                    {skill.icon}
                    <span style={{ fontWeight: '500' }}>{skill.name}</span>
                  </div>
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
