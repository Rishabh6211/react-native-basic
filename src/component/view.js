import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
	Animated,
	Easing,
	Image,
	Alert,
	View,
} from 'react-native';
import {Actions} from "react-native-router-flux";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {Get_data} from '../action/index';

//import * as Actions from '../actions';
  var  onPressLearnMore = function(){
    alert("I am an alert box!");
  }
const MARGIN = 40;
 class ViewButton extends Component {

    constructor(props){
      super(props)
      this.state = {users: []};
      this.props.getData();
    }

  render() {
    /*const userList = this.props.users.map((user) => {
      return (
        <View><Text key={i}>{user.username}</Text></View>
      )
    })   */
       alert(this.props.users.length)
    return (
      <View style={styles.container}>      
        <TouchableOpacity style={styles.button} >
              <Text style={styles.text}>LOGIN</Text>
        </TouchableOpacity>        
      </View>

    );
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: -95,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F035E0',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	circle: {
		height: MARGIN,
		width: MARGIN,
		marginTop: -MARGIN,
		borderWidth: 1,
		borderColor: '#F035E0',
		borderRadius: 100,
		alignSelf: 'center',
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
});

/*const mapDispatchToProps = (dispatch) => ({
    console.log("helo")
    return {users:[]}
});*/
const mapStateToProps = (state) => {
    return {users: state.users ? state.users : null }

}
/*function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}*/
export default connect(mapStateToProps,{getData:Get_data})(ViewButton)
