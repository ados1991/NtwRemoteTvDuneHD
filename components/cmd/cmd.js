import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Orientation from 'react-native-orientation';
import Icon from 'react-native-vector-icons/Ionicons';
import Svg,{
  Circle,
  Text as SText,
  Path,
  Polygon
} from 'react-native-svg';


Orientation.lockToPortrait();

export default class Cmd extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Cmds dune ${navigation.state.params.dune.ip}`,
  });
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#4d4d4d', paddingTop: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 50, width: 50, borderTopLeftRadius:20, borderBottomLeftRadius:20, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems: 'flex-end'}}><Text>Portal</Text></View>
            <View style={{alignItems:'center'}}><Icon name="ios-analytics" color="black" size={30} /></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2', backgroundColor:'red', justifyContent: 'center', alignItems: 'center'}}>
            <View><Text style={{fontSize: 30, color:'black', fontWeight: 'bold'}}>A</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2', backgroundColor:'green', justifyContent: 'center', alignItems: 'center'}}>
            <View><Text style={{fontSize: 30, color:'black', fontWeight: 'bold'}}>B</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2', backgroundColor:'yellow', justifyContent: 'center', alignItems: 'center'}}>
            <View><Text style={{fontSize: 30, color:'black', fontWeight: 'bold'}}>C</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2', backgroundColor:'blue', justifyContent: 'center', alignItems: 'center'}}>
            <View><Text style={{fontSize: 30, color:'black', fontWeight: 'bold'}}>D</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderTopRightRadius:20, borderBottomRightRadius:20, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View><Text>Power</Text></View>
            <View style={{alignItems:'center'}}><Icon name="ios-power" color="red" size={30} /></View>
          </View>
        </View>
        <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 50, width: 50, borderTopLeftRadius:20, borderBottomLeftRadius:20, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>1</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>.:/</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2',backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>2</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>abc</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2',backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>3</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>def</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2',backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>4</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>ghi</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>5</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>jkl</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderTopRightRadius:20, borderBottomRightRadius:20, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>6</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>mno</Text></View>
          </View>
        </View>
        <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{height: 50, width: 50, borderTopLeftRadius:20, borderBottomLeftRadius:20, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>7</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>pqrs</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2',backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>8</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>tuv</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2',backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>9</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>wxyz</Text></View>
          </View>
          <View style={{height: 50, width: 50, borderColor: '#f2f2f2',backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>0</Text></View>
            <View style={{alignItems:'center'}}><Text style={{color:'black', fontWeight: 'bold'}}>⎵</Text></View>
          </View>
          <View style={{justifyContent: 'center', height: 50, width: 50, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 10, color:'black', fontWeight: 'bold'}}>CLEAR</Text></View>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 10, color:'black', fontWeight: 'bold'}}>←</Text></View>
          </View>
          <View style={{justifyContent: 'center', height: 50, width: 50, borderColor: '#f2f2f2', borderTopRightRadius:20, borderBottomRightRadius:20, backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 10, color:'black', fontWeight: 'bold'}}>SELECT</Text></View>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 10, color:'black', fontWeight: 'bold'}}>cap/num</Text></View>
          </View>
        </View>
        <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{justifyContent: 'space-between', height: 150, width: 50, borderRadius:20, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>+</Text></View>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>V</Text></View>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>-</Text></View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center', height:150, width:150, zIndex: -1, transform:[{rotate: '45deg'}]}}>
            <View style={{flexDirection:'row', flex: 1}}>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => console.warn("tap up touch")}>
                  <View>
                      <Svg height="75" width="75">
                        <Path
                            d="M 75 75 L75 0 A 75 75 0, 0, 0, 0 75 Z"
                            fill="black"
                            stroke="white"
                            stroke-width="10"
                          />
                        <Polygon points="23,23 41,23 23,41" fill="white" stroke="none" strokeWidth="1"/>
                      </Svg>
                   </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => console.warn("tap forward touch")}>
                  <View style={{transform:[{rotate: '90deg'}]}}>
                      <Svg height="75" width="75">
                        <Path
                            d="M 75 75 L75 0 A 75 75 0, 0, 0, 0 75 Z"
                            fill="black"
                            stroke="white"
                            stroke-width="10"
                          />
                        <Polygon points="23,23 41,23 23,41" fill="white" stroke="none" strokeWidth="1"/>
                      </Svg>
                   </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flexDirection:'row', flex: 1}}>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => console.warn("tap back touch")}>
                  <View style={{transform: [{rotate: '-90deg'}]}}>
                      <Svg height="75" width="75">
                        <Path
                            d="M 75 75 L75 0 A 75 75 0, 0, 0, 0 75 Z"
                            fill="black"
                            stroke="white"
                            stroke-width="10"
                          />
                        <Polygon points="23,23 41,23 23,41" fill="white" stroke="none" strokeWidth="1"/>
                      </Svg>
                   </View>
                </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => console.warn("tap down touch")}>
                  <View style={{transform:[{rotate: '180deg'}]}}>
                      <Svg height="75" width="75">
                        <Path
                            d="M 75 75 L75 0 A 75 75 0, 0, 0, 0 75 Z"
                            fill="black"
                            stroke="white"
                            stroke-width="10"
                          />
                        <Polygon points="23,23 41,23 23,41" fill="white" stroke="none" strokeWidth="1"/>
                      </Svg>
                   </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{position: 'absolute', transform:[{rotate: '-45deg'}]}}>
              <TouchableOpacity onPress={() => console.warn("tap on circle")}>
                <Svg
                    height="82"
                    width="82"
                >
                  <Circle
                      cx="50%"
                      cy="50%"
                      r="40"
                      stroke="black"
                      strokeWidth="2.5"
                      fill="#4db8ff"
                  />
                  <SText
                    x="50%"
                    y={(() => {return ((((150 / 2) - 15 ) * 100) / 150) + '%'})()}
                    textAnchor="middle"
                    fontWeight="bold"
                    fontSize="20"
                    fill="black"
                  >ENTER</SText>
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{justifyContent: 'space-between', height: 150, width: 50, borderRadius:20, borderColor: '#f2f2f2', backgroundColor:'#ffffff'}}>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>+</Text></View>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>P</Text></View>
            <View style={{alignItems:'center'}}><Text style={{fontSize: 20, color:'black', fontWeight: 'bold'}}>-</Text></View>
          </View>
        </View>
        <View style={{marginTop: 5, flex:1, backgroundColor: 'white'}}>
          <Text>here results</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
