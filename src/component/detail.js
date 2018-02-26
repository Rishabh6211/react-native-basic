'use strict';
import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Image,
	ListView,
    View
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {Actions} from "react-native-router-flux";
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Dimensions from 'Dimensions';
import {Get_data,user_data} from '../action/index';


const MARGIN = 40;

var width = Dimensions.get('window').width; //full width
const DEVICE_HEIGHT = Dimensions.get('window').height;
 class DetailComponent extends Component {

    constructor(props) {
        super(props);
       // alert(JSON.stringify(props))
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          //dataSource: ds.cloneWithRows(['row 1', 'row 2','row3']),
          users: []
        };
        this.props.user_data(props.data);
    }

  render() {
    // alert(JSON.stringify(this.props))
    //alert(JSON.stringify(this.props.userDetail))
    const userdetail = this.props.userDetail;
    return (
      
        <Container>
        <Header />
        <Content>
          <Card style={{flex: 1}}>
        
            <CardItem>
              <Body>
               
                <Text>
                    Name: {userdetail.first} {userdetail.last}
                </Text>
                <Text>
                    age: {userdetail.age} 
                </Text>
                <Text>
                    description: {userdetail.description} 
                </Text>
              </Body>
            </CardItem>
            
          </Card>
        </Content>
      </Container>
      

    );
  }
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
        backgroundColor:"#d3d3d3",
        //alignItems: 'center',
        //marginTop:55,
		//justifyContent: 'center',
    },
    view:{
        
    },
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F035E0',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	text: {
        flex:.2,
        width: width,
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent:'center',
    },
    bigblue: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});
const mapStateToProps = (state) => {
    return { userDetail: state.users.userData  }

}
export default connect(mapStateToProps,{user_data})(DetailComponent)