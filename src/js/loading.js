function animateLoadingScreen() {
  // const animationSeen = localStorage.getItem("animationLoaded");
  const loadingContainer = document.querySelector(".js-loading");
  const loadingProgressBar = document.querySelector(".js-loading-progress-fill");
  const extensionOne = document.querySelector(".js-extension-1");
  const extensionTwo = document.querySelector(".js-extension-2");
  const extensionThree = document.querySelector(".js-extension-3");
  const extensionFour = document.querySelector(".js-extension-4");

  function gotoHome() {
    window.open("/home/","_self");
  }

  function step1() {
    loadingContainer.classList.add('loading--expanded');
  }

  function step2() {
    loadingProgressBar.style.width = "10%";
  }

  function step3() {
    loadingProgressBar.style.width = "20%";
    extensionOne.style.display = "inline-block";
  }

  function step4() {
    loadingProgressBar.style.width = "60%";
    extensionTwo.style.display = "inline-block";
  }

  function step5() {
    loadingProgressBar.style.width = "80%";
    extensionThree.style.display = "inline-block";
  }

  function step6() {
    loadingProgressBar.style.width = "100%";
    extensionFour.style.display = "inline-block";
  }

  function step7() {
    localStorage.setItem("animationLoaded", true);
    gotoHome();
  }

  setTimeout(step1, 1000);
  setTimeout(step2, 2000);
  setTimeout(step3, 3500);
  setTimeout(step4, 4000);
  setTimeout(step5, 4500);
  setTimeout(step6, 5500);
  setTimeout(step7, 5750);
}

document.addEventListener("DOMContentLoaded", function() { 
  animateLoadingScreen();
})