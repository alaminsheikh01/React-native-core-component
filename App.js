import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: 'https://media-exp1.licdn.com/dms/image/C5603AQFe6INPvSY3tA/profile-displayphoto-shrink_200_200/0/1632061449207?e=1637798400&v=beta&t=7yoQrfdoGb2Y7cIuYXVA4VbmTXZuxitMKn-J1l8CiD0',
        }}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;
