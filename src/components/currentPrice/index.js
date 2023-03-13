import React from "react";
import {View, Text} from "react-native";
import styles from "./style"


export default function CurrentPrice(){
    return(
        <View style={styles.HeaderPrice}>
            <Text style={styles.CurrentPrice}>Crypto APP</Text>
            <Text style={styles.TextPrice}>Last Updated cypto prices</Text>
        </View>

    )
}