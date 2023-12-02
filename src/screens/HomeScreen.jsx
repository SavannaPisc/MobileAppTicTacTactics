/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Development Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import Styles from '../layout/Styles';
import Background from '../res/Background.png'; 



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
    <ImageBackground source={Background} style={{width: '100%', height: '100%'}}>
    <View style={[Styles.container, {marginHorizontal: 20}]}>
      <Text style={Styles.title}>Tic-Tac-Tactics</Text>
      <View style={{marginHorizontal: 20, gap: 10}}>
        <Button 
          style={[Styles.button, width='100%']}
          title="Start Game"
          onPress={handleStartGame}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button className="shadow-sm flex min-h-79 flex-col rounded-3xl"
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
    </View>
    </ImageBackground>
  );
};

export default HomeScreen;
