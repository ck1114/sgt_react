import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <Header />
          <Form />
          <Table />
      </div>
    );
  }
}

export default App;
