import {FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../constants'


const URL = "https://v3.football.api-sports.io/players/squads?id="
const KEYAPI = "c9a0cf4cd830ec682a75bbb5dc39f16a"

export default () => {
    return 
}
export const getData = () => {
    return {
        type : 'FETCHING_DATA'
    }
}
export const getDataSuccess = (data) => {
    return {
        type : 'FETCHING_DATA_SUCCESS',
        data
    }
}
export const getTeamId = (data) => {
    return {
        type : 'GETTING_TEAM_ID',
        data
    }
}
export const getDataFailure = () => {
    return {
        type : 'FETCHING_DATA_FAILURE'
    }
}

export const fetchData = (teamSearch) => {
    return (dispatch) => {

    dispatch(getData())
       
        return fetch( `https://v3.football.api-sports.io/teams?name=${teamSearch}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key":KEYAPI ,
                "x-rapidapi-host": "v3.football.api-sports.io"
            }
        })
        .then((response, json) => {
            console.log(response)
            return response.json()
        }).then((data)=> {
            console.log(data);
            dispatch(getTeamId(data))


        })
        
    }
}
export const fetchTeam = (idTeam) => {
    return (dispatch) => {

         
        return fetch( `https://v3.football.api-sports.io/players/squads?team=${idTeam}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key":KEYAPI ,
                "x-rapidapi-host": "v3.football.api-sports.io"
            }
        })
        .then((response, json) => {
            console.log(response)
            return response.json()
        }).then((data)=> {
            console.log(data);
            dispatch(getDataSuccess(data))

        })
        .catch((err) => 
            console.error(err))
        
    }
}

