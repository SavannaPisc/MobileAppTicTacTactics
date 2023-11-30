/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Develop Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React from 'react';
import {View, Text} from 'react-native';
import CSS from '../layout/CSS';

const AboutUs = () => {
  return (
    <View style={CSS.container}>
      <Text style={CSS.title}>About Us</Text>
      <Text style={CSS.text}>
        Development Team: Kevin Wong, Savanna Piscitelli
      </Text>
      <Text style={CSS.text}>Special Thanks: Nick Hamnett</Text>
    </View>
  );
};

export default AboutUs;
