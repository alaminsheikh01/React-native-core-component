import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    id: '1234',
    title: 'First Item',
  },
  {
    id: '12342',
    title: 'Second Item',
  },
  {
    id: '12344',
    title: 'Third Item',
  },
];

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
