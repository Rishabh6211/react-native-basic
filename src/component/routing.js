import React,{Component} from 'react';
import {StyleSheet} from  'react-native';
import {Stack,Scene,Router,ActionConst} from 'react-native-router-flux';
import LoginComponent from './login';
import FlexDirectionBasics from './flex';
import SignupComponent from './signup';
import FooterComponent from './footer';
import ViewButton from './view';
import Scrol from './scrollview';
import ListComponent from './listing';
import DetailComponent from './detail';
const Route = () => {

	return(
		<Router 
		navigationBarStyle={styles.navBar} 
		titleStyle={styles.navBarTitle} 
		barButtonTextStyle={styles.barButtonTextStyle} 
		barButtonIconStyle={styles.barButtonIconStyle}
		>
		<Scene key='route' hideNavBar>
			
        <Stack
          back
          backTitle="Back"
          key="register"
          
        >
        	
           	<Scene key="flex" component={SignupComponent} title="Signup" />
           	<Scene key="login" component={LoginComponent} title="Login" initial />
        </Stack>
       	<Stack key="tab_3" back  backTitle="Back" >
			   <Scene key="listing" component={ListComponent} title="listing" />
			   <Scene key="detail" component={DetailComponent} title="detail" />	        
		</Stack>
		</Scene>

	</Router>
	);
	
}
const styles = StyleSheet.create({
	navBar: {
		backgroundColor:'#0D47A1',
	},
	navBarTitle:{
		color:'#FFFFFF'
	},
	barButtonTextStyle:{
		color:'#FFFFFF'
	},
	barButtonIconStyle:{
		tintColor:'rgb(255,255,255)'
	}
});
export default Route;