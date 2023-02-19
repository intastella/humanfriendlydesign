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

document.addEventListener("DOMContentLoaded", function() { 
  setWelcomeMessage();
})