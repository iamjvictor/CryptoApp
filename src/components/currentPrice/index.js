import React from "react";
import {View, Text} from "react-native";
import styles from "./style"


export default function CurrentPrice(){
    return(
        <View style={styles.HeaderPrice}>
            <Text style={styles.CurrentPrice}>$ 24.567</Text>
            <Text style={styles.TextPrice}>Last Updated</Text>
        </View>

    )
}