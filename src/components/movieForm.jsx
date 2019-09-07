import React from 'react';
import Form from './common/form';
import { getMovie,saveMovie } from '../services/fakeMovieService';
class MovieForm extends Form {
    state = {
        data: {
            title: '',
            genreId:'',
            numberInStock:'',
            dailyRentalRate:''
        },
        errors: {
            
        }

    }

    componentDidMount() {
        if (this.props.match.params.id) {
            //console.log(getMovie(this.props.match.params.id).genre._id);
            const retreveData=getMovie(this.props.match.params.id);
            retreveData.genreId=getMovie(this.props.match.params.id).genre._id;
            console.log(retreveData);
            this.setState({ data:retreveData});
        }
        // console.log(this.state.data);
    }
    validateProperty = ({ name, value }) => {
        console.log(value);
        if (name === 'title') {

            if ((value.trim() === '')) {
                return 'Title is required';
            }
        }
        if (name === 'genreId') {
            if ((value.trim() === '')) {
                return 'Genre is required';
            }
        }
        if (name === 'numberInStock') {

            if ((value.trim() === '')) {
                return 'Value is required';
            }
        }
        if (name === 'dailyRentalRate') {

            if ((value.trim() === '')) {
                return 'Rate is required';
            }
        }
    }
    validate = () => {
      
        const errors = {};
        const { data } = this.state;
        console.log(this.state.data.numberInStock);
        if (data.title.trim() === "") {
            errors.title = 'Title is required';
        }
        if (data.genreId.trim()=== "") {
            errors.genreId = 'Genre is required';
        }
        if (data.numberInStock === "") {
            errors.numberInStock = 'Value is required';
        }
        if (data.dailyRentalRate === "") {
            errors.dailyRentalRate = 'Rate is required';
        }
        return Object.keys(errors).length === 0 ? null : errors;


    }

    doSubmit = () => {
        console.log(this.state.data);
           console.log(saveMovie(this.state.data));
         this.props.history.replace('/movies');
        console.log('Form Submit');
    }
    render() {


        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col-lg col-md-3  col-sm-2 "></div> */}
                    <div className="col-lg col-md col-sm jumbotron mt-2">

                        <h1 style={{ fontWeight: "bold" }} className='mb-3'>Movie Form</h1>
                        <form onSubmit={this.handleSubmit}>

                            {this.renderInput('title', 'Title', 'text', true)}
                            {this.renderSelect('genreId', 'Genre')}
                            {this.renderInput('numberInStock', 'Number In Stock ', 'number')}
                            {this.renderInput('dailyRentalRate', 'Rate', 'decimal')}
                            {this.renderButton("Save")}
                        </form>
                    </div>
                    {/* <div className="col-lg col-md-3 col-sm-2"></div> */}

                </div>
            </div>
        );
    }
}
export default MovieForm;