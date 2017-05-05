import React from 'react';
import { render } from 'react-dom';
import Note from './component/Note';
import { createStore } from "redux";
import reducer from "./reducer";
import Counter from "./component/Counter"
const store=createStore(reducer);
console.log(store);
const Render=()=>{
	render(<Counter 
	    value={store.getState()}
        onIncrease={()=>{store.dispatch({type:"INCREASE"})}}
        onDecrease={()=>{store.dispatch({type:"DECREASE"})}}/>,
        document.getElementById('app'))
}
Render();
store.subscribe(Render);