import Chocolat from 'chocolat';

function toggleColorTheme() {
  if (document.documentElement.classList.contains("theme-dark")) {
    document.documentElement.classList.remove("theme-dark");
    document.documentElement.classList.add("theme-light");
    localStorage.setItem("colorTheme", "light");
  } else {
    document.documentElement.classList.remove("theme-light");
    document.documentElement.classList.add("theme-dark");
    localStorage.setItem("colorTheme", "dark");
  }
}

function initColorTheme(prefersDarkScheme) {
  const savedTheme = localStorage.getItem("colorTheme");
  if (savedTheme == null) {
    if (prefersDarkScheme.matches) {
      document.documentElement.classList.add("theme-dark");
    }
  } else {
    if (savedTheme == "dark") {
      document.documentElement.classList.add("theme-dark");
    }
  }
}

function setWelcomeMessage() {
  const welcomeMessageElement = document.querySelector(".js-welcome-message");

  if (welcomeMessageElement !== null) {
    const currentDate = new Date();
    const currentTime = currentDate.getHours();
    var welcomeMessage;

    if (currentTime >= 0 && currentTime <= 11) {
      welcomeMessage = "Good morning!";
    }
    if (currentTime >= 12 && currentTime <= 17) {
      welcomeMessage = "Good afternoon!";
    }
    if (currentTime >= 18 && currentTime <= 23) {
      welcomeMessage = "Good evening!";
    }

    welcomeMessageElement.textContent=welcomeMessage;
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  Chocolat(document.querySelectorAll('.work-sample-link'), {
    imageSize: 'scale-down'
  }) 

  const buttonColorThemeSwitch = document.querySelector(".js-theme-switch");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  if (buttonColorThemeSwitch !== null) {
    buttonColorThemeSwitch.addEventListener("click", function () {
      toggleColorTheme();
    });
  }

  initColorTheme(prefersDarkScheme);
  setWelcomeMessage();
})