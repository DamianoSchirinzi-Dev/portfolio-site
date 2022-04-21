const menu_button = document.querySelector(".hamburger");
const mobile_nav_menu = document.querySelector(".mobile_nav_container");
const nav_menu = document.querySelector(".nav-container");
var prevScrollPos = window.pageYOffset;

document.querySelectorAll(".link.mobile").forEach((item) => {
  item.addEventListener("click", (event) => {
    closeMenu();
  });
});

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (!mobile_nav_menu.classList.contains("is_active")) {
    if (prevScrollPos > currentScrollPos) {
      nav_menu.style.top = "0px";
    } else {
      nav_menu.style.top = "-200px";
    }
  }

  prevScrollPos = currentScrollPos;
};

window.onload = function () {
  menu_button.addEventListener("click", function () {
    openMenu();
  });

  document.querySelectorAll(".dark-mode-toggle").forEach((item) => {
    item.addEventListener("click", (event) => {
        toggleDarkMode();
    });
  });
 
};

function toggleDarkMode() {
  document.body.classList.toggle("light-mode-bg");

  nav_menu.classList.toggle("light-mode-bg");
  mobile_nav_menu.classList.toggle("light-mode-bg");

  document.querySelectorAll(".main-text").forEach((item) => {
    item.classList.toggle("light-mode-text");
  });

  document.querySelectorAll(".header-text-emphasis").forEach((item) => {
    item.classList.toggle("light-mode-text");
  });
}

function openMenu() {
  menu_button.classList.toggle("is_active");
  mobile_nav_menu.classList.toggle("is_active");
}

function closeMenu() {
  console.log("called");

  menu_button.classList.remove("is_active");
  mobile_nav_menu.classList.remove("is_active");
  mobile_nav_menu.style.display = "none";

  setTimeout(reEnableMenu(), 2000);
}

function reEnableMenu() {
  mobile_nav_menu.style.display = "block";
}
