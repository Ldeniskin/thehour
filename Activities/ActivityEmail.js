import noFadeSlideFromRightTransition from './transitions/noFadeSlideFromRightTransition';
import Email from './components/Email'
import CodeEmail from './components/CodeEmail'
import React from 'react';


import {
  StackNavigator,
} from 'react-navigation';

export default StackNavigator({

    Email: {
      screen: Email,
    },
    Code:{
      screen: CodeEmail,
    }
  },
  {
    headerMode: 'none',
    initialRouteName:'Email',
    transitionConfig: noFadeSlideFromRightTransition,
    navigationOptions: {
      headerVisible: false,
    }
 });
