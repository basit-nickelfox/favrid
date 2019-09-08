import React from 'react';
export const ListGroup=(props)=> {
    // console.log(props.ref);
        return(
            <ul className="list-group mt-5">
                {props.allGenres.map(genre=>
                <li  key={genre._id} className={props.genreName===genre.name && props.activeSideBar?"list-group-item active  ":"list-group-item"} style={{cursor:'pointer'}} onClick={()=>props.handleList(genre.name)}>{genre.name}</li>
                )}
            </ul>
        );
    }
