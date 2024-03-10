// Function to toggle between light and dark mode
function toggleMode() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
}

// Event listener for the mode toggle button
const toggleButton = document.getElementById("toggle-mode");
if (toggleButton) {
  toggleButton.addEventListener("click", toggleMode);
}

