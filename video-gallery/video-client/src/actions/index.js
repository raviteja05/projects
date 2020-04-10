import axios from 'axios';

export const defaultData=(pageNo,nrpp,collection)=>{
    return async (dispatch)=>{
        const response= await axios.get('/videos',{params:{pageNo:pageNo,nrpp:nrpp,collection:collection}});
        dispatch({type:'FETCH_VIDEOS',payload:response});
    }
}

export const getTree=(data)=>{
    return async (dispatch)=>{
        if(!data){
        const response= await axios.get('/tree',{});
        dispatch({type:'GET_TREE',payload:response});
        }
        else{
            const response= await axios.get('/tree',{params:{dir:data}});
           
            dispatch({type:'TREE_DATA',payload:{[data]:response}});
        }
    }
}

export const currentVideo=(currentVideo)=>{
    return {type:'CURRENT_VIDEO',payload:currentVideo}
}
export const loadPage=(currentPage)=>{
    return {type:'CURRENT_PAGE',payload:currentPage}
}
export const activeLink=(activeLink)=>{
    return {type:'ACTIVE_LINK',payload:activeLink}
}