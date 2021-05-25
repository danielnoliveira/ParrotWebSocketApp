/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {backgroundStyle} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const bRadiusDefaultInputs = 10;

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {text: 'Ola parrot', my: true},
    {text: 'Ola humano', my: false},
  ]);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ios: 'padding', android: 'height'})}>
      <StatusBar hidden />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.messageContainer}>
        {messages === null
          ? []
          : messages.map((m, index) => {
              const side = m.my ? 'flex-start' : 'flex-end';
              return (
                <View style={[styles.messageBallon, {alignSelf: side}]}>
                  <Text style={styles.messageText}>{m.text}</Text>
                </View>
              );
            })}
      </ScrollView>
      <View style={styles.inputsContainer}>
        <TextInput
          onChangeText={text => setMessage(text)}
          value={message}
          style={styles.inputText}
          multiline={true}
          placeholder="Sua mensagem aqui..."
          placeholderTextColor="#b1b1b1"
        />
        <TouchableOpacity
          style={styles.inputButton}
          onPress={() => setMessage('')}>
          <Icon name="send" color="white" size={30} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inputsContainer: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    paddingVertical: 14,
    backgroundColor: '#c1c1c1',
  },
  inputText: {
    width: '85%',
    backgroundColor: 'white',
    color: 'black',
    borderTopLeftRadius: bRadiusDefaultInputs,
    borderBottomLeftRadius: bRadiusDefaultInputs,
    paddingHorizontal: 18,
    textAlign: 'justify',
    fontSize: 20,
    lineHeight: 22,
  },
  inputButton: {
    backgroundColor: 'rgb(255,156,120)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: bRadiusDefaultInputs,
    borderBottomRightRadius: bRadiusDefaultInputs,
    width: 55,
  },
  scrollViewContainer: {
    backgroundColor: '#2d9',
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  messageBallon: {
    borderRadius: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 10,
  },
  messageText: {
    fontWeight: '500',
    fontSize: 22,
  },
});

export default App;
