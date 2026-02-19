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
const text = ["Web Developer", "Software Testing Learner", "IT Enthusiast"];
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

// Dark Mode Toggle
document.getElementById("mode-toggle").onclick=function(){
document.body.classList.toggle("light");
};

// Mobile Menu
document.getElementById("menu-toggle").onclick=function(){
document.getElementById("nav-links").classList.toggle("active");
};
