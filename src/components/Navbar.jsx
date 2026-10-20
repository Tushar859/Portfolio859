import { useState, useEffect } from 'react';
import { 
  FiHome, 
  FiUser, 
  FiCode, 
  FiFolder, 
  FiBookOpen, 
  FiMail, 
  FiSend,
  FiZap 
} from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: 'hero', icon: FiHome },
  { label: 'About', href: 'about', icon: FiUser },
  { label: 'Skills', href: 'skills', icon: FiCode },
  { label: 'Projects', href: 'projects', icon: FiFolder },
  { label: 'Education', href: 'education', icon: FiBookOpen },
  { label: 'Contact', href: 'contact', icon: FiMail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => document.getElementById(item.href));
      const scrollPos = window.scrollY + window.innerHeight * 0.35;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`floating-dock-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="floating-dock" aria-label="Main Navigation">
        {/* Glow ambient background aura */}
        <div className="dock-ambient-glow" />

        {/* Brand / Avatar pill */}
        <a 
          href="#hero" 
          className="dock-brand" 
          onClick={(e) => handleNavClick(e, 'hero')}
          title="Tushar Mishra Portfolio"
        >
          <div className="dock-logo-box">
            <span className="logo-sparkle"><FiZap /></span>
            <span className="logo-monogram">TM</span>
          </div>
        </a>

        <div className="dock-divider" />

        {/* Main Navigation Icons / Pills */}
        <ul className="dock-links">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href;
            return (
              <li key={item.href} className="dock-item">
                <a
                  href={`#${item.href}`}
                  className={`dock-link ${isActive ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="dock-icon-wrapper">
                    <Icon className="dock-icon" />
                  </span>
                  <span className="dock-label">{item.label}</span>
                  {isActive && <span className="dock-active-pill" />}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="dock-divider" />

        {/* Action Button: Let's Talk */}
        <a
          href="#contact"
          className="dock-cta-btn"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          <span className="cta-icon"><FiSend /></span>
          <span className="cta-text">Let's Talk</span>
          <span className="cta-glow-ring" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
