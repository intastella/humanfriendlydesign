function initColorThemeSwitch() {
  const buttonColorThemeSwitch = document.querySelector(".js-theme-switch");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
  function toggleColorTheme(event) {
    const savedTheme = localStorage.getItem("colorTheme");

    if (event.type == "click") {
      // console.log('click');
      if (event.shiftKey) {
        // console.log('click - shift was down');
        localStorage.removeItem("colorTheme");
        toggleColorTheme("none");
      } else {
        if (savedTheme == "dark") {
          // console.log('saved was dark, switch to light');
          document.documentElement.classList.remove("theme-dark");
          localStorage.setItem("colorTheme", "light");
        } 
        if (savedTheme == "light") {
          // console.log('saved was light, switched to dark');
          document.documentElement.classList.add("theme-dark");
          localStorage.setItem("colorTheme", "dark");
        }
        if (savedTheme == null) {
          if (prefersDarkScheme.matches) {
            // console.log('auto was dark, switch to light');
            document.documentElement.classList.remove("theme-dark");
            localStorage.setItem("colorTheme", "light");
          } 
          if (!prefersDarkScheme.matches) {
            // console.log('auto was light, switch to dark');
            document.documentElement.classList.add("theme-dark");
            localStorage.setItem("colorTheme", "dark");
          }
        }
      }
    } else {
      // console.log('non click');
      if (savedTheme == "dark") {
        // console.log('auto applied saved dark');
        document.documentElement.classList.add("theme-dark");
      }
      if (savedTheme == "light") {
        // console.log('auto applied saved light');
        document.documentElement.classList.remove("theme-dark");
      }
      if (savedTheme == null) {
        if (prefersDarkScheme.matches) {
          // console.log('auto applied system dark');
          document.documentElement.classList.add("theme-dark");
        } 
        if (!prefersDarkScheme.matches) {
          // console.log('auto applied system light');
          document.documentElement.classList.remove("theme-dark");
        }
      }
    }
  }

  buttonColorThemeSwitch.addEventListener("click", toggleColorTheme);
  prefersDarkScheme.addEventListener("change", toggleColorTheme);
  toggleColorTheme("none");
}

document.addEventListener("DOMContentLoaded", function() {
  initColorThemeSwitch();
})