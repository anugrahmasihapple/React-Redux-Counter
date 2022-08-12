import { combineReducers } from "redux";
import Reducers from "./reducers/Reducers";



const rootReducer = combineReducers({
          count: Reducers
})


export default rootReducer;