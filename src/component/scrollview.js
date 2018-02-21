import React,{Component} from 'react';
import {WebView,TouchableHighlight,Switch,Slider,View,ScrollView,Text,StyleSheet,FlatList,Image,ListView,Modal,Button,Picker,updateUser,MyLoadingComponent} from  'react-native'
import FlexDirectionBasics from './scrollview';
export default class ScrollViewTab extends React.Component {
	 constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
      value: 50,
      switch1Value: false,
      switch2Value: false,
      count: 0,
    };

  }
   onPress() {
    this.setState({
      count: this.state.count+1
    })
  }
   change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }
   openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }
  state = {
    modalVisible: false,
    user:''
  };
  updateUser(user){
	 this.setState({ user: user })
  }
 	toggleSwitch1 (value) {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
   }
   toggleSwitch2 (value) {
   		this.switch2Value = true
      this.setState({switch2Value: value})
      console.log('Switch 2 is: ' + value)
   }
  render(props) {
    return (    	
	      <ScrollView contentContainerStyle={styles.contentContainer}>
	      
	      <FlexDirectionBasics />
	       	{/*<Text style={styles.welcome}>
	          Its Text Component!
	        </Text>
	        
	        <Text style={styles.instructions} >
	          its a flat list Component
	        </Text>
	        <FlatList
			  data={[{key: 'a'}, {key: 'b'}]}
			  renderItem={({item}) => <Text>{item.key}</Text>}
			/>
			<Text style={styles.instructions}>
	          its a Image Component
	        </Text>
			<Image  style={{width: 100, height: 100}} source={require('../react.png')} 
        	/>
        	<Text style={styles.instructions}>
	          its a ListView Component
	        </Text>
        	<ListView
		        dataSource={this.state.dataSource}
		        renderRow={(rowData) => <Text>{rowData}</Text>}
	      	/>
	      	<Text style={styles.instructions}>
	          its a Modal Component
	        </Text>
	      	<Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
          	>
	            <View style={styles.modalContainer}>
	              <View style={styles.innerContainer}>
	                <Text>This is content inside of modal component</Text>
	                <Button
	                    onPress={() => this.closeModal()}
	                    title="Close modal"
	                >
	                </Button>
	              </View>
	            </View>
          	</Modal>
          	<Button 
              onPress={() => this.openModal()}
              title="Open modal"
          	/>
          	<Text style={styles.instructions}>
	          its a Picker Component
	        </Text>
          	<Picker selectedValue = {this.state.user} onValueChange = {this.updateUser} >
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>
            <Text style = {styles.text}>{this.state.user}</Text>
          	<Text style={styles.instructions}>
	          its a Slider Component
	        </Text>
	        <View style={{width: 200, height: 50, backgroundColor: 'skyblue'}} >
             <Slider
	          step={1}
	          maximumValue={100}
	          onValueChange={this.change.bind(this)}
	          //value={value}
	        />
	        </View>
	        <Text style={styles.instructions}>
	          its a Switch Component
	        </Text>
	        <Switch
	            onValueChange = {this.props.toggleSwitch1}
	            value = {this.props.switch1Value}/>
	         <Switch
	            onValueChange = {this.props.toggleSwitch2}
	            value = {this.props.switch2Value}/>
	            <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
	         	<TouchableHighlight
		         style={styles.button}
		         onPress={this.onPress}
		        >
         		<Text> TouchableHighlight Here </Text>
        		</TouchableHighlight>
        	<WebView
        		title="hello"
		        source={{uri: 'https://github.com/facebook/react-native'}}
		        style={{marginTop: 20}}
		      />*/}
		    </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
     flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  }
});