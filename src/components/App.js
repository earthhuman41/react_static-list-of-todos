import React from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import TodoListComponent from './TodoList';
import User from './User';

function App() {
  let activeUserId = 2;

  function nextUser() {
    activeUserId += 1;
  }

  function previousUser() {
    activeUserId -= 1;
  }

  return (
    <section class="main-wrapper">
      <User activeUserId = {activeUserId}/>
      <TodoListComponent activeUserId = {activeUserId}/>
    </section>
  );
}

export default App;
