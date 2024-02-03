import { API_KEY } from "../../apikey.js";

// Direct to https://newsapi.org/docs/get-started for more

export async function fetchNews() {
    async function getJSON() {
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=Apple&from=2024-02-02&sortBy=popularity&apiKey=${ API_KEY }`)
            const news = await response.json();
            return news
        } catch (e) {
            console.error(e);
        }
    }

    const promise = await getJSON().then(result => result.articles);
    return promise;
} 