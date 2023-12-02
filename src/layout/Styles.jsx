/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Development Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    padding: 20,
  },
  text: {
    fontSize: 20,
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
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  squareText: {
    fontSize: 50,
  },
});

export default Styles;
