import React, { Component } from 'react';
import '../css/style.css';

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  delete = () => {
    const { todo, handleDelete } = this.props;
    handleDelete(todo.id);
  }

  finish = () => {
    const { todo, handleFinished } = this.props;
    handleFinished(todo.id);
  }

  render() {
    const { todo } = this.props;
    return (
      <li className={`list__item ${todo.isFinished ? 'finished' : ''}`}>
        <button className={`btn tooltip handle__check ${todo.isFinished ? '' : 'list__checkbox'}`} type="button" onClick={this.finish}>
          <span className={todo.isFinished ? 'ri-check-square' : 'tooltiptext'}>
            {todo.isFinished ? '' : '完成'}
          </span>
        </button>
        <p className="list__context">{todo.content}</p>
        <button className="btn del__btn tooltip" type="button" onClick={this.delete}>
          <span className="ri-cross" />
          <span className="tooltiptext">刪除</span>
        </button>
      </li>
    );
  }
}

export default TodoItem;
