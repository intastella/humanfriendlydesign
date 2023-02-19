import Chocolat from 'chocolat';

function initChocolat() {
  Chocolat(document.querySelectorAll('.work-sample-link'), {
    imageSize: 'scale-down'
  }) 
}

document.addEventListener("DOMContentLoaded", function() { 
  initChocolat();
})