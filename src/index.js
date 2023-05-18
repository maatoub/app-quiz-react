import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Quiz from "./components/Quiz/Quiz";
import SignInForm from "./components/SignInForm/SignInForm";
import AdminPanel from "./components/Admin/AdminPanel";
import Category from "./components/Category/Category";
import Facile from "./components/Quiz/Question/Facile";
import Moyen from "./components/Quiz/Question/Moyen";
import Difficile from "./components/Quiz/Question/Difficile";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <App />} />
      <Route path="/quiz" render={() => <Quiz />} />

      <Route path="/login" render={() => <SignInForm />} />
      <Route path="/admin" render={() => <AdminPanel />} />
      <Route path="/category" render={() => <Category />} />
      <Route path="/category=easy" render={() => <Facile />} />
      <Route path="/category=medium" render={() => <Moyen />} />
      <Route path="/category=hard" render={() => <Difficile />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
