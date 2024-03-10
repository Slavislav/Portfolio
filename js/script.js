// Function to toggle between light and dark mode and border add over the image
function toggleMode() {
  const body = document.body;
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  const image = document.querySelector('.about-me-image img');
  if (image) {
  image.classList.toggle("image-border");
}
}

// Function to handle click event on the image
function handleImageClick() {
  const image = document.querySelector(".about-me-image img");
  if (image) {
    image.classList.toggle("image-clicked"); // Toggle the class for click effect
  }
}


// Event listener for the mode toggle button
const toggleButton = document.getElementById("toggle-mode");
if (toggleButton) {
  toggleButton.addEventListener("click", toggleMode);
}

const imageElement = document.querySelector(".about-me-image img");
if (imageElement) {
  imageElement.addEventListener("click", handleImageClick);
}
