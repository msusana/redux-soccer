// import { initialState } from './dataTeams'


// export const dataReducer = (state = initialState, action) => {
//     console.log(action.type)
//     switch (action.type){
//         case "FETCHING_DATA":{
//             return{
//               ...state, 
//             players: [],
//             team : [],
//             isFetching : true
//             }
//         }
//         case "FETCHING_DATA_SUCCESS":{
//           return{
//               ...state, 
//               players: state.players.concat(action.data.response[0].players),
//               team : state.players.concat(action.data.response[0].team),
//             isFetching : false
//           }
//         }  
//         case "FETCHING_DATA_FAILURE":{
//             return{
//                 ...state, 
//              isFetching: false, 
//              error : true
//             }
//           } 
//         case "GETTING_TEAM_ID":{
//           let newState;
//           console.log("COUCOU = ", action.data);
//             newState = {
//                 ...state, 
//                 isFetching: false, 
//                 teamId: action.data
//             }
//             console.log("new State ", newState);
//             return newState
//         }   
//         default:
//           return state
// }
// }