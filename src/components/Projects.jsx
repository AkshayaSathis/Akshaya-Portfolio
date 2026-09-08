import { useEffect, useRef } from "react";

function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const section = projectsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("projects-visible");
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      className="projects-section"
      id="projects"
      ref={projectsRef}
    >
      {/* =========================
          HEADING
      ========================= */}

      <div className="projects-heading">
        <p className="projects-label">PROJECTS</p>

        <h2>
          Things I've <span>built.</span>
        </h2>

        <p className="projects-description">
          A selection of projects I've built while learning and
          developing my skills in web development and programming.
        </p>
      </div>


      {/* =========================
          FEATURED PROJECT
      ========================= */}

      <article className="featured-project">

        {/* LEFT SIDE */}

        <div className="featured-content">

          <div className="project-meta">
            <span>01</span>
            <span>FEATURED PROJECT</span>
          </div>

          <h3>Fake Content Detection</h3>

          <p className="featured-description">
            A hybrid machine learning and deep learning application
            that detects whether text and image-based content is
            real or fake.
          </p>

          <div className="project-tech">
            <span>Python</span>
            <span>TF-IDF</span>
            <span>LinearSVC</span>
            <span>MobileNetV2</span>
            <span>Streamlit</span>
          </div>

          <a
            href="https://github.com/AkshayaSathis/FakeContentDetection"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            View on GitHub
            <span>↗</span>
          </a>

        </div>


        {/* RIGHT SIDE - PROJECT PREVIEW */}

        <div className="project-preview">

          <div className="preview-window">

            <div className="preview-header">
              <div className="preview-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <p>Fake Content Detector</p>
            </div>


            <div className="preview-body">

              <p className="preview-label">
                CONTENT ANALYSIS
              </p>

              <div className="preview-input">
                <span className="typing-text">
                  Analyze the given content...
                </span>
                <span className="cursor"></span>
              </div>

              <button className="preview-button">
                ANALYZE
              </button>

              <div className="preview-result">
                <div className="result-dot"></div>

                <div>
                  <span>DETECTION RESULT</span>
                  <strong>REAL / FAKE</strong>
                </div>
              </div>

            </div>

          </div>

        </div>

      </article>


      {/* =========================
          OTHER PROJECTS
      ========================= */}

      <div className="other-projects-title">
        <span>OTHER PROJECTS</span>
      </div>


      <div className="other-projects">

        {/* EMPLOYEE DIRECTORY */}

        <article className="project-card">

          <div className="card-top">
            <span className="card-number">02</span>

            <span className="card-category">
              REACT
            </span>
          </div>

          <h3>Employee Directory</h3>

          <p>
            A responsive employee management application with
            add, edit, delete and search functionality, along
            with form validation.
          </p>

          <div className="card-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <div className="card-links">

            <a
              href="https://github.com/AkshayaSathis/Employee-Directory-React"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            

          </div>

        </article>


        {/* STATVISTA */}

        <article className="project-card">

          <div className="card-top">
            <span className="card-number">03</span>

            <span className="card-category">
              JAVASCRIPT
            </span>
          </div>

          <h3>StatVista</h3>

          <p>
            A simple statistics calculator that analyzes numbers
            and calculates mean, median, mode and range.
          </p>

          <div className="card-tech">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          <div className="card-links">

            <a
              href="https://github.com/AkshayaSathis/statistics"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            

          </div>

        </article>

      </div>

    </section>
  );
}

export default Projects;