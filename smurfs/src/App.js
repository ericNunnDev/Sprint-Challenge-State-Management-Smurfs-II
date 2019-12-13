import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './store/actions';
import SmurfForm from './components/SmurfForm';
import "./App.css";

class App extends Component {
  state = {
    smurfs: []
  }

  render() {
    return ( 
      <div className='container center-align'>
        <h1>Smurfs</h1>
        {this.props.smurfs.map(smurf => {
               return (
                 <div>
                  <h5>{smurf.name}</h5>
                  <p>Height: {smurf.height}</p>
                  <p>Age: {smurf.age}</p>
                 </div>  
               ) 
           })} 
        <SmurfForm />
      </div>
     );
  }
}
 
const mapStateToProps = state => ({ smurfs: state.smurfs })

export default connect(mapStateToProps, { getSmurfs })(App);