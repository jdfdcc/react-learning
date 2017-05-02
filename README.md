## 本地调试步骤：
```
1.clone repos
2.cd repos
3.npm install
4.npm start
```
这个版本纯粹的用了react的props和state完成了两个父子组件之间的双向信息传递:便签组件(Note)包含一个编辑便签(EditPanel)的子组件
```javascript
//主要代码：
import React,{Component} from 'react';
import { render } from 'react-dom';
class EditPanel extends Component{ //子组件
  constructor(props){
     super(props);
     this.state=this.props.item;//通过props初始化编辑便签子组件的state
     this.handleEditFinish=this.handleEditFinish.bind(this);
  }
  handleEditFinish(e){    
    var date=new Date();
    var newState={
      content:e.target.previousSibling.value,
      date:date.toLocaleDateString()     
    } 
    this.props.onChange(newState);//回调函数传递参数给父组件
  }
  render(){
     return(
         <div className="edit-panel" style={{display:this.props.item.edit?"block":"none"}}>//子组件的显示由父组件控制
           <textarea  cols="30" rows="10" defaultValue={this.state.content} /> 
           <a href="#" onClick={this.handleEditFinish}>完成</a>
         </div>
       )
  }
}

class Note extends Component{ //父组件
  constructor(props){
     super(props);
     this.state={
          content:this.props.content,
          date:this.props.date,
          edit:false
     }
     this.handleEdit=this.handleEdit.bind(this);
     this.handleDelete=this.handleDelete.bind(this);
     this.handleChildChange=this.handleChildChange.bind(this); //监听子组件变化
  }
  handleChildChange(newState){ //处理子函数传回来的state,改变自身的state
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
```
调用组件方式：
```javascript
import React from 'react';
import { render } from 'react-dom';
import Note from './component/Note';
render(<div>
	     <Note content="测试便签一号" date="2017-5-1"/>
	     <Note content="测试便签二号" date="2017-5-1"/>
	     <Note content="测试便签三号" date="2017-5-1"/>
	     <Note content="测试便签四号" date="2017-5-1"/>
       </div>,document.getElementById('app'))
```
主要的思想其实还是回调函数的利用
