import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from  'react-native'
import {Actions} from "react-native-router-flux";
export default class FooterComponent extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>
            @2018 react-native
          </Text>
            <Button
              title="back"
              color="#555555"
              onPress={() => Actions.pop()}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:0.5,
    paddingTop:250
  },
  text: {
  
    backgroundColor : '#d1d1d1'
    
    }
})