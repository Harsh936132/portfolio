import React from 'react';
import { SiSpringboot, SiReact, SiMongodb } from 'react-icons/si';

const Hero = () => {
  return (
    <section id="hero" className="hero section-padding" style={{
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
        <h1 className="gradient-text hero-title" style={{ fontSize: 'clamp(3.5rem, 10vw, 6rem)', lineHeight: '1.1', marginBottom: '1rem', wordBreak: 'break-word', letterSpacing: '-0.02em' }}>
          Harshvardhan <br className="hide-mobile" /> Golekar
        </h1>
        <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', color: 'var(--text-primary)', marginBottom: '1.5rem', fontWeight: '600' }}>
          Full Stack Developer
        </h3>
        <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.35rem)', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 2rem', padding: '0 1rem', lineHeight: '1.6' }}>
          <strong style={{ color: 'var(--text-primary)' }}>I build scalable web apps.</strong> Specializing in crafting high-performance, AI-driven solutions for the modern web.
        </p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <div className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6db33f', background: 'rgba(109, 179, 63, 0.1)', padding: '0.6rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(109, 179, 63, 0.2)' }}>
            <SiSpringboot size={22} /> <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>Spring Boot</span>
          </div>
          <div className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#61dafb', background: 'rgba(97, 218, 251, 0.1)', padding: '0.6rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(97, 218, 251, 0.2)' }}>
            <SiReact size={22} /> <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>React</span>
          </div>
          <div className="tech-badge" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#47a248', background: 'rgba(71, 162, 72, 0.1)', padding: '0.6rem 1.2rem', borderRadius: '50px', border: '1px solid rgba(71, 162, 72, 0.2)' }}>
            <SiMongodb size={22} /> <span style={{ fontSize: '0.95rem', fontWeight: '600' }}>MongoDB</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
          <a href="#contact" className="primary-btn" style={{ 
            padding: '1rem 2.8rem', 
            borderRadius: '50px', 
            fontWeight: '700', 
            fontSize: '1.1rem',
            width: 'max-content',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            color: '#000',
            boxShadow: '0 10px 25px -5px rgba(0, 245, 255, 0.4)',
            transition: 'var(--transition-smooth)',
            border: 'none',
            cursor: 'pointer'
          }}>
            Hire Me
          </a>
          <a href="#projects" className="glass-card outline-btn" style={{ 
            padding: '1rem 2.8rem', 
            borderRadius: '50px', 
            fontWeight: '600', 
            fontSize: '1.1rem',
            width: 'max-content',
            transition: 'var(--transition-smooth)',
            cursor: 'pointer'
          }}>
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
