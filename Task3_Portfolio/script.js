// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when link clicked

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Contact Form Validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = form.querySelector('input[type="text"]');
const email = form.querySelector('input[type="email"]');
const subject = form.querySelectorAll('input[type="text"]')[1];
const message = form.querySelector("textarea");

if(name.value.trim()===""){

alert("Please enter your name");

name.focus();

return;

}

if(email.value.trim()===""){

alert("Please enter your email");

email.focus();

return;

}

if(subject.value.trim()===""){

alert("Please enter subject");

subject.focus();

return;

}

if(message.value.trim()===""){

alert("Please enter your message");

message.focus();

return;

}

alert("Message sent successfully!");

form.reset();

});

// Navbar Background on Scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

header.classList.toggle("sticky",window.scrollY>50);

});

// Scroll Reveal Animation

const reveals=document.querySelectorAll("section");

function revealSections(){

const trigger=window.innerHeight-150;

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<trigger){

section.style.opacity="1";

section.style.transform="translateY(0)";

}

});

}

reveals.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(60px)";

section.style.transition="all 0.8s ease";

});

window.addEventListener("scroll",revealSections);

revealSections();

// Typing Effect

const roles=[
"Frontend Developer",
"Web Designer",
"UI Developer"
];

let roleIndex=0;
let charIndex=0;

const heading=document.querySelector(".home-content h2");

function typeEffect(){

if(!heading) return;

heading.textContent=roles[roleIndex].substring(0,charIndex);

charIndex++;

if(charIndex<=roles[roleIndex].length){

setTimeout(typeEffect,120);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

heading.textContent=roles[roleIndex].substring(0,charIndex);

charIndex--;

if(charIndex>=0){

setTimeout(eraseEffect,60);

}else{

roleIndex++;

if(roleIndex>=roles.length){

roleIndex=0;

}

setTimeout(typeEffect,400);

}

}

typeEffect();