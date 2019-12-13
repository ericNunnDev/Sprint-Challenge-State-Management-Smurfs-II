import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './store/actions';
import SmurfList from './components/SmurfList';
import SmurfForm from './components/SmurfForm';
import "./App.css";

class App extends Component {
  state = {
    smurfs: []
  }

  render() {
    return ( 
      <div className='container'>
        <h1>Smurfs</h1>
        <SmurfList smurfs={this.state.smurfs} />
        <SmurfForm />
      </div>
     );
  }
}
 
const mapStateToProps = state => ({ smurfs: state.smurfs })

export default connect(mapStateToProps, { getSmurfs })(App);