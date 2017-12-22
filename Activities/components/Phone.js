import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import images from './../json/images.json';
import { Button } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {  View, StyleSheet, Image, TextInput,Text,TouchableWithoutFeedback,Keyboard } from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
var i=0;
var phone='';
Animatable.Row = Animatable.createAnimatableComponent(Row);
class Phone extends React.Component {

constructor(props) {
 super(props)
 this.submitClicked = this.submitClicked.bind(this);
 this.submitClicked = this.submitClicked.bind(this);
 }
state = {
    inputValue: '',
    color: '#000',
    keyValue: 'clear',
  };
 _handleTextChange = inputValue => {
   if (inputValue.match(/^[0-9]+$/) != null){
     this.setState({ inputValue: inputValue });
	}

  };
  _handleFocus = inputValue => {
		this.refs['inp0'].getElement().focus();
  };
 submitClicked = inputValue => {
  	if(this.state.inputValue.length==11){
  		phone=this.state.inputValue;
  		this.setState({ inputValue: '' });
  		this.props.submit(phone);
  	}else{
  		this.refs['text'].rubberBand(500);
  	}
  };
  clear = inputValue => {
      this.setState({ inputValue: '' });
      this.refs['inp0'].getElement().focus();
      this.refs['text'].flash(300);
  };
render() {
 return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
	<View>
  <TextInputMask
    ref='inp0'
    caretHidden={true}
    value={this.state.inputValue}
    maxLength={11}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
    type={'only-numbers'}
          onChangeText={this._handleTextChange}
    onFocus={this._handleFocus}
    style={{ opacity:0 }}
  />
  <Grid>
	<Animatable.Row ref="text" style={{alignItems: 'center',justifyContent: 'center'}} >
	<Image
          style={{width: responsiveWidth(10), height: responsiveWidth(10)}}
          source={{uri: images.plus }}
        />
	<Image
          style={{width: responsiveWidth(3), height: responsiveHeight(6)}}
          source={{ uri: images.leftbrake}}
        />

	<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[0]}
		maxLength={11}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onChangeText={this._handleTextChange}
		onFocus={this._handleFocus}
		style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
	<Image
          style={{width: responsiveWidth(3), height: responsiveHeight(6)}}
          source={{uri: images.rightbrake}}
        />
	<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[1]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
		onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
	<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[2]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
		onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
	<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[3]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>

	<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[4]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[5]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[6]}
        	onChangeText={this._handleTextChange}
          returnKeyType={'next'}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[7]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[8]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[9]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
<TextInputMask
    caretHidden={true}
		value={this.state.inputValue[10]}
        	onChangeText={this._handleTextChange}
		maxLength={1}
    onSubmitEditing={this.submitClicked}
    returnKeyType={'next'}
		type={'only-numbers'}
        	onFocus={this._handleFocus}
style={{ width: responsiveWidth(7), height: responsiveHeight(8), fontSize: responsiveFontSize(4), paddingLeft: responsiveWidth(1.5), color:this.state.color }}
	/>
	</Animatable.Row>
	<Row style={{alignItems: 'center',justifyContent: 'center'}}>
        <Button icon={{name:'clear'}} buttonStyle={{backgroundColor:"#000",borderRadius:responsiveWidth(3)}} title="CLEAR" onPress={this.clear} />
        <Button iconRight={{name:'send'}}  buttonStyle={{backgroundColor:"#000",borderRadius:responsiveWidth(3)}} title="SUBMIT" onPress={this.submitClicked} />
  </Row>
  </Grid>
	</View>
  </TouchableWithoutFeedback>
  )}

}

export default Phone
