// Scroll progress
window.addEventListener("scroll", () => {
  const scrolled = (document.documentElement.scrollTop /
    (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
});

// Reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Show more
document.getElementById("showMoreBtn").addEventListener("click", () => {
  document.querySelectorAll(".hidden").forEach(el => el.classList.remove("hidden"));
  document.getElementById("showMoreBtn").style.display = "none";
});

// Header scroll effect
const header = document.querySelector(".top-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});