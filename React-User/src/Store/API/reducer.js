import { ALLDATA } from "./actionTypes";

const pageReducer = (state = [], action) => {
  switch (action.type) {
    case ALLDATA:
      return [
        ...state,
        action.payload ,
      ];  
    default:
      return state;
  }
};

export default pageReducer;
