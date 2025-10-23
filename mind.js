const container = document.getElementById('container');

// Messages to shower
const messages = [
  "AAAAAAHHHH YOUR VOICEEEEEEE ",
  "CUTIEEEE ❤️",
  "You're amazing 💖",
  "SARAP MO KAUSAP BAKS",
  "You make my heart smile 💓",
  "MAGANDA MAGANDA MAGANDA",
  "TARUB 💗",
  "PAKISS HEHE",
  "😘",
  "😍",
  "🥰",
  "💖",
];

// 🌸 Twice the number of falling messages (80 instead of 40)
const totalElements = 80;

for (let i = 0; i < totalElements; i++) {
  const el = document.createElement('div');
  el.classList.add('falling');

  // Choose a random message
  el.textContent = messages[Math.floor(Math.random() * messages.length)];

  // Random font size for variety
  el.style.fontSize = `${Math.random() * 0.5 + 1}em`;

  // Random starting position and animation variation
  const left = Math.random() * 100; // random horizontal start
  const delay = Math.random() * 5; // random delay
  const duration = 5 + Math.random() * 5; // 5–10 seconds
  const xMove = `${Math.random() * 100 - 50}px`; // horizontal drift
  const rotate = `${Math.random() * 360}deg`; // spin

  el.style.left = `${left}%`;
  el.style.animationDuration = `${duration}s`;
  el.style.animationDelay = `${delay}s`;
  el.style.setProperty('--xMove', xMove);
  el.style.setProperty('--rotate', rotate);

  container.appendChild(el);
}
