import { useEffect, useState } from "react";

const useActiveSection = (sections) => {
  const [sectionInView, setSectionInView] = useState("");

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSectionInView(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });
  }, [sections]);

  return sectionInView;
};

export default useActiveSection;
