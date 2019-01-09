import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button"

class Timer extends Component{
    render(){
        return (
           <View style={style.container}>
                {/* <statusbar barStyle={"light-content"}/> */}
                <View style={style.upper}>
                    <Text style={style.time}>25:00</Text>
                </View>
                <View style={style.lower}>
                    <Button iconName="play-circle" onPress={()=> alert("it works")}/>
                    <Button iconName="stop-circle" onPress={()=> alert("it works")}/>
                </View>
           </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"black",
    },
    upper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lower: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    time: {
        color: "white",
        fontSize: 90,
        fontWeight: "100",
    },
});

export default Timer;