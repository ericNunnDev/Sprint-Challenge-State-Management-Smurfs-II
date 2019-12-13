import React, { useState } from 'react';

const SmurfForm = () => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <h5>Add your favorite Smurf!</h5>
                <label>Name: </label>
                <input
                  type='text' 
                  placeholder='Dabbler Smurf'
                  value={value}
                  onChange={handleChange}
                />
                <label>Age: </label>
                <input
                  type='number'
                  placeholder='100'
                  value={value}
                  onChange={handleChange}
                />
                <label>Height: </label>
                <input
                  type='number'
                  placeholder='Three-Apples-Tall'
                  value={value}
                  onChange={handleChange}
                />
                <button type='submit' className='btn btn-large waves-effect'>Add Smurf</button>
            </form>
        </div>
     );
}
 
export default SmurfForm;