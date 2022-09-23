import { localdata, saveddata } from "../../utils/localstorage"
import { ADDDETAILS_ERROR, ADDDETAILS_REQUEST, ADDDETAILS_SUCCESS, DELETE, GETDETAILS_ERROR, GETDETAILS_REQUEST, GETDETAILS_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./action.type"


let initialState = {
    loading: false,
    error: false,
    data: localdata("data")||[],
    repo: []
}

export const appreducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case GETDETAILS_REQUEST:{
            return {...state, loading:true}
        }
        case GETDETAILS_SUCCESS:{
            saveddata("data",payload)
            return {...state, data:payload, loading:false}
        }
        case GETDETAILS_ERROR:{
            return {...state, error:true, loading:false}
        }
        case GET_REQUEST:{
            return {...state, loading:true}
        }
        case GET_SUCCESS:{
            return {...state, repo:payload, loading:false}
        }
        case GET_ERROR:{
            return {...state, error:true, loading:false}
        }
    //     case DELETE:{
    //         let details = state.data.filter((el)=>
    //         {if(el.id!==payload){
    //            return el
    //         }})
    //         return {...state,data:details}
    //    }
        default:{
            return state
        }
    }
}