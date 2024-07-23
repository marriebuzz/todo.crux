import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TaskList} />
        <Route path="/add" component={TaskForm} />
        <Route path="/edit/:id" component={TaskForm} />
        <Route path="/detail/:id" component={TaskDetail} />
      </Switch>
    </Router>
  );
}

export default App;
