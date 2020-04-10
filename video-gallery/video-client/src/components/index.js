import React from 'react'
import VideoPlayer from './VideoPlayer'
import AccordianList from './AccordianList'


export const Grid=()=>{
    return (<div className="ui internally celled grid">
                <div>LOGO</div>
                <PageRow />

    </div>);
}
export const PageRow=()=>{
    return(
        <div className="row">
                    
        <TenWidePageColumn/>
        
        
        <ThreeWidePageColumn />
            

    </div>
    )
}
export const TenWidePageColumn=()=>{
    
        return (
            
            <div className="ten wide column">
                <VideoPlayer />
           </div>
        )
    }


export const ThreeWidePageColumn =()=>{
    
        
        return (
            
                <div className="six wide column" style={{"overflowY":"scroll","height":"600px"}}>
                {/* <VideoList/> */}
                <AccordianList/>

                </div>
            
        );
   
}

