import { createStore, applyMiddleware, combineReducers } from "redux";
import  {dataTeams} from "../reducers/dataTeams";
//import {dataReducer} from "../reducers/dataReducer";
import thunk from "redux-thunk"; 



// const rootReducer = combineReducers({
//     dataTeam: dataTeams,
//     dataApi : dataReducer
// })
const store = createStore(dataTeams, applyMiddleware(thunk), window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
 
export default store;

