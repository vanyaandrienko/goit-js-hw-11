import axios from "axios";

const API_KEY = "47359148-e6bdc7b546b5534c01c17ed5e";
const BASE_URL = "https://pixabay.com/api/";


export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
}


