import Chocolat from 'chocolat';

function initChocolat() {
  Chocolat(document.querySelectorAll('.work-sample-link'), {
    imageSize: 'scale-down'
  }) 
}

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

function initColorThemeSwitch() {
  const buttonColorThemeSwitch = document.querySelector(".js-theme-switch");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = localStorage.getItem("colorTheme");

  if (buttonColorThemeSwitch !== null) {
    buttonColorThemeSwitch.addEventListener("click", function () {
      toggleColorTheme();
    });
  }

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
  const currentDate = new Date();
  const currentTime = currentDate.getHours();
  var welcomeMessage;

  if (welcomeMessageElement !== null) {
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

function animateLoadingScreen() {
  const animationSeen = localStorage.getItem("animationLoaded");
  const loadingProgressBar = document.querySelector(".js-loading-progress-fill");
  const extensionOne = document.querySelector(".js-extension-1");
  const extensionTwo = document.querySelector(".js-extension-2");
  const extensionThree = document.querySelector(".js-extension-3");
  const extensionFour = document.querySelector(".js-extension-4");

  function gotoHome() {
    alert('Go to home');
  }

  function step1() {
    loadingProgressBar.style.width = "10%";
  }

  function step2() {
    loadingProgressBar.style.width = "20%";
    extensionOne.style.display = "inline-block";
  }

  function step3() {
    loadingProgressBar.style.width = "60%";
    extensionTwo.style.display = "inline-block";
  }

  function step4() {
    loadingProgressBar.style.width = "80%";
    extensionThree.style.display = "inline-block";
  }

  function step5() {
    loadingProgressBar.style.width = "100%";
    extensionFour.style.display = "inline-block";
  }

  function step6() {
    localStorage.setItem("animationLoaded", true);
    gotoHome();
  }

  if (animationSeen !== null) {
    setTimeout(step2, 50);
    setTimeout(step3, 100);
    setTimeout(step4, 150);
    setTimeout(step5, 200);
    setTimeout(step6, 350);
  } 

  else {
    setTimeout(step1, 1);
    setTimeout(step2, 500);
    setTimeout(step3, 1000);
    setTimeout(step4, 2500);
    setTimeout(step5, 3000);
    setTimeout(step6, 3150);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  initColorThemeSwitch();
  setWelcomeMessage();
  initChocolat();
  animateLoadingScreen();
})