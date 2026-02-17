// Auto Footer Year
document.getElementById("year").textContent = new Date().getFullYear();


// Smooth Scroll for Navbar Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// Simple Navbar Shadow on Scroll
window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 20) {
        nav.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
    } else {
        nav.style.boxShadow = "none";
    }
});
