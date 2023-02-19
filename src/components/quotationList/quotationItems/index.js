import React, { Fragment } from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import styles from "./style"


export default function QuotationItems(){
    return(
        <View style={styles.mainCard}>
            <View style={styles.contentLeft}>
                <View style={styles.boxLeft}>
                    <Image
                        style={styles.image}
                        source={require("../../../../images/btc.png")}
                    />
                    <Text style={styles.dateCotation}>17/08</Text>
                 </View>            
            </View>

            <View style={styles.contentRight}>
             <Text style={styles.price}>xx</Text>
            </View>
            
        </View>

    )
}