import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import { List, ListItem, SearchBar,Header } from "react-native-elements";
import images from './../json/images.json';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import {
  Constants
} from 'expo';
import * as Animatable from 'react-native-animatable';
import menus from './../json/menus.json'
class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.goToScene = this.goToScene.bind(this);
    this.state = {
      data: [],
    };
  }
 goToScene = (scene) =>{
   this.props.nav(scene);
 }
componentDidMount() {
  this.setState({
    data: menus.main_menu,
  });
}

  render() {
    let home=images.home;
    let profile=images.profile;
    let settings=images.settings;
    return (
      <View style={{width:2*responsiveWidth(100)/3}}>
        <Header
        centerComponent={{ text: 'The Hour', style: { color: '#fff', fontSize:responsiveFontSize(3) } }}
        outerContainerStyles={{ height:responsiveHeight(8), backgroundColor:"#000" }}
        />
        <View style={{height:responsiveHeight(92),backgroundColor:"#000"}}>
          <List containerStyle={{marginTop: 0}}>
            <FlatList
              containerStyle={styles.list}
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  title={item.title}
                  leftIcon={{name:item.icon,type:item.iconType,color:"#000",size:responsiveHeight(6),reverse:true}}
                  avatarContainerStyle={{backgroundColor:'#fff'}}
                  avatarStyle={{backgroundColor:'#fff'}}
                  onPress={() => this.goToScene(item.navigate)}
                />
              )}
              keyExtractor={item => item.title}
            />
          </List>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    width: responsiveWidth(100),
    backgroundColor: '#fff',
  },
});
export default MainMenu;
