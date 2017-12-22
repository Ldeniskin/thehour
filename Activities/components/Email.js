import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import images from './../json/images.json';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {  View, StyleSheet, Image, TextInput,Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Makiko } from 'react-native-textinput-effects';
import { Kaede } from 'react-native-textinput-effects';
import DismissKeyboard from './../components/DismissKeyboard';

var i=0;
var phone='';
Animatable.Row = Animatable.createAnimatableComponent(Row);
class Email extends React.Component {

constructor(props) {
 super(props)
 this.submitClicked = this.submitClicked.bind(this);
 this.submitClicked = this.submitClicked.bind(this);
 }
 submitClicked = inputValue => {
      Keyboard.dismiss();
      this.props.navigation.navigate('Code');
  	/*if(this.state.inputValue.length==11){
  		phone=this.state.inputValue;
  		this.setState({ inputValue: '' });
  		this.props.submit(phone);
  	}else{
  		this.refs['text'].rubberBand(500);
  	}*/
  };
  clear = inputValue => {
      this.setState({ inputValue: '' });
      this.refs['inp'].focus();
      this.refs['text'].flash(300);
  };
render() {
 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
	<View style={{flex:1,backgroundColor:"#fff"}}>
    <Grid>
    <Row size={2}></Row>
    <Animatable.Row size={1} ref="text" style={{alignItems: 'center',justifyContent: 'center'}} >
        <Kaede
          ref="inp"
          style={{borderWidth:responsiveWidth(0.5),width:responsiveWidth(80)}}
          labelStyle={{backgroundColor:"#000",color:"#fff"}}
          label={'Email'}
        />
    </Animatable.Row>
    <Row size={1} style={{alignItems: 'center',justifyContent: 'center'}}>
          <Button icon={{name:'clear'}} buttonStyle={{backgroundColor:"#000",borderRadius:responsiveWidth(3)}} title="CLEAR" onPress={this.clear} />
          <Button iconRight={{name:'send'}}  buttonStyle={{backgroundColor:"#000",borderRadius:responsiveWidth(3)}} title="SUBMIT" onPress={this.submitClicked} />
    </Row>
    <Row size={2}></Row>
    </Grid>
	</View>
  </TouchableWithoutFeedback>

  )}

}

export default Email
