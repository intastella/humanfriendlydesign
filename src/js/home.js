function homePageAnimations() {
  const splineEmbed = document.querySelector(".spline-desktop-embed");

  setTimeout(function() {
    splineEmbed.classList.add('spline-desktop-embed--on');
  }, 250);

  setTimeout(function() {
    splineEmbed.classList.add('spline-desktop-embed--visible');
  }, 750);
}

document.addEventListener("DOMContentLoaded", function() { 
  homePageAnimations();
})