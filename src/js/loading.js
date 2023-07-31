function animateLoadingScreen() {
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
    gotoHome();
  }

  setTimeout(step1, 1000);
  setTimeout(step2, 1500);
  setTimeout(step3, 2000);
  setTimeout(step4, 2500);
  setTimeout(step5, 3000);
  setTimeout(step6, 3500);
  setTimeout(step7, 4000);
}

document.addEventListener("DOMContentLoaded", function() { 
  animateLoadingScreen();
})