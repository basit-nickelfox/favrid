import React from 'react';
export const ListGroup=(props)=> {
    
        return(
            <ul className="list-group mt-5">
                {props.allGenres.map(genre=>
                <li key={genre._id} className={props.genreName===genre.name ?"list-group-item active":"list-group-item"} style={{cursor:'pointer'}} onClick={()=>props.handleList(genre.name)}>{genre.name}</li>
                )}
            </ul>
        );
    }
