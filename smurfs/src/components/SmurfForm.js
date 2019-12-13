import React, { useState } from 'react';

const SmurfForm = props => {
    const [value, setValue] = useState('');

    return ( 
        <div>
            <form onSubmit={props.addSmurf}>
                <h5>Add your favorite Smurf!</h5>
                <label>Name: </label>
                <input
                  type='text' 
                  placeholder='Dabbler Smurf'
                />
                <label>Age: </label>
                <input
                  type='number'
                  placeholder='100'
                />
                <label>Height: </label>
                <input
                  type='number'
                  placeholder='Three-Apples-Tall'
                />
                <button className='btn btn-large'>Add Smurf</button>
            </form>
        </div>
     );
}
 
export default SmurfForm;