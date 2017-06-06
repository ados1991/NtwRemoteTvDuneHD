import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  BackHandler,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TextInput
} from 'react-native';

import FastImage from 'react-native-fast-image';

import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from 'react-native-card-view';
import Modal from 'react-native-modal';
import t from 'tcomb-form-native';
import Realm from 'realm';

var Ipv4or6 = t.subtype(t.String, function (x) {
  return /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(x) || /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(x);
}, 'Ipv4or6');

t.form.Form.i18n['optional'] = ' (optionnel)';
var Form = t.form.Form;
var Dune = t.struct({
  ip: Ipv4or6,
  nom: t.String,
  description: t.maybe(t.String)
});

const DuneSchema = {
  name: 'Dune',
  primaryKey: 'ip',
  properties: {
    ip:  'string',
    nom: 'string',
    description: {type: 'string', default: 'non disponible'},
  }
};

const optionsForm = {
  fields: {
    ip: {
      error: 'addresse ipv4 ou ipv6 invalide'
    },
    nom: {
      error: 'nom de l\'appareil ex: machin-truc'
    }
  }
}

let realm = new Realm({schema: [DuneSchema], schemaVersion: 3});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Ntwtv',
  };
  constructor(props) {
    super(props);
    this.state = {
      dataSource: realm.objects('Dune').map(this._mapDunes),
      isModalVisible: false,
      textSearch: ''
    }
  }
  componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this._quit);
  }
  componentWillUNMount() {
      BackHandler.removeEventListener('hardwareBackPress', this._quit);
  }
  _mapDunes(obj, id) {
    obj.id = id;
    return obj;
  }
  _quit() {
      Alert.alert(
        'Voulez vous quittez ?',
        null,
        [
          {text: 'Oui', onPress: () => BackHandler.exitApp()},
          {text: 'Non', onPress: () => false},
        ],
      );
      return true;
  }
  onPressButton() {
    this.setState({ isModalVisible: true });
  }
  onPressForm() {
    var value = this.refs.form.getValue();
    if (value) {
      realm.write(() => {
        let data = Object.assign({}, value);
        if (data.description === null) {data.description = '';}
        realm.create('Dune', data, true);
      });
      this.setState({
       dataSource: realm.objects('Dune').map(this._mapDunes),
       isModalVisible: false
     }, () => {this._setDataSource(true)});
    }
  }
  dismissModal() {
    this.setState({ isModalVisible: false });
  }
  _setDataSource(forceUpdate=false) {
    if (this._data === undefined || forceUpdate) {
      this._data = this.state.dataSource;
    }
  }
  _getDataSource() {
    this._setDataSource();
    return this._data;
  }
  searchFilterText(text) {
    const data = this._getDataSource();
    const newData = data.filter(function(item){
        const itemIp = item.ip.toLowerCase();
        const itemNom = item.nom.toLowerCase();
        const textSearch = text.toLowerCase();
        return itemIp.indexOf(textSearch) > -1 || itemNom.indexOf(textSearch) > -1;
    });
    this.setState({
      dataSource: newData,
      textSearch: text
    })
  }
  _keyExtractor = (item, index) => item.id;
  itemListView(row) {
    let item = row.item;
    return (
        <Card>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Cmd', {dune: item})}>
            <View style={{height: 75, backgroundColor: 'powderblue', flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Image
                  style={styles.image}
                  source={require('./assets/img/dune_.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{flex: 3, paddingLeft: 10, flexDirection: 'column', justifyContent: 'space-between'}}>
                 <View><Text>IP : {item.ip}</Text></View>
                 <View><Text>DUNE : {item.nom}</Text></View>
                 <View><Text>INFO : {item.description}</Text></View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Card>
    );
  }
  render() {
    return (
        <View style={{flex:1}}>
          <TouchableWithoutFeedback onPress={() => this.dismissModal()}>
            <Modal
              isVisible={this.state.isModalVisible}
              animationIn={'slideInLeft'}
              animationOut={'slideOutRight'}
            >
              <TouchableWithoutFeedback onPress={() => {}}>
                 <View style={styles.modalContent}>
                   <Form
                     ref="form"
                     type={Dune}
                     options={optionsForm}
                   />
                   <TouchableHighlight style={styles.button} onPress={() => this.onPressForm()} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Ajouter dune</Text>
                   </TouchableHighlight>
                 </View>
               </TouchableWithoutFeedback>
            </Modal>
          </TouchableWithoutFeedback>
          <Button title='Search block' onPress={() => {}} />
          <TextInput
            style={{height: 40, margin: 15, borderColor: '#00ccff', textAlign: 'center', backgroundColor: 'white', borderWidth: 2}}
            onChangeText={(text) => this.searchFilterText(text)}
            value={this.state.textSearch}
            placeholder="à la recherche d'un dune..."
          />
          <FlatList
            data={this.state.dataSource}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={(item) => this.itemListView(item)}
          />
          <ActionButton buttonColor="#69addb" onPress={() => this.onPressButton()}>
          </ActionButton>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  }
});
