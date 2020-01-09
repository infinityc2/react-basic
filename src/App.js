import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

class App extends Component {
    state = {
        todos: []
    }

    addTodo = (title) => {
        const todo = {
            title,
            completed: false
        }
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map((todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            }))
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter((todo) => todo.id !== id)]
        })
    }

    render () {
        return (
            <Router>
                <div className="container">
                    <Header />
                    <Route 
                        exact
                        path="/"
                        render={(props) => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo} />
                                <Todos 
                                    todos={this.state.todos}
                                    markComplete={this.markComplete}
                                    delTodo={this.delTodo}
                                />
                            </React.Fragment>
                        )}/>
                </div>
            </Router>
        );
    }
}

export default App;