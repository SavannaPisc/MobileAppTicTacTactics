/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Development Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import Styles from '../layout/Styles';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [whoIsNext, setWhoIsNext] = useState(true);

  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = index => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = whoIsNext ? 'X' : 'O';

    setBoard(newBoard);
    setWhoIsNext(!whoIsNext);
  };

  const renderSquare = index => (
    <TouchableOpacity style={Styles.square} onPress={() => handleClick(index)}>
      <Text style={Styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setWhoIsNext(true);
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);
  const showRestartButton = winner || isBoardFull;

  const status = winner
    ? `${winner} Wins`
    : isBoardFull
    ? 'Game tied'
    : `Now is: ${whoIsNext ? 'X' : 'O'}`;

  return (
    <View style={Styles.container}>
      <Text style={Styles.status}>{status}</Text>
      <View style={Styles.board}>
        <View style={Styles.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={Styles.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={Styles.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      <View style={{margin: 20}}>
        {showRestartButton && (
          <Button title="Restart Game" onPress={handleRestart} />
        )}
      </View>
    </View>
  );
};

export default Game;
