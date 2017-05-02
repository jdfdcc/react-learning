import React,{Component} from 'react';
import { render } from 'react-dom';
class EditPanel extends Component{
  constructor(props){
     super(props);
     this.state=this.props.item;
     this.handleEditFinish=this.handleEditFinish.bind(this);
  }
  handleEditFinish(e){
    var date=new Date();
    var newState={
      content:e.target.previousSibling.value,
      date:date.toLocaleDateString()     
    } 
    this.props.onChange(newState);
  }
  render(){
     return(
         <div className="edit-panel" style={{display:this.props.item.edit?"block":"none"}}>
           <textarea  cols="30" rows="10" defaultValue={this.state.content} /> 
           <a href="#" onClick={this.handleEditFinish}>完成</a>
         </div>
       )
  }
}

class Note extends Component{
  constructor(props){
     super(props);
     this.state={
          content:this.props.content,
          date:this.props.date,
          edit:false
     }
     this.handleEdit=this.handleEdit.bind(this);
     this.handleDelete=this.handleDelete.bind(this);
     this.handleChildChange=this.handleChildChange.bind(this);
  }
  handleChildChange(newState){
    if(newState){
          this.setState(newState);
          this.setState({
            edit:false
          })
    }
  }
  handleEdit(e){
    e.preventDefault();
    this.setState({
        edit:true,
    })
  }
  handleDelete(e){
    e.preventDefault();
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }
  render() {
      return (<div className="note-item">
               <p>{this.state.content}</p>
               <p>{this.state.date}</p>
               <a href="#" onClick={this.handleEdit}>编辑</a>
               <a href="#" onClick={this.handleDelete}>删除</a>
               <EditPanel item={this.state} onChange={this.handleChildChange}/>
             </div>
           )
  }
}
export default Note;
