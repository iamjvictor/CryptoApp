import React, { Fragment } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./style"


export default function QuotationList(){
    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity style={styles.button} onPress={()=> {}}>
                <Text style={styles.text}>7D</Text>     
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> {}}>
                <Text style={styles.text}>15D</Text>     
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> {}}>
                <Text style={styles.text}>1M</Text>     
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> {}}>
                <Text style={styles.text}>3M</Text>     
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> {}}>
                <Text style={styles.text}>6M</Text>     
            </TouchableOpacity>
        </View>
        </Fragment>

    )
}