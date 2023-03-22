function initColorThemeSwitch() {
  const ThemeMenu = document.querySelector(".js-theme-menu");
  const ThemeMenuOverlay = document.querySelector(".js-header-theme-menu-overlay");
  const buttonThemeMenuButton = document.querySelector(".js-theme-menu-button");
  const themeButtons = document.querySelectorAll(".js-theme-button");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("colorTheme");
  
  function manualSetColorTheme(node) {
    console.log('manual set');
    var selectedButton = node.target.closest('.js-theme-button');
    var selectedTheme = selectedButton.dataset.theme;
    console.log('theme='+selectedTheme);
    // Array.prototype.forEach.call(themeButtons, function (el, i) {
    //   themeButtons[i].classList.remove("tmpl-header__theme-button--active");
    // });
    // selectedButton.classList.add("tmpl-header__theme-button--active");
    document.documentElement.className = "";

    if (selectedTheme == "dark") {
      document.documentElement.classList.add("theme-dark");
      localStorage.setItem("colorTheme", "dark");
      toggleThemeMenu();
    } 
    if (selectedTheme == "light") {
      document.documentElement.classList.add("theme-light");
      localStorage.setItem("colorTheme", "light");
      toggleThemeMenu();
    }
    if (selectedTheme == "auto") {
      localStorage.removeItem("colorTheme");
      toggleThemeMenu();
    }
  }

  function autoSetColorTheme() {
    console.log('auto set');
    document.documentElement.className = "";
    if (savedTheme == "dark") {
      console.log('auto applied saved dark');
      document.documentElement.classList.add("theme-dark");
    }
    if (savedTheme == "light") {
      console.log('auto applied saved light');
      document.documentElement.classList.add("theme-light");
    }
    if (savedTheme == null) {
      if (prefersDarkScheme.matches) {
        console.log('auto applied system dark');
        document.documentElement.classList.add("theme-dark");
      } 
      if (!prefersDarkScheme.matches) {
        console.log('auto applied system auto');
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

    Array.prototype.forEach.call(themeButtons, function (el, i) {
      themeButtons[i].addEventListener('click', function(el) {
        manualSetColorTheme(el);
      });
    });
  }
  
  prefersDarkScheme.addEventListener("change", autoSetColorTheme);
  autoSetColorTheme();
}

document.addEventListener("DOMContentLoaded", function() {
  initColorThemeSwitch();
})