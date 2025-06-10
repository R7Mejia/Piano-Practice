////////////////////////BLACK KEYS///////////////////////
// Load the audio for black keys
const blackKey1Sound = new Audio("sonidos/Piano2.ogg");
const clapSound = document.getElementById("black-key-1");

// Play sound when black key B is clicked
clapSound.addEventListener("click", () => {
  blackKey1Sound.currentTime = 0;
  blackKey1Sound.play();
});

//BLACK KEY NO2////
const blackKey2Sound = new Audio("sonidos/Piano5.ogg");
const key2 = document.getElementById("black-key-2");
key2.addEventListener("click", () => {
  blackKey2Sound.currentTime = -5;
  blackKey2Sound.play();
});
//BLACK KEY NO3////
const blackKey3Sound = new Audio("sonidos/Calachona.wav");
const key3 = document.getElementById("black-key-3");
key3.addEventListener("click", () => {
  blackKey3Sound.currentTime = 0;
  blackKey3Sound.play();
});
//BLACK KEY NO4////
const blackKey4Sound = new Audio("sonidos/Piano2.ogg");
const key4 = document.getElementById("black-key-4");

key4.addEventListener("click", () => {
  blackKey4Sound.currentTime = 0;
  blackKey4Sound.play();
});
//BLACK KEY NO5////
const blackKey5Sound = new Audio("sonidos/hihat.wav");
const key5 = document.getElementById("black-key-5");

key5.addEventListener("click", () => {
  blackKey5Sound.currentTime = 0;
  blackKey5Sound.play();
});

//BLACK KEY NO6////
const blackKey6Sound = new Audio("sonidos/Rateros.mp3");
const key6 = document.getElementById("black-key-6");
key6.addEventListener("click", () => {
  blackKey6Sound.currentTime = 0;
  blackKey6Sound.play();
});
//BLACK KEY NO7////
const blackKey7Sound = new Audio("sonidos/Cry.mp3");
const key7 = document.getElementById("black-key-7");
key7.addEventListener("click", () => {
  blackKey7Sound.currentTime = 0;
  blackKey7Sound.play();
});
//BLACK KEY NO8////
const blackKey8Sound = new Audio("sonidos/MenAtWork.mp3");
const key8 = document.getElementById("black-key-8");
key8.addEventListener("click", () => {
  blackKey8Sound.currentTime = 0;
    blackKey8Sound.play();
    // Automatically stop playback after 30 seconds
  // Stop after 30 seconds
  const stopTime = 0 + 30;
  const stopPlayback = () => {
    if (!blackKey8Sound.paused && blackKey8Sound.currentTime >= stopTime) {
      blackKey8Sound.pause();
      blackKey8Sound.currentTime = 0;
    }
  };
  blackKey8Sound.addEventListener("timeupdate", stopPlayback);
  // Remove the event after pause to avoid stacking
  blackKey8Sound.addEventListener("pause", function cleanup() {
    blackKey8Sound.removeEventListener("timeupdate", stopPlayback);
    blackKey8Sound.removeEventListener("pause", cleanup);
  });
});
