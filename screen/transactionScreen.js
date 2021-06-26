import React, {Component} from "react" ;
import {StyleSheet, Text, View, TouchableOpacity} from "react-native"
import * as Permissions from "expo-permissions"
import {BarCodeScanner} from "expo-barcode-scanner"

export default class transactionScreen extends Component{
    constructor() {
        super()
         this.state={
             hasCameraPermissions:null,
             scanned:false,
             scannedData:"",
             buttonState:"normal",

         }
    }
    getCameraPermissions=async() => {
        const {status}=await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            //status==="granted" is true when user has granted permission else it will be false 
            hasCameraPermissions:status==="granted",
             scanned:false,
             buttonState:"clicked", 
        })                
    }
    handleBarCodeScanned=async({type,data})=> {
        this.setState({
            scanned:true,
            scannedData:data,
            buttonState:"normal",
        })
    }
    render(){
        if(this.state.buttonState==='clicked'&this.state.hasCameraPermissions) {
            return(
                <BarCodeScanner
                onBarcodeScanned={this.state.scanned?undefined:this.handleBarCodeScanned}
                />
            )
        }
        else if(this.state.buttonState==="normal") {
        return(
         <View style={styles.container}>
             <Text style={styles.textStyle}>
                 {this.state.hasCameraPermissions===true?this.state.scannedData:"request camera permission"}
             </Text>
             <TouchableOpacity onPress={this.getCameraPermissions} style={styles.scanButton}>
                 <Text style={styles.buttonText}>
                     Scan QRCode
                 </Text>
             </TouchableOpacity>
         </View>   
        )}
    }
}
const styles=StyleSheet.create({
 container:{
     flex:1,
     justifyContent:"center",
     alignItems:"center"
 },
 textStyle:{
     color:"black",
     fontSize:20,
textDecorationLine:'underline'
 },
 buttonText:{fontSize:20},
 scanButton:{backgroundColor:"cyan",
margin:10,
padding:10}
})