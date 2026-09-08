import { useEffect, useRef, useState } from "react";

function Home() {
  const homeRef = useRef(null);
  const [displayName, setDisplayName] = useState("");
  const [animationKey, setAnimationKey] = useState(0);

  const name = "Akshaya";

  // Restart the name animation whenever the Home section
  // becomes visible again.
  useEffect(() => {
    const section = homeRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((prev) => prev + 1);
        }
      },
      {
        threshold: 0.4,
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

  // Type "Akshaya" letter by letter.
  useEffect(() => {
    setDisplayName("");

    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < name.length) {
        setDisplayName(name.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 250);

    return () => clearInterval(typingInterval);
  }, [animationKey]);

  return (
    <section ref={homeRef} className="home-section" id="home">
      <div className="home-content">

        {/* This appears normally */}
        <p className="home-intro">
          Hi, I'm
        </p>

        {/* ONLY THE NAME IS ANIMATED */}
        <h1 className="home-name">
          {displayName}
          <span className="typing-cursor"></span>
        </h1>

        {/* These are completely independent */}
        <h2 className="home-role">
          Front-End Developer
        </h2>

        <p className="home-description">
          A Computer Science graduate building my skills in modern
          web development and exploring new ways to create for the web.
        </p>

        <div className="home-buttons">
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            View My Work
          </button>

          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Let's Connect
          </button>
        </div>
    <a
  href="/certificates/AKSHAYA_Resume.pdf"
  download
  className="resume-button"
>
  ↓ Download Resume
</a>
      </div>
    </section>
  );
}

export default Home;