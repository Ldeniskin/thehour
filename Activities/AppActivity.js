import noFadeSlideFromRightTransition from './transitions/noFadeSlideFromRightTransition';
import ActivityPhone from './ActivityPhone';
import ActivityMain from './ActivityMain';
import ActivityLoading from './ActivityLoading';
import ActivityEmail from './ActivityEmail';

import React from 'react';


import {
  StackNavigator,
} from 'react-navigation';

export default StackNavigator({
  Loading:{
    screen:ActivityLoading,
  },
  Login: {
    screen: ActivityPhone,
  },
  Main: {
    screen: ActivityMain,
  },
  Mail: {
    screen: ActivityEmail,
  },
},  {
  headerMode: 'none',
  initialRouteName:'Main',
  transitionConfig: noFadeSlideFromRightTransition,
  navigationOptions: {
    headerVisible: false,
  }
 }
);
