import React, { Fragment, useState, useEffect } from "react";
import {View, Text, TouchableOpacity, Image, SafeAreaView, FlatList} from "react-native";
import styles from "./style"
import axios from "axios";
import ListItem from "./ListItem";
import moment from 'moment';

export default function QuotationItems(){
    const [data, setData] = useState([]);

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

    useEffect(() => {
        const fetchMarketData = async () => {
          const marketData = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=BRL&order=market_cap_desc&per_page=20&page=1&sparkline=true&price_change_percentage=7d");
          const Data = marketData.data
          const formattedMarketData = formatMarketData(Data)
          setData(formattedMarketData);
        }
        fetchMarketData();
    }, [])    

    return(
        <SafeAreaView style={styles.mainCard}>
        
         <FlatList
         data={data}
         renderItem={({item}) => {
            return(
                <ListItem
                name={item.name}
                symbol={item.symbol}
                currentPrice={item.current_price}
                priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
                logoUrl={item.image}           
                />
            )
         }}
         keyExtractor={(item) => {
            item.id
         }}
         >
         
         </FlatList>
                    
        </SafeAreaView>

    )
}