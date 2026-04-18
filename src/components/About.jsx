import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <div className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>Who I Am</h3>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
              I am a passionate Full Stack Developer specializing in Java, Spring Boot, and React. I enjoy transforming complex problems into simple, elegant, and highly functional web applications.
            </p>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.8rem', fontSize: '1.2rem' }}>Specialization & Problem Solving</h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              My core expertise lies in building scalable RESTful backends and dynamic, responsive frontends. I solve real-world business challenges by architecting robust databases, developing AI-driven logic, and ensuring a seamless, premium user experience from server to screen.
            </p>
          </div>
          
          <div style={{ flex: '1 1 300px', display: 'grid', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Education</h3>
            <div className="glass-card" style={{ padding: '1.5rem', border: '1px dashed var(--glass-border)', transition: 'var(--transition-smooth)' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>B.E. (Information Technology)</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Dr. D. Y. Patil Technical Campus, Pune</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', border: '1px dashed var(--glass-border)', transition: 'var(--transition-smooth)' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Diploma in Computer Technology</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Government Polytechnic, Beed</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', marginTop: '0.5rem', fontWeight: 'bold' }}>Grade: 82.57%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
