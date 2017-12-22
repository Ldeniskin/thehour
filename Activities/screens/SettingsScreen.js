import React from 'react';
import SideMenu from 'react-native-side-menu';
import MainMenu from './../Menu/MainMenu';
import Drawer from 'react-native-drawer'
import Carousel from 'react-native-snap-carousel';
import Foldable from './../components/Foldable';
import * as functions from './../components/functions';
import posts from './../json/posts.json';


import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  Platform,
  TouchableWithoutFeedback,
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


const sliderWidth = responsiveWidth(100);
const itemWidth = responsiveWidth(96);
const itemHeight = responsiveHeight(40);

class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.sideMenuNavigate = this.sideMenuNavigate.bind(this);
  }
  state = {
    isOpen:false,
    data: [
              {
                  title: 'Beautiful and dramatic Antelope Canyon',
                  subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                  illustration: 'http://i.imgur.com/UYiroysl.jpg'
              },
              {
                  title: 'Earlier this morning, NYC',
                  subtitle: 'Lorem ipsum dolor sit amet',
                  illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
              },
              {
                  title: 'White Pocket Sunset',
                  subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                  illustration: 'http://i.imgur.com/MABUbpDl.jpg'
              },
              {
                  title: 'Acrocorinth, Greece',
                  subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                  illustration: 'http://i.imgur.com/KZsmUi2l.jpg'
              },
              {
                  title: 'The lone tree, majestic landscape of New Zealand',
                  subtitle: 'Lorem ipsum dolor sit amet',
                  illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'
              },
              {
                  title: 'Middle Earth, Germany',
                  subtitle: 'Lorem ipsum dolor sit amet',
                  illustration: 'http://i.imgur.com/lceHsT6l.jpg'
              }
    ]
  }
  componentDidMount(){
    this.setState({data2:posts});
    navigate=true;
    if (Platform.OS === "android" && listener === null) {
      listener = BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });
    }
  }
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  sideMenuNavigate = scene =>{
    if (scene=="Settings"){
      this._drawer.close()
    }else{
      if(navigate){
        navigate=false;
        this.props.navigation.navigate(scene);
      }
    }
  };

  _renderItem ({item, index}) {
        return (
          <View style={styles.slide}>
            <Foldable
                  color={functions.getInterestColorByName("it")}
                  header={"Fantastic framework - React Native"}
                  text={"Build native mobile apps using JavaScript and React React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI from declarative components."}
                  height={[responsiveHeight(40),responsiveHeight(10)]}
                  img={"http://geekycentral.com/wp-content/uploads/2017/09/react-native.png"}
            />
          </View>
        );
    }
  render() {
    const menu = <MainMenu nav={this.sideMenuNavigate}/>;
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={menu}
        openDrawerOffset={100}
        tweenHandler={Drawer.tweenPresets.parallax}
        captureGestures={true}
        acceptDoubleTap={true}
        openDrawerOffset={responsiveWidth(100)/3}
        tapToClose={true}
        panOpenMask={.10}
        >
        <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'SETTINGS', style: { color: '#fff', fontSize:responsiveFontSize(2.5) } }}
          statusBarProps={{ hidden:true }}
          outerContainerStyles={{ height:responsiveHeight(8),width:responsiveWidth(100), backgroundColor:"#000" }}
          />
          <View style={styles.content}>
            <Carousel
              data={this.state.data}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
          </View>
        </View>
      </Drawer>
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
    borderColor:'#000',
    backgroundColor: '#fff',
  },content:{
    width: responsiveWidth(100),
    height: responsiveHeight(92),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:'#000',
  },sandwitch:{
    alignItems: 'center',
    justifyContent: 'center',
    height:responsiveHeight(8),
    width:responsiveWidth(8),
    top:responsiveHeight(2.35),
    right:responsiveWidth(3.5),
    position:'relative',
    width:responsiveWidth(15),
  },slide: {
        flex:1,
        width: itemWidth,
        height: itemHeight,
        alignItems: 'center',
        justifyContent: 'center',
          backgroundColor:"#ff0"
    }
});
export default SettingsScreen;
