function initColorThemeSwitch() {
  const ThemeMenu = document.querySelector(".js-theme-menu");
  const ThemeMenuOverlay = document.querySelector(".js-header-theme-menu-overlay");
  const buttonThemeMenuButton = document.querySelector(".js-theme-menu-button");
  const themeButtons = document.querySelectorAll(".js-theme-button");
  const wallpaperButtons = document.querySelectorAll(".js-wallpaper-button");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("colorTheme");
  
  // https://thegermancoder.com/2018/10/04/how-to-remove-classes-by-prefix-in-vanilla-javascript/
  function removeClassByPrefix(node, prefix) {
    var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
    node.className = node.className.replace(regx, '');
    return node;
  }
  
  function manualSetColorTheme(el) {
    // console.log('manual set');
    var selectedButton = el.target.closest('.js-theme-button');
    var selectedTheme = selectedButton.dataset.theme;
    // console.log('theme='+selectedTheme);
    removeClassByPrefix(document.documentElement, 'theme-');

    if (selectedTheme == "dark") {
      document.documentElement.classList.add("theme-dark");
      localStorage.setItem("colorTheme", selectedTheme);
      toggleThemeMenu();
    } 
    if (selectedTheme == "light") {
      document.documentElement.classList.add("theme-light");
      localStorage.setItem("colorTheme", selectedTheme);
      toggleThemeMenu();
    }
    if (selectedTheme == "auto") {
      localStorage.removeItem("colorTheme");
      toggleThemeMenu();
    }
  }

  function autoSetColorTheme() {
    // console.log('auto set');
    document.documentElement.className = "";
    if (savedTheme == "dark") {
      console.log('auto applied saved dark');
      document.documentElement.classList.add("theme-dark");
    }
    if (savedTheme == "light") {
      // console.log('auto applied saved light');
      document.documentElement.classList.add("theme-light");
    }
    if (savedTheme == null) {
      if (prefersDarkScheme.matches) {
        // console.log('auto applied system dark');
        document.documentElement.classList.add("theme-dark");
      } 
      if (!prefersDarkScheme.matches) {
        // console.log('auto applied system auto');
      }
    }
  }

  function manualSetWallpaperColor(el) {
    console.log('wallpaper color click');
    var selectedButton = el.target;
    var selectedColor = selectedButton.dataset.color;
    console.log('color='+selectedColor);

    if (selectedColor !== "classic") {
      removeClassByPrefix(document.documentElement, 'wallpaper-');
      document.documentElement.classList.add("wallpaper-"+selectedColor);
      localStorage.setItem("wallpaperColor", selectedColor);
      toggleThemeMenu();
    }
    else {
      removeClassByPrefix(document.documentElement, 'wallpaper-');
      toggleThemeMenu();
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

    Array.prototype.forEach.call(wallpaperButtons, function (el, i) {
      wallpaperButtons[i].addEventListener('click', function(el) {
        manualSetWallpaperColor(el);
      });
    });
  }
  
  prefersDarkScheme.addEventListener("change", autoSetColorTheme);
  autoSetColorTheme();
}

document.addEventListener("DOMContentLoaded", function() {
  initColorThemeSwitch();
})