const text = document.querySelector(".text p");
text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 3.5}deg)">${char}</span>`
  )
  .join("");

const text2 = document.querySelector(".text2 p");
text2.innerHTML = text2.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 5}deg)">${char}</span>`
  )
  .join("");
  
Shery.makeMagnet(".magnet", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  Shery.mouseFollower({
    // skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  
  function homeCursorAnimation() {
    var home = document.getElementById("home");
    var playButton = document.getElementById("play");
    var nav = document.getElementById("nav");
  
    home.addEventListener("mousemove", function (dets) {
      gsap.to(playButton, {
        x: dets.x - 15,
        y: dets.y - 15,
      });
    });
  
    home.addEventListener("mouseenter", function () {
      gsap.to(playButton, {
        opacity: 1,
        scale: 1,
      });
    });
  
    home.addEventListener("mouseleave", function () {
      gsap.to(playButton, {
        opacity: 0,
        scale: 0,
      });
    });
  
    nav.addEventListener("mouseenter", function () {
      gsap.to(playButton, {
        opacity: 0,
        scale: 0,
      });
    });
  
    nav.addEventListener("mouseleave", function () {
      gsap.to(playButton, {
        opacity: 1,
        scale: 1,
      });
    });
  }
  homeCursorAnimation();