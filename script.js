let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

const typed = new Typed(".text", {
    strings: ["Frontend Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})

document.getElementById('downloadBtn').addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = './media/resume/vishu-resumeg.pdf'; 
  link.download = 'vishvajeet-resume'; 
  link.click(); 
});