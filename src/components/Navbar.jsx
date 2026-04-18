import React, { useState, useEffect } from 'react';

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
          <li><a href="#about" onClick={() => setIsOpen(false)} style={{ fontSize: '0.9rem', fontWeight: '500' }}>About</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)} style={{ fontSize: '0.9rem', fontWeight: '500' }}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)} style={{ fontSize: '0.9rem', fontWeight: '500' }}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)} style={{ 
            fontSize: '0.9rem', 
            fontWeight: '600',
            color: 'var(--accent-primary)',
            border: '1px solid var(--accent-primary)',
            padding: '0.5rem 1.2rem',
            borderRadius: '50px'
          }}>Hire Me</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
