// Progress bar
window.addEventListener("scroll",()=>{
const scrolled=(document.documentElement.scrollTop/
(document.documentElement.scrollHeight-document.documentElement.clientHeight))*100;
document.getElementById("progress-bar").style.width=scrolled+"%";
});

// Reveal
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Show more products
document.getElementById("showMoreBtn").addEventListener("click",()=>{
document.querySelectorAll(".prod-card.hidden").forEach(el=>el.classList.remove("hidden"));
document.getElementById("showMoreBtn").style.display="none";
});

// Form
document.getElementById("quoteForm").addEventListener("submit",e=>{
e.preventDefault();
alert("Inquiry sent successfully. We will contact you soon.");
e.target.reset();
});

/* ===== STICKY + FLOATING HYBRID LOGIC ===== */

const hud = document.getElementById("mobileHud");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    // Sticky zone (top)
    if (currentScroll < 120) {
        hud.classList.remove("hide");
        return;
    }

    // Near footer (always show)
    if (currentScroll + windowHeight > documentHeight - 200) {
        hud.classList.remove("hide");
        return;
    }

    // Floating logic
    if (currentScroll > lastScrollY) {
        hud.classList.add("hide");
    } else {
        hud.classList.remove("hide");
    }

    lastScrollY = currentScroll;
});

/* ===== ACTIVE NAV LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* Header background toggle on scroll */
const header = document.querySelector(".top-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* ===== HIDE HUD WHEN KEYBOARD OPENS ===== */
const hudEl = document.getElementById("mobileHud");
let initialViewportHeight = window.innerHeight;

window.addEventListener("resize", () => {
    const heightDiff = initialViewportHeight - window.innerHeight;

    // If viewport height reduced significantly → keyboard open
    if (heightDiff > 150) {
        hudEl.classList.add("hide");
    } else {
        hudEl.classList.remove("hide");
    }
});
