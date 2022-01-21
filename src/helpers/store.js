// redux store state
import {createStore} from 'redux';
import {reducer} from '../redux_example/reducer';

// golbal hook store state
import React from "react";
import useGlobalHook from "use-global-hook";
// import * as actions from "../actions";

// redux store state
const store = createStore(reducer);

export default store;

// golbal hook store state

const initialState = {
    jwtoken: 0, resetToken: 0, token: 0
};

// const useGlobal = useGlobalHook(React, initialState, actions);

// export {useGlobal};
