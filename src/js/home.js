function homePageAnimations() {
  const splineEmbed = document.querySelector(".js-spline-viewer");

  setTimeout(function() {
    splineEmbed.classList.add('spline-desktop-embed--on');
  }, 750);
}

document.addEventListener("DOMContentLoaded", function() { 
  homePageAnimations();
})