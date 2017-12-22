import React from 'react';
import MainMenu from './../Menu/MainMenu';
import Drawer from 'react-native-drawer'
import posts from './../json/posts.json';
import { Hoshi } from 'react-native-textinput-effects';
import * as functions from './../components/functions';
import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  Platform,
} from 'react-native';
import PieChart from './../components/PieChart';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import {
  Constants
} from 'expo';
import { Header,List,ListItem, Button,Icon,Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Foldable from './../components/Foldable';
let listener = null;
let navigate = true;
class HomeScreen extends React.Component {

  constructor() {
    super();
    this.sideMenuNavigate = this.sideMenuNavigate.bind(this);
  }
  state = {
    isOpen:false,
  }
  componentDidMount(){
    console.log("kek");
    this.setState({data:posts});
    navigate=true;
    if (Platform.OS === "android" && listener === null) {
      listener = BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });
    }
  }
  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }
  handlePress = (evt) =>{
    console.log("kek");
    console.log(`x coord = ${evt.nativeEvent.locationX}`);
    console.log(`y coord = ${evt.nativeEvent.locationY}`);
  }
  sideMenuNavigate = scene =>{
    if (scene=="Home"){
      this._drawer.close()
    }else{
      if(navigate){
        navigate=false;
        this.props.navigation.navigate(scene);
      }
    }
  };
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render() {
    const menu = <MainMenu nav={this.sideMenuNavigate}/>;
    return (
      <TouchableWithoutFeedback onPress={(evt) => this.handlePress(evt)}>
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
        negotiatePan={true}
        >
        <View style={styles.container}>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'HOME', style: { color: '#fff', fontSize:responsiveFontSize(2.5) } }}
            statusBarProps={{ hidden:true }}
            outerContainerStyles={{ height:responsiveHeight(8),width:responsiveWidth(100), backgroundColor:"#000" }}
            />
          <View style={styles.content}>
            <FlatList
              containerStyle={{alignItems:'center',justifyContent:'center',backgroundColor:"#F5F5F5",width:responsiveWidth(100)}}
              data={this.state.data}
              renderItem={({ item }) => (
              <Foldable
                  color={functions.getInterestColorByName(item.interest)}
                  header={item.title}
                  text={item.text}
                  height={[responsiveHeight(40),responsiveHeight(20)]}
                  img={item.img}
                  />
              )}
              keyExtractor={item => item.id}
              />
          </View>
        </View>
      </Drawer>
    </TouchableWithoutFeedback>
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
  },input:{
    width:responsiveWidth(100)
  },cardIn1:{
    width:responsiveWidth(89),
    height:responsiveHeight(19.5),
    backgroundColor:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },cardIn2:{
    width:responsiveWidth(89),
    height:responsiveHeight(19.5),
    backgroundColor:"#fff",
    alignItems: 'center',
    justifyContent: 'center',


  }
});
export default HomeScreen;

