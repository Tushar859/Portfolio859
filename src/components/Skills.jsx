import { FiLayout, FiServer, FiCpu, FiDatabase, FiShield, FiTool } from 'react-icons/fi';
import useTilt from '../hooks/useTilt';

const skillCategories = [
  {
    icon: <FiLayout />,
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React.js', 'Context API', 'Streamlit'],
  },
  {
    icon: <FiServer />,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Mongoose'],
  },
  {
    icon: <FiCpu />,
    title: 'AI / LLM',
    skills: ['Python', 'RAG', 'LangChain', 'Hugging Face', 'Sentence Transformers', 'Groq API', 'Llama'],
  },
  {
    icon: <FiDatabase />,
    title: 'Database',
    skills: ['MongoDB', 'SQL', 'FAISS'],
  },
  {
    icon: <FiShield />,
    title: 'Auth & Security',
    skills: ['JWT', 'bcrypt', 'OTP Email Verification'],
  },
  {
    icon: <FiTool />,
    title: 'Tools & APIs',
    skills: ['Google Gemini API', 'Nodemailer', 'Puppeteer', 'Multer', 'PyPDFLoader', 'C++'],
  },
];

const SkillCard = ({ category }) => {
  const tilt = useTilt(6);

  return (
    <div className="skill-category tilt-card stagger-child" {...tilt}>
      <div className="skill-category-title">
        {category.icon}
        {category.title}
      </div>
      <div className="skill-tags">
        {category.skills.map((skill) => (
          <span className="skill-tag" key={skill}>
            {skill}
          </span>
        ))}
      </div>
      <div className="card-glow-effect" />
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
