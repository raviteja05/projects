import React from 'react';
import {connect} from 'react-redux'
import {currentVideo} from '../actions'



class Item extends React.Component{

 

  click(ev,item,index){
    ev.preventDefault();
    this.props.currentVideo(item)
    document.querySelectorAll("i:not(.film):not(.dropdown):not(#bullet"+index+"):not(.orange)").forEach(el=>{el.className=""})
    document.querySelector("#bullet"+index).className="green angle double right icon"
    
    
  }
  
  render(){
   
  return ( <div className="item">
  <i className="film icon"></i>
        <div className="content">
          <div className="header"><i id={`bullet${this.props.index}`} className=""/><a href={this.props.item.path} onClick={(ev)=>this.click(ev,this.props.item,this.props.index)}>{this.props.item.name}</a></div>
          
        </div>

  </div>)
  }
}

const  mapStateToProps = (state) => ({
  appData: state
  
  
});


export default connect(mapStateToProps,{currentVideo})(Item);
