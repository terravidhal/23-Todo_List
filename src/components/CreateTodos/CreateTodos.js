import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import "./CreateTodos.css";
import Todo from "../Todo/Todo";




const CreateTodos = () => {

  const [todoTitle, setTodoTitle] = useState("");
  const [allTodos, setAllTodos] = useState([]);

  
  // Récupère les tâches depuis le localStorage lors du montage du composant
 /* useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storedTodos);
    if (storedTodos) {
      setAllTodos(storedTodos);
    }
  }, []); */

  // Sauvegarde les tâches dans le localStorage à chaque changement
 /* useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(allTodos));
  }, [allTodos]); */

  //BONUS SENSEI:
 


  // create todo
  const createtodoItem = (ev) => {
    ev.preventDefault();

    if (todoTitle.length < 1) {
      return;
    }

    const todoItem = {
      title: todoTitle,
      complete: false,
    };

    setAllTodos([...allTodos, todoItem]);
    setTodoTitle("");
  };

  // change status todos
  const changeStatusTodos = (i) => {
    const todoUpdateStatus = allTodos.map((elt, index) => {

      if (i === index) {
            elt.complete = !elt.complete;
      }
      return elt;
    });
   // console.log("todoUpdateStatus+++++++++++",todoUpdateStatus);
    setAllTodos(todoUpdateStatus);
  } 

  // Delete specific Todo
  const deleteTodo = (i) => {
    const TodosNoDelete = allTodos.filter((elt, index) => {
        if (i !== index) {
           return elt;
        }
    });
   // console.log("TodosNoDelete+++++++++",TodosNoDelete);
    setAllTodos(TodosNoDelete);
    localStorage.removeItem('allTodos', JSON.stringify(allTodos));
}






  return (
      <div className="CreateTodos">
            <h1>Todo List</h1>
            <form onSubmit={(ev)=>createtodoItem(ev)} className="form">
                <input onChange={(ev)=>setTodoTitle(ev.target.value)} type="text" value={todoTitle} className="input-title"  />
                <input className="add" type="submit" value="Add" />
            </form>
             <div className="todos">
                {
                    allTodos.map((elt, index) => {
                      return <Todo todo={elt} i={index} key={index} changeStatusTodos={changeStatusTodos} deleteTodo={deleteTodo} />
                    })
                }
             </div>
      </div>
  );
};

CreateTodos.propTypes = {};

CreateTodos.defaultProps = {};

export default CreateTodos;
