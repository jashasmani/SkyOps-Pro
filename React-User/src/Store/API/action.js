import { ALLDATA} from "./actionTypes";

export const alldata = (alldata,flightdata) => ({
  type: ALLDATA,
  payload: {alldata,flightdata},
});
