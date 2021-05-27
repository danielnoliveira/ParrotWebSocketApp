import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function NoConnectionScreen({reloadAppFunc}) {
  return (
    <View style={styles.container}>
      <Icon name="wifi" size={64} color="rgba(0,0,0,0.2)" />
      <Text style={styles.text}>Wifi não conectado!!!!!</Text>
      <TouchableOpacity onPress={reloadAppFunc} style={styles.button}>
        <Text style={styles.buttonText}>Tentar reconectar!!!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 30,
  },
  button: {
    shadowColor: 'rgba(0,0,0, .8)',
    shadowOffset: {height: 8, width: 2},
    shadowOpacity: 1,
    shadowRadius: 1,
    backgroundColor: '#fff',
    elevation: 5,
    width: '80%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '700',
    lineHeight: 32,
    width: '100%',
    textAlign: 'center',
  },
});
