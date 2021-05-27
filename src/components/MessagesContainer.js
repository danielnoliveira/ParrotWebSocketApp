import React, {useRef} from 'react';
import {ScrollView, StyleSheet} from 'react-native';

export default function MessagesContainer({children}) {
  const scrollViewRef = useRef();
  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({animated: true})
      }
      style={styles.scrollViewContainer}
      contentContainerStyle={styles.messageContainer}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#2d9',
    paddingTop: 10,
  },
  messageContainer: {
    justifyContent: 'flex-end',
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
});
