/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./state/store"
import {Provider} from "react-redux";



export let rerenderEntireTree =(state)=> {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store ={store}>
                <App state={store.getState()}/>
            </Provider>
        </React.StrictMode>, document.getElementById('root')
    )
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state =store.getState();
    rerenderEntireTree(state)
});




*/

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./state/store"
import App from './App'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App state ={store.getState()} />
    </Provider>
)