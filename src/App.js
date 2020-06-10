import React, { Component } from "react";
import Todos from './Todos';
import AddTodos from './AddTodos'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <div className="todo-app container ">
        <h1 className="center cyan-text">Todos</h1>
        <div  onClick={this.handleClick}>
          <Todos todosProp={this.props.todos} />
        </div>
        <AddTodos addTodo={this.AddTodo} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
const dispatchStateToProps = (dispatch) => {
  return {
    deleteTodo: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
