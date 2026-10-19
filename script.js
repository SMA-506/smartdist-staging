const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "فتح القائمة" : "إغلاق القائمة");
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "فتح القائمة");
    siteNav.classList.remove("is-open");
  }
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#form-feedback").textContent =
    "شكرًا! هذه معاينة تصميمية فقط، ولم تُرسل معلوماتك.";
  document.querySelector("#form-feedback").classList.add("is-active");
});

document.querySelector("#year").textContent = new Date().getFullYear();
