import React, {Component} from 'react';
import "./App.css";
import {
    Link, Route, Routes
} from 'react-router-dom'
import Posts from "./blogs/Posts/Posts";
import Login from "./jwt_authentication/components/Login";
import Counter from "./redux_example/Counter";
import HookExam from "./hooks_example";
import Register from "./hooks_example/jwt_authentication/components/Register";
// import Login from "./hooks_example/jwt_authentication/components/Login";
import {useRoutes} from 'hookrouter';


class App extends Component {
    render() {
        return (<div className="App">
            <header className="App-header">
                <h1 className="App-title">Blog Page Template</h1>
            </header>
            <div className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/messages">Messages</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/asd">Login</Link></li>
                    <li><Link to="/redux">Redux</Link></li>
                    <li><Link to="/hooks">Hooks</Link></li>
                    <li><Link to="/hooksss">Hooksss</Link></li>
                </ul>
            </div>
            <div className="App-intro">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/blog" element={<Posts/>}/>
                    <Route path="/messages" element={<Messages/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/asd" element={<Login/>}/>
                    <Route path="/redux" element={<Counter/>}/>
                    <Route path="/hooks/*" element={<HookExam/>}/>
                    <Route path="/hookss" element={<Register/>}/>
                </Routes>
            </div>
        </div>);
    }
}

const About = () => (<div>
    <h2>About</h2>
    This example shows how to use React Router!
</div>);

const Messages = () => (<div>
    <h2>Messages</h2>
    Messages
</div>);

const Home = () => (<div>
    <h2>Home</h2>
    My Home page!
</div>);

export default App;
