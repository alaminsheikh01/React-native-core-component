import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  DrawerLayoutAndroid,
} from 'react-native';

const App = () => {
  const drawer = useRef(null);

  const [drawerPosition, setDrawerPosition] = useState('left');

  const changeDrawerPostion = () => {
    if (drawerPosition === 'left') {
      setDrawerPosition('right');
    } else {
      setDrawerPosition('left');
    }
  };

  const renderNavigationView = () => (
    <View>
      <Text>I'm in the drawer</Text>
      <Button
        title="Close Drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={renderNavigationView}>
      <View>
        <Text>Drawer on the {drawerPosition}!</Text>

        <Button
          title="Change Drawer Postion"
          onPress={() => changeDrawerPostion()}
        />
        <Text>Swipe from the side or press button below to see it!</Text>
        <Button
          title="Open Drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({});

export default App;
