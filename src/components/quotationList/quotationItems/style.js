import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
 mainCard:{
    backgroundColor:"grey",
    marginLeft:"3%",
    width:"95%",
    marginBottom:15,
    height:"auto",
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    borderRadius:10,
 },
 image:{
    width:30,
    height:30,
    marginLeft:2,

 },
 boxLeft:{
    flexDirection:"row",
    alignItems:"center",

 },
 contentLeft:{
    width:"36%",
    height:"100%",
    alignItems:"flex-start"
 },
 dateCotation:{
    fontWeight:"bold",
    fontSize:12,
    paddingLeft:2,
 },
 contentRight:{
    width:"60%",
    alignItems:"flex-end"
 },

 price:{
    fontWeight:"bold",
    fontSize:12,
    paddingLeft:2,
 }
  
})

export default styles