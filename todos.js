import React from 'react';
import Header from './header';
import TodoList from './todo-list';

class Todos extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, todo: "Attend Reactjs workshop"},
        {id: 2, todo: "Learn ReactJs"},
        {id: 3, todo: "Practice ReactJs"},

      ]
    }
  }
  render() {
    return <div>
        <Header />
        <TodoList />
      </div>
  }
}

export default Todos