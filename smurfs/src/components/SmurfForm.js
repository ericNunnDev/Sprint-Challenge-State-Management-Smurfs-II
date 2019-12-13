import React from 'react';

const SmurfForm = props => {
    return ( 
        <div>
            <form onSubmit={props.addSmurf}>
                <input
                  type='text' 
                  placeholder='Add your favorite Smurf!'
                />
                <button className='btn btn-large'>Add Smurf</button>
            </form>
        </div>
     );
}
 
export default SmurfForm;