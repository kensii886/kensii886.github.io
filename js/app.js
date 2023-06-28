

/********************* Menu Js **********************/

function windowScroll() {
  const navbar = document.getElementById("navbar");
  if (
    document.body.scrollTop >= 50 ||
    document.documentElement.scrollTop >= 50
  ) {
    navbar.classList.add("nav-sticky");
  } else {
    navbar.classList.remove("nav-sticky");
  }
}

window.addEventListener('scroll', (ev) => {
  ev.preventDefault();
  windowScroll();
});



//
/********************* light-dark js ************************/
//
const bodyElem = document.body;

if (bodyElem.getAttribute("data-bs-theme") == 'dark') {
  sessionStorage.setItem("data-mode", "dark");
} else if (bodyElem.getAttribute("data-bs-theme") == 'light') {
  sessionStorage.setItem("data-mode", "light");
}

if (sessionStorage.getItem("data-mode")) {
  bodyElem.setAttribute("data-bs-theme", sessionStorage.getItem("data-mode"));
  toggleBtn(1);
} else if (sessionStorage.getItem("data-mode") == null) {
  bodyElem.setAttribute("data-bs-theme", "light");
}
//actually use the saved value

function toggleBtn(r) {
  const dataTheme = bodyElem.getAttribute("data-bs-theme");
  let theme_switch;
  if (dataTheme === "light") { theme_switch = 1; } else { theme_switch = 0; }
  if (r) { theme_switch = !theme_switch; }
  if (theme_switch) {
    document.body.setAttribute("data-bs-theme", "dark");
    sessionStorage.setItem("data-mode", "dark");
  } else {
    document.body.setAttribute("data-bs-theme", "light");
    sessionStorage.setItem("data-mode", "light");
  }
}



//
/********************* Swicher js ************************/
//

function toggleSwitcher() {
  var i = document.getElementById("style-switcher");
  if (i.style.left === "-189px") {
    i.style.left = "-0px";
  } else {
    i.style.left = "-189px";
  }
}

function setColor(theme) {
  document.getElementById("color-opt").href = "./css/colors/" + theme + ".css";
  toggleSwitcher(false);
}





// ********* swiper slider ** app Slider **

new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 20,
  pagination: '.swiper-pagination',
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 0,
  centeredSlides: true,
  speed: 5000,
  autoplay: true,
  breakpoints: {
    1920: {
      slidesPerView: 5,
      spaceBetween: 50
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30
    }
  }
});
// Contact Form
function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var subject = document.forms["myForm"]["subject"].value;
  var comments = document.forms["myForm"]["comments"].value;
  document.getElementById("error-msg").style.opacity = 0;
  document.getElementById('error-msg').innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Name*</div>";
    fadeIn();
    return false;
  }
  if (email == "" || email == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
    fadeIn();
    return false;
  }
  if (subject == "" || subject == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Subject*</div>";
    fadeIn();
    return false;
  }
  if (comments == "" || comments == null) {
    document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning'>*Please enter a Comments*</div>";
    fadeIn();
    return false;
  }
  document.getElementById("simple-msg").innerHTML = "<div class='alert alert-success'>Message Submitted!</div>";
  return false;
}
function validateFormSubscribe() {
  var name = document.forms["myFormSubscribe"]["subscribe"].value;
  document.getElementById("error-msg-subscribe").style.opacity = 0;
  document.getElementById('error-msg-subscribe').innerHTML = "";
  if (name == "" || name == null) {
    document.getElementById('error-msg-subscribe').innerHTML = "<div class='alert alert-warning'>*Please enter a Email*</div>";
    fadeIn();
    return false;
  }
  document.getElementById("simple-msg-subscribe").innerHTML = "<div class='alert alert-success'>Message Submitted!</div>";
  return false;
}
function fadeIn() {
  var fade = document.getElementById("error-msg-subscribe");
  var opacity = 0;
  var intervalID = setInterval(function () {
    if (opacity < 1) {
      opacity = opacity + 0.5;
      fade.style.opacity = opacity;
    } else {
      clearInterval(intervalID);
    }
  }, 200);
}
