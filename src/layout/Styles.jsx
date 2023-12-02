/**
 * CPRG-303-F: Mobile Application Development
 * Project Phase 4: Building the App
 * Develop Team: Kevin Wong, Savanna Piscitelli
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
    fontSize: 40,
    padding: 20,
    marginBottom: 30,
    fontFamily: 'Jockey-One-Regular',
    color: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
    shadowColor: '#000000',
    color: '#FFFFFF',
  },
  status: {
    marginBottom: 10,
    fontSize: 20,
    color: '#FFFFFF',
  },
  board: {
    borderWidth: 1,
    backgroundColor: '#180CA9',
    borderRadius: 30,
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
    color: '#FFFFFF',
  },
  button: {
    color: '#180CA9',
    borderRadius: 10,
    
  }
});

export default Styles;
