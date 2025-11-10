import logoDark from "./assets/images/logo-dark.svg";
import logoLight from "./assets/images/logo-light.png";
import iconMoon from "./assets/images/icon-moon.svg";
import iconSun from "./assets/images/icon-sun.svg";

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector(".theme-toggle");
  const body = document.body;
  const logo = document.querySelector(".logo-wrapper");
  const themeIcon = document.querySelector(".theme-icon");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    body.classList.add("light-mode");
    logo.src = logoDark;
    themeIcon.src = iconMoon;
  } else {
    logo.src = logoLight;
    themeIcon.src = iconSun;
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");

    logo.src = isLight ? logoDark : logoLight;
    themeIcon.src = isLight ? iconMoon : iconSun;

    localStorage.setItem("theme", isLight ? "light" : "dark");
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".extension-card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const toggle = card.querySelector(".toggle-switch input");
        const isActive = toggle.checked;

        if (filter === "all") {
          card.style.display = "flex";
        } else if (filter === "active" && isActive) {
          card.style.display = "flex";
        } else if (filter === "inactive" && !isActive) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  cards.forEach((card) => {
    const toggle = card.querySelector(".toggle-switch input");
    toggle.addEventListener("change", () => {
      const activeFilter = document.querySelector(".filter-btn.active");
      if (activeFilter) activeFilter.click();
    });
  });
});