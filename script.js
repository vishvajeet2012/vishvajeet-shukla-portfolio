let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", function () {
  const typed = new Typed(".text", {
    strings: ["Frontend Developer"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
  });
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "./media/resume/vishu-resume.pdf";
  link.download = "vishvajeet-resume.pdf";
  link.click();
});

const yearUpdate = document.getElementById("yearupdate");
yearUpdate.innerText = new Date().getFullYear();

function phoneClick() {
  // is code me kuch changes mt krna nahi to number browser main  hi open hoga
  // const myarray = [9, 2, 7, 4, 4, 7];

  // myarray.push(2, 8);
  // myarray.push(7, 9);

  // const a = myarray.reverse();

  // const v = a.toString();

  // console.log(v);

  const vishuNumber = "9782744729";

  const callButton = document.getElementById("callButton");
  callButton.setAttribute("href", `tel:${vishuNumber}`);

  // callButton.addEventListener('click', function() {

  // });
}





let Projectbox = document.querySelector('.project-item')
console.warn(Projectbox)

function popUp() {
 


  let popUpContainer = document.createElement("div"); 
  let headTitile = document.createElement('h6')
  let  popupbtn = document.createElement("button");


  popUpContainer.className = "popupContainer";
  
  headTitile.className = "popUpHeading"
  



}