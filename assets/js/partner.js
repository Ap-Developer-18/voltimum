

const menuIcon = document.getElementById("navToggle");
const hamburger = document.getElementById("hamburger");
const crossIcon = document.getElementById("cross");
const closeLinks = document.querySelectorAll(".close");
const navbarLinks = document.querySelector("#navbarLinks");
const container = document.querySelector(".container");

// Function to update the margin-left of navbarLinks
const updateNavbarMargin = () => {
    const marginLeft = window.getComputedStyle(container).marginLeft;
    navbarLinks.style.marginLeft = marginLeft;
};

// Initial call to set the margin-left
updateNavbarMargin();
// Event listener for window resize
window.addEventListener("resize", updateNavbarMargin);
const toggleNavbar = () => {
    const isOpen = navbarLinks.classList.toggle("left-0");
    hamburger.classList.toggle("hidden");
    crossIcon.classList.toggle("block");
    crossIcon.classList.toggle("hidden");

    // Apply overflow hidden only for small to large screens
    if (isOpen) {
        // Add the overflow-hidden class only up to 'lg' screens
        document.body.classList.add("overflow-hidden", "lg:overflow-visible");
    } else {
        // Remove the overflow-hidden class when the menu is closed
        document.body.classList.remove("overflow-hidden");
    }
};
menuIcon.addEventListener("click", toggleNavbar);
closeLinks.forEach((e) => e.addEventListener("click", toggleNavbar));

// TOOLTIP
function showTooltip(element) {
    const tooltip = element.querySelector('[role="tooltip"]');
    tooltip.classList.remove("invisible", "opacity-0");
    tooltip.classList.add("visible", "opacity-100");
}

function hideTooltip(element) {
    const tooltip = element.querySelector('[role="tooltip"]');
    tooltip.classList.add("invisible", "opacity-0");
    tooltip.classList.remove("visible", "opacity-100");
}

document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("main-image");
  const zoomIcon = document.getElementById("zoom-icon");
  const tabs = document.querySelectorAll(".tab");

  // Switch the main image when a tab is clicked
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const newImageSrc = tab.getAttribute("data-image");
      mainImage.src = newImageSrc;
    });
  });

  // Zoom-in/zoom-out on click
  zoomIcon.addEventListener("click", () => {
    mainImage.classList.toggle("zoomed");
  });
});

