import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="logo">
          HG<span className="gradient-text">.</span>
        </a>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setIsOpen(false)} style={{ fontSize: '0.95rem', fontWeight: '500' }}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} style={{ fontSize: '0.95rem', fontWeight: '500' }}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} style={{ fontSize: '0.95rem', fontWeight: '500' }}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} style={{ fontSize: '0.95rem', fontWeight: '500' }}>Contact</a></li>
          <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="/resume.pdf" download="Harshvardhan_Golekar_Resume.pdf" onClick={() => setIsOpen(false)} className="outline-btn" style={{ 
              fontSize: '0.9rem', 
              fontWeight: '600',
              color: 'var(--text-primary)',
              border: '1px solid var(--text-secondary)',
              padding: '0.5rem 1.2rem',
              borderRadius: '50px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              Resume <FaDownload size={14} />
            </a>
            <a href="#contact" className="primary-btn" onClick={() => setIsOpen(false)} style={{ 
              fontSize: '0.9rem', 
              fontWeight: '700',
              color: '#000',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
              padding: '0.5rem 1.2rem',
              borderRadius: '50px'
            }}>
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
