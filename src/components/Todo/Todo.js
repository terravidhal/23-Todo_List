import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';




const Todo = (props) => {

  const {todo, i, changeStatusTodos, deleteTodo} = props

  return (
      <div className="Todo">
           {
             todo.complete === false ?
              <div className="title">{todo.title}</div>
              :
              <div className="title underline">{todo.title}</div>
           }
           <div className="check">
             <input type="checkbox" onChange={()=>changeStatusTodos(i)} checked={todo.complete}></input>
           </div>
           <div className="delete">
             <button onClick={()=>deleteTodo(i)} >Delete</button>
           </div>
      </div>
  )
}

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
