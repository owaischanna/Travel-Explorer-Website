function openLoginForm() 
{
    var overlay = document.getElementById("overlay");
    var loginForm = document.getElementById("loginForm");
    overlay.style.display = "block";
    loginForm.style.display = "block";
  }
  
  function closeLoginForm() {
    var overlay = document.getElementById("overlay");
    var loginForm = document.getElementById("loginForm");
    overlay.style.display = "none";
    loginForm.style.display = "none";
  }
  
  function submitLoginForm() {

    alert("Form submitted successfully!");
    closeLoginForm();
    return false;
  }



  // Function to toggle the mobile navigation menu
  document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.querySelector(".toggle-button");
    var navLinks = document.getElementById("navLinks");
  
    toggleButton.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  
    // Close the mobile menu when a link is clicked
    var navLinksList = document.querySelectorAll(".nav-link");
    navLinksList.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("show");
      });
    });
  
    // Close the mobile menu when clicking outside the menu or toggle button
    document.addEventListener("click", function (event) {
      if (!navLinks.contains(event.target) && !toggleButton.contains(event.target)) {
        navLinks.classList.remove("show");
      }
    });
  });
  


  
