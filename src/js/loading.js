function animateLoadingScreen() {
  const animationSeen = localStorage.getItem("animationLoaded");
  const loadingProgressBar = document.querySelector(".js-loading-progress-fill");
  const extensionOne = document.querySelector(".js-extension-1");
  const extensionTwo = document.querySelector(".js-extension-2");
  const extensionThree = document.querySelector(".js-extension-3");
  const extensionFour = document.querySelector(".js-extension-4");

  function gotoHome() {
    window.open("/home/","_self");
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

  if (animationSeen == "true") {
    setTimeout(step2, 1);
    setTimeout(step3, 200);
    setTimeout(step4, 500);
    setTimeout(step5, 850);
    setTimeout(step6, 1000);
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
  animateLoadingScreen();
})