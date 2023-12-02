/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Development Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import Styles from '../layout/Styles';

const HomeScreen = ({navigation}) => {
  const handleStartGame = () => {
    navigation.navigate('Game');
  };

  const handleAboutUs = () => {
    navigation.navigate('About Us');
  };

  const handleSetting = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={[Styles.container, {marginHorizontal: 20}]}>
      <Text style={Styles.title}>Tic Tac Toe</Text>
      <View style={{gap: 10, width: '100%'}}>
        <Button
          style={Styles.button}
          title="Start Game"
          onPress={handleStartGame}
        />
        <Button
          style={Styles.button}
          title="Settings"
          onPress={handleSetting}
        />
        <Button
          style={Styles.button}
          title="About Us"
          onPress={handleAboutUs}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
