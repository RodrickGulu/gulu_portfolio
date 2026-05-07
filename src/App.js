import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <h2>Rodrick Gulu Jonathan</h2>
        <nav>
          <a href="#home">Home</a>
	  <a href="#about">About</a>
	  <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
	  <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <h1>IT Graduate & Developer</h1>
        <p>React • Flask • Spring Boot • AI Systems</p>
        <button><a href="https://github.com/RodrickGulu" className="btn-btn">View Projects</a></button>
	<a href="/cv.pdf" className="cv-btn" download>
  Download CV
</a>
      </section>

	{/* ABOUT */}
<section className="about" id="about">
  <h2>About Me</h2>

  <p>
    I am Rodrick Gulu, an IT graduate from Dedan Kimathi University of Technology,
    passionate about building real-world software solutions in web development,
    machine learning, and backend systems.
  </p>

  <p>
    I have worked with React, Flask, Spring Boot, and deep learning models,
    including a glaucoma detection system and retinal image classification project.
  </p>

  <p>
    I enjoy turning ideas into working systems and continuously improving my skills
    in software engineering and AI development.
  </p>
</section>

{/* EXPERIENCE */}
<section className="experience" id="experience">
  <h2>Experience</h2>

  <div className="timeline">

    <div className="timeline-item">
      <h3>ICT Intern — NGAAF Headquarters</h3>
      <span>2026</span>
      <p>
        Assisted in ICT support, systems maintenance, and internal IT operations.
      </p>
    </div>

    <div className="timeline-item">
      <h3>IT Attachment — Kenya National Archives</h3>
      <span>2022</span>
      <p>
        Worked on digital records management and documentation systems.
      </p>
    </div>

    <div className="timeline-item">
      <h3>BSc Information Technology — DeKUT</h3>
      <span>2025</span>
      <p>
        Specialized in software development, AI, and systems engineering.
      </p>
    </div>

  </div>
</section>

      {/* PROJECTS */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
	  <div className="grid">

  <div className="card">
    <h3>Glaucoma AI Detection</h3>
    <p>Deep learning model for glaucoma diagnosis using retinal images.</p>
    <a href="https://github.com/RodrickGulu/Final_Year_Project/blob/main/training_model_with_blurry_image_filter.ipynb" target="_blank" rel="noreferrer">
      View Project
    </a>
  </div>

  <div className="card">
    <h3>Retinal Image Classifier</h3>
    <p>Detects whether uploaded images are retinal or invalid.</p>
    <a href="https://github.com/RodrickGulu/Final_Year_Project/blob/main/retinal1.ipynb" target="_blank" rel="noreferrer">
      View Project
    </a>
  </div>

<div className="card">
    <h3>Hit After Hit Studio Website</h3>
    <p>A website for the Studio Hit After Hit, based in Mtwapa, Mombasa.</p>
    <a href="https://hahrec.vercel.app/" rel="noreferrer">
      View Website
    </a>
  </div>

  <div className="card">
    <h3>GitHub Portfolio</h3>
    <p>Collection of React, Flask, and ML projects.</p>
    <a href="https://github.com/RodrickGulu" target="_blank" rel="noreferrer noopener">
      View GitHub
    </a>
  </div>

</div>
      </section>

{/* SKILLS */}
<section className="skills" id="skills">
  <h2>Skills</h2>

  <div className="skills-grid">
    <div className="skill">React</div>
    <div className="skill">JavaScript</div>
    <div className="skill">Python</div>
    <div className="skill">Flask</div>
    <div className="skill">Spring Boot</div>
    <div className="skill">Machine Learning</div>
    <div className="skill">Deep Learning</div>
    <div className="skill">Git & GitHub</div>
  </div>
</section>

{/* CONTACT */}
<section className="contact" id="contact">
  <h2>Contact Me</h2>

  <p>Let’s build something meaningful together.</p>

  <div className="contact-box">

    <a href="mailto:rodrickgulu13@gmail.com">
      📧 Email Me
    </a>

    <a href="https://github.com/RodrickGulu" target="_blank">
      💻 GitHub
    </a>

    <a href="https://wa.me/254791008970" target="_blank">
      💬 WhatsApp
    </a>

  </div>
</section>

{/* FOOTER */}
<footer className="footer">
  <p>© {new Date().getFullYear()} Rodrick Gulu</p>

  <p>
    Built with React • Deployed as a Developer Portfolio
  </p>
</footer>

    </div>
  );
}

export default App;
