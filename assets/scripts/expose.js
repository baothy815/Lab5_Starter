// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const selectHorn = document.getElementById("horn-select");
  const volumeInput = document.getElementById("volume");
  const playSoundButton = document.querySelector("button");
  const audioElement = document.querySelector("audio");

  // Add event listeners to the elements
    selectHorn.addEventListener("input", () => {
    // Update the audio source when a new horn is selected using template literals 
    audioElement.src = `./assets/audio/${selectHorn.value}.mp3`;

    // Update the image when a horn is selected
    const image = document.querySelector("img");
    image.src = `./assets/images/${selectHorn.value}.svg`;
  });

  volumeInput.addEventListener("input", () => {
    // Update the volume level when the input is changed
    const volumeImage = document.querySelector("#volume-controls img");
  
    if (volumeInput.value== 0) {
      volumeImage.src = './assets/icons/volume-level-0.svg';
    } else if (volumeInput.value<= 33) {
      volumeImage.src = './assets/icons/volume-level-1.svg';
    } else if (volumeInput.value<= 66) {
      volumeImage.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = './assets/icons/volume-level-3.svg';
    }

    // divided by 100 to get a decimal value between 0 and 1
    audioElement.volume = volumeInput.value / 100; 
  });
  
  // Add confetti using JSConfetti library
    const jsConfetti = new JSConfetti()

  playSoundButton.addEventListener("click", () => {
    if (selectHorn.value === "party-horn") {
      jsConfetti.addConfetti()
      }      
    audioElement.play();
  });


}
