// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   
    const button = document.querySelector('button');
    const select = document.querySelector('select');
    const textArea = document.querySelector('textarea');
    const img = document.querySelector('img');
    const voiceSelction = document.querySelector('#voice-select');
    const synth = window.speechSynthesis;

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;


    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
const utterThis = new SpeechSynthesisUtterance(textArea.value);

}
