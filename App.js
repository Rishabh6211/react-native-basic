/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, ProgressBar, TextInput
} from 'react-native';
//import ViewButton from './component/view';
//import ScrollViewTab from './component/scrollview';
//import LoginComponent from './component/login';
//import FooterComponent from './component/footer';
//import FlexDirectionBasics from './component/flex';
import Route from './component/routing';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {

    return (
      <View style={styles.container} >

        <Route />
        {/*<Text style={styles.instructions}>
        <ScrollViewTab />
        <FlexDirectionBasics />
          Its a button Component
        </Text>
        <FooterComponent />
          <ViewButton />
          <Text style={styles.instructions}>
          Its a Scroll view Component
        </Text>
          <ScrollViewTab />*/}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'steelblue',
  },
  container1: {
    flex: 0.5,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  view: {
    paddingTop: 500,
    marginRight: 150,

  }
  
});

