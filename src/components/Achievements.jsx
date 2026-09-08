import { useEffect, useRef } from "react";

function Achievements() {
  const achievementsRef = useRef(null);

  useEffect(() => {
    const section = achievementsRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("achievements-visible");
        } else {
          section.classList.remove("achievements-visible");
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

  const achievements = [
    {
      number: "01",
      title: "Statistics in the Era of Big Data",
      event: "Paper Presentation",
      department: "Mathematics Department",
      prize: "1st Prize",
    },
    {
      number: "02",
      title: "Augmented & Virtual Reality",
      event: "Paper Presentation",
      department: "IT Department",
      prize: "2nd Prize",
    },
    {
      number: "03",
      title: "Poster & Web Page Designing",
      event: "IT Department Competition",
      department: "",
      prize: "2nd Prize",
    },
    {
      number: "04",
      title: "Mini Hackathon",
      event: "CSDA Department",
      department: "",
      prize: "3rd Prize",
    },
    {
      number: "05",
      title: "National Science Day Quiz",
      event: "College Competition",
      department: "",
      prize: "3rd Prize",
    },
  ];

  return (
    <section
      className="achievements-section"
      id="achievements"
      ref={achievementsRef}
    >
      {/* =========================
          HEADING
      ========================= */}

      <div className="achievements-heading">
        <p className="achievements-label">ACHIEVEMENTS</p>

        <h2>
          Things I've been proud to <span>accomplish.</span>
        </h2>

        <p className="achievements-description">
          Selected achievements from interdepartmental competitions
          and college events.
        </p>
      </div>


      {/* =========================
          ACHIEVEMENT LIST
      ========================= */}

      <div className="achievements-list">
        {achievements.map((achievement, index) => (
          <div
            className="achievement-item"
            key={achievement.number}
            style={{
              "--achievement-delay": `${0.25 + index * 0.12}s`,
            }}
          >
            {/* Number */}

            <div className="achievement-number">
              {achievement.number}
            </div>


            {/* Main Content */}

            <div className="achievement-content">
              <h3>{achievement.title}</h3>

              <p>
                {achievement.event}

                {achievement.department && (
                  <>
                    <span className="achievement-dot">·</span>
                    {achievement.department}
                  </>
                )}
              </p>
            </div>


            {/* Prize */}

            <div className="achievement-prize">
              {achievement.prize}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;