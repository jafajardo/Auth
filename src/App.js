import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Header Authentication'} />
        <Text>App!</Text>
      </View>
    );
  }
}

export default App;
