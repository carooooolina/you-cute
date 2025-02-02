// Get references to the buttons and response element
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const response = document.getElementById('response');

// Handle the "Yes" button click
yesBtn.addEventListener('click', () => {
  response.textContent = "Yay! You made me the happiest, Henry! 💖";
  response.classList.remove('hidden');

  // Trigger confetti animation
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  // Optional: Add more confetti bursts
  setTimeout(() => confetti({ particleCount: 50, spread: 100, origin: { y: 0.6 } }), 500);
  setTimeout(() => confetti({ particleCount: 50, spread: 100, origin: { y: 0.6 } }), 1000);
});

// Handle the "No" button click (with a little fun)
noBtn.addEventListener('click', () => {
  response.textContent = "Oh no! Maybe next time, Henry? 😢";
  response.classList.remove('hidden');
});

// Make the "No" button move around when hovered (optional)
noBtn.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
