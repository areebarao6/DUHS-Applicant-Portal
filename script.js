// Get the modal element and the close button
var popupModal = document.getElementById("popupModal");
var closeBtn = document.getElementById("closeBtn");

// Show the popup when the page is loaded
window.onload = function() {
  setTimeout(function() {
    popupModal.style.display = "block";   // Show the modal
    setTimeout(function() {
      popupModal.style.opacity = 1;        // Fade-in effect
    }, 10);
  }, 500); // Delay before showing popup (e.g., 0.5 seconds)
}

// When the user clicks the close button, hide the modal
closeBtn.onclick = function() {
  popupModal.style.opacity = 0; // Fade-out effect
  setTimeout(function() {
    popupModal.style.display = "none"; // Hide the modal after fade-out
  }, 300); // Delay to match fade-out duration
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
  if (event.target == popupModal) {
    popupModal.style.opacity = 0;
    setTimeout(function() {
      popupModal.style.display = "none";
    }, 300);
  }
}
