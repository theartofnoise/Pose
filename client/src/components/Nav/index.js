import React from "react";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" href="/">
        pose
      </a>
      <a className="navbar-brand float-right" href="/main">
        {props.mainLink}
      </a>
      <a className="navbar-brand float-right" href="/">
        {props.projectsLink}
      </a>
    </nav>
  );
}

export default Nav;
