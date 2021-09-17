function panelsPlugin(activePanel = 0) {
  const panels = document.querySelectorAll(".panel");

  panels[activePanel].classList.add("active");

  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      removeActiveClasses();
      panel.classList.add("active");
    });
  });

  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
  }
}

panelsPlugin(4);
