import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const certs = [
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "August 2023",
      link: "#"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "May 2023",
      link: "#"
    }
  ];

  return (
    <section id="certifications" className="section-padding" style={{ background: 'rgba(59, 130, 246, 0.02)' }}>
      <div className="container">
        <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {certs.map((cert, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', transition: 'var(--transition-smooth)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <FaCertificate size={30} style={{ color: 'var(--accent-primary)' }} />
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{cert.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer} &bull; {cert.date}</p>
                </div>
              </div>
              <a href={cert.link} className="outline-btn" style={{ 
                marginTop: 'auto',
                alignSelf: 'flex-start',
                padding: '0.5rem 1rem', 
                borderRadius: '50px', 
                fontSize: '0.85rem',
                border: '1px solid var(--text-secondary)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'var(--transition-smooth)'
              }}>
                Verify <FaExternalLinkAlt size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
