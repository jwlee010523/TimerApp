import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    //TouchableOpacity를 사용하면 버튼을 눌렀을 때 피드백을 줄 수 있다.
    <TouchableOpacity onPressOut={onPress}>  
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  );
}

export default Button;