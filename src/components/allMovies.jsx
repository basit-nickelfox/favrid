import React, { Component } from "react";
import {Like} from '../common/like'
import { getMovies } from '../services/fakeMovieService';
export default class AllMovies extends Component {

    state = {
        movies: getMovies()
    };
    render() {
        const{length:count}=this.state.movies;
         if(count===0){
             return <h3>No Movie in the database</h3>
         }
        return (
            <div>
                <p>Showing {count} movies in the database</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(movie =>
                            <tr key={movie._id}>
                                <td>
                                    {movie.title}
                                </td>
                                <td>
                                    {movie.genre.name}
                                </td>
                                <td>
                                    {movie.numberInStock}
                                </td>
                                <td>
                                    {movie.dailyRentalRate}
                                </td>
                                <td>
                                    <Like movie={movie.liked} onClick={()=>this.handleLike(movie)}/>
                                </td>
                                <td>
                                    {this.delete(movie._id)}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
    handleLike=(movie)=>{
            const movies=[...this.state.movies];
            const index =movies.indexOf(movie);
            movies[index]={...movies[index]}
            movies[index].liked=!movies[index].liked;
            this.setState({movies});
    }

    delete(id) {
        return (
            <button onClick={() => this.removeItem(id)} className="btn btn-danger btn-sm">Delete</button>
        )
    }
    removeItem = (id) => {
        this.setState({ movies: this.state.movies.filter(movie => movie._id !== id) })
    };

}