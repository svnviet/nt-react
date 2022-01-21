import React, {Component} from 'react';
// import {connect} from 'react-redux';
import userAuth from "../api/userApi";

class Register extends Component {
    state = {
        username: "",
        password: "",
        email: "",
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        userAuth.login(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>

                <label>Username</label>
                <input
                    name='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.handleChange}
                /><br/>

                <label>Email</label>
                <input name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange}/><br/>

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.handleChange}
                /><br/>

                <input type='submit'/>
            </form>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//   userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
// })

export default (Register);