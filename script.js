// Scroll Reveal
const sections = document.querySelectorAll(".glass");

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
const top = sec.getBoundingClientRect().top;
if(top < window.innerHeight - 100){
sec.style.opacity="1";
sec.style.transform="translateY(0)";
}
});
});

sections.forEach(sec=>{
sec.style.opacity="0";
sec.style.transform="translateY(60px)";
sec.style.transition="1s";
});

// Typing Effect
const text = ["Web Developer, python learner"];
let i=0;
let j=0;
let currentText="";
let isDeleting=false;

function type(){
if(i < text.length){
if(!isDeleting && j <= text[i].length){
currentText = text[i].substring(0,j++);
}
if(isDeleting && j >=0){
currentText = text[i].substring(0,j--);
}
document.querySelector(".typing").textContent=currentText;

if(j == text[i].length){
isDeleting=true;
setTimeout(type,1000);
return;
}
if(j==0){
isDeleting=false;
i++;
}
}
setTimeout(type,100);
}
type();

// Dark Mode
document.getElementById("mode-toggle").onclick=function(){
document.body.classList.toggle("light");
};

// Mobile Menu
document.getElementById("menu-toggle").onclick=function(){
document.getElementById("nav-links").classList.toggle("active");
};
const stars = document.querySelectorAll(".star");
const message = document.getElementById("rating-message");
const resetBtn = document.getElementById("reset-rating");

let ratings = JSON.parse(localStorage.getItem("ratings")) || [];

function updateAverage() {
    if (ratings.length === 0) {
        message.textContent = "No ratings yet.";
        return;
    }

    let total = ratings.reduce((a, b) => a + b, 0);
    let average = (total / ratings.length).toFixed(1);

    message.textContent =
        "⭐ Average Rating: " + average +
        " (" + ratings.length + " reviews)";
}

updateAverage();

stars.forEach(star => {
    star.addEventListener("click", function () {
        let rating = Number(this.getAttribute("data-value"));

        ratings.push(rating);
        localStorage.setItem("ratings", JSON.stringify(ratings));

        stars.forEach(s => s.classList.remove("active"));

        stars.forEach(s => {
            if (Number(s.getAttribute("data-value")) <= rating) {
                s.classList.add("active");
            }
        });

        updateAverage();
    });
});

resetBtn.addEventListener("click", function () {
    localStorage.removeItem("ratings");
    ratings = [];
    stars.forEach(s => s.classList.remove("active"));
    updateAverage();
});
