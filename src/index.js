import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from 'react-redux';
import Store from "./helpers/store.js"
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
    <Provider store={Store}> {/*{#react-reduct}*/}
        <App/>
    </Provider>
</BrowserRouter>, document.getElementById('root'));