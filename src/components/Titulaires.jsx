import React from "react";
import { connect } from "react-redux";
import field from "../field.svg"

const Titulaires = ({titulares, removeTitular}) => (
<section>
    <h2>Titulaires</h2>
        <div className='field'>
            {
                titulares.map(titular => (
                <article className='titular' key = {titular.id}>
                        <div>
                            <img src={titular.photo}></img>
                            <button className='titularButton' onClick={()=> removeTitular(titular)}>X</button>
                        </div>
                </article> 
                ))
            }
           <img src={field} />
        </div>
</section>
)
const mapStateToProps = state =>{
    return{
        titulares: state.titulares
    }
}
const mapDispatchToProps = dispatch => {
    return{
        removeTitular(titular){
            dispatch({
                type : "REMOVE_TITULAR",
                titular
            })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Titulaires)