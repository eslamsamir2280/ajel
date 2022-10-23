var menubtn = document.getElementById("menubtn");
var sidenav = document.getElementById("sidenav");

sidenav.style.left = "-250px";
sidenav.style.top = "80px";
menubtn.onclick = function () {
  if (sidenav.style.left == "-250px") {
    sidenav.style.left = "0";
  } else {
    sidenav.style.left = "-250px";
  }
};

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(
  ".img img , .text , .app-text , .reviews .box , .reviews .text-rev ,.shorkaa .text-shorkaa , .shorkaa .box  ",
  {
    delay: 200,
    origin: "top",
  }
);
sr.reveal(".sub .box", { delay: 200, origin: "right" });

let nums = document.querySelectorAll(".number");
let section = document.querySelector(".statistics");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
