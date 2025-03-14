function initThemeManager() {
  const themeToggle = document.getElementById("tld-theme-toggle");
  if (!themeToggle) {
    return;
  }

  // Fonction pour sauvegarder le thème
  function saveTheme(theme) {
    localStorage.setItem("preferred-theme", theme);
  }

  // Fonction pour charger le thème sauvegardé
  function loadSavedTheme() {
    const savedTheme = localStorage.getItem("preferred-theme");
    if (savedTheme) {
      document.body.classList.remove("light-theme", "dark-theme");
      document.body.classList.add(savedTheme);
    } else {
      setThemeBasedOnSystem();
    }
  }

  function setThemeBasedOnSystem() {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark-theme"
      : "light-theme";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(theme);
    saveTheme(theme);
  }

  // Charger le thème au chargement de la page
  loadSavedTheme();

  // Écouter les changements de thème système
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", setThemeBasedOnSystem);

  // Gérer le clic sur le bouton
  themeToggle.addEventListener("click", () => {
    const newTheme = document.body.classList.contains("light-theme")
      ? "dark-theme"
      : "light-theme";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
    saveTheme(newTheme);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initThemeManager();
});
