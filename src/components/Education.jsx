const educationData = [
  {
    year: '2023 – 2027 (Expected)',
    institution: 'Vellore Institute Of Technology',
    degree: 'B.Tech in Computer Science & Engineering (AIML)',
    score: 'CGPA: 8.56',
  },
  {
    year: '2020 – 2021',
    institution: 'Divine Public School',
    degree: 'Class XII – CBSE',
    score: 'Percentage: 93.6%',
  },
  {
    year: '2018 – 2019',
    institution: "St. Joseph's School",
    degree: 'Class X – CBSE',
    score: 'Percentage: 85.6%',
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="section-container animate-on-scroll">
        <h2 className="section-title">
          My <span className="text-gradient">Education</span>
        </h2>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-card">
                <span className="timeline-date">{item.year}</span>
                <h3 className="timeline-title">{item.institution}</h3>
                <p className="timeline-subtitle">{item.degree}</p>
                <p className="timeline-description">
                  {item.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
