import React from 'react';

function TodoItemComponent(props) {
  return (
    <li className={ props.completed ? 'todo-list__item--completed' : 'todo-list__item--uncompletedItem' } data-id = {props.id}>
      <label for={`todo-list-item ${props.id}`}><input id={`todo-list-item ${props.id}`} type="checkbox"></input>{props.title}</label>
    </li>
  )
}

export default TodoItemComponent;
