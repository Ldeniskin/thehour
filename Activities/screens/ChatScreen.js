import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import MainMenu from './../Menu/MainMenu';
import Drawer from 'react-native-drawer';
import Chat from './tst/Chat';

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
class ChatScreen extends React.Component {
  constructor() {
    super();
    this.sideMenuNavigate = this.sideMenuNavigate.bind(this);
  }
  state = {
    isOpen:false,
  }
  componentDidMount(){
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
    if (scene=="Chat"){
      this._drawer.close()
    }else{
      if(navigate){
        navigate=false;
        this.props.navigation.navigate(scene);
      }
    }
  };
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
        acceptPan={true}
        openDrawerOffset={responsiveWidth(100)/3}
        tapToClose={true}
        panOpenMask={.03}
        >
        <View style={styles.container}>
        <Header
          centerComponent={{ text: 'CHAT', style: { color: '#fff', fontSize:responsiveFontSize(2.5) } }}
          statusBarProps={{ hidden:true }}
          outerContainerStyles={{ height:responsiveHeight(8),width:responsiveWidth(100), backgroundColor:"#000" }}
          />
          <View style={styles.content}>
            <Chat/>
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
    borderLeftWidth:responsiveWidth(0.5),
    borderColor:'#000',
    backgroundColor: '#fff',
  },content:{
    flex:1,
    width: responsiveWidth(100),
    borderColor:'#000',
  }
});
export default ChatScreen;
