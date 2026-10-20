import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const achievements = [
  {
    icon: <SiLeetcode />,
    title: 'LeetCode',
    description: 'Solved 300+ Data Structures and Algorithms problems and earned the prestigious 200 Days Coding Badge.',
    highlight: '300+ Problems',
  },
  {
    icon: <SiGeeksforgeeks />,
    title: 'GeeksforGeeks',
    description: 'Solved 100+ Data Structures and Algorithms problems, strengthening core CS fundamentals.',
    highlight: '100+ Problems',
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title">
          <span className="text-gradient">Achievements</span>
        </h2>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <div className="achievement-card stagger-child" key={item.title}>
              <div className="achievement-icon">
                {item.icon}
              </div>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
              <div className="font-mono text-cyan" style={{ marginTop: '1rem', fontSize: '0.9rem', fontWeight: 600 }}>
                {item.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
