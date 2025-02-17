// Select the .h-right container and the popup-tools container
const hRight = document.querySelector('.h-right');
const popupTools = document.querySelector('.popup-tools');

// When the user hovers over the .h-right container (i.e., the folder image)
hRight.addEventListener('mouseenter', () => {
  popupTools.style.display = 'flex'; // Show the popup tools
  setTimeout(() => {
    popupTools.style.opacity = '1'; // Fade in tools
    popupTools.style.transform = 'translateX(-50%) translateY(0)'; // Move tools into place
  }, 10);
});

// When the user stops hovering over the .h-right container
hRight.addEventListener('mouseleave', () => {
  popupTools.style.opacity = '0'; // Fade out tools
  popupTools.style.transform = 'translateX(-50%) translateY(10px)'; // Move tools back down
  setTimeout(() => {
    popupTools.style.display = 'none'; // Hide the popup tools after animation
  }, 300); // Wait for the animation to finish before hiding
});
