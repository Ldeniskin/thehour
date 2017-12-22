import React from 'react';
import { View,Text } from 'react-native';
import AppActivity   from './Activities/AppActivity';
import { setCustomText } from 'react-native-global-props';


export default class App extends React.Component {



  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Bellota': require('./assets/fonts/BellotaRegular.ttf'),
      'Arial': require('./assets/fonts/ArialRegular.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  state = {
     fontLoaded:false
  }

  render(){
    return(
      this.state.fontLoaded ? (
          <AppActivity/>
      ) : (<View><Text>Eating cookies</Text></View>)
    );
  }
}
