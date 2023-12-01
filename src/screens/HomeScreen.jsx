/**
 * CPRG-303-F: Mobile Application Development
 * Project Phase 4: Building the App
 * Develop Team: Kevin Wong, Savanna Piscitelli
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
    navigation.navigate('Setting');
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Tic Tac Toe Game</Text>
      <Button
        color="#000"
        style={Styles.button}
        title="Start Game"
        onPress={handleStartGame}
      />
      <Button
        color="#000"
        style={Styles.button}
        title="Setting"
        onPress={handleSetting}
      />
      <Button
        color="#000"
        style={Styles.button}
        title="About Us"
        onPress={handleAboutUs}
      />
    </View>
  );
};

export default HomeScreen;
