// Event Handling
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('Button was clicked! 🎉');
});

document.getElementById('hoverText').addEventListener('mouseover', () => {
  document.getElementById('hoverText').textContent = 'Hey! That tickles 😄';
});

document.addEventListener('keypress', (e) => {
  document.getElementById('keypressOutput').textContent = `You pressed: ${e.key}`;
});

let pressTimer;
const secretBtn = document.getElementById('secretBtn');
secretBtn.addEventListener('dblclick', () => {
  alert('Double-click detected! 🕵️‍♀️ Secret unlocked!');
});
secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert('Long press detected! 🔓');
  }, 1000);
});
secretBtn.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// Interactive Elements
document.getElementById('colorChangeBtn').addEventListener('click', (e) => {
  e.target.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

const images = [
  "lofi-room-cityscape-urban-3840x2160-14880.jpg",
  "https://placebear.com/200/200",
  "https://placebeard.it/200x200"
];
let currentIndex = 0;
document.getElementById('nextImage').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentIndex];
});

const accToggle = document.querySelector('.accordion-toggle');
const accContent = document.querySelector('.accordion-content');
accToggle.addEventListener('click', () => {
  accContent.style.display = accContent.style.display === 'block' ? 'none' : 'block';
});

// Form Validation
const form = document.getElementById('signupForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email.includes('@') || password.length < 8) {
    feedback.textContent = 'Please enter a valid email and password (min 8 chars).';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Form submitted successfully! 🚀';
    feedback.style.color = 'green';
  }
});

form.addEventListener('input', () => {
  feedback.textContent = ''; // Real-time clearing of feedback
});
