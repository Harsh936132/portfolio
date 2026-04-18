import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="glass-card" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Professional <span className="gradient-text">Profile</span></h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Detail-oriented Java Developer with hands-on experience in building RESTful backend applications using Spring Boot, Hibernate, and MySQL. 
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Strong understanding of object-oriented programming, database design, and clean code practices. Seeking an entry-level software developer role to contribute to scalable and efficient applications.
            </p>
          </div>
          
          <div style={{ flex: '1 1 300px', display: 'grid', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '1.2rem' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Education</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}><strong>B.E. (Information Technology)</strong></p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Dr. D. Y. Patil Technical Campus, Pune</p>
            </div>
            <div className="glass-card" style={{ padding: '1.2rem' }}>
              <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>Diploma</h4>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}><strong>Computer Technology (82.57%)</strong></p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Government Polytechnic, Beed (2021-2023)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
