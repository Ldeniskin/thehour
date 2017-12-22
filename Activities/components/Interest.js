import React from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import images from './../json/images.json';
import { Button } from 'react-native-elements';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import {  View, StyleSheet} from 'react-native';
//import interests from './../json/interests.json';
class Interest extends React.Component {
  state = {
    name:"",
    color:"#000",
    icon:"",
  }
  componentDidMount(){
    this.setState({name:this.props.item.name,color:this.props.item.color,icon:this.props.item.icon});
  }
  anima = () =>{
    this.refs['mnvw'].pulse(500);
  }
  render() {
    let icon=this.state.icon;
    let color=this.state.color;
    let name=this.state.name;
   return (
     <Animatable.View ref="mnvw">
      <Button icon={{name:icon}} underlayColor="#fff" onPress={this.anima} buttonStyle={{backgroundColor:color,borderRadius:responsiveWidth(3)}} title={name}/>
     </Animatable.View>
   )}
}

export default Interest
