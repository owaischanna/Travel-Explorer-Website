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



  function toggleNav() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("collapsed");
  }
