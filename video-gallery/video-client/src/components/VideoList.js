import React from 'react';
import {connect} from 'react-redux'
import {defaultData,loadPage} from '../actions'
import Item from './Item'

class VideoList extends React.Component{  
  componentDidMount(){
   
    if(this.props.appData.data.data)this.props.currentVideo(this.props.appData.data.data.data[0])
  
  }
  
  loadMore(ev,num){
    ev.preventDefault();
    num=num+1;
    document.querySelectorAll("i:not(.film):not(.orange)").forEach(el=>{el.className=""})
    this.props.loadPage(num);
    this.props.defaultData(num,15,"videos")
  }

  loadPrevious(ev,num){
    ev.preventDefault();
    num=num-1;
    document.querySelectorAll("i:not(.film):not(.orange)").forEach(el=>{el.className=""})
    this.props.loadPage(num);
    this.props.defaultData(num,15,"video")
  }
  
  render(){
    

  return (<div className="ui celled list" >
    {this.props.appData.currentPage.currentPage>1?<a href="/" onClick={(ev)=>{this.loadPrevious(ev,this.props.appData.currentPage.currentPage)}}><i className="orange arrow alternate circle left outline icon"></i><b>Load Previous</b></a>:<p></p>}
  {this.props.appData.data.data?this.props.appData.data.data.data.map((item,index)=><Item item={item} index={index} key={index}/>):<div className="ui text loader">Loading</div>}
  <a href="/" onClick={(ev)=>{this.loadMore(ev,this.props.appData.currentPage.currentPage)}}><i className="orange arrow alternate circle right outline icon"></i><b>Load Next</b></a>
</div>)
  }
}

const  mapStateToProps = (state) => ({
  appData: state
  
}); 


export default connect(mapStateToProps,{defaultData,loadPage})(VideoList);
