import React, { Component } from "react";
import AllMovies from './components/allMovies';
import Navbar from './components/common/navbar'
import { Route, Redirect, Switch } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
// import './App.css';
export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/movies' component={AllMovies} />
          <Route path='/customers' component={Customers} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/movie/:id?' component={MovieForm} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    );
  }
}
