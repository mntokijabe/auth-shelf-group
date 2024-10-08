import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);
  const myRouteIdString = "/shelf/" + user.id
  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Auth Shelf</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {user.id === null &&
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        }

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            <LogOutButton className="navLink" />
            <Link className="navLink" to={myRouteIdString}>
            My Shelf
          </Link>
          </>
        )}
          <Link className="navLink" to="/shelf">
            The Shelf
          </Link>

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
