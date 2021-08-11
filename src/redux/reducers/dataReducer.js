import { initialState } from './dataTeams'


export const dataReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type){
        case "FETCHING_DATA":{
            return{
              ...state, 
            players: [],
            team : [],
            isFetching : true
            }
        }
        case "FETCHING_DATA_SUCCESS":{
          return{
              ...state, 
              players: action.data.response[0].players,
              team : action.data.response[0].team,
            isFetching : false
          }
        }  
        case "FETCHING_DATA_FAILURE":{
            return{
                ...state, 
             isFetching: false, 
             error : true
            }
          } 
        case "GETTING_TEAM_ID":{
            return{
                ...state, 
                isFetching: false, 
                teamId: action.data.response[0].team.id
            }
        }   
        default:
          return state
}
}