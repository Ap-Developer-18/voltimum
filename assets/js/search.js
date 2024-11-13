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

function toggleSVG(element) {
  const svgElement = element.querySelector(".toggle-svg");

  svgElement.classList.toggle("!block");

  element.classList.toggle("!bg-pilot-blue");
  element.classList.toggle("!border-pilot-blue");
}
function toggleCircleSVG(element) {
  const svgElement = element.querySelector(".toggle-circle-svg");
  svgElement.classList.toggle("!block");
}

// filter popup
function closeFilterPopup() {
  const popup = document.getElementById("filter-popup");
  const body = document.body;
  popup.classList.remove("!left-0");
  body.classList.remove("overflow-hidden");
}
// filter popup
function toggleFilterPopup() {
  const popup = document.getElementById("filter-popup");
  const body = document.body;
  popup.classList.toggle("!left-0");
  if (popup.classList.contains("!left-0")) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.add("overflow-hidden");
  }
}

// availability popup
function closeFAvailabilityPopup() {
  const popup = document.getElementById("availability-popup");
  const body = document.body;
  popup.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}
function toggleAvailabilityPopup() {
  const popup = document.getElementById("availability-popup");
  const body = document.body;
  popup.classList.remove("hidden");
  popup.classList.add("flex");
  if (popup.classList.contains("hidden")) {
    body.classList.remove("overflow-hidden");
  } else {
    body.classList.add("overflow-hidden");
  }
}

// input-check
function toggleSVG(element) {
  const targetDiv = element.querySelector(".size-4");
  const svgElement = targetDiv.querySelector(".toggle-svg");
  svgElement.classList.toggle("hidden");
  targetDiv.classList.toggle("!bg-pilot-blue");
  targetDiv.classList.toggle("!border-pilot-blue");
}
// show-more button js
document.querySelectorAll(".toggle-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const group = this.getAttribute("data-group");
    const hiddenItems = document.querySelectorAll(
      `.content-container[data-group="${group}"] .hidden`
    );
    const allItems = document.querySelectorAll(
      `.content-container[data-group="${group}"] > div`
    );
    if (hiddenItems.length > 0) {
      hiddenItems.forEach((item) => {
        item.classList.remove("hidden");
        item.style.display = "flex";
      });
      this.innerHTML = "Show less";
    } else {
      allItems.forEach((item, index) => {
        if (index > 0) {
          item.classList.add("hidden");
          item.style.display = "none";
        }
      });
      this.innerHTML = "Show more";
    }
  });
});

// dropdown
const sortToggleContainer = document.getElementById("sort-toggle-container");
const dropdown = document.getElementById("dropdown");
const sortToggle = document.getElementById("sort-toggle");
sortToggleContainer.addEventListener("click", (event) => {
  dropdown.classList.toggle("hidden");
  sortToggle.classList.toggle("rotate-180");
  event.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (
    !dropdown.contains(event.target) &&
    !sortToggleContainer.contains(event.target)
  ) {
    dropdown.classList.add("hidden");
    sortToggle.classList.remove("rotate-180");
  }
});
const dropdownOptions = dropdown.querySelectorAll("p");
dropdownOptions.forEach((option) => {
  option.addEventListener("click", () => {
    dropdownOptions.forEach((opt) => opt.classList.remove("bg-ghost-white"));

    option.classList.add("bg-ghost-white");

    dropdown.classList.add("hidden");
    sortToggle.classList.remove("rotate-180");
  });
});
// pagination
let currentPage = 1;
const totalPages = 3;

function selectPage(page) {
  currentPage = page;
  updatePagination();
}

function nextPage() {
  if (currentPage < totalPages) {
    selectPage(currentPage + 1);
  }
}

function previousPage() {
  if (currentPage > 1) {
    selectPage(currentPage - 1);
  }
}
function updatePagination() {
  const pages = document.querySelectorAll("[data-page]");
  const container = document.querySelector(".flex.items-center");
  pages.forEach((page) => {
    const isCurrent = page.dataset.page == currentPage;
    page.classList.toggle("bg-pilot-blue", isCurrent);
    page.classList.toggle("text-white", isCurrent);
    page.classList.toggle("text-black", !isCurrent);
    page.classList.toggle("border-pilot-blue", isCurrent);
  });
  updateCardDisplay(currentPage);
  
  document.querySelector(".start-result").innerHTML =
    (currentPage - 1) * 12 + 1;
  document.querySelector(".end-result").innerHTML = Math.min(
    currentPage * 12,
    34
  );
  // document.querySelector(".font-medium").textContent = `Showing ${
  //   (currentPage - 1) * 12 + 1
  // } to ${Math.min(currentPage * 12, 97)} of 97 results`;
}

const cardData = [
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  //
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  //
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Some Availability (1 seller)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "50 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "No Availability",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "1,000 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket.webp",
    alt: "socket-img",
    serialNumber: "2CLA623759N1501",
    title: "AM22186-SB BS Single socket outlet 5A round-pin, DP switched - SB",
    availability: "Good Availability (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
];
function updateCardDisplay(page) {
  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  let numberOfCards;
  if (page === 1) {
    numberOfCards = 12;
    document.getElementsByClassName("start-results").innerHTML = 1;
    document.getElementsByClassName("end-results").innerHTML = 12;
    console.log("1");
  } else if (page === 2) {
    numberOfCards = 12;
    document.getElementsByClassName("start-results").innerHTML = 13;
    document.getElementsByClassName("end-results").innerHTML = 24;
    console.log("2");
  } else if (page === 3) {
    numberOfCards = 10;
    document.getElementsByClassName("start-results").innerHTML = 25;
    document.getElementsByClassName("end-results").innerHTML = 34;
    console.log("3");
  } else {
    numberOfCards = 8;
  }

  const startIndex = page === 1 ? 0 : page === 2 ? 12 : 23;
  document.getElementById("total-results").innerHTML = cardData.length;
  const endIndex = Math.min(startIndex + numberOfCards, cardData.length);

  for (let i = startIndex; i < endIndex; i++) {
    const data = cardData[i];
    const card = document.createElement("div");
    card.className =
      "card bg-pale-blue rounded-custom-xs w-[333px] sm:max-w-[285px] lg:w-[279px] h-[453px] border border-solid border-cloud-gray mx-auto";
    card.innerHTML = `
        <div class="bg-white rounded-custom-xs"><a href="/product.html">
            <div class="pt-[10px]">
                <img width="150" height="150" src="${data.image}" alt="${
      data.alt
    }" class="object-cover mx-auto p-3 w-[124px] h-[124px] rounded">
            </div>
        </a></div>
        <div class="pt-4 px-5 pb-9 border-solid border-t border-mercury">
            <p class="font-normal text-xs leading-120 text-dark-grey mb-2">${
              data.serialNumber
            }</p>
            <p class="font-medium text-sm leading-120 text-black mb-3">${
              data.title
            }</p>
            <div class="flex justify-between border border-solid ${
              i % 3 === 0
                ? "border-green"
                : i % 3 === 1
                ? "border-orange"
                : "border-soft-grey"
            } p-[7px_16.5px_7px_14px] cursor-pointer" onclick="toggleAvailabilityPopup()">
                <p class="font-semibold text-xs leading-120 text-black">${
                  data.availability
                }</p>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1L6.5 6L1.5 11" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div class="flex items-center pt-3">
                <p class="font-semibold text-xs leading-120 text-black">${
                  data.price
                }</p>
                <p class="font-normal text-xs leading-120 text-black ml-1">${
                  data.vat
                }</p>
            </div>
            <div class="flex items-center gap-3 pt-3">
                <img width="24" height="24" src="${
                  data.vSignImg
                }" alt="VSignImg" class="object-cover rounded-[5px]">
                <p class="font-medium text-xs leading-120 text-black">${
                  data.points
                }</p>
            </div>
            <button onclick="openPopup()" class="font-semibold text-sm text-white leading-120 bg-pilot-blue py-[10px] w-[284px] sm:max-w-[245px] lg:w-[unset] lg:px-20 rounded-[5px] mt-3 hover:bg-transparent hover:text-pilot-blue hover:border-pilot-blue border border-solid border-transparent text-nowrap transition ease-linear duration-300">Add to Cart</button>
        </div>
        `;
    cardContainer.appendChild(card);
  }
}

updatePagination();
