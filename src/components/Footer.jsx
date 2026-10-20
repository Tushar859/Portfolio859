import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <p>
        Designed & Built with <span className="footer-heart">♥</span> by{' '}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
          Tushar Mishra
        </a>
      </p>
      <p style={{ marginTop: '0.5rem' }}>
        &copy; {new Date().getFullYear()} All Rights Reserved.
      </p>
      <div className="social-links" style={{ marginTop: '1rem', gap: '0.75rem' }}>
        <a href="https://github.com/Tushar859" target="_blank" rel="noopener noreferrer" className="social-link github" style={{ width: '36px', height: '36px', fontSize: '0.95rem' }}>
          <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/mishtrat859" target="_blank" rel="noopener noreferrer" className="social-link linkedin" style={{ width: '36px', height: '36px', fontSize: '0.95rem' }}>
          <FiLinkedin />
        </a>
        <a href="mailto:mishrat859@gmail.com" className="social-link" style={{ width: '36px', height: '36px', fontSize: '0.95rem' }}>
          <FiMail />
        </a>
      </div>
      <button className="back-to-top social-link" onClick={scrollToTop} aria-label="Back to top" style={{ margin: '1.5rem auto 0', display: 'flex' }}>
        <FiArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
