import { useEffect, useRef, useState } from "react";

function About() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = aboutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
      className={`about-section ${isVisible ? "about-visible" : ""}`}
      id="about"
      ref={aboutRef}
    >
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-content">

          <p className="about-label">A LITTLE ABOUT</p>

          <h2 className="about-title">
            Who I am<span>.</span>
          </h2>

          <p className="about-intro">
            I'm Akshaya, a Computer Science graduate and a fresher
            beginning my career in front-end development.
          </p>

          <p className="about-text">
            I have built my foundation in web development through
            HTML, CSS and JavaScript, and I'm currently learning
            React to strengthen my front-end development skills.
          </p>

          <p className="about-text">
            At this stage of my career, I'm focused on learning,
            building projects and gaining practical experience as
            I take my first steps into the software industry.
          </p>

        </div>

        {/* RIGHT SIDE - EDUCATION ORBIT */}
        <div className="education-orbit">

          <div className="orbit-ring orbit-ring-one"></div>

          <div className="orbit-ring orbit-ring-two"></div>

          <div className="orbit-dot"></div>

          <div className="education-content">
          

            <p className="education-label">EDUCATION</p>

            <h3>B.Sc. Computer Science</h3>

            <p className="education-college">
              Sankara College of Science and Commerce
            </p>

            <p className="education-year">
              2023 — 2026
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;