import React, { Component } from 'react';
import Smurf from './components/Smurf';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';
import "./App.css";

class App extends Component {
  render() {
    return ( 
      <div className='container'>
        <h1>Smurfs</h1>
        <SmurfForm />
      </div>
     );
  }
}
 
export default App;
