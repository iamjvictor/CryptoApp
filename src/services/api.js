import axios from "axios";

const api = axios.create({
    baseURL:'https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=24h'
});

export default api;