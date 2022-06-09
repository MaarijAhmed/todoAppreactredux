import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNestedTodo,
  addTodo,
  selectCount,
} from '../counterSlice';

export function Counter() {
  const todos = useSelector(selectCount);

  const dispatch = useDispatch();
  const [todoName,setTodoName] = useState("");
  const [value,setValue] = useState("")

 const addnesttodo = (id) => {
   console.log("Click!", id);
   let txt = prompt("add todo")
   let todo;
   for(var i = 0; i < todos.length; i++ ){
     if(todos[i].id === id){
       todo = todos[i]
       console.log(todo)
       
       break
       
     }
     
   }

   dispatch(addNestedTodo({
     id : todo.id,
     todo : txt,
     completed : false
   }))
  //  console.log(todo.todos)
  //  console.log(todo)
  //  let text = prompt("write the todo")
  //  setValue(text)
  //  dispatch(addNestedTodo(value))
  }

  console.log("Todos -->",todos)
  
  return (
    <div>
      <input value={todoName} onChange={(e) => {setTodoName(e.target.value);}}placeholder='add todo'/>
      <button onClick={() => {
        dispatch(addTodo({
          title : todoName,
          id : todos.length + 1,
          todos: []
        }));
        setTodoName(" ")
      }}>Add Todo</button>
      

      {
      todos.map((v,i) => {
         return(<ul>
         <li key={i}>{v.title}</li>
         <button onClick={() => addnesttodo(v.id)
         }>addTodo</button>
         
         
         <button onClick={() => {
           
         }}>view todos</button>
       </ul>)
      })
      }
    </div>
  );
}
