import  { ADD, DELETE } from "../types";

export const ADD_BOOK = (payload)=>{
    return{
        type: ADD,
        payload,
    }
}

export const DELETE_BOOK= (payload)=>{
    return {
        type: DELETE,
        payload,
    }
}
