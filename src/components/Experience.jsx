import { useEffect, useRef } from "react";

function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const section = experienceRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("experience-visible");
        } else {
          section.classList.remove("experience-visible");
        }
      },
      {
        threshold: 0.25,
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
      className="experience-section"
      id="experience"
      ref={experienceRef}
    >
      {/* =========================
          HEADING
      ========================= */}

      <div className="experience-heading">
        <p className="experience-label">EXPERIENCE</p>

        <h2>
          My first professional <span>step.</span>
        </h2>
      </div>


      {/* =========================
          EXPERIENCE CARD
      ========================= */}

      <article className="experience-card">

        <div className="experience-number">
          01
        </div>


        <div className="experience-main">

          <div className="experience-top">

            <div>
              <p className="experience-type">
                WEB TECHNOLOGY
              </p>

              <h3>
                Web Technology Intern
              </h3>

              <p className="experience-company">
                Gateway Software Solutions
              </p>
            </div>

            <div className="experience-duration">
              15 DAYS
            </div>

          </div>


          <div className="experience-divider"></div>


          <p className="experience-description">
            Completed a 15-day internship in Web Technology,
            gaining practical exposure to front-end development
            and web design using HTML, CSS and JavaScript.
          </p>


          <div className="experience-bottom">

            <div className="experience-skills">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Web Design</span>
            </div>


            {/* Certificate button */}

            <a
  href="/certificates/internship-certificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="certificate-button"
>
  View Certificate
  <span>↗</span>
</a>

          </div>

        </div>

      </article>

    </section>
  );
}

export default Experience;