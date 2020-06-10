import React from "react";
import { connect } from 'react-redux'

const Todos = ({ todosProp, deleteTodo }) => {
  const todosList = todosProp.length ? (
    todosProp.map((todo) => {
      return (
        <div className="collection-item card-panel cyan accent-2 " key={todo.id}>
          <span onClick={(e) => { deleteTodo(todo.id) }} className="todo">{todo.content}</span>
        </div>
      );
    })
  ) : (
      <p className="collection-item card-panel cyan accent-2 todos"> No Work Add Some Todos !!
      
      </p> 
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
