let contentAbove = document.querySelector(".content__above");
let circleAbove = document.querySelector(".content__above-circle");
let titleAbove = document.querySelector(".content__above-title");
let rectContentAbove = contentAbove.getBoundingClientRect();

let contentUnder = document.querySelector(".content__under");
let circleUnder = document.querySelector(".content__under-circle");
let titleUnder = document.querySelector(".content__under-title");
let rectContentUnder = contentUnder.getBoundingClientRect();

if (rectContentAbove.y >= 0) {
  titleAbove.style.transform = "translateX(0px)";
  circleAbove.style.transform = "translateX(0px)";
  circleAbove.style.opacity = "1";
  circleAbove.style.transition = "transform 0.5s ease-in-out";
  titleAbove.style.opacity = "1";
  titleAbove.style.transition = "transform 1s ease-in-out";
}

window.addEventListener("scroll", (e) => {

  if (rectContentUnder.top - window.scrollY < 400) {
    titleUnder.style.transform = "translateX(0px)";
    circleUnder.style.transform = "translateX(0px)";
    circleUnder.style.opacity = "1";
    circleUnder.style.transition = "transform 0.8s ease-in-out";
    titleUnder.style.opacity = "1";
    titleUnder.style.transition = "transform 1s ease-in-out";
  }

  if (rectContentUnder.top - window.scrollY > 500) {
    titleUnder.style.transform = "translateX(120%)";
    circleUnder.style.transform = "translateX(-120%)";
    circleUnder.style.opacity = "0.5";
    titleUnder.style.opacity = "0.5";
  }

});
