import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import fb from './screens/fb';
import ig from './screens/ig';

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Social Media App</Text>

        <AppContainer />
      </View>
    );
  }
}

const tabNavigator = createBottomTabNavigator({
  facebook: {screen: fb},
  instagram: {screen: ig}
})

const AppContainer = createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
