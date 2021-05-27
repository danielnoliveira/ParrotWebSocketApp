import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const bRadiusDefaultInputs = 10;

export default function SendButton({readySocket, sendMessage}) {
  const bgColor = !readySocket ? '#c2c2c2' : 'rgb(255,156,120)';
  return (
    <TouchableOpacity
      disabled={!readySocket}
      style={[styles.inputButton, {backgroundColor: bgColor}]}
      onPress={sendMessage}>
      <Icon name="send" color="white" size={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inputButton: {
    backgroundColor: 'rgb(255,156,120)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: bRadiusDefaultInputs,
    borderBottomRightRadius: bRadiusDefaultInputs,
    width: 55,
  },
});
