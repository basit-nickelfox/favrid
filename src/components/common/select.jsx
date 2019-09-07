import React from 'react';
import {getGenres} from '../../services/fakeGenreService';

const Select = ({ label, error, name, ...rest }) => {
    // autoFocus=()=>name==='username'?autoFocus:''
   
    
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} className='form-control' {...rest}>
                <option value=''/>
                {getGenres().map(item=>
                <option key={item._id} value={item._id}>{item.name}
                </option>)
            }
               
            </select>
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>

    );

}

export default Select;