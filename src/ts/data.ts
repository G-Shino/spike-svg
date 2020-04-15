import Lottie from "lottie-web";
import Data from "./../data/data.json";

window.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  Lottie.loadAnimation({
    container: div,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: Data,
  });
});
