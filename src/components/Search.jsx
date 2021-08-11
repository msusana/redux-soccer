import React from "react";
import { connect } from "react-redux";
import {fetchData, fetchTeam} from '../redux/actions/team'
 

const Search = ({team, getData, getTeam, idTeam}) => {

let search
const onChange = (event) => {
    console.log(event.target.value);
    return search = event.target.value
  };
const onSearch = async() =>{
    console.log(search)
    // await getData(search)
    // await getTeam(idTeam)
} 
return(


<section>
    <input placeholder="team" onChange={(e)=>onChange(e)} value={search} />            
    <button type="submit" onClick={()=>onSearch()} >Search team</button> 
    <h1>{team.name}</h1>    
</section>
)}
const mapStateToProps = state =>{
    return{
        team: state.dataTeam.team,
        idTeam: state.dataApi.teamId
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getData: (team)=> dispatch(fetchData(team)),
        getTeam: (idTeam)=> dispatch(fetchTeam(idTeam))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)