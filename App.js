import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  const [titleText, setTitleText] = useState("Birds's Nest");
  const bodyText = 'This is sample text';

  const onPresstitle = () => {
    setTitleText("I'm from setTitleText [hello]");
  };

  return (
    <View>
      <Text>
        <Text>{titleText}</Text>
      </Text>
      <Text onPress={onPresstitle}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
