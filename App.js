import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const App = () => {
  const onPressLearnMore = () => {
    console.log('Hello world');
  };
  return (
    <View style={[styles.container, styles.horizontal]}>
      <Button
        onPress={onPressLearnMore}
        title="Click me"
        color="#841584"
        accessibilityLabel="learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default App;
