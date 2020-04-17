import Lottie from "lottie-web";
import starJson from "./../data/star.json";

const div = document.createElement("div");
const animation = Lottie.loadAnimation({
  container: div,
  renderer: "svg",
  loop: false,
  autoplay: false,
  animationData: starJson,
});

window.addEventListener("DOMContentLoaded", () => {
  div.style.width = "400px";
  div.style.height = "400px";
  document.body.appendChild(div);
});

div.addEventListener("click", () => {
  // animation.playSegments([0, 100], true);
  animation.goToAndPlay(0, true);
});
