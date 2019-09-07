import React from 'react';
import { Like } from './common/like';
import { Link } from 'react-router-dom';
export const MoviesTable = (props) => {
    const { movies, onDelete, onLike, onSort, sortOrder } = props;

    const sortIcon = () => sortOrder === 'asc' ? 'fa fa-sort-asc' : 'fa fa-sort-desc';
    return (
        <table className="table"> 
            <thead>
                <tr>
                    <th onClick={() => onSort('title')}>Title <i className={sortIcon()} /></th>
                    <th onClick={() => onSort('genre')}>Genre <i className={sortIcon()} /></th>
                    <th onClick={() => onSort('numberInStock')}>Stock <i className={sortIcon()} /></th>
                    <th onClick={() => onSort('dailyRentalRate')}>Rate<i className={sortIcon()} /></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {

                    movies.map(movie =>
                        <tr key={movie._id}>
                            <td>
                              <Link to={`/movie/${movie._id}`}>{movie.title}</Link> 
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
                                <Like movie={movie.liked} onClick={() => onLike(movie)} />
                            </td>
                            <td>
                                {onDelete(movie._id)}
                            </td>
                        </tr>
                    )}
            </tbody>
        </table>
    );

}
