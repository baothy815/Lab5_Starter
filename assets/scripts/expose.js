// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {

  const hornSelect = document.getElementById('horn-select');
  const volumeInput = document.getElementById('volume');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  audioElement.src = './assets/audio/air-horn.mp3';

  // Add event listeners to the elements
  hornSelect.addEventListener('change', () => {
    // Update the audio source when a new horn is selected
    audioElement.src = `./assets/audio/${hornSelect.value}.mp3`;

    // Update the image when a new horn is selected
    const imageElement = document.querySelector('img');
    imageElement.src = `./assets/images/${hornSelect.value}.svg`;
  });

  volumeInput.addEventListener('input', () => {
    // Update the volume level when the input is changed
    const volumeImage = document.querySelector('#volume-controls img');
    const volumeValue = volumeInput.value;

    if (volumeValue == 0) {
      volumeImage.src = './assets/icons/volume-level-0.svg';
    } else if (volumeValue <= 33) {
      volumeImage.src = './assets/icons/volume-level-1.svg';
    } else if (volumeValue <= 66) {
      volumeImage.src = './assets/icons/volume-level-2.svg';
    } else {
      volumeImage.src = './assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Play the selected sound at the selected volume
    audioElement.volume = volumeInput.value / 100;
    audioElement.play();

    // Add confetti using JSConfetti library
    
    
    confetti({
      particleCount: 150,
      startVelocity: 100,
      spread: 360,
      origin: {
        x: playButton.offsetLeft + playButton.offsetWidth / 2,
        y: playButton.offsetTop + playButton.offsetHeight / 2
      }
    });
  });


}