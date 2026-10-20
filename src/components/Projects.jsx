import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import useTilt from '../hooks/useTilt';

const projects = [
  {
    number: '01',
    title: 'MediBot – AI Medical Chatbot',
    year: '2026',
    description:
      'A Streamlit medical chatbot using Retrieval-Augmented Generation (RAG) to answer questions from a medical encyclopedia PDF. Features PDF ingestion pipeline, semantic retrieval with FAISS, and LangChain\'s RetrievalQA chain with Groq-hosted Llama.',
    tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'Hugging Face', 'Groq API', 'Llama'],
    github: '#',
    demo: '#',
  },
  {
    number: '02',
    title: 'InterviewAI – AI Interview Prep',
    year: '2025',
    description:
      'AI-powered interview prep platform analyzing PDF resumes and job descriptions to generate personalized reports with job-match scores, questions, skill gap analysis, and preparation roadmaps. Includes ATS-friendly resume generation.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'JWT', 'Puppeteer'],
    github: '#',
    demo: '#',
  },
];

const ProjectCard = ({ project, index }) => {
  const tilt = useTilt(5);

  return (
    <div className="project-card tilt-card stagger-child" {...tilt}>
      <div className="project-header">
        <FiFolder className="project-icon" />
        <div className="project-links">
          <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={project.demo} className="project-link" target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
            <FiExternalLink />
          </a>
        </div>
      </div>
      <span className="project-number font-mono">#{project.number}</span>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-year font-mono text-cyan" style={{ fontSize: '0.8rem', marginBottom: '0.75rem' }}>{project.year}</p>
      <p className="project-description">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((t) => (
          <span className="tech-tag" key={t}>{t}</span>
        ))}
      </div>
      <div className="card-glow-effect" />
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
