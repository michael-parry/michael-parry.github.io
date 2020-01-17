import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class navbar extends Component {
  render() {
    return (
      <div className="nav navbar navbar-expand navbar-dark bg-primary fixed-top">
        <Link to="/" className="navbar-brand">
          ChirpSAT
        </Link>

        <ul class="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-link"
              activeClassName="nav-link active"
            >
              About
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li class="navbar-item">
            <a
              href="https://www.twitter.com/ke8kdf/"
              target="_blank"
              className="nav-link"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li className="navbar-item">
            <a
              href="https://github.com/michael-parry"
              target="_blank"
              className="nav-link"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
