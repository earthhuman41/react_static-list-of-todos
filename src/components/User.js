import React from 'react';
import users from '../data/users';

function User(props) {
  let userId = props.activeUserId;
  
  let activeUser = users.find((user) => {
    return user.id === userId;
  });
  
  return (
    <div class = "user">
      <p class = "user__name">{activeUser.name}</p>
      <p class = "user__username">{activeUser.username}</p>
    </div>
  )
}

export default User;
