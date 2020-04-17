import Lottie from "lottie-web";
import textMoveOnPathJson from "./../data/textMoveOnPath.json";

window.addEventListener("DOMContentLoaded", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  Lottie.loadAnimation({
    container: div,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: textMoveOnPathJson,
  });
});
