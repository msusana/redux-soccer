import React, { useEffect, createRef } from "react"
import { connect } from "react-redux";

const Players = ({players, addTitular, addSubstitutes}) => { 
    const gridJugadores = createRef()

    useEffect(() => {
      setScrollContainer()
      document.addEventListener('click', setScrollContainer)
    }, []) 
    
    // Función que fija el tamaño del grid de los jugadores
    const setScrollContainer = (desktop = true) => {
      let container = gridJugadores.current
      if (container) {
        const generatedGrid = () => {
          let items = container.getElementsByClassName('player')
          let itemsLength = items.length
          let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1
  
          const getWidth = () => {
            let n = bp + (itemsLength > bp ? 0.3 : 0)
            return (itemsLength / n) * 100
          }
          return `
                  display: grid;
                  grid-template-columns: repeat(${itemsLength}, 225px);
                  grid-gap: 1rem;
                  width : ${getWidth()}%;
                `
        }
        let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
        container.setAttribute('style', styles)
      }
    }
return (<section>
    <h1>Joueurs</h1>
        <div className='contenedor-players'>
            <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
            {
                players.map(player => (
                <article className='player' key={player.id}>
                    <img src={player.photo}></img>
                    <h3>{player.name}</h3>
                        <div>
                            <button className='playerTitular1' onClick={() => addTitular(player)}>Titulaire</button>
                            <button className='playerTitular2' onClick = {() => addSubstitutes(player)}>Remplaçant</button>
                        </div>
                </article> 
                ))
            }
           </div>
        </div>
</section>
)}
const mapStateToProps = (state) =>{
    return {
        players: state.players
     }
}
const mapDispatchToProps = dispatch => {
    return {
    addTitular(player){
        dispatch({
            type: 'ADD_TITULAR',
            player
        })
    },
    addSubstitutes(player){
        dispatch({
            type: 'ADD_SUBSTITUTE',
            player
        })
    }    

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players)