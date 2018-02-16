import React,{Component} from 'react';
import {View,Button,StyleSheet} from  'react-native'
import {Actions} from "react-native-router-flux";
  var  onPressLearnMore = function(){
    alert("I am an alert box!");
  }
export default class ViewButton extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
       
          <Button
            title="back"
            color="#555555"
            onPress={() => Actions.popTo('login')}
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