import React from "react";
import { connect } from "react-redux";
import {fetchData, fetchTeam} from '../redux/actions/team'
 

const Search = ({team, getData}) => {

let search
const onChange = (event) => {
    console.log(search)
    return search = event.target.value
  };
const onSearch = () =>{
    console.log(search)
   let inputSearch = document.querySelector('.inputSearch')
   inputSearch.value = " "
     getData(search)
    search = ""
 
 
} 
return(


<section >
    <div className='search'>
        <input placeholder="team" onChange={(e)=>onChange(e)} className='inputSearch'/>            
        <button type="submit" onClick={()=>onSearch()} className='buttonSearch'>Search team</button> 
    </div>
    <div className='logo'>
        <h1>{team.name}</h1>  
        <img src={team.logo} />  
    </div>
</section>
)}
const mapStateToProps = state =>{
    return{
        team: state.team,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getData: (team)=> dispatch(fetchData(team)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)