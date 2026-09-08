import { useEffect, useRef } from "react";

function Certifications() {
  const certificationsRef = useRef(null);

  useEffect(() => {
    const section = certificationsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("certifications-visible");
        } else {
          section.classList.remove("certifications-visible");
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
const certifications = [
  {
    number: "01",
    title: "Web Designing using Firebase",
    issuer: "Certificate",
    file: `${import.meta.env.BASE_URL}certificates/web-designing.pdf`,
  },
  {
    number: "02",
    title: "UI/UX Design & Development using Figma",
    issuer: "Certificate",
    file: `${import.meta.env.BASE_URL}certificates/ui-ux-figma.pdf`,
  },
  {
    number: "03",
    title: "AR/VR, Cybersecurity & Drone Technology",
    issuer: "Christ University",
    file: `${import.meta.env.BASE_URL}certificates/christ-university.pdf`,
  },
  {
    number: "04",
    title: "Python Basics",
    issuer: "Infosys Springboard",
    file: `${import.meta.env.BASE_URL}certificates/python-basics.pdf`,
  },
  {
    number: "05",
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    file: `${import.meta.env.BASE_URL}certificates/prompt-engineering.pdf`,
  },
];
  

  return (
    <section
      className="certifications-section"
      id="certifications"
      ref={certificationsRef}
    >
      {/* HEADING */}

      <div className="certifications-heading">
        <p className="certifications-label">CERTIFICATIONS</p>

        <h2>
          Learning beyond the <span>classroom.</span>
        </h2>

        <p className="certifications-description">
          Certifications that support my technical skills and
          continuous learning.
        </p>
      </div>


      {/* CERTIFICATION GRID */}

      <div className="certifications-grid">
        {certifications.map((certificate, index) => (
          <div
            className="certification-card"
            key={certificate.number}
            style={{
              "--certificate-delay": `${0.15 + index * 0.12}s`,
            }}
          >
            <div className="certificate-number">
              {certificate.number}
            </div>

            <div className="certificate-content">
              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>
            </div>

            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-button"
            >
              View Certificate
              <span>↗</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;