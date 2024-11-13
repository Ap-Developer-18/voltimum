// show-more button js
document.querySelectorAll(".btn-toggle").forEach((button) => {
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

function closePopup() {
  const popup = document.getElementById("search-popup");
  const body = document.body;
  popup.classList.add("hidden");
  body.classList.remove("overflow-hidden");
}

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

// Function to toggle the dropdown visibility
function toggleDropdown(event) {
  const dropdown = document.getElementById("inputDropdown");
  dropdown.classList.toggle("hidden");
}

// Close dropdown if clicking outside
window.onclick = function (e) {
  const dropdown = document.getElementById("inputDropdown");
  const searchInput = document.getElementById("searchInput");

  if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
};

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
const cardContainer = document.getElementById("cardContainer");

function selectPage(page) {
  currentPage = page;
  updatePagination();
  renderCards();
}

function nextPage() {
  if (currentPage < 3) {
    selectPage(currentPage + 1);
  }
}

function previousPage() {
  if (currentPage === 3) {
    selectPage(2);
  } else if (currentPage > 1) {
    selectPage(currentPage - 1);
  }
}
function updatePagination() {
  const pages = document.querySelectorAll("[data-page]");
  const container = document.querySelector(".flex.items-center");
  pages.forEach((page) => {
    const isCurrent = page.dataset.page == currentPage;
    page.classList.toggle("bg-dark-red", isCurrent);
    page.classList.toggle("text-white", isCurrent);
    page.classList.toggle("text-black", !isCurrent);
    page.classList.toggle("border-dark-red", isCurrent);
  });
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
    availability: "Availability for (3 sellers)",
    price: "Price range:",
    vat: "£8.54 -> £10.21 ex. vat",
    vSignImg: "./assets/images/search/webp/v-sign.webp",
    points: "28 loyalty points",
  },
  {
    image: "./assets/images/search/webp/socket2.webp",
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
    image: "./assets/images/search/webp/socket3.webp",
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
    image: "./assets/images/search/webp/socket4.webp",
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
    image: "./assets/images/search/webp/socket5.webp",
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
    image: "./assets/images/search/webp/socket6.webp",
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
    image: "./assets/images/search/webp/socket7.webp",
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
    image: "./assets/images/search/webp/socket8.webp",
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
    image: "./assets/images/search/webp/socket10.webp",
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
    image: "./assets/images/search/webp/socket11.webp",
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
    image: "./assets/images/search/webp/socket12.webp",
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
    image: "./assets/images/search/webp/socket13.webp",
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
    image: "./assets/images/search/webp/socket14.webp",
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
    image: "./assets/images/search/webp/socket15.webp",
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
    image: "./assets/images/search/webp/socket16.webp",
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
    image: "./assets/images/search/webp/socket17.webp",
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
    image: "./assets/images/search/webp/socket18.webp",
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
    image: "./assets/images/search/webp/socket19.webp",
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
    image: "./assets/images/search/webp/socket20.webp",
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
    image: "./assets/images/search/webp/socket21.webp",
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
    image: "./assets/images/search/webp/socket22.webp",
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
    image: "./assets/images/search/webp/socket23.webp",
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
    image: "./assets/images/search/webp/socket2.webp",
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
    image: "./assets/images/search/webp/socket3.webp",
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
    image: "./assets/images/search/webp/socket4.webp",
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
    image: "./assets/images/search/webp/socket5.webp",
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
    image: "./assets/images/search/webp/socket6.webp",
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
    image: "./assets/images/search/webp/socket7.webp",
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
    image: "./assets/images/search/webp/socket8.webp",
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
    image: "./assets/images/search/webp/socket9.webp",
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
    image: "./assets/images/search/webp/socket10.webp",
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
    image: "./assets/images/search/webp/socket11.webp",
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
    image: "./assets/images/search/webp/socket12.webp",
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
function renderCards() {
  cardContainer.innerHTML = "";
  let numberOfCardsToShow;
  if (currentPage === 1) {
    numberOfCardsToShow = 12;
  } else if (currentPage === 2) {
    numberOfCardsToShow = 12;
  } else if (currentPage === 3) {
    numberOfCardsToShow = 10;
  } else {
    numberOfCardsToShow = 4;
  }
  const startIndex = (currentPage - 1) * 12;
  document.getElementById("total-results").innerHTML = cardData.length;

  const cardsToDisplay = cardData.slice(
    startIndex,
    startIndex + numberOfCardsToShow
  );
  cardsToDisplay.forEach((data, index) => {
    const card = document.createElement("div");
    card.className =
      "card bg-pale-blue rounded-custom-xs w-[333px] sm:max-w-[285px] lg:w-[279px] h-[453px] border border-solid border-cloud-gray mx-auto";
    card.innerHTML = `
      <div class="bg-white rounded-custom-xs">
        <a href="/product.html">
          <div class="pt-[10px]"><img width="150" height="150" src="${
            data.image
          }" alt="${
      data.alt
    }" class="object-cover mx-auto w-[124px] h-[124px] p-3 rounded"></div>
                </div>
        </a>
      <div class="pt-4 px-5 border-solid border-t border-mercury">
        <p class="font-normal text-xs leading-120 text-dark-grey mb-2">${
          data.serialNumber
        }</p>
        <p class="font-medium text-sm leading-120 text-black mb-3">${
          data.title
        }</p>
        <div class="flex justify-between border border-solid ${
          index % 3 === 0
            ? "border-green"
            : index % 3 === 1
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
    `;
    if (index === 2) {
      card.innerHTML += `
          <div class="flex items-center gap-[10px] bg-soft-grey py-[11px] ps-[56px] pe-[30px] rounded-[5px] max-w-[238px] mx-auto mt-3">
              <button class="font-semibold text-sm leading-120 text-white text-nowrap">Visit Manufacturer</button>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 4H3.5C3.10218 4 2.72064 4.15804 2.43934 4.43934C2.15804 4.72064 2 5.10218 2 5.5V12.5C2 12.8978 2.15804 13.2794 2.43934 13.5607C2.72064 13.842 3.10218 14 3.5 14H10.5C10.8978 14 11.2794 13.842 11.5607 13.5607C11.842 13.2794 12 12.8978 12 12.5V7M5 11L14 2M14 2H10.5M14 2V5.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>`;
    } else {
      card.innerHTML += `
          <button onclick="openPopup()" class="font-semibold text-sm text-white leading-120 bg-dark-red py-[10px] w-[284px] sm:max-w-[245px] lg:w-[unset] lg:px-20 rounded-[5px] mt-3 hover:bg-white hover:text-dark-red hover:border-dark-red border hover:bg-transparent border-solid border-transparent text-nowrap transition ease-linear duration-300 mx-5">Add to Cart</button>`;
    }

    cardContainer.appendChild(card);
  });
}
renderCards();

function toggleCircleSVG(element) {
  const svgElement = element.querySelector(".toggle-circle-svg");
  svgElement.classList.toggle("!block");
}
const menuIcon = document.getElementById("navToggle");
const hamburger = document.getElementById("hamburger");
const crossIcon = document.getElementById("cross");
const closeLinks = document.querySelectorAll(".close");
const navbarLinks = document.querySelector("#navbarLinks");
const container = document.querySelector(".container");

const updateNavbarMargin = () => {
  const marginLeft = window.getComputedStyle(container).marginLeft;
  navbarLinks.style.marginLeft = marginLeft;
};

updateNavbarMargin();
window.addEventListener("resize", updateNavbarMargin);
const toggleNavbar = () => {
  const isOpen = navbarLinks.classList.toggle("left-0");
  hamburger.classList.toggle("hidden");
  crossIcon.classList.toggle("block");
  crossIcon.classList.toggle("hidden");

  if (isOpen) {
    document.body.classList.add("overflow-hidden", "lg:overflow-visible");
  } else {
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
      });
      this.innerHTML = "Show less";
    } else {
      allItems.forEach((item, index) => {
        if (index > 0) {
          item.classList.add("hidden");
        }
      });
      this.innerHTML = "Show more";
    }
  });
});

function toggleSVG(element) {
  const targetDiv = element.querySelector(".size-4");
  const svgElement = targetDiv.querySelector(".toggle-svg");
  svgElement.classList.toggle("hidden");
  targetDiv.classList.toggle("!bg-dark-red");
  targetDiv.classList.toggle("!border-dark-red");
}

document.addEventListener("DOMContentLoaded", function () {
  const navbarLinks = document.querySelectorAll("#navbarLinks li");

  // Get the current path, e.g., '/product-finder.html'
  const currentPath = window.location.pathname;

  navbarLinks.forEach(function (li) {
    const a = li.querySelector("a");
    if (a) {
      const href = a.getAttribute("href");

      // Create a URL object to handle absolute and relative URLs
      const linkURL = new URL(href, window.location.origin);
      const linkPath = linkURL.pathname;

      // Check if the link's path matches the current path
      if (linkPath === currentPath) {
        // Add Tailwind classes to highlight the active link
        li.classList.add("text-dark-red", "font-bold");

        // Optionally, add aria-current for accessibility
        a.setAttribute("aria-current", "page");
      } else {
        // Remove Tailwind classes if not active
        li.classList.remove("text-dark-red", "font-bold");

        // Remove aria-current attribute
        a.removeAttribute("aria-current");
      }

      // Handle links with href="#" by adding click event listeners
      if (href === "#") {
        a.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default anchor behavior

          // Remove active classes from all <li> elements
          navbarLinks.forEach(function (item) {
            item.classList.remove("text-dark-red", "font-bold");
            const link = item.querySelector("a");
            if (link) {
              link.removeAttribute("aria-current");
            }
          });

          // Add active classes to the clicked <li>
          li.classList.add("text-dark-red", "font-bold");

          // Optionally, set aria-current
          a.setAttribute("aria-current", "page");

          // If you have a tooltip or modal to show, you can trigger it here
          // For example:
          // showTooltip(li);
        });
      }
    }
  });
});
