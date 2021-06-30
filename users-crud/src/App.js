import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import UsersCreate from "./components/UsersCreate";
import Users from "./components/Users";
import UsersUpdate from "./components/UsersUpdate";

export default function App() {
  return (
    <Router>
      <NavBar />
      <Switch >
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/createUser">
          <UsersCreate />
        </Route>
        <Route path="/updateUser">
          <UsersUpdate />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router >
  );
}
