import {combineReducers} from 'redux'

export const data=(state={},action)=>{
    
    if(action.type==='FETCH_VIDEOS'){
        
        return {...state,data:action.payload}
    }
    return state;
}
export const currentVideo=(state={},action)=>{
    if(action.type==='CURRENT_VIDEO'){
        
        return {...state,currentVideo:action.payload}
    }
    return state;
}
export const tree=(state={},action)=>{
    if(action.type==='GET_TREE'){
        
        return {...state,tree:action.payload}
    }
    if(action.type==='TREE_DATA'){
        return {...state,treeData:action.payload}
    }
    return state;
}


export const currentPage=(state={},action)=>{
   
    if(action.type==='CURRENT_PAGE'){
        
        return {...state,currentPage:action.payload}
    }
    return state;
}
const reducers=combineReducers({data,currentVideo,currentPage,tree})

export default reducers;