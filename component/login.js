import React,{Component} from 'react';
import {View,Button,TextInput,StyleSheet} from  'react-native';
import {Actions} from "react-native-router-flux";
export default class LoginComponent extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>   
        <TextInput placeholder="Please Enter UserName"
          style={styles.Input}
        />
        <TextInput placeholder="Please Enter Password"  secureTextEntry={true}
          style={styles.Input}
        />
        <View>
          <Button
              title="Submit"
              color="#555555"
              onPress={() => Actions.flex()}
          />
        </View>
      </View>
    
       

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
     backgroundColor: 'steelblue'

  },
  Input: {
    width:250,
    height:40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
    alignItems: 'center',
    padding:1,
    backgroundColor : '#d1d1d1',
    marginBottom :10,
        justifyContent: 'center'

    },
  
});
