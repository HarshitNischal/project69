
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation" ;
import {createBottomTabNavigator} from "react-navigation-tabs";
//import SearchScreen from "./screen/searchScreen";
import TranscationScreen from "./screen/transactionScreen";

export default function App() {
  return (
   <AppContainer/>
  );
}
var TabNavigator=createBottomTabNavigator({
//Search:{screen:SearchScreen},
Transcation:{screen:TranscationScreen}
})
const AppContainer=createAppContainer(TabNavigator)