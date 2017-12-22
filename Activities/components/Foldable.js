import React from 'react'
import { Text,View,StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable';
import {Card,Button} from 'react-native-elements';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize

} from 'react-native-responsive-dimensions';
import Display from 'react-native-display';

class Foldable extends React.Component {
  constructor(props){
     super(props);
     Animatable.initializeRegistryWithDefinitions({
      foldIn:{
        0:{
          opacity: 0,
          height:0,
          transform: [{rotateX:'90deg'},{translateY:-this.props.height[1]}]
        },
        1:{
          opacity:1,
          height:this.props.height[1],
          transform: [{rotateX:'0deg'},{translateY:0}]
        }
      },
      fadeAgain:{
        0:{
            backgroundColor:'#03A9F4'
        },
        0.5:{
                   backgroundColor:'#fff'
        },
        1:{
                   backgroundColor:'#03A9F4'
        }
      },
      foldOut:{
        0:{
          opacity: 1,
          height:this.props.height[1],
          transform: [{rotateX:'0deg'},{translateY:0}]
        },
        1:{
          opacity: 0,
          height:0,
          transform: [{rotateX:'90deg'},{translateY:-this.props.height[1]}]
        }
      },

    });
  }
  state = {
    folded: true,
    folding: false,
    butText: "MORE",
    butIcon:'keyboard-arrow-down',
    text:"kuk"
  }
  unfold = (component) => {
  var childrn=React.Children.count(component.children);
  this.setState({text:childrn});
  }
  toggle = () => {
    this.refs['moar'].pulse(600);
    if (!this.state.folding){
      this.setState({folding:true});
      if (this.state.folded){
        this.refs['fold'].foldIn(600)
        this.refs['fold2'].foldIn(300);
        this.setState({folded:false,folding:false,butText:"LESS",butIcon:'keyboard-arrow-up'});
      }else{
        this.refs['fold'].foldOut(300);
        this.refs['fold2'].foldOut(600);
        this.setState({folded:true,folding:false,butText:"MORE",butIcon:'keyboard-arrow-down'});
      }
    }
  }

render() {
  return (
    <View  style={{marginTop:responsiveHeight(1),marginBottom:responsiveHeight(1)}}>
        <View ref="mainView" style={{width:responsiveWidth(100)}}  >
          <Animatable.View ref="fold1">
              <Card
                 title={this.props.header}
                 containerStyle={{borderTopWidth:responsiveWidth(0.5),borderTopColor:this.props.color}}
                 image={{uri: this.props.img}}>
                 <Text style={{marginBottom: 10}}>
                   {this.props.text}
                 </Text>
                 <Animatable.View ref="moar">
                 <Button
                   leftIcon={{name: this.state.butIcon}}
                   backgroundColor='#03A9F4'
                   onPress={this.toggle}
                   fontSize={responsiveFontSize(2)}
                   buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0,alignItems:"center",justifyContent:"center"}}
                   title={this.state.butText}/>
                  </Animatable.View>
              </Card>
          </Animatable.View>
          <Animatable.View ref="fold" style={[styles.cardIn,{borderTopColor:this.props.color}]}>
                  <Text style={{color:"#000"}}>kekuk2 </Text>
          </Animatable.View>
          <Animatable.View ref="fold2" style={[styles.cardIn,{borderTopColor:this.props.color,borderBottomWidth:responsiveWidth(0.5)}]}>
                  <Text style={{color:"#000"}}>kekuk3 </Text>
          </Animatable.View>
        </View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  cardIn:{
    height:responsiveHeight(19.5),
    backgroundColor:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth:0,
    borderColor:'#E2E9EF',
    opacity:0,
    height:0,
    width:responsiveWidth(90),
    marginLeft:responsiveWidth(5),
    borderWidth:responsiveWidth(0.5),
  }
});
export default Foldable;
