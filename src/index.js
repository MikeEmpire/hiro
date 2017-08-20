import './css/index.css';
import './js/jquery-1.11.1.min';
let vid = document.getElementById("bgvid");
let pauseButton = document.querySelector("button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
  vid.removeAttribute("autoplay");
  vid.pause();
  pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', () => {
  // only functional if "loop" is removed
  vid.pause();
  // to capture IE10
  vidFade();
});

pauseButton.addEventListener("click", () => {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Paused";
  }
})
