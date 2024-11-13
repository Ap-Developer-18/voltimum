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
  navbarLinks.style.marginRight = marginLeft;
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
$(".premium").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: ".prev-btn",
  nextArrow: ".next-btn",
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

document.body.event.preventDefault();
