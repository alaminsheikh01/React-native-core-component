import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const App = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Text>Hello world</Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default App;
