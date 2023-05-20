import logo from './logo.svg';
import './App.css';

import React from 'react';
import Table from './Table'
import { Users } from "./Seed.js";
import Header from './Header/Header';

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <Header />    
        </div>
        <Table Users={Users} />
      </>
    );
  }
}

export default App;
