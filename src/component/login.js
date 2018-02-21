import React,{Component} from 'react';
import {View,Button,TextInput,StyleSheet,Image} from  'react-native';
import {Actions} from "react-native-router-flux";

import bgSrc from '../../react.png';
import { connect } from 'react-redux';
import { login } from '../action/index'

 class LoginComponent extends React.Component {
  state = {
    username: '',
    password: ''
 }
  handleUser = (text) => {
    this.setState({ username: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  constructor(props){
    super()
  }
  login = (username, pass) => {
    //alert('username: ' + username + ' password: ' + pass)
    this.props.login(username,pass)
  }
  componentWillReceiveProps(Props){
    if(Props.activeuser.userdata){
      alert("login successfully")
      Actions.listing()
    }
    else{
      alert("invalid user")
    }
  }
  
  
  render() {
    
    return (
      <View style={styles.container} > 
      <View style={styles.picture} source={bgSrc}>
        <Image style={styles.pic} source={bgSrc}>

        </Image>
      </View>
      <View style={styles.view}>
        <TextInput placeholder="Please Enter UserName"  onChangeText = {this.handleUser}
          style={styles.input}
        />

        <TextInput placeholder="Please Enter Password"  onChangeText = {this.handlePassword} secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.button}>
          <Button
              
              title="Login" 
              color="#0f5994"
              onPress = {
                () => this.login(this.state.username, this.state.password)
             }
              // onPress={() => Actions.listing()}
          />
        </View>
        <View style={styles.view2}>
          <Button
          
              title="Signup here" color="#206994" 
              onPress={() => Actions.flex()}
          />
        </View>
      </View>
      </View>
    
       

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     alignItems: 'center',
//     justifyContent: 'center',
//      backgroundColor: 'steelblue'

//   },
//   Input: {
//     width:250,
//     height:40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius:10,
//     alignItems: 'center',
//     padding:1,
//     backgroundColor : '#d1d1d1',
//     marginBottom :10,
//         justifyContent: 'center'

//     },
  
// });
const styles = StyleSheet.create({
  picture: {
    flex: 0.3,
		width: null,
    height: null,
   
  },
  pic:{
  height:100,
  width:100,
  //marginTop:70,
  alignItems: 'center',
  justifyContent: 'center',
  },
  view:{
    flex: 0.5,
		width: null,
    height: null,
   
  },
  view2:{
    flex: 0.2,
    justifyContent: 'center',
    //justifyContent:'space-between'
    paddingTop:120,
  },
  
  container: {
    flex:1,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#006994',
    //justifyContent:'space-between'
  },

  input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width:250,
    height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
    borderRadius: 20,
    marginBottom :10,
		color: '#ffffff',
	},
	inputWrapper: {
		flex: 1,
  },
  button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#006994',
		height: 40,
		borderRadius: 20,
		zIndex: 100,
	},
});

mapStateToProps = state => {
  return {activeuser:state.activeuser}
}

export default connect(mapStateToProps,{login})(LoginComponent)