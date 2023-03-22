function initColorThemeSwitch() {
  const ThemeMenu = document.querySelector(".js-theme-menu");
  const ThemeMenuOverlay = document.querySelector(".js-header-theme-menu-overlay");
  const buttonThemeMenuButton = document.querySelector(".js-theme-menu-button");
  const buttonThemeAuto = document.querySelector(".js-theme-button-auto");
  const buttonThemeLight = document.querySelector(".js-theme-button-light");
  const buttonThemeDark = document.querySelector(".js-theme-button-dark");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("colorTheme");
  
  function manualSetColorTheme(selectedTheme) {
    console.log('manual set');
    if (selectedTheme == "dark") {
      console.log('selectedTheme = dark');
      document.documentElement.className = "";
      document.documentElement.classList.add("theme-dark");
      buttonThemeAuto.classList.remove("tmpl-header__theme-button--active");
      buttonThemeLight.classList.remove("tmpl-header__theme-button--active");
      buttonThemeDark.classList.add("tmpl-header__theme-button--active");
      localStorage.setItem("colorTheme", "dark");
      toggleThemeMenu();
    } 
    if (selectedTheme == "light") {
      console.log('selectedTheme = light');
      document.documentElement.className = "";
      document.documentElement.classList.add("theme-light");
      buttonThemeAuto.classList.remove("tmpl-header__theme-button--active");
      buttonThemeLight.classList.add("tmpl-header__theme-button--active");
      buttonThemeDark.classList.remove("tmpl-header__theme-button--active");
      localStorage.setItem("colorTheme", "light");
      toggleThemeMenu();
    }
    if (selectedTheme == "auto") {
      console.log('selectedTheme = auto');
      document.documentElement.className = "";
      buttonThemeAuto.classList.add("tmpl-header__theme-button--active");
      buttonThemeLight.classList.remove("tmpl-header__theme-button--active");
      buttonThemeDark.classList.remove("tmpl-header__theme-button--active");
      localStorage.removeItem("colorTheme");
      toggleThemeMenu();
    }
  }

  function autoSetColorTheme() {
    console.log('auto set');
    if (savedTheme == "dark") {
      console.log('auto applied saved dark');
      document.documentElement.className = "";
      document.documentElement.classList.add("theme-dark");
    }
    if (savedTheme == "light") {
      console.log('auto applied saved light');
      document.documentElement.className = "";
      document.documentElement.classList.add("theme-light");
    }
    if (savedTheme == null) {
      if (prefersDarkScheme.matches) {
        console.log('auto applied system dark');
        document.documentElement.className = "";
        document.documentElement.classList.add("theme-dark");
      } 
      if (!prefersDarkScheme.matches) {
        console.log('auto applied system auto');
        document.documentElement.className = "";
      }
    }
  }

  function toggleThemeMenu() {
    if (ThemeMenu.classList.contains('tmpl-header__theme-menu--active')) {
      ThemeMenu.classList.remove('tmpl-header__theme-menu--active');
    } else {
      ThemeMenu.classList.add('tmpl-header__theme-menu--active');
    }
  }

  if (ThemeMenu !== null) {
    ThemeMenuOverlay.addEventListener("click", toggleThemeMenu);
    buttonThemeMenuButton.addEventListener("click", toggleThemeMenu);
    buttonThemeAuto.addEventListener("click", function() {
      manualSetColorTheme("auto");
    });
    buttonThemeLight.addEventListener("click", function() {
      manualSetColorTheme("light");
    });
    buttonThemeDark.addEventListener("click", function() {
      manualSetColorTheme("dark");
    });
  }
  
  prefersDarkScheme.addEventListener("change", autoSetColorTheme);
  autoSetColorTheme();
}

document.addEventListener("DOMContentLoaded", function() {
  initColorThemeSwitch();
})