import Granim from 'granim';

function initGranim() {
  new Granim({
    element: '#granim-canvas',
    name: 'granim',
    direction: 'top-bottom',
    states : {
        "default-state": {
            gradients: [
                ['#E3FF75', '#75DEFF'],
                ['#E3FF75', '#428EFF'],
                ['#E3FF75', '#757BFF'],
                ['#E3FF75', '#FF75A7'],
                ['#E3FF75', '#75FF9C']
            ],
            transitionSpeed: 8000
        }
    }
 });
}

function globalPageAnimations() {
  const logoElement = document.querySelector(".js-tmpl-logo");
  const navElement = document.querySelector(".js-tmpl-nav");
  const mainElement = document.querySelector(".js-tmpl-main");

  setTimeout(function() {
    if (logoElement !== null) {
      logoElement.classList.add('tmpl-logo--on');
    }
  }, 250);

  setTimeout(function() {
    if (navElement !== null) {
      navElement.classList.add('tmpl-nav--on');
    }
  }, 500);

  setTimeout(function() {
    if (mainElement !== null) {
      mainElement.classList.add('tmpl-main--on');
    }
  }, 750);
}

document.addEventListener("DOMContentLoaded", function() {
  initGranim();
  globalPageAnimations();
})