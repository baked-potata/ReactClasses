import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom ">
      <div className="container ">
        <Link className="navbar-brand text-warning" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/create-task"
              >
                Create Task
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" activeClassName="active" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClassName="active"
                to="/task-list"
              >
                Task List
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;