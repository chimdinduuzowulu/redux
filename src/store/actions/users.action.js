import  { ADD, DELETE } from "../types";

export const ADD_USER = (payload)=>{
    return{
        type: ADD,
        payload,
    }
}

export const DELETE_USER = (payload)=>{
    return {
        type: DELETE,
        payload,
    }
}
