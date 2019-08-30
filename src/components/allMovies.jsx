import React, { Component } from "react";
import {Like} from '../common/like'
import { getMovies } from '../services/fakeMovieService';
import {Pagination} from "../common/pagination";
export default class AllMovies extends Component {

    state = {
        allMovies: getMovies(),
        pageSize:4,
        currentPage:1,
        start:0,
        end:4,
        // movies:getMovies().slice(0,4)
    };
     
    // movies=this.state.allMovies.filter(movie=>this.state.allMovies.indexOf(movie)<=this.state.pageSize-1);
    render() {
        
        const{pageSize,currentPage,start,end}=this.state;
        let movies=this.state.allMovies.slice(start,end);
         const{length:count}=this.state.allMovies;
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
                        {
                           
                            movies.map(movie =>
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
                <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage}
                   onPageChange={this.handlePageChange}/>
            </div>
        );
    }
    handlePageChange=(page)=>{
      this.setState({currentPage:page,
        start:(this.state.pageSize*page)-this.state.pageSize,
        end:page*this.state.pageSize,
     });
    }
    handleLike=(movie)=>{
            const allMovies=[...this.state.allMovies];
            const index =allMovies.indexOf(movie);
            allMovies[index]={...allMovies[index]}
            allMovies[index].liked=!allMovies[index].liked;
            this.setState({allMovies});
    }

    delete(id) {
        return (
            <button onClick={() => this.removeItem(id)} className="btn btn-danger btn-sm">Delete</button>
        )
    }
    removeItem = (id) => {
        this.setState({ allMovies: this.state.allMovies.filter(movie => movie._id !== id) })
    };

}