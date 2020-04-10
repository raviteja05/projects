import React from 'react';
import ReactDOM from 'react-dom';
import {Grid} from './components'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={data:this.props.data[0]};
    }
    
    render(){
    var response=this.props.data;
    
    return (<React.Fragment>
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"/>
        <Grid data={response} currentVideo={this.state}/>
        </React.Fragment>)
    }
}

export default App;