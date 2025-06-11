// Load the audio
const aKeySound = new Audio("sonidos/kick.wav");
// Get the key element
const kick = document.getElementById("tecla-blanca-A");

// Play sound when key is clicked
kick.addEventListener("click", () => {
  aKeySound.currentTime = 0; // rewind if already playing})
  aKeySound.play();
});
//KEY NO2///
const bKeySound = new Audio("sonidos/Piano1.ogg");
const bKey = document.getElementById("tecla-blanca-B");
bKey.addEventListener("click", () => {
  bKeySound.currentTime = 0;
  bKeySound.play();
});
//KEY NO3///
const cKeySound = new Audio("sonidos/Piano3.ogg");
const cKey = document.getElementById("tecla-blanca-C");
cKey.addEventListener("click", () => {
  cKeySound.currentTime = 0;
  cKeySound.play();
});
//KEY NO4///
const dKeySound = new Audio("sonidos/Piano4.ogg");
const dKey = document.getElementById("tecla-blanca-D");
dKey.addEventListener("click", () => {
  dKeySound.currentTime = 0;
  dKeySound.play();
});
//KEY NO5///
const eKeySound = new Audio("sonidos/Piano6.ogg");
const eKey = document.getElementById("tecla-blanca-E");
eKey.addEventListener("click", () => {
  eKeySound.currentTime = 0;
  eKeySound.play();
});
//KEY NO6///
const fKeySound = new Audio("sonidos/Piano7.ogg");
const fKey = document.getElementById("tecla-blanca-F");
fKey.addEventListener("click", () => {
  fKeySound.currentTime = 0;
  fKeySound.play();
});
//KEY NO7///
const gKeySound = new Audio("sonidos/Piano8.ogg");
const gKey = document.getElementById("tecla-blanca-G");
gKey.addEventListener("click", () => {
  gKeySound.currentTime = 0;
  gKeySound.play();
});
//Key NO8///
const hKeySound = new Audio("sonidos/Piano9.ogg");
const hKey = document.getElementById("tecla-blanca-A-octave");
hKey.addEventListener("click", () => {
  hKeySound.currentTime = 0;
  hKeySound.play();
});
// Key NO9///
const iKeySound = new Audio("sonidos/ride.wav");
const iKey = document.getElementById("tecla-blanca-B-octave");
iKey.addEventListener("click", () => {
  iKeySound.currentTime = 0;
  iKeySound.play();
});
// Key NO10///
const jKeySound = new Audio("sonidos/hihat.wav");
const jKey = document.getElementById("tecla-blanca-C-octave");
jKey.addEventListener("click", () => {
  jKeySound.currentTime = 0;
  jKeySound.play();
});



// Background image slideshow for each black key
(function () {
  const images = [
    // "imagenes/dragon.jpg",
    // "imagenes/halo.jpeg",
    // "imagenes/LOTR.jpeg",
    // "imagenes/plane.png",
    // "imagenes/r7m.png",
    // "imagenes/atleti.png",
    // "imagenes/WOLF.png",
    "imagenes/r7m.png",
    "imagenes/atleti.png",
    "imagenes/Lloronicius.png"
    
  ];
  const blackKeyCount = 8;
  const keyElements = [];
  for (let i = 1; i <= blackKeyCount; i++) {
    const el = document.querySelector(`.key-bg-black[data-black="${i}"]`);
    if (el) keyElements.push(el);
  }
  let current = 0;
  function updateBlackKeyBackgrounds() {
    keyElements.forEach((el, idx) => {
      // Offset each key's image for variety
      const imgIdx = (current + idx) % images.length;
      el.style.backgroundImage = `url('${images[imgIdx]}')`;
    });
    current = (current + 1) % images.length;
  }
  updateBlackKeyBackgrounds();
  setInterval(updateBlackKeyBackgrounds, 4000);
})();

//added an image of Vinicius
// When the page loads
window.addEventListener('DOMContentLoaded', () => {
    const ViniCry = new Audio("sonidos/Llora.mp3");
    const lloronicius = document.getElementById("llora");

    lloronicius.addEventListener("click", () => {
        ViniCry.currentTime = 0;
        ViniCry.play();
    })
});