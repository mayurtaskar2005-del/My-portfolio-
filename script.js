document.getElementById("year").textContent =
new Date().getFullYear();


// SCROLL REVEAL
function reveal(){
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",reveal);
reveal();


// TYPING TEXT
const text=[
"TYBBA Computer Application Student",
"Future Software Tester",
"Web Developer"
];

let count=0,index=0,current="",letter="";

function type(){
if(count===text.length) count=0;
current=text[count];
letter=current.slice(0,++index);
document.querySelector(".typing").textContent=letter;

if(letter.length===current.length){
count++;
index=0;
setTimeout(type,1200);
}else setTimeout(type,60);
}
type();


// DARK MODE
document.getElementById("darkToggle").onclick=()=>{
document.body.classList.toggle("dark");
};


// SCROLL PROGRESS
window.onscroll=()=>{
let winScroll=document.documentElement.scrollTop;
let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.getElementById("progressBar").style.width=(winScroll/height)*100+"%";
};
