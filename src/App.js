import React, { Component } from 'react';
import './App.css';
import Headers from './components/Headers';
import Footer from './components/Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Headers />
        <Footer />
      </div>
    );
  }
}

export default App;
