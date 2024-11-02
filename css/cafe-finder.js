// Toggle favorite status
function toggleFavorite(itemId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.includes(itemId)) {
        // Remove item from favorites
        favorites = favorites.filter(fav => fav !== itemId);
    } else {
        // Add item to favorites
        favorites.push(itemId);
    }

    // Update localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update heart icon appearance
    const heart = document.querySelector(`[data-item="${itemId}"]`);
    if (heart) {
        heart.classList.toggle('favorited', favorites.includes(itemId));
    }
}

// Load favorites and display them on the favorites page
function displayFavorites() {
    const favoritesContainer = document.getElementById('favoritesContainer');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favoritesContainer.innerHTML = ''; // Clear existing favorites

    favorites.forEach(fav => {
        // Create a card for each favorite item
        const card = document.createElement('div');
        card.classList.add('favorite-card');

        // Populate the card's content (adjust as needed for your actual data)
        card.innerHTML = `
            <h2>Cafe Title</h2>
            <p>Description, ambiance, mood.</p>
            <p>(in own words)</p>
            <img src="heart-filled.png" class="heart" alt="Favorite">
        `;

        favoritesContainer.appendChild(card);
    });
}

// Initialize favorites display on favorites page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('favoritesContainer')) {
        displayFavorites();
    }

    // Highlight favorited items on the main page
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(itemId => {
        const heart = document.querySelector(`[data-item="${itemId}"]`);
        if (heart) {
            heart.classList.add('favorited');
        }
    });
});