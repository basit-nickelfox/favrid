import React, { Component } from "react";
import { Like } from '../common/like'
import { getMovies } from '../services/fakeMovieService';
import { Pagination } from "../common/pagination";
import { ListGroup } from "../common/listGroup";
import { getGenres } from "../services/fakeGenreService";
export default class AllMovies extends Component {

    state = {
        allMovies: [],
        allGenres: [],
        pageSize: 4,
        currentPage: 1,
        start: 0,
        end: 4,
        genreName: 'All Genres',
        // movies:getMovies().slice(0,4)
    };
    componentDidMount() {
        this.setState({ allMovies: getMovies(), allGenres: [{ _id: "5b21ca3eeb7f6fbccd471810", name: "All Genres" },...getGenres()] })
    }
    // movies=this.state.allMovies.filter(movie=>this.state.allMovies.indexOf(movie)<=this.state.pageSize-1);
    render() {

        const { pageSize, currentPage, start, end, genreName, allGenres } = this.state;
        const movies = this.state.allMovies.slice(start, end);
        const { length: count } = this.state.allMovies;
        if (count === 0) {
            return <h3 style={{ textAlign: 'center' }}>No Movie in the database</h3>
        }

        return (
            <div>
                <div>
                    <h5 style={{ textAlign: 'center' }}>Showing {count} movies in the database</h5>
                </div>
                <div className='row'>
                    <div className='col-md-3 col-sm-4'>
                        <ListGroup handleList={this.handleGroup} genreName={genreName} allGenres={allGenres} />
                    </div>
                    <div className='col-md-9  col-sm-8'>

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
                                                <Like movie={movie.liked} onClick={() => this.handleLike(movie)} />
                                            </td>
                                            <td>
                                                {this.delete(movie._id)}
                                            </td>
                                        </tr>
                                    )}
                            </tbody>
                        </table>
                        <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage}
                            onPageChange={this.handlePageChange} />
                    </div>
                </div>
            </div>
        );
    }
    handleGroup = (list) => {

        const allMovies = list !== 'All Genres' ?
            getMovies().filter(genres => genres.genre.name === list) : getMovies();
        this.setState({ genreName: list, allMovies });
    }
    handlePageChange = (page) => {
        this.setState({
            currentPage: page,
            start: (this.state.pageSize * page) - this.state.pageSize,
            end: page * this.state.pageSize,
        });
    }
    handleLike = (movie) => {
        const allMovies = [...this.state.allMovies];
        const index = allMovies.indexOf(movie);
        allMovies[index] = { ...allMovies[index] }
        allMovies[index].liked = !allMovies[index].liked;
        this.setState({ allMovies });
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