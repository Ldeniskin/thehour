import noFadeSlideFromLeftTransition from './transitions/noFadeSlideFromLeftTransition';
import noFadeSlideFromRightTransition from './transitions/noFadeSlideFromRightTransition';
import ProfileScreen from './screens/ProfileScreen'
import StatsScreen from './screens/StatsScreen'
import React from 'react';


import {
  StackNavigator,
} from 'react-navigation';

export default StackNavigator({
  Profile: {
    screen: ProfileScreen,
  },
  Stats:{
    screen: StatsScreen,
  }
},  {
  headerMode: 'none',
  initialRouteName:'Profile',
  transitionConfig: noFadeSlideFromLeftTransition,
  navigationOptions: {
    headerVisible: false,
  }
 }
);
