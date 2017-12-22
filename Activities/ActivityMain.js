import noFadeSlideFromRightTransition from './transitions/noFadeSlideFromRightTransition';
import HomeScreen from './screens/HomeScreen';
import ActivityProfile from './ActivityProfile';
import SettingsScreen from './screens/SettingsScreen'
import StatsScreen from './screens/StatsScreen'
import ChatScreen from './screens/ChatScreen'
import React from 'react';


import {
  StackNavigator,
} from 'react-navigation';

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ActivityProfile,
  },
  Settings: {
    screen: SettingsScreen,
  },
  Chat: {
    screen: ChatScreen,
  },
  Stats:{
    screen: StatsScreen,
  }
},  {
  headerMode: 'none',
  initialRouteName:'Home',
  transitionConfig: noFadeSlideFromRightTransition,
  navigationOptions: {
    headerVisible: false,
  }
 }
);
