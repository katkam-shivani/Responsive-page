// Toggle mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Handle drink submission
function submitOrder() {
  const input = document.getElementById("drinkInput").value.trim();
  const response = document.getElementById("response");

  if (input) {
    response.innerText = `Great choice! "${input}" sounds refreshing! `;
    response.style.color = "#00704A";
  } else {
    response.innerText = "Please enter a drink!";
    response.style.color = "red";
  }
}
