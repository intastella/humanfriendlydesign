function initColorThemeSwitch() {
  const themeMenu = document.querySelector(".js-theme-menu");
  const themeMenuOverlay = document.querySelector(".js-header-theme-menu-overlay");
  const buttonThemeMenuButton = document.querySelector(".js-theme-menu-button");
  const themeButtons = document.querySelectorAll(".js-theme-button");
  const wallpaperButtons = document.querySelectorAll(".js-wallpaper-button");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
  // https://thegermancoder.com/2018/10/04/how-to-remove-classes-by-prefix-in-vanilla-javascript/
  function removeClassByPrefix(node, prefix) {
    var regx = new RegExp('\\b' + prefix + '[^ ]*[ ]?\\b', 'g');
    node.className = node.className.replace(regx, '');
    return node;
  }
  
  function manualSetColorTheme(el) {
    // console.log('manual set theme');
    var selectedButton = el.target.closest('.js-theme-button');
    var selectedTheme = selectedButton.dataset.theme;
    // console.log('theme='+selectedTheme);
    removeClassByPrefix(document.documentElement, 'theme-');
    document.documentElement.classList.add("theme-"+selectedTheme);

    if (selectedTheme == "auto") {
      localStorage.removeItem("colorTheme");
      toggleThemeMenu();
      autoSetColorTheme();
    } else {
      localStorage.setItem("colorTheme", selectedTheme);
      toggleThemeMenu();
    }
  }

  function autoSetColorTheme() {
    const savedTheme = localStorage.getItem("colorTheme");
    // console.log('auto set theme');
    removeClassByPrefix(document.documentElement, 'theme-');
    
    if (savedTheme == null) {
      if (prefersDarkScheme.matches) {
        // console.log('auto applied system dark');
        document.documentElement.classList.add("theme-auto");
        document.documentElement.classList.add("theme-dark");
      } 
      if (!prefersDarkScheme.matches) {
        document.documentElement.classList.add("theme-auto");
        // console.log('auto applied system auto');
      }
    } else {
      // console.log('auto applied saved '+savedTheme);
      document.documentElement.classList.add("theme-"+savedTheme);
    }
  }

  function manualSetWallpaperColor(el) {
    // console.log('manual set wallpaper');
    var selectedButton = el.target;
    var selectedColor = selectedButton.dataset.color;
    // console.log('color='+selectedColor);

    if (selectedColor !== "classic") {
      removeClassByPrefix(document.documentElement, 'wallpaper-');
      document.documentElement.classList.add("wallpaper-"+selectedColor);
      localStorage.setItem("wallpaperColor", selectedColor);
      toggleThemeMenu();
    }
    else {
      removeClassByPrefix(document.documentElement, 'wallpaper-');
      localStorage.removeItem("wallpaperColor");
      toggleThemeMenu();
    }
  }

  function autoSetWallpaperColor() {
    const savedWallpaperColor = localStorage.getItem("wallpaperColor");
    document.documentElement.classList.add("wallpaper-"+savedWallpaperColor);
  }

  function toggleThemeMenu() {
    if (themeMenu.classList.contains('tmpl-header__theme-menu--active')) {
      themeMenu.classList.remove('tmpl-header__theme-menu--active');
    } else {
      themeMenu.classList.add('tmpl-header__theme-menu--active');
    }
  }

  if (themeMenu !== null) {
    themeMenuOverlay.addEventListener("click", toggleThemeMenu);
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
  autoSetWallpaperColor();
}

document.addEventListener("DOMContentLoaded", function() {
  initColorThemeSwitch();
})