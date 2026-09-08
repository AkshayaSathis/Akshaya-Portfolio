import { useEffect, useRef } from "react";

import htmlIcon from "../icons/html.svg";
import cssIcon from "../icons/css.svg";
import javascriptIcon from "../icons/javascript.svg";
import reactIcon from "../icons/react.svg";
import pythonIcon from "../icons/python.svg";
import gitIcon from "../icons/git.svg";
import githubIcon from "../icons/github.svg";
import vscodeIcon from "../icons/vscode.svg";

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const section = skillsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("skills-visible");
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

  const skills = [
  {
    name: "HTML",
    icon: htmlIcon,
  },
  {
    name: "CSS",
    icon: cssIcon,
  },
  {
    name: "JavaScript",
    icon: javascriptIcon,
  },
  {
    name: "React",
    icon: reactIcon,
  },
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "Git",
    icon: gitIcon,
  },
  {
    name: "GitHub",
    icon: githubIcon,
  },
  {
    name: "VS Code",
    icon: vscodeIcon,
  },
];

  return (
    <section
      className="skills-section"
      id="skills"
      ref={skillsRef}
    >
      <div className="skills-heading">
        <p className="skills-label">SKILLS</p>

        <h2>
          What I <span>work with.</span>
        </h2>

        <p className="skills-description">
          Technologies and tools I use while building my foundation in
          front-end development.
        </p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-card"
            key={skill.name}
            style={{ "--skill-delay": `${index * 0.08}s` }}
          >
            <div
              className={`skill-icon-wrapper ${
                skill.name === "GitHub" ? "github-icon-wrapper" : ""
              }`}
            >
              <img
                src={skill.icon}
                alt={`${skill.name} logo`}
              />
            </div>

            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;