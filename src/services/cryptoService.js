import axios from 'axios';
import moment from 'moment';

const formatSparkLine = (numbers) =>{
    const sevenDaysAgo = moment().subtract(7, 'days').unix();
    let formattedSparkLine = numbers.map((item, index) => {
        return{
            x: sevenDaysAgo + (index +1) *3600,
            y: item,
        }
    })
}

const formatMarketData = (data) => {
    let formattedData = [];

    data.forEach(item => {
        const formattedSparkLine = formatSparkLine(item.sparkline_in_7d.price)

        const formattedItem = {
            ...item,
            sparline_in_7d:{
                price: formattedSparkLine
            }
        }

        formattedData.push(formattedItem);
    });

    return formattedData;
}


export const getMarketData = async () => {
    try {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage='7d%2C%2014d%2C%2030d%2C%2090d%2C%20180d%2C%201y");        
        const data = response.data;
        const formattedResponse = formatMarketData(data);
        return formattedResponse;
    
    } catch (error) {
        console.log(error.message)
    }
}