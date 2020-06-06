const initState = {
  todos: [

  ]
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newTodos = state.todos.filter(todos => {
      return action.id !== todos.id
    });
    return {
      ...state,
      todos: newTodos
    }
  }
  else if (action.type === 'ADD_TODO') {
    let newTodos = [...state.todos]
    newTodos.push({ id: state.todos.length !== 0 ? state.todos[state.todos.length - 1].id + 1 : 0, content: action.content })
    console.log(state.todos)
    return {
      ...state,
      todos: newTodos
    }
  }
  return state;
}


export default rootReducer;