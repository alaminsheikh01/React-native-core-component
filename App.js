import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);

  const onPress = () => {
    setCount(count + 1);
  };

  return (
    <View style={{paddingLeft: 20, paddingTop: 40}}>
      <TouchableHighlight onPress={onPress}>
        <View>
          <Text>Touch here!</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text>{count ? count : null}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
