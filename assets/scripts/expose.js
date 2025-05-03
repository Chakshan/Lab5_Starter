// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let hornSelect = document.getElementById("horn-select");
  let hornImage = document.querySelector("img");
  let audio = document.querySelector("audio");
  let button = document.querySelector("button");
  let volume = document.getElementById("volume");
  let volumeImage = document.querySelector("div img");
  const jsConfetti = new JSConfetti();
  
  hornSelect.addEventListener("input", (event) => {
    hornImage.src = `assets/images/${hornSelect.value}.svg`;
    audio.src = `assets/audio/${hornSelect.value}.mp3`;
  });
  
  button.addEventListener("click", (event) => {
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  volume.addEventListener("input", (event) => {
    let vol = Number(volume.value);
    audio.volume = vol / 100;
    if (vol === 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (vol < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (vol < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });


}