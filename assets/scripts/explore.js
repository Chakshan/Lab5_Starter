// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("alive")
  const synth = window.speechSynthesis;
  let voices = synth.getVoices();
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const button = document.querySelector("button");
  const image = document.querySelector("img");

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.value = `${voices[i].name}`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener("click", (event) => {
    let text = textToSpeak.value;
    let utterance = new SpeechSynthesisUtterance(text);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === voiceSelect.value) {
        utterance.voice = voices[i];
      }
    }
    synth.speak(utterance);
    image.src = "assets/images/smiling-open.png";
    utterance.addEventListener("end", (event) => {
      image.src = "assets/images/smiling.png";
    });
  });

}