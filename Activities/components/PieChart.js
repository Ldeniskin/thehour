
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import hexRgb from 'hex-rgb';
import * as functions from './../components/functions';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from 'react-native-responsive-dimensions';
import { Pie } from 'react-native-pathjs-charts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});

class PieChart extends React.Component {

  constructor(props) {
    super(props);
    var user=functions.getUserByName(this.props.login);
    var interests=functions.getInterestsByNames(user.interests);
    var stats=functions.getStatsByName(this.props.login);
    var dat=[];
    var sum=0;
    for (let interest of interests){
      sum+=functions.getHoursState(this.props.login,interest.alias);
    }
    for (let interest of interests) {
      rgb=hexRgb(interest.color);
      label=interest.name;
      part=functions.getHoursState(this.props.login,interest.alias)/(sum*1.0);
      if((part>0.05)&&(part>(label.length*0.02))&&(label.length<10)){
        dat.push({
                  "name": interest.name,
                  "hours": functions.getHoursState(this.props.login,interest.alias),
                  "color": {'r':rgb[0],'g':rgb[1],'b':rgb[2]}
                 });
       }else{
         dat.push({
                   "name": '',
                   "hours": functions.getHoursState(this.props.login,interest.alias),
                   "color": {'r':rgb[0],'g':rgb[1],'b':rgb[2]}
                  });
       }
    }
    this.state={data:dat,color:this.props.color,mT:this.props.marginTop,rmin:this.props.radius*0.4,rmax:this.props.radius,width:this.props.radius*2,height:this.props.radius*2};
  }
  render() {
    let options = {
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      width: this.state.width,
      height: this.state.height,
      color: '#2980B9',
      r: this.state.rmin,
      R: this.state.rmax,
      legendPosition: 'topLeft',
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
      label: {
        fontFamily: 'Arial',
        fontSize: responsiveFontSize(2),
        fontWeight: true,
        color: this.state.color
      }
    }

    return (
      <View style={styles.container}>
        <Pie data={this.state.data}
          options={options}
          accessorKey="hours"
          margin={{top: 0, left: 0, right: 0, bottom: 0}}
          color="#2980B9"
          pallete={
            [
              {'r':25,'g':99,'b':201},
              {'r':24,'g':175,'b':35},
              {'r':190,'g':31,'b':69},
              {'r':100,'g':36,'b':199},
              {'r':214,'g':207,'b':32},
              {'r':198,'g':84,'b':45}
            ]
          }
          r={this.state.rmin}
          R={this.state.rmax}
          legendPosition="topLeft"
          label={{
            fontFamily: 'Arial',
            fontSize: responsiveFontSize(2),
            fontWeight: true,
            color: this.state.color
          }}
          />

      </View>
    )
  }
}

export default PieChart;
