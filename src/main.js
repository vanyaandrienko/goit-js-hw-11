import { fetchImages } from "./js/pixabay-api.js";
import { clearGallery, toggleLoader, showMessage, renderGallery } from "./js/render-functions.js";

const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", onSearch);

async function onSearch(event) {
  event.preventDefault();

  const query = searchForm.elements.query.value.trim();

  if (!query) {
    showMessage("warning", "Warning", "Please enter a search term.");
    return;
  }

  clearGallery();
  toggleLoader(true);

  try {
    const response = await fetchImages(query);
    const images = response.hits;

    if (images.length === 0) {
      showMessage("info", "Info", "Sorry, there are no images matching your search query.");
      return;
    }

    renderGallery(images);
    showMessage("success", "Success", `Found ${response.totalHits} images.`);
  } catch (error) {
    showMessage("error", "Error", "Something went wrong. Please try again later.");
  } finally {
    toggleLoader(false);
  }
}