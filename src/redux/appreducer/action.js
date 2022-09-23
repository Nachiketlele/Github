import axios from "axios"
import { GETDETAILS_ERROR, GETDETAILS_REQUEST, GETDETAILS_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./action.type"


export let getDatas = (value) => (dispatch) =>{
    dispatch({type:GETDETAILS_REQUEST})

    return axios.get(`https://api.github.com/users/${value}`)
    
    .then((r)=>{
        dispatch({type:GETDETAILS_SUCCESS,payload:r.data})
        console.log(r)
    })
    .catch((e)=>{
        dispatch({type:GETDETAILS_ERROR})
    })
}
export let getdatarepos = (value,page) =>(dispatch) =>{
    dispatch({type:GET_REQUEST})

    return axios.get(`https://api.github.com/users/${value}/repos`)
    
    .then((r)=>{
        dispatch({type:GET_SUCCESS,payload:r.data})
        console.log(r)
    })
    .catch((e)=>{
        dispatch({type:GET_ERROR})
    })
}






