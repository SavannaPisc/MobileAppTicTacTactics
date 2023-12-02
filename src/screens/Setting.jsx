/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Development Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Styles from '../layout/Styles';
import Background from '../res/NoShip.png';

const Setting = () => {
  return (
    <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
      <View style={Styles.container}>
        <Text style={Styles.text}>🚧 Building in progress 🚧</Text>
      </View>
    </ImageBackground>
  );
};

export default Setting;
