import React from 'react';

function TodoItemComponent(props) {
  return (
    <li className={ props.completed ? 'todo-list__item--completed' : 'todo-list__item--uncompletedItem' } data-id = {props.id}>
      <label htmlFor={`todo-list-item ${props.id}`}><input id={`todo-list-item ${props.id}`} type="checkbox" checked = {props.completed ? 'checked': ''}></input>{props.title}</label>
    </li>
  )
}

export default TodoItemComponent;
