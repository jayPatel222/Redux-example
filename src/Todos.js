import React from "react";
import { connect } from 'react-redux'

const Todos = ({ todosProp, deleteTodo }) => {
  const todosList = todosProp.length ? (
    todosProp.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={(e) => { deleteTodo(todo.id) }}>{todo.content}</span>
        </div>
      );
    })
  ) : (
      <p> No Work </p>
    );

  return <div className="todos collection">
    {todosList}
  </div>;
};

const dispatchStateToProps = (dispatch) => {
  return {
    deleteTodo: (id) => { dispatch({ type: 'DELETE_POST', id: id }) }
  }
}

export default connect(null, dispatchStateToProps)(Todos);
