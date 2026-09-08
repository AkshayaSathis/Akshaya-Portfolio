import { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const section = contactRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("contact-visible");
        } else {
          section.classList.remove("contact-visible");
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
      className="contact-section"
      id="contact"
      ref={contactRef}
    >
      <div className="contact-container">

        {/* CONTACT */}

        <div className="contact-content">

          <p className="contact-label">LET'S CONNECT</p>

          <p className="contact-description">
            Open to opportunities and collaborations.
          </p>

          <div className="contact-socials">

            {/* EMAIL */}

            <a
              href="mailto:akshayasathis2005@gmail.com"
              className="contact-social"
            >
              <span className="contact-icon">✉</span>

              <span>Email</span>
            </a>


            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/akshayasathis2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <span className="contact-icon linkedin-icon">
                in
              </span>

              <span>LinkedIn</span>
            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/AkshayaSathis"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social"
            >
              <span className="contact-icon github-icon">
  <FaGithub />
</span>
              <span>GitHub</span>
            </a>

          </div>

        </div>


        {/* FOOTER */}

        <footer className="portfolio-footer">

          <div className="footer-line"></div>

          <div className="footer-content">

            <p>
              © 2026 Akshaya S.
            </p>

            <p>
              Front-End Developer
            </p>

          </div>

        </footer>

      </div>
    </section>
  );
}

export default Contact;