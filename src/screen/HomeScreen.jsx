/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Develop Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React from 'react';
import {View, Text, Button} from 'react-native';
import CSS from '../layout/CSS';

const HomeScreen = ({navigation}) => {
  const handleStartGame = () => {
    navigation.navigate('Game');
  };

  const handleAboutUs = () => {
    navigation.navigate('AboutUs');
  };

  return (
    <View style={CSS.container}>
      <Text style={CSS.title}>Tic Tac Toe Game</Text>
      <Button title="Start Game" onPress={handleStartGame} />
      <Button title="About Us" onPress={handleAboutUs} />
    </View>
  );
};

export default HomeScreen;
