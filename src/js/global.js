function initColorThemeSwitch() {
  const themeMenu = document.querySelector(".js-theme-menu");
  const themeMenuOverlay = document.querySelector(".js-header-theme-menu-overlay");
  const buttonThemeMenuButton = document.querySelector(".js-theme-menu-button");
  const themeButtons = document.querySelectorAll(".js-theme-button");
  const accentButtons = document.querySelectorAll(".js-accent-button");
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

  function manualSetAccentColor(el) {
    // console.log('manual set accent');
    var selectedButton = el.target;
    var selectedColor = selectedButton.dataset.color;
    // console.log('color='+selectedColor);

    if (selectedColor !== "classic") {
      removeClassByPrefix(document.documentElement, 'accent-');
      document.documentElement.classList.add("accent-"+selectedColor);
      localStorage.setItem("accentColor", selectedColor);
      toggleThemeMenu();
    }
    else {
      removeClassByPrefix(document.documentElement, 'accent-');
      localStorage.removeItem("accentColor");
      toggleThemeMenu();
    }
  }

  function autoSetAccentColor() {
    const savedaccentColor = localStorage.getItem("accentColor");
    document.documentElement.classList.add("accent-"+savedaccentColor);
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

    Array.prototype.forEach.call(accentButtons, function (el, i) {
      accentButtons[i].addEventListener('click', function(el) {
        manualSetAccentColor(el);
      });
    });
  }
  
  prefersDarkScheme.addEventListener("change", autoSetColorTheme);
  autoSetColorTheme();
  autoSetAccentColor();
}

document.addEventListener("DOMContentLoaded", function() {
  initColorThemeSwitch();
})