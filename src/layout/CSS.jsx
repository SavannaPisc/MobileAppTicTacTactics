/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Develop Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import {StyleSheet} from 'react-native';

const CSS = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  status: {
    marginBottom: 10,
    fontSize: 20,
  },
  board: {
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  squareText: {
    fontSize: 20,
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  restartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CSS;
