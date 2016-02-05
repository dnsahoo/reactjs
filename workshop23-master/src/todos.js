import React from 'react';
import Header from './header';
import TodoList from './todo-list';

class Todos extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, todo: 'Learn React.js'},
                {id: 2, todo: 'Build React Applications'},
                {id: 2, todo: 'I am learning React'}
            ]
        };
    }
    handleDeleteTodo(todo) {
        console.log(todo);
        this.setState({
            todos: this.state.todos.filter(t => t !== todo)
        });
    }
    render() {
        return <div>
            <Header />
            <TodoList todos={this.state.todos}
                      onDeleteTodo={(todo) => this.handleDeleteTodo(todo)}/>
        </div>;
    }
}

export default Todos;