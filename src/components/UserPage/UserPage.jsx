import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import ShelfPage from '../ShelfPage/ShelfPage';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const history = useHistory()
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <button className="btn" onClick={() => {history.push('/user/${user.id}')}}></button>
      <ShelfPage />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
