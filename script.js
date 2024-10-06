
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed(".text", {
        strings: ["Frontend Developer"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
    });
});


document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './media/resume/vishu-resume.pdf'; 
    link.download = 'vishvajeet-resume.pdf'; 
    link.click(); 
});

const yearUpdate = document.getElementById('yearupdate');
yearUpdate.innerText = new Date().getFullYear();


const phoneNumber = "+919782744729";
const callButton = document.getElementById('callButton');
callButton.setAttribute('href', `tel:${phoneNumber}`);


callButton.addEventListener('click', function() {
   
});
