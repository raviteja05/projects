import React from 'react';
import {connect} from 'react-redux'
import {currentVideo,getTree} from '../actions'
import Item from './Item'



class AccordianList extends React.Component{
    componentDidMount(){
        this.props.getTree();
        
    }
    click(name,index){
        

        document.querySelectorAll('div.title:not(#list-title'+index+')').forEach(el=>el.className="title")
        document.querySelectorAll('div.content:not(#list-content'+index+')').forEach(el=>el.className="content")
    

        document.querySelector('#list-title-'+index).className="title active"
        document.querySelector('#list-content-'+index).className="content active"
        this.props.getTree(name);
       
    }

 render(){
    
    
   const content= this.props.appData.tree.tree?
    this.props.appData.tree.tree.data.map((el,index)=>(<div className="ui grid accordion menu" key={index} onClick={(ev)=>{this.click(el,index)}} >
    
    <div className="title" id={'list-title-'+index}>
    <i className="dropdown icon"></i>
     {el}    </div>
    <div className="content" id={'list-content-'+index}>
   
   {this.props.appData.tree.treeData?this.props.appData.tree.treeData[el]?this.props.appData.tree.treeData[el].data.map((data,index)=><Item index={index} key={'item'+index} item={data}/>):<div></div>:<div></div>}
  </div>
    </div>
   
  )):<div></div>
  return (
    
<div>{content}</div>
  )
}
}

const  mapStateToProps = (state) => ({
  appData: state
  
  
});


export default connect(mapStateToProps,{currentVideo,getTree})(AccordianList);
