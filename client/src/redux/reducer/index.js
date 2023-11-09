import { GET_USERS,GET_BY_NAME,SORT_USERS,SORT_ALPHABETICALLY } from "../actions";

let initialState = {allUsers: [], usersCopy: [], teams: []}

function rootReducer(state = initialState, action){
    switch (action.type) {
    case GET_USERS:
        return{
        ...state,
        allUsers: action.payload,
        usersCopy: action.payload
        }
    case GET_BY_NAME:
        return{
            ...state,
            allUsers: action.payload
        };
    case SORT_USERS:
            return {
              ...state,
              allUsers: action.payload
            };
    case SORT_ALPHABETICALLY:
      const sortedData = state.allUsers.slice().sort((a, b) => {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      return {
        ...state,
        allUsers: sortedData,
      };

        default: 
            return state

    }
}

export default rootReducer; 