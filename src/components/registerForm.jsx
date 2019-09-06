import React from 'react';
import Form from './common/form';
class RegisterForm extends Form {
    state = {
         data:{
             email:'',
             password:'',
             username:''
         },
         errors:{}
    }


    validateProperty = ({ name, value }) => {

        if (name === 'username') {

            if ((value.trim() === '')) {
                return 'Username is required';
            }
        }
        if (name === 'password') {
            if ((value.trim() === '')) {
                return 'Password is required';
            }
        }
        if (name === 'email') {

            if ((value.trim() === '')) {
                return 'email is required';
            }
        }
    }
    validate = () => {

        const errors = {};
        const { data } = this.state;
        if (data.username.trim() === "") {
            errors.username = 'Username is required';
        }
        if (data.password.trim() === "") {
            errors.password = 'Password is required';
        }
        if (data.email.trim() === "") {
            errors.email = 'Email is required';
        }
        return Object.keys(errors).length === 0 ? null : errors;


    }

    doSubmit = () => {
        // call to server
        console.log('Form Submit');
    }
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg col-md-3  col-sm-2 "></div>
                    <div className="col-lg col-md col-sm jumbotron mt-2">

                        <h1 style={{ fontWeight: "bold" }} className='mb-3'>Register</h1>
                        <form onSubmit={this.handleSubmit}>

                            {this.renderInput('email', 'Email','email',true)}
                            {this.renderInput('password', 'Password', 'password')}
                            {this.renderInput('username', 'Username')}
                            {this.renderButton("Register")}
                        </form>
                    </div>
                    <div className="col-lg col-md-3 col-sm-2"></div>

                </div>
            </div>
        );
    }
}
export default RegisterForm;