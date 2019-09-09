import React, { Component } from 'react';
import '../css/style.css';

function Square(props) {
  return (
    <button type="button" className="btn square" onClick={props.onClick}>
      <span
        className={`piece ${props.value ? props.value : ''}`}
      />
    </button>
  );
}

class Board extends Component {
  constructor(props) {
    super(props);
  }

  renderSquare(i) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const { line, winner } = this.props;
    let col = 0;
    const board = [];
    for (let i = 0; i < line; i++) {
      const row = [];
      for (let j = 0; j < line; j++, col++) {
        row.push(this.renderSquare(col));
      }
      board.push(<div className="board-row" key={i}>{row}</div>);
    }
    return (
      <div className={winner ? 'game-board  winner' : 'game-board'}>{board}</div>
    );
  }
}


export default Board;
