import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './store/actions';
import Smurf from './components/Smurf';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';
import "./App.css";

class App extends Component {
  state = {
    smurf: []
  }

  render() {
    return ( 
      <div className='container'>
        <h1>Smurfs</h1>
        <SmurfForm />
      </div>
     );
  }
}
 
const mapStateToProps = state => ({ smurfs: state.smurf })

export default connect(mapStateToProps, { getSmurfs })(App);