import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    this.getPlaces().then(resp => this.setState({ data: resp }))
      .catch(err => console.log(err));
  }

  getPlaces = async () => {
    const response = await fetch('/api/places');
    const body = await response.json();

    if(response.status !== 200){
      throw Error(body.message);
    }

    return body;
  }
  render() {
    return (
      <div>
        <header>
          <h1>What4Lunch Administartion</h1>
        </header>

        Places: {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default App;
