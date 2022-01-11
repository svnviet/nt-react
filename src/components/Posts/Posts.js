import React from "react";
import "./Posts.css";
import axios from "axios";
import Post from "../Post/Post";
import axiosClient from "../../helpers/axiosClient";

class Posts extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [], DataisLoaded: false
        };
    }

    componentDidMount() {
        this.refreshList();
        this.purposeData();
    }

    purposeData() {

    }

    refreshList = () => {
        axiosClient
            .get("api/films/")
            .then(res => this.setState({items: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        const {items} = this.state;

        return (<div className="posts-container">
            {items.map((post, index) => (<Post key={index} index={index} post={post}/>))}
        </div>);
    }
}

export default Posts;
