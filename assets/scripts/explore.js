// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
   
    const button = document.querySelector('button');
    const select = document.querySelector('select');
    const textArea = document.querySelector('textarea');
    const img = document.querySelector('img');
    
    
 // Get the dropdown element
 const voiceSelect = document.querySelector('#voice-select');
 // Get the available voices
 const voices = speechSynthesis.getVoices();
 // Wait for the voices to be loaded
 speechSynthesis.addEventListener('voiceschanged', () => {
   // Get the available voices
   const voices = speechSynthesis.getVoices();

   // Populate the dropdown with the available voices
   voices.forEach((voice) => {
     const option = document.createElement('option');
     option.textContent = `${voice.name} (${voice.lang})`;
     option.value = voice.name;
     voiceSelect.appendChild(option);
   });
 });


// Handle clicking on the "Press to Talk" button
    button.addEventListener('click', () => {
      // Create a new SpeechSynthesisUtterance object with the text to speak
      const utterance = new SpeechSynthesisUtterance(textArea.value);
      // Get the selected voice from the dropdown
      const selectedVoice = select.value;
      const voice = voices.find((v) => v.name === selectedVoice);
      utterance.voice = voice;
      // Swap the image to the open mouthed one
      img.src = 'assets/images/smiling-open.png';
      // Speak the utterance and handle the end of speech event
      speechSynthesis.speak(utterance);
      utterance.addEventListener('end', () => {
        // Swap the image back to the closed mouthed one
        img.src = 'assets/images/smiling.png';
      });
    });
}
