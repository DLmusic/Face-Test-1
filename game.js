const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const speedSlider = document.getElementById('speedSlider');
let score = 0;
let moveInterval = 2000; // Initial speed set to 1000 milliseconds

function moveTarget() {
    const x = Math.random() * (window.innerWidth - target.offsetWidth);
    const y = Math.random() * (window.innerHeight - target.offsetHeight);
    target.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.classList.remove('hidden'); // Show the object in the new location
}

target.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = `Score: ${score}`;
    target.classList.add('hidden'); // Hide the object
    setTimeout(moveTarget, 10); // Move after a short delay
});


// Update the moveInterval based on the slider's value
speedSlider.addEventListener('input', () => {
    moveInterval = speedSlider.value;
    clearInterval(moving);
    moving = setInterval(moveTarget, moveInterval);
});

// Start moving the target
let moving = setInterval(moveTarget, moveInterval);
