import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_BY_NAME="GET_BY_NAME"

export function getUsers(){
    return async function(dispatch){
        const response = await axios("http://localhost:5000/drivers");
        return dispatch({
            type:"GET_USERS",
            payload:response.data
        });
    };
}

export function getByName(name){
    return async function(dispatch){
        const response = await axios(`http://localhost:5000/drivers?name.forename=${name}`);
        return dispatch({
            type:"GET_BY_NAME",
            payload:response.data
        });
    };
}