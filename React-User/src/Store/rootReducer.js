import { combineReducers } from "redux"
import pagereducer from './API/reducer'

const rootReducer=combineReducers({
    pagesManage:pagereducer,
})

export default rootReducer;