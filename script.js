// reveal animation on scroll
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
