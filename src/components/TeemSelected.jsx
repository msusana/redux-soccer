import React from "react";
import Substitutes from "./Substitutes";
import Titulaires from "./Titulaires"

const TeemSelected = ({players}) => (
    <section>
        <Substitutes />
        <Titulaires />
    </section>
)

export default TeemSelected
// import { connect } from "react-redux";
// const TeemSelected = ({players}) => (
//     <section>{
        
//       players.map(player => (
//                 <article className='player' key={player.id}>
//                     <img src={player.photo}></img>
//                     <h3>{player.name}</h3>
//                         <div>
//                             <button className='playerTitular1' >Titulaire</button>
//                             <button className='playerTitular2' >Remplaçant</button>
//                         </div>
//                 </article> 
//                 ))}
//     </section>
// )


// const mapStateToProps = (state) =>{
//     console.log(state.dataTeam.players)
//     return {
//         players : state.dataTeam.players
//      }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//     addTitular(player){
//         dispatch({
//             type: 'ADD_TITULAR',
//             player
//         })
//     },
//     addSubstitutes(player){
//         dispatch({
//             type: 'ADD_SUBSTITUTE',
//             player
//         })
//     }    

//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TeemSelected)