import React, {Component} from 'react';
import userAuth from "../api/userApi";

class Login extends Component {
    state = {
        username: "", password: "", loading: "", message: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        userAuth.login(this.state).then((res) => {
            console.log(res)
            // this.props.history.push("/profile");
            // window.location.reload();
        }, (error) => {
            console.log(error);
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        });
    }


    render() {
        return (<form onSubmit={this.handleSubmit}>
            <h1>Login</h1>

            <label>Username</label>
            <input
                name='username'
                placeholder='Username'
                value={this.state.username}
                onChange={this.handleChange}
            /><br/>
            {/*<p>{this.state.message.username}</p>*/}


            <label>Password</label>
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
            /><br/>
            {/*<p>{this.state.message.username}</p>*/}
            {/*<p>Tài khoản hoặc mật khẩu không chính xác</p>*/}
            <input type='submit'/>
        </form>)
    }
}

// const mapDispatchToProps = dispatch => ({
//   userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
// })

export default Login;