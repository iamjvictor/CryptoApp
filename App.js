import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import CurrentPrice from './src/components/currentPrice';
import HistoryGraphic from './src/components/historyGraphic';
import QuotationList from './src/components/quotationList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
      <CurrentPrice/>
      <HistoryGraphic/>
      <QuotationList/>
      <StatusBar 
      backgroundColor='grey'
      barStyle="dark-content"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40: 0
  },
  
});
