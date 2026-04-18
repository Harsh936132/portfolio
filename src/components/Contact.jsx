import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--text-secondary)' }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '3rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📧</div>
              <a href="mailto:harshvardhangolekar108@gmail.com" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                harshvardhangolekar108@gmail.com
              </a>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
              <a href="tel:+917559108794" style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                +91-7559108794
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="https://github.com/Harsh936132" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '0.8rem 1.5rem', borderRadius: '50px' }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/harshvardhan-golekar-85bb50234" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '0.8rem 1.5rem', borderRadius: '50px' }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <footer style={{ marginTop: '6rem', textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--glass-border)' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 Harshvardhan Golekar. Built with React & Passion.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
