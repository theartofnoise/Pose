import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import UserProjects from "./pages/UserProjects";
import Nav from "../src/components/"

class App extends Component {

  state = {
    loggedIn:true,
  }

  render() {
  return (
    <div>
    <Nav />
    <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          {this.state.loggedIn&&[
          <Route exact path="/main" component={Main} />,
          <Route exact path="/userProjects" component={UserProjects} />,
          <Route exact path="/books/:id" component={Detail} />]}
          <Route component={NoMatch} />
        </Switch>
    </Router>
      </div>
  );
}
}
export default App;
