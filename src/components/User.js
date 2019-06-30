import React from 'react';
import users from '../data/users';

function User(props) {
  let userId = props.activeUserId;
  
  let activeUser = users.find((user) => {
    return user.id === userId;
  });
  
  return (
    <div className = "user">
      <p className = "user__name">{activeUser.name}</p>
      <p className = "user__username">{activeUser.username}</p>
      <section className = "user__details">
        <h2 className="user__details__header">Details:</h2>
        <p>company: {activeUser.company.name}</p>
        <p>phone: {activeUser.phone}</p>
        <p>website: {activeUser.website}</p>
      </section>
    </div>
  )
}

export default User;
