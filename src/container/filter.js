import React,{Component} from 'react';
import {View,Text,StyleSheet,Button} from  'react-native'
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";
import Search from 'react-native-search-box';
import {Get_data} from '../action/index';
const rowHeight = 40;
 class FilterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          users: []
        };
        this.props.getData();
        
    }

    renderRow = (item, sectionId, index) => {
        return (
          <TouchableHightLight
            style={{
              height: rowHeight,
              justifyContent: 'center',
              alignItems: 'center'}}
          >
            <Text>{item.name}</Text>
          </TouchableHightLight>
        );
      }
  
      // Important: You must return a Promise
      beforeFocus = () => {
          return new Promise((resolve, reject) => {
              alert('beforeFocus');
              resolve();
          });
      }
  
      // Important: You must return a Promise
      onFocus = (text) => {
          return new Promise((resolve, reject) => {
              alert('onFocus');
              resolve();
          });
      }
  
      // Important: You must return a Promise
      afterFocus = () => {
          return new Promise((resolve, reject) => {
              alert('afterFocus');
              resolve();
          });
      }

  render() {
    return (
        <View >
        <Search
          ref="search_box"
          /**
          * There many props that can customizable
          * Please scroll down to Props section
          */
        />
        
        
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {users: state.users.usersList ? state.users.usersList : null }

}
export default connect(mapStateToProps,{getData:Get_data})(FilterComponent)