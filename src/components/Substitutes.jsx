import React from "react";
import { connect } from "react-redux";

const Substitutes = ({substitutes, removeSubstitute}) => (
<section>
    <h2>Remplaçant</h2>
        <div className='field'>
            {
                substitutes.map(substitute => (
                <article className='substitute' key ={substitute.id}>
                        <div>
                            <img src={substitute.photo}></img>
                            <button onClick={()=>removeSubstitute(substitute)}>X</button>
                        </div>
                        <p> {substitute.name}</p>
                </article> 
                ))
            }
           
        </div>
</section>
)
const mapStateToProps = state =>{
    return{ 
        substitutes: state.substitutes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        removeSubstitute(substitute){
            dispatch({
                type : "REMOVE_SUBSTITUTE",
                substitute
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Substitutes)