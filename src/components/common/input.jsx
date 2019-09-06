import React from 'react';

const Input = ({ label, error, name,active, ...rest }) => {
    // autoFocus=()=>name==='username'?autoFocus:''
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                {...rest}
                name={name}

                id={name}
                
                autoFocus={active && 'autoFocus'}

                className="form-control" />
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>

    );
    
}

export default Input;