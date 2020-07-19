import React, {Component} from 'react';
import { enableScreens } from 'react-native-screens';
import Main from './src/screens/main'
enableScreens();

export default class App extends Component {
  
  render() {
    return (
      <Main/>
    );
  }
}