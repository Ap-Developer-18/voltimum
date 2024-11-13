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

// add to card popup
const addToCartBtn = document.getElementById("addToCartBtn");
const popup = document.getElementById("popup");
const overlay = document.getElementById("overlay");
const closePopup = document.getElementById("closePopup");

function openPopup() {
  popup.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}
function closePopupFunc() {
  popup.classList.add("hidden");
  overlay.classList.add("hidden");
  document.body.style.overflow = "";
}
addToCartBtn.addEventListener("click", openPopup);
closePopup.addEventListener("click", closePopupFunc);
overlay.addEventListener("click", closePopupFunc);

// counter
const counterWrappers = document.querySelectorAll(".counter-wrapper");

counterWrappers.forEach((wrapper) => {
  const addBtn = wrapper.querySelector(".addbtn");
  const subBtn = wrapper.querySelector(".subbtn");
  const countElem = wrapper.querySelector(".counting");

  addBtn.addEventListener("click", function () {
    countElem.innerHTML = +countElem.innerHTML + 1;
  });

  subBtn.addEventListener("click", function () {
    let currentCount = parseInt(countElem.innerHTML);
    countElem.innerHTML = Math.max(0, currentCount - 1);
  });
});

// Open the popup (for demonstration)
// Select all elements with the class 'open-popup'
const openPopupElements = document.querySelectorAll(".open-popup");

// Add a click event listener to each element
openPopupElements.forEach(function (element) {
  element.addEventListener("click", function () {
    document.getElementById("distributor-popup").classList.remove("hidden");
  });
});
// Close the popup
document.getElementById("popupclose").addEventListener("click", function () {
  document.getElementById("distributor-popup").classList.add("hidden");
});

function toggleAccordion(openId) {
  const section = document.getElementById(openId);
  const arrow = document.getElementById(`arrow-${openId}`);

  const isOpen = section.style.maxHeight;

  document.querySelectorAll(".accordion-item div").forEach((div) => {
    div.style.maxHeight = null;
  });
  document.querySelectorAll(".accordion-item svg").forEach((svg) => {
    svg.classList.remove("rotate-180");
  });

  if (!isOpen) {
    section.style.maxHeight = section.scrollHeight + "px";
    arrow.classList.add("rotate-180");
  }
}

const deleteIcons = document.querySelectorAll(".delete-icon");

deleteIcons.forEach((icon) => {
  icon.addEventListener("click", function () {
    const card = this.closest(".product-card");
    if (card) {
      card.style.display = "none";
    }
  });
});

// TABS
document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("main-image");
  const zoomIcon = document.getElementById("zoom-icon");
  const tabs = document.querySelectorAll(".tab img"); // Target the img inside the tab

  const zoomInIconSrc = "./assets/images/product/webp/seach-plus-icon.webp";
  const zoomOutIconSrc = "./assets/images/product/webp/seach-minus-icon.webp"; // Change to your zoom-out icon path

  // Switch the main image when a tab is clicked
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const newImageSrc = tab.getAttribute("data-image"); // Get the data-image attribute
      mainImage.src = newImageSrc; // Set the main image src to the new image path
    });
  });

  // Zoom-in/zoom-out on click and toggle the icon
  zoomIcon.addEventListener("click", () => {
    mainImage.classList.toggle("zoomed");

    if (mainImage.classList.contains("zoomed")) {
      zoomIcon.src = zoomOutIconSrc; // Change to zoom-out icon
    } else {
      zoomIcon.src = zoomInIconSrc; // Change back to zoom-in icon
    }
  });
});

//READ MORE
const description = document.getElementById("description");
const toggleButton = document.getElementById("toggleButton");

// Paragraph text to append after clicking "Read more"
const additionalText = `Rated voltage: 250Vac Rated current: 5A Double pole Child safety shutter system. Rated voltage: 250Vac Rated current: 5A Double pole Child safety shutter system.`;

let isExpanded = false;
let newParagraph;

toggleButton.addEventListener("click", () => {
  if (isExpanded) {
    // Remove the additional paragraph and change button text back to "Read more"
    newParagraph.remove();
    toggleButton.textContent = "Read more";
  } else {
    // Create a new paragraph element and append it after the original paragraph
    newParagraph = document.createElement("p");
    newParagraph.className =
      "font-normal text-base text-dark-grey leading-143 lg:max-w-[580px]";
    newParagraph.textContent = additionalText;

    description.parentNode.insertBefore(newParagraph, toggleButton);
    toggleButton.textContent = "Read less";
  }
  isExpanded = !isExpanded;
});
