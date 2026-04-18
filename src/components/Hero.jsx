import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div className="hero-background" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
        zIndex: -1
      }} />
      
      <div className="container animate-fade-in" style={{ padding: '0 1rem' }}>
        <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--accent-primary)', marginBottom: '1rem' }}>Hi, I'm</h2>
        <h1 className="gradient-text hero-title" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', lineHeight: '1.2', marginBottom: '1.5rem', wordBreak: 'break-word' }}>
          Harshvardhan <br className="hide-mobile" /> Golekar
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', padding: '0 1rem' }}>
          Full-stack developer specializing in Java, Spring Boot, and React. 
          Building scalable, AI-driven solutions for the modern web.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="glass-card" style={{ padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: '600', width: 'max-content' }}>
            View Projects
          </a>
          <a href="#contact" style={{ 
            padding: '0.8rem 2rem', 
            borderRadius: '50px', 
            border: '1px solid var(--accent-secondary)',
            fontWeight: '600',
            color: 'var(--accent-secondary)',
            width: 'max-content'
          }}>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
