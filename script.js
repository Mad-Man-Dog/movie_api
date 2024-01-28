const imageButton = document.querySelector(".menu-icon");
const navdropdown = document.querySelector(".drop-down");

let isEffectApplied = false;
imageButton.addEventListener("click", () => {
  if (!isEffectApplied) {
    // Apply the effect
    imageButton.style.filter =
      "invert(67%) sepia(11%) saturate(7%) hue-rotate(324deg) brightness(100%) contrast(91%)";
    navdropdown.style.maxHeight = "200px";
  } else {
    // Remove the effect
    imageButton.style.filter =
      "invert(67%) sepia(11%) saturate(7%) hue-rotate(324deg) brightness(60%) contrast(91%)";
    navdropdown.style.maxHeight = "0";
  }

  // Toggle the flag
  isEffectApplied = !isEffectApplied;
});
