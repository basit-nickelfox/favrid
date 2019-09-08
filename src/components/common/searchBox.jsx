import React from 'react';

const SearchBox = ({...rest}) => {
  
    
    return (
        <div className="form-group container" style={{float:'right'}}>

            <input
                type="text"
                name='search'
                id='search'
                {...rest}
                placeholder='Search...'
                className="form-control" />

        </div>

    );

}

export default SearchBox;