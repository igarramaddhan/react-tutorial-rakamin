import React from 'react';
import {ThemeContext} from './contexts/ThemeContext';
import './TodoListPage.css';

export function TodoList(props) {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        console.log('Todo List Component: ', value);
        return (
          <div>
            <h2>{props.title}</h2>
            {props.items && props.items.length < 1 ? (
              <span>No Todo Found</span>
            ) : (
              <ol>
                {props.items.map((todo) => {
                  return <li>{todo}</li>;
                })}
              </ol>
            )}
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export const environment = 'development';

class TodoListPage extends React.Component {
  static contextType = ThemeContext;
  state = {
    items: [],
    todo: '',
  };

  componentDidMount() {
    console.log('Todo List Page Context:', this.context);
  }

  addTodo = () => {
    const newTodo = this.state.todo;
    if (!newTodo || (typeof newTodo === 'string' && newTodo.length < 1)) return;
    const temp = [...this.state.items, newTodo];
    this.setState({items: temp, todo: ''});
  };

  onChange = (event) => {
    this.setState({todo: event.target.value});
  };

  render() {
    return (
      <div className={this.context.theme === 'light' ? 'light' : 'dark'}>
        <h1>Todo List Page</h1>
        <input value={this.state.todo} onChange={this.onChange} />
        <button onClick={this.addTodo}>Add Todo</button>
        <TodoList items={this.state.items} title="Todo Component" />
      </div>
    );
  }
}

export default TodoListPage;
