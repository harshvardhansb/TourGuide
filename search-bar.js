document.addEventListener("DOMContentLoaded", function () {
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const cards = document.querySelectorAll(".row .image"); // Select all card containers

// Function to filter and display matching cards
function filterCards() {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach((card) => {
    const h2Element = card.querySelector("h2"); // Find the <h2> within the current card
    if (h2Element) {
        const cardText = h2Element.innerText.toLowerCase();
        const isMatch = cardText.includes(searchTerm);
        card.style.display = isMatch ? "block" : "none";
    }
    });
}

// Event listener for the search button
searchButton.addEventListener("click", filterCards);

// Event listener for the Enter key in the search input
searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
    filterCards();
    }
});
});
