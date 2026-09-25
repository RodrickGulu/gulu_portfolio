import "./App.css";
import { useEffect, useMemo, useState } from "react";

const skills = [
  "React",
  "JavaScript",
  "Python",
  "Java",
  "Flask",
  "Spring Boot",
  "Machine Learning",
  "Deep Learning",
  "Git & GitHub",
];

const services = [
  {
    title: "Brand Identity",
    text: "Visual systems and creative direction that make a brand feel clear, premium, and memorable.",
  },
  {
    title: "UX / UI Design",
    text: "Thoughtful interfaces built for ease, clarity, and conversion across digital products.",
  },
  {
    title: "Web Experiences",
    text: "Responsive, high-performing websites that blend design polish with strong technical execution.",
  },
];

const experience = [
  {
    title: "ICT Intern",
    place: "NGAAF Headquarters",
    date: "2026",
    description: "Supported internal IT systems, troubleshooting workflows, and digital operations for a modern workplace.",
  },
  {
    title: "IT Attachment",
    place: "Kenya National Archives",
    date: "2022",
    description: "Worked on records systems and documentation workflows to make information easier to manage and access.",
  },
  {
    title: "BSc Information Technology",
    place: "DeKUT",
    date: "2025",
    description: "Focused on software engineering, AI, and systems design with hands-on project development.",
  },
];

const projects = [
  {
    title: "Glaucoma AI Detection",
    description: "Deep learning model for glaucoma diagnosis built around medical image analysis and healthcare insight.",
    link: "https://github.com/RodrickGulu/Final_Year_Project/blob/main/training_model_with_blurry_image_filter.ipynb",
    tag: "AI / Healthcare",
    preview: "AI-driven medical screening workflow focused on high-clarity patient diagnostics.",
    previewUrl: "https://glaucoma-detection.vercel.app/",
  },
  {
    title: "Retinal Image Classifier",
    description: "A classifier to validate retinal images and identify unsupported uploads with strong visual signal processing.",
    link: "https://github.com/RodrickGulu/Final_Year_Project/blob/main/retinal1.ipynb",
    tag: "Computer Vision",
    preview: "Image-validation system designed to flag unsupported inputs before classification.",
    previewUrl: "https://github.com/RodrickGulu/Final_Year_Project",
  },
  {
    title: "Hit After Hit Studio Website",
    description: "A refined studio website showcasing a creative business through a calm, premium digital presence.",
    link: "https://hahrec.vercel.app/",
    tag: "Web Design",
    preview: "Editorial-style landing page with a soft luxury aesthetic and clear conversion flow.",
    previewUrl: "https://hahrec.vercel.app/",
  },
  {
    title: "GitHub Portfolio",
    description: "A curated collection of React, Flask, and machine learning work built with clarity and purpose.",
    link: "https://github.com/RodrickGulu",
    tag: "Open Source",
    preview: "A curated developer portfolio hub tying together code experiments and product work.",
    previewUrl: "https://github.com/RodrickGulu",
  },
];

const projectCategories = ["All", ...new Set(projects.map((project) => project.tag))];

const socialLinks = [
  { name: "Email", href: "mailto:rodrickgulu13@gmail.com", icon: "✉" },
  { name: "GitHub", href: "https://github.com/RodrickGulu", icon: "GH" },
  { name: "WhatsApp", href: "https://wa.me/254791008970", icon: "WA" },
];

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
    document.body.classList.toggle("premium", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tag === activeFilter);
  }, [activeFilter]);

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <header className="navbar">
        <div className="brand">Rodrick Gulu</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero reveal" id="home">
          <div className="hero__content">
            <span className="eyebrow">Designer • Developer • Creative Technologist</span>
            <h1>Designing elegant digital experiences that feel as good as they work.</h1>
            <p>
              I build thoughtful interfaces, polished web experiences, and AI-driven products that balance function, taste, and clarity.
            </p>

            <div className="hero__actions">
              <a className="primary-btn" href="#projects">
                View Projects
              </a>
              <a className="secondary-btn" href="/cv.pdf" download>
                Download CV
              </a>
            </div>

            <div className="hero__meta">
              <span>Available for freelance</span>
              <span>Based in Kenya</span>
            </div>
          </div>

          <div className="hero__panel">
            <div className="profile-stage">
              <div className="profile-visual">
                <div className="portrait">
                  <div className="portrait__glow" />
                  <div className="portrait__figure">
                    <div className="portrait__head" />
                    <div className="portrait__body" />
                  </div>
                  <div className="portrait__ring portrait__ring--one" />
                  <div className="portrait__ring portrait__ring--two" />
                </div>
                <div className="status-pill">Available for projects</div>
              </div>

              <div className="profile-card">
                <div className="profile-card__top">
                  <div className="profile-badge">RG</div>
                  <span className="mini-tag">Portfolio 2026</span>
                </div>
                <div className="profile-meta">
                  <span className="label">Current focus</span>
                  <h3>Brand systems, product interfaces, and AI-enhanced experiences.</h3>
                </div>
                <div className="stack-list">
                  {skills.slice(0, 6).map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section reveal" id="services">
          <div className="section-header">
            <span className="eyebrow">Capabilities</span>
            <h2>Designing with clarity, emotion, and purpose.</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">0{services.indexOf(service) + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section reveal" id="about">
          <div className="section-header">
            <span className="eyebrow">About</span>
            <h2>Turning ideas into useful digital products.</h2>
          </div>

          <div className="about__grid">
            <div className="about__text">
              <p>
                I am Rodrick Gulu, an IT graduate from Dedan Kimathi University of Technology,
                driven by the belief that technology should be both useful and beautifully considered.
              </p>
              <p>
                My work spans web development, backend systems, and machine learning projects,
                including retinal image analysis and deep learning-powered healthcare tools.
              </p>
            </div>

            <div className="about__card">
              <span className="quote-mark">“</span>
              <p>
                I bring together clean design thinking and practical engineering to create products
                that feel refined and work smoothly.
              </p>
            </div>
          </div>
        </section>

        <section className="experience section reveal" id="experience">
          <div className="section-header">
            <span className="eyebrow">Experience</span>
            <h2>My journey so far.</h2>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <div className="timeline-item" key={`${item.title}-${item.date}`}>
                <div className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <div className="timeline-topline">
                    <h3>{item.title}</h3>
                    <span>{item.date}</span>
                  </div>
                  <p className="timeline-place">{item.place}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="projects section reveal" id="projects">
          <div className="section-header">
            <span className="eyebrow">Projects</span>
            <h2>Selected work.</h2>
          </div>

          <div className="filter-bar" aria-label="Project categories">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={activeFilter === category ? "filter-btn active" : "filter-btn"}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-actions">
                  <button
                    type="button"
                    className={expandedProject === project.title ? "project-btn active" : "project-btn"}
                    onClick={() =>
                      setExpandedProject((current) => (current === project.title ? null : project.title))
                    }
                  >
                    {expandedProject === project.title ? "Hide Preview" : "Preview"}
                  </button>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </div>

                {expandedProject === project.title && (
                  <div className="project-preview" aria-live="polite">
                    <div className="preview-window">
                      <div className="preview-window__bar">
                        <span className="preview-dot preview-dot--red" />
                        <span className="preview-dot preview-dot--yellow" />
                        <span className="preview-dot preview-dot--green" />
                        <span className="preview-label">{project.title}</span>
                      </div>

                      <div className="preview-window__body">
                        {project.previewUrl ? (
                          <div className="preview-viewport">
                            <iframe
                              src={project.previewUrl}
                              title={`${project.title} website preview`}
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                            />
                          </div>
                        ) : (
                          <>
                            <div className="preview-window__hero" />
                            <div className="preview-window__content">
                              <strong>{project.title}</strong>
                              <p>{project.preview}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="skills section reveal" id="skills">
          <div className="section-header">
            <span className="eyebrow">Skills</span>
            <h2>Tools and technologies I work with.</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="contact section reveal" id="contact">
          <div className="contact-card">
            <span className="eyebrow">Contact</span>
            <h2>Let’s build something meaningful together.</h2>
            <div className="contact-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="social-icon">{link.icon}</span>
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__brand">
          <span className="footer__mark">RG</span>
          <div>
            <strong>Rodrick Gulu</strong>
            <span>Creative developer</span>
          </div>
        </div>

        <div className="footer__socials">
          {socialLinks.map((link) => (
            <a
              key={`${link.name}-footer`}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <p>© {new Date().getFullYear()} Rodrick Gulu</p>
        <p>Built with React • Crafted for premium digital storytelling</p>
      </footer>
    </div>
  );
}

export default App;