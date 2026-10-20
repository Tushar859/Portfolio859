import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

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
        {/* Availability Badge */}
        <div className="hero-badge">
          <span className="badge-dot" />
          <span>Open to Software Developer Internships</span>
        </div>

        {/* Main Heading */}
        <h1 className="hero-name">
          Hi, I'm <span className="hero-name-gradient">Tushar Mishra.</span>
        </h1>

        {/* Professional Title */}
        <h2 className="hero-title">
          Full-Stack Developer &amp; GenAI Builder
        </h2>

        {/* Description */}
        <p className="hero-description">
          I build full-stack web applications and AI-powered products using the MERN stack, large language models, and retrieval-augmented generation.
        </p>

        {/* CTA Actions */}
        <div className="hero-cta">
          <button 
            type="button"
            className="btn btn-primary magnetic-btn" 
            onClick={() => scrollTo('projects')}
          >
            <span>View Projects</span>
            <FiArrowRight className="btn-icon" />
            <span className="btn-shine" />
          </button>
          
          <a 
            href="/Tushar_Mishra_Resume.pdf" 
            download="Tushar_Mishra_Resume.pdf"
            className="btn btn-outline magnetic-btn hero-resume-btn"
          >
            <FiDownload className="btn-icon" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Social Links */}
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

        {/* Scroll Indicator */}
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
