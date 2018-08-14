import React, { Component } from "react";
import { View } from "react-native";

class FlexExamples extends Component {
  render() {
    return (
 <View style={{flex: 1,flexDirection: "column"}}>
        <View style = {{ backgroundColor: "red",    height: 165 }}/>
        <View style = {{ backgroundColor: "green",  height: 165 }}/>
 
        <View style={{ margin:1}} />
 
        <View style={{ flex:1,flexDirection: "column" }}>
            <View style={{ flexWrap: "wrap",flexDirection:"row"}}>
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>     
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>  
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 87, width: 88}}/>       
             </View>
         </View>     
 </View>
 
    );
  }
 }

export default FlexExamples;
