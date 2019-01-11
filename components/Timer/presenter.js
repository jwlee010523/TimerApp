import React, { Component } from 'react';
import {View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../Button"

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;
  
    var seconds = parseInt(time % 60, 10);
  
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
      ? `0${seconds}`
      : seconds}`;
  
    return;
  }

class Timer extends Component{
    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        console.log(
            `currendProps : ${currentProps.isPlaying}, nextProps : ${nextProps.isPlaying}`
        )
        if(!currentProps.isPlaying&& nextProps.isPlaying){
            //start the interval
            console.log('should start');
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            },1000);
            this.setState({
                timerInterval
            });
        }else if(currentProps.isPlaying && !nextProps.isPlaying){
            //stop the interval
           console.log('should stop');
           clearInterval(this.state.timerInterval);
        }
    }

    render(){
        console.log(this.props)
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } =this.props;
        return (
           <View style={style.container}>
                {/* <statusbar barStyle={"light-content"}/> */}
                <View style={style.upper}>
                    <Text style={style.time}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={style.lower}>
                    {!isPlaying && 
                        (<Button iconName="play-circle" onPress={startTimer}/>)}
                    {isPlaying && 
                    (<Button iconName="stop-circle" onPress={restartTimer}/>)}
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