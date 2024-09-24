'use strict';

(function () {
  /**
   * Add event listener on multiple elements
   */
  const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++) {
      elements[i].addEventListener(eventType, callback);
    }
  };

  /**
   * PRELOADER
   * 
   * Preloader will be visible until the document loads or for a minimum time
   */
  const preloader = document.querySelector("[data-preloader]");
  const MIN_PRELOADER_TIME = 2000; // Minimum display time in milliseconds

  window.addEventListener("load", function () {
    // Show the preloader for a minimum amount of time
    setTimeout(() => {
      preloader.classList.add("loaded");
      document.body.classList.add("loaded");
    }, MIN_PRELOADER_TIME);
  });
  

  /**
   * MOBILE NAVBAR
   * 
   * Show the mobile navbar when clicking the menu button
   * and hide it after clicking the menu close button or overlay
   */
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  };

  addEventOnElements(navTogglers, "click", toggleNav);

  /**
   * HEADER & BACK TOP BTN
   * 
   * Active header & back top button when window scrolls down to 100px
   */
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");

  const activeElementOnScroll = function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  };

  window.addEventListener("scroll", activeElementOnScroll);

  /**
   * SCROLL REVEAL
   */
  const revealElements = document.querySelectorAll("[data-reveal]");

  const revealElementOnScroll = function () {
    for (let i = 0, len = revealElements.length; i < len; i++) {
      if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
        revealElements[i].classList.add("revealed");
      } else {
        revealElements[i].classList.remove("revealed");
      }
    }
  };

  window.addEventListener("scroll", revealElementOnScroll);
  window.addEventListener("load", revealElementOnScroll);
})();
