import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom =
            sectionTop + element.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-container">

        {/* DESKTOP NAVIGATION */}

        <div className="navbar-links">
          {sections.map((section) => (
            <button
              key={section.id}
              className={
                activeSection === section.id
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={() => handleNavigation(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          className={`menu-button ${
            menuOpen ? "menu-open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* MOBILE NAVIGATION */}

        <div
          className={`mobile-menu ${
            menuOpen ? "mobile-menu-visible" : ""
          }`}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              className={
                activeSection === section.id
                  ? "mobile-nav-link active"
                  : "mobile-nav-link"
              }
              onClick={() => handleNavigation(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>

      </nav>
    </header>
  );
}

export default Navbar;