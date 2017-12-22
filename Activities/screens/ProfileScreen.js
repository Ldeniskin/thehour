import React from 'react';
import Drawer from 'react-native-drawer'
import MainMenu from './../Menu/MainMenu';
import images from './../json/images.json';
import randomColor from 'randomcolor';
import Interest from './../components/Interest';
import PieChart from './../components/PieChart';
import * as functions from './../components/functions';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  BackHandler,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Header,List,ListItem, Button, Icon } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import {
  Constants
} from 'expo';
import * as Animatable from 'react-native-animatable';
Animatable.Button = Animatable.createAnimatableComponent(Button);
Animatable.Icon = Animatable.createAnimatableComponent(Icon);
let listener = null;
let login="everybody";
let navigate=true;
class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.sideMenuNavigate = this.sideMenuNavigate.bind(this);
  }
  state = {
    isOpen:false,
    user:{
        login:"nobody",
        avatar:"",
        fullname:"The Nobody",
        interests:[
          "nothing"
        ]
      },
    interests:[{
      alias:"nothing",
      name:"Nothing",
      icon:"panorama-fish-eye",
      color:"#000000"
    }],
  }
  onAvatarClicked = () =>{
    this.refs['ava'].pulse(500);
    console.log(this.state.user.avatar);
  }

  goToStats = () =>{
    //this.refs['chart'].rubberBand(300);
    if(navigate){
      navigate=false;
      this.props.navigation.navigate("Stats");
    }
  }

  componentDidMount(){
    navigate=true;
    if (Platform.OS === "android" && listener === null) {
      listener = BackHandler.addEventListener("hardwareBackPress", () => {
        return true;
      });
    }
    var user=functions.getUserByName(login);
    var intrs=functions.getInterestsByNames(user.interests);
    this.setState({user:user,interests:intrs});
  }

  sideMenuNavigate = scene =>{
    if (scene=="Profile"){
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
        openDrawerOffset={responsiveWidth(100)/3}
        tapToClose={true}
        panOpenMask={.10}
        >
        <View style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'PROFILE', style: { color: '#fff', fontSize:responsiveFontSize(2.5) } }}
          statusBarProps={{ hidden:true }}
          outerContainerStyles={{ height:responsiveHeight(8),width:responsiveWidth(100), backgroundColor:"#000" }}
          />
          <View style={styles.content}>
          <Grid>
           <Row size={3} style={styles.mainrow}>
           <Grid>
             <Row size={1}>
             </Row>
             <Row size={4} style={styles.innerow}>
               <TouchableWithoutFeedback  onPress={this.onAvatarClicked}>
                <Animatable.View ref='ava' style={{width:responsiveWidth(40.5), height: responsiveWidth(40.5),borderWidth:responsiveWidth(0.3),borderColor:"#000",borderRadius:responsiveWidth(40.5)}}>
                <Image
                 style={{width:responsiveWidth(40), height: responsiveWidth(40),borderWidth:responsiveWidth(0.5),borderColor:randomColor(),borderRadius:responsiveWidth(40)}}
                 source={{uri: functions.getImageByName("profile")}}/>
                 </Animatable.View>
               </TouchableWithoutFeedback>
             </Row>
             <Row size={2} style={styles.innerow}>
               <Text style={{fontSize:responsiveFontSize(5),fontWeight: 'bold'}}>{this.state.user.fullname}</Text>
             </Row>
           </Grid>

           </Row>
           <Row size={2} style={styles.mainrow}>
              <Grid>
                <Row size={1} style={styles.innerow}>
                  <Text style={{fontSize:responsiveFontSize(3),fontWeight: 'bold'}}>Interests:</Text>
                </Row>
                <Row size={4} style={styles.innerow}>
                <List containerStyle={{borderTopWidth:0,alignItems: 'center',justifyContent: 'center'}}>
                  <FlatList
                  data={this.state.interests}
                  containerStyle={styles.mainrow}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  renderItem={({ item }) => (
                    <Interest item={item} />
                  )}
                  keyExtractor={item => item.alias}
                  />

                </List>
                </Row>
              </Grid>
            </Row>
            <Row size={2} style={styles.statsrow}>
              <Grid>
                <Row size={1} style={styles.innerow}>
                  <Text style={{fontSize:responsiveFontSize(3),fontWeight: 'bold',color:'#fff'}}>Stats:</Text>
                </Row>
                <Row size={4} style={styles.chart}>
                  <TouchableWithoutFeedback onPress={this.goToStats}>
                    <Animatable.View ref="chart">
                      <PieChart login='everybody' radius={responsiveWidth(15)} color='transparent' marginTop={responsiveHeight(10)}/>
                    </Animatable.View>
                  </TouchableWithoutFeedback>
                </Row>
              </Grid>
            </Row>
            </Grid>
          </View>
        </View>
      </Drawer>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth:responsiveWidth(0.5),
    borderColor:'#000',
    backgroundColor: '#fff',
  },content:{
    width: responsiveWidth(100),
    height: responsiveHeight(92.5),
    alignItems: 'center',
    justifyContent: 'center',
  },mainrow:{
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
  },innerow:{
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
  },intrst:{
    width: responsiveWidth(100),
  },chart:{
    alignItems:'center',
    justifyContent:'center'
  },statsrow:{
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#000"
  }
});
export default ProfileScreen;
