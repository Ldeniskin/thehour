import React from 'react';
import renderIf from './components/renderIf'
import Phone from './components/Phone'
import Code from './components/Code'
import * as Animatable from 'react-native-animatable';
import {
  Col,
  Row,
  Grid
} from "react-native-easy-grid";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import {
  BackHandler,
  Platform,
  View,
  Image,
  StatusBar,
  TextInput,
  Text,
  Button,
  AppState,
  StyleSheet
} from 'react-native';

import {
  Constants
} from 'expo';
Animatable.Row = Animatable.createAnimatableComponent(Row);
var i = 0;
var phone = 'k';
let listener = null;
var kek = 'gg';

class ActivityPhone extends React.Component {
    constructor() {
      super();
      this.submitCode = this.submitCode.bind(this);
      this.submitPhone = this.submitPhone.bind(this);
    }
    state = {
      phone: '',
      renderPhone: true,
      code: '',
      renderCode: false,
      appState: AppState.currentState
    };
    submitPhone = (phoneChild) => {
      this.refs['phone'].bounceOutLeft(500).then(() => {
        this.setState({
          phone: phoneChild,
          renderPhone: false,
          renderCode: true
        });
        this.refs['code'].bounceInRight(500);
      });
    }
    submitCode = (codeChild) => {
      this.refs['code'].bounceOutLeft(500).then(() => {
        this.setState({
          code: codeChild,
          renderCode: false
        });
        this.props.navigation.navigate('Main');
      });

    }

    componentWillUnmount() {
      AppState.removeEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (nextAppState) => {
      if (nextAppState === 'active') {
        if (this.state.renderPhone == true) {
          this.refs['phone'].bounceIn(500);
        }
        if ((this.state.renderCode == true)&&(this.state.renderPhone==false)) {
          this.refs['code'].bounceIn(500);
        }
      }
      this.setState({appState: nextAppState});
    }
    componentDidMount() {
      AppState.addEventListener('change', this._handleAppStateChange);
      if (Platform.OS === "android" && listener === null) {
        listener = BackHandler.addEventListener("hardwareBackPress", () => {
          if (this.state.renderPhone == true) {
            this.refs['phone'].bounceOut(500).then(() => {
              this.setState({
                phone: '',
                renderPhone: true,
                code: '',
                renderCode: false,
                });
                BackHandler.exitApp();
            });
          }
          if (this.state.renderCode == true) {
            this.refs['code'].bounceOutRight(500).then(() => {
              this.setState({
                renderPhone: true,
                code: '',
                renderCode: false
              });
              this.refs['phone'].bounceInLeft(500);
            });

          }
          if ((this.state.renderCode == false) && (this.state.renderPhone == false)) {
            this.setState({
              renderCode: true
            });
            this.refs['code'].bounceInLeft(500);
          }
          return true;
        })
      }
    }
    render() {
        return (
        <Animatable.View animation="bounceIn" style={styles.container}>
        <StatusBar hidden={true} />
      	 <Grid>
        	<Row>
        	 </Row>
        	 <Animatable.Row>
        			<Animatable.View ref="phone" style={{alignItems: 'center',justifyContent: 'center',}}>
          		 	{renderIf(this.state.renderPhone)(
          			<Phone submit={this.submitPhone}/>
          			)}
        			</Animatable.View>
        			<Animatable.View ref="code" style={{alignItems: 'center',justifyContent: 'center',}}>
          		 	{renderIf(this.state.renderCode)(
          			<Code submit={this.submitCode}/>
          			)}
        			</Animatable.View>
        	  </Animatable.Row>
          	<Row>
          	</Row>
      	</Grid>
        </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
export default ActivityPhone;
