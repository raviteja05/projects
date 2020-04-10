import React from 'react';``
export class Grid extends React.Component{
    render(){
        return (<React.Fragment>
            <div className="ui internally celled grid">
                <PageRow data={this.props.data} currentVideo={this.props.currentVideo}/>

            </div>
        </React.Fragment>)
    }
}
export class PageRow extends React.Component{
    render(){
        return (
            <React.Fragment>
                <div className="row">
                    
                    <TenWidePageColumn currentVideo={this.props.currentVideo}/>
                    
                    
                    <ThreeWidePageColumn data={this.props.data}/>
                        

                </div>
            </React.Fragment>
        )
    }
}

export class TenWidePageColumn extends React.Component{
    render(){
        
        return (
            
            <React.Fragment>
                <VideoPlayer data={this.props.currentVideo}/>
            </React.Fragment>
        )
    }
}

export class VideoPlayer extends React.Component{
    constructor(props){
        super(props);     
       
       

    }
    render(){
        
        var currentVideo=this.props.data;
        
        
        
        console.log(this.state);
       return  <React.Fragment>
            <div className="ten wide column">
                <video width="700" id="video" src={this.state.data.path} controls/>
            </div>
       </React.Fragment>

    }
}
export class ThreeWidePageColumn extends React.Component{
    render(){
        
        return (
            <React.Fragment>
                <div className="three wide column">
                <VideoList data={this.props.data}/>

                </div>
            </React.Fragment>
        )
    }
}
export class VideoList extends React.Component{
    render(){
       
        return (

            <React.Fragment>
                <div className="ui celled list">
                        {this.props.data.map(item=><Item data={item} key={item.name}/>)}

                </div>
            </React.Fragment>
        )
    }
}
export class Item extends React.Component{
    
    click(){
        var response=this.props.data;
        console.log(this.state);
      this.setState({response})
    }
    render(){
        
        
        return (
            <React.Fragment>
                <div className="item">
                <img className="ui avatar image" src="/images/avatar/small/helen.jpg"/>
                      <div className="content">
                        <div className="header"><button onClick={this.click()}>{this.props.data.name}</button></div>
                        
                      </div>

                </div>
            </React.Fragment>
        )
    }
}