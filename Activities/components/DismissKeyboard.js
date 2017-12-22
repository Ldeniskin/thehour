import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';

export default class DismissKeyboard extends React.Component {

   render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          {React.children}
        </View>
      </TouchableWithoutFeedback>
    );
  };
}
