import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlacesPage from './Places/PlacesPage';
import NavBar from './Menu/NavBar';
import './App.css';


class App extends Component {

  Home = () => <h2>Home</h2>;
  Decisions = () => <h2>Decisions</h2>;
  render() {
    return (
      <Router>
        <div>
          <header>
            <NavBar />
          </header>
          <Route path='/' exact component={this.Home} />
          <Route path='/decisions' component={this.Decisions} />
          <Route path='/places' component={PlacesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
