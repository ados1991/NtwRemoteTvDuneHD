/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  UIManager,
  Image,
  findNodeHandle,
  TouchableNativeFeedback,
  Button,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';
import HomeScreen from './components/home/home';
import Cmd from './components/cmd/cmd';

const resetAction = NavigationActions.reset({
  index:0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
})

export default class Ntwtv extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      logoview: {},
      logoimg: {}
    }
  }
  componentWillMount() {
    this._animatedValue = new Animated.Value(0);
  }
  _onLayoutlogoview(event) {
  this.setState({logoview: event.nativeEvent.layout});
  }
  _onLayoutlogoimg(event) {
    this.setState({logoimg: event.nativeEvent.layout});
    UIManager.measure(
      findNodeHandle(this.logoview), (x, y, w, h) => {
        UIManager.measure(findNodeHandle(this.logoimg), (x_i, y_i, w_i, h_i) => {
          Animated.timing(this._animatedValue, {
            toValue: h - h_i,
            duration: 500
          }).start();
      })
    });
  }
  _onPressRootView() {
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    return (
      <TouchableNativeFeedback onPress={this._onPressRootView.bind(this)}>
        <View style={styles.container}>
          <Animated.View ref={(ref) => this.logoview = ref} onLayout={(event) => this._onLayoutlogoview(event)} style={[{flex:1, alignItems: 'center'}]}>
            <Animated.Image style={{transform:[{translateY: this._animatedValue}]}} ref={(ref) => this.logoimg = ref} onLayout={(event) => this._onLayoutlogoimg(event)} source={require('./assets/img/naitways-logo.png')} />
          </Animated.View>
          <View ref='text_view' style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View>
              <Button title="Démarrez!" onPress={this._onPressRootView.bind(this)} accessibilityLabel="Démmarrez l'application"/>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69addb',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
});

const SimpleApp = StackNavigator({
  Welcome: { screen: Cmd},
  Home: { screen: HomeScreen},
  Cmd: { screen: Cmd },
}, {initialRouteParams: {dune: {ip: '127.0.0.1'}}});

AppRegistry.registerComponent('Ntwtv', () => SimpleApp);
