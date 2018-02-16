import React,{Component} from 'react';
import {Stack,Scene,Router,ActionConst} from 'react-native-router-flux';
import LoginComponent from './login';
import FlexDirectionBasics from './flex';
import FooterComponent from './footer'
import ViewButton from './view'
import Scrol from './scrollview'
const Route = () => {

	return(
		<Router>
		<Scene key='route'>
			<Scene />
        <Stack
          back
          backTitle="Back"
          key="register"
          duration={0}
          navTransparent
        >
        	
       		<Scene key="button" component={ViewButton} title="button" />
           	<Scene key="flex" component={FlexDirectionBasics} title="Flex" />
           	<Scene key="login" component={LoginComponent} title="login" initial />
        </Stack>
       	<Stack key="tab_3" back  backTitle="Back"  duration={0}  navTransparent>
           	<Scene key="footer" component={FooterComponent} title="footer" />
	        
		</Stack>
		</Scene>

	</Router>
	);
	
}
export default Route;