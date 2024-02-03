import { API_KEY } from "../../apikey.js";

// const API_KEY = '6f870b8e7ce9457585c341cdd23e3919'

export async function fetchNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2024-02-02&sortBy=popularity&apiKey=${ API_KEY }`)
        const news = await response.json();
        return news
    } catch (e) {
        console.error(e);
    }
} 