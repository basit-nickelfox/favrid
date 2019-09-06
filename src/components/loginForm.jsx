import React from 'react';
import Form from './common/form';
class LoginForm extends Form {
    state = {
        data: {
            username: "",
            password: ""
        },
        errors: {}
    };
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
                    <div className="col-lg col-md col-sm jumbotron mt-5">

                        <h1 style={{ fontWeight: "bold" }} className='mb-3'>Login</h1>
                        <form onSubmit={this.handleSubmit}>

                            {this.renderInput('username', 'Username')}
                            {this.renderInput('password', 'Password', 'password')}
                            {this.renderButton("Login")}
                        </form>
                    </div>
                    <div className="col-lg col-md-3 col-sm-2"></div>

                </div>
            </div>
        );
    }
}
export default LoginForm;