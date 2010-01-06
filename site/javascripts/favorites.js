// Add page to the browser's Favorites
function addToFavorites(title, url) {
    if (document.all)
        window.external.AddFavorite(url, title);
}
