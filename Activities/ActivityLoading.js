import React, { Component } from 'react';
import { AppRegistry, Alert,View, StyleSheet,Text,Image } from 'react-native';
import AppIntro from 'react-native-app-intro';
import SvgUri from 'react-native-svg-uri';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';

class ActivityLoading extends Component {
  onSkipBtnHandle = (index) => {
    this.props.navigation.navigate('Login');
    console.log(index);
  }
  doneBtnHandle = () => {
    this.props.navigation.navigate('Login');
  }
  nextBtnHandle = (index) => {
    //Alert.alert('Next');
    console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    return (
      <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={this.doneBtnHandle}
        onSkipBtnClick={this.onSkipBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
      >
      <View style={[styles.slide,{ backgroundColor: '#bac4e7' }]}>
          <View level={-4}><SvgUri width={responsiveWidth(60)} height={responsiveWidth(60)} source={require('./assets/icon.svg')} /></View>
          <View style={{alignItems:'center',justifyContent:'center',height:responsiveHeight(50)}}>
            <View level={-4}><Text style={styles.text}>Meet The Hour{"\n"}</Text></View>
            <View level={2}><Text style={styles.text2}>Let us take a</Text></View>
            <View level={8}><Text style={styles.text2}>Little tour</Text></View>
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#ABCB00' }]}>
          <View level={-4}><SvgUri width={responsiveWidth(60)} height={responsiveWidth(60)} source={require('./assets/sand-clock.svg')} /></View>
          <View style={{alignItems:'center',justifyContent:'center',height:responsiveHeight(50)}}>
            <View level={-4}><Text style={styles.text}>Hope you have time{"\n"}</Text></View>
            <View level={2}><Text style={styles.text2}>Because we have a new</Text></View>
            <View level={8}><Text style={styles.text2}>Way to spend it</Text></View>
          </View>
        </View>
        <View style={[styles.slide,{ backgroundColor: '#FFC108' }]}>
          <View level={-4}><SvgUri width={responsiveWidth(60)} height={responsiveWidth(60)} source={require('./assets/one.svg')} /></View>
          <View style={{alignItems:'center',justifyContent:'center',height:responsiveHeight(50)}}>
            <View level={-4}><Text style={styles.text}>Every 1 hour{"\n"}</Text></View>
            <View level={2}><Text style={styles.text2}>1% of users</Text></View>
            <View level={8}><Text style={styles.text2}>Get to the top</Text></View>
          </View>
        </View>
        <View style={[styles.slide, { backgroundColor: '#841584' }]}>
          <View level={-4}><SvgUri width={responsiveWidth(60)} height={responsiveWidth(60)} source={require('./assets/top.svg')} /></View>
          <View style={{alignItems:'center',justifyContent:'center',height:responsiveHeight(50)}}>
            <View level={-4}><Text style={styles.text}>Share your ideas{"\n"}</Text></View>
            <View level={2}><Text style={styles.text2}>Forward your projects</Text></View>
            <View level={8}><Text style={styles.text2}>Find partners and friend</Text></View>
          </View>
        </View>
      </AppIntro>
    );
  }
}
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor:"#000",
    textShadowOffset:{width: 1, height:1},
    textShadowRadius:2
  },
  text2: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textShadowOffset:{width: 1, height:1},
    textShadowRadius:2
  },
  image: {
    height:responsiveWidth(60),
    width:responsiveWidth(60)
  }
});

export default ActivityLoading;
