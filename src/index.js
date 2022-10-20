import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./state/store"

export let rerenderEntireTree =(state)=> {
 /*   const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(*/
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()}/>
        </React.StrictMode>, document.getElementById('root'))

    /*);*/
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state =store.getState();
    rerenderEntireTree(state)
})

