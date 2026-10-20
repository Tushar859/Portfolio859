import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const roles = [
  'MERN Stack Developer',
  'Gen AI & LLM Builder',
  'Full-Stack Engineer',
  'Competitive Programmer (300+ DSA)',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 75);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nameLetters = 'Tushar Mishra'.split('');

  return (
    <section className="hero" id="hero">
      {/* Floating geometric shapes */}
      <div className="hero-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
        <div className="shape shape-4" />
        <div className="shape shape-5" />
        <div className="shape shape-ring" />
        <div className="shape shape-ring-2" />
      </div>

      {/* Particles */}
      <div className="hero-particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Available for opportunities</span>
        </div>

        <h1 className="hero-name">
          {nameLetters.map((letter, i) => (
            <span
              key={i}
              className="hero-letter"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        <div className="hero-tagline">
          <span className="hero-tagline-prefix">&gt; </span>
          <span>{displayText}</span>
          <span className="typing-cursor" />
        </div>

        <p className="hero-description">
          Computer Science student at <span className="text-cyan">VIT Bhopal</span> crafting intelligent,
          scalable web applications powered by modern <span className="text-purple">MERN Stack</span> &amp; <span className="text-cyan">Generative AI</span>.
        </p>

        <div className="hero-cta">
          <button className="btn btn-primary magnetic-btn" onClick={() => scrollTo('projects')}>
            <span>View Projects</span>
            <span className="btn-shine" />
          </button>
          <button className="btn btn-outline magnetic-btn" onClick={() => scrollTo('contact')}>
            <span>Contact Me</span>
          </button>
        </div>

        <div className="social-links" style={{ marginTop: '2.5rem' }}>
          <a 
            href="https://github.com/Tushar859" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link github" 
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/mishtrat859" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link linkedin" 
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a 
            href="mailto:mishrat859@gmail.com" 
            className="social-link" 
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>

        <div className="scroll-indicator" onClick={() => scrollTo('about')}>
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>Explore Work</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
