import axios from "axios";

const qsumApiKey = import.meta.env.VITE_QUICK_SUM_API_KEY
const instance = axios.create({
    baseURL : 'https://article-extractor-and-summarizer.p.rapidapi.com',
    headers : {
        'X-RapidAPI-Key' : qsumApiKey,
        'X-RapidAPI-Host' : 'article-extractor-and-summarizer.p.rapidapi.com'
    },
})

export default instance