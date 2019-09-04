import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoText: '',
      filter: 'all',
    };
    this.id = 1;
  }

  componentDidMount() {
    const todoData = window.localStorage.getItem('todoapp');
    if (todoData) {
      const CurrentTodos = JSON.parse(todoData);
      this.setState({
        todos: CurrentTodos,
      });
      this.id = CurrentTodos[CurrentTodos.length - 1].id + 1;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      window.localStorage.setItem('todoapp', JSON.stringify(this.state.todos));
    }
  }

  handleChange = (e) => {
    this.setState({
      todoText: e.target.value,
    });
  }

  handleKeyDown = (e) => {
    const { todos, todoText } = this.state;
    if (e.key === 'Enter') {
      this.setState({
        todos: [...todos, {
          id: this.id,
          isFinished: false,
          content: todoText,
        }],
        todoText: '',
      });
      this.id++;
    }
  }

  handleDelete = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id),
    });
  }

  handleFinished = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          isFinished: !todo.isFinished,
        };
      }),
    });
  }

  filterAll = () => {
    this.setState({
      filter: 'all',
    });
  }

  filterFinished = () => {
    this.setState({
      filter: 'finished',
    });
  }

  render() {
    const { todos, todoText, filter } = this.state;
    return (
      <div className="list">
        <header className="list__header">
          <h1 className="list__title">Todo List</h1>
          <div className="list__form">
            <input
              className="list__input"
              type="text"
              value={todoText}
              placeholder="Add something to do here <(￣︶￣)>?"
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
            />
            <div className="input__underline" />
          </div>
        </header>
        <div style={{ padding: '0 24px' }}>
          <button className={`btn filter ${filter === 'all' ? 'active' : ''}`} type="button" onClick={this.filterAll}>All</button>
          <button className={`btn filter ${filter === 'finished' ? 'active' : ''}`} type="button" onClick={this.filterFinished}>Finished</button>
        </div>
        <ul className="list__container">
          {todos
            .filter(todo => (filter === 'finished' ? todo.isFinished : true))
            .map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                handleDelete={this.handleDelete}
                handleFinished={this.handleFinished}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
