import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const lSide = {alignSelf: 'flex-start', backgroundColor: 'white'};
const rSide = {alignSelf: 'flex-end', backgroundColor: '#f5abc9'};

export default function Ballon({text, rightSide, time}) {
  return (
    <View style={[styles.messageBallon, rightSide ? rSide : lSide]}>
      <Text style={styles.messageAuthor}>
        {rightSide ? 'Parrot' : 'Você'} - {time}
      </Text>
      <Text style={styles.messageText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageBallon: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontWeight: '500',
    fontSize: 20,
  },
  messageAuthor: {
    fontSize: 16,
  },
});
