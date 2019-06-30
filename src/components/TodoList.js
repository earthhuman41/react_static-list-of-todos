import React from 'react';
import TodoItemComponent from './TodoItem'
import todos from "../data/todos";

function TodoListComponent(props) {
  
  return <ul className="todo-list">{
    todos.map((item) => {
      if (item.userId === props.activeUserId) {
        return <TodoItemComponent completed={item.completed}
                                  id ={item.id}
                                  title = {item.title} />
      }
    })
  }</ul>;
}

export default TodoListComponent;
