import {
    Link, Route, Routes
} from 'react-router-dom'
import React, {useState, useEffect} from "react";
import Posts from "../blogs/Posts/Posts";
import Login from "../hooks_example/jwt_authentication/components/Login";
import Counter from "../redux_example/Counter";
import Register from "./jwt_authentication/components/Register";
import {useNavigate} from 'react-router-dom';
import userAuth from "./jwt_authentication/api/userApi";

const HookExam = () => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = userAuth.getCurrentUser()
        if (user) {
            setCurrentUser(user)
        }
    }, []);


    const logOut = () => {
        userAuth.logOut()
        window.location.reload();
    };


    return (<div className="App">
        <header className="App-header">
            <h1 className="App-title">Blog Page Template</h1>
        </header>
        <div className="menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                {currentUser ? (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                                {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a onClick={logOut}>LogOut</a>
                        </li>
                    </div>
                ) : (
                    <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"login"} className="nav-link">
                                Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Sign Up
                            </Link>
                        </li>
                    </div>
                )}
                <li><Link to="/redux">Redux</Link></li>
                <li><Link to="/hooks/register">Register</Link></li>
            </ul>
        </div>
        <div className="App">
            <Routes>
                <Route path="/blog" element={<Posts/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/redux" element={<Counter/>}/>
                <Route path="/hooks/register" element={<Register/>}/>
            </Routes>
        </div>
    </div>);
}

export default HookExam;