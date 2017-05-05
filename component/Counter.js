import React,{Component} from "react";
import {Connect} from "react-redux";
class Counter extends Component{
	render(){
		const {value,onIncrease,onDecrease}=this.props;
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