import React,{Component} from 'react';
import {View,Button,Text} from  'react-native'
import {Actions} from "react-native-router-flux";
export default class FlexDirectionBasics extends Component {

  render() {
    return (
              <View style={{flex: 1, backgroundColor: 'red',flexDirection: 'column'}}>
          <View style={{flex: .4, backgroundColor: 'yellow',flexDirection: 'row'}}>
            <View style={{flex: .5,flexDirection: 'column' ,backgroundColor: 'red'}}>
              <View style={{flex: .4 ,flexDirection: 'row',backgroundColor: '#A64A2C'}}>
               <View style={{flex: .5 ,backgroundColor: '#A4A62C'}}/>
                <View style={{flex: .5 ,backgroundColor: '#2C94A6'}}/>
                <Text >
            Its Text Component!
          </Text>
              </View>
               <View style={{flex: .6,flexDirection: 'row' ,backgroundColor: '#2C55A6'}}>
                 <View style={{flex: .5 ,backgroundColor: '#A66D2C'}}/>
                  <View style={{flex: .5 ,flexDirection: 'column',backgroundColor: '#2C94A6'}}>
                    <View style={{flex: .5 ,backgroundColor: '#A62C2C'}}/>
                    <View style={{flex: .5 ,backgroundColor: '#5CA62C'}}/>
                 </View>
              </View>
            </View>
            <View style={{flex: .5, backgroundColor: 'silver',flexDirection: 'row'}}>
              <View style={{flex: .3 ,backgroundColor: '#9D2CA6'}}>
                   
              </View>
              <View style={{flex: .3 ,backgroundColor: '#2E2CA6'}}/>
              <View style={{flex: .4 ,backgroundColor: '#2C48A6'}}/>
            </View>
          </View>
          <View style={{flex: .2, backgroundColor: 'green',flexDirection: 'row'}}>
            <View style={{flex: .5,flexDirection: 'column' ,backgroundColor: '#9D2CA6'}}>
              <View style={{flex: .5 ,backgroundColor: '#A1B599'}}/>
              <View style={{flex: .5 ,backgroundColor: '#B59999'}}/>
            </View>
            <View style={{flex: .5 ,backgroundColor: '#2E2CA6',flexDirection: 'row'}}>
              <View style={{flex: .5 ,backgroundColor: '#A69F2C'}}>
                  {/*<Button
                      title="scroll"
                      color="#555555"
                      onPress={() => Actions.button()}
                    />*/}
              </View>
              <View style={{flex: .5 ,backgroundColor: '#0B0404'}}/>
            </View>
          </View>
          <View style={{flex: .4, backgroundColor: 'blue',flexDirection: 'row'}}>
            <View style={{flex: .3 ,backgroundColor: '#7ACB2A'}}>
              <Button
                      title="footer"
                      color="#555555"
                      onPress={() => Actions.footer()}
                    />
            </View>
            <View style={{flex: .4 ,backgroundColor: '#5FBDD3',flexDirection: 'column'}}>
              <View style={{flex: .7 ,backgroundColor: '#5FBDD3',flexDirection: 'row'}}>
                <View style={{flex: .5 ,backgroundColor: '#CACF1B'}}>
                   
                </View>

              </View>
              
              <View style={{flex: .3 ,backgroundColor: '#5FBDD3'}}>
                 <Button
                      title="View"
                      color="#555555"
                      onPress={() => Actions.button()}
                    />
              </View>
            </View>
            <View style={{flex: .3 ,backgroundColor: '#0D20E3',flexDirection: 'column'}}>
              <View style={{flex: .4 ,backgroundColor: '#9C9C9C'}}>
                  
              </View>
              <View style={{flex: .2 ,backgroundColor: '#1ECF1B'}}>
                  
              </View>
              <View style={{flex: .4 ,backgroundColor: '#CF441B'}}/>
            </View>
          </View>
       </View>
    );
  }
}