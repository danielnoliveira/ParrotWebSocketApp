/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import LoadingScreen from './src/Screens/LoadingScreen';
import NoConnectionScreen from './src/Screens/NoConnectionScreen';
import ChatScreen from './src/Screens/ChatScreen';

import NetInfo from '@react-native-community/netinfo';

const App = () => {
  const [networkState, setNetworkState] = useState(null);
  const [reloadApp, setReloadApp] = useState(false);
  useEffect(() => {
    NetInfo.fetch()
      .then(state => {
        setNetworkState(n => state);
      })
      .catch(err => {
        console.log(err);
        setNetworkState(n => false);
      });
    setReloadApp(false);
  }, [reloadApp]);

  return networkState === null ? (
    <LoadingScreen />
  ) : networkState.isWifiEnabled && networkState.isConnected ? (
    <ChatScreen />
  ) : (
    <NoConnectionScreen reloadAppFunc={() => setReloadApp(s => true)} />
  );
};

export default App;
