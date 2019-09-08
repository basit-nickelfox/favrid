import React, { Component } from "react";
import { getMovies } from '../services/fakeMovieService';
import { Pagination } from './common/pagination'
import { ListGroup } from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import { MoviesTable } from "./moviesTable";
import { Link } from "react-router-dom";
import SearchBox from "./common/searchBox";
export default class AllMovies extends Component {

    state = {
        allMovies: [],
        allGenres: [],
        pageSize: 4,
        currentPage: 1,
        start: 0,
        end: 4,
        genreName: 'All Genres',
        sortBy: 'title',
        sortOrder: 'asc',
        search:"",
        activeSideBar:true
        // movies:getMovies().slice(0,4)
    };
     
    componentDidMount() {
        this.setState({ allMovies: getMovies(), allGenres: [{ _id: "5b21ca3eeb7f6fbccd471810", name: "All Genres" }, ...getGenres()] })
   
    }
    // movies=this.state.allMovies.filter(movie=>this.state.allMovies.indexOf(movie)<=this.state.pageSize-1);
     
    render() {
        let filteredGenres;
        const { pageSize, currentPage, start, end, genreName, allGenres, sortBy, sortOrder,search,activeSideBar } = this.state;
        if(this.state.search.length>0){
             filteredGenres=this.state.allMovies.filter(movie=>movie.title.toLowerCase().startsWith(search.toLowerCase()))
           // this.setState({allMovies:searchMovies});
          }
          else{
              filteredGenres = genreName !== 'All Genres' ?
            this.state.allMovies.filter(genres => genres.genre.name === genreName) : this.state.allMovies;
               }
        this.state.sortOrder === 'asc' ?
            (this.state.allMovies.sort(function (a, b) {

                if (a[sortBy].toUpperCase() > b[sortBy].toUpperCase()) return 1;
                if (a[sortBy].toUpperCase() < b[sortBy].toUpperCase()) return -1;
                return 0;
            }))
            : this.state.allMovies.sort(function (a, b) {
                if (a[sortBy].toUpperCase() < b[sortBy].toUpperCase()) return 1;
                if (a[sortBy].toUpperCase() > b[sortBy].toUpperCase()) return -1;
                return 0;
            });
           
        const movies = filteredGenres.slice(start, end);
        const count = filteredGenres.length;

        return (
            <div className="container">
                
                <div>


                </div>
                <div className='row'>
                  
                    {
                        genreName === 'All Genres' && count === 0 ?
                    <h4 className='col-12' style={{ textAlign: "center" }}>No Movie in the database</h4> :''}
                            <div className='col-md-3 col-sm-4'>
                                <ListGroup handleList={this.handleGroup} genreName={genreName} allGenres={allGenres} activeSideBar={activeSideBar}  />

                            </div>
                    {/* } */}
                    <div className='col-md-9  col-sm-8' style={{ textAlign: "left" }}>
                   
                      <Link to='/movies/new'   className="btn btn-primary mr-5 my-2" style={{ float: 'right' }}>New Movie</Link> 
                        <p className="my-2">

                            {count === 0 ?
                                '' : 'Showing ' + count + ' movies in the database'}

                        </p>
                  
                        <SearchBox value={this.state.search} onChange={this.handleChange}/>
                        
                       
                        {
                            genreName === 'All Genres' && count === 0 ? '' :
                                (count === 0 ?
                                    <h4 style={{textAlign:'center'}} >No {genreName} Movie in the database</h4> :
                                    <MoviesTable movies={movies} onSort={this.handelSort} onDelete={this.delete} onLike={this.handleLike} sortOrder={sortOrder} />)
                        }

                        <Pagination itemCount={count} pageSize={pageSize} currentPage={currentPage}
                            onPageChange={this.handlePageChange} />
                    </div>
                </div>
            </div>
            
        );
        
    }
    

    handleChange=({currentTarget:input})=>{
       this.setState({search:input.value,activeSideBar:false});
    }

    handelSort = (sortBy) => {
        sortBy = (sortBy === 'genre' ? ['genre']['name'] : sortBy);
        const sortOrder = this.state.sortOrder === 'asc' ? 'desc' : 'asc';
        this.setState({ sortBy, sortOrder });
    }
    handleGroup = (genreName) => {

        this.setState({ genreName: genreName ,activeSideBar:true});
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

    delete = (id) => {
        return (
            <button onClick={() => this.removeItem(id)} className="btn btn-danger btn-sm">Delete</button>
        )
    }
    removeItem = (id) => {
        this.setState({ allMovies: this.state.allMovies.filter(movie => movie._id !== id) });
    };

}