import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddTodos extends Component {
    state = {
        content: ''
    }
    // handleChange = (e) =>{
    //       this.setState({
    //           content: e.target.value
    //       })
    // }

    handleSubmit(event) {
        let input = this.refs.input;
        event.preventDefault();
        if (!input.value.trim()) {
            return
        }

        this.props.addTodo(input.value);
        input.value = ''
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Add new Todo:</label>
                    <input ref="input" type="text" />
                </form>
            </div>
        )
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        addTodo: (content) => { dispatch({ type: 'ADD_TODO', content: content }) }
    }
}
export default connect(null, dispatchStateToProps)(AddTodos);