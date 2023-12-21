function showSection(sectionId) {
    const sections = document.querySelectorAll('main .main-content section');
    sections.forEach(section => {
      if (section.id === sectionId) {
        fadeIn(section);
      } else {
        fadeOut(section);
      }
    });
  }
  
  function fadeIn(element) {
    element.style.display = 'block';
    element.style.opacity = '0';
  
    let opacity = 0;
    const fadeInInterval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.1;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 50);
  }
  
  function fadeOut(element) {
    let opacity = 1;
    const fadeOutInterval = setInterval(() => {
      if (opacity > 0) {
        opacity -= 0.1;
        element.style.opacity = opacity;
      } else {
        element.style.display = 'none';
        clearInterval(fadeOutInterval);
      }
    }, 50);
  }
  