import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack React application with Node.js backend, featuring user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced analytics.",
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Tailwind"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered content creation tool with natural language processing and automated optimization.",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      link: "#"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "Node.js", "Python", "PostgreSQL", "MongoDB",
    "AWS", "Docker", "GraphQL", "REST APIs"
  ];

  return (
    <div className="portfolio">
      <style>{`
       .hero-content {
  max-width: 800px;
  padding: 0 2rem;
  opacity: $ {
    isloaded? '1' : "0";
  }
  transform: translateY(${isLoaded ? "0": "30px"});
  transition: all 1s ease-out;
}

      `}</style>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#hero" className="logo" onClick={() => scrollToSection('hero')}>
            RS
          </a>
          <ul className="nav-links">
            <li><a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Rimsha Shahid</h1>
          <p className="hero-subtitle">Full-Stack Web Developer</p>
          <p className="hero-description">
            Crafting digital experiences with clean code and innovative solutions. 
            Specialized in modern web technologies and user-centric design.
          </p>
          <button className="cta-button" onClick={() => scrollToSection('projects')}>
            View My Work
            <ExternalLink size={20} />
          </button>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <ChevronDown size={24} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I&apos;m a passionate full-stack developer with a keen eye for detail and a love for creating 
              seamless digital experiences. With expertise in modern web technologies, I transform 
              complex problems into elegant, user-friendly solutions.
            </p>
            <br />
            <p>
              My approach combines technical excellence with creative problem-solving, ensuring that 
              every project not only meets requirements but exceeds expectations. I believe in writing 
              clean, maintainable code and staying current with industry best practices.
            </p>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years</div>
            </div>
            <div className="stat">
              <div className="stat-number">20+</div>
              <div className="stat-label">Clients</div>
            </div>
          </div>
        </div>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill">{skill}</div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project
                <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2 className="section-title">Let&apos;s Work Together</h2>
        <div className="contact-content">
          <p className="contact-description">
            Ready to bring your ideas to life? I&apos;m always excited to work on new projects 
            and collaborate with amazing people.
          </p>
          <div className="contact-methods">
            <a href="mailto:rimsha@example.com" className="contact-method">
              <Mail size={20} />
              Email Me
            </a>
            <a href="https://linkedin.com/in/rimshashahid" className="contact-method">
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a href="https://github.com/rimshashahid" className="contact-method">
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Rimsha Shahid. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;