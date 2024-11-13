function toggleSearchPopup() {
    const popup = document.getElementById("search-popup");
    const body = document.body;
    
    // Check if the navbar is open
    const isNavbarOpen = navbarLinks.classList.contains("left-0");
    
    // If the navbar is open, close it
    if (isNavbarOpen) {
        navbarLinks.classList.remove("left-0");
        hamburger.classList.remove("hidden");
        crossIcon.classList.remove("block");
        crossIcon.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }

    // Toggle the search popup
    popup.classList.toggle("top-[74px]");
    
    if (popup.classList.contains("top-[74px]")) {
        body.classList.add("overflow-hidden");
    } else {
        body.classList.remove("overflow-hidden");
    }
}

function closeSearchPopup() {
    const popup = document.getElementById("search-popup");
    const body = document.body;
    popup.classList.remove("top-[74px]");
    body.classList.remove("overflow-hidden");
}