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
            return response.json()
        }).then(async(data) => {
            let teamIdtest = data.response[0].team.id
       
            await dispatch(fetchTeam(teamIdtest.toString()))
        }).catch((err) => 
            dispatch(getDataFailure())
        );
        
    }
}
export const fetchTeam = (idTeam) => {
    console.log('idteam', idTeam)
    return (dispatch) => {

         
        return fetch( `https://v3.football.api-sports.io/players/squads?team=${idTeam}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key":KEYAPI ,
                "x-rapidapi-host": "v3.football.api-sports.io"
            }
        })
        .then((response)  => {
            return response.json()
        }).then((data) => {
            dispatch(getDataSuccess(data))

        })
        .catch((err) => 
            dispatch(getDataFailure())
        ); 
            
        
    }
}
