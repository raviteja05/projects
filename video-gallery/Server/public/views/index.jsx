import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
 
    
    render(){
    var response=this.props.data
    return <div>{response}</div>
    }
}

export default App;