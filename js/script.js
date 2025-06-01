// Matrix rain effect
const canvas = document.getElementById('matrix-rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = [];

for (let x = 0; x < columns; x++) {
  rainDrops[x] = 1;
}

const draw = () => {
  // Dynamically adjust canvas size on resize
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#00FF00';
  const fontSize = Math.max(14, window.innerWidth / 60); // Scale font size
  ctx.font = `${fontSize}px monospace`;
  
  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

// Handle window resizing
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

setInterval(draw, 30);

// Typing effect
const phrases = ["cybersecurity enthusiast", "penetration tester", "CTF player"];
let i = 0, j = 0, currentPhrase = [];

function type() {
  if (j < phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    document.getElementById("typed-text").innerHTML = currentPhrase.join("");
    j++;
    setTimeout(type, 100);
  }
}

type();