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