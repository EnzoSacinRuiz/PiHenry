import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_BY_NAME="GET_BY_NAME"
export const SORT_USERS="SORT_USERS"
export const SORT_ALPHABETICALLY = "SORT_ALPHABETICALLY";


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

  // New action creator for sorting users
export function sortUsers(order) {
  return (dispatch, getState) => {
    const { allUsers } = getState(); // Replace with your actual state structure
    const sortedUsers = order === "asc" ? sortByAgeAsc(allUsers) : sortByAgeDesc(allUsers);
    dispatch({
      type: "SORT_USERS",
      payload: sortedUsers,
    });
  };
}

// Helper functions for sorting
function sortByAgeAsc(drivers) {
  return drivers.slice().sort((a, b) => {
    const ageA = calculateAge(a.birthDate);
    const ageB = calculateAge(b.birthDate);
    return ageA - ageB;
  });
}

function sortByAgeDesc(drivers) {
  return drivers.slice().sort((a, b) => {
    const ageA = calculateAge(a.birthDate);
    const ageB = calculateAge(b.birthDate);
    return ageB - ageA;
  });
}

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
}
  
export function sortAlphabetically(order) {
  return {
    type: SORT_ALPHABETICALLY,
    payload: order,
  };
}
