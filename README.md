# redux的初步使用
```javacript
clone repos
cd repos
npm install
npm start 
visited:localhost:8080
```
### 根据官方实例自己实现的一个计数器：
```javascript
//计数器Counter组件：
import React,{Component} from "react";
import {Connect} from "react-redux";
class Counter extends Component{
	render(){
		const {value,onIncrease,onDecrease}=this.props; //redux主张UI组件只负责展示，所以这里做了，解构props的操作
		return(
           <div>
             <p> you click the button: {value}  time!</p>
             <button onClick={onIncrease}>+</button> 
             <button onClick={onDecrease}>-</button> 
           </div>
		)
	}
}
export default Counter;
```

```javascript
//reducer 
//reducer的作用是：当views层触发ACTION(store.dispatch(ACTION))时重新计算state并返回这个新的state
export default (state=0,action)=>{
   switch(action.type){
   	case "INCREASE":
	   	return ++state;
  	case "DECREASE":
	   	return --state;
	default:
	    return state
   }
}
```
```javascript
import React from 'react';
import { render } from 'react-dom';
import { createStore } from "redux";
import reducer from "./reducer";
import Counter from "./component/Counter"
const store=createStore(reducer);
const Render=()=>{
	render(<Counter 
	       value={store.getState()}
        onIncrease={()=>{store.dispatch({type:"INCREASE"})}}  //将三个参数传入props
        onDecrease={()=>{store.dispatch({type:"DECREASE"})}}/>,
        document.getElementById('app'))
}
Render();
store.subscribe(Render); //订阅Render事件，当state发生变化时自动调用Render,更新UI
```
