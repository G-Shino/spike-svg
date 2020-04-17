import Lottie from "lottie-web";
import dialogTestJson from "./../data/dialogTest.json";

window.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  div.style.backgroundColor = "black";
  document.body.appendChild(div);
  Lottie.loadAnimation({
    container: div,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: dialogTestJson,
  });
});
