/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Development Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import Styles from '../layout/Styles';

const AboutUs = () => {
  const handleOpenLink = () => {
    const url = 'https://github.com/SavannaPisc/MobileAppTicTacTactics.git';
    Linking.openURL(url);
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>CPRG-306-F: Mobile App Dev</Text>
      <Text style={[Styles.text, {marginBottom: 10}]}>
        Software Development
      </Text>

      <Text style={Styles.text}>Development Team</Text>
      <Text style={[Styles.text, {marginBottom: 10}]}>
        Kevin Wong, Savanna Piscitelli
      </Text>

      <Text style={Styles.text}>Special Thanks</Text>
      <Text style={[Styles.text, {marginBottom: 10}]}>Nick Hamnett</Text>

      <TouchableOpacity>
        <Text
          style={[{textDecorationLine: 'underline'}, {marginBottom: 10}]}
          onPress={handleOpenLink}>
          GitHub Repository
        </Text>
      </TouchableOpacity>

      <Text style={[Styles.text, {fontSize: 10}]}>
        Southern Alberta Institute of Technology©
      </Text>
    </View>
  );
};

export default AboutUs;
