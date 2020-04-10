import React from 'react';
import {Grid} from './components'
import {connect} from 'react-redux'
import {defaultData,currentVideo,loadPage} from './actions'


class App extends React.Component{


 
  render(){
  
    return <div><Grid/></div>
  }
}


const  mapStateToProps = (state) => ({
  appData: state
  
});


export default connect(mapStateToProps,{defaultData,currentVideo,loadPage})(App);
