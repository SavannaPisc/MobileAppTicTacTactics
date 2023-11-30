/**
 * CPRG-303-F: Mobile Application Development
 * Group Project Phase 4: Building the App
 * Develop Team: Kevin Wong, Savanna Piscitelli
 * GitHub: https://github.com/SavannaPisc/MobileAppTicTacTactics.git
 */

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import CSS from '../layout/CSS';

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

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
    newBoard[index] = isXNext ? 'X' : 'O';

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = index => (
    <TouchableOpacity style={CSS.square} onPress={() => handleClick(index)}>
      <Text style={CSS.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);
  const showRestartButton = winner || isBoardFull;

  const status = winner
    ? `Winner: ${winner}`
    : isBoardFull
    ? 'Game tied'
    : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <View style={CSS.container}>
      <Text style={CSS.status}>{status}</Text>
      <View style={CSS.board}>
        <View style={CSS.row}>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style={CSS.row}>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style={CSS.row}>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>
      {showRestartButton && (
        <Button
          title="Restart Game"
          onPress={handleRestart}
          style={CSS.restartButton}
          titleStyle={CSS.restartButtonText}
        />
      )}
    </View>
  );
};

export default Game;
