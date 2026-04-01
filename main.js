// // Scroll Progress
// window.onscroll = () => {
// const scrolled = (document.documentElement.scrollTop /
// (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
// document.getElementById("progress-bar").style.width = scrolled + "%";
// };

// // Reveal animation
// const observer = new IntersectionObserver(entries=>{
// entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
// },{threshold:.1});
// document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// // Smooth anchors
// document.querySelectorAll('a[href^="#"]').forEach(a=>{
// a.addEventListener("click",e=>{
// e.preventDefault();
// document.querySelector(a.getAttribute("href")).scrollIntoView({behavior:"smooth"});
// });
// });

// // Form UX
// document.getElementById("quoteForm").addEventListener("submit",e=>{
// e.preventDefault();
// const btn=document.querySelector(".submit-btn");
// btn.innerText="SENDING...";
// btn.style.opacity=.7;
// setTimeout(()=>{
// alert("Inquiry sent successfully. Our team will contact you shortly.");
// btn.innerText="SEND INQUIRY";
// btn.style.opacity=1;
// e.target.reset();
// },1500);
// });
