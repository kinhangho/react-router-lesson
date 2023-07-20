import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path='/Articles/:title'>
          <Article />
          </Route>
        <Route path='/about'>
          <About />
          </Route>
        <Route path='/Sign-Up'>
          <SignUp />
          </Route>
          <Route path='/Articles'>
          <Articles />
          </Route>
          
          <Route path='/Categories'>
          <Categories />
          </Route>
          <Route path='/Authors/:name'>
          <Author />
          </Route>
          <Route path='/Profile'>
          <Profile />
          </Route>
      </Switch >
      <Footer />
    </Router>
  );
}

export default App;
