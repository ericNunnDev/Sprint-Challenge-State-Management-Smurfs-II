import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    console.log(props)
    return ( 
        <div>
           {props.smurfs.map(smurf => {
               return (
                <Smurf name={smurf.name} age={smurf.age} height={smurf.height} />
               ) 
           })} 
        </div>
     );
}
 
export default SmurfList;