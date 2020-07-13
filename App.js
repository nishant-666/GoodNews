import React, {Component} from 'react';
import TabScreen from './src/screens/TabScreen';
import { enableScreens } from 'react-native-screens';
enableScreens();
export default class App extends Component {
  render() {
    return (
      <TabScreen />
    );
  }
}