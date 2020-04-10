import React from 'react';
import {connect} from 'react-redux'
import {defaultData,currentVideo} from '../actions'



class VideoPlayer extends React.Component{
  
  
  
  render(){
  return (<div>
    {this.props.appData.currentVideo.currentVideo?<video width="750" id="video" src={this.props.appData.currentVideo.currentVideo.path}  controls/>:
    this.props.appData.data.data?<video width="750" id="video" src={this.props.appData.data.data.data[0].path}  controls/>:
    <div className="ui text loader">Loading</div>}
    </div>)
  }
}

const  mapStateToProps = (state) => ({
  appData: state
  
});


export default connect(mapStateToProps,{defaultData,currentVideo})(VideoPlayer);
