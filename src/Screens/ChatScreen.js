import React, {useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {getHour} from './../utils/ToolsTime';

import MessagesContainer from './../components/MessagesContainer';
import Ballon from './../components/Ballon';
import SendButton from './../components/SendButton';

const bRadiusDefaultInputs = 10;
var socket = null;
const openTime = getHour();

const ChatScreen = () => {
  const [readySocket, setReadySocket] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      text: 'Ola humano. Eu sou Parrot, o majestoso papagaio imitador, vamos conversar um pouco?',
      my: false,
      time: openTime,
    },
  ]);

  useEffect(() => {
    socket = new WebSocket('wss://echo.websocket.org');
    socket.onmessage = msg =>
      setMessages(m => [...m, {text: msg.data, my: false, time: getHour()}]);
    socket.onopen = e => {
      setReadySocket(!readySocket);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendMessage = () => {
    if (message.length === 0) {
      return;
    }
    socket.send(message);
    setMessages([...messages, {text: message, my: true, time: getHour()}]);
    setMessage('');
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <MessagesContainer>
        {messages === null
          ? []
          : messages.map((m, index) => {
              return (
                <Ballon
                  key={index}
                  rightSide={!m.my}
                  text={m.text}
                  time={m.time}
                />
              );
            })}
      </MessagesContainer>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
        <View style={styles.inputsContainer}>
          <TextInput
            onChangeText={text => setMessage(text)}
            value={message}
            style={styles.inputText}
            multiline={true}
            placeholder="Sua mensagem aqui..."
            placeholderTextColor="#b1b1b1"
          />
          <SendButton readySocket={readySocket} sendMessage={sendMessage} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default ChatScreen;
