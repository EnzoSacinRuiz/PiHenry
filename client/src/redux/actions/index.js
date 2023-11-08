import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_BY_NAME="GET_BY_NAME"

export function getUsers(){
    return async function(dispatch){
        const response = await axios("http://localhost:3001/drivers");
        return dispatch({
            type:"GET_USERS",
            payload:response.data
        });
    };
}

export function getByName(name) {
    return async function (dispatch) {
      // Capitalize the first letter of the name
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
  
      const response = await axios(`http://localhost:3001/drivers?name=${capitalizedName}`);
      return dispatch({
        type: "GET_BY_NAME",
        payload: response.data
      });
    };
  }
  