import useCountUp from '../hooks/useCountUp';
import useTilt from '../hooks/useTilt';

const StatCard = ({ value, suffix = '', label }) => {
  const numericValue = parseFloat(value);
  const { count, ref } = useCountUp(numericValue, 2000);
  const tilt = useTilt(8);

  return (
    <div className="stat-card tilt-card" ref={ref} {...tilt}>
      <span className="stat-value">
        {value.includes('.') ? count.toFixed(2) : count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title">
          About <span className="text-gradient">Me</span>
        </h2>

        {/* Terminal-style card */}
        <div className="terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
            </div>
            <span className="terminal-title">tushar@portfolio ~ </span>
          </div>
          <div className="terminal-body">
            <div className="terminal-line">
              <span className="terminal-prompt">$</span>
              <span className="terminal-command"> cat about.txt</span>
            </div>
            <div className="terminal-output">
              <p>
                I'm a passionate <span className="text-cyan">Computer Science</span> student at
                VIT Bhopal with a strong focus on{' '}
                <span className="text-purple">full-stack development</span> and{' '}
                <span className="text-pink">Generative AI</span>.
              </p>
              <p style={{ marginTop: '0.75rem' }}>
                I love building intelligent applications that solve real-world problems
                using the MERN stack and cutting-edge AI technologies like RAG,
                LangChain, and LLMs. With 300+ DSA problems solved and hands-on
                experience building AI-powered platforms, I'm constantly pushing the
                boundaries of what's possible with code.
              </p>
            </div>
            <div className="terminal-line" style={{ marginTop: '1rem' }}>
              <span className="terminal-prompt">$</span>
              <span className="terminal-cursor">█</span>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <StatCard value="300" suffix="+" label="DSA Problems" />
          <StatCard value="2" suffix="+" label="Projects Built" />
          <StatCard value="8.56" label="CGPA" />
          <StatCard value="2027" suffix="" label="Grad Year" />
        </div>
      </div>
    </section>
  );
};

export default About;
