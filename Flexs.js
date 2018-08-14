import React, { Component } from "react";
import { View } from "react-native";

class Flexs extends Component {
  render() {
    return (
 <View style={{flex: 1,flexDirection: "column"}}>
        <View style = {{ backgroundColor: "red",    height: 125 }}/>
        <View style = {{ backgroundColor: "green",  height: 125 }}/>
 
        <View style={{ margin:1}} />
 
        <View style={{ flex:1,flexDirection: "column" }}>
         <View style={{ flexWrap: "wrap",flexDirection: "row"}}>
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>     
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>  
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>      
                  <View style = {{ margin:1, backgroundColor: "blue", height: 100, width: 100, flexGrow: 1}}/>       
             </View>
         </View>     
 </View>   );
  }
}

export default Flexs;
