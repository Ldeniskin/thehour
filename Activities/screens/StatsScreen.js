import React from 'react';
import SideMenu from 'react-native-side-menu';
import MainMenu from './../Menu/MainMenu';
import PieChart from './../components/PieChart';
import BarChart from './../components/BarChart';
import Gestures from 'react-native-easy-gestures';

import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Platform,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Header,List,ListItem, Button, Icon } from 'react-native-elements';
import {
  Constants
} from 'expo';
import * as Animatable from 'react-native-animatable';
let listener = null;
let navigate = true;
class StatsScreen extends React.Component {
  constructor() {
    super();
  }
  backTo = () =>{
    if(navigate){
      navigate=false;
      this.props.navigation.navigate("Profile");
    }
  }
  componentDidMount(){
    navigate=true;
    if (Platform.OS === "android" && listener === null) {
      listener = BackHandler.addEventListener("hardwareBackPress", () => {

        return true;
      });
    }
  }
  render() {
    onGestureError = (err) => {
      console.error(err);
    }
   return (
        <View style={styles.container}>
        <Header
          leftComponent={<TouchableWithoutFeedback  onPress={this.backTo}>
                            <Animatable.View style={{right:responsiveWidth(3.5)}} ref="sandwitch">
                              <Icon
                              name='chevron-left'
                              containerStyle={{alignContent:'center',alignItems:'center'}}
                              color='#fff'
                              size={responsiveHeight(7)} />
                            </Animatable.View>
                          </TouchableWithoutFeedback>}
          centerComponent={{ text: 'STATS', style: { color: '#fff', right:responsiveWidth(3), fontSize:responsiveFontSize(2.5) } }}
          statusBarProps={{ hidden:true }}
          outerContainerStyles={{ height:responsiveHeight(8),width:responsiveWidth(100), backgroundColor:"#000" }}
          />
          <View style={styles.content}>
            <ScrollView containerStyle={styles.scroll}>
              <Animatable.View animation="zoomIn" style={styles.chart}>
                    <PieChart login='everybody' color='#fff' radius={responsiveWidth(48)}/>
              </Animatable.View>
            </ScrollView>
          </View>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth:responsiveWidth(0.5),
    backgroundColor: '#000',
  },content:{
    width: responsiveWidth(100),
    height: responsiveHeight(92),
    alignItems: 'center',
    justifyContent: 'center',
  },sandwitch:{
    alignItems: 'center',
    justifyContent: 'center',
    height:responsiveHeight(8),
    width:responsiveWidth(8),
    top:responsiveHeight(2.35),
    right:responsiveWidth(2.5),
    position:'absolute',
    width:responsiveWidth(15),
  },scroll:{
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: responsiveHeight(5),
  },chart:{
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default StatsScreen;
