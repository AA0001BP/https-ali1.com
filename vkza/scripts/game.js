// Select necessary DOM elements
const buttons = document.querySelectorAll(".gold, .silver");
const acceptButton = document.querySelector(".accept");
const mainCoin = document.querySelector(".main-coin");
let gameState = "initial";

// Function to get the current rotation of the coin
function getCurrentRotation(element) {
  const transform = element.style.transform;
  const match = transform.match(/rotateY\(([-\d.]+)deg\)/);
  return match ? parseFloat(match[1]) : 0;
}

// Function to reset the game to its initial state
function resetGame() {
  console.log("Game reset!");
  gameState = "initial";
  
  // Reset buttons
  buttons.forEach(button => {
    button.classList.remove("red");
    button.disabled = true;
  });

  // Reset coin rotation and scale
  const currentRotation = getCurrentRotation(mainCoin);
  mainCoin.style.transition = "none";
  mainCoin.style.transform = `rotateY(${currentRotation}deg) scale(1)`;
  mainCoin.offsetHeight; // Force reflow
  mainCoin.style.transition = '';

  // Reset accept button text
  acceptButton.textContent = "Начать игру"; // "Start Game" in Russian

  // Update button event listeners based on game state
  updateButtonHandler();
}

// Function to animate the coin rotation and scaling
function animateCoin(targetRotation, initialRotation) {
  const startTime = performance.now();
  const duration = 2000; // Animation duration in milliseconds

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const scale = 1 + 0.5 * Math.sin(progress * Math.PI);
    const rotation = initialRotation + progress * (targetRotation - initialRotation);
    mainCoin.style.transform = `rotateY(${rotation}deg) scale(${scale})`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      const winner = Math.floor(targetRotation / 180) % 2 === 0 ? buttons[0] : buttons[1];
      highlightWinner(winner);
      gameState = 'finished';
      acceptButton.textContent = "Сбросить"; // "Reset" in Russian
      updateButtonHandler();
    }
  }

  requestAnimationFrame(animate);
}

// Function to highlight the winning button
function highlightWinner(button) {
  buttons.forEach(btn => {
    btn.classList.toggle("red", btn === button);
    btn.disabled = true;
  });
}

// Function to start the game
function playGame() {
  gameState = "playing";
  acceptButton.textContent = "Ждем..."; // "Waiting..." in Russian
  buttons.forEach(button => button.disabled = true);
  
  // Prepare the coin for animation
  mainCoin.style.transition = "none";
  const initialRotation = getCurrentRotation(mainCoin);
  
  // Calculate random spins between 720° to 1080°
  const randomSpins = (Math.floor(Math.random() * 3) + 2) * 360;
  const targetRotation = initialRotation + randomSpins + (Math.random() < 0.5 ? 0 : 180);
  
  // Start animating the coin
  animateCoin(targetRotation, initialRotation);
}

// Function to update the event listener of the accept button based on game state
function updateButtonHandler() {
  // Remove existing event listeners to prevent multiple bindings
  acceptButton.removeEventListener("click", playGame);
  acceptButton.removeEventListener("click", resetGame);
  
  // Add appropriate event listener based on the current game state
  switch (gameState) {
    case "initial":
      acceptButton.addEventListener("click", playGame);
      break;
    case "finished":
      acceptButton.addEventListener("click", resetGame);
      break;
  }
}

// Initialize the game by resetting it to the initial state
resetGame();
